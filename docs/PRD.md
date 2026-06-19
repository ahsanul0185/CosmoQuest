# CosmoQuest - Space Explorer Website

## Frontend Web App PRD

## 1. Project Overview

CosmoQuest is a frontend-only space explorer website where users can explore planets, astronauts,
space missions, galaxies and space facts through an animated interface.
The website should be visually animated, educational, simple to use and fully responsive. It should feel
like a smooth frontend portfolio project, but it should not require backend development.
The project must use static data only. No backend, database, login, signup, admin panel, payment
gateway, CMS or real API integration is required.

## 2. Product Goal

The goal is to build a simple but animated frontend website that makes space exploration easy and
interesting.
The website should allow users to:
**Goal Requirement**
Explore planets View all 8 planets with useful details
Learn about astronauts Browse famous astronaut cards
Discover missions View famous space mission cards
Explore galaxies Browse galaxy cards
Read facts See short and simple space facts
Interact with content Use search, filters and detail modal
Enjoy visual experience See smooth animations and space-themed UI

## 3. Scope of Work

The freelancer must create a complete frontend-only website named **CosmoQuest-Space Explorer
Website**.
The website must include:

- Hero section
- Planets explorer
- Astronauts section
- Space missions section
- Galaxy section
- Space facts section
- Search and filter functionality
- Detail popup/modal
- Smooth animations
- Responsive layout
- README setup file

## 4. Recommended Tech Stack

Recommended technologies:


```
Area Recommended Tool
Frontend Framework React
Build Tool Vite
Styling Tailwind CSS
Animation Framer Motion
Data Static JavaScript data file
```
## 5. Required Website Sections

### 5.1 Hero Section

The hero section must include:

- Website name: **CosmoQuest**
- Tagline: **Explore the universe from your screen**
- Short intro text
- CTA button: **Start Exploring**
- Animated star background
- Floating planet or orbit-style visual
- Smooth entrance animation for title, text and button
The hero section should create a strong first impression and clearly communicate the space exploration
theme.
HomePage.png reference image will be provided.

### 5.2 Planets Explorer

The website must include cards for all 8 planets:

- Mercury
- Venus
- Earth
- Mars
- Jupiter
- Saturn
- Uranus
- Neptune
Each planet card must include:
**Field Requirement**
Planet name Required
Image/placeholder Required
Short description Required
Distance from Sun Required
Number of moons Required
Fun fact Required
Each planet card should have hover animation and should open a detail modal when clicked.

### 5.3 Astronauts Section

The website must include at least **6 astronaut cards**.


Suggested astronauts:

- Neil Armstrong
- Kalpana Chawla
- Rakesh Sharma
- Yuri Gagarin
- Sally Ride
- Sunita Williams
Each astronaut card must include name, country, famous mission or achievement, short description and
image/avatar placeholder.

### 5.4 Space Missions Section

The website must include at least **6 space mission cards**.
Suggested missions:

- Apollo 11
- Voyager 1
- Chandrayaan-
- Mars Rover Mission
- Hubble Space Telescope
- Artemis Mission
Each mission card must include mission name, year, space agency, mission type and short summary.

### 5.5 Galaxy Section

The website must include at least **4 galaxy cards**.
Suggested galaxies:

- Milky Way
- Andromeda
- Whirlpool Galaxy
- Sombrero Galaxy
Each galaxy card must include galaxy name, galaxy type, distance from Earth, short fact and visual
placeholder.

### 5.6 Space Facts Section

The website must include at least **8 space fact cards**.
Each fact should be short, simple, interesting and easy to understand.
Example facts:

- Jupiter is the largest planet in the Solar System.
- Saturn is famous for its rings.
- One day on Venus is longer than one year on Venus.
- The Sun contains most of the Solar System’s mass.

### 5.7 Final CTA / Footer

The final section must include:

- Closing message
- Explore again button or scroll-to-top button
- Footer text
- Company name: **StellarNova Labs**


## 6. Functional Requirements

The website must include:
**Feature Requirement**
Search bar User can search by name/title
Category filter User can filter by content type
Card grid Cards display clearly in sections or filtered view
Detail modal Opens when card is clicked
Smooth scrolling Page movement should feel smooth
Hover effects Cards and buttons should feel interactive
Responsive layout Desktop, tablet and mobile support
Static data All content comes from frontend data file
Required filter categories:

- All
- Planets
- Astronauts
- Missions
- Galaxies
- Facts
Search and filter must work using frontend static data only.

## 7. Detail Modal Requirements

When a user clicks any card, a detail popup/modal should open.
The modal must include:

- Name/title
- Larger visual or placeholder
- Full description
- Key details
- Fun fact
- Close button
The modal should open and close smoothly with animation. It should work properly on mobile screens.

## 8. Animation Requirements

The website should include simple, smooth, lightweight animations.
Required animations:
**Area Animation Requirement**
Hero Animated star background
Hero visual Floating planet or orbit-style animation
Sections Smooth reveal while scrolling
Cards Hover animation
Modal Smooth open and close animation
Buttons Hover animation


Space elements Subtle glow effect
Search/filter Smooth transition when results change
Animations must not slow down the website or make mobile usage difficult.

## 9. Design Requirements

The website should feel:

- Dark space themed
- Smooth
- Educational
- Animated
Recommended colour palette:
**Colour Name Hex**
Space Black #^
Deep Navy #0B^
Cosmic Purple #6C63FF^
Star White #F8FAFC
Neon Blue #38BDF
Soft Grey #94A3B^
Recommended fonts:
**Usage Font**
Headings Space Grotesk or Sora
Body Inter or Plus Jakarta Sans
Avoid basic plain layout, too much text, messy colours, heavy 3D effects, slow animations and backend
features.

## 10. Data Requirements

Create static data inside:
src/data/spaceData.js
The data should include:
**Data Type Minimum Count**
Planets 8
Astronauts 6
Missions 6
Galaxies 4
Space Facts 8
Each data item should include:

- id
- name/title
- category
- short description


- image or placeholder
- key details
- fun fact
No real API should be used.

## 11. Suggested Folder Structure

CosmoQuest_Space_Explorer/
├── public/
│ └── assets/
├── src/
│ ├── components/
│ ├── data/
│ │ └── spaceData.js
│ ├── styles/
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── README.md

## 12. Final Deliverables

Submit one complete project folder named:
CosmoQuest_Space_Explorer/
The final folder must include:

- Full frontend source code
- Static data file
- Components folder
- Assets folder
- package.json
- README.md with setup instructions

## 13. README Requirements

The README must include:

- Project name
- Short project description
- Tech stack used
- Setup instructions
- Run command
- Build command if available
Example setup commands:
npm install
npm run dev

## 14. Acceptance Criteria

The project will be accepted if:

- Website runs locally.
- Hero section is complete.
- Planet section includes 8 planets.
- Astronaut section includes at least 6 astronauts.
- Mission section includes at least 6 missions.
- Galaxy section includes at least 4 galaxies.


- Space facts section includes at least 8 facts.
- Search works.
- Filters work.
- Detail modal works.
- Animations work smoothly.
- Website is responsive.
- No backend is included.
- No console errors are present.
- README is included.
- Design feels smooth and space-themed.


