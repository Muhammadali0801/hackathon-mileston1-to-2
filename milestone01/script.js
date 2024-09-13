var _a, _b;
// Function to toggle visibility and change button text
function toggleSectionVisibility(sectionId, buttonId, showText, hideText) {
    var section = document.getElementById(sectionId);
    var button = document.getElementById(buttonId);
    if (section && button) {
        if (section.style.display === "none") {
            section.style.display = "block";
            button.textContent = hideText; // Change button text to "Hide"
        }
        else {
            section.style.display = "none";
            button.textContent = showText; // Change button text to "Show"
        }
    }
}
// Event listeners for the toggle buttons
(_a = document.getElementById("toggle-skills-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    toggleSectionVisibility("skills", "toggle-skills-btn", "Show Skills", "Hide Skills");
});
(_b = document.getElementById("toggle-work-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    toggleSectionVisibility("work-experience", "toggle-work-btn", "Show Work Experience", "Hide Work Experience");
});
