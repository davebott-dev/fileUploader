import { useState, useEffect } from "react";
import { useSubmit } from "react-router-dom";
import { Search } from "lucide-react";
import DataTable from "../Components/table";
import BoxView from "../Components/box";

function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const [user, setUser] = useState([]);
  const [showBox, setShowBox] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const [loading, setIsLoading]= useState(true);
  const submit = useSubmit();

  const handleClick1 = () => {
    setShowBox(false);
    setHighlight(0);
  }
  const handleClick2 = () => {
    setShowBox(true);
    setHighlight(1);
  }

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch("/api/favorites");
      const data = await response.json();
      setFavorites(data);

      const response1 = await fetch ("/api");
      const data1 = await response1.json();
      setUser(data1);
      
    };
    setIsLoading(false);
    fetchData();
  }, []);


  return (
    user? 
    <div className="pageCont">
      <h2>{user.name}'s Favorites </h2>
      <div className="header">
        <div className="searchbar">
          <form role="search">
            <input
              onChange={(e) => submit(e.currentTarget.form)}
              type="text"
              name="search"
              id="search"
              placeholder="Search for files and folders"
            ></input>
          </form>
          <Search />
        </div>
          {highlight==0? (
             <div className="slider">
            <button style={{background:"#0061fe", color:"white"}} onClick={handleClick1}>Rows</button>
            <button onClick={handleClick2}>Box</button>
            </div>
          ):  <div className="slider">
          <button onClick={handleClick1}>Rows</button>
          <button style={{background:"#0061fe", color:"white"}} onClick={handleClick2}>Box</button>
          </div>}
      </div>
      <div className="subHeader">
        <select name="displayType one">
          <option value="All">All</option>
          <option value="PDF">PDF</option>
          <option value="Document">Document</option>
          <option value="PowerPoint">PowerPoint</option>
          <option value="Excel">Excel</option>
          <option value="textFile">Text File</option>
          <option value="JPG">JPG</option>
          <option value="PNG">PNG</option>
          <option value="GIF">GIF</option>
        </select>
        <select name="people two">
          <option value="any">Any</option>
          <option value="onlyMe">onlyMe</option>
          <option value="shared">Shared With Me</option>
          <option value="anyone">Anyone</option>
        </select>
        <select name="modified three">
          <option value="anytime">Anytime</option>
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
        </select>

        <div className="submitFilters four">Apply Filter</div>
      </div>
      {!showBox ? (
        <DataTable data={favorites} user={user} loading={loading}/>
      ) : (
        <BoxView data={favorites} user={user} loading={loading}/>
      )}
    </div>
 : 
 <div>
  <a href="/">Please log-in</a>
  </div> 
  );
}

export default Favorites;