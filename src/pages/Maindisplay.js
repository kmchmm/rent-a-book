import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';

function Maindisplay() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1); 
    const [totalPages, setTotalPages] = useState(1);  

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books?page=${currentPage}`)
            .then(res => {
                if (res.data.status === 200) {
                    setBooks(res.data.books.data); 
                    setTotalPages(res.data.books.last_page); 
                } else {
                    console.log('No books found.');
                }
            })
            .catch(error => {
                console.log('Error fetching books:', error);
            });
    }, [currentPage]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const deleteBook = (e, id) => {
        e.preventDefault();
        const thisClicked = e.currentTarget;
        thisClicked.innerText = 'Deleting...';

        axios.delete(`http://localhost:8000/api/books/${id}/delete`)
            .then(res => {
                if (res.data.status === 200) {
                    alert(res.data.message);
                    setBooks(books.filter(book => book.id !== id)); 
                } else {
                    thisClicked.innerText = 'Delete';
                    alert('Error: ' + res.data.message);
                }
            })
            .catch(err => {
                thisClicked.innerText = 'Delete';
                console.log('Error deleting book:', err);
            });
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const filteredBooks = books.filter(book =>
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.published.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.format.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='rent-a-book-container container-fluid'>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <Link to="/create-books" className='btn btn-primary float-end'>Create Book</Link>
                            </div>
                            <div className="card-body">
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search by author, published, publisher, or format"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                </div>
                                <div className="table-responsive">
                                    <table className="table">
                                        <tbody>
                                            {filteredBooks.length > 0 ? (
                                                filteredBooks.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className='table-handler container'>
                                                            <div>
                                                                <Link to={`/${item.id}/view`} className='book-title'>
                                                                    <h3>{item.title}</h3>
                                                                </Link>
                                                            </div>
                                                            <div className='background d-flex justify-content-between align-items-center'>
                                                                <div style={{ width: '300px', height: 'auto', objectFit: 'contain' }}>
                                                                    {item.image && <img src={`http://localhost:8000/storage/${item.image}`} alt={item.title} style={{ width: '200px', height: 'auto', objectFit: 'contain' }} />}
                                                                </div>
                                                                <div>
                                                                    <div className='d-flex flex-column justify-content-center'>
                                                                        <div className='d-flex padding-author pt-2'><span className='fw-bold'>Author:</span> <span>{item.author}</span></div>
                                                                        <div className='d-flex padding-author'><span className='fw-bold'>Published:</span> {item.published}</div>
                                                                        <div className='d-flex padding-author'><span className='fw-bold'>Publisher:</span> {item.publisher}</div>
                                                                        <div className='d-flex padding-author'><span className='fw-bold'>Format:</span> {item.format}</div>
                                                                        <div className='d-flex padding-author'><span className='fw-bold'>ISBN 13:</span> {item.random_number_13}</div>
                                                                        <div className='d-flex padding-author'><span className='fw-bold'>ISBN 10:</span> {item.random_number_10}</div>
                                                                        <div className='d-flex justify-content-end mt-5 mb-2'>
                                                                            <Link to={`/${item.id}/edit`} className='btn btn-success me-2 custom-width'>Edit</Link>
                                                                            <button type='button' onClick={(e) => deleteBook(e, item.id)} className='btn btn-danger custom-width'>Delete</button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="5">No books found.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="pagination-controls">
                                    <button
                                        onClick={handlePreviousPage}
                                        disabled={currentPage === 1}
                                        className="btn btn-secondary me-2"
                                    >
                                        Previous
                                    </button>
                                    <span>Page {currentPage} of {totalPages}</span>
                                    <button
                                        onClick={handleNextPage}
                                        disabled={currentPage === totalPages}
                                        className="btn btn-secondary ms-2"
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Maindisplay;