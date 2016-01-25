describe ('Place', function(){
  it("takes user input and creates an object containing city, country, landmarks, time of year, notes of places you've been", function() {
    var testPlace = new Place("Puerto Viejo", "Costa Rica", "Playa Negra", "Fall 2013", "Black sand beach");
    expect(testPlace.city).to.equal("Puerto Viejo");
    expect(testPlace.country).to.equal("Costa Rica");
    expect(testPlace.landmark).to.equal("Playa Negra");
    expect(testPlace.time).to.equal("Fall 2013");
    expect(testPlace.notes).to.equal("Black sand beach");
  });
  it("creates a method to list the city and country together", function(){
    var testPlace = new Place("Puerto Viejo", "Costa Rica");
    expect(testPlace.fullPlace()).to.equal("Puerto Viejo, Costa Rica");
  });
});
