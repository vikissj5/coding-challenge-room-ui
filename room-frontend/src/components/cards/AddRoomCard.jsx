'use client';

import { Box, Card } from "@mantine/core";
import React, { useEffect, useState } from 'react';
import { IconCirclePlus } from '@tabler/icons-react';
import AddRoomModal from "@/commons/modal/AddRoomModal";

const AddRoomCards = () => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            {/* Render your card content here using props */}
            <Box style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}

            >
                <IconCirclePlus stroke={1} onClick={() => {
                    console.log("clickef");
                    setOpenModal(!openModal);
                }} />
                <AddRoomModal openModal={openModal} setModalOpen={setOpenModal} />
            </Box>
        </Card >
    );
}

export default AddRoomCards;
