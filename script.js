var BasicCard = require('./basicCard.js');
var ClosedCard = require('./closedCard.js');

var firstPresident = new BasicCard("Who was President?", "George Washington");

console.log(firstPresident.front);
console.log(firstPresident.back);

var firstPresidentClosed = new ClosedCard("George Washington was the first president of the United States", "George Washington");
console.log(firstPresidentClosed.closed);
console.log(firstPresidentClosed.partial);
console.log(firstPresidentClosed.fullText);

