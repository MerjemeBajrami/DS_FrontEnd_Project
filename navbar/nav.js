// Function to load the navbar from the navbar folder and inject it into the page
async function loadNav() {
    const navPlaceholder = document.getElementById("nav-placeholder");
    const response = await fetch("navbar/nav.html");
    const navHtml = await response.text();
    navPlaceholder.innerHTML = navHtml;

    // Once the navbar is injected, set the active link
    setActiveLink();
    setActiveLink2();
}

function setActiveLink() {
    // Get all the navigation links
    const navItems = document.querySelectorAll('.nav-item');
    
    // Get the current hash in the URL (e.g., #about, #features)
    const currentHash = window.location.hash;

    // Iterate over all the nav items
    navItems.forEach(link => {
        // Compare the link's href (ending with the hash) with the current hash
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Remove 'active' class from other links
        }
    });
}

function setActiveLink2() {
    // Get all the navigation links
    const navItems = document.querySelectorAll('.nav-item2');
    
    // Get the current hash in the URL (e.g., #sign_up, #faq)
    const currentHash = window.location.hash;

    // Iterate over all the nav items
    navItems.forEach(link => {
        // Compare the link's href (ending with the hash) with the current hash
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Remove 'active' class from other links
        }
    });
}

// Listen for hash changes in the URL (e.g., when you click a nav link)
window.addEventListener('hashchange', () => {
    setActiveLink();
    setActiveLink2();
});


// Get all the dropdown items


// Load the navbar when the page is ready
document.addEventListener('DOMContentLoaded', loadNav);



