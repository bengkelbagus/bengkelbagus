export const isOnMobilePhoneFetch = () => {
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  )
    return true;
  return false;
};

export const trimString = (data, maxChar = 10) => {
  console.log(data);
  return data.split(" ").slice(0, -1).join(" ").length > 10
    ? data.split(" ").slice(0, -1).join(" ").slice(0, maxChar) + "..."
    : data.split(" ").slice(0, -1).join(" ");
};

export const currencyFormat = function currencyFormat(num) {
  const numberFormat = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  const price = numberFormat.format(num);
  return price.split(",")[0];
};

export const dateFormat = function dateFormat(date) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};
