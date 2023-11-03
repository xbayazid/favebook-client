import React from 'react';

const BannerCard = ({item}) => {
    const {name, author, img} = item;
    return (
        <div className='px-5'>
            <div className='h-[100px]'>
            <h4 className="text-xl font-semibold text-black">"{name}"</h4>
            <p><small>by {author}</small></p>
            </div>
            <img src={img} alt="" className='h-[300px]'/>
        </div>
    );
};

export default BannerCard;