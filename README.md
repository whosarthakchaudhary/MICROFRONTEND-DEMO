Microfrontend Demo

This repository contains a icrofrontend Demo project built using Vite, React, and Module Federation. The project demonstrates a microfrontend architecture with a host application and two remote applications.


Applications
1. Host Application: The main application that consumes components from the remote applications.
2. Remote1 Application: A remote application exposing components (e.g., `Chat`).
3. Remote2 Application: Another remote application exposing components (e.g., `Email`).


Tools and Frameworks Used

- Vite: A fast build tool for modern web applications.
- React: A JavaScript library for building user interfaces.
- Module Federation: Enables sharing code between multiple applications.
- ESLint: A tool for identifying and fixing code quality issues.
- Concurrently: Runs multiple commands simultaneously.


## How to Set Up and Run the Project

Prerequisites
- **Node.js** (v16 or higher)
- **pnpm** (preferred) or npm/yarn

Libraries used:

1. pnpm
2. pnpm install @ originjs/vite-plugin-federation@1.3.6 (Vite plugin Federation) (host & remote application)
3. pnpm install concurrently (in remote applications to run as a remote for host application)
4. use pnpm run build for two remote application &
5. pnpm run dev for host appication

host application Strictly running on port 5000, Remote application running on ports 5001 & 5002 respectively.
