// Still needs to randomly generate ID numbers
// and spy status correctly

$(document).ready(function() {
  $('.addSpy').on('click', function() {
  $('.container').append('<h4>' + spyNumber + ' - ' + spyStatus + ' ' + '<button type="delete">Delete</button>')
  })
  var i = 0;
  var danger = 0;
  var cautious = 1;
  var ok = 2;
  var spyStatusArray = [danger, cautious, ok];

  var spyNumber = randomNumber(1001, 9999)

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
  }

console.log('Ready!');


var spyStatus = randomNumber(spyStatusArray[0], spyStatusArray[2]);

if(spyStatus >= 0) {
  spyStatus = "Danger!";
  return spyStatus;
console.log(spyStatus);
 } else if {
  spyStatus = "A-Ok!";
  return spyStatus;
  console.log(spyStatus);
}

function deleteSpy() {
  $()
}

})
