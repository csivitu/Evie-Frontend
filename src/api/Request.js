import axios from "axios";
import API, { BASEURL } from "./Api";

export const getMonth = async (finalDate) => {
  let res = await API.post("/api/month", { begin: finalDate[0], end: finalDate[1] });
  return res.data;
};

export const getEvents = async () => {
  let res = await API.get('/admin/events',{ headers: { Authorization:`Bearer ${localStorage.getItem('jwtToken')}` } })
  return (res.data)  
};


export const getDate = async (currentDate) => {
  let res = await API.post("/api/date", { date: currentDate })
  return res.data;
}

export const getToken = async (uname, password) => {
  axios({
    url: `${BASEURL}/admin/login`,
    method: "post",
    data: {uname,password},
  })
  .then(res => {
    localStorage.setItem('jwtToken', res.data);
    return
  })
  .catch(error => console.error(error));
}
