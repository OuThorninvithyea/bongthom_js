
const dot = `<span class='dot'>●</span>`;
const joblist = document.querySelector("#jobs-list");
const newpink = `<img src="./images/newpink.png" alt="pink">`;
const newblue = `<img src="./images/new.png" alt="blue">`;
const companyLogo = `<img src="./images/companydetials.png" alt="company">`;

// Job titles data
export const jobDataTitle = [
  { title: "Financial Advisor (FA)", isNew: true },
  { title: "Customer Service", isNew: true },
  { title: "Design, Monitoring and Evaluation Officer for CSBD, Operation Monitoring Officer for CSBD, and Project Coordinator for AC Union" },
  { title: "IT Manager /Senior IT officer and Junior/Senior Credit Officer" },
  { title: "Branch Officer, Branch Assistant, and Sales & Customer Service Agent" },
  { title: "Warehouse Assistant" },
  { title: "Database QAQC Officer, Database/IT Officer, and Database QAQC Team Leader" },
  { title: "Backend Developer and Human Resource Assistant" },
  { title: "House Coordinator Assistant- GHCA" },
  { title: "Communication & Marketing Consultant" },
  { title: "បុគ្គលិកផ្នែកអគិ្គសនី និង បុគ្គលិកអនាម័យ" },
  { title: "Senior Insurance Sale Consultant" },
  { title: "មន្រ្តីគណនេយ្យ និងរដ្ឋបាល" },
  { title: "Accounting Assistant." },
  { title: "Sales Executive" },
  { title: "English Teacher និង បុគ្គលិកផ្នែកបើកបររថយន្តធនទេសចរណ៍ (ឡានវ៉ាន)" },
  { title: "National Expert for Community Fish Refuge Technology and Management" },
  { title: "Various Positions" },
  { title: "មន្រ្តីឥណទាន" },
  { title: "Customer Development Manager" },
  { title: "Driver, and Trainee ECCD an Dynamic" },
  { title: "Political Specialist" },
  { title: "Receptionist" },
  { title: "Specialized in computer skills (InDesign + Photoshop)" },
  { title: "Programmers" },
  { title: "Inbound Travel Consultant" },
  { title: "Human Resource Development Officer" },
  { title: "Program Coordinator" },
  { title: "Finance Manager/Accounting Manager,Credit Officer, and Teller" },
  { title: "Community Welfare Services Project Assistant" },
  { title: "Native Teachers & Cambodian Teachers of English Needed" },
  { title: "HR & Compliance Assistant" },
  { title: "Training Technical Support Oﬃcer" },
  { title: "Human Resource Intern, Land & Livelihood Intern, and Research & Information Intern" },
  { title: "Community Development Program Secretary (program manager) and Admin Assistant (Internship)" },
  { title: "Restaurant Manager / Restaurant supervisor/Chef and Service/ kitchen Crew" },
  { title: "Vehicle Disposal Notice (Ref. No.: JUH/15/001)" },
  { title: "Deputy Head of Risk Management & Compliance and Network Administrator" },
  { title: "Various Positions" },
  { title: "Call for Tender for Consultancy Service for A Final Evaluation of a Youth Sexual Reproductive Health Project in Cambodia" },
  { title: "Program Officer" },
  { title: "Specialist, Agency Administration and Administration Assistant" },
  { title: "Backend Developers" },
  { title: "Sales Administration Assistant and Cleaner" },
  { title: "Human Resource Management (HRM) Consultant" },
  { title: "Request for Information" },
  { title: "Accountant, and Sales Assistant" },
  { title: "Various Positions" },
  { title: "Cook" },
  { title: "Document Controller /Project Assistant" },
  { title: "Sound Specialist in Charge of Professional Music Studio Implementation" },
  { title: "Performing Art School (PAS) Administrator and Sales & Marketing Supervisor" },
];


// Job company names data
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
  {company:"G4s Security Services (Cambodia)"},
  {company: "Men's Health Social Services"},
  {company:"Whitex Garment (Cambodia) Co.Ltd"},
  {company:"KBCS (Cambodia) Microfinance Institution Plc."},
  {company:"Greate Peace Cambodia"},
  {company:"Apple Tree School"},
  {company:"Whitex Garment (Cambodia) Co.Ltd"},
];

// Render job listings with titles and companies
export function loopingjobs() {
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
