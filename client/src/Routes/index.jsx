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
            <h2>Welcome to FileStorage: {user.username} </h2>
            
        </div>
    )

}

export default Index;