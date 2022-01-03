import React from "react";
import Folders from "./Folders";

function Board({ board, setBoard, newFolderName, setNewFolderName }: any) {
  return (
    <div className="board">
      <Folders
        board={board}
        setBoard={setBoard}
        newFolderName={newFolderName}
        setNewFolderName={setNewFolderName}
      />
      <input
        type="text"
        className="newFolder"
        placeholder="Add New Folder"
        onKeyDown={(event) => {
          console.log(event);
        }}
      />
    </div>
  );
}

export default Board;
