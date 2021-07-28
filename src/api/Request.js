import API from "./Api";

export const getMonth = async (finalDate) => {
  let res = await API.post("/api/month", {begin:finalDate[0],end:finalDate[1]});
  return res.data;
};

export const getEvents = async () => {
  let res = await API.get("/admin/events")
  return res.data;
};

export const getDate = async (currentDate) => {
  let res = await API.post("/api/date", { date: currentDate })
  return res.data;
}
