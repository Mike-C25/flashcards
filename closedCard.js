var ClosedCard = function(text, closed) {
    if (this instanceof ClosedCard) {
        this.fullText = text;
        this.closed = closed;
        this.partial = text.replace(closed, '...');
    } else {
    	return new ClosedCard(text,closed);
    }
}




module.exports = ClosedCard;