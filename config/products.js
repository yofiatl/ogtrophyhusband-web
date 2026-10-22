const PRODUCTS = [
  {
    id: "dad-hat-out-of-office",
    name: "OG Trophy Husband \"Out of Office\" Dad Hat",
    price: 44.44,
    description: "Unstructured low-profile dad hat featuring embroidered \"Out of Office\" and classic OG Trophy Husband logo.",
    category: "Dad Hats",
    image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/classic-dad-hat-black-front-69ea84b3aa490.jpg?v=1776977096&width=600&height=600&crop=center_legacy",
    colors: [
      { name: "Black", hex: "#111111", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/classic-dad-hat-black-front-69ea84b3aa490.jpg?v=1776977096&width=600&height=600&crop=center_legacy" },
      { name: "Navy", hex: "#1b2a4a", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/classic-dad-hat-black-front-69ea84b3aa490.jpg?v=1776977096&width=600&height=600&crop=center_legacy" },
      { name: "Khaki", hex: "#c2b280", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/classic-dad-hat-black-front-69ea84b3aa490.jpg?v=1776977096&width=600&height=600&crop=center_legacy" },
      { name: "Stone", hex: "#d3d3d3", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/classic-dad-hat-black-front-69ea84b3aa490.jpg?v=1776977096&width=600&height=600&crop=center_legacy" }
    ]
  },
  {
    id: "stealth-black-full-logo",
    name: "Stealth Black Full Logo Hat",
    price: 44.44,
    description: "Matte black finish with full OG Trophy Husband crest embroidered in tonal black thread.",
    category: "Stealth Series",
    image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/classic-snapback-black-front-69f0fcb7d4fda.jpg?v=1777401029&width=440&height=440&crop=center_legacy",
    colors: [
      { name: "Black", hex: "#0a0a0a", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/classic-snapback-black-front-69f0fcb7d4fda.jpg?v=1777401029&width=440&height=440&crop=center_legacy" },
      { name: "Charcoal", hex: "#2b2b2b", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/classic-snapback-black-front-69f0fcb7d4fda.jpg?v=1777401029&width=440&height=440&crop=center_legacy" },
      { name: "Dark Grey", hex: "#444444", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/classic-snapback-black-front-69f0fcb7d4fda.jpg?v=1777401029&width=440&height=440&crop=center_legacy" }
    ]
  },
  {
    id: "stealth-black-ogth-logo",
    name: "Stealth Black OGTH Logo Hat",
    price: 44.44,
    description: "Sleek all-black cap with embroidered minimalist OGTH initials on front panel.",
    category: "Stealth Series",
    image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/classic-snapback-black-front-69f0f9969fad2.jpg?v=1777400228&width=440&height=440&crop=center_legacy",
    colors: [
      { name: "Black", hex: "#000000", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/classic-snapback-black-front-69f0f9969fad2.jpg?v=1777400228&width=440&height=440&crop=center_legacy" },
      { name: "Charcoal", hex: "#333333", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/classic-snapback-black-front-69f0f9969fad2.jpg?v=1777400228&width=440&height=440&crop=center_legacy" }
    ]
  },
  {
    id: "retro-trucker-full-logo",
    name: "Retro Trucker Full Logo Hat",
    price: 44.44,
    description: "Classic breathable mesh snapback trucker hat with full OG Trophy Husband shield logo.",
    category: "Trucker Hats",
    image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/retro-trucker-hat-black-front-69ebd464b782a.jpg?v=1777063031&width=280&height=280&crop=center_legacy",
    colors: [
      { name: "Black/White", hex: "#111111", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/retro-trucker-hat-black-front-69ebd464b782a.jpg?v=1777063031&width=280&height=280&crop=center_legacy" },
      { name: "Navy/White", hex: "#1b2a4a", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/retro-trucker-hat-black-front-69ebd464b782a.jpg?v=1777063031&width=280&height=280&crop=center_legacy" },
      { name: "Charcoal/Black", hex: "#2b2b2b", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/retro-trucker-hat-black-front-69ebd464b782a.jpg?v=1777063031&width=280&height=280&crop=center_legacy" }
    ]
  },
  {
    id: "retro-trucker-ogth-logo",
    name: "Retro Trucker OGTH Logo Hat",
    price: 44.44,
    description: "Mesh-back trucker cap featuring bold OGTH monogram patch.",
    category: "Trucker Hats",
    image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/retro-trucker-hat-black-front-69ebd464b782a.jpg?v=1777063031&width=280&height=280&crop=center_legacy",
    colors: [
      { name: "Black", hex: "#111111", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/retro-trucker-hat-black-front-69ebd464b782a.jpg?v=1777063031&width=280&height=280&crop=center_legacy" },
      { name: "Heather Grey", hex: "#888888", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/retro-trucker-hat-black-front-69ebd464b782a.jpg?v=1777063031&width=280&height=280&crop=center_legacy" }
    ]
  },
  {
    id: "signature-5-panel-full-logo",
    name: "Signature 5-Panel Full Logo Hat",
    price: 44.44,
    description: "Modern 5-panel street style cap with high-density full logo embroidery.",
    category: "5-Panel",
    image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/5-panel-trucker-cap-black-front-69f0dc2a683f9.jpg?v=1777392701&width=960&height=960&crop=center_legacy",
    colors: [
      { name: "Black", hex: "#111111", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/5-panel-trucker-cap-black-front-69f0dc2a683f9.jpg?v=1777392701&width=960&height=960&crop=center_legacy" },
      { name: "Olive", hex: "#556b2f", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/5-panel-trucker-cap-black-front-69f0dc2a683f9.jpg?v=1777392701&width=960&height=960&crop=center_legacy" }
    ]
  },
  {
    id: "signature-5-panel-ogth-logo",
    name: "Signature 5-Panel OGTH Logo Hat",
    price: 44.44,
    description: "Low-profile 5-panel cap with understated OGTH initial insignia.",
    category: "5-Panel",
    image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/5-panel-trucker-cap-black-front-69ebd46506bff.jpg?v=1777063049&width=280&height=280&crop=center_legacy",
    colors: [
      { name: "Black", hex: "#111111", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/5-panel-trucker-cap-black-front-69ebd46506bff.jpg?v=1777063049&width=280&height=280&crop=center_legacy" },
      { name: "Navy", hex: "#1b2a4a", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/5-panel-trucker-cap-black-front-69ebd46506bff.jpg?v=1777063049&width=280&height=280&crop=center_legacy" }
    ]
  },
  {
    id: "clean-living-dad-hat",
    name: "Clean Living Dad Hat",
    price: 44.44,
    description: "100% organic cotton bio-washed dad hat with clean OG Trophy Husband embroidery.",
    category: "Dad Hats",
    image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/organic-baseball-cap-black-front-69efb4af9a4a9.jpg?v=1777317050&width=440&height=440&crop=center_legacy",
    colors: [
      { name: "Black", hex: "#111111", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/organic-baseball-cap-black-front-69efb4af9a4a9.jpg?v=1777317050&width=440&height=440&crop=center_legacy" },
      { name: "Natural", hex: "#f5f5dc", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/organic-baseball-cap-black-front-69efb4af9a4a9.jpg?v=1777317050&width=440&height=440&crop=center_legacy" },
      { name: "Sage", hex: "#9dc183", image: "https://cdn.shopify.com/s/files/1/0680/8308/9451/files/organic-baseball-cap-black-front-69efb4af9a4a9.jpg?v=1777317050&width=440&height=440&crop=center_legacy" }
    ]
  }
];

module.exports = PRODUCTS;
