//click event listener to the "View More" button
//this toggles the "expanded" class on the project container and updates the button text/icon
document.getElementById('view-more-btn').addEventListener('click', function() {
    const projectContainer = document.querySelector('.project-container'); // Select the project container element
    projectContainer.classList.toggle('expanded'); // Toggle the "expanded" class

    //updating the button text and icon based on the "expanded" state
    if (projectContainer.classList.contains('expanded')) {
        this.innerHTML = 'View Less <i class="ph-bold ph-arrow-up"></i>';
    } else {
        this.innerHTML = 'View More <i class="ph-bold ph-arrow-down"></i>';
    }
});

//wait for the DOM to fully load before executing the following code
document.addEventListener('DOMContentLoaded', function() {
    const mailIcon = document.getElementById('mail-icon'); //select the mail icon element
    const notification = document.getElementById('copy-notification'); //select the notification element

    //adding a click event listener to the mail icon
    mailIcon.addEventListener('click', function(event) {
        event.preventDefault();  //prevent the default navigation behavior
        const email = "sajibrafihossain@gmail.com"; //define the email address to copy

        //copy the email address to the clipboard
        navigator.clipboard.writeText(email).then(function() {
            //show the notification
            notification.style.display = 'inline-block';
            notification.style.opacity = 1;

            //hide the notification after 2 seconds
            setTimeout(function() {
                notification.style.opacity = 0;
                notification.style.display = 'none';
                //redirect to the mail client after showing the notification
                window.location.href = "mailto:" + email;
            }, 2000);
        }).catch(function(error) {
            console.error('Could not copy text: ', error); //log an error if copying fails
        });
    });
});

//click event listener for the mobile menu button
//this toggles the "show" class on the navigation menu to display or hide it
document.getElementById('mobile-menu').addEventListener('click', function() {
    const navMenu = document.querySelector('.navmenu'); //select the navigation menu element
    navMenu.classList.toggle('show'); //toggle the "show" class
});




