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
  return ` ${getOrdinalNum(date.getDate())} ${monthString(
    date.getMonth()
  )} ${date.getHours()}:${date.getMinutes()}`;
};

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
