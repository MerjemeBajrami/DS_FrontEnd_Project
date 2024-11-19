// Make the profile section dynamic
document.querySelector(".edit-button").addEventListener("click", () => {
    const name = prompt("Enter your name:", "Filan Fisteku");
    const status = prompt("Enter your status:", "Status");
    const bio = prompt("Enter your bio:", "Hello I'm a nanny...");

    if (name) document.querySelector(".name").textContent = name;
    if (status) document.querySelector(".status").textContent = status;
    if (bio) document.querySelector(".bio-box").textContent = bio;
});

//Add animations for profile or notifications when the user interacts with them.
document.querySelector(".profile").style.opacity = 0;
document.querySelector(".profile").style.transition = "opacity 1s";
setTimeout(() => {
    document.querySelector(".profile").style.opacity = 1;
}, 500);

// Enhance the "Try Dado on your Mobile" section to show a download modal or redirect
document.querySelector(".app a").addEventListener("click", (event) => {
    event.preventDefault();
    alert("Download the app from your app store!");
});

/* 
Search Functionality
const notifications = document.querySelectorAll("#center > div");
const searchInput = document.querySelector("h1 img");

searchInput.addEventListener("click", () => {
    const searchTerm = prompt("Search notifications:");
    notifications.forEach((notification) => {
        if (notification.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
            notification.style.display = "flex";
        } else {
            notification.style.display = "none";
        }
    });
});
*/

