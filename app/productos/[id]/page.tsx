import { ProductDetail } from "@/components/products/product-detail"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

// Simulación de productos (A Hui Hou) — precios en COP
const products = [
  // Frutos secos
  {
    id: 1,
    name: "Almendras",
    price: 18500,
    originalPrice: 0,
    image: "https://f.fcdn.app/imgs/d71a13/www.lamolienda.uy/moliuy/bf28/original/catalogo/000000000003083_000000000003083_1/2000-2000/almendras-peladas-tostadas-100g-almendra-pel-tostada-x-22-68.jpg",
    images: ["https://f.fcdn.app/imgs/d71a13/www.lamolienda.uy/moliuy/bf28/original/catalogo/000000000003083_000000000003083_1/2000-2000/almendras-peladas-tostadas-100g-almendra-pel-tostada-x-22-68.jpg"],
    category: "Frutos secos",
    description: "Almendras naturales, crujientes y ricas en vitamina E y grasas saludables.",
    longDescription:
      "Almendras seleccionadas, tostadas ligeramente para realzar su sabor. Fuente de vitamina E, magnesio y grasas monoinsaturadas. Perfectas como snack, en ensaladas o en preparaciones de repostería saludable.",
    benefits: [ 
      "Ricas en vitamina E (antioxidante)",
      "Fuente de grasas saludables (monoinsaturadas)",
      "Aportan fibra y proteínas vegetales",
      "Apoyan la salud cardiovascular"
    ],
    ingredients: ["Almendras (Prunus dulcis)"],
    usage: "Consumir como snack, añadir a ensaladas, yogur o usar en recetas de repostería.",
    inStock: true,
    stock: 120,
    rating: 4.8,
    reviews: 120,
  },
  {
    id: 2,
    name: "Nueces",
    price: 21000,
    originalPrice: 0,
    image: "https://www.bioplaza.com.co/wp-content/uploads/2020/08/nuezbrasil-copia.png",
    images: ["https://www.bioplaza.com.co/wp-content/uploads/2020/08/nuezbrasil-copia.png"],
    category: "Frutos secos",
    description: "Nueces premium, ricas en omega-3 y con un sabor ligeramente amargo característico.",
    longDescription:
      "Nueces seleccionadas de alta calidad, con textura crujiente y un perfil nutricional destacado por su contenido en ácidos grasos omega-3. Ideales para añadir a ensaladas, panes o consumir como snack energético.",
    benefits: [
      "Alto contenido en omega-3 (ácido alfa-linolénico)",
      "Fuente de antioxidantes",
      "Contribuyen a la salud cerebral y cardiovascular",
      "Aportan fibra y proteínas"
    ],
    ingredients: ["Nueces (Juglans regia)"],
    usage: "Consumir solas como snack, picadas en ensaladas o integradas en preparaciones horneadas.",
    inStock: true,
    stock: 80,
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 3,
    name: "Avellanas",
    price: 25000,
    originalPrice: 0,
    image: "https://ecomarketcolombia.com/wp-content/uploads/2020/06/AvellanaS.jpg",
    images: ["https://ecomarketcolombia.com/wp-content/uploads/2020/06/AvellanaS.jpg"],
    category: "Frutos secos",
    description: "Avellanas tostadas con sabor suave, ideales para mezclar en postres o como snack.",
    longDescription:
      "Avellanas de calidad, tostadas para realzar su aroma y sabor. Excelente fuente de grasas saludables, vitamina E y minerales. Encajan muy bien en cremas, repostería y mezclas de frutos secos.",
    benefits: [
      "Fuente de grasas monoinsaturadas",
      "Ricas en vitamina E y antioxidantes",
      "Aportan energía sostenida",
      "Mejoran textura y sabor en preparaciones"
    ],
    ingredients: ["Avellanas (Corylus avellana)"],
    usage: "Ideal para snacks, untables, pastelería o para moler y añadir a recetas.",
    inStock: true,
    stock: 70,
    rating: 4.6,
    reviews: 87,
  },
  {
    id: 4,
    name: "Maní (Natural)",
    price: 9500,
    originalPrice: 0,
    image: "https://campograndeperu.com/wp-content/uploads/2023/10/venta-por-mayor-y-menor-de-mani-sin-sal-1.jpg",
    images: ["https://campograndeperu.com/wp-content/uploads/2023/10/venta-por-mayor-y-menor-de-mani-sin-sal-1.jpg"],
    category: "Frutos secos",
    description: "Maní natural sin sal, fuente económica de proteínas y grasas saludables.",
    longDescription:
      "Maní natural, tostado y sin sal añadida. Excelente como snack cotidiano y para uso en cocina (cremas, salsas o como ingrediente en barras energéticas). Rico en proteínas vegetales y micronutrientes.",
    benefits: [
      "Buena fuente de proteínas vegetales",
      "Aporta energía y saciedad",
      "Contiene vitaminas del complejo B",
      "Versátil en recetas"
    ],
    ingredients: ["Maní (Arachis hypogaea)"],
    usage: "Consumir como snack, en ensaladas, o procesado en cremas y salsas.",
    inStock: true,
    stock: 200,
    rating: 4.5,
    reviews: 134,
  },
  {
    id: 5,
    name: "Maní (Salado)",
    price: 10000,
    originalPrice: 0,
    image: "https://laalacenadelchef.co/wp-content/uploads/2022/08/7702008081.jpg",
    images: ["https://laalacenadelchef.co/wp-content/uploads/2022/08/7702008081.jpg"],
    category: "Frutos secos",
    description: "Maní tostado con sal marina, perfecto para compartir.",
    longDescription:
      "Maní tostado al punto y sazonado con sal marina. Sabor clásico y textura crujiente, ideal para aperitivos y reuniones. Mantiene las propiedades nutricionales del maní con un toque salado.",
    benefits: [
      "Sabor agradable para aperitivos",
      "Fuente de proteínas y grasas saludables",
      "Aporta energía rápida",
      "Buen acompañamiento para bebidas"
    ],
    ingredients: ["Maní tostado, sal marina"],
    usage: "Consumir como snack o aperitivo en reuniones y picadas.",
    inStock: true,
    stock: 150,
    rating: 4.6,
    reviews: 115,
  },
  {
    id: 6,
    name: "Maní (Confitado)",
    price: 11000,
    originalPrice: 0,
    image: "https://campograndeperu.com/wp-content/uploads/2023/10/venta-por-mayor-y-menor-de-mani-confitado-2.jpg",
    images: ["https://campograndeperu.com/wp-content/uploads/2023/10/venta-por-mayor-y-menor-de-mani-confitado-2.jpg"],
    category: "Frutos secos",
    description: "Maní cubierto con caramelo, dulce y crujiente, ideal como snack dulce.",
    longDescription:
      "Maní confitado con una fina capa de azúcar caramelizada que le da textura crujiente y un sabor dulce. Perfecto para quienes buscan un snack con toque dulce sin perder la base nutritiva del maní.",
    benefits: [
      "Combina sabor dulce con proteína",
      "Textura crujiente y agradable",
      "Perfecto como snack indulgente",
      "Buena opción para mixes dulces"
    ],
    ingredients: ["Maní, azúcar, sirope de glucosa (si aplica)"],
    usage: "Consumir como snack dulce o en mezclas de frutos secos y snacks.",
    inStock: true,
    stock: 110,
    rating: 4.4,
    reviews: 102,
  },
  {
    id: 7,
    name: "Castañas",
    price: 26500,
    originalPrice: 0,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4LkPknGLbcyPkdAHBRDopJAgZ_vrGTdB9HvQs1QVGB_PCKe8BtKC-9k9aAwazmNMvgM&usqp=CAU",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ4LkPknGLbcyPkdAHBRDopJAgZ_vrGTdB9HvQs1QVGB_PCKe8BtKC-9k9aAwazmNMvgM&usqp=CAU"],
    category: "Frutos secos",
    description: "Castañas naturales, de textura suave y sabor delicado.",
    longDescription:
      "Castañas de alta calidad con un perfil de sabor suave y ligeramente dulce. Aportan carbohidratos complejos, fibra y algunos micronutrientes, siendo una alternativa energética y deliciosa.",
    benefits: [
      "Fuente de carbohidratos complejos",
      "Textura suave y sabor delicado",
      "Aporta energía de liberación sostenida",
      "Buena opción para mezclas o consumo directo"
    ],
    ingredients: ["Castañas (Castanea spp.)"],
    usage: "Consumir como snack, tostar ligeramente o integrar en mezclas y recetas.",
    inStock: true,
    stock: 45,
    rating: 4.7,
    reviews: 89,
  },

  // Semillas y granos
  {
    id: 8,
    name: "Chía",
    price: 9000,
    originalPrice: 0,
    image: "https://unimarc.vtexassets.com/arquivos/ids/233406/000000000000575376-KG-01.jpg?v=638200265654700000",
    images: ["https://unimarc.vtexassets.com/arquivos/ids/233406/000000000000575376-KG-01.jpg?v=638200265654700000"],
    category: "Semillas y granos",
    description: "Semillas de chía: alto contenido en omega-3, fibra y proteínas vegetales.",
    longDescription:
      "Semillas de chía seleccionadas, ideales para preparar puddings, añadir a batidos o espolvorear en yogur. Ricas en ácidos grasos omega-3, fibra soluble y minerales como calcio y magnesio.",
    benefits: [
      "Alta fuente de omega-3 vegetal",
      "Promueven la digestión por su fibra",
      "Aportan calcio y magnesio",
      "Versátiles en recetas"
    ],
    ingredients: ["Semillas de chía (Salvia hispanica)"],
    usage: "Hidratar en leche o agua para pudding, añadir a smoothies o ensaladas.",
    inStock: true,
    stock: 140,
    rating: 4.8,
    reviews: 145,
  },
  {
    id: 9,
    name: "Linaza",
    price: 8500,
    originalPrice: 0,
    image: "https://chasdomundo.pt/6364-large_default/linaza-marron.jpg",
    images: ["https://chasdomundo.pt/6364-large_default/linaza-marron.jpg"],
    category: "Semillas y granos",
    description: "Linaza molida, rica en fibra y ácido alfa-linolénico (omega-3).",
    longDescription:
      "Linaza molida lista para añadir a panes, batidos y yogures. Contiene ácido alfa-linolénico (ALA), fibra soluble e insoluble y lignanos con actividad antioxidante. Favorece la salud digestiva y aporta textura a las recetas.",
    benefits: [
      "Buena fuente de fibra dietética",
      "Aporta omega-3 vegetal (ALA)",
      "Contribuye a la salud intestinal",
      "Versátil en preparación de panes y batidos"
    ],
    ingredients: ["Linaza molida (Linum usitatissimum)"],
    usage: "Agregar 1-2 cucharadas a batidos, yogur o masas para hornear.",
    inStock: true,
    stock: 130,
    rating: 4.6,
    reviews: 112,
  },
  {
    id: 10,
    name: "Quinoa",
    price: 16000,
    originalPrice: 0,
    image: "https://www.almacenesusabiaga.com/wp-content/uploads/2018/12/quinoa.jpg",
    images: ["https://www.almacenesusabiaga.com/wp-content/uploads/2018/12/quinoa.jpg"],
    category: "Semillas y granos",
    description: "Quinoa andina, grano completo de alto valor proteico y sin gluten.",
    longDescription:
      "Quinoa blanca seleccionada, fuente completa de proteínas (contiene todos los aminoácidos esenciales), rica en fibra y minerales como hierro y magnesio. Ideal como base de ensaladas, guarnición o en bowls nutritivos.",
    benefits: [
      "Proteína completa vegetal",
      "Libre de gluten naturalmente",
      "Rica en fibra y minerales",
      "Versátil en cocina"
    ],
    ingredients: ["Quinoa (Chenopodium quinoa)"],
    usage: "Cocinar en proporción 1:2 (quinoa:agua) y usar como guarnición, en ensaladas o bowls.",
    inStock: true,
    stock: 90,
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 11,
    name: "Ajonjolí",
    price: 7000,
    originalPrice: 0,
    image: "https://nativoalimentos.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTUzNjYwMCwicHVyIjoiYmxvYl9pZCJ9fQ==--9c67d313b783e2f3945c49e674d22bb192b7b99c/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fZml0IjpbODAwLDgwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--cef66509c9cdc75663c0eefd9421db1d2ea4fead/ajonjoli-medellin-domicilio-mayorista.png?locale=es",
    images: ["https://nativoalimentos.co/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsiZGF0YSI6MTUzNjYwMCwicHVyIjoiYmxvYl9pZCJ9fQ==--9c67d313b783e2f3945c49e674d22bb192b7b99c/eyJfcmFpbHMiOnsiZGF0YSI6eyJmb3JtYXQiOiJwbmciLCJyZXNpemVfdG9fZml0IjpbODAwLDgwMF19LCJwdXIiOiJ2YXJpYXRpb24ifX0=--cef66509c9cdc75663c0eefd9421db1d2ea4fead/ajonjoli-medellin-domicilio-mayorista.png?locale=es"],
    category: "Semillas y granos",
    description: "Semillas de ajonjolí tostado, ricas en calcio y perfectas para aderezos.",
    longDescription:
      "Ajonjolí tostado con aroma intenso, excelente para espolvorear sobre panes, ensaladas y preparaciones asiáticas. Aporta calcio, hierro y grasas saludables en pequeñas porciones.",
    benefits: [
      "Fuente de calcio y minerales",
      "Buen aporte de grasas saludables",
      "Mejora sabor y textura de las recetas",
      "Uso culinario muy versátil"
    ],
    ingredients: ["Semillas de ajonjolí (Sesamum indicum)"],
    usage: "Utilizar en aderezos, panes, sushi o como topping en ensaladas.",
    inStock: true,
    stock: 160,
    rating: 4.5,
    reviews: 76,
  },
  {
    id: 12,
    name: "Girasol",
    price: 9500,
    originalPrice: 0,
    image: "https://escarola.co/wp-content/uploads/2015/08/semillas-de-girasol_1.jpg",
    images: ["https://escarola.co/wp-content/uploads/2015/08/semillas-de-girasol_1.jpg"],
    category: "Semillas y granos",
    description: "Semillas de girasol peladas, ricas en vitamina E y grasas saludables.",
    longDescription:
      "Semillas de girasol listas para consumir, peladas y tostadas levemente. Fuente de vitamina E, ácido linoleico y minerales. Perfectas para snacks, ensaladas o mezclas de granola.",
    benefits: [
      "Ricas en vitamina E (antioxidante)",
      "Aportan grasas insaturadas saludables",
      "Buena fuente de magnesio",
      "Textura crujiente para preparaciones"
    ],
    ingredients: ["Semillas de girasol (Helianthus annuus)"],
    usage: "Agregar a ensaladas, panes, granolas o consumir como snack.",
    inStock: true,
    stock: 120,
    rating: 4.7,
    reviews: 101,
  },
  {
    id: 13,
    name: "Calabaza",
    price: 12000,
    originalPrice: 0,
    image: "https://healingfoods.com.co/cdn/shop/files/GranelSemillasdecalabaza.jpg?v=1716319191",
    images: ["https://healingfoods.com.co/cdn/shop/files/GranelSemillasdecalabaza.jpg?v=1716319191"],
    category: "Semillas y granos",
    description: "Semillas de calabaza tostadas, ricas en zinc y sabor intenso.",
    longDescription:
      "Semillas de calabaza tostadas, con alto contenido en zinc, magnesio y grasas saludables. Ideales como snack, para topping en ensaladas o para añadir a panes y barras energéticas.",
    benefits: [
      "Rica en zinc y magnesio",
      "Buena fuente de proteínas vegetales",
      "Aporta textura y sabor a snacks y panes",
      "Versátil en recetas saladas y dulces"
    ],
    ingredients: ["Semillas de calabaza (Cucurbita pepo)"],
    usage: "Consumir como snack, en ensaladas o en recetas horneadas.",
    inStock: true,
    stock: 95,
    rating: 4.8,
    reviews: 85,
  },

  // Frutas deshidratadas
  {
    id: 14,
    name: "Uvas Pasas",
    price: 9500,
    originalPrice: 0,
    image: "https://www.orquidea.com.co/image/cache/catalog/Products/Nacional/1602015_1-1000x1000.jpg",
    images: ["https://www.orquidea.com.co/image/cache/catalog/Products/Nacional/1602015_1-1000x1000.jpg"],
    category: "Frutas deshidratadas",
    description: "Uvas pasas dulces, ideales para repostería y snacks saludables.",
    longDescription:
      "Uvas pasas naturales, secadas para concentrar su dulzor y nutrientes. Buen complemento en panes, cereales, ensaladas y recetas de repostería. Fuente de energía rápida y antioxidantes.",
    benefits: [
      "Fuente de azúcares naturales y energía",
      "Contienen antioxidantes",
      "Prácticas para repostería y snacks",
      "Buena conservación"
    ],
    ingredients: ["Uvas pasas (Vitis vinifera)"],
    usage: "Usar en panes, muffins, granolas o consumir como snack.",
    inStock: true,
    stock: 110,
    rating: 4.6,
    reviews: 90,
  },
  {
    id: 15,
    name: "Dátiles",
    price: 18000,
    originalPrice: 0,
    image: "https://frutosysemillas.com/cdn/shop/files/Datil.webp?v=1696621697",
    images: ["https://frutosysemillas.com/cdn/shop/files/Datil.webp?v=1696621697"],
    category: "Frutas deshidratadas",
    description: "Dátiles naturales sin azúcar añadida, ricos en fibra y energía natural.",
    longDescription:
      "Dátiles de textura suave, sin adición de azúcares, perfectos para endulzar recetas de forma natural o consumir como snack energético. Aportan fibra, potasio y antioxidantes.",
    benefits: [
      "Endulzante natural con fibra",
      "Altos en potasio y minerales",
      "Fuente de energía para actividades",
      "Útiles en repostería natural"
    ],
    ingredients: ["Dátiles (Phoenix dactylifera)"],
    usage: "Consumir solos, usar en rellenos, batidos o como base para barras energéticas.",
    inStock: true,
    stock: 105,
    rating: 4.8,
    reviews: 110,
  },
  {
    id: 16,
    name: "Ciruelas (pasas)",
    price: 15000,
    originalPrice: 0,
    image: "https://www.secofrut.com/wp-content/uploads/2018/11/ciruelasSP.gif",
    images: ["https://www.secofrut.com/wp-content/uploads/2018/11/ciruelasSP.gif"],
    category: "Frutas deshidratadas",
    description: "Ciruelas pasas sin semilla, ricas en fibra y con un sabor dulce intenso.",
    longDescription:
      "Ciruelas secas sin semilla, conocidas por su aporte de fibra y su efecto positivo en la digestión. Perfectas como snack, en postres o en mezclas de frutos secos.",
    benefits: [
      "Buena fuente de fibra",
      "Ayudan a la salud digestiva",
      "Ricas en antioxidantes",
      "Sabor dulce y profundo"
    ],
    ingredients: ["Ciruelas pasas (Prunus domestica)"],
    usage: "Consumir solas, en mezclas o como ingrediente en postres y batidos.",
    inStock: true,
    stock: 95,
    rating: 4.7,
    reviews: 88,
  },
  {
    id: 17,
    name: "Arándanos (deshidratados)",
    price: 21000,
    originalPrice: 0,
    image: "https://frutosysemillas.com/cdn/shop/files/arandanos-deshidratados-a-granel.jpg?v=1696625808",
    images: ["https://frutosysemillas.com/cdn/shop/files/arandanos-deshidratados-a-granel.jpg?v=1696625808"],
    category: "Frutas deshidratadas",
    description: "Arándanos deshidratados, ligeramente endulzados y ricos en antioxidantes.",
    longDescription:
      "Arándanos deshidratados con ligero endulzado para conservar textura y sabor. Ideales para granolas, mezclas de frutos secos y repostería. Aportan antioxidantes que apoyan la salud celular.",
    benefits: [
      "Ricos en antioxidantes (antocianinas)",
      "Aportan fibra y micronutrientes",
      "Excelente en granolas y mixes",
      "Sabor concentrado y agradable"
    ],
    ingredients: ["Arándanos deshidratados (Vaccinium spp.), azúcar (cantidad mínima si aplica)"],
    usage: "Agregar a granolas, ensaladas, yogur o consumir como snack.",
    inStock: true,
    stock: 115,
    rating: 4.8,
    reviews: 123,
  },
  {
    id: 18,
    name: "Banano Deshidratado",
    price: 9500,
    originalPrice: 0,
    image: "https://almifrut.cl/wp-content/uploads/2023/06/almifrut-bananadeshidratada-03.jpg",
    images: ["https://almifrut.cl/wp-content/uploads/2023/06/almifrut-bananadeshidratada-03.jpg"],
    category: "Frutas deshidratadas",
    description: "Rodajas de banano deshidratado, crujientes y naturalmente dulces.",
    longDescription:
      "Banano deshidratado en rodajas, conservando su dulzor natural y ofreciendo una textura crujiente. Perfecto para snacks, mezclas y toppings en postres y cereales.",
    benefits: [
      "Fuente natural de azúcares y potasio",
      "Snack práctico y duradero",
      "Textura crujiente y sabor dulce",
      "Apto para mezclas y recetas"
    ],
    ingredients: ["Banano deshidratado (Musa spp.)"],
    usage: "Consumir como snack, añadir a granolas o usar como topping en postres.",
    inStock: true,
    stock: 125,
    rating: 4.6,
    reviews: 97,
  },
  {
    id: 19,
    name: "Mango Deshidratado",
    price: 16500,
    originalPrice: 0,
    image: "https://frutosysemillas.com/cdn/shop/files/mango.jpg?v=1696626369",
    images: ["https://frutosysemillas.com/cdn/shop/files/mango.jpg?v=1696626369"],
    category: "Frutas deshidratadas",
    description: "Mango deshidratado sin azúcar añadida, con sabor tropical intenso.",
    longDescription:
      "Láminas de mango deshidratado que conservan el sabor tropical y la intensidad natural de la fruta. Sin azúcares añadidos, perfectas para snacks y mezclas exóticas.",
    benefits: [
      "Sabor intenso y natural",
      "Fuente de vitaminas y fibra",
      "Snack práctico y sabroso",
      "Apto para repostería y mixes"
    ],
    ingredients: ["Mango deshidratado (Mangifera indica)"],
    usage: "Consumir solo, en granolas o como ingrediente en recetas exóticas.",
    inStock: true,
    stock: 100,
    rating: 4.9,
    reviews: 111,
  },

  // Snacks y mezclas
  {
    id: 20,
    name: "Mix de Frutos Secos (Trail Mix)",
    price: 18500,
    originalPrice: 0,
    image: "https://cdn.prod.website-files.com/6421ce75be42e6b8e2158e40/64c42c09af676d5308a7ecdc_64bf5d7041ec4e7c97dbe4bc_picture%2520(2).jpeg",
    images: ["https://cdn.prod.website-files.com/6421ce75be42e6b8e2158e40/64c42c09af676d5308a7ecdc_64bf5d7041ec4e7c97dbe4bc_picture%2520(2).jpeg"],
    category: "Snacks y mezclas",
    description: "Mezcla natural de almendras, nueces, arándanos y semillas — snack energético balanceado.",
    longDescription:
      "Mix cuidadosamente balanceado de frutos secos y frutas deshidratadas, pensado para ofrecer energía sostenida en actividades al aire libre o como snack durante el día. Contiene una mezcla de texturas y sabores para mayor satisfacción.",
    benefits: [
      "Energía sostenida por mezcla de carbohidratos y grasas saludables",
      "Textura y variedad de sabor",
      "Fácil de llevar como snack",
      "Aporta fibra y micronutrientes"
    ],
    ingredients: ["Almendras, nueces, arándanos deshidratados, semillas (chia, girasol)"],
    usage: "Consumir directamente como snack o llevar en salidas y actividades.",
    inStock: true,
    stock: 140,
    rating: 4.8,
    reviews: 143,
  },
  {
    id: 21,
    name: "Barras Energéticas Naturales",
    price: 7500,
    originalPrice: 0,
    image: "https://natruly.com/cdn/shop/files/NATRULY-SHOPIFY_1200x1200px_47_31253d54-2015-4eb7-a43a-aa327596bffe.png?v=1712319618&width=1200",
    images: ["https://natruly.com/cdn/shop/files/NATRULY-SHOPIFY_1200x1200px_47_31253d54-2015-4eb7-a43a-aa327596bffe.png?v=1712319618&width=1200"],
    category: "Snacks y mezclas",
    description: "Barras elaboradas con frutos secos, avena y miel, sin conservantes artificiales.",
    longDescription:
      "Barras energéticas artesanales hechas con ingredientes naturales: frutos secos, avena integral y miel. Diseñadas para ofrecer un aporte práctico de energía y nutrientes antes o después del ejercicio.",
    benefits: [
      "Energía rápida y sostenida",
      "Sin conservantes artificiales",
      "Fuente de fibra y grasas saludables",
      "Prácticas para consumo inmediato"
    ],
    ingredients: ["Almendras, avena, miel, dátiles, semillas"],
    usage: "Consumir antes o después del ejercicio, o como snack entre comidas.",
    inStock: true,
    stock: 220,
    rating: 4.6,
    reviews: 92,
  },
  {
    id: 22,
    name: "Granolas",
    price: 14500,
    originalPrice: 0,
    image: "https://img.freepik.com/fotos-premium/granola-aislado-sobre-fondo-blanco_176402-7347.jpg",
    images: ["https://img.freepik.com/fotos-premium/granola-aislado-sobre-fondo-blanco_176402-7347.jpg"],
    category: "Snacks y mezclas",
    description: "Granola artesanal con avena, miel y frutas deshidratadas — perfecta para desayunos.",
    longDescription:
      "Granola crujiente elaborada con avena integral, miel, trozos de frutas deshidratadas y semillas. Ideal para combinar con leche, yogur o como topping en bowls de frutas para un desayuno nutritivo.",
    benefits: [
      "Aporta fibra y energía",
      "Textura crujiente y sabor natural",
      "Versátil en desayunos y snacks",
      "Elaborada con ingredientes reconocibles"
    ],
    ingredients: ["Avena integral, miel, arándanos deshidratados, semillas, nueces"],
    usage: "Servir con leche, yogur o como topping en bowls de fruta.",
    inStock: true,
    stock: 130,
    rating: 4.7,
    reviews: 100,
  },
  {
    id: 23,
    name: "Chips Saludables (Coco, Banano, Yuca)",
    price: 9500,
    originalPrice: 0,
    image: "https://previews.123rf.com/images/baibaz/baibaz1609/baibaz160900041/63450930-heap-of-healthy-colorful-vegetable-chips-isolated-on-white-background-from-top-view.jpg",
    images: ["https://previews.123rf.com/images/baibaz/baibaz1609/baibaz160900041/63450930-heap-of-healthy-colorful-vegetable-chips-isolated-on-white-background-from-top-view.jpg"],
    category: "Snacks y mezclas",
    description: "Chips horneados de coco, banano y yuca — sin conservantes, crujientes y sabrosos.",
    longDescription:
      "Variedad de chips horneados en base a ingredientes naturales (coco, banano, yuca). Sin aceites hidrogenados ni conservantes artificiales, ofrecen una alternativa crujiente y sabrosa a los snacks tradicionales.",
    benefits: [
      "Horneados, no fritos (cuando corresponde)",
      "Sin conservantes artificiales",
      "Opciones veganas y aptas para snack ligero",
      "Textura crujiente y sabor natural"
    ],
    ingredients: ["Coco deshidratado, banano deshidratado, yuca, aceite vegetal (si aplica), sal mínima"],
    usage: "Consumir como snack o acompañamiento en picadas saludables.",
    inStock: true,
    stock: 160,
    rating: 4.5,
    reviews: 85,
  },

  // Especias y condimentos naturales
  {
    id: 24,
    name: "Canela (molida)",
    price: 7000,
    originalPrice: 0,
    image: "https://laalacenadelchef.co/wp-content/uploads/2022/08/7702008062.jpg",
    images: ["https://laalacenadelchef.co/wp-content/uploads/2022/08/7702008062.jpg"],
    category: "Especias y condimentos naturales",
    description: "Canela en polvo natural, aroma cálido ideal para bebidas y postres.",
    longDescription:
      "Canela molida de calidad, con aroma y sabor cálido. Perfecta para preparar bebidas, postres, mezclas de especias y recetas de cocina. Aporta también compuestos antioxidantes.",
    benefits: [
      "Aporta sabor y aroma natural",
      "Contiene compuestos antioxidantes",
      "Ideal en repostería y bebidas",
      "Versátil en recetas dulces y saladas"
    ],
    ingredients: ["Canela molida (Cinnamomum verum o C. cassia)"],
    usage: "Agregar al gusto en bebidas, postres, panes y recetas saladas según preferencia.",
    inStock: true,
    stock: 200,
    rating: 4.7,
    reviews: 78,
  },
  {
    id: 25,
    name: "Nuez Moscada (molida)",
    price: 9500,
    originalPrice: 0,
    image: "https://bioretiro.com/wp-content/uploads/2023/09/NUEZ-MOSCADA.jpg",
    images: ["https://bioretiro.com/wp-content/uploads/2023/09/NUEZ-MOSCADA.jpg"],
    category: "Especias y condimentos naturales",
    description: "Nuez moscada molida con aroma intenso, ideal para platos y postres.",
    longDescription:
      "Nuez moscada molida de aroma profundo y cálido, utilizada en pequeñas cantidades para aportar complejidad a salsas, cremas, postres y bebidas calientes.",
    benefits: [
      "Sabor y aroma intensos",
      "Útil en pequeñas cantidades para realzar recetas",
      "Aporta notas aromáticas cálidas",
      "Ideal en repostería y salsas"
    ],
    ingredients: ["Nuez moscada molida (Myristica fragrans)"],
    usage: "Usar en pequeñas cantidades en salsas, cremas, postres o bebidas calientes.",
    inStock: true,
    stock: 75,
    rating: 4.6,
    reviews: 74,
  },
  {
    id: 26,
    name: "Cúrcuma (molida)",
    price: 8500,
    originalPrice: 0,
    image: "https://frutosysemillas.com/cdn/shop/files/CURCUMAMOLIDA.jpg?v=1696634942",
    images: ["https://frutosysemillas.com/cdn/shop/files/CURCUMAMOLIDA.jpg?v=1696634942"],
    category: "Especias y condimentos naturales",
    description: "Cúrcuma en polvo con alto contenido de curcumina, ideal para cocina y bebidas.",
    longDescription:
      "Cúrcuma molida de origen natural, utilizada tanto en cocina como en preparaciones saludables (golden milk). Contiene curcumina, compuesto con propiedades antiinflamatorias y antioxidantes.",
    benefits: [
      "Propiedades antiinflamatorias y antioxidantes",
      "Ideal en curries y bebidas saludables",
      "Aporta color y sabor característico",
      "Fácil de integrar en recetas"
    ],
    ingredients: ["Cúrcuma en polvo (Curcuma longa)"],
    usage: "Agregar a curries, batidos, leche dorada o recetas que requieran color y sabor.",
    inStock: true,
    stock: 180,
    rating: 4.8,
    reviews: 91,
  },
  {
    id: 27,
    name: "Pimienta (negra molida)",
    price: 7500,
    originalPrice: 0,
    image: "https://todoespecias.com/1508-medium_default/pimienta-negra.jpg",
    images: ["https://todoespecias.com/1508-medium_default/pimienta-negra.jpg"],
    category: "Especias y condimentos naturales",
    description: "Pimienta negra molida fresca para condimentar y realzar sabores.",
    longDescription:
      "Pimienta negra molida de buena calidad, esencial en la cocina para aportar picante y realce de sabores. Combina bien con la cúrcuma para mejorar la absorción de ciertos compuestos.",
    benefits: [
      "Realza sabores en platos salados",
      "Contiene antioxidantes",
      "Combinación útil con otras especias (ej. cúrcuma)",
      "Uso culinario generalizado"
    ],
    ingredients: ["Pimienta negra molida (Piper nigrum)"],
    usage: "Espolvorear al gusto sobre platos, salsas y aderezos.",
    inStock: true,
    stock: 190,
    rating: 4.7,
    reviews: 80,
  },

  // Harinas y derivados
  {
    id: 28,
    name: "Harina de Almendra",
    price: 21000,
    originalPrice: 0,
    image: "https://biovergel.es/wp-content/uploads/2020/04/almendra-harina-sin-piel.jpg",
    images: ["https://biovergel.es/wp-content/uploads/2020/04/almendra-harina-sin-piel.jpg"],
    category: "Harinas y derivados",
    description: "Harina de almendra finamente molida, sin gluten, ideal para repostería.",
    longDescription:
      "Harina de almendra 100% natural, molida finamente para obtener una textura suave en recetas sin gluten. Excelente para panes, galletas, y preparación de masas nutritivas con un aporte de grasas saludables.",
    benefits: [
      "Sin gluten naturalmente",
      "Aporta grasas saludables y proteína",
      "Textura suave en repostería",
      "Alternativa a harinas refinadas"
    ],
    ingredients: ["Harina de almendra (almendra molida)"],
    usage: "Usar en recetas de repostería, panes y masas en sustitución parcial de harinas con gluten.",
    inStock: true,
    stock: 70,
    rating: 4.8,
    reviews: 95,
  },
  {
    id: 29,
    name: "Harina de Avena",
    price: 9500,
    originalPrice: 0,
    image: "https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/h/a/harina-de-avena-x-1-kg.jpg",
    images: ["https://cdn.newgarden.com.ar/media/catalog/product/cache/dda7253a1a2f6711745de410175d10f8/h/a/harina-de-avena-x-1-kg.jpg"],
    category: "Harinas y derivados",
    description: "Harina integral de avena, fuente de fibra soluble, ideal para panes y batidos.",
    longDescription:
      "Harina de avena integral molida a partir de avena seleccionada. Rica en fibra soluble (beta-glucanos), aporta textura y consistencia en recetas de panes, pancakes y batidos nutritivos.",
    benefits: [
      "Rica en fibra soluble (beta-glucanos)",
      "Aporta energía sostenida",
      "Compatible en recetas integrales",
      "Buena alternativa para desayunos saludables"
    ],
    ingredients: ["Harina de avena (Avena sativa)"],
    usage: "Utilizar en preparaciones de panes, pancakes, galletas y batidos.",
    inStock: true,
    stock: 160,
    rating: 4.7,
    reviews: 102,
  },
  {
    id: 30,
    name: "Harina de Coco",
    price: 12500,
    originalPrice: 0,
    image: "https://frutosysemillas.com/cdn/shop/files/HarinadeCoco.jpg?v=1696634714",
    images: ["https://frutosysemillas.com/cdn/shop/files/HarinadeCoco.jpg?v=1696634714"],
    category: "Harinas y derivados",
    description: "Harina de coco natural, alta en fibra y baja en carbohidratos.",
    longDescription:
      "Harina de coco desgrasada y finamente molida, ideal para recetas bajas en carbohidratos y sin gluten. Aporta fibra y un sutil sabor a coco en panes y repostería.",
    benefits: [
      "Baja en carbohidratos y rica en fibra",
      "Apta para dietas sin gluten",
      "Aporta sabor y textura a recetas",
      "Excelente absorción de humedad"
    ],
    ingredients: ["Harina de coco (pulpa de coco molida)"],
    usage: "Usar en mezclas para repostería, ajustar líquidos por su alta absorción.",
    inStock: true,
    stock: 95,
    rating: 4.6,
    reviews: 84,
  },
  {
    id: 31,
    name: "Harina de Linaza",
    price: 10000,
    originalPrice: 0,
    image: "https://frutosysemillas.com/cdn/shop/files/HARINADELINAZA_grande.webp?v=1699361387",
    images: ["https://frutosysemillas.com/cdn/shop/files/HARINADELINAZA_grande.webp?v=1699361387"],
    category: "Harinas y derivados",
    description: "Harina de linaza molida, ideal para incorporar fibra y omega-3 en recetas.",
    longDescription:
      "Harina de linaza finamente molida lista para agregar a panes, galletas y batidos. Aporta fibra, ácido alfa-linolénico (omega-3) y lignanos que complementan dietas nutritivas.",
    benefits: [
      "Alta en fibra y omega-3",
      "Mejora la textura de masas",
      "Buena para batidos y panes integrales",
      "Fuente de lignanos"
    ],
    ingredients: ["Harina de linaza (linaza molida)"],
    usage: "Agregar en masas, panes o batidos para aumentar fibra y contenido nutricional.",
    inStock: true,
    stock: 120,
    rating: 4.7,
    reviews: 89,
  },

  // Endulzantes naturales
  {
    id: 32,
    name: "Miel (pura)",
    price: 18500,
    originalPrice: 0,
    image: "https://previews.123rf.com/images/kovalevaka/kovalevaka1708/kovalevaka170800023/84624517-liquid-honey-dripping-into-jar-from-dipper-isolated-on-white-background.jpg",
    images: ["https://previews.123rf.com/images/kovalevaka/kovalevaka1708/kovalevaka170800023/84624517-liquid-honey-dripping-into-jar-from-dipper-isolated-on-white-background.jpg"],
    category: "Endulzantes naturales",
    description: "Miel pura de abejas, 100% natural y sin aditivos.",
    longDescription:
      "Miel artesanal 100% natural, sin aditivos ni conservantes. Ideal como endulzante natural en bebidas, repostería y para uso directo. Conserva enzimas y compuestos naturales dependiendo del origen floral.",
    benefits: [
      "Endulzante natural con compuestos bioactivos",
      "Versátil en cocina y remedios caseros",
      "Fuente de energía natural",
      "Sin aditivos"
    ],
    ingredients: ["Miel pura (Apis mellifera)"],
    usage: "Usar como endulzante en infusiones, yogures, repostería o consumir en cucharadas.",
    inStock: true,
    stock: 90,
    rating: 4.9,
    reviews: 132,
  },
  {
    id: 33,
    name: "Panela Pulverizada",
    price: 9500,
    originalPrice: 0,
    image: "https://mrbatatacolombia.com/wp-content/uploads/2022/01/panela-1.png",
    images: ["https://mrbatatacolombia.com/wp-content/uploads/2022/01/panela-1.png"],
    category: "Endulzantes naturales",
    description: "Panela orgánica pulverizada, endulzante sin refinar con sabor caramelizado.",
    longDescription:
      "Panela orgánica pulverizada que conserva minerales del jugo de la caña. Endulzante sin refinar con un sabor característico a caramelo, ideal para bebidas, repostería y preparaciones tradicionales.",
    benefits: [
      "Endulzante sin refinar",
      "Conserva minerales naturales de la caña",
      "Sabor profundo tipo caramelo",
      "Apto para preparaciones tradicionales"
    ],
    ingredients: ["Panela orgánica pulverizada (jugo de caña secado)"],
    usage: "Usar en bebidas calientes, postres y recetas tradicionales como sustituto del azúcar refinado.",
    inStock: true,
    stock: 140,
    rating: 4.8,
    reviews: 118,
  },
  {
    id: 34,
    name: "Stevia Natural",
    price: 12500,
    originalPrice: 0,
    image: "https://acdn-us.mitiendanube.com/stores/001/021/255/products/fotos-productos-web-2024-11-19t133126-563-9c7fd74f3153c279cd17320339230395-1024-1024.png",
    images: ["https://acdn-us.mitiendanube.com/stores/001/021/255/products/fotos-productos-web-2024-11-19t133126-563-9c7fd74f3153c279cd17320339230395-1024-1024.png"],
    category: "Endulzantes naturales",
    description: "Stevia natural como alternativa sin calorías para endulzar bebidas y recetas.",
    longDescription:
      "Extracto de stevia de calidad, endulzante natural sin calorías ideal para quienes buscan reducir azúcar. Utilizar en cantidades pequeñas según equivalencias de sabor con el azúcar.",
    benefits: [
      "Endulzante sin calorías",
      "Apta para dietas bajas en carbohidratos",
      "No eleva la glucosa en sangre (según uso)",
      "Buena alternativa al azúcar refinado"
    ],
    ingredients: ["Extracto de stevia (Stevia rebaudiana)"],
    usage: "Usar en bebidas, postres y recetas en pequeñas cantidades según equivalencia al azúcar.",
    inStock: true,
    stock: 110,
    rating: 4.7,
    reviews: 96,
  },
]

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </main>
  )
}
