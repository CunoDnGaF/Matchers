export default function sortingHeroes(heroes) {
    heroes.sort((x, y) => (y.health - x.health));
    return heroes;
}