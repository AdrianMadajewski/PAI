function isEmpty(string) {
    let length = string.length;
    if (length == 0) return true;
    return false;
}

function isWhiteSpaceOrEmpty(str) {
    return /^[\s\t\r\n]*$/.test(str);
}

function checkEmail(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    return email.test(str);
}

function isEmailValid(str) {
    let email = /^[a-zA-Z_0-9\.]+@[a-zA-Z_0-9\.]+\.[a-zA-Z][a-zA-Z]+$/;
    return !email.test(str);
}

function validate(form) {
    flag = true;
    if (!checkStringAndFocus(form.elements["f_imie"], "Podaj imie", isWhiteSpaceOrEmpty)) flag = false;
    if (!checkStringAndFocus(form.elements["f_nazwisko"], "Podaj nazwisko", isWhiteSpaceOrEmpty)) flag = false;
    if (!checkStringAndFocus(form.elements["f_kod"], "Podaj kod", isWhiteSpaceOrEmpty)) flag = false;
    if (!checkStringAndFocus(form.elements["f_ulica"], "Podaj ulice", isWhiteSpaceOrEmpty)) flag = false;
    if (!checkStringAndFocus(form.elements["f_miasto"], "Podaj miasto", isWhiteSpaceOrEmpty)) flag = false;
    if (!checkStringAndFocus(form.elements["f_email"], "Podaj email", isEmailValid)) flag = false;
    return flag;
}

function checkString(string_to_check, message) {
    if (isWhiteSpaceOrEmpty(string_to_check)) {
        alert(message)
        return false;
    }
    return true;
}


function checkStringAndFocus(obj, msg, validateFunction) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (validateFunction(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else {
        document.getElementById(errorFieldName).innerHTML = "";
        return true;
    }
}

function checkEmailAndFocus(obj, msg) {
    let str = obj.value;
    let errorFieldName = "e_" + obj.name.substr(2, obj.name.length);
    if (!checkEmail(str)) {
        document.getElementById(errorFieldName).innerHTML = msg;
        obj.focus();
        return false;
    }
    else {
        document.getElementById(errorFieldName).innerHTML = "";
        return true;
    }
}

// ZADANIE 22 I DALEJ

function showElement(e) {
    document.getElementById(e).style.visibility = 'visible';
}
function hideElement(e) {
    document.getElementById(e).style.visibility = 'hidden';
}