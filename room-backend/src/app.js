const express = require('express');
const cors = require('cors');
const buildingRoutes = require('./routes/buildingRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/building', buildingRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});




// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = process.env.PORT || 3001;
// const data = require('./data/data');

// let appData = data;
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// // Function to generate a random integer between min  and max
// function getRandomInt(min, max) {

//     const temp = Math.floor(Math.random() * (max - min + 1)) + min;
//     console.log(temp);
//     return temp;
// }

// // Generate random temperature value between 10 and 40
// function getRandomTemperature() {
//     return getRandomInt(10, 40);
// }


// const setAcStatus = async (data) => {

//     data?.building?.rooms?.forEach((item) => {
//         if (!item.temp) {
//             item.temp = getRandomTemperature();
//         }
//         if (!item.id) {
//             item.id = data?.building?.rooms?.length;
//         }

//         if (item.temp > data?.building?.defaultTemp) {
//             item.acStatus = true;
//         }
//         else {
//             item.acStatus = false;
//         }
//     })
//     appData = data;
//     console.log(appData.building.rooms)
// };

// // app.get('/building/', (req, res) => {
// //     const id = req.params.id;
// //     const resData = ;
// //     res.send(resData);
// // });

// const setDefaultTemp = async (temp) => {
//     data.building.defaultTemp = Number(temp);
// }

// app.get('/building', async (req, res) => {
//     await setAcStatus(appData);
//     res.send(appData);
// });

// // request to add a new room
// app.post('/addroom', async (req, res) => {
//     const newData = req.body;
//     appData.building.rooms.push(newData); // Push newData into the rooms array
//     await setAcStatus(appData);
//     res.send(appData);
// });


// app.post('/setTemp', async (req, res) => {
//     await setDefaultTemp(req.body.defaultTemp);
//     await setAcStatus(data);
//     res.send(appData);
// })
// app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
// });
