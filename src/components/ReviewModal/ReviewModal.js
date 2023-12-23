import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const ReviewModal = ({setReviewModal, id, refetch}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    const [uType, setUType] = useState('Member');

    const { data: type = [] } = useQuery({
        queryKey: ['role'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/users/${user?.email}`);
            const data = await res.json();
            setUType(data.role ? data.role : 'Member');
            return data;
        }
    })

    const handleComments = (event) =>{
        event.preventDefault();

        const form = event.target;
        const review = form.review.value;
        const email = user?.email;
        const name = user?.displayName;
        const img = user?.photoURL;
        const userType = uType;

        const comment =    {
            email,
            name,
            img,
            review,
            userType
        }

        if(!user){
            <Navigate to="/authentication" state={{from: location}} replace></Navigate>
        }
        else{
            fetch(`http://localhost:5000/posts/${id}/comments`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                }, 
                body: JSON.stringify(comment)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset()
                setReviewModal(null)
                refetch();
                // refetch();
            })
        }
    }
    return (
        <div>
            <>
                <input type="checkbox" id="review-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label
                            htmlFor="review-modal"
                            className="btn btn-sm btn-circle absolute right-2 top-2 "
                        >
                            ✕
                        </label>
                        <h3 className="text-lg font-bold">Write your comment</h3>
                        <form className="grid gap-5 mt-12" onSubmit={handleComments}>
                            <textarea type="textarea" name="review" placeholder="comment here.." className="textarea textarea-bordered w-full" />
                            <input
                                className="btn btn-accent w-full"
                                type="submit"
                                value="comment"
                            />
                        </form>
                    </div>
                </div>
            </>
        </div>
    );
};

export default ReviewModal;