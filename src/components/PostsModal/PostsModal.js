import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const PostsModal = ({setPostModal}) => {
    const { user } = useContext(AuthContext);
    const [uType, setUType] = useState('Member');


    const handlePost = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = user?.displayName;
        const email = user?.email;
        const bookName = form.bookName.value;
        const userImage = user?.photoURL;
        const image = form.bookImage.files[0];
        const post = form.post.value;

        console.log(image);

        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=efb1f1b4a91ac7ab59faa9f417e8afc4`;
        fetch(url, {
            method: "POST",
            body: formData
        })

        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                const postDetails = {
                    name,
                    userImage,
                    email,
                    userType: uType,
                    bookName,
                    bookImage: imgData.data.url,
                    post,
                    comments: []

                    
                }
                // save post to the database
                fetch('https://favebook-server-chi.vercel.app/posts/', {
                    method: 'POST',
                    headers: {
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(postDetails)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    setPostModal(null);
                })
            }
        })
    }

    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('https://favebook-server-chi.vercel.app/categories/');
            const data = await res.json();
            return data;
        }
    })

    const { data: type = [] } = useQuery({
        queryKey: ['role'],
        queryFn: async () => {
            const res = await fetch(`https://favebook-server-chi.vercel.app/users/${user?.email}`);
            const data = await res.json();
            setUType(data.role ? data.role : 'Member');
            return data;
        }
    })

    return (
        <div>
            <>
                <input type="checkbox" id="post-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label
                            htmlFor="post-modal"
                            className="btn btn-sm btn-circle absolute right-2 top-2 "
                        >
                            ✕
                        </label>
                        <h3 className="text-lg font-bold">Write Your post Here</h3>
                        <form onSubmit={handlePost} className="grid gap-5 mt-12">
                            <input type="text" name="name" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
                            <input type="email" name="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
                            <input type="text" name="bookName" placeholder='Enter Your Book Name' className="input input-bordered w-full" />
                            <input type="file" name="bookImage" className="input input-bordered w-full" />
                            <select name="slot" className="select select-bordered w-full">
                                {
                                    categories.map(category => (
                                        <option
                                            value={category.category}
                                            key={category._id}
                                        >{category.category}</option>
                                    ))
                                }
                            </select>
                            <textarea type="textarea" name="post" placeholder="Your Post" className="textarea textarea-bordered w-full" />
                            <input
                                className="btn btn-accent w-full"
                                type="submit"
                                value="post"
                            />
                        </form>
                    </div>
                </div>
            </>
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam architecto eum eveniet. Voluptatem, quos laudantium facere officiis fuga eius excepturi iure! Eos enim placeat aliquam quis aut reprehenderit facere voluptates fugiat praesentium aspernatur labore voluptas veniam, ex a, quas in. Ex, quos commodi! Itaque vel numquam assumenda dolorum! Accusamus, nam praesentium dolorem quia architecto cum nemo repellendus sequi perspiciatis repellat obcaecati dolor blanditiis voluptate reprehenderit iste nesciunt tempora incidunt eveniet! Sed, necessitatibus a vitae voluptatibus non dignissimos ratione minima amet sunt consequatur, corporis aspernatur temporibus ducimus deserunt nisi. Aut rem sunt voluptatibus expedita tempore provident cupiditate voluptates laboriosam maxime accusantium.</p> */}
        </div>
    );
};

export default PostsModal;