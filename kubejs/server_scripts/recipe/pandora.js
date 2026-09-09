// requires: pandora
const seven_curses = {
  "pandora:backpack_content": [
    {
      item: {
        count: 1,
        id: "curseofpandora:curse_of_inertia",
      },
      slot: 0,
    },
    {
      item: {
        count: 1,
        id: "curseofpandora:curse_of_proximity",
      },
      slot: 1,
    },
    {
      item: {
        count: 1,
        id: "curseofpandora:curse_of_flesh",
      },
      slot: 2,
    },
    {
      item: {
        count: 1,
        id: "curseofpandora:curse_of_metabolism",
      },
      slot: 3,
    },
    {
      item: {
        count: 1,
        id: "curseofpandora:curse_of_tension",
      },
      slot: 4,
    },
    {
      item: {
        count: 1,
        id: "curseofpandora:curse_of_prudence",
      },
      slot: 5,
    },
    {
      item: {
        count: 1,
        id: "curseofpandora:curse_of_spell",
      },
      slot: 6,
    },
  ],
};
ServerEvents.recipes((event) => {
  event.remove({ id: "pandora:pandora_bracelet" });
  event.shaped("pandora:pandora_bracelet", ["BAB", "A A", "BAB"], {
    A: "#c:plates/gold",
    B: "#c:nuggets/gold",
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      { item: "pandora:pandora_bracelet" },
      {
        type: "fluid_stack",
        amount: 1000,
        fluid: "shhs_create_core:miracle",
      },
    ],
    results: [
      { components: seven_curses, count: 1, id: "pandora:pandora_bracelet" },
    ],
  });

  event.remove({ output: "pandora:pandora_necklace" });
  event.shaped("pandora:pandora_necklace", ["AAA", "A A", "ABA"], {
    A: "#c:plates/gold",
    B: "#c:ingots/gold",
  });
  event.custom({
    type: "create:filling",
    ingredients: [
      { item: "pandora:pandora_necklace" },
      {
        type: "fluid_stack",
        amount: 1000,
        fluid: "shhs_create_core:miracle",
      },
    ],
    results: [
      { components: seven_curses, count: 1, id: "pandora:pandora_necklace" },
    ],
  });
  // 微缩信标基座
  if (Platform.isLoaded("create")) {
    event.custom({
      type: "create:compacting",
      ingredients: [
        { tag: "c:beacon_base_blocks" },
        { tag: "c:beacon_base_blocks" },
        { tag: "c:beacon_base_blocks" },
        { tag: "c:beacon_base_blocks" },
      ],
      results: [{ chance: 0.0972, id: "curseofpandora:mini_beacon_base" }],
    });
  }
  // kubejs\data\curseofpandora\recipe\mini_beacon_base.json
});
