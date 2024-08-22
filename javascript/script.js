 //Initialize
 document.getElementById('dashboard-container').style.display = 'none';
 document.getElementById('login-container').style.display = 'flex'; 

 // Handle Login
 document.getElementById('login-btn').addEventListener('click', function() {
     var username = document.getElementById('username').value;
     var password = document.getElementById('password').value;

     if (username && password) {
         document.getElementById('login-container').style.display = 'none';
         document.getElementById('dashboard-container').style.display = 'flex';
     } else {
         alert('Please enter username and password.');
     }
 });

 // Event listeners for sidebar links
 document.getElementById('apps').addEventListener('click', function() {
    document.getElementById('iframe-container').src = 'apps.html';
});

document.getElementById('main-app').addEventListener('click', function() {
    document.getElementById('iframe-container').src = 'main-app.html';
});

 document.getElementById('micro-app').addEventListener('click', function() {
     document.getElementById('iframe-container').src = 'micro-app.html';
 });

 // Event listener for messages from iframe
 window.addEventListener('message', function(event) {
     if (event.origin !== window.location.origin) return;
     console.log('Message received from iframe:', event.data);
 }, false);


 