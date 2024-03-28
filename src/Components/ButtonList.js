import React from 'react'
import Button from './Button'
const ButtonList = () => {
    const categories = [
        "All",
        "Music",
        "Gaming",
        "Entertainment",
        "Sports",
        "Education",
        "News",
        "JavaScript",
        "Node",
        "Kapil Sharma",
        // "Game Show",
        // "T-series",
        // "Podcast",
        // "Data Structure"
    ];
    return (
        <div className='flex'>
            {categories.map((category, index) => <Button key={index} category={category} />)}
        </div>
    )
}

export default ButtonList
