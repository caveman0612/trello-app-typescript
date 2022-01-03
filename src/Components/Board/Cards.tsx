import React from "react";

function Cards({ cards }: any) {
  return (
    <div className="">
      {cards.map((card: any) => {
        return (
          <p className="" key={card}>
            {card}
          </p>
        );
      })}
    </div>
  );
}

export default Cards;
