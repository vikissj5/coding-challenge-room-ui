
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
        const res = await fetch('http://localhost:3001/building');
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }

}
