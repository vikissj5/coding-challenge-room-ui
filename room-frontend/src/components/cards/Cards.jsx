'use client';

import { Box, Card, Text, Avatar, Badge } from "@mantine/core";
import React, { useEffect, useState } from 'react';
import { getAvatar } from "@/app/api";
import { IconTemperatureCelsius } from '@tabler/icons-react';


const Cards = ({ name, id, acStatus, temp }) => {

    const [avatars, setAvatars] = useState(null);

    useEffect(() => {
        async function getAvatarFor() {
            const avatarName = await getAvatar(name);
            setAvatars(avatarName);
        }
        getAvatarFor();
    }, [])



    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>

                <Avatar src={`data:image/svg+xml,${encodeURIComponent(avatars ?? "")}`} alt="avatar" size={"125"} ta={'center'} />


                <Text size='lg' style={{
                    marginTop: "10px",
                    fontWeight: '600'
                }}> {name}</Text>
                <Box mb={'5'}>Room No : {id}</Box>
                <Box mb={'5'}>Room Temprature : {temp}<IconTemperatureCelsius width={20} height={20} style={{
                    paddingTop: '5px'
                }} /></Box>
                <Box mb={'5'}>status : <Badge color={acStatus ? "blue" : "red"}>{acStatus ? "Cooling" : "Heating"}</Badge></Box>
            </Box>
        </Card >
    );
}

export default Cards;
