import React, { useState, useEffect } from 'react'
import { COMMENTS_API } from '../utils/constants';

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments();
    }, [])
    const getComments = async () => {
        const data = await fetch(COMMENTS_API);
        const json = await data.json();
        console.log(json)
    }
    return (
        <div>
            comments
        </div>
    )
}

export default Comments
