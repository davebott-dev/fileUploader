import {useState, useEffect} from 'react';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/favorites");
      const data = await response.json();
      setFavorites(data);
    };
    fetchData();
  }, []);


  return (
    favorites.map((post,index)=>(
      <div key={index}>{post.fileName}</div>
    ))
  )
}

export default Favorites;