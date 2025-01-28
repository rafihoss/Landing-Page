document.getElementById('view-more-btn').addEventListener('click', function() {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.classList.toggle('expanded');

    if (projectContainer.classList.contains('expanded')) {
        this.innerHTML = 'View Less <i class="ph-bold ph-arrow-up"></i>';
    } else {
        this.innerHTML = 'View More <i class="ph-bold ph-arrow-down"></i>';
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const mailIcon = document.getElementById('mail-icon');
    const notification = document.getElementById('copy-notification');

    mailIcon.addEventListener('click', function(event) {
        event.preventDefault();  // Prevents immediate navigation
        const email = "sajibrafihossain@gmail.com";

        // Copy email to clipboard
        navigator.clipboard.writeText(email).then(function() {
            // Show the notification
            notification.style.display = 'inline-block';
            notification.style.opacity = 1;

            // Hide the notification after 2 seconds
            setTimeout(function() {
                notification.style.opacity = 0;
                notification.style.display = 'none';
                // Redirect to mailto after the note is shown
                window.location.href = "mailto:" + email;
            }, 2000);
        }).catch(function(error) {
            console.error('Could not copy text: ', error);
        });
    });
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    const navMenu = document.querySelector('.navmenu');
    navMenu.classList.toggle('show');
});




