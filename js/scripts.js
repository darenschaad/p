function Place(city, country, landmark, time, notes){
  this.city = city;
  this.country = country;
  this.landmark = landmark;
  this.time = time;
  this.notes= notes;
}
Place.prototype.fullPlace = function(){
  return this.city + ", " + this.country;
}




$(document).ready(function() {
  $("form#new-place").submit(function(event) {

    event.preventDefault();

    var inputtedCity = $("input#inputtedCity").val();
    var inputtedCountry = $("input#inputtedCountry").val();
    var inputtedLandmark = $("input#inputtedLandmark").val();
    var inputtedTime = $("input#inputtedTime").val();
    var inputtedNotes = $("input#inputtedNotes").val();
    var newPlace = new Place (inputtedCity, inputtedCountry, inputtedLandmark, inputtedTime, inputtedNotes);

    $(".resultTitle").show();

    $("ul#places").append("<li><span class='place'>" + newPlace.fullPlace() + "</span></li>");

    $("input#inputtedCity").val("");
    $("input#inputtedCountry").val("");
    $("input#inputtedLandmark").val("");
    $("input#inputtedTime").val("");
    $("input#inputtedNotes").val("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.fullPlace());
      $(".landmark").text(newPlace.landmark);
      $(".time").text(newPlace.time);
      $(".notes").text(newPlace.notes);
    });
  });
});
