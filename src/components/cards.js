import React from "react";
import loveIcon from "../icons/love-icon.svg";
import commentIcon from "../icons/comment-icon.svg";

export const Cards = ({ books }) => {
    
    return(
       <div class="h-screen dark:text-gray-400">
            <div class="cards-container">
                { books.map(book => (
                    <div class="cards">
                        <div>
                            <img class="cards-img" src={book.imageUrl !== [] ? book.imageUrl : loveIcon} alt="book_image"/>
                            <div class="md:ml-3 ml-1.5 mt-2 md:mt-4 font-rubik">
                                <h3 class="font-bold md:text-lg text-sm">{book.title}</h3>
                                <p class="font-lobster md:text-lg text-sm -mt-1">{book.author}</p>
                                <div class="flex mt-4">
                                    <div class="flex">
                                        <img src={loveIcon} alt="likes_icon"/>
                                        <span class="text-gray-400 ml-1 -mt-1">24</span>
                                    </div>
                                    <div class="flex md:ml-16 ml-6">
                                        <img src={commentIcon} alt="comment_icon"/>
                                        <span class="text-gray-400 ml-1 -mt-1">24</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
       </div>
    )
}