let priorityToday = ""; // today's priority!
let listItems = ""; // string that we'll store our <li>s to display in

const pastPriorities = JSON.parse(localStorage.getItem('pastPriorities'));

function savePriority() { // ensure that today's priority is saved in local storage
   localStorage.setItem('storedPriority', priorityToday);
}

function saveList() { // ensure that latest listItems string is saved in local storage
   localStorage.setItem('pastPriorities', JSON.stringify(listItems));
}

priorityToday = localStorage.getItem('storedPriority'); // Ensures the default value is the stored value, e.g. for opening new tab

// Ensure list of previous priorities gets displayed on page load if it's not empty:
if(pastPriorities) {
   listItems = pastPriorities;
   }

function getEncouragement() { // pushes the priority into the encouragement header "inner HTML"
   if (priorityToday) {
      document.getElementById("encouragement").innerHTML  = `${priorityToday}`;
   } else document.getElementById("encouragement").innerHTML  = ``;
}

function showList() { // pushes the overview of past priorities into the relevant <ul>
   if (listItems) {
      document.getElementById("overview-list").innerHTML  = `${listItems}`;
   }
}

getEncouragement(); // run this whenever main.js loads, to ensure that the storedPriority is displayed e.g. on new tab
showList(); // run this whenever main.js loads to ensure that list of previous priorities is displayed

function changePriority() { // updates priorityToday with input value, saves to local storage, calls getEncouragement

   priorityToday = document.getElementById("priority-input").value;
   
   savePriority();
   
   document.forms["priority-form"].reset(); // clears the form after submission
   
   document.getElementById("priority-form").style.display = 'none'; // hide form after submit

   document.getElementById("reset-form").style.display = 'block'; // show reset button
   
   getEncouragement();

}

document.getElementById("priority-form").addEventListener('submit', function(e) {
    
   e.preventDefault(); // prevents page refresh

    changePriority();

 });


 document.getElementById("reset-form").addEventListener('submit', function(e) { // reset button
    
    e.preventDefault(); // prevents page refresh

    if (priorityToday) {
      listItems += "<li>" + priorityToday + "</li>";
      saveList();
    } 

    priorityToday = ""; // sets priorityToday to empty string (which is falsy)

    savePriority(); // saves to local storage

    showList(); // updates the inner HTML, showing the list of previous priorities
    
    document.getElementById("priority-form").style.display = 'block'; // display form

    document.getElementById("reset-form").style.display = 'none'; // hide reset button

    getEncouragement(); // updates the inner HTML, showing the encouragement to do current top priority

 });
