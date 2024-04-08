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
        "Podcast",
        // "Data Structure"
    ];
    return (
        <div className='flex  ml-[250px] z-40 bg-white pb-2 '>
            {categories.map((category, index) => <Button key={index} category={category} />)}
        </div>
    )
}

export default ButtonList
