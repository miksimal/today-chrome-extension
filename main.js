
var priorityToday; // today's priority!

function savePriority() { // ensure that today's priority is saved in local storage, key = storedPriority
   localStorage.setItem('storedPriority', priorityToday);
}

var priorityToday = localStorage.getItem('storedPriority'); // Ensures the default value is the stored value, e.g. for opening new tab


function getEncouragement() { // pushes the priority into the encouragement header "inner HTML"
   if (priorityToday) {
      document.getElementById("encouragement").innerHTML  = `${priorityToday}!`;
   } else document.getElementById("encouragement").innerHTML  = ``;
}

getEncouragement(); // run this whenever main.js loads, to ensure that the storedPriority is displayed e.g. on new tab

function changePriority() { // updates priorityToday with input value, saves to local storage, calls getEncouragement

   priorityToday = document.getElementById("priority-input").value;
   
   savePriority();

   getEncouragement();

}

document.getElementById("priority-form").addEventListener('submit', function(e) {
    
   e.preventDefault(); // prevents page refresh

    changePriority();

 });


 document.getElementById("reset-form").addEventListener('submit', function(e) {
    
   e.preventDefault(); // prevents page refresh

    priorityToday = null; // sets priorityToday to null

    savePriority(); // saves to local storage

    getEncouragement(); // updates the inner HTML

 });