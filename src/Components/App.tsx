import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import AddNewFolder from "./AddNewFolder";
import { Cards, Folder, Board } from "../board";

const kyle: Cards = new Cards("Kyle");
const jack: Cards = new Cards("jack");
const rodney: Cards = new Cards("rodney");
const steven: Cards = new Cards("steven");

Board.push(new Folder("Applied", [kyle, jack]));
Board.push(new Folder("first comp", [rodney, steven]));

function App() {
  return (
    <div>
      <Header />
      <Body board={Board} />
      <AddNewFolder />
      <Footer />
    </div>
  );
}

export default App;
