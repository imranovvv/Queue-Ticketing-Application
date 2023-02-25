// Define the queue of waiting tickets
let queue = [];

// VARIABLES TO CONNECT WITH HTML ELEMENTS
let takeNumberBtn=document.getElementById("take-number-btn");
let callNext=document.querySelectorAll(".call-next");
let nowServing=document.getElementById("now-serving");
let completeCurrentButtons = document.querySelectorAll('.complete-current');
let goOffline=document.querySelectorAll('.go-offline');
let statusCounter = document.querySelectorAll('.status-counter');
let statusCircle = document.querySelectorAll('.status-circle');
let isServing=false;
let currentNumber=document.querySelectorAll(".current-number");


// COMPLETE CURRENT BUTTON 
for (let i = 0; i < completeCurrentButtons.length; i++) {
  //only if serving customer, can you complete current customer
  if(!isServing){
    completeCurrentButtons[i].addEventListener('click', () => {
      statusCircle[i].classList.replace('bg-danger', 'bg-success');
  });
  }
   
  };




// CALL NEXT CUSTOMER BUTTON
for (let i = 0; i < callNext.length; i++) {
    callNext[i].addEventListener('click', () => {
        var a;
        if(queue[0]==undefined){
            alert(`No tickets in waiting queue`);
        }else{
        a=currentNumber[i].innerHTML=queue.shift();
        nowServing.innerHTML=a;
        alert(`Calling next customer ${a}`);
        statusCircle[i].classList.replace("bg-success", "bg-danger");
        isServing=true;
        }
        
    });
  };


// GO OFFLINE/ONLINE BUTTON
  for (let i = 0; i < goOffline.length; i++) {
    let isOffline = false;
  
    goOffline[i].addEventListener('click', () => {
      if (isOffline) {
        // Counter is currently offline, so go online
        isOffline = false;
        goOffline[i].innerHTML = 'Go Offline';
        statusCircle[i].classList.replace('bg-secondary', 'bg-success');
        statusCounter[i].classList.replace('bg-secondary', 'bg-primary');
        currentNumber[i].innerHTML="";
      } else {
        // Counter is currently online, so go offline
        isOffline = true;
        goOffline[i].innerHTML = 'Go Online';
        statusCircle[i].classList.replace('bg-success', 'bg-secondary');
        statusCounter[i].classList.replace('bg-primary', 'bg-secondary');
        currentNumber[i].innerHTML="Offline";
      }
    });
  }

// TAKE NUMBER BUTTON

takeNumberBtn.addEventListener('click', () => {

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



  