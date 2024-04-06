const { getRandomTemperature, setAcStatus, setDefaultTemp } = require('../utils/helper');
const data = require('../data/data');
let appData = data;
const setAcStatusController = async (req, res) => {
    try {
        appData = await setAcStatus(appData);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(appData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addRoomController = async (req, res) => {
    try {
        const newData = req.body;
        if (!newData) {
            throw new Error('No data provided');
        }
        appData.building.rooms.push(newData); // Push newData into the rooms array
        await setAcStatus(appData);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(appData);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const setDefaultTempController = async (req, res) => {
    try {
        const defaultTemp = await setDefaultTemp(req.body.defaultTemp);
        if (defaultTemp !== undefined) {
            appData.building.defaultTemp = defaultTemp;
            await setAcStatus(data);
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(appData);
        } else {
            throw new Error('Failed to set default temperature');
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    setAcStatusController,
    addRoomController,
    setDefaultTempController
};
