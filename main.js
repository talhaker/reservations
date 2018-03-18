var reservations = {
    'Bob': { claimed: false },
    'Ted': { claimed: true }
}

var name = '';

// INDIVIDUAL EXERCISE EXTENSION 1
let claimReservation = function() {
    let x = document.getElementById("my_form");
    let name = x.elements[0].value;

    for (let prop in reservations) {
        if (name.toLowerCase() === prop.toLowerCase()) {
            if (reservations[prop].claimed) {
                alert("Reservation for " + prop + " already claimed");
            } else {
                alert("Welcome " + prop + "!");
            }

            return;
        }
    };

    alert("Sorry, no reservation found for " + name + "...");

    echoReservations();
}

let addNonReserved = function() {
    let x = document.getElementById("my_form");
    let name = x.elements[0].value;

    reservations[name] = { claimed: true };
    alert("Welcome " + name + "!");

    echoReservations();
}

// INDIVIDUAL EXERCISE EXTENSION 2
let wrapper = $('#wrapper'),
    container;
for (let key in reservations) {
    container = $('<div id="reservation_item" class="container"></div>');
    wrapper.append(container);
    if (reservations[key].claimed) {
        container.append('<div>' + key + ' (already seated)</div>');
    } else {
        container.append('<div>' + key + ' (not seated yet)</div>');
    }
}