// Function to generate a random integer between min (inclusive) and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

// Generate random temperature value between 10 and 40
function getRandomTemperature() {
    return getRandomInt(10, 40);
}


const data = {
    building: {
        defaultTemp: 25,
        rooms: [
            {
                id: 1,
                name: "Alice",
                temp: getRandomTemperature(),
                acStatus: null,
            },
            {
                id: 2,
                name: "Bob",
                temp: getRandomTemperature(),
                acStatus: null
            },
            {
                id: 3,
                name: "Charlie",
                temp: getRandomTemperature(),
                acStatus: null,
            },
            {
                id: 4,
                name: "David",
                temp: getRandomTemperature(),
                acStatus: null
            }
        ]
    }
}

module.exports = data;
