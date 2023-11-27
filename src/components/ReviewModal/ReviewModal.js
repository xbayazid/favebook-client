import React from 'react';

const ReviewModal = ({setReviewModal}) => {
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
                        <form className="grid gap-5 mt-12">
                            <textarea type="textarea" name="post" placeholder="comment here.." className="textarea textarea-bordered w-full" />
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