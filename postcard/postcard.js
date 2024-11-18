async function loadPostCard() {
    const postCardPlaceholder = document.getElementById("center");
    const response = await fetch("postcard/postcard.html");
    const postCardHtml = await response.text();
    postCardPlaceholder.innerHTML = postCardHtml;

    //populatePost(postData);
    createPosts(posts);
    initializeAddPostFeature("add", "post-modal", "close-modal", "post-form");


}




const toggleCommentsDisplay = (postElement) => {
    const commentList = postElement.querySelector("#comments-list");
    const commentsToggleButton = postElement.querySelector(".comments-toggle");
    const comments = Array.from(commentList.children);

    if (commentsToggleButton.textContent === "Show all comments") {
        // Show all comments
        comments.forEach((comment) => (comment.style.display = "flex"));
        commentsToggleButton.textContent = "Show less";
    } else {
        // Show only the first two comments
        comments.forEach((comment, index) => {
            comment.style.display = index < 2 ? "flex" : "none";
        });
        commentsToggleButton.textContent = "Show all comments";
    }
};




const handleComment = (post, postElement) => {
    const commentInput = postElement.querySelector("#comment-input");
    const commentList = postElement.querySelector("#comments-list");
    const commentsCount = postElement.querySelector("#comments");
    const commentsSection = postElement.querySelector(".comments-list"); // Get the comments section

    const newComment = commentInput.value.trim();

    if (newComment) {
        // Create a new comment element
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        const commentProfileImg = document.createElement("img");
        commentProfileImg.classList.add("comment-profile-img");
        commentProfileImg.src = "../img/profile.jpg"; // Replace with actual profile image path
        commentProfileImg.alt = "User Profile";
        
        const commentContent = document.createElement("div");
        commentContent.classList.add("comment-content");

        const commentUsername = document.createElement("span");
        commentUsername.classList.add("comment-username");
        commentUsername.textContent = post.username;

        const commentText = document.createElement("p");
        commentText.classList.add("comment-text");
        commentText.textContent = newComment;

        commentContent.appendChild(commentUsername);
        commentContent.appendChild(commentText);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-comment");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            commentList.removeChild(commentElement);
            post.comments -= 1;
            commentsCount.textContent = `${post.comments} Comments`;
        });

        commentElement.appendChild(commentProfileImg);
        commentElement.appendChild(commentContent);
        commentElement.appendChild(deleteButton);

        commentList.appendChild(commentElement);

        commentInput.value = "";

        post.comments += 1;
        commentsCount.textContent = `${post.comments} Comments`;

        if (post.comments === 1) {
            commentsSection.classList.remove("hidden");
        }

        // Reapply visibility rules
        toggleCommentsDisplay(postElement);
    }
};

const initializeComments = (postElement) => {
    const commentList = postElement.querySelector("#comments-list");
    const commentsToggleButton = document.createElement("button");
    commentsToggleButton.classList.add("comments-toggle");
    commentsToggleButton.textContent = "Show all comments";

    commentList.after(commentsToggleButton);

    commentsToggleButton.addEventListener("click", () => {
        toggleCommentsDisplay(postElement);
    });

    // Show only the first two comments by default
    const comments = Array.from(commentList.children);
    comments.forEach((comment, index) => {
        comment.style.display = index < 2 ? "flex" : "none";
    });
};


    

const posts = [
    {
        profileImg:"../img/dado_profile.webp",
        username: "BabySitter1",
        location: "1d · Prishtine, Kosove",
        content: "Hi! I’m [Your Name], an experienced and caring nanny with [X] years of experience in childcare. I’m passionate about providing a safe, nurturing, and fun environment for children. I enjoy engaging kids in creative activities, helping with homework, and ensuring they feel loved and supported. I’m available for [full-time/part-time] work and can provide references upon request. Looking forward to helping your family!",
        images:["../img/Cute-Room.jpg", "../img/another_room1.png"],
        likes: 125,
        comments: 10,
        isLiked: false,
    },
    {
        profileImg:"../img/profile.jpg",
        username: "BabySitter2",
        location: "2d · Gjilan, Kosove",
        content: "Looking for experienced babysitters!",
        images: ["../img/recieve.png"],
        likes: 200,
        comments: 15,
        isLiked: false,
    },
];


// Function to handle the like/unlike toggle
const toggleLike = (post, likesElement, heartIcon) => {
    post.isLiked = !post.isLiked; // Toggle the like status
    if (post.isLiked) {
        post.likes += 1; // Increment likes
        heartIcon.classList.add("fa-solid"); // Change to solid heart
        heartIcon.classList.remove("fa-regular");
        heartIcon.style.color = "#e2687e";

         // Add hover effect for the liked state
         heartIcon.addEventListener("mouseenter", () => {
            heartIcon.style.color = "#e2687e"; 
        });
        heartIcon.addEventListener("mouseleave", () => {
            heartIcon.style.color = "#e2687e"; // Reset to liked green
        });
    } else {
        post.likes -= 1; // Decrement likes
        heartIcon.classList.add("fa-regular"); // Change back to regular heart
        heartIcon.classList.remove("fa-solid");
        heartIcon.style.color = "black"; 

          // Add hover effect for the unliked state
          heartIcon.addEventListener("mouseenter", () => {
            heartIcon.style.color = "#e2687e"; // 
        });
        heartIcon.addEventListener("mouseleave", () => {
            heartIcon.style.color = "black"; // Reset to unliked gray
        });
    }
    likesElement.textContent = `${post.likes} likes`; // Update the likes text
};
const populatePost = (post, templatePost) => {
    templatePost.querySelector("#profile-img").src = post.profileImg;
    templatePost.querySelector("#username").textContent = post.username;
    templatePost.querySelector("#location").textContent = post.location;
    templatePost.querySelector("#content").textContent = post.content;

    const imagesContainer = templatePost.querySelector("#images");
    imagesContainer.innerHTML = "";
    post.images.forEach((imgSrc) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        imagesContainer.appendChild(img);
    });

    const likesElement = templatePost.querySelector("#likes");
    likesElement.textContent = `${post.likes} likes`;
    templatePost.querySelector("#comments").textContent = `${post.comments} Comments`;

    const heartButton = templatePost.querySelector(".fa-heart");
    heartButton.addEventListener("click", () => {
        toggleLike(post, likesElement, heartButton);
    });

    const submitCommentButton = templatePost.querySelector("#submit-comment");
    submitCommentButton.addEventListener("click", () => {
        handleComment(post, templatePost);
    });

    // Initialize comments visibility and toggle button
    initializeComments(templatePost);
};


// Function to dynamically create posts and append them to the container
const createPosts = (postsData) => {
    const postContainer = document.getElementById("post-container");
    const templatePost = document.querySelector(".post");

    // Check if post container and template exist
    if (!postContainer || !templatePost) {
        console.error("Post container or template not found!");
        return;
    }

    postsData.forEach((post) => {
        const newPost = templatePost.cloneNode(true); // Clone the hidden template
        newPost.style.display = "block"; // Make the cloned post visible
        populatePost(post, newPost); // Populate the cloned post with data
        postContainer.appendChild(newPost); // Append the populated post to the container
    });
};



document.addEventListener('DOMContentLoaded', loadPostCard);
/*// Data for the post
const postData = {
    profileImg: "../img/dado_profile.webp",
    username: "BabySitter",
    location: "1d · Prishtine, Kosove",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptatum officia...",
    images: ["../img/Cute-Room.jpg", "../img/another_room1.png"],
    likes: 925,
    comments: 23
  };
  
  // Function to populate post content dynamically
  const populatePost = (data) => {
    // Update the profile image
    const profileImg = document.getElementById("profile-img");
    profileImg.src = data.profileImg;
  
    // Update the username
    const username = document.getElementById("username");
    username.textContent = data.username;
  
    // Update the location
    const location = document.getElementById("location");
    location.textContent = data.location;
  
    // Update the content text
    const content = document.getElementById("content");
    content.textContent = data.content;
  
    // Update images
    const imagesContainer = document.getElementById("images");
    imagesContainer.innerHTML = ""; // Clear any existing images
    data.images.forEach((imgSrc) => {
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = "Post Image";
      imagesContainer.appendChild(img);
    });
  
    // Update likes and comments
    const likes = document.getElementById("likes");
    likes.textContent = `${data.likes} likes`;
  
    const comments = document.getElementById("comments");
    comments.textContent = `${data.comments} Comments`;
  };
  
  // Populate the post with the data*/

  // Create and populate multiple posts
// Data for multiple posts