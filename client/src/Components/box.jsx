import { useState } from "react";
import { Download, Edit, Star, Delete } from "@mui/icons-material";
import {
  IconFileTypePpt,
  IconFileTypePng,
  IconFileTypeJpg,
  IconFileText,
  IconFileTypePdf,
  IconFileExcel,
} from "@tabler/icons-react";
import { yellow } from "@mui/material/colors";
import { IconButton, Stack,Skeleton } from "@mui/material";
import "../App.css";

const Box = ({ data, user,loading }) => {
  const [action, setAction] = useState("/api/");

  return (
    loading? 
    <div className="gridCont">
    <Skeleton variant = "rectangular" width={210} height = {120}/>
    <Skeleton variant = "rectangular" width={210} height = {120}/>
    <Skeleton variant = "rectangular" width={210} height = {120}/>
    <Skeleton variant = "rectangular" width={210} height = {120}/>
    </div>
    : <div className="gridCont">
      {data.map((d, index) => {
        return (
          <div className="card" key={index}>
            <div>
                {d.fileName.slice(-3) =="png"
                ? (<IconFileTypePng color="#2ecc71" width="80" height="80"/>)
                : d.fileName.slice(-3) =="pdf"
                ? (<IconFileTypePdf color="#e74c3c" width="80" height="80"/>)
                : d.fileName.slice(-3) =="ppt"
                ? (<IconFileTypePpt width="80" height="80"/>)
                :  d.fileName.slice(-3) =="jpg"
                ? (<IconFileTypeJpg width="80" height="80"/>)
                :  d.fileName.slice(-3) =="txt"
                ? (<IconFileText color ="#3498db" width="80" height="80"/>)
                : d.fileName.slice(-3) =="xls"
                ? (<IconFileExcel width="80" height="80" />)
                :null   
                        }
                <div>{d.fileName}</div>
            </div>
            <div>
              <div>{d.createdAt}</div>
              <div>{user.name}</div>
            </div>
            <Stack direction="row" spacing={1}>
              <IconButton>
                <Download />
              </IconButton>
              <IconButton>
                <Edit />
              </IconButton>
              <form action={action} method="POST">
                <button className="update">
                  <IconButton
                    onClick={() => setAction(action + "favorite/" + d.id)}
                  >
                    {d.isFav ? <Star sx={{ color: yellow[500] }} /> : <Star />}
                  </IconButton>
                </button>
              </form>
              <form action={action} method="POST">
                <button className="delete">
                  <IconButton
                    onClick={() => setAction(action + "delete/" + d.id)}
                  >
                    <Delete />
                  </IconButton>
                </button>
              </form>
            </Stack>
          </div>
        );
      })}
    </div>
  );
};

export default Box;
