# MovieCraft
https://www.moviecrafty.com/

Welcome to MovieCraft! This game, built with Vite + React, offers movie recommendations in a fun and interactive way. Start by searching for your favorite movies and TV shows. By combining two selected titles, MovieCraft generates a third movie that is most similar or relevant, using llama 3.3 70b.

Inspired by Infinite Craft by Neal.fun: https://neal.fun/infinite-craft/

## Features

- **Search Movies & TV Shows**: Easily search for movies and TV shows using our intuitive search feature.
- **Combine Titles**: Select two titles to combine and generate a third movie recommendation.
- **llama-3.3 70b Integration**: Uses Meta's llama 3.3 70b model to provide relevant movie recommendations based on your combination.

## Setup
1. Clone and cd into the repository.
2. Make sure you have Node.js and npm installed and up to date.<br/>
Installation: https://nodejs.org/en/download/package-manager
4. Install dependencies
```shell
npm install
```
4. Create an .env file for keys.
```shell
OPENAI_KEY='your_key'
OMDB_KEY='your_key'
```
How to get OMDb key: https://www.omdbapi.com/apikey.aspx<br/>
Where to get AI key: https://openrouter.ai/<br/>
5. Run the game.
```shell
npm run dev
```
Go to http://localhost:5173/

