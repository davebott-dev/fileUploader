import {useState, useEffect} from 'react';

function Recent() {
  const [recentPost, setRecentPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/recent");
      const data = await response.json();
      setRecentPost(data);
    };
    fetchData();
  }, []);


  return (
    recentPost.map((post,index)=>(
      <div key={index}>{post.fileName}</div>
    ))
  )
}

export default Recent;
