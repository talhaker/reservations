var reservations = {
    'Bob': { claimed: false },
    'Ted': { claimed: true }
}

var name = '';

// INDIVIDUAL EXERCISE 2
var claimReservation = function() {
    name = prompt('Please enter the name for your reservation');
    for (let prop in reservations) {
        if (name.toLowerCase() === prop.toLowerCase()) {
            if (reservations[prop].claimed) {
                alert("Reservation for " + prop + " already claimed");
            } else {
                alert("Welcome " + prop + "!");
            }

            return;
        }
    }

    alert("Sorry, no reservation found for " + name + "...");
}

// INDIVIDUAL EXERCISE 1
var addNonReserved = function() {
    name = prompt('Please enter the name for your reservation');
    reservations[name] = { claimed: true };
    alert("Welcome " + name + "!");
}

claimReservation();
addNonReserved();