---
title:  "Dockerized Dev Environment"
teaser: "Creating a starting point for developing dockerized node.js applications with configuration for Typescript, Prisma and Jest."
published: '25. August 2022'
thumbnail: '/images/docker-thumb.jpg'
technology: ['TypeScript', 'Node', 'Docker', 'Jest']
github: "https://github.com/LukasSonnabend/ts-express-jest-psql-starter"
---

# Dockerized Dev Environment

This dev environment was created to make it easier to develop dockerized node.js applications with configuration for typescript, prisma and jest.

Also included are some examples on how to test the prisma client aswell as the express server routes using jest.

I link this stack particularly because it enables for rapid prototyping so its perfect for creating MVPs for Startups or other small projects.

## Why Dockerized Dev Environment?

The reason why I created this dev environment is to further my knowledge of using docker which I had the pleasure of getting to know during my last semester in uni as part of the Distributed Systems course.

Also this environment enables joint development of a backend server for a React Native application I am currently developing with a few friends, cutting down on setup time for individual devs.

## Decisions made

For test execution I decided to include shell commands to directly execute the jest commands within the server, at a later point I might decide to include a separate container just for testing.

Prisma is used on one hand for the ease of setting it up and on the other hand for the advantages it provides over juggling objects between the server/database and the client by hand.
