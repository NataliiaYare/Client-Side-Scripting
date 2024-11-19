function setCookie() {
  const cookieName = "cookieName";
  const cookieValue = "GCCrockets";
  const expirationDates = 7;

  // Create date for cookie expiration

  const date = new Date();
  date.setTime(date.getTime() + expirationDates * 24 * 60 * 60 * 1000);

  // set cookie

  document.cookie = `${cookieName} = ${cookieValue}; expires${date.toUTCString()}; path = /`;
}
