const otherservices = document.querySelector("#other-services");

// Job quick list categories data
export const jobQuickListData = [
  { text: "Special Schedule", heading: "heading" },
  { text: "Part-time", count: 19 },
  { text: "Short-term", count: 6 },
  { text: "Organization Type", heading: "heading" },
  { text: "Bar / Restaurant", count: 14 },
  { text: "Embassy", count: 3 },
  { text: "Government", count: 3 },
  { text: "Govt. + NGO Project", count: 2 },
  { text: "Individual Person", count: 1 },
  { text: "International Org.", count: 71 },
  { text: "NGO", count: 80 },
  { text: "Private Organization", count: 268 },
  { text: "Real Estate Agent", count: 1 },
  { text: "School / University", count: 13 },
  { text: "Other Announcements", heading: "heading"},
  { text: "Call for Proposals", count: 3 },
  { text: "Expression of Interest", count: 5 },
  { text: "Invitation for Bids", count: 4 },
  { text: "Training / Workshops", count: 4 },
  { text: "All job categories...", style: "blue" },
]


// Render job quick list categories
export function loopJobQuickList() {
  otherservices.innerHTML = "";

  for(let i =0; i  < jobQuickListData.length; i++){
    const checkHeading = jobQuickListData[i].heading ? "heading" : "";
    const arrow = jobQuickListData[i].heading ? "" : "»";
    const checkCount = jobQuickListData[i].count ? "<span class='count'>(" + jobQuickListData[i].count + ") </span>" : "";
    otherservices.innerHTML += "<tr><td class='sb-pink-row other-services " + checkHeading + "'>" + arrow + " " + jobQuickListData[i].text + " " + checkCount + "</td></tr>";
  }
}

