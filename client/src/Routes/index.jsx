import {useState,useEffect} from 'react';
import {Search} from 'lucide-react';

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
            <div className="header">
                
            <div className="searchbar">
                <input type="text" placeholder="Search for files and filders"></input>
                <Search/>
            </div>
                <div><button></button><button></button></div>
            </div>
            
        </div>
    )

}

export default Index;