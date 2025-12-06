class GameModel {
  constructor(
    id,
    type,
    opponent,
    date,
    venue,
    location,
    event,
    imageUrl
  ) {
    this.id = id;
    this.type = type;
    this.opponent = opponent;
    this.date = date;
    this.venue = venue;
    this.location = location;
    this.event = event;
    this.imageUrl = imageUrl;
  }
}

export default GameModel;
