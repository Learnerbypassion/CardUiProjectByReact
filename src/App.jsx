import Card from "./components/Card.jsx";
const jobOpenings = [
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/4138/4138124.png", //insta
    companyName: "Instagram",
    postedDate: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/10096/10096351.png", // amazon
    companyName: "Amazon",
    postedDate: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/15707/15707820.png", //whatsapp
    companyName: "Whatsapp",
    postedDate: "10 days ago",
    post: "Cloud Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/15707/15707784.png", // snapchat
    companyName: "Snapchat",
    postedDate: "1 week ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/3670/3670147.png", //youtube
    companyName: "Youtube",
    postedDate: "3 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/3621/3621448.png", //pintrest
    companyName: "Pintrest",
    postedDate: "10 weeks ago",
    post: "Content writer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$68/hr",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/733/733609.png", //Github
    companyName: "Github",
    postedDate: "4 days ago",
    post: "Data Analyst",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hr",
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/128/919/919853.png", // Docker
    companyName: "Docker",
    postedDate: "6 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hr",
  },
];
const App = () => {
  return (
    <div id="main">
      {jobOpenings.map((val, index) => {
        return (
          <div key={index}>
            <Card
              logo={val.brandLogo}
              name={val.companyName}
              time={val.postedDate}
              post={val.post}
              tag1={val.tag1}
              tag2={val.tag2}
              pay={val.pay}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
