class StoryModel {
    constructor(
      id,
      type,
      headline,
      date,
      author,
      agency,
      imageUrl,
      description,
    ) {
      this.id = id;
      this.type = type;
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.agency = agency;
      this.imageUrl = imageUrl;
      this.description = description;
    }
  
    toString() {
      return `${this.type} - Headline: $${this.headline} - Date: ${this.date} - Author: ${this.author} - Agency: ${this.agency} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
    }
  }
  
  export default StoryModel;
  