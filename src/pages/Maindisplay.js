import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../App.css'

function Maindisplay() {
    const [books, setBooks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/books')
            .then(res => {
                console.log('Books data:', res.data.books);
                setBooks(res.data.books);
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 404) {
                        console.log('No books found.');
                    } else {
                        console.log('An error occurred while fetching books.');
                    }
                } else {
                    console.log('An error occurred while fetching books.');
                }
            });
    }, []);

    const deleteBook = (e, id) => {
        e.preventDefault();
    
        const thisClicked = e.currentTarget;
        thisClicked.innerText = 'Deleting...';
    
        axios.delete(`http://localhost:8000/api/books/${id}/delete`)
            .then(res => {
                alert(res.data.message);
                thisClicked.closest('.table-handler').remove();
            })
            .catch(function (error) {
                if (error.response) {
                    if (error.response.status === 404) {
                        alert(`The book with id ${id} was not found.`);
                        thisClicked.innerText = 'Delete';
                    }
                    if (error.response.status === 500) {
                        alert('An error occurred while deleting the book.');
                    }
                } else {
                    alert('An error occurred while deleting the book.');
                }
                thisClicked.innerText = 'Delete';
            });
    };
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredBooks = books.filter(book =>
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.published.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.format.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const bookDetails = filteredBooks.map((item, index) => {
        const imageUrl = item.image ? `http://localhost:8000/storage/${item.image}` : ''; 

        return (
            <tr key={index}>
                <td className='table-handler container'>
                    <div>
                        <Link to={`/${item.id}/view`} className='book-title'>
                            <h3>{item.title}</h3>
                        </Link>
                    </div>
                    <div className='background d-flex justify-content-between align-items-center'>
                        <div style={{ width: '300px', height: 'auto', objectFit: 'contain'}}>
                            {imageUrl && <img src={imageUrl} alt={item.title} style={{ width: '200px', height: 'auto', objectFit: 'contain' }} />} 
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

        );
    });

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
                                            {bookDetails}
                                        </tbody>
                                    </table>
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