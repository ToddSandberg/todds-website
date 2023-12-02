export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const SMALL_SCREEN_LIMIT = 700;
export function isSmallDevice() {
    return document.documentElement.clientWidth < SMALL_SCREEN_LIMIT;
}