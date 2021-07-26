import API from "./Api";

export const getEvents = async () => {
    let res=await API.get("/api/calendar")
    return res.data;
};
