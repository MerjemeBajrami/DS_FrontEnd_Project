async function loadNotificationCard() {
    const notificationsCardPlaceholder = document.getElementById("center"); // Ensure this div exists in your HTML
    const response = await fetch("notifications_card/notifications_card.html");
    const notificationsCardHtml = await response.text();
    notificationsCardPlaceholder.innerHTML = notificationsCardHtml;

   
    createNotifications(notifications);
}


const notifications = [
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "Parent1",
        action: "liked your post",
        time: "5m ago",
        preview: "Great post about child safety!",
        unread: true
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "Parent2",
        action: "commented on your post",
        time: "1h ago",
        preview: "Thank you for the tips!",
        unread: false
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "Parent3",
        action: "shared your post",
        time: "2d ago",
        preview: "Useful information for everyone!",
        unread: true
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "NannyA",
        action: "liked your post",
        time: "5m ago",
        preview: "Great post about child safety!",
        unread: true
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "Parent4",
        action: "liked your post",
        time: "5m ago",
        preview: "Great post about child safety!",
        unread: true
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "NannyB",
        action: "liked your post",
        time: "5m ago",
        preview: "Great post about child safety!",
        unread: true
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "NannyC",
        action: "liked your post",
        time: "5m ago",
        preview: "Great post about child safety!",
        unread: true
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "Parent5",
        action: "liked your post",
        time: "5m ago",
        preview: "Great post about child safety!",
        unread: true
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "NannyD",
        action: "liked your post",
        time: "5m ago",
        preview: "Great post about child safety!",
        unread: true
    },
    
];


const populateNotification = (notification, templateNotification) => {
    const notificationImage = templateNotification.querySelector(".notification-image");
    notificationImage.src = notification.profileImg;
    
    const notificationUsername = templateNotification.querySelector(".notification-username");
    notificationUsername.textContent = notification.username;
    
    const notificationAction = templateNotification.querySelector(".notification-action");
    notificationAction.textContent = notification.action;
    
    const notificationTime = templateNotification.querySelector(".notification-time");
    notificationTime.textContent = notification.time;

    
    if (notification.unread) {
        templateNotification.classList.add("unread"); 
    }
};

const createNotifications = (notificationsData) => {
    const notificationContainer = document.getElementById("notification-container"); 
    const templateNotification = document.querySelector(".notification-card"); 

    if (!notificationContainer || !templateNotification) {
        console.error("Notification container or template not found!");
        return;
    }

    notificationsData.forEach((notification) => {
        const newNotification = templateNotification.cloneNode(true);  // Clone the notification template
        newNotification.style.display = "block";  // Make the cloned notification visible
        populateNotification(notification, newNotification);  // Populate with data
        notificationContainer.appendChild(newNotification);  
    });
};

// Event listener to load notifications after the page is loaded
document.addEventListener('DOMContentLoaded', loadNotificationCard);