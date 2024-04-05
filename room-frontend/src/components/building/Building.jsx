'use client'
import React, { useEffect, useState } from 'react'
import styles from './building.module.css'
import { IconTemperatureCelsius } from '@tabler/icons-react';
import Room from '../room/Room';
// import { getData } from '@/app/api';
function Building({ data }) {
    useEffect(() => {
        setRequestedTemp(20);
        setRooms(data.building.rooms.length);
    }, [])
    const [buildingNo, setBuildingNo] = useState(1);
    const [requestedTemp, setRequestedTemp] = useState(25);
    const [rooms, setRooms] = useState(0);

    return (<>
        <h1 className={styles.container}>Building - {buildingNo}</h1>
        <div className={styles.container}>No of Rooms : {rooms}</div>
        <div className={styles.container}>Requested Temprature : {requestedTemp} <IconTemperatureCelsius /></div>
        <div><Room rooms={data?.building?.rooms} /></div>
    </>
    )
}

export default Building