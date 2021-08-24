import techImg from "../images/another-tech-blog-deployed.png";
import passImg from "../images/password-deployed-demo.gif";
import kiskisImg from "../images/kiskis-deployed.png";
import employeeImg from "../images/employee-tracker-demo.gif";
import weatherImg from "../images/weather-dashboard-screenshot.png";
import investmentImg from "../images/investment-wizard-demo.gif";
import employeeDirImg from "../images/employee-directory-screenshot.png";
import growrImg from "../images/growr-screenshot.png";

const portfolioData = [
  {
    title: "growr - Plant trading.",
    description: `Welcome to Growr, a plant exchange app with the focus of promoting community/local gathering and networking through the love of all things plant related. This application was created by a team and I worked primarily on Front End.`,
    image: growrImg,
    languages: ["JavaScript", "React", "Material-UI", "Express"],
    urlDeployed: "",
    urlRepo: "https://github.com/matthewxgoad/growr-plant-exchange",
  },
  {
    title: "React Employee Directory",
    description: `This application was built using React to demonstate understanding of using components and states to build an application.`,
    image: employeeDirImg,
    languages: ["JavaScript", "React"],
    urlDeployed: "https://matthewxgoad.github.io/employee-directory/",
    urlRepo: "https://github.com/matthewxgoad/employee-directory",
  },
  {
    title: "Password Generator",
    description: `A minimal and very useful application that generates a strong password based on user defined criterion
        like length and character types.`,
    image: passImg,
    languages: ["JavaScript", "HTML", "CSS"],
    urlDeployed: "https://matthewxgoad.github.io/password-generator/",
    urlRepo: "https://github.com/matthewxgoad/password-generator",
  },
  {
    title: "kiskis",
    description: `This application was designed to be a vault for any sensitive information you wish to keep safe. The information is saved as a "secret" that is encrpyted through cryptr and stored in a MySQL database.`,
    image: kiskisImg,
    languages: [
      "JavaScript",
      "Materialize",
      "Express.js",
      "Sequelize",
      "Handlebars",
    ],
    urlDeployed: "https://lit-escarpment-01189.herokuapp.com/",
    urlRepo: "https://github.com/ianfletcher314/kiskis",
  },
  {
    id: 3,
    title: "Employee Tracker",
    description: `A CLI (Command Line Interface) for tracking employees across a database, using Node, Inquirer, and MySQL.`,
    image: employeeImg,
    languages: ["JavaScript", "Node.js", "MySQL"],
    urlDeployed:
      "https://drive.google.com/file/d/1fM_QcUT02OkNjXjJsWYI1XoQVYatXk32/view",
    urlRepo: "https://github.com/matthewxgoad/employee-tracker",
  },
  {
    title: "Weather Dashboard",
    description: `Another one-page application that pulls weather data from the OpenWeather api directed by user input city names. Displays current and forecasted temperatures, humidity, UV index, wind speed, and more.`,
    image: weatherImg,
    languages: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    urlDeployed: "https://matthewxgoad.github.io/weather-dashboard/",
    urlRepo: "https://github.com/matthewxgoad/weather-dashboard",
  },
  {
    title: "Investment Dashboard",
    description: `A one-page application will allow beginner users in the stock market to see a quick run down of the most important information for them to make an informed decision on whether they should invest their money in a certain stock. This was a collaboration with other students and uses data from AlphaVantage and FinnHub APIs.`,
    image: investmentImg,
    languages: ["Bulma", "JavaScript", "HTML", "CSS"],
    urlDeployed: "https://matthewxgoad.github.io/investment-wizard/",
    urlRepo: "https://github.com/matthewxgoad/investment-wizard",
  },
  {
    title: "Another Tech Blog",
    description: `This deployed web application allows users to create an account and post journal entries as well as see other users' entries.`,
    image: techImg,
    languages: ["Bootstrap", "JavaScript", "Express.js", "Sequelize"],
    urlDeployed: "https://pacific-reef-36437.herokuapp.com/",
    urlRepo: "https://github.com/matthewxgoad/tech-blog",
  },
];

export default portfolioData;
