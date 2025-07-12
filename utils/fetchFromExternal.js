const axios = require("axios");
const sources = require("./sources");

async function fetchAllProducts(category) {
  let all = [];
  for (const source of sources) {
    try {
      const res = await axios.get(source.url);
      const raw = res.data;

      const data = Array.isArray(raw)
        ? raw
        : Array.isArray(raw.products)
        ? raw.products
        : [];

      console.log(`Fetched from ${source.name}:`, data.length, "items");

      const filtered = data
        .filter(p => {
          const categoryName =
            typeof p.category === "string"
              ? p.category
              : typeof p.category === "object" && p.category.name
              ? p.category.name
              : "general";

          return category === "all" || categoryName.toLowerCase().includes(category.toLowerCase());
        })
        .map((p, i) => {
          const categoryName =
            typeof p.category === "string"
              ? p.category
              : typeof p.category === "object" && p.category.name
              ? p.category.name
              : "general";

          return {
            id: `${source.name}-${p.id || i}`,
            name: p.title || p.name || "Unnamed",
            company: source.name,
            category: categoryName,
            price: p.price || 0,
            rating: p.rating?.rate || p.rating || 0,
            discount: p.discount || Math.floor(Math.random() * 30),
            availability: p.availability ?? true,
          };
        });

      all.push(...filtered);
    } catch (err) {
      console.error(`Error fetching from ${source.name}:`, err.message);
    }
  }

  console.log("Total products after filtering:", all.length);
  return all;
}

module.exports = { fetchAllProducts };
