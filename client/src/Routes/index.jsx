import { useState, useEffect } from "react";
import { useSubmit } from "react-router-dom";
import { Search } from "lucide-react";
import DataTable from "../Components/table";
import BoxView from "../Components/box";
import {Box,InputLabel,MenuItem,FormControl,Select,Button} from '@mui/material';


const Index = () => {
  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showBox, setShowBox] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const [loading, setIsLoading]= useState(true);
  const [type, setType] = useState('');
  const [shared, setShared] =useState('');
  const [opened,setOpened] =useState('');
  const [action,setAction] =useState('/api/search/');
  const submit = useSubmit();

  const handleChange1 = (e) => {
    setType(e.target.value);
  }
  const handleChange2 = (e) => {
    setShared(e.target.value);
  }
  const handleChange3 = (e) => {
    setOpened(e.target.value);
  }

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
      const response1 = await fetch("/api");
      const data1 = await response1.json();
      setUser(data1);

      const response2 = await fetch("/api/posts");
      const data2 = await response2.json();
      console.log(data2);
      setPosts(data2);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    user? 
    <div className="pageCont">
      <h2>Welcome to FileStorage: {user.name} </h2>
      <div className="header">
        <div className="searchbar">
          <form method="GET" action={action}>
            <input
              onSubmit= {(e)=>setAction(action+e.target.value)}
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
        <Box sx ={{minWidth:120}}>
          <FormControl fullWidth>
            <InputLabel id ='demo-simple-select-Label'>File Type</InputLabel>
            <Select
              labelId = 'demo-simple-select-Label'
              id = 'demo-simple-select'
              value ={type}
              label="File Type"
              onChange ={handleChange1}
              >
                <MenuItem value = {"All"}>All</MenuItem>
                <MenuItem value = {"PDF"}>PDF</MenuItem>
                <MenuItem value = {"DOCX"}>Word</MenuItem>
                <MenuItem value = {"PPT"}>PowerPoint</MenuItem>
                <MenuItem value = {"XLSX"}>Excel</MenuItem>
                <MenuItem value = {"TXT"}>Text</MenuItem>
             <MenuItem value = {"JPG"}>JPG</MenuItem>
                <MenuItem value = {"PNG"}> PNG</MenuItem>
              </Select>
          </FormControl>
        </Box>
        <Box sx ={{minWidth:120}}>
          <FormControl fullWidth>
            <InputLabel id ='selectLabel2'>Shared</InputLabel>
            <Select
              labelId = 'sharedType'
              id = 'shared'
              label="Shared"
              value ={shared}
              onChange ={handleChange2}
              >
                <MenuItem value = {"Any"}>Any</MenuItem>
                <MenuItem value = {"Shared"}>Shared With Me</MenuItem>
                <MenuItem value = {"Me"}>Me</MenuItem>
              </Select>
          </FormControl>
        </Box>
        <Box sx ={{minWidth:120}}>
          <FormControl fullWidth>
            <InputLabel id ='selectLabel3'>Last Opened</InputLabel>
            <Select
              labelId = 'lastOpened'
              id = 'opened'
              label ="Last Opened"
              value ={opened}
              onChange ={handleChange3}
              >
                <MenuItem value = {"Any"}>Any</MenuItem>
                <MenuItem value = {"Shared"}>Shared With Me</MenuItem>
                <MenuItem value = {"Me"}>Me</MenuItem>
              </Select>
          </FormControl>
        </Box>
        <Button type = "submit" variant= "outlined" className="submitFilters four">Apply Filter</Button>
      </div>
      {!showBox ? (
        <DataTable data={posts} user={user} loading={loading}/>
      ) : (
        <BoxView data={posts} user={user} loading={loading}/>
      )}
    </div>
 : 
 <div>
  <a href="/">Please log-in</a>
  </div> 
  );
};

export default Index;
