const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const data = require('./data/data');

let appData = data;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/building/:id', (req, res) => {
    const id = req.params.id;

    const resData = appData.filter(item => item.id == id);
    res.send(resData);
});

// request to add a new room
app.post('/addroom', (req, res) => {
    const newData = req.body;
    appData = [...data, newData];
    res.send(appData);
})


app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
