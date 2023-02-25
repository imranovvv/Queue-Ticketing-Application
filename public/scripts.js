// Define the queue of waiting tickets
let queue = [];

// Now Serving/Last Number element in HTML
let nowServing=document.getElementById("now-serving");
let currentNumber=document.querySelectorAll(".current-number");

// Button elements in HTML
let takeNumberButton=document.getElementById("take-number-btn");
let callNextButton=document.querySelectorAll(".call-next-btn");
let completeCurrentButton = document.querySelectorAll('.complete-current-btn');
let goOfflineButton=document.querySelectorAll('.go-offline-btn');

// Status circle and status counter(offline/online) elements in HTML
let statusCounter = document.querySelectorAll('.status-counter');
let statusCircle = document.querySelectorAll('.status-circle');

// boolean to know if counter is currently serving a customer
let isServing=false;

// TAKE NUMBER BUTTON
takeNumberButton.addEventListener('click', () => {

  let lastNumber=document.getElementById("last-number");
      // Generate a new ticket number
      const newTicket = queue.length + 1;
  
      // Add the new ticket to the end of the queue
      queue.push(newTicket);
  
      // Display the ticket number to the customer
      alert(`Your ticket number is ${newTicket}`);
      lastNumber.innerHTML=newTicket;
      return newTicket;
    });

// CALL NEXT CUSTOMER BUTTON
for (let i = 0; i < callNextButton.length; i++) {
  callNextButton[i].addEventListener('click', () => {
      var a;
      if(queue[0]==undefined){
          alert(`No tickets in waiting queue`);
      }else{
      a=currentNumber[i].innerHTML=queue.shift();
      nowServing.innerHTML=a;
      alert(`Calling next customer: ${a}`);
      statusCircle[i].classList.replace("bg-success", "bg-danger");
      isServing=true;
      }
  });
};

// COMPLETE CURRENT BUTTON 
for (let i = 0; i < completeCurrentButton.length; i++) {
    completeCurrentButton[i].addEventListener('click', () => {
        //Only if serving customer, can you complete current customer
      if(isServing){
      statusCircle[i].classList.replace('bg-danger', 'bg-success');
      alert('Completed current ticket!')
      isServing=false;
      }else{
        alert('There is no ticket to complete!')
      }
  });
  };

// GO OFFLINE/ONLINE BUTTON
  for (let i = 0; i < goOfflineButton.length; i++) {
    let isOffline = false;
  
    goOfflineButton[i].addEventListener('click', () => {
      if (isOffline) {
        // Counter is currently offline, so go online
        isOffline = false;
        goOfflineButton[i].innerHTML = 'Go Offline';
        statusCircle[i].classList.replace('bg-secondary', 'bg-success');
        statusCounter[i].classList.replace('bg-secondary', 'bg-primary');
        currentNumber[i].innerHTML="-";
        // Enable both buttons
        completeCurrentButton[i].classList.remove("disabled");
        callNextButton[i].classList.remove("disabled");
      } else {
        // Counter is currently online, so go offline
        isOffline = true;
        goOfflineButton[i].innerHTML = 'Go Online';
        statusCircle[i].classList.replace('bg-success', 'bg-secondary');
        statusCounter[i].classList.replace('bg-primary', 'bg-secondary');
        currentNumber[i].innerHTML="Offline";
        // Disable both buttons
        completeCurrentButton[i].classList.add("disabled");
        callNextButton[i].classList.add("disabled");
      }
    });
  }





  