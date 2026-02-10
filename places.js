// Constructor
function Place(location, landmark, season, notes) {
  this.location = location;
  this.landmark = landmark;
  this.season = season;
  this.notes = notes;
}

// Prototype method
Place.prototype.describePlace = function () {
  return (
    this.location +
    " | " +
    this.landmark +
    " | " +
    this.season +
    " | " +
    this.notes
  );
};
