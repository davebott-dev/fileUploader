import { useState } from "react";
import { Download, Edit, Star, Delete } from "@mui/icons-material";
import {
  IconFileTypePpt,
  IconFileTypePng,
  IconFileTypeJpg,
  IconFileText,
  IconFileTypePdf,
  IconFileExcel,
  IconFile,
} from "@tabler/icons-react";
import { yellow } from "@mui/material/colors";
import { IconButton, Stack, Skeleton } from "@mui/material";
import "../App.css";
import moment from 'moment';

const BoxView = ({ data, user, loading }) => {
  const [action, setAction] = useState("/api/");

  return loading ? (
    <div className="gridCont">
      <Skeleton variant="rectangular" width={210} height={120} />
      <Skeleton variant="rectangular" width={210} height={120} />
      <Skeleton variant="rectangular" width={210} height={120} />
      <Skeleton variant="rectangular" width={210} height={120} />
    </div>
  ) : (
    <div className="gridCont">
      {data.map((d, index) => {
        const handleDownload = (name) => {
          const blob = new Blob([d.data.data], {
            type: "application/octet-stream",
          });
          const url = window.URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", name);

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };
        return (
          <div className="card" key={index}>
            <div>
              {d.fileName.slice(-3) == "png" ? (
                <IconFileTypePng color="#2ecc71" width="80" height="80" />
              ) : d.fileName.slice(-3) == "pdf" ? (
                <IconFileTypePdf color="#e74c3c" width="80" height="80" />
              ) : d.fileName.slice(-3) == "ppt" ? (
                <IconFileTypePpt width="80" height="80" />
              ) : d.fileName.slice(-3) == "jpg" ? (
                <IconFileTypeJpg width="80" height="80" />
              ) : d.fileName.slice(-3) == "txt" ? (
                <IconFileText color="#3498db" width="80" height="80" />
              ) : d.fileName.slice(-3) == "xls" ? (
                <IconFileExcel width="80" height="80" />
              ) : (
                <IconFile color="grey" width="80" height="80" />
              )}
              <div>
                {d.fileName.length > 20
                  ? d.fileName.slice(0, 20) + "..."
                  : d.fileName}
              </div>
            </div>
            <div>
              <div>{moment(d.createdAt).format('MMM Do, YYYY')}</div>
              <div>{user.name}</div>
            </div>
            <Stack direction="row" spacing={1}>
              <IconButton onClick={() => handleDownload(d.fileName)}>
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

export default BoxView;
