
function validatePhone() {
    let phone = document.getElementById("phone");
    if (!phone.value.match(/^\d{10}$/)) {
        alert("Please enter a valid 10-digit phone number.");
        phone.focus();
    }
}
function showEventFee() {
    let eventType = document.getElementById("eventType").value;
    let feeDisplay = document.getElementById("eventFee");
    let fee = eventType === "Concert" ? "$50" : eventType === "Workshop" ? "$30" : "$20";
    feeDisplay.innerText = "Event Fee: " + fee;
}

document.getElementById("registerBtn").onclick = function () {
    alert("Your event registration has been submitted!");
};

document.getElementById("eventImage").ondblclick = function () {
    this.style.width = "200px";
    this.style.height = "200px";
};

document.getElementById("feedback").onkeyup = function () {
    document.getElementById("charCount").innerText = "Characters: " + this.value.length;
};

document.getElementById("promoVideo").oncanplay = function () {
    document.getElementById("videoStatus").innerText = "Video ready to play!";
};

function savePreference() {
    let selectedEvent = document.getElementById("eventType").value;
    localStorage.setItem("preferredEvent", selectedEvent);
    alert("Event preference saved!");
}


function loadPreference() {
    let savedEvent = localStorage.getItem("preferredEvent");
    if (savedEvent) {
        document.getElementById("eventType").value = savedEvent;
    }

function clearPreferences() {
    localStorage.clear();
    alert("Preferences cleared!");
}


function findLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                alert("Your Location: " + position.coords.latitude + ", " + position.coords.longitude);
            },
            function (error) {
                alert("Error in fetching location: " + error.message);
            },
            { enableHighAccuracy: true }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}


console.log("Script Loaded Successfully!");
window.onload = function () {
    loadPreference();
};
