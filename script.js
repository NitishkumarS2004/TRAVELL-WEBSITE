document.addEventListener("DOMContentLoaded", () => {
    const bookButton = document.getElementById("but");
    const loginButton = document.getElementById("lo");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const nav = document.querySelector(".nav");
    const bookingForm = document.getElementById("bookingForm");
    const greeting = document.getElementById("greeting");
    const changeColorButton = document.getElementById("changeColorButton");
    const colorPicker = document.getElementById("colorPicker");

    
    bookButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

   
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    
    loginButton.addEventListener("click", () => {
        if (loginButton.textContent === "Login") {
            loginButton.textContent = "Logout";
        } else {
            loginButton.textContent = "Login";
        }
    });

   
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "#111";
        } else {
            nav.style.backgroundColor = "transparent";
        }
    });

    
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;

        if (name && email && date) {
            alert(`Thank you for booking, ${name}! We will send a confirmation to ${email}.`);
            modal.style.display = "none";
        } else {
            alert("Please fill in all the fields.");
        }
    });

    
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        greeting.textContent = "Good Morning! Book Today!";
    } else if (currentHour < 18) {
        greeting.textContent = "Good Afternoon! Book Today!";
    } else {
        greeting.textContent = "Good Evening! Book Today!";
    }

    
    changeColorButton.addEventListener("click", () => {
        colorPicker.click();
    });

    colorPicker.addEventListener("input", (event) => {
        document.body.style.backgroundColor = event.target.value;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const bookButton = document.getElementById("but");
    const loginButton = document.getElementById("lo");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const nav = document.querySelector(".nav");
    const bookingForm = document.getElementById("bookingForm");
    const greeting = document.getElementById("greeting");
    const changeColorButton = document.getElementById("changeColorButton");
    const colorPicker = document.getElementById("colorPicker");

   
    bookButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

   
    loginButton.addEventListener("click", () => {
        if (loginButton.textContent === "Login") {
            loginButton.textContent = "Logout";
        } else {
            loginButton.textContent = "Login";
        }
    });

   
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "#111";
        } else {
            nav.style.backgroundColor = "transparent";
        }
    });

    
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;

        if (name && email && date) {
            alert(`Thank you for booking, ${name}! We will send a confirmation to ${email}.`);
            modal.style.display = "none";
        } else {
            alert("Please fill in all the fields.");
        }
    });

    
    

    
    changeColorButton.addEventListener("click", () => {
        colorPicker.click();
    });

    colorPicker.addEventListener("input", (event) => {
        document.body.style.backgroundColor = event.target.value;
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const bookButton = document.getElementById("but");
    const loginButton = document.getElementById("lo");
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const nav = document.querySelector(".nav");
    const bookingForm = document.getElementById("bookingForm");
    const greeting = document.getElementById("greeting");
    const changeColorButton = document.getElementById("changeColorButton");
    const colorPicker = document.getElementById("colorPicker");

    // Display modal when book button is clicked
    bookButton.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Close modal when close button is clicked
    closeButton.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal when clicking outside of it
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Toggle login/logout button text
    loginButton.addEventListener("click", () => {
        loginButton.textContent = loginButton.textContent === "Login" ? "Logout" : "Login";
    });

    // Change navbar background color on scroll
    window.addEventListener("scroll", () => {
        nav.style.backgroundColor = window.scrollY > 50 ? "#111" : "transparent";
    });

    // Handle booking form submission
    bookingForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const date = document.getElementById("date").value;

        if (name && email && date) {
            // AJAX request to send booking data to server
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "/book", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const response = JSON.parse(xhr.responseText);
                        alert(`Thank you for booking, ${name}! We will send a confirmation to ${email}.`);
                        modal.style.display = "none";
                    } else {
                        alert("There was an error processing your booking. Please try again.");
                    }
                }
            };

            const bookingData = JSON.stringify({ name, email, date });
            xhr.send(bookingData);
        } else {
            alert("Please fill in all the fields.");
        }
    });

    // Display greeting based on current time
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        greeting.textContent = "Good Morning! Book Today!";
    } else if (currentHour < 18) {
        greeting.textContent = "Good Afternoon! Book Today!";
    } else {
        greeting.textContent = "Good Evening! Book Today!";
    }

    
    changeColorButton.addEventListener("click", () => {
        colorPicker.click();
    });

    colorPicker.addEventListener("input", (event) => {
        document.body.style.backgroundColor = event.target.value;
    });
});
