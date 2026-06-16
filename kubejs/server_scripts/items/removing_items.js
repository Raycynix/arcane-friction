// Removing Items

// Enigmatic Legacy Plus
const enigmatic = [
    'spellstone_sword',
    'extra_ring',
    'extra_scroll',
    'astral_glass',
    'astral_spear',
    'bless_item',
    'bless_item2',
    'annihilating_sword',
];

// Basics chests
const basics_chest = [
    'minecraft:chest',
    'hexerei:willow_chest',
    'hexerei:witch_hazel_chest',
    'hexerei:mahogany_chest',
    'ars_nouveau:archwood_chest',
]

// Removing Recipes From EMI/JEI/NEI
RecipeViewerEvents.removeEntriesCompletely('item', event => {
    enigmatic.forEach(item => {
        event.remove("enigmaticlegacyplus:" + item)
    });
    
    basics_chest.forEach(item => {
        event.remove(item)
    });
});

// Removing Recipes From Server
ServerEvents.recipes(event => {
    enigmatic.forEach(item => {
        event.remove("enigmaticlegacyplus:" + item)
    });

    basics_chest.forEach(item => {
        event.remove(item)
    });
})