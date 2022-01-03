import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Board from "./Components/Board/Board";

function App() {
  const [board, setBoard] = React.useState([
    { title: "Applied", cards: ["kyle", "Jack"] },
    { title: "Phase One", cards: ["Rodney", "Rex"] },
  ]);
  const [newFolderName, setNewFolderName] = React.useState("");

  return (
    <div>
      <Header />
      <Board
        board={board}
        setBoard={setBoard}
        newFolderName={newFolderName}
        setNewFolderName={setNewFolderName}
      />
      <Footer />
    </div>
  );
}

export default App;
