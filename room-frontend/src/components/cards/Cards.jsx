'use client';

import { Box, Card, Text, Avatar, Badge } from "@mantine/core";
import React, { useEffect, useState } from 'react';
import { getAvatar } from "@/app/api";


const Cards = ({ name, id, acStatus }) => {

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
            {/* Render your card content here using props */}
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>

                <Avatar src={`data:image/svg+xml,${encodeURIComponent(avatars ?? "")}`} alt="avatar" size={"125"} ta={'center'} />


                <Text size='lg' style={{
                    marginTop: "16px",
                    fontWeight: '600'
                }}>Name of Occupant</Text>
                <Box mb={'5'}>Room Temprature : 10</Box>
                <Box mb={'5'}><Badge color="red">Heating</Badge></Box>
            </Box>
        </Card >
    );
}

export default Cards;
