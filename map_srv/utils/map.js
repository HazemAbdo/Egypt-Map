function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomParty = (governorate) => {
  const parties = [
    `Nation's Future Party`,
    `Republican People's Party`,
    `New Wafd Party`,
    `Homeland Defenders Party`,
    `Modern Egypt Party`,
    `Reform and Development Party`,
    `Egyptian Social Democratic Party`,
  ];
  return (
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    `<h1 id="firstHeading" class="firstHeading">${governorate}</h1>` +
    `<h2 id="secondHeading" class="secondHeading">${
      parties[getRandomInt(0, parties.length - 1)]
    }</h2>` +
    "</div>"
  );
};

module.exports = { randomParty };
