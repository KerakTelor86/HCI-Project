function isBetween(val, min, max) {
    return val >= min && val <= max;
}

function isLower(char) {
    return isBetween(char, 'a', 'z');
}

function isUpper(char) {
    return isBetween(char, 'A', 'Z');
}

function isNumeric(char) {
    return isBetween(char, '0', '9');
}

function isAlpha(str) {
    for(let i = 0; i < str.length; ++i) {
        if(!isLower(str.charAt(i)) && !isUpper(str.charAt(i))) {
            return false;
        }
    }
    return true;
}

function wordCount(str) {
    return str.split(' ').length;
}

function verifyEmail(email) {
    var temp = email.split('@');
    if(temp.length != 2) {
        window.alert('Email must have recipient and domain');
        return false;
    } else if(wordCount(email) != 1) {
        window.alert('Email address cannot have spaces');
        return false;
    } else if(temp[1].split('.').length < 2) {
        window.alert('Email address must use valid domain');
        return false;
    } else {
        return true;
    }
}

function verifyPassword(password, confirmPw) {
    if (password !== confirmPw) {
        window.alert('Password confirmation does not match');
        return false;
    } else if(password.length < 6) {
        window.alert('Password must be at least 6 characters long');
        return false;
    }
    var hasUpperAlpha = false;
    var hasLowerAlpha = false;
    var hasNumber = false;
    for(let i = 0; i < password.length; ++i) {
        if(isLower(password.charAt(i))) {
            hasLowerAlpha = true;
        } else if(isUpper(password.charAt(i))) {
            hasUpperAlpha = true;
        } else if(isNumeric(password.charAt(i))) {
            hasNumber = true;
        }
    }
    if(hasUpperAlpha && hasLowerAlpha && hasNumber) {
        return true;
    } else {
        var problems = 'Password contains the following problems:';
        if(!hasUpperAlpha) {
            problems += '\n - Password must contain uppercase character';
        }
        if(!hasLowerAlpha) {
            problems += '\n - Password must contain lowercase character';
        }
        if(!hasNumber) {
            problems += '\n - Password must contain numbers';
        }
        window.alert(problems);
        return false;
    }
}

function verifyAddress(address) {
    if(wordCount(address) < 2) {
        window.alert('Address must contain at least 2 words');
        return false;
    } else {
        return true;
    }
}

function validateForm() {
    var data = document.getElementById('form');
    var email = data['email'].value;
    var password = data['password'].value;
    var confirmPw = data['confirmPw'].value;
    var address = data['address'].value;
    if(!verifyEmail(email)) {
        return false;
    } else if(!verifyPassword(password, confirmPw)) {
        return false;
    } else if(!verifyAddress(address)) {
        return false;
    } else {
        return true;
    }
}