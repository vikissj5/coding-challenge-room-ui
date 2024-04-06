'use client'
import React, { useEffect, useState } from 'react'
import styles from './building.module.css'
import { IconTemperatureCelsius, IconArrowUp, IconArrowDown } from '@tabler/icons-react';
import Room from '../room/Room';
import { Button } from '@mantine/core';
import { setTemprature } from '@/app/api';


function Building({ data }) {
    useEffect(() => {
        setRequestedTemp(data?.building?.defaultTemp);
        setRooms(data?.building?.rooms?.length);
    }, [data])
    const [buildingNo, setBuildingNo] = useState(1);
    const [requestedTemp, setRequestedTemp] = useState(25);
    const [rooms, setRooms] = useState(0);

    const increaseTemp = () => {
        setRequestedTemp(requestedTemp + 1);
    };

    const decreaseTemp = () => {
        setRequestedTemp(requestedTemp - 1);
    };

    const handleTempChange = () => {
        setTemprature(requestedTemp);
    }
    return (<>
        <h1 className={styles.container}>Building - {buildingNo}</h1>
        <div className={styles.container}>No of Rooms : {rooms}</div>
        <div className={styles.container}>Requested Temprature : {requestedTemp} <IconTemperatureCelsius />
            <Button id='decrease' size='xs' variant='outline' ml={5} mr={5} onClick={decreaseTemp}><IconArrowDown /></Button>
            <Button id='increase' size='xs' variant='outline' onClick={increaseTemp}><IconArrowUp /></Button>
            <Button id="setTemp" size='xs' ml={10} onClick={handleTempChange}>Set</Button>
        </div>
        <div><Room rooms={data?.building?.rooms} /></div>
    </>
    )
}

export default Building