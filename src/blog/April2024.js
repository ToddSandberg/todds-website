export const april2024 = `# April 2024

### This Website
- Refactored css to reduce duplication
- Fixed a bunch of general styling issues, including issues with mobile scaling
- Added scry portal video to scry portal page
- Moved from create-react-app to parcel bundler, getting rid of multiple vulnerabilities and making build times faster\
- Added eslint
- Changed how typing effect works on about me page

### ScryPortal
Released version 0.13, see the changes here: https://alpha.scryportal.com/issues/completed

In addition here are the changes pushed to alpha:
- Made it so it shows error if name/amount not provided for ingredients
- Added tooltip to ascending/descending button
- More typescript conversion
- Save profile pic url to localStorage so it doesnt need to be redownloaded every time
- Fixed issue with deleted issues on complete page
- Made modal show up when clicking static categories
- Made it so you can edit dynamic category instances
- Added complete task button to goals page
- Fixed an error when changing dates
- Removed inhibiting grocery task from task type dropdown

### [Weaponsmith Simulator](https://toadtoadtoad.itch.io/weaponsmith-simulator)
Released version 2.2: https://toadtoadtoad.itch.io/weaponsmith-simulator/devlog/715504/v22

Here are the changes made this month, some included in 2.2 some not:
- Fixed bug with nimble mouse attack damage decrease
- Show attack/attack speed enemy edits on UI
- Working on adding controller support to every aspect of game, almost done

### AI Desktop Pal
Creating a game where you can have a custom dekstop pal ala clippy who comments on your usage. A few more improvements before its ready to release.
- Refactored settings menu to have different tabs for different settings categories
- Added a bunch of settings: character name, walk fps, idle change cooldown, audio volume, audio type
- Added a typewriter effect on messages
- Added a sound on textbox speaking with two options:
    - Animal crossing esque audio clip that is pulled from steaming assets
    - TTS using piperTTS
- After character size edit make sure character is still at bottom of screen

### DND AI Chatbot
https://github.com/ToddSandberg/DND-AI
- Made it so characters and votes are updated accordingly when player disconnects
- Made it so triggering DM is now behind a vote, so all characters need to vote trigger before LLM is called
- Ability to edit messages
- Added errors on UI when there is an error
- Moved from create-react-app to parcel bundler, getting rid of multiple vulnerabilities and making build times faster
- Validation on empty message
- Converted more to typescript
- Added docker build
- Made it so page scrolls to bottom on new message

### Chatbot
Creating a chatbot mostly experimentation with more front end techonology.
- Created next.js app
- Created web socket apis for messaging
- Ability to choose, create, and delete chararacters on UI
- Pull character images for each character
- Added Postgres DB to store characters/messages

### Procedural
- Working on generating stats programatically

`;