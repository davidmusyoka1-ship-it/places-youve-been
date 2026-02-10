let places = [];

document.getElementById("placeForm").addEventListener("submit", function(event) {
  event.preventDefault();

  let location = document.getElementById("location").value;
  let landmark = document.getElementById("landmark").value;
  let season = document.getElementById("season").value;
  let notes = document.getElementById("notes").value;

  let newPlace = new Place(location, landmark, season, notes);
  places.push(newPlace);

  displayPlaces();
  this.reset();
});

function displayPlaces() {
  let list = document.getElementById("placesList");
  list.innerHTML = "";

  places.forEach(function(place, index) {
    let li = document.createElement("li");
    li.textContent = place.location;

    li.addEventListener("click", function() {
      alert(place.describePlace());
    });

    list.appendChild(li);
  });
}
