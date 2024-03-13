const ProductsData = [
   {
      id: 1,
      description: "An apple mobile which is nothing like apple",
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      title: "iPhone 9",
      price: 549
   },
   {
      id: 2,
      description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg",
      title: "iPhone X",
      price: 899
   },
   {
      id: 3,
      description: "Samsung's new variant which goes beyond Galaxy to the Universe",
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/3/thumbnail.jpg",
      title: "Samsung Universe 9",
      price: 1249
   },
   {
      id: 4,
      description: "OPPO F19 is officially announced on April 2021.",
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg",
      title: "OPPOF19",
      price: 280
   },
   {
      id: 5,
      description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://cdn.dummyjson.com/product-images/5/thumbnail.jpg",
      title: "Huawei P30",
      price: 499
   },
   {
      id: 6,
      description: "MacBook Pro 2021 with mini-LED display may launch between September, November",
      stock: 83,
      brand: "Apple",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/6/thumbnail.png",
      title: "MacBook Pro",
      price: 1749
   },
   {
      id: 7,
      description: "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      stock: 50,
      brand: "Samsung",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg",
      title: "Samsung Galaxy Book",
      price: 1499
   },
   {
      id: 8,
      description: "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      stock: 68,
      brand: "Microsoft Surface",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg",
      title: "Microsoft Surface Laptop 4",
      price: 1499
   },
   {
      id: 9,
      description: "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
      stock: 96,
      brand: "Infinix",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg",
      title: "Infinix INBOOK",
      price: 1099
   },
   {
      id: 10,
      description: "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
      stock: 89,
      brand: "HP Pavilion",
      category: "laptops",
      thumbnail: "https://cdn.dummyjson.com/product-images/10/thumbnail.jpeg",
      title: "HP Pavilion 15-DK1056WM",
      price: 1099
   },
   {
      id: 11,
      description: "Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil",
      stock: 65,
      brand: "Impression of Acqua Di Gio",
      category: "fragrances",
      thumbnail: "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg",
      title: "perfume Oil",
      price: 13
   },
   {
      id: 12,
      description: "Royal_Mirage Sport Brown Perfume for Men & Women - 120ml",
      stock: 52,
      brand: "Royal_Mirage",
      category: "fragrances",
      thumbnail: "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg",
      title: "Brown Perfume",
      price: 40
   },
   {
      id: 13,
      description: "Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men",
      stock: 61,
      brand: "Fog Scent Xpressio",
      category: "fragrances",
      thumbnail: "https://cdn.dummyjson.com/product-images/13/thumbnail.webp",
      title: "Fog Scent Xpressio Perfume",
      price: 13
   },
   {
      id: 14,
      description: "Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil",
      stock: 114,
      brand: "Al Munakh",
      category: "fragrances",
      thumbnail: "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg",
      title: "Non-Alcoholic Concentrated Perfume Oil",
      price: 120
   },
   {
      id: 15,
      description: "Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality",
      stock: 105,
      brand: "Lord - Al-Rehab",
      category: "fragrances",
      thumbnail: "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg",
      title: "Eau De Perfume Spray",
      price: 30
   },
   {
      id: 16,
      description: "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      stock: 110,
      brand: "L'Oreal Paris",
      category: "skincare",
      thumbnail: "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg",
      title: "Hyaluronic Acid Serum",
      price: 19
   },
   {
      id: 17,
      description: "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,",
      stock: 78,
      brand: "Hemani Tea",
      category: "skincare",
      thumbnail: "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg",
      title: "Tree Oil 30ml",
      price: 12
   },
   {
      id: 18,
      description: "Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.",
      stock: 88,
      brand: "Dermive",
      category: "skincare",
      thumbnail: "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg",
      title: "Oil Free Moisturizer 100ml",
      price: 40
   },
   {
      id: 19,
      description: "Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m",
      stock: 54,
      brand: "ROREC White Rice",
      category: "skincare",
      thumbnail: "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg",
      title: "Skin Beauty Serum.",
      price: 46
   },
   {
      id: 20,
      description: "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      stock: 140,
      brand: "Fair & Clear",
      category: "skincare",
      thumbnail: "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg",
      title: "Freckle Treatment Cream- 15gm",
      price: 70
   },
   {
      id: 21,
      description: "Fine quality Branded Product Keep in a cool and dry place",
      stock: 133,
      brand: "Saaf & Khaas",
      category: "groceries",
      thumbnail: "https://cdn.dummyjson.com/product-images/21/thumbnail.png",
      title: "- Daal Masoor 500 grams",
      price: 20
   },
   {
      id: 22,
      description: "Product details of Bake Parlor Big Elbow Macaroni - 400 gm",
      stock: 146,
      brand: "Bake Parlor Big",
      category: "groceries",
      thumbnail: "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg",
      title: "Elbow Macaroni - 400 gm",
      price: 14
   },
   {
      id: 23,
      description: "Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item",
      stock: 26,
      brand: "Baking Food Items",
      category: "groceries",
      thumbnail: "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg",
      title: "Orange Essence Food Flavou",
      price: 14
   },
   {
      id: 24,
      description: "original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji",
      stock: 113,
      brand: "fauji",
      category: "groceries",
      thumbnail: "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg",
      title: "cereals muesli fruit nuts",
      price: 46
   },
   {
      id: 25,
      description: "Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds",
      stock: 47,
      brand: "Dry Rose",
      category: "groceries",
      thumbnail: "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg",
      title: "Gulab Powder 50 Gram",
      price: 70
   },
   {
      id: 26,
      description: "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
      stock: 131,
      brand: "Boho Decor",
      category: "home-decoration",
      thumbnail: "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg",
      title: "Plant Hanger For Home",
      price: 41
   },
   {
      id: 27,
      description: "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
      stock: 17,
      brand: "Flying Wooden",
      category: "home-decoration",
      thumbnail: "https://cdn.dummyjson.com/product-images/27/thumbnail.webp",
      title: "Flying Wooden Bird",
      price: 51
   },
   {
      id: 28,
      description: "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
      stock: 54,
      brand: "LED Lights",
      category: "home-decoration",
      thumbnail: "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg",
      title: "3D Embellishment Art Lamp",
      price: 20
   },
   {
      id: 29,
      description: "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
      stock: 7,
      brand: "luxury palace",
      category: "home-decoration",
      thumbnail: "https://images.jdmagicbox.com/quickquotes/images_main/-600o0phs.jpg",
      title: "Handcraft Chinese style",
      price: 60
   },
   {
      id: 30,
      description: "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
      stock: 54,
      brand: "Golden",
      category: "home-decoration",
      thumbnail: "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg",
      title: "Key Holder",
      price: 30
   }
]

export default ProductsData;
