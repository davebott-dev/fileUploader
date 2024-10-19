import {Avatar} from '@mui/material';
import {useState,useEffect} from 'react';

function stringToColor(string) {
    let hash = 0;
    let i;
  
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
  
    return color;
  }
  
function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

const Account = () => {
const [user, setUser]=useState([]);
const [loading,setIsLoading]= useState([]);

    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
          const response1 = await fetch("/api");
          const data1 = await response1.json();
          setUser(data1);
            setIsLoading(false);
        };
        fetchData();
      }, []);

    return (
        <div>
            <Avatar {...stringAvatar(user.name)}/>
        </div>
    )
}

export default Account;

//fix this