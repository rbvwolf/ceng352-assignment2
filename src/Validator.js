class Validator {
   
    // Name and surname validation
    validateName(name) {
        if (!name || name.trim() === ""){ 
            return false;}
        if (name.length > 50)
            return false;
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
            return false;}
        if (password.length >= 8 && password === confirmPassword)
            return true;
        else
            return false;
    }
}

module.exports = Validator;