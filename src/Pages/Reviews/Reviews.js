import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
// import Button from '../../components/Button';

const Reviews = () => {
    const posts = [
        {
            id: 1,
        },
        {
            id: 1,
        }
    ]

    return (
        <div className="my-6 mx-[7%]">
            <div className='mb-2 lg:flex justify-between items-center'>
                <div>
                    <h1 className='text-xl lg:text-5xl font-medium mb-2'>Book News feed</h1>
                    <p>Explore your book and like comment share</p>
                </div>
                <div className='flex items-center gap-3 mt-3 lg:mt-0'>
                    <Link><Button>Post</Button></Link>
                </div>
            </div>
            <hr />
            <div>
            {
                posts.map( (post, i) =>  <div key={i} className="card card-side bg-base-100 shadow-xl mt-16" style={{ background: '#F6F4F4', borderRadius: 8 }}>
                <div className="card-body">
                    <h2 className="font-medium text-2xl">"Where the Crawdads Sing"</h2>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img src="https://i.ibb.co/jJWpBrY/men-1.png" alt="" />
                        </div>
                        <div>
                            <p>Bayazid Hossian</p>
                            <p className='text-gray-400'>Member</p>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <p className='lg:w-[860px] text-justify'>The book beautifully weaves together themes of loneliness, love, mystery, and the wonders of nature. It delves into Kya's journey of self-discovery, her love for the marsh, and a poignant coming-of-age story that becomes intertwined with a mysterious death in the community. The book beautifully weaves together themes of loneliness, love, mystery, and the wonders of nature. It delves into Kya's journey of self-discovery, her love for the marsh, and a poignant coming-of-age story that becomes intertwined with a mysterious death in the community. The book beautifully weaves together themes of loneliness, love, mystery, and the wonders of nature. It delves into Kya's journey of self-discovery, her love for the marsh, and a poignant coming-of-age story that becomes intertwined with a mysterious death in the community The book beautifully weaves together themes of loneliness, love, mystery, and the wonders of nature. It delves into Kya's journey of self-discovery, her love for the marsh, and a poignant coming-of-age story that becomes intertwined with a mysterious death in the community</p>
                    </div>
                    <div className="card-actions">
                        <div className='mt-5'>
                            <Link><Button>Write your review</Button></Link>
                        </div>
                    </div>
                </div>

                <div className='-mt-20 py-12 px-12'>
                    <figure><img src="https://i.ibb.co/FKd57yV/news-Feed-1.png" alt="Movie" /></figure>
                </div>
            </div>)
               }
            </div>
            </div>
    );
};

export default Reviews;