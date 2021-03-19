

export const isValidUserName = (name) => {
    const letters = /^[a-z ,.'-]+$/i;
    if (name.length >= 2 && name.match(letters)) {
        return true
    } else {
        alert("Invalid Username, try again");
        return false;
    }
}

export const isValidBroName = (name) => {
    const letters = /^[a-z ,.'-]+$/i;
    if (name.length >= 2 && name.match(letters)) {
        return true
    } else {
        alert("Enter your real name");
        return false;
    }
}

export const isValidBroLocation = (name) => {
    const letters = /^[a-z ,.'-]+$/i;
    if (name.length >= 2 && name.match(letters)) {
        return true
    } else {
        alert("Enter a real city Bro!");
        return false;
    }
}

const isValidBrofile = (brofile) =>
    isValidUserName(brofile.bro_username) &&
    isValidBroName(brofile.bro_name) &&
    isValidBroLocation(brofile.bro_location)

export default isValidBrofile;