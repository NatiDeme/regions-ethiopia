# Nile Basin Explorer <a name="about-project"></a>
<!-- TABLE OF CONTENTS -->

## 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Deployment](#deployment)

<!-- PROJECT DESCRIPTION -->

## Nile Basin Explorer <a name="about-project"></a>

**Nile Basin** The "Nile Basin Explorer" is a dynamic digital exhibition created for the Ministry of Water and Energy, meticulously crafted with Next.js. This interactive platform offers a captivating journey through the twelve remarkable river basins of Ethiopia, showcasing these ecological wonders in unprecedented detail. Explore the unparalleled diversity and richness of these vital regions, gaining insights into their ecological significance, unique features, and the invaluable role they play in sustaining Ethiopia's natural heritage. With immersive visuals and informative content, the Ethiopia Basin Explorer promises to be an engaging educational resource, fostering a deeper understanding and appreciation of these critical ecosystems. Discover the intricate web of waterways and ecosystems that make Ethiopia's river basins some of the most biodiverse and awe-inspiring regions on our planet.

![Capture2](https://raw.githubusercontent.com/NatiDeme/regions-ethiopia/add-modal-component/public/ScreeenShot.PNG)
![Capture3](https://raw.githubusercontent.com/NatiDeme/regions-ethiopia/add-modal-component/public/screenShot3PNG.PNG)

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://reactjs.org/">Next.js</a></li>
  </ul>
</details>

<details>
  <summary>Styling</summary>
  <ul>
    <li><a href="https://expressjs.com/">Tailwindcss</a></li>
  </ul>
</details>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project, you need:

- Node.js and npm installed on your local machine.

### Setup

Clone this repository to your desired folder:

```sh
git clone https://github.com/NatiDeme/regions-ethiopia.git
cd your-project
npm install
```

Create a .env file in the project root directory. This file will store sensitive or configuration-specific information like API keys and tokens. In this case, you'll need a Mapbox access token.

```sh
 touch .env
```

Obtain a Mapbox Access Token
To use Mapbox maps, you need an access token. Follow these steps to obtain one:

1. Visit the Mapbox website.
2. Sign in to your Mapbox account or create a new one.
3. Once logged in, navigate to your Mapbox account dashboard.
4. Click on the "Create token" button to generate a new access token.
5. Give your token a name and set the appropriate permissions (usually "styles:read" and "tiles:read").
6. Click "Create token" to generate it.
7. Copy the generated token.

Add the Mapbox Access Token to the .env File
Open the .env file you created earlier in a text editor and add your Mapbox access token as follows:

```sh
NEXT_PUBLIC_MAPBOX_TOKEN=YOUR_ACCESS_TOKEN_HERE
```

Replace YOUR_ACCESS_TOKEN_HERE with the actual access token you obtained from Mapbox.

### Install

Install this project with:

Example command:

```sh
  cd regions-ethiopia
  npm install
```

### Usage

To run the development server of the project, execute the following command:

Example command:

```sh
  npm run dev
```

### Deployment

To build a Next.js application for production, you can use the next build command. This command will compile your Next.js application and optimize it for production deployment. Here's how you can use it:

    - Open your terminal.
    - Navigate to the root directory of your Next.js
    - project if you're not already there.

Run the following command:
Example:

```sh
    npm run build
    next start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Natnael Demelash**

- GitHub: [@NatiDeme](https://github.com/NatiDeme)
- Twitter: [@NatiDemelash](https://twitter.com/NatiDemelash)
- LinkedIn: [Natnael Demelash](https://www.linkedin.com/in/natnael-demelash/)

👤 **Betsegaw Sebsibe**

- GitHub: [@betses](https://github.com/betses)
- LinkedIn: [Betsegaw Sebsibe](https://www.linkedin.com/in/betsegaw-sebsibe/)
- Twitter: [Betse_s](https://twitter.com/Betse_s)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project kindly ⭐️ the repo

<p align="right">(<a href="#readme-top">back to top</a>)</p>
