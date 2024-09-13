// Function to toggle visibility and change button text
function toggleSectionVisibility(sectionId: string, buttonId: string, showText: string, hideText: string): void {
    const section = document.getElementById(sectionId);
    const button = document.getElementById(buttonId);
    
    if (section && button) {
        if (section.style.display === "none") {
            section.style.display = "block";
            button.textContent = hideText;  // Change button text to "Hide"
        } else {
            section.style.display = "none";
            button.textContent = showText;  // Change button text to "Show"
        }
    }
}

// Event listeners for the toggle buttons
document.getElementById("toggle-skills-btn")?.addEventListener("click", () => {
    toggleSectionVisibility("skills", "toggle-skills-btn", "Show Skills", "Hide Skills");
});

document.getElementById("toggle-work-btn")?.addEventListener("click", () => {
    toggleSectionVisibility("work-experience", "toggle-work-btn", "Show Work Experience", "Hide Work Experience");
});
