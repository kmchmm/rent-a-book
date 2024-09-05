import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function Bookedit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [inputErrorList, setInputErrorList] = useState({});
  const [books, setBooks] = useState({
    author: '',
    published: '',
    publisher: '',
    format: '',
    title: '',
    image: null,
    random_number_13: '',
    random_number_10: '',
  });
  const [currentImage, setCurrentImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/books/${id}/edit`);
        const bookData = response.data.book || {};
  
        setBooks({
          author: bookData.author || '',
          published: bookData.published || '',
          publisher: bookData.publisher || '',
          format: bookData.format || '',
          title: bookData.title || '',
          random_number_13: bookData.random_number_13 || '',
          random_number_10: bookData.random_number_10 || '',
          image: null, 
        });
  
        setCurrentImage(bookData.image ? `http://localhost:8000/storage/${bookData.image}` : null);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          alert('Book not found');
        } else {
          console.error('Error fetching book data:', error);
          setError('Failed to fetch book data');
        }
      }
    };
  
    fetchBookData();
  }, [id]);

  const handleInput = async (e) => {
    const { name, value, files } = e.target;
  
    if (name === 'image' && files[0]) {
      const reader = new FileReader();
      reader.onloadend = () => {

        setBooks(prevBooks => ({
          ...prevBooks,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(files[0]);
  

      const objectUrl = URL.createObjectURL(files[0]);
      setCurrentImage(objectUrl);  
    } else {
      setBooks(prevBooks => ({
        ...prevBooks,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    try {
      let imageUrl = currentImage; 
  
      if (books.image && typeof books.image === 'string') {
        imageUrl = books.image;  
      } else {

        imageUrl = currentImage ? currentImage.split('/storage/')[1] : null;
      }
  
      const bookData = {
        author: books.author,
        published: books.published,
        publisher: books.publisher,
        format: books.format,
        title: books.title,
        random_number_13: books.random_number_13,
        random_number_10: books.random_number_10,
        ...(books.image && { image: imageUrl }), 
      };
  
      const response = await axios.put(`http://localhost:8000/api/books/${id}/edit`, bookData, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.status === 200) {
        alert(response.data.message || 'Book updated successfully');
        navigate('/books');
      }
    } catch (error) {
      if (error.response) {
        const { status, data } = error.response;
        console.error('Error response:', data);
        console.error('Error status:', status);
  
        if (data.errors) {
          setInputErrorList(data.errors);
        } else {
          alert(data.message || 'Validation error');
        }
      } else {
        console.error('Error:', error);
        alert('Error occurred while updating the book');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rent-a-book-container">
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>Edit Book
                  <Link to="/books" className='btn btn-danger float-end'>Back</Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label>Author</label>
                    <input
                      type="text"
                      value={books.author}
                      onChange={handleInput}
                      name="author"
                      className="form-control"
                    />
                    <span className="text-danger">{inputErrorList.author}</span>
                  </div>
                  <div className="mb-3">
                    <label>Published</label>
                    <input
                      type="text"
                      value={books.published}
                      onChange={handleInput}
                      name="published"
                      className="form-control"
                    />
                    <span className="text-danger">{inputErrorList.published}</span>
                  </div>
                  <div className="mb-3">
                    <label>Publisher</label>
                    <input
                      type="text"
                      value={books.publisher}
                      onChange={handleInput}
                      name="publisher"
                      className="form-control"
                    />
                    <span className="text-danger">{inputErrorList.publisher}</span>
                  </div>
                  <div className="mb-3">
                    <label>Format</label>
                    <input
                      type="text"
                      value={books.format}
                      onChange={handleInput}
                      name="format"
                      className="form-control"
                    />
                    <span className="text-danger">{inputErrorList.format}</span>
                  </div>
                  <div className="mb-3">
                    <label>Title</label>
                    <input
                      type="text"
                      value={books.title}
                      onChange={handleInput}
                      name="title"
                      className="form-control"
                    />
                    <span className="text-danger">{inputErrorList.title}</span>
                  </div>
                  <div className="mb-3">
                    <label>Image</label>
                    {currentImage && (
                      <div className="mb-2">
                        <img src={currentImage} alt="Current" width="100" />
                      </div>
                    )}
                    <input
                      type="file"
                      onChange={handleInput}
                      name="image"
                      className="form-control"
                    />
                    <span className="text-danger">{inputErrorList.image}</span>
                  </div>
                  <div className="mb-3">
                    <label>ISBN 13</label>
                    <input
                      type="text"
                      value={books.random_number_13}
                      readOnly
                      name="random_number_13"
                      className="form-control"
                    />
                    <span className="text-danger">{inputErrorList.random_number_13}</span>
                  </div>
                  <div className="mb-3">
                    <label>ISBN 10</label>
                    <input
                      type="text"
                      value={books.random_number_10}
                      readOnly
                      name="random_number_10"
                      className="form-control"
                    />
                    <span className="text-danger">{inputErrorList.random_number_10}</span>
                  </div>
                  <div className="mb-3">
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      {loading ? 'Updating...' : 'Update Book'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bookedit;