import { useEffect, useState } from 'react';

const useRequest = (email) => {
    const [isRequest, setIsRequest] = useState(false);
    const [isRequestLoading, setIsRequestLoading] = useState(true);
    useEffect( () =>{
        fetch(`https://favebook-server-chi.vercel.app/user/request/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsRequest(data.isAdmin);
            setIsRequestLoading(false);
        })
    }, [email])
    return [isRequest, isRequestLoading]; 
};

export default useRequest;