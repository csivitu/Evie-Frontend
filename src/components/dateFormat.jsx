export const finalDate = (date) => {
  function getOrdinalNum(n) {
    return (
      n +
      (n > 0
        ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
        : "")
    );
  }
  const monthString = (num) => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return month[num];
  };
  return ` ${getOrdinalNum(date.getDate())} ${monthString(date.getMonth()
  )} ${formatAMPM(date)}`;
};
export function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  hours = '0' + hours;
  hours = hours.slice(-2)
  var strTime = `${hours}:${minutes} ${ampm}`
  return strTime;
}

export const getOrdinalNum = (n) => {
  return (
    n +
    (n > 0
      ? ["th", "st", "nd", "rd"][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : "")
  );
};
export const dayString = (num) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[num];
};
export const monthString = (num) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return month[num];
};

export const modalDate = (date) => {
  return `Events for ${dayString(date.getDay())}, ${getOrdinalNum(
    date.getDate()
  )} ${monthString(date.getMonth())}  `;
};
