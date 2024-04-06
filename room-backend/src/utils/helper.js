const getRandomInt = (min, max) => {
    const temp = Math.floor(Math.random() * (max - min + 1)) + min;
    return temp;
};

const getRandomTemperature = () => {
    return getRandomInt(10, 40);
};

const setAcStatus = async (data) => {
    data?.building?.rooms?.forEach((item) => {
        if (!item.temp) {
            item.temp = getRandomTemperature();
        }
        if (!item.id) {
            item.id = data?.building?.rooms?.length;
        }

        if (item.temp > data?.building?.defaultTemp) {
            item.acStatus = true;
        }
        else {
            item.acStatus = false;
        }
    })
    return data;
};

const setDefaultTemp = async (temp) => {
    return Number(temp);
};

module.exports = {
    getRandomInt,
    getRandomTemperature,
    setAcStatus,
    setDefaultTemp
};
