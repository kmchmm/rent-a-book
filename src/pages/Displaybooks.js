import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../App.css'

function DisplayBooks() {
    let { id } = useParams();
    const [book, setBook] = useState(null); // Use null initially to check if data is loaded

    useEffect(() => {
        axios.get(`http://localhost:8000/api/books/${id}/edit`)
            .then(res => {
                console.log(res);
                setBook(res.data.book);
            })
            .catch(err => {
                console.error("Error fetching book data:", err);
            });
    }, [id]);

    if (!book) {
        return <div>Loading...</div>;
    }

    // Build the image URL if the book has an image
    const imageUrl = book.image ? `http://localhost:8000/storage/${book.image}` : '';

    return (
        <div className="rent-a-book-container">
            <div className="container pt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="mb-5">  
                                <span className='fw-bold book-title'>{book.title}</span>
                                <Link to="/books" className='btn btn-danger float-end'>Back</Link>
                            </h3> 
                            <div className="d-flex justify-content-between background-view">
                                <div className="pb-5">
                                    {imageUrl && (
                                        <img src={imageUrl} alt={book.title} style={{ width: '300px', height: 'auto' }} />
                                    )}
                                </div>
                                <div className="d-flex flex-column mb-5 mt-3">
                                    <div className='d-flex justify-content-between'><span className='fw-bold pr-3'>Author:</span> {book.author}</div>
                                    <div className='d-flex justify-content-between'><span className='fw-bold pr-3'>Published:</span> {book.published}</div>
                                    <div className='d-flex justify-content-between'><span className='fw-bold pr-3'>Publisher:</span> {book.publisher}</div>
                                    <div className='d-flex justify-content-between'><span className='fw-bold pr-3'>Format:</span> {book.format}</div>
                                    <div className='d-flex justify-content-between'><span className='fw-bold pr-3'>ISBN 13:</span> {book.random_number_13}</div>
                                    <div className='d-flex justify-content-between'><span className='fw-bold pr-3'>ISBN 10:</span> {book.random_number_10}</div>
                                </div>
                                <div className="view-summary p-2 mb-5">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <h4>Best Price Summary</h4>
                                        <span>Share results</span>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default DisplayBooks;