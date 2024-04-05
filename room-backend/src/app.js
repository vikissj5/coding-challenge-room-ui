const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const data = require('./data/data');

let appData = data;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const setAcStatus = async (data) => {

    data?.building?.rooms?.forEach((item) => {
        if (item.temp > data?.building?.defaultTemp) {
            item.acStatus = true;
        }
        else {
            item.acStatus = false;
        }
    })
    appData = data;
};

// app.get('/building/', (req, res) => {
//     const id = req.params.id;
//     const resData = ;
//     res.send(resData);
// });

const setDefaultTemp = async (temp) => {
    data.building.defaultTemp = Number(temp);
}

app.get('/building', async (req, res) => {
    await setAcStatus(data);
    res.send(appData);
});

// request to add a new room
app.post('/addroom', async (req, res) => {
    const newData = req.body;
    appData.building.rooms.push(newData); // Push newData into the rooms array
    await setAcStatus(appData);
    res.send(appData);
});


app.post('/setTemp', async (req, res) => {
    await setDefaultTemp(req.body.temp);
    await setAcStatus(data);
    res.send(appData);
})
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
