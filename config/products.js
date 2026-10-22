const PRODUCTS = [
  {
    id: "dad-hat-out-of-office",
    name: "OG Trophy Husband \"Out of Office\" Dad Hat",
    price: 44.44,
    description: "Unstructured low-profile dad hat featuring embroidered \"Out of Office\" and classic OG Trophy Husband logo.",
    category: "Dad Hats",
    image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f",
    colors: [
      { name: "Black", hex: "#111111", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" },
      { name: "Navy", hex: "#1b2a4a", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" },
      { name: "Khaki", hex: "#c2b280", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" },
      { name: "Stone", hex: "#d3d3d3", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" }
    ]
  },
  {
    id: "stealth-black-full-logo",
    name: "Stealth Black Full Logo Hat",
    price: 44.44,
    description: "Matte black finish with full OG Trophy Husband crest embroidered in tonal black thread.",
    category: "Stealth Series",
    image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f",
    colors: [
      { name: "Black", hex: "#0a0a0a", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" },
      { name: "Charcoal", hex: "#2b2b2b", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" },
      { name: "Dark Grey", hex: "#444444", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" }
    ]
  },
  {
    id: "stealth-black-ogth-logo",
    name: "Stealth Black OGTH Logo Hat",
    price: 44.44,
    description: "Sleek all-black cap with embroidered minimalist OGTH initials on front panel.",
    category: "Stealth Series",
    image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f",
    colors: [
      { name: "Black", hex: "#000000", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" },
      { name: "Charcoal", hex: "#333333", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" }
    ]
  },
  {
    id: "retro-trucker-full-logo",
    name: "Retro Trucker Full Logo Hat",
    price: 44.44,
    description: "Classic breathable mesh snapback trucker hat with full OG Trophy Husband shield logo.",
    category: "Truckers",
    image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f",
    colors: [
      { name: "Black/White", hex: "#111111", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" },
      { name: "Navy/White", hex: "#1b2a4a", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" }
    ]
  },
  {
    id: "retro-trucker-ogth-logo",
    name: "Retro Trucker OGTH Logo Hat",
    price: 44.44,
    description: "High-crown retro mesh snapback featuring bold OGTH monogram embroidery.",
    category: "Truckers",
    image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f",
    colors: [
      { name: "Black/White", hex: "#111111", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" }
    ]
  },
  {
    id: "signature-5-panel-full-logo",
    name: "Signature 5-Panel Full Logo Hat",
    price: 44.44,
    description: "Modern street style 5-panel cap structured with premium cotton twill and crest logo.",
    category: "5-Panel",
    image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f",
    colors: [
      { name: "Black", hex: "#111111", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" },
      { name: "Olive", hex: "#556b2f", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" }
    ]
  },
  {
    id: "signature-5-panel-ogth-logo",
    name: "Signature 5-Panel OGTH Logo Hat",
    price: 44.44,
    description: "Clean profile 5-panel camper cap with front OGTH initials patch.",
    category: "5-Panel",
    image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f",
    colors: [
      { name: "Black", hex: "#111111", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" }
    ]
  },
  {
    id: "clean-living-dad-hat",
    name: "OGTH logo \"Clean Living\" Dad Hat",
    price: 44.44,
    description: "Organic cotton unstructured dad hat with \"Clean Living\" typography and OGTH logo.",
    category: "Dad Hats",
    image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f",
    colors: [
      { name: "White", hex: "#ffffff", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" },
      { name: "Black", hex: "#111111", image: "https://files.cdn.printful.com/o/upload/landing-image/ef/ef3ba0ddc44c5be53e1ce5dc060c182d_l?v=2a0a6f9bbd2ff8b968da74c31e8b895f" }
    ]
  }
];

module.exports = PRODUCTS;
