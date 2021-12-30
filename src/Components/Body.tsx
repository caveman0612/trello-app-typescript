import React from "react";
import Folder from "./Folders";

function Body({ board }: any) {
  return board.map((folder: any) => {
    return <Folder folder={folder} key={folder.title} />;
  });
}

export default Body;
