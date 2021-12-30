import React from "react";

function Notes({ cards }: any) {
  return cards.map((note: any) => <p key={note.heading}>{note.heading}</p>);
}

export default Notes;
