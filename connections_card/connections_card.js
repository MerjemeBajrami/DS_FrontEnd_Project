const connections = [
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "NannyA",
        action: "sent you a connect",
        unread: true,
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "NannyB",
        action: "sent you a connect",
        unread: false,
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "Parent 1",
        action: "sent you a connect",
        unread: true,
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "NannyC",
        action: "sent you a connect",
        unread: false,
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "Parent 2",
        action: "sent you a connect",
        unread: true,
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "NannyD",
        action: "sent you a connect",
        unread: false,
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "Parent 3",
        action: "sent you a connect",
        unread: true,
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "Parent 4",
        action: "sent you a connect",
        unread: true,
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "Parent 5",
        action: "sent you a connect",
        unread: true,
    },
    {
        profileImg: "https://w7.pngwing.com/pngs/584/113/png-transparent-pink-user-icon.png",
        username: "Parent 6",
        action: "sent you a connect",
        unread: true,
    }
];

// Function to load and display connection cards
async function loadConnectionCards() {
    const connectionsContainer = document.getElementById("center"); // Ensure this is your connections page container
    const response = await fetch("connections_card/connections_card.html");
    const connectionsCardHtml = await response.text();
    connectionsContainer.innerHTML = connectionsCardHtml;

    // Create connection cards dynamically
    createConnections(connections);
}

// Function to populate the connection card with data
const populateConnectionCard = (connection, templateCard) => {
    const connectionImage = templateCard.querySelector(".connection-image");
    connectionImage.src = connection.profileImg;

    const connectionUsername = templateCard.querySelector(".connection-username");
    connectionUsername.textContent = connection.username;

    const connectionAction = templateCard.querySelector(".connection-action");
    connectionAction.textContent = connection.action;

    // Optionally, if the connection is unread, apply a style
    if (connection.unread) {
        templateCard.classList.add("unread");
    }

    // Add functionality to buttons (Accept and Decline)
    const acceptBtn = templateCard.querySelector(".accept-btn");
    const declineBtn = templateCard.querySelector(".decline-btn");

    acceptBtn.addEventListener("click", () => {
        console.log(`Connection request from ${connection.username} accepted`);
        templateCard.style.display = "none"; // Remove the connection card
    });

    declineBtn.addEventListener("click", () => {
        console.log(`Connection request from ${connection.username} declined`);
        templateCard.style.display = "none"; // Remove the connection card
    });
};

// Function to create the connection cards
const createConnections = (connectionsData) => {
    const connectionsContainer = document.getElementById("center"); // Container where connections will be displayed
    const templateCard = document.querySelector(".connection-card"); // The hidden template

    if (!connectionsContainer || !templateCard) {
        console.error("Connection container or template card not found!");
        return;
    }

    connectionsData.forEach((connection) => {
        const newConnection = templateCard.cloneNode(true);  // Clone the template
        newConnection.style.display = "block";  // Make it visible
        populateConnectionCard(connection, newConnection);  // Populate with data
        connectionsContainer.appendChild(newConnection);  // Append to the container
    });
};

// Event listener to load the connection cards when the page is ready
document.addEventListener('DOMContentLoaded', loadConnectionCards);