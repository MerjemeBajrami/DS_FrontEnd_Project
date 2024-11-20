document.addEventListener("DOMContentLoaded", () => {
    // Data for the dynamic content
    const content = {
        story: `
        <p>Hi, my name is <span contenteditable="false" id="user-name">[Your Name]</span>, and caring for children has always been a part of my life.</p>
        <p>Growing up in a large family, I was often the go-to babysitter for my younger siblings and cousins, which sparked my passion for working with kids.</p>
        <p>Over the past [X years], I've had the privilege of helping families by providing loving and reliable care to their little ones.</p>
        <p>I believe every child deserves a safe, happy environment to grow and explore.</p>
        <p>That's why I strive to create a nurturing atmosphere where kids feel valued, supported, and free to be themselves.</p>
        <p>Whether it's building block towers, helping with homework, or simply listening to their stories, I aim to bring a sense of warmth and encouragement into their day.</p>
        <p>In addition to my hands-on experience, I'm certified in [First Aid/CPR/other relevant certifications], and I continuously look for ways to improve my skills to better serve the families I work with.</p>
        <p>I take pride in being dependable, adaptable, and a positive influence in children's lives.</p>
        <p>Outside of nannying, I enjoy [your hobbies/interests, e.g., “cooking healthy meals, exploring nature, and reading children's books that spark creativity”].</p>
        <p>These interests often inspire the activities I share with the kids I care for!</p>
        <p>I'm excited to meet your family and learn how I can support you in raising happy, confident, and well-rounded children.</p>
        `,
        skills: `
        <p>First Aid & CPR Certified: Trained to handle emergencies and ensure children's safety.</p>
        <p>Organizational Skills: Skilled in planning daily routines, activities, and meals.</p>
        <p>Effective Communication: Adept at understanding children's needs and maintaining open communication with parents.</p>
        <p>Creativity: Enjoy crafting engaging activities like art projects, storytelling, and educational games.</p>
        <p>Adaptability: Capable of managing various age groups and adjusting care to suit individual needs.</p>
        <p>Patience & Empathy: Creating a warm and supportive environment for children to thrive.</p>
        `,
        experience: `
        <p>Private Nanny for [X Years]</p>
        <p>Provided care for children aged [range] by creating safe, engaging environments and fostering developmental growth.</p>
        <p>Assisted with homework and school projects.</p>
        <p>Prepared healthy meals and snacks tailored to dietary needs.</p>
        <p>Organized fun and educational activities for children, including outdoor play and crafts.</p>
        <p>Volunteer at [Local Community Center/Program Name]</p>
        <p>Worked as a caregiver and mentor, assisting with youth programs and events.</p>
        <p>Supervised groups of children during workshops and play sessions.</p>
        <p>Supported children with special needs by offering personalized attention.</p>
        <p>Babysitter for Family & Friends</p>
        <p>Helped families by providing reliable childcare for events, weekends, and evenings.</p>
        <p>Established strong relationships with children and parents.</p>
        <p>Managed bedtime routines and conflict resolution effectively.</p>
        `,
    };

    const titles = {
        story: "My Story",
        skills: "Skills",
        experience: "Experience"
    };

    // Select elements for content switching
    const links = document.querySelectorAll(".summary ul li a");
    const contentDiv = document.getElementById("content");
    const title = document.getElementById("title");

    // Handle dynamic content switching
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const section = event.target.getAttribute('data-section');
            contentDiv.innerHTML = content[section];
            title.textContent = titles[section];
        });
    });

    // Editable profile toggle functionality
    const editButton = document.getElementById('edit_profile');
    const elementsToEdit = document.querySelectorAll('[contenteditable="false"]');

    // This will allow toggling the 'contenteditable' attribute
    editButton.addEventListener("click", () => {
        // If it's in "Edit" mode, allow editing
        if (editButton.textContent === "Edit") {
            elementsToEdit.forEach(element => {
                // Toggle contenteditable to true
                element.contentEditable = "true";
            });
            editButton.textContent = "Save";
        } else {
            // If it's in "Save" mode, save the changes
            updateProfile();
            elementsToEdit.forEach(element => {
                // Set contenteditable to false to make it non-editable
                element.contentEditable = "false";
            });
            editButton.textContent = "Edit";
        }
    });

    // Function to update profile information dynamically
    function updateProfile() {
        const userNameElement = document.getElementById('user-name');
        const contentElement = document.getElementById('content');

        // Check if elements exist before accessing them
        if (userNameElement && contentElement) {
            // Grab the editable data
            const userName = userNameElement.textContent;
            const storyText = contentElement.textContent;

            // Update the content on the page based on changes
            document.getElementById('user-name').textContent = userName;
            content.story = storyText;  // Example of saving changes to 'story'

            // Optional: Save data to localStorage or backend if needed
            // localStorage.setItem('userProfile', JSON.stringify({
            //     userName,
            //     storyText
            // }));

            // Notify user that the changes have been saved
            alert('Profile changes have been saved!');
        } else {
            console.error("Elements not found!");
        }
    }
});
