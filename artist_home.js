const selectedArtist = localStorage.getItem("selectedArtist");
const itemsSold = document.getElementById("items-sold");
const incomeTotal = document.getElementById("total-income");

if (selectedArtist) {
  const nameOfArtist = document.getElementById("nameOfArtist");
  nameOfArtist.textContent = selectedArtist;

  const items = JSON.parse(localStorage.getItem("items")) || [];

  let soldItems = 0;
  let totalIncome = 0;
  
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.artist === selectedArtist) {
      if (item.dateSold && item.priceSold) {
        soldItems++;
        totalIncome += item.priceSold;
      }
    }
  }

  const totalItems = items.filter((item) => item.artist === selectedArtist).length;

  itemsSold.textContent = `${soldItems}/${totalItems}`;
  incomeTotal.textContent = `$${totalIncome}`;
}