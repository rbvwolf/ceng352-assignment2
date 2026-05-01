const message = document.getElementById('message');
class Validator {
   
    // Name and surname validation
    validateName(name) {
        if (!name || name.trim() === ""){ 
            message.innerText = "Fill the blank space and only use letter!";
            message.style.color = "red";
            return false;}
        const nameRegex = /^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]+$/;
        return nameRegex.test(name);
    }

    // Email validation
    validateEmail(email) {
        if (!email)
             return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Date validation
    validateDateOfBirth(dob) {
        if (!dob) 
            return false;
        const dobRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
        return dobRegex.test(dob);
    }

    // Password validation (BVA)
    validatePassword(password, confirmPassword) {
        if (!password || !confirmPassword){ 
            message.innerText = "Error: Password must be at least 8 characters!";
            message.style.color = "red";
            return false;}
        if (password.length >= 8 && password === confirmPassword)
            return true;
        else{
            message.innerText = "Error: Passwords do not match!";
            message.style.color = "red";
            return false;}
    }
}

module.exports = Validator;