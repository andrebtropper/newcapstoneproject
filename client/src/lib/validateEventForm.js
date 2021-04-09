export const isValidEventTitle = (name) => {
    const letters = /^[a-z ,.'-]+$/i;
    if (name.length >= 2 && name.match(letters)) {
        return true
    } else {
        alert("Invalid Event Title, try again");
        return false;
    }
}

export const isValidEventLocation = (location) => {
    const letters = /^[a-z ,.'-]+$/i;
    if (location.length >= 2 && location.match(letters)) {
        return true
    } else {
        alert("Enter a real location BRO!");
        return false;
    }
}


export const isValidMonth = (month) => {
    if (month !== '') {
        return true
    } else {
        alert("You have to choose a month BRO!")
        return false
    }
}

export const isValidDay = (day) => {
    if (day !== '') {
        return true
    } else {
        alert("You have to choose a month BRO!")
        return false
    }
}
export const isValidAbout = (description) => {
    if (description.length >= 100 && description.length <= 750) {
        return true
    } else {
        alert("Not a valid description BRO!");
        return false;
    }
}
const isValidEvent = (event) =>
    isValidEventTitle(event.event_title) &&
    isValidEventLocation(event.event_location) &&
    isValidMonth(event.event_month) &&
    isValidDay(event.event_day) &&
    isValidAbout(event.event_description)

export default isValidEvent;