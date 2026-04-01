const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");

/* ==========================
   ALL PRODUCTS DATA
========================== */
const products = [
  // Beauty
  { id: 1, title: "Essence Mascara Lash Princess", price: 829, category: "beauty", image: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png", badge: "SALE" },
  { id: 2, title: "Eyeshadow Palette with Mirror", price: 1659, category: "beauty", image: "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png" },
  { id: 3, title: "Powder Canister", price: 1244, category: "beauty", image: "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png" },
  { id: 4, title: "Red Lipstick", price: 1078, category: "beauty", image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png" },
  { id: 5, title: "Red Nail Polish", price: 746, category: "beauty", image: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png" },

  // Perfumes
  { id: 6, title: "Calvin Klein CK One", price: 4149, category: "perfume", image: "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png" },
  { id: 7, title: "Chanel Coco Noir Eau De", price: 11078, category: "perfume", image: "https://cdn.dummyjson.com/products/images/fragrances/Chanel%20Coco%20Noir%20Eau%20De/1.png" },
  { id: 8, title: "Dior J'adore", price: 7469, category: "perfume", image: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/1.png" },
  { id: 9, title: "Dolce Shine Eau de", price: 5809, category: "perfume", image: "https://cdn.dummyjson.com/products/images/fragrances/Dolce%20Shine%20Eau%20de/1.png" },
  { id: 10, title: "Gucci Bloom Eau de", price: 6639, category: "perfume", image: "https://cdn.dummyjson.com/products/images/fragrances/Gucci%20Bloom%20Eau%20de/1.png" },

  // Furniture
  { id: 11, title: "Annibale Colombo Bed", price: 157699, category: "furniture", image: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png" },
  { id: 12, title: "Annibale Colombo Sofa", price: 207499, category: "furniture", image: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png" },
  { id: 13, title: "Bedside Table African Cherry", price: 24899, category: "furniture", image: "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png" },
  { id: 14, title: "Knoll Saarinen Chair", price: 41499, category: "furniture", image: "https://cdn.dummyjson.com/products/images/furniture/Knoll%20Saarinen%20Executive%20Conference%20Chair/1.png" },

  // Groceries
  { id: 15, title: "Apple", price: 165, category: "groceries", image: "https://cdn.dummyjson.com/products/images/groceries/Apple/1.png" },
  { id: 16, title: "Beef Steak", price: 1078, category: "groceries", image: "https://cdn.dummyjson.com/products/images/groceries/Beef%20Steak/1.png" },
  { id: 17, title: "Cat Food", price: 746, category: "groceries", image: "https://cdn.dummyjson.com/products/images/groceries/Cat%20Food/1.png" },
  { id: 18, title: "Chicken Meat", price: 829, category: "groceries", image: "https://cdn.dummyjson.com/products/images/groceries/Chicken%20Meat/1.png" },
  { id: 19, title: "Cooking Oil", price: 414, category: "groceries", image: "https://cdn.dummyjson.com/products/images/groceries/Cooking%20Oil/1.png" },
  { id: 20, title: "Cucumber", price: 124, category: "groceries", image: "https://cdn.dummyjson.com/products/images/groceries/Cucumber/1.png" }
];

/* ==========================
   RENDER PRODUCTS
========================== */
function renderProducts(list) {
  productGrid.innerHTML = "";

  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>₹${p.price.toLocaleString("en-IN")}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;

    productGrid.appendChild(card);
  });
}

/* ==========================
   FILTER + SORT LOGIC
========================== */
function applyFilters() {
  let filtered = [...products];

  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const sort = sortSelect.value;

  if (search) {
    filtered = filtered.filter(p =>
      p.title.toLowerCase().includes(search)
    );
  }

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

/* ==========================
   EVENT LISTENERS
========================== */
searchInput.addEventListener("input", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
sortSelect.addEventListener("change", applyFilters);

/* ==========================
   INITIAL LOAD (IMPORTANT)
========================== */
renderProducts(products);
