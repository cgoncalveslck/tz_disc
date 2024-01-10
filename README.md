
TZ_Disc

Discord bot meant to output a relative time to the reader, given an hour suffixed by a given timezone.

# Example

Here are some examples of how the bot might respond to time-related messages:

- User: "@everyone be ready at 18:00 CET"

- Bot: "That's ```in 2 hours```"
  
  
  

# Getting Started

  

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

  

## Prerequisites

  

- Node.js

- npm

  

## Installing

  

1. Clone the repository

```sh

git  clone  https://github.com/ClaudioGoncalvesLck/tz_disc.git

```

  

2. Install NPM packages

```sh

npm  install

```

  

3. Create a `.env` file in the root directory of the project, and add your Discord bot token like this:

```sh

CHANNEL_ID=channel_id

TOKEN=your_discord_bot_token

```

  

## Usage

  

To start the bot, run:

```sh

node  index.js

```

  

The bot will start and connect to your Discord server, and start checking messages in the specified channel.

  

# Built With

  

-  [discord.js](https://discord.js.org/#/) - A powerful JavaScript library for interacting with the Discord API

-  [luxon](https://moment.github.io/luxon/) - A library for working with dates and times in JS

-  [dotenv](https://www.npmjs.com/package/dotenv) - A zero-dependency module that loads environment variables from a `.env` file into `process.env`