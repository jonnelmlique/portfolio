// Get the projectid from the URL
const urlParams = new URLSearchParams(window.location.search);
const projectid = urlParams.get("projectid");

// Define your projects array
const projects = [
    {
        projectid: "1",
        title: "Project 1",
        imageUrl: "./Images/coding.png",
        description: "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        projectid: "2",
        title: "Project 2",
        imageUrl: "./Images/coding.png",
        description: "Description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        projectid: "3",
        title: "Project 3",
        imageUrl: "./Images/coding.png",
        description: "Description of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

// Find the project in your projects array based on projectid
const project = projects.find((p) => p.projectid === projectid);

// Update the content on the details.html page with the project details
if (project) {
    const titleElement = document.getElementById("project-title");
    const descriptionElement = document.getElementById("project-description");
    const imageElement = document.getElementById("project-image");

    titleElement.textContent = project.title;
    descriptionElement.textContent = project.description;

    // Update the image source
    imageElement.src = project.imageUrl;
    imageElement.alt = project.title;
} else {
    // Handle the case where the projectid is not found
    console.error("Project not found.");
}
