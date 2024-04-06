'use client'
import { Grid, GridCol } from "@mantine/core";
import { useState, useEffect, useMemo } from "react";
import Cards from "../cards/Cards";
import AddRoomCards from "../cards/AddRoomCard";
const Room = (rooms) => {
    const [cards, setCards] = useState([]);
    const [screenSize, setScreenSize] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth; // Initialize with the initial screen width
        }
        return 0; // Default value if window is not available
    });

    const memoizedCards = useMemo(() => {
        console.log(rooms);
        return rooms.rooms;
    }, []);

    useEffect(() => {
        setCards(memoizedCards);
    }, [memoizedCards]);


    useEffect(() => {

        const handleResize = () => {
            setScreenSize(window.innerWidth); // Update screen size on resize
        };

        if (typeof window !== 'undefined') {
            window.addEventListener("resize", handleResize); // Add event listener if running in the browser

            return () => {
                window.removeEventListener("resize", handleResize); // Cleanup 
            };
        }
    }, []);

    return (
        <Grid overflow="hidden" style={{ margin: '20px' }}>
            {cards && cards.map((item) => (
                <GridCol span={screenSize <= 768 ? 12 : screenSize <= 1024 ? 6 : 3} key={item.id}>
                    <Cards name={item.name} acStatus={item.acStatus} temp={item.temp} id={item.id} />
                </GridCol>
            ))}
            <GridCol span={screenSize <= 768 ? 12 : screenSize <= 1024 ? 6 : 3} >
                <AddRoomCards />
            </GridCol>
        </Grid>
    );
}

export default Room;
