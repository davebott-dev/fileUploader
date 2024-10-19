import { Link, Outlet } from "react-router-dom";
import {useState} from 'react';
import {Snackbar, Alert} from '@mui/material';
import { Github } from "lucide-react";
import {
  IconFile,
  IconFolders,
  IconClock,
  IconStar,
  IconTrash,
} from "@tabler/icons-react";
import "../App.css";

const Root = () => {
const [open,setOpen]= useState(false);

const handleClick = () => {
  setOpen(true);
}
const handleClose = (e,reason) => {
  if(reason ==='clickaway') {
    return;
  }
  setOpen(false);
}

  return (
    <div className="rootCont">
      <nav>
        <div>FileStorage</div>
        <div>
          <Link>Dashboard</Link>
        </div>
        <div>
          <Link to="account">Account</Link>
        </div>
        <button>
          <a href="/api/log-out">Log out</a>
        </button>
      </nav>

      <div>
        <aside>
          <div>
            <form
              action="/api/upload"
              method="POST"
              encType="multipart/form-data"
            >
              <label className="custom-upload" htmlFor="file">
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={() => document.forms[0].submit()}
                  onClick = {handleClick}
                ></input>
                Upload File
              </label>
            </form>
            <Snackbar open = {open} autoHideDuration ={5000} onClose ={handleClose}>
              <Alert
              onClose ={handleClose}
              severity = "success"
              variant = "filled"
              sx={{width: '100%'}}
              >Upload Successful</Alert>
            </Snackbar>
            <button>Create Folder</button>
          </div>
          <div className="asidePaths">
            <div>
              <div>
                <IconFile />
              </div>
              <div><Link to="/homepage">Files</Link></div>
            </div>
            <div>
              <IconFolders />
              Folders
            </div>
            <div>
              <IconClock />
              
                  <Link to= "recent">Recent</Link>
           
            </div>
            <div>
              <IconStar />
              <Link to= "favorites">Starred</Link>
            </div>
            <div>
              <IconTrash />
              Recently Deleted
            </div>
          </div>
        </aside>
        <main>
          <Outlet />
        </main>
      </div>

      <footer>
        <div>Made with ❤️ by David Bottenberg</div>
        <a href="https://github.com/davebott-dev">
          <Github className="githubIcon" />
        </a>
      </footer>
    </div>
  );
};

export default Root;
