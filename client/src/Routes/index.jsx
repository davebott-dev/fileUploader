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
    <div className="pageCont">
      <h2>Welcome to FileStorage: {user.name} </h2>
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
      <div className="subHeader">
        <select name ="displayType one">
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
        <select name ="people two">
            <option value="any">Any</option>
            <option value="onlyMe">onlyMe</option>
            <option value="shared">Shared With Me</option>
            <option value="anyone">Anyone</option>
        </select>
        <select name ="modified three">
            <option value="anytime">Anytime</option>
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
        </select>

        <div className="submitFilters four">Apply Filter</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Opened</th>
            <th>Owner</th>
            <th>Location</th>
            <th>File Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sample.txt</td>
            <td>10/08/2024</td>
            <td>David Bottenberg</td>
            <td>user/botte/odinproject/fileuploader/client/sample.txt</td>
            <td>24kb</td>
            <td>buttons</td>
          </tr>
          <tr>
            <td>Sample.txt</td>
            <td>10/08/2024</td>
            <td>David Bottenberg</td>
            <td>user/botte/odinproject/fileuploader/client/sample.txt</td>
            <td>24kb</td>
            <td>buttons</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Index;
