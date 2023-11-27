import { useEffect } from "react";
import { useState } from "react"

const useAuthor = email => {
    const [isAuthor, setIsAuthor] = useState(false);
    const [isAuthorLoading, setIsAuthorLoading] = useState(true);
    useEffect( () =>{
        fetch(`http://localhost:5000/user/author/${email}`)
        .then(res => res.json())
        .then(data => {
            setIsAuthor(data.isAuthor);
            setIsAuthorLoading(false);
        })
    }, [email])
    return [isAuthor, isAuthorLoading]; 
}

export default useAuthor;