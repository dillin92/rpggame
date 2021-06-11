const { TestWatcher } = require('@jest/core');
const Player = require('../lib/Player.js');
const Potion = require('../lib/Potion.js');

test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
    expect(player.inventory),toEqual(expect.arrayContaining([expect.any(Object)]))
});

