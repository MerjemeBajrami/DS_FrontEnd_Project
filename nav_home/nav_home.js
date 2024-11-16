async function loadNav() {
    try {
        const navPlaceholder = document.getElementById("nav-placeholder");
        const response = await fetch("nav_home/nav_home.html"); // Ensure this path is correct
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const navHtml = await response.text();
        navPlaceholder.innerHTML = navHtml;
        // Initialize active link highlighting
        setActiveLink();
    } catch (error) {
        console.error("Error loading navbar:", error);
    }
}
// Function to highlight the active link based on the current page
function setActiveLink() {
    const navItems = document.querySelectorAll(".nav-item");
    const currentPath = window.location.pathname.split("/").pop(); // Get current file name (e.g., 'home.html')
    navItems.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
}
// Load the navbar after the DOM is ready
document.addEventListener("DOMContentLoaded", loadNav);
