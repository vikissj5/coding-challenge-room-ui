import React, { useEffect, useState } from 'react'
import { useDisclosure } from '@mantine/hooks';
import { Button, Input, Modal } from '@mantine/core';
import { addRoom } from '@/app/api';

function AddRoomModal({ openModal, setModalOpen }) {
    const [occupantName, setOccupantName] = useState("")
    useEffect(() => {
        if (openModal) {
            open();
        }
        else {
            close();
        }
    }, [openModal]);

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={() => {
                setModalOpen(false);
            }} title="Add Room">
                <Input placeholder='Enter Name of Occupant' onChange={(e) => { setOccupantName(e.target.value) }} />
                <Button mt={10} variant='filled' onClick={() => {
                    addRoom(occupantName);
                    close();
                }}>Add Room</Button>
            </Modal>
        </>
    );
}

export default AddRoomModal