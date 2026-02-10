# places-youve-been
Website to track places I have visited
TEST 1:
Should create a Place object with location, landmark, season and notes.

Code:
let trip = new Place("Mombasa", "Fort Jesus", "December", "Very hot");

Expected Output:
trip.location = "Mombasa"
trip.landmark = "Fort Jesus"
trip.season = "December"
trip.notes = "Very hot"



TEST 2:
Should return a description of the place.

Code:
trip.describePlace();

Expected Output:
"Mombasa | Fort Jesus | December | Very hot"
