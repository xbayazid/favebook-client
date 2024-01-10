import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';

const AddBook = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {user} = useContext(AuthContext)

    const { data: categories = [] } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/categories/');
            const data = await res.json();
            return data;
        }
    });
    const imageHostKey = 'ccde7ef0b56892fc4e26e02275cb15b7';

    const navigate = useNavigate();

    const handleAddBook = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const book = {
                        name: data.name,
                        email: user?.email,
                        category: data.category,
                        img: imgData.data.url,
                        author: data.author
                    }

                    fetch('http://localhost:5000/book', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            // authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(book)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`);
                            // navigate('/dashboard/managedoctors');
                        })
                }
            })
    }
    return (
        <div className='bg-gray-200 h-full p-5'>
            <div className='w-96 p-7 shadow-lg bg-white rounded-md lg:mx-auto'>
                <h1 className="text-3xl capitalize">Add a new book</h1>
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 py-[2px] rounded-lg mb-3 w-24"></div>
                <form onSubmit={handleSubmit(handleAddBook)}>
                    <div className="form-control w-full-max-w-xs">
                        <label className="label"><span className="label-text">Book Name</span></label>
                        <input {...register("name", { required: "Name is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Author Name</span></label>
                        <input {...register("author", { required: "Author Name is required" })} type="text" className="input input-bordered w-full max-w-xs" />
                        {errors.author && <p className='text-red-600'>{errors.author?.message}</p>}
                    </div>
                    <div className="form-control w-full-max-w-xs">
                        <label className="label"><span className="label-text">Book Category</span></label>
                        <select {...register("category", { required: "Category is required" })} className='select select-accent w-full max-w-xs'>
                            {
                                categories.map(category => <option key={category._id} value={category.category}>{category.category}</option>)
                            }
                        </select>
                        {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                    </div>
                    <div className="form-control w-full-max-w-xs">
                        <label className="label"><span className="label-text">Photo</span></label>
                        <input {...register("image", { required: "Photo is required" })} type="file" className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                    </div>
                    <input className='btn btn-accent w-full my-3' value="Add Book" type="submit" />
                    <div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddBook;