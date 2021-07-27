import API from "./Api";

export const getEvents = async () => {
    let res=await API.get("/admin/events")
    return res.data;
};
