import API from "./Api";

export const getEvents = async () => {
    let res=await API.get("/api/calendar")
    console.log(res.data)
    return res.data;
};
