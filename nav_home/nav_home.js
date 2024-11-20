async function loadNav() {
    try {
        const navPlaceholder = document.getElementById("nav-placeholder");
        const response = await fetch("nav_home/nav_home.html"); 
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const navHtml = await response.text();
        navPlaceholder.innerHTML = navHtml;
       
        setActiveLink();
        initializeSearchIcon();
    } catch (error) {
        console.error("Error loading navbar:", error);
    }
   

    
}

function setActiveLink() {
    const navItems = document.querySelectorAll(".nav-item");
    const currentPath = window.location.pathname.split("/").pop(); 
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

    console.log("Search element:", search); 
    console.log("Input element:", input);  

    if (search && input) {
        search.addEventListener("click", function () {
         
            if (input.style.width === "0px" || input.style.width === "") {
                input.style.width = "200px"; 
            } else {
                input.style.width = "0px";  
            }
        });
    } else {
        console.error("Required elements are missing.");
    }
}






document.addEventListener("DOMContentLoaded", loadNav);
