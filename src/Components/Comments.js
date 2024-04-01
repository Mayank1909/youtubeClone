import React, { useState, useEffect } from 'react'
import { COMMENTS_API } from '../utils/constants';

const Comments = () => {
    const commentsData = [
        {
            name: "Mayank joshi",
            text: "Another example comment text",
            replies: [
                {
                    name: "Mayank joshi",
                    text: "Another example comment text",
                    replies: [
                        {
                            name: "Mayank joshi",
                            text: "Another example comment text",
                            replies: [

                            ]
                        }

                    ]
                },
                {
                    name: "Mayank joshi",
                    text: "Another example comment text",
                    replies: [

                    ]
                }

            ]
        },
        {
            name: "Mayank Joshi",
            text: "Another example comment text",
            replies: [
                {
                    name: "Mayank joshi",
                    text: "Another example comment text",
                    replies: [
                        {
                            name: "Mayank joshi",
                            text: "Another example comment text",
                            replies: [
                                {
                                    name: "Mayank joshi",
                                    text: "Another example comment text",
                                    replies: [

                                    ]
                                }

                            ]
                        }

                    ]
                }

            ]
        },
        {
            name: "Mayank joshi",
            text: "Another example comment text",
            replies: [

            ]
        },
        {
            name: "Mayank joshi",
            text: "Another example comment text",
            replies: [

            ]
        }
    ]
    const Comment = ({ data }) => {
        const { name, text, replies } = data;
        return (
            <div className='flex bg-gray-200 rounded-lg  shadow-sm p-3 m-2' >
                <img className='h-10 p-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEVsfjMFKAVchwojneS0w70o-5aORlgQJ_-o1krOfsg&s" alt="user" />
                <div className=''>
                    <p className='font-bold'>{name}</p>
                    <p>{text}</p>
                </div>
            </ div>
        )
    }
    const CommentsList = ({ comments }) => {
        return comments.map((comment, index) => (
            <div key={index}>
                <Comment data={comment} />
                <div className='pl-5 border border-l-black ml-5'>
                    <CommentsList comments={comment.replies} />

                </div>
            </div>

        ))

    }
    return (
        <div className='p-3 m-3'>
            <h1 className='font-bold py-3 text-xl'>Comments :</h1>
            <CommentsList comments={commentsData} />

        </div>
    )
}

export default Comments
