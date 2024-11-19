document.addEventListener("DOMContentLoaded", () => {
    const content = {
        story: `
        <p>Hi, my name is [Your Name], and caring for children has always been a part of my life.</p>
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
        <p> First Aid & CPR Certified: Trained to handle emergencies and ensure children's safety.</p>
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

    const links = document.querySelectorAll(".summary ul li a");
    const contentDiv = document.getElementById("content");
    const title=document.getElementById("title")

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); 
            const section = event.target.getAttribute('data-section');
            contentDiv.innerHTML = content[section];
            title.textContent = titles[section];

        });
    });
});