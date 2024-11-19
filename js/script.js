// Make the profile section dynamic
document.querySelector(".edit-button").addEventListener("click", () => {
    const name = prompt("Enter your name:", "Filan Fisteku");
    const status = prompt("Enter your status:", "Status");
    const bio = prompt("Enter your bio:", "Hello I'm a nanny...");

    if (name) document.querySelector(".name").textContent = name;
    if (status) document.querySelector(".status").textContent = status;
    if (bio) document.querySelector(".bio-box").textContent = bio;
});