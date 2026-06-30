
const rssFeedList = document.querySelector("#rss-feeds-list");
const cellcardimg = `<img src="./images/feed-icon.gif" alt="cardimg">`;

// RSS feeds data
export const rssFeedsData = [
  { text: "All current jobs" },
  { text: "All current classifieds" },
  { text: "BUSINESS - Lease or Sale" },
  { text: "COMPUTERS / IT - For Sale" },
  { text: "HOUSES/FLATS - For Sale" },
  { text: "HOUSES/FLATS - For Rent" },
  { text: "LAND - For Sale" },
  { text: "SHOPS & SERVICES" },
];

// Render RSS feeds list
export function loopingRssFile() {
  rssFeedList.innerHTML = "";

  for(let i =0; i < rssFeedsData.length; i++){
    rssFeedList.innerHTML += "<div class='sb-pink-row rss-link'>" + cellcardimg + rssFeedsData[i].text + "</div>";
  }

}
