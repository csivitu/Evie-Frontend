import axios from "axios";
import API, { BASEURL } from "./Api";

export const getMonth = async (finalDate) => {
  let res = await API.post("/api/month", { begin: finalDate[0], end: finalDate[1] });
  return res.data;
};

export const getEvents = async () => {
  let res = await API.get('/admin/events', { headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}` } })
  return (res.data)
};


export const getDate = async (currentDate) => {
  let res = await API.post("/api/date", { date: currentDate })
  console.log(res)
  return res.data;
}

export const getToken = async (uname, password) => {
  try {
    const res = await axios({
      url: `${BASEURL}/admin/login`,
      method: "post",
      data: { uname, password },
    }
    );
    console.log(res.data);
    localStorage.setItem('jwtToken', res.data);
    return
  } catch (err) {
    console.error(err);
    return
  }
}
