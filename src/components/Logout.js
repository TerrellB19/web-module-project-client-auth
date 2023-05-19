import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Logout = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('Token')
        axios.post('http://localhost:9000/api/logout', {}, {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            localStorage.removeItem('Token')
            navigate('/login')
        })
    }, [])
    return(
        <div>

        </div>
    )
}

export default Logout