import { useEffect, useState } from 'react';

const useRequest = (email) => {
    const [isRequest, setIsRequest] = useState(false);
    const [isRequestLoading, setIsRequestLoading] = useState(true);
    useEffect( () =>{
        fetch(`http://localhost:5000/user/request/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsRequest(data.isAdmin);
            setIsRequestLoading(false);
        })
    }, [email])
    return [isRequest, isRequestLoading]; 
};

export default useRequest;