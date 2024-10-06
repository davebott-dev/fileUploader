import {useState,useEffect} from 'react';

const Index = () => {
    const [user,setUser] =useState([])

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch('/api');
            const data = await response.json();
            setUser(data)
        }
        fetchData();
    },[]);

    
    return (
        <div>
            <p>This is {user.username}&apos;s account </p>
            <button><a href="/api/log-out">Log out</a></button>
        </div>
    )

}

export default Index;