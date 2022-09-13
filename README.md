# Tarot Card Generator #

Introduction
===

A fun application to predict, with 100% certainty, the future. Simply pose a question you'd like an answer to then draw a card.

<img width="1362" alt="cards-spread" src="https://user-images.githubusercontent.com/7523692/189990098-64ecffcf-4a26-4591-b8d6-33f6daccfdce.png">

Generally cards which are drawn the correct way up are good. 

<img width="1504" alt="card-good" src="https://user-images.githubusercontent.com/7523692/189990138-d3668156-b0e5-4993-b7af-0c744f5820f2.png">

And cards which are drawn upside are bad.

<img width="1487" alt="card-bad" src="https://user-images.githubusercontent.com/7523692/189990167-caa16981-ccdb-41e5-96cf-eb082b7424ff.png">


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
