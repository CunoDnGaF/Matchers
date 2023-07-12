import sortingHeroes from '../heroes.js';

test('sorted heroes', () => {
    let heroes = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
      ];
    expect(sortingHeroes(heroes)).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
      ]);
});
