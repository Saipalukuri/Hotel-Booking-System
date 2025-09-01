
// Smooth scroll to sections
document.querySelector(".book-button").addEventListener("click", () => {
    document.querySelector(".form-container").scrollIntoView({ 
        behavior: "smooth" 
    });
});

document.querySelector(".know-button").addEventListener("click", () => {
    document.querySelector(".about-section").scrollIntoView({ 
        behavior: "smooth" 
    });
});

// Help button interaction
document.querySelector(".help-button").addEventListener("click", () => {
    alert("Need help? Call us at +91-9876543210 or email support@hotel.com");
});

// Form validation
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let date = document.getElementById("booking-date").value;
    let room = document.getElementById("room-type").value;

    if (!name || !email || !date || !room) {
        alert("⚠️ Please fill in all fields before booking.");
        return;
    }

    // Simple email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("❌ Please enter a valid email address.");
        return;
    }

    // Check booking date (must be today or future)
    let today = new Date().toISOString().split("T")[0];
    if (date < today) {
        alert("📅 Booking date must be today or in the future.");
        return;
    }

    // Success message
    alert(`✅ Thank you, ${name}! Your ${room.replace("-", " ")} has been booked for ${date}.`);
    this.reset();
});

