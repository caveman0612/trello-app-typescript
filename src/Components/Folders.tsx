import React from "react";
import Notes from "./Notes";

function Folder({ folder }: any) {
  return (
    <div className="folder" key={folder.title}>
      <h1>{folder.title}</h1>
      <Notes cards={folder.cards} />
    </div>
  );
}

export default Folder;
