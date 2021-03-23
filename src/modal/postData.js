import React, { useState } from 'react';
import axios from "axios"
import { Url } from '../routes/localhost';

export const PostData = ({ removePostData }) => {
    const [ titleReminder, setTitleReminder ] = useState('');
    const [ authorReminder, setAuthorReminder ] = useState('');
    const [ descReminder, setDescReminder ] = useState('');
    const [ ispublishReminder, setIspublishReminder ] = useState('');
    const [postData, setPostData ] = useState({
        title: [],
        author: [],
        bookUrl: [],
        Publisher: [],
        description: []
    })
    
    const onSubmitHandler = e => {
        e.preventDefault()

        if(postData.title.length < 5 || postData.title.length > 20){
            setTitleReminder(<div className="absolute right-7 mt-14 text-red-500 text-xs">title must be greater than 5 and less than 20</div>)
        }else if(postData.author.length < 5 || postData.author.length > 20){
            setAuthorReminder(<div className="absolute right-7 mt-14 text-red-500 text-xs">author must be greater than 5 and less than 20</div>)
        }else if(postData.isPublished.length !== 4){
            setIspublishReminder(<div className="absolute right-7 mt-14 text-red-500 text-xs">isPublish must be equal to 4</div>)
        }else if(postData.description.length < 50 || postData.description.length > 300){
            setDescReminder(<div className="absolute right-7 mt-20.5 text-red-500 text-xs">description must be greater than 50 and less than 300</div>)
        }else{
            axios.post(Url, postData)
            .then(res => {
                const updateDate = res.data.books;
                window.location.reload(false)
                console.log(updateDate)
                setPostData(postData)
            }).catch(err => console.error(`${err.message}`))
        }
    }

    const onChangeHandler = e => {
        e.preventDefault()
        const newData = {...postData};
        newData[e.target.id] = e.target.value;
        console.log(e.target.value)
        setPostData(newData);
    }

    return(
        <>
            <div class="fixed w-screen h-screen bg-gray-900 left-0 top-0 opacity-40 ease-in-out transition duration-1000 z-50"></div>
                <div class="self-center justify-center flex font-rubik">
                    <div class="absolute dark:bg-gray-700 dark:text-gray-300 md:top-5 top-10 bg-white shadow-2xl md:w-96 h-auto z-50 transition-transform m-auto overflow-hidden rounded-md w-5/6">
                        <div class="flex dark:bg-gray-700 justify-between px-3 py-2 bg-gray-50 ">
                            <div class="ml-4">Add a book</div>
                            <div onClick={removePostData}><svg class="w-5 text-gray-500 hover:text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg></div>
                        </div>
                        <form method='' onSubmit={onSubmitHandler} class="px-7 font-rubik">
                            <div class="mt-5">
                                { titleReminder }
                                <label class="block" htmlFor="title">Title</label>
                                <input onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.title} class="input-box" type="text" id="title" placeholder="Book title" required/>
                            </div>
                        <div class="mt-2">
                            { authorReminder }
                            <label class="block" htmlFor="author">Author</label>
                            <input  onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.author} class="input-box" type="text" id="author" placeholder="Author name" required/>
                        </div>
                        <div class="mt-2">
                            <label class="block" htmlFor="BookUrl">Book Url</label>
                            <input onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.bookUrl} id="bookUrl" class="input-box" type="text" placeholder="https://www.mybook.com" required/>
                        </div>
                        <div class="mt-2">
                            { ispublishReminder }
                            <label class="block" htmlFor="publishName">Published</label>
                            <input onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.Publisher} id="isPublisher" class="input-box" type="text" placeholder="Publisher Name"/>
                        </div>
                        <div class="mt-2">
                            <label class="block" htmlFor="imageUrl">Image Url</label>
                            <input onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.imageUrl} id="imageUrl" class="input-box" type="text" placeholder="Optional"/>
                        </div>
                        <div class="mt-2">
                            { descReminder }
                            <label class="block" htmlFor="description">Description</label>
                            <textarea onBlur={e => onChangeHandler(e)} onChange={e => onChangeHandler(e)} value={postData.description} id="description" class="w-full border dark:bg-gray-600 border-gray-200 px-1 h-16 outline-none placeholder-gray-200" placeholder="Write a text"></textarea>
                        </div>
                            <button class="w-full dark:bg-gray-600 bg-primaryColor mb-2 mt-4 rounded-sm p-2 text-white hover:bg-blue-700 transition-all delay-200 ease-in-out" type="submit">Add </button>
                        </form>
                    </div>
                </div>          
        </>
    )
}