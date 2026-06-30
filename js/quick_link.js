const iconQlQuickList = `<img src="./images/lpicon.png" alt="iconQl">`;
const jobQuickList = document.querySelector("#job-quick-lists");
const facebookimgRender = `<img src="./images/facebook.jpg" alt="facebookimg">`;

// Quick link sidebar data
export const quickLinkData = [
  { text: "Contact us", style: "blue" },
  { text: "Post Your CV" },
  { text: "Add New Job" },
  { text: "Add New Classified" },
  { text: "List of Companies", badge: "New" },
  { text: "Live Music & Dj Gig Guide", iconQl: true },
  { text: "See the Bong Thom dot Com Jobs on Facebook", style: "blue" ,textAlgin: "center", facebookImg: true }, ];


// Render quick link sidebar
export function loopQuickLink() {
  jobQuickList.innerHTML = "";

  for(let i =0; i < quickLinkData.length; i++){
    const checkBlue = quickLinkData[i].style === "blue" ? "blue" : "";
    const checkIconql = quickLinkData[i].iconQl ? iconQlQuickList : "";
    const checkTextAlgin = quickLinkData[i].textAlgin ? "ql-align-text-center" : "";
    const faceBookCheck = quickLinkData[i].facebookImg ? facebookimgRender : "";
    const arrow = quickLinkData[i].textAlgin ? "" : " » ";
    jobQuickList.innerHTML += "<td class='sb-pink-row " + checkBlue + " " + checkTextAlgin + "'>" + faceBookCheck + arrow + quickLinkData[i].text + checkIconql + "</td>";

  }

}
