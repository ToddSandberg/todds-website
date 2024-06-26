export const november = `# November 2023

Below is an overview of the different changes I've been making in various projects.
I also started working on the Big Mode game jam where most of my time was spent later in the month.

### ScryPortal
See projects tab for details.
- Added an button to priorization to choose if its ascending or descending
- Made Recipes be full screen so hopefully make them easier to read
- Added delete option to dropdown for tasks in text list view
- More tests

### Domu Peak
This is an old project I've rekindled with a bit. The initial implementation was focused on creating a weather system in the Unity engine that was somewhat
realistic based on the time of day and year.
- General Unity maintenance: Upgrade version, Move to new unity input system
- Added a basic menu system. This includes info, inventory, and options panels. Also pauses game on menu open.
- Changed temp of sunlight based on temperature
- Add ability to pickup items

### Procedural Generation
I've had an interest in procedural generation this month. My first attempt was following Sebastian Lague tutorials in Unity to create a very basic map with perlin noise.
As an experiment, and to help me understand the code better, I then attempted to transfer this procedural generation to Godot.

### 64 Days
Another old project I've rekindled with. This game is my dream RPG to make, and so I've been trying to work on small improvements here and there when I can.
- Added the ability to switch loadouts with a press of a button
- Working on allowing controller support to menus
- Added a settings menu with multiple settings that can be configured on the main menu

### SteamChievos
This is a project to track achievements in various platforms (despite the name).
- Cache game info for gog in steam chievos
- Only refresh the gog token when its expired, and added first time auth support. Althought right now first time auth is not straight forward, added instructions to readme.
- Added an excluded games list for GOG, eventually this should be populated with button press.
- Other general performance improvements for GOG chievos.
- Added xbox chievos through scraping exophase for now

### Weaponsmith Simulator
- Added labels to show the types of materials
- Showed slots as greyed out when dragging an item that doesnt fit in slot
- Spent a lot of time trying to get the UI to scale with the resolution of the game, without realizing there is a canvas setting for this. Still fixing things up for this.

### This Website
- Added different website paths for the different pages
- Added links for github/linkedin
- 404 page

### DND Website
I created this website a while ago to flesh out a dnd campaign related to cooking. It's grown into a larger project for displaying files.
- Added generic json rendering, so user can add use a json file for note taking
- Working on adding appbar`;