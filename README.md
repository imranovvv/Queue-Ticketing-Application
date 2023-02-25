# Queue-Ticketing-Application

This project was created by Imran Hafizuddin in a technical assessment for QuickDesk

Website for the application: https://queueticketingapp-b29b0.web.app

Requirements of the project were as follows:

Build a simple queue ticketing application
Design a ticket counter website with the following specifications with two separate views, one for a counter manager and the other for customers. See image below

a. The customer View

i. Take a Number: Allows the customer to take a ticket. When the button is
clicked, the system generates a ticket number and displays to the
customer
ii. Now Serving: Shows the latest number to be removed from the waiting
queue and added to a counter
iii. Last Number: Shows the latest ticket number to be issued 
iv. Counters:

1. The green dots: shows serving status – green is counter is online but not currently serving any customer, red if counter is online and currently serving a customer
2. Current number: shows the number of the current ticket being served. If the counter is offline, the value of <cur_num> will be “Offline”, the status color changed to grey, and the whole counter will be greyed out (disabled)

b. Counter Management

i. “Go Offline”: This button shows “Go Offline” if the counter is online, and
shows “Go Online” if the counter is offline. Toggles counter status when clicked. When offline, counter status on customer view will be grey, and the counter will be disabled in the customer view only
ii. “Complete Current”: Marks the current ticket being served as complete. When clicked, the current counter status becomes available, and the status on the Customer View will turn to green
iii. Call Next: Will

1. Pick up the next first-in ticket from the waiting queue,
2. Update <cur_num> in the customer view to the same ticket
number (on the corresponding counter)
3. Change the counter status (customer view) to red
4. Display a message “No tickets in the waiting queue” if there are no
more tickets to serve.
