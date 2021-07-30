import axios from "axios";
import API, { BASEURL } from "./Api";

export const getMonth = async (finalDate) => {
  let res = await API.post("/api/month", { begin: finalDate[0], end: finalDate[1] });
  return res.data;
};

export const getEvents = async () => {
  if(localStorage.getItem('jwtToken')){
    let res = await API.get('/admin/events', { headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}` } })
    return (res.data)
  }
  else{
    let res = {};
    res.data = null;
  }
};


export const getDate = async (currentDate) => {
  let res = await API.post("/api/date", { date: currentDate })
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
    localStorage.setItem('jwtToken', res.data);
    return
  } catch (err) {
    console.error(err);
    return
  }
}
