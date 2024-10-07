import { Link, Outlet } from "react-router-dom";
import { Github } from "lucide-react";
import "../App.css";

const Root = () => {
  return (
    <div className="rootCont">
      <nav>
        <div>FileStorage</div>
        <div>Dashboard</div>
        <div>Account</div>
      <button><a href="/api/log-out">Log out</a></button>
      </nav>

      <div>
        <aside>
            <div>
                <button>Upload File</button>
                <button>Create Folder</button>  
            </div>
            <div>
                <div>Files</div>
                <div>Folders</div>
                <div>Recent</div>
                <div>Starred</div>
                <div>Recently Deleted</div>
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
