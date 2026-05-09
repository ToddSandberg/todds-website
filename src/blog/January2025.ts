export const january2025 = `# January 2025

This month I've been trying to make an AI ecosystem as a central place to integrate AI into anything (smart home, websites, etc).

### Scryportal
Scryportal is a task keeping and scheduling website I've been continuously developing: https://www.scryportal.com/
- Working on workout tracking functionality
    - Added basic ability to create workout sessions
    - Added table showing high score and steak
- Moving some components into a common component library to be able to break out functionality into individual websites
- Converting more of the website to typescript

### AI Server
Creating a dedicated server for saving context for different profiles for AI
- Created authenticated client to be able to fetch info from scryportal
- Added types to characters to perform functions on input/output based on types
- Added a speech recognition/tts generator component that sends message to character on recognition of character name

### Chatbot
Creating an ai chatbot mostly for experimentation with more front end techonology.
- Improved conversation calculations like updated time and read/unread
- Integrated with webcam, so that you are able to take a picture and send the details returned from an image recognition server in the context
- Working on allowing configuring triggers that will automatically send messages
    - Allowed generating AI messages as triggers
    - Allowed taking picture as a trigger
    - Added random triggers
- Integrating with an overall AI server which handles RAG and other contextual stuff
- Fixed some issues with overflow scrolling
- Added the ability to edit messages
- Fixed bug where characters/conversations were not per socket, causing issues with multiple connections

### AI Profile Creator
Creating a ui for the AI Server to create profiles/characters for ai to separate out different context/functions to specific conversations that need them
- Integrating with an overall AI server which handles RAG and other contextual stuff
- Added ability to create new characters/profiles
- Added the ability to add/delete/edit character/profile attributes
- Added the ability to generate attribute values using AI
- Ability to choose where profile/character attributes get added in the context
- Added ability to generate an icon for profile/character using stable diffusion
- Added ability to delete characters/profiles

### Pin board app
Creating a simple webb app to act like a digital pin board.
- Fixed position of elements to make 0,0 the center of the screen
- Added ability to drag around items
- Setup postgres db with web server to store/load items
- Made items save to db on add and move
- Added the ability to add pictures

### AI Desktop Pal
Creating a game where you can have a custom dekstop pal ala clippy who comments on your usage. Planning to release soon.
- Working on creating a default character
- Working on integrating with AI server as an option
- Working on a chrome extension to provide browser integrations
- Allowed draggin character around screen

### AI Social Media
Working on creating a social media that pulls in stuff you are interested in and generate a social media feed using AI.
`;