const projects = [
    {
        title: "Project 1",
        imageUrl: "./Images/coding.png",
        description: "Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Project 2",
        imageUrl: "./Images/coding.png",
        description: "Description of Project 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        title: "Project 3",
        imageUrl: "./Images/coding.png",
        description: "Description of Project 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

// Create project cards dynamically
const projectList = document.getElementById("project-list");
projects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "border p-4 rounded-lg shadow-lg bg-white dark:bg-gray-800 group hover:shadow-xl transition-transform transform-gpu hover:scale-105 relative";
    projectCard.innerHTML = `
        <div class="relative group flex items-center justify-center">
            <img src="${project.imageUrl}" alt="${project.title}" class="w-full h-64 object-cover rounded-t-lg">
        </div>
        <h3 class="text-xl font-semibold my-2">${project.title}</h3>
        <p class="text-gray-700">${project.description}</p>
    `;
    projectList.appendChild(projectCard);
});
