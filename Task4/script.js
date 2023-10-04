document.getElementById("calculate-button").addEventListener("click", function() {
    // Get user input
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1; // Month is 0-based
    const year = parseInt(document.getElementById("year").value);

    // Create a Date object based on user input
    const birthDate = new Date(year, month, day);

    // Get the current date
    const currentDate = new Date();

    // Calculate the age
    const ageInMilliseconds = currentDate - birthDate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInYears = ageInDays / 365;

    // Display the age
    const years = Math.floor(ageInYears);
    const days = Math.floor(ageInDays);
    const hours = Math.floor(ageInHours);
    const minutes = Math.floor(ageInMinutes);
    const seconds = Math.floor(ageInSeconds);

    document.getElementById("result").innerHTML = `
        Years: ${years}<br>
        Days: ${days}<br>
        Hours: ${hours}<br>
        Minutes: ${minutes}<br>
        Seconds: ${seconds}
    `;
});