# Tarot Card Generator #

Introduction
===

A fun application to predict, with 100% certainty, the future. Simply pose a question you'd like an answer to then draw a card.

Getting Started
===
A `nextjs` build using `framer-motion` for animations 

See documentation for more information:
  - https://nextjs.org/docs
  - https://www.framer.com/motion/
  
To get the project running use:
  - `npm install`
  - `npm run dev`

Generating Cards
===
The raw card data is located in `/data/rawData/tarot-cards.xlsx`. If amends are required make changes to this `.xlsx` file, then run the data parser using `npm run parse-data`. This will output parsed data into `/data/parsedData/cards.json` to be used directly by the application.