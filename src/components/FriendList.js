import React, { useState, useEffect } from "react";
import axios from "axios";

const FriendList = () => {
    const [ friends, setFriends ] = useState([])

    useEffect(() => {
        const token = localStorage.getItem('Token')
        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
        .then(res => {
            setFriends(res.data)
        })
    }, [])

    return (
    <div>
        <h2>FriendList</h2>
        <ul>
        {
            friends.map((friend, idx) => {
                return <li key={idx}> {friend.name} - {friend.age} - {friend.email} </li>
            })
        }
        </ul>
    </div>
    )
    } 

    export default FriendList