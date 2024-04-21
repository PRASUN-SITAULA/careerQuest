<h1 align="center">careerQuest</h1>
<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
  <img src="https://github.com/PRASUN-SITAULA/carbonWise/assets/89672957/106f3a07-d14a-4ee9-9e0c-c8cfbc635a79">

</p>

## Description
careerQuest is a web application designed to simplify the job search process for individuals interested in roles within the technology industry. Leveraging the power of web scraping , careerQuest provides users with a streamlined interface to explore job listings tailored to three key categories: Software Engineer, UI Designer, and Hardware Engineer.


<video src="https://github.com/PRASUN-SITAULA/careerQuest/assets/89672957/337f53d9-60d8-4822-89bc-d8edbc0a09a1"></video>


## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation Guide](#installation-guide)
- [Configuration](#configuration)
- [License](#license)


## Features

**Scraping Capability**: careerQuest utilizes browserless to efficiently scrape job listings from indeed, ensuring coverage of available opportunities.

**Categorized Listings**: Jobs are categorized into three main categories - Software Engineer, UI Designer, and Hardware Engineer, making it easy for users to find roles that match their skills and interests.

**User-Friendly Interface**: The web app has a user interface, allowing users to effortlessly navigate through job listings and explore details such as job title, company, location, and job description.

## Technologies

This project is built using the following technologies:

- Browserless: For web scraping functionality.
- React: Frontend library for building user interfaces.
- Vite: Frontend build tool for faster development.
- Tailwind CSS: Utility-first CSS framework for styling.
- Express: Backend framework for handling server-side logic.

## Installation Guide 

### Clone this repository
```bash
git clone https://github.com/PRASUN-SITAULA/careerQuest.git
```
### Go into the repository
```bash
cd careerQuest
```
### Install packages
Navigate to the frontend and backend directory
```bash
npm install
```

### Run the server
Navigate to the backend directory.
```bash
npm start
```
### Run the Frontend
Navigate to the frontend directory
```bash
npm run dev
```
### Visit the Page
```bash
Open your browser and navigate to http://localhost:5173.
```

## Configuration
- Create a .env file in the backend folder of the project and add the following:
```bash
PORT=8000
TOKEN=<your_browserless_token>
BROWSERLESS_PORT=3000
```
- Pull and run docker image for browserless
```bash
docker run \
  --rm \
  -p 3000:3000 \
  -e "CONCURRENT=10" \
  -e "TOKEN=6R0W53R135510" \
  ghcr.io/browserless/chromium
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.