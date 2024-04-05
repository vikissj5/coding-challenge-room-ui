

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