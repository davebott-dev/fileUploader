import { useState, useEffect } from "react";
import {useSubmit} from "react-router-dom";
import { Search } from "lucide-react";

const Index = () => {
  const [user, setUser] = useState([]);
  const submit = useSubmit();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setUser(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Welcome to FileStorage: {user.username} </h2>
      <div className="header">
        <div className="searchbar">
          <form role="search">
            <input
              onChange={(e) => submit(e.currentTarget.form)}
              type="text"
              name = "search"
              id = "search"
              placeholder="Search for files and folders"
            ></input>
          </form>
          <Search />
        </div>
        <div>
          <button>Rows</button>
          <button>Box</button>
        </div>
      </div>
      <div>
        <select name ="val">
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
        </select>
      </div>
    </div>
  );
};

export default Index;
