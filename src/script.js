document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');
    
    // BVA Test for Password
    if (password.length < 8) {
        message.innerText = "Error: Password must be at least 8 characters!";
        message.style.color = "red";
        return;
    }

    // EP Test for Password
    if (password !== confirmPassword) {
        message.innerText = "Error: Passwords do not match!";
        message.style.color = "red";
        return;
    }

    message.innerText = "Account Created Successfully!";
    message.style.color = "green";
});

const nameInputs = [document.getElementById('firstName'), document.getElementById('lastName')];

nameInputs.forEach(input => {
    input.addEventListener('input', function() {
        // Clean everything except letters
        this.value = this.value.replace(/[^a-zA-ZçğıöşüÇĞİÖŞÜ\s]/g, '');
        
        const message = document.getElementById('message');
        if (/[0-9]/.test(this.value)) {
            message.innerText = "Only use Letters!";
            message.style.color = "red";
        }
    });
});