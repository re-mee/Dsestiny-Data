# Destiny Data Library

This project is a modern data library designed to provide a unified source of Destiny 2 game data for use across multiple web applications. It organizes and exposes enums, phrases, and other structured data, making it easy to link and synchronize features between different apps.

## Features

- Centralized JSON data for Destiny 2 enums (weapon types, armor types, classes, elements, rarities, slots)
- Shared raid phrases for use in bingo boards, guides, and other tools
- Interactive web viewer for browsing and testing the data
- Simple API/server for local development and integration
- Designed for easy deployment to GitHub Pages

## Technologies Used

- TypeScript (for type safety and future expansion)
- JavaScript (for the web viewer)
- Node.js (for local API/server)
- HTML & CSS (for the web interface)

## Future Enhancements

- Expand data coverage (more enums, phrases, and game assets)
- Add versioning and changelog for data updates
- Integrate with external Destiny APIs for live data
- Provide NPM package for easy consumption in other projects
- Add authentication and write access for collaborative editing

## Getting Started

Follow these steps to get the Destiny Data library running locally:

### Prerequisites

- Node.js and npm installed on your machine

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/re-mee/Dsestiny-Data.git
    ```

2. **Navigate to directory:**
    ```bash
    cd destiny-data
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Run the local server:**
    ```bash
    node server.js
    ```

5. **Open web veiwer:**
    ```bash
    http://localhost:[insert port here]
    ```

## Future Instructions
Instructions for integrating with external APIs, expanding the data set, and publishing as an NPM package will be added in the future

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.