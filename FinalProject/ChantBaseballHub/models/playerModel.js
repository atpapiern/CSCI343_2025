class PlayerModel {
  constructor(
    id,
    type,
    lastName,
    firstName,
    position,
    year,
    walkUpSongName,
    appearances,
    statistic,
    imageUrl
  ) {
    this.id = id;
    this.type = type;
    this.lastName = lastName;
    this.firstName = firstName;
    this.position = position;
    this.year = year;
    this.walkUpSongName = walkUpSongName;
    this.appearances = appearances;
    this.statistic = statistic;
    this.imageUrl = imageUrl;
  }
}

export default PlayerModel;
