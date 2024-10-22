// JavaScript to handle the animation for the box
document.addEventListener("DOMContentLoaded", function() {
    const weddingBox = document.getElementById("weddingBox");

    // Add fade-in effect when the page loads
    setTimeout(() => {
        weddingBox.classList.add("show");
    }, 100); // Delay for smoother transition

    // Click event to animate the box
    weddingBox.addEventListener("click", () => {
        // Add a scaling effect for a brief moment
        weddingBox.style.transform = "scale(1.05)";
        setTimeout(() => {
            weddingBox.style.transform = "scale(1)";
        }, 200);
    });
});
