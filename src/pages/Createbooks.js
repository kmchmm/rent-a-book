
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';

import '../App.css'

const generateRandomNumber13 = () => {
    return '9' + Math.random().toString().slice(2, 15);
};

const generateRandomNumber10 = () => {
    return '0' + Math.random().toString().slice(2, 12);
};

function Createbooks() {
    const navigate = useNavigate();
    const [inputErrorList, setInputErrorList] = useState({});
    const [books, setBooks] = useState({
        author: '',
        published: '',
        publisher: '',
        format: '',
        title: '',
        image: null, 
        random_number_13: generateRandomNumber13(), 
        random_number_10: generateRandomNumber10(), 
    });

    const handleInput = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setBooks({ ...books, [name]: files[0] }); 
        } else {
            setBooks({ ...books, [name]: value });
        }
    };

    const saveBooks = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('author', books.author);
        formData.append('published', books.published);
        formData.append('publisher', books.publisher);
        formData.append('format', books.format);
        formData.append('title', books.title);
        formData.append('image', books.image);
        formData.append('random_number_13', books.random_number_13);
        formData.append('random_number_10', books.random_number_10);

        axios.post('http://localhost:8000/api/books', formData)
            .then(res => {
                alert(res.data.message);
                navigate('/books');
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 422) {
                        setInputErrorList(error.response.data.errors);
                    }
                    if (error.response.status === 500) {
                        alert(error.response.data.message); 
                    }
                }
            });
    };

    return (
        <div className="rent-a-book-container">
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Create Book
                                    <Link to="/books" className='btn btn-danger float-end'>Back</Link>
                                </h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={saveBooks} encType="multipart/form-data"> 
                                    <div className="mb-3">
                                        <label>Author</label>
                                        <input type="text" value={books.author} onChange={handleInput} name="author" className="form-control" />
                                        <span className="text-danger">{inputErrorList.author}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label>Published</label>
                                        <input type="text" value={books.published} onChange={handleInput} name="published" className="form-control" />
                                        <span className="text-danger">{inputErrorList.published}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label>Publisher</label>
                                        <input type="text" value={books.publisher} onChange={handleInput} name="publisher" className="form-control" />
                                        <span className="text-danger">{inputErrorList.publisher}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label>Format</label>
                                        <input type="text" value={books.format} onChange={handleInput} name="format" className="form-control" />
                                        <span className="text-danger">{inputErrorList.format}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label>Title</label>
                                        <input type="text" value={books.title} onChange={handleInput} name="title" className="form-control" />
                                        <span className="text-danger">{inputErrorList.title}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label>Image</label>
                                        <input type="file" onChange={handleInput} name="image" className="form-control" />
                                        <span className="text-danger">{inputErrorList.image}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label>ISBN 13</label>
                                        <input type="text" value={books.random_number_13} readOnly name="random_number_13" className="form-control" />
                                        <span className="text-danger">{inputErrorList.random_number_13}</span>
                                    </div>
                                    <div className="mb-3">
                                        <label>ISBN 10 </label>
                                        <input type="text" value={books.random_number_10} readOnly name="random_number_10" className="form-control" />
                                        <span className="text-danger">{inputErrorList.random_number_10}</span>
                                    </div>
                                    <div className="mb-3">
                                        <button type="submit" className="btn btn-primary">Create Book</button>
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

export default Createbooks;