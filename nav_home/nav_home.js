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
        initializeSearchIcon();
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

function initializeSearchIcon() {
    const search = document.getElementById("search_icon");
    const input = document.getElementById("search-bar");

    console.log("Search element:", search); // Debugging
    console.log("Input element:", input);  // Debugging

    if (search && input) {
        search.addEventListener("click", function () {
            // Toggle the width property between 0 and the desired width
            if (input.style.width === "0px" || input.style.width === "") {
                input.style.width = "100px";  // Set to desired width when visible
            } else {
                input.style.width = "0px";  // Collapse the input to 0 width
            }
        });
    } else {
        console.error("Required elements are missing.");
    }
}





// Load the navbar after the DOM is ready
document.addEventListener("DOMContentLoaded", loadNav);