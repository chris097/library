/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import loveIcon from "../icons/love-icon.svg";
import commentIcon from "../icons/comment-icon.svg";
import axios from "axios";
import { Url } from "../routes/localhost";
import { GetBookById } from "../modal/getData";
import { GetDataLoading } from "../loading/getData";

export const Cards = ({ books }) => {
    
    const [ getBookById, setGetBookById ] = useState('')
    const [ loading, setLoading ] = useState('');
    const [ likes, setLikes ] = useState(0)
    localStorage.getItem(likes)

    const getBook = (_id) => {
        axios.get(`${Url}/${_id}`)
        .then(res => {
            let book = res.data.book
            console.log(book._id)
            setLoading(<GetDataLoading />)

            setTimeout(() => {
                setLoading('')
                setGetBookById(
                    <GetBookById 
                    _id={book._id}
                    author={book.author} 
                    title={book.title}
                    imageUrl={book.imageUrl}
                    bookUrl={book.bookUrl}
                    description={book.description}
                    isPublished={book.isPublished}
                    removeBookId={removeBookId} 
                    deleteData={deleteData}
                    updateData={updateData}
                    updateLike={updateLike} />)
            }, 1000);
        })
        .catch(err => console.log(err.message))
    }

    // This function will be updating data ie if you want to edit a book data
    const updateData = () => {
        console.log('update button was clicked ...')
    }

    // This function updates likes
    const updateLike = () => {
        // console.log('like was clicked ...')
        localStorage.setItem('likes', !likes ? likes +1 : likes -1 )
        setLikes( !likes ? likes +1 : likes -1 )
    }

    // This function will be deletng a book permaniently be careful on clicking this function
    const deleteData = (_id) => {
        window.location.reload(false)
        axios.delete(`${Url}/${_id}`)
        .then(res => {
            const deteleData = res.data.book;
            console.log(deteleData)
        })
        setGetBookById('')
    }

    /** This function will deleting the the getBookId modal */
    const removeBookId = () => {
        // console.log('something was clicked ...')
        setGetBookById('')
        setLoading('')
    }
    // This function will updating comment
    const updateComment = () => {
        console.log('You clicked on comment ...')
    }
    
    return( 
       <div class="h-screen dark:text-gray-400 pb-6 overflow-auto">
            <div class="cards-container">
                { books.map(book => (
                    <div class="cards" key={book._id}>
                        <div>
                            <img class="cards-img" src={book.imageUrl !== "" ? book.imageUrl : loveIcon} alt="book_image" onClick={() => getBook(book._id)}/>
                            <div class="md:ml-3 ml-1.5 mt-2 md:mt-4 font-rubik">
                                <div onClick={() => getBook(book._id)}>
                                    <h3 class="font-bold md:text-lg text-sm">{book.title}</h3>
                                    <p class="font-lobster md:text-lg text-sm -mt-1">{book.author}</p>
                                </div>
                                <div class="flex mt-4">
                                    <div class="flex" onClick={() => getBook(book._id)}>
                                        <img src={loveIcon} alt="likes_icon"/>
                                        <span class="text-gray-400 ml-1 -mt-1">{likes}</span>
                                    </div>
                                    <div class="flex md:ml-16 ml-6" onClick={updateComment}>
                                        <img src={commentIcon} alt="comment_icon"/>
                                        <span class="text-gray-400 ml-1 -mt-1">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            { getBookById }
            { loading }
       </div>
    )
}