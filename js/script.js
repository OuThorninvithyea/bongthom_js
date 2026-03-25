const jobDataTitle = [
  {title: "Financial adipose (FA)", isNew: true},
  {title: "Customer services", isNew: true},
  {title: "Design, Monitoring"},
  {title: "IT Manager / Senor It offices and Junior/Senior Credit Officer"},
  {title: "Branch Officer, Branch Assistant, and Sales & Customer services Agent"},
  {title: "Warehouse Assistant"},
  {title: "Database QA QC offices, Database/IT Offices, and Database QA QC Team Leader"},
  {title: "Backend Developer abd Humand Resoruces Assistant"},
  {title:"Souse Coordinator Assistant- GHCA"},
  {title:"Communications & Marketing Consulatant"},
  {title:"Senior Insurance Salse consultant"},
  {title:"Accounting ASsistant"},
  {title:"English Teacher and Driver"},
  {title:"National Expert for Community Fish Refuge Technology and Management"},
  {title:"Various Positions"},
  {title:"Customer Development Mananger"},
  {title:"Political Specialist"},
  {title:"Receptionist"},
  {title:"Specialized in compute skill (InDeisgn + PhotoShop"},
  {title:"Programmers"},
  {title:"Inbound Travel Consultant"},
  {title:"Human Resource Development Officers"},
  {title:"Program Coordinator"},
  {title:"Finance manager/Accounting Manager,Credit officer, and Teller"},
  {title:"Commnity Welfare Services Project Assistant"},
  {title:"Native Techer & Cmabodian Teachers"},
  {title:"Hr & Compliance Assistant"},
  {title:"Tranning Technical Support Officer, and Teller"},
  {title:"Human Resouce Intern, :and & Livelihood intern and research & Information Intern"},
  {title:"Community Development Program Secretary (program manager) andAdmin Assistant (Internship)"},
  {title:"Resturant manager / Restaurant supervoise/Chef and Services"},
  {title:"Vechicle Disposal Notice (Ref. No.: JUH/15/001)"},
  {title:"Deputy Head of Risk Management & Compliance and Network Administrator"},
  {title:"Various Posistions"},
  {title:"Call for Tender for Consultancy Services for A Final Evaluation of Youth Sexual Reproductive Health Project in Cambodia"},
  {title:"Program officer"},
  {title:"Specialist, Agency Administration and Administration Assistant"},
  {title:"Backend Developer"},
  {title:"Sales Administration Assistant and Cleaner"},
  {title:"Human Resource Management (HRM) Consultant"},
  {title:"Request For Information"},
  {title:"Accountant, and Sales Assistant"},
  {title:"Various Posistions"},
  {title:"Cook"},
  {title:"Document controller /Project Assistant"},
  {title:"Sound specialist in Charge of Professional Music Studio Implementations"},
  {title:"Performing Art School (PAS) Administrator and Sales & Marketing Supervisor"}
];

const jobDataCompany = [
  {company: "Royal Index Pte.,Ltd"},
  {company: "Krawa Co."},
  {company:"bong thomg"},
  {company:"OTRESS TECHNOLOGY"},
  {company:"World Vision Cambodia"},
  {company:"microfinance Amatak Capital Plc."},
  {company:"Credit Mutuel Kampuchea"},
  {company:"Room to Read organizations"},
  {company:"Norwegian people's Aid"},
  {company:"Branch of Golden Gekko Ltd."},
  {company:"Awareness Cambodia"},
  {company:"ACTED"},
  {company:"Ministry of Health"},
  {company:"Milvik (Cambodia) Plc"},
  {company:"Reproductive Health Association of Cambodia"},
  {company:"handicap international"},
  {company:"CAMBOSIANA Co.LTD"},
  {company:"Enfants du Mekong"},
  {company:"Food and Agriculture organization"},
  {company:"VisionFund Cambodia"},
  {company:"ELITE MICROLIVE"},
  {company:"British American Tobacco (Cambodia) Limitied"},
  {company:"Krousar Yoeung"},
  {company: ".US. Embassy"},
  {company:"Univeristy Research Co.LLC"},
  {company:"Melon Rouge Agency Co.,Ltd"},
  {company:"PLAN-B(Cambodia) Co."},
  {company:"EXO Travel Cambodia"},
  {company:"Life With Dignity"},
  {company:"Korsang"},
  {company:"KBCS (Cambodia) Microfinance Institution Plc."},
  {company:"Greate Peace Cambodia"},
  {company:"Apple Tree School"},
  {company:"Whitex Garment (Cambodia) Co.Ltd"},
  {company:"SILAKA"},
  {company:"NGO Forum On Cambodia"},
  {company:"Cambodia YMCA"},
  {company:"I love you"},
  {company:"The Johanniter"},
  {company:"Amert"},
  {company: "Men's Health Social Services"},
  {company: "ACTED"},
  {company: "Advocacy and Policy Institute"},
  {company:"Manulife"},
  {company: "Golden Gekko University"},
  {company:"G4s Security"},
  {company:"G4s Security Services (Cambodia)"}
];

const classiFiedsData = [
  {title:"Newly renovated Hotel/Apartment for sale in Siem Reap $34,999"},
  {title: "*❤*available now! 3bed=1000$ whole small furnished wooden villa for rent"},
  {title:"21 unit aparment with swimming pool, furnished wooden villa for rent"},
  {title: "hello"},
];

const classiFiedsDatadetails = [
  {detail: "BUSINESS - Lease or Sale"},
  {detail: "HOUSES/FLATS - For Rent"},
  {detail: "CAMBODIANA Co.LTD"},
]

const jobQuickListData = [
  { text: "Contact us", style: "blue" },
  { text: "Post Your CV" },
  { text: "Add New Job" },
  { text: "Add New Classified" },
  { text: "List of Companies", badge: "New" },
  { text: "Live Music & Dj Gig Guide", iconQl: true },
  { text: "See the Bong Thom dot Com Jobs on Facebook", style: "blue" ,textAlgin: "center" }  
]

const otherServicesData = [
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


const joblist = document.querySelector("#jobs-list");
const dot = `<span class='dot'>●</span>`;
const companyLogo = `<img src="./images/companydetials.png" alt="company">`;
const newpink = `<img src="./images/newpink.png" alt="pink">`;
const newblue = `<img src="./images/new.png" alt="blue">`;
const classifieds = document.querySelector("#classifieds-list");
const iconQlQuickList = `<img src="./images/lpicon.png" alt="iconQl">`;
const jobQuickList = document.querySelector("#job-quick-lists");
const otherservices = document.querySelector("#other-services");



function loopJobQuickList() {
  jobQuickList.innerHTML = "";

  for(let i =0; i < jobQuickListData.length; i++){
    const checkBlue = jobQuickListData[i].style === "blue" ? "blue" : "";
    const checkIconql = jobQuickListData[i].iconQl ? iconQlQuickList : "";
    const checkTextAlgin = jobQuickListData[i].textAlgin ? "ql-align-text-center" : "";
    jobQuickList.innerHTML += "<td class='sb-pink-row " + checkBlue + " " + checkTextAlgin + "'> » " + jobQuickListData[i].text + checkIconql + "</td>";

  }

}
loopJobQuickList(); 

function loopingOtherservicesData() {
  otherservices.innerHTML = "";

  for(let i =0; i  < otherServicesData.length; i++){
    const checkHeading = otherServicesData[i].heading ? "heading" : "";
    const arrow = otherServicesData[i].heading ? "" : "»";
    const checkCount = otherServicesData[i].count ? "<span class='count'>(" + otherServicesData[i].count + ") </span>" : "";
    otherservices.innerHTML += "<tr><td class='sb-pink-row other-services " + checkHeading + "'>" + arrow + " " + otherServicesData[i].text + " " + checkCount + "</td></tr>";
  }
}

loopingOtherservicesData();

function loopingjobs() {
  joblist.innerHTML = "";

  for (let i = 0; i < jobDataTitle.length; i++) {
    const newIconDisplay = jobDataTitle[i].isNew ? newpink :  newblue;

    let row = "<tr class='job-title-wrap'>";
    row += "<td class='title'>" + dot + newIconDisplay + "<span class='title-text'>" + jobDataTitle[i].title + "</span></td>";

    // Check if a corresponding company exists for this index
    if (jobDataCompany[i]) {
      row += "<td><div class='company-info'><span class='job-company'>(" + jobDataCompany[i].company + ")</span><span class='company-logo'>" + companyLogo + "</span></div></td>";
    }

    row += "</tr>";
    joblist.innerHTML += row;
  }
}

// functions for looping quick View Latest Job
loopingjobs();


// rendering classified data
function loopingclassifed() {
  classifieds.innerHTML = "";

  for(let i = 0; i < classiFiedsData.length; i++) {
    classifieds.innerHTML += "<li class='classified-data-title'>" + classiFiedsData[i].title + "</li>";

    if (classiFiedsDatadetails[i]) {
      classifieds.innerHTML += "<li class='qv-detail'>" + classiFiedsDatadetails[i].detail + "</li>";
    }
  }
}

loopingclassifed();

//sidebar rendering 

function loopingsidebarinfo ()  {
  
}
