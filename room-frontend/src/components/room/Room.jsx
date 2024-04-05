'use client'
import { Grid, GridCol } from "@mantine/core";
import { useState, useEffect } from "react";
import Cards from "../cards/Cards";
const Room = (rooms) => {
    console.log(rooms);
    const [cards, setCards] = useState([]);
    const [screenSize, setScreenSize] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth; // Initialize with the initial screen width
        }
        return 0; // Default value if window is not available
    });

    useEffect(() => {
        console.log(rooms);
        setCards(rooms.rooms);

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
                    <Cards name={item.name} />
                </GridCol>
            ))}
        </Grid>
    );
}

export default Room;
