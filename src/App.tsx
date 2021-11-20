import React, { useCallback, useState } from "react";
import "./App.css";
import file from "./file-regular.svg";
import folderOpen from "./folder-open-regular.svg";

import { FileNode, root } from "./data";

const File: React.FC<FileNode> = ({ id, children }: FileNode) => {
  // state, show or hide the children
  const [showChildren, setShowChildren] = useState<boolean>(false);
  const handleClick = useCallback(() => {
    setShowChildren(!showChildren);
  }, [showChildren, setShowChildren]);

  return (
    <div>
      <span onClick={handleClick}>
        <img
          src={showChildren ? folderOpen : file}
          alt="toggle files and folder"
          style={{ width: "20px", height: "20px" }}
        />
        <h4
          style={{
            fontWeight: showChildren ? "bold" : "normal",
            display: "inline-block",
          }}
        >
          {id}
        </h4>
      </span>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          left: 25,
          borderLeft: "1px solid",
          paddingLeft: 15,
        }}
      >
        {showChildren &&
          (children ?? []).map((node: FileNode) => <File {...node} />)}
      </div>
    </div>
  );
};

function App() {
  return (
    <div style={{ marginLeft: 15, alignItems: "center", margin: "0 10%" }}>
      <h1 className="uniform"> File Folder Structure Maker</h1>
      <button className="uniform">Add folder to root</button>
      <p className="uniform">
        Instructions: Click on the folder icon to view the files and folders
      </p>
      <File {...root} />
    </div>
  );
}

export default App;
