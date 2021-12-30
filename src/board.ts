
const Board: Folder[] = [];

class Folder {
    title: string;
    cards: Cards[];

    constructor(title: string, cards: Cards[]) {
        this.title = title;
        this.cards = cards;
    }
}

class Cards {
    heading: string;
    description: string;

    constructor(heading: string, description: string = "") {
        this.heading = heading;
        this.description = description
    }
}

export {Cards, Folder, Board};