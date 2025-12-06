export type WeaponType = string;
export type WeaponSlot = string;
export type Rarity = string;
export type Element = string;
export type ClassType = string;
export type ArmorType = string;

export interface WeaponSchema {
    id: string;
    type: WeaponType;
    slot: WeaponSlot;
    rarity: Rarity;
    element: Element;
    tier?: number;
    classRestriction?: ClassType[];
}

export interface ArmorSchema {
    id: string;
    type: ArmorType;
    rarity: Rarity;
    element?: Element;
    tier?: number;
    classType: ClassType | 'Any';
}