
export const getAvatar = async (name) => {
    try {
        const res = await fetch(`https://api.dicebear.com/7.x/initials/svg?seed=${name}`); // dice bear is an open source library I have used for creating Avatars
        const data = res.text();
        return data;
    }
    catch (error) {
        console.log("Error in fetching data");
    }
}

export const getData = async () => {
    try {
        const res = await fetch('http://localhost:3001/building', { cache: 'no-store' });
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }

}


export async function addRoom(roomName) {
    const payload = {
        name: roomName
    };

    try {
        const response = await fetch('http://localhost:3001/addroom', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            return true;
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        throw new Error(error);
    } finally {
        window.location.reload();
    }
}


export async function setTemprature(temp) {
    const payload = {
        defaultTemp: temp
    };

    try {
        const response = await fetch('http://localhost:3001/setTemp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            return true;
        } else {
            throw new Error(response.statusText);
        }
    } catch (error) {
        throw new Error(error);
    } finally {
        window.location.reload();
    }
}

