import React from "react";
import Cards from "./Cards";

function Folders({ board, setBoard, newFolderName, setNewFolderName }: any) {
  return board.map((folder: any) => {
    return (
      <div className="folder" key={folder.title}>
        <h1 className="">{folder.title}</h1>
        <Cards cards={folder.cards} />
      </div>
    );
  });
}

export default Folders;
