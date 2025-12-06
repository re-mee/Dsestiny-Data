import weaponTypes from '../data/enums/weaponType.json';
import weaponSlots from '../data/enums/weaponSlot.json';
import elements from '../data/enums/element.json';
import rarities from '../data/enums/rarity.json';
import classTypes from '../data/enums/classType.json';
import armorTypes from '../data/enums/armorType.json';

import raidPhrases from '../data/phrases/raidPhrases.json';

export const enums = {
    weaponTypes,
    weaponSlots,
    elements,
    rarities,
    classTypes,
    armorTypes,
};

export const phrases = {
    raid: raidPhrases,
};

export * from './types';
export * from './getRandom';