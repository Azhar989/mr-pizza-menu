export interface Price {
  small?: number;
  medium?: number;
  large?: number;
  xl?: number;
  half?: number;
  full?: number;
  single?: number;
  double?: number;
  oneScoop?: number;
  twoScoops?: number;
  threeScoops?: number;
}

export interface MenuItem {
  name: string;
  price: number | string | Price;
  description?: string;
  category: string;
  subCategory?: string;
  isPopular?: boolean;
  image?: string;
}

export const menuData: MenuItem[] = [
  // PLATTERS
  { name: "Mrs Special", price: 850, category: "Platters", description: "Our famous Own Baked Wings (6pcs), Spin Rolls (2pcs), and Mayo Dip (1pc). Perfect for tasting the best starters.", isPopular: true , image: "/images/special platter.jpeg"},
  { name: "Borne Fire", price: 850, category: "Platters", description: "For the spice lovers! Flaming Wings (6pcs), Mrs Spec. Rolls (2pcs), and our cooling Mayo Dip (1pc)." , image: "/images/born fire platter.jpeg"},
  { name: "Creamy", price: 850, category: "Platters", description: "Rich and delicious Creamy Wings (6pcs), Nawabi Rolls (2pcs), and Mayo Dip (1pc)." , image: "/images/creamy.jpeg"},

  // HOT DEALS
  { name: "Hot Deal 1", price: 1500, category: "Hot Deals", description: "1 Small Pizza (Any Flavor), 1 Mr Special Platter, and 1 Cold Drink (500ml)." , image: "/images/hot deal.jpeg"},
  { name: "Hot Deal 2", price: 2000, category: "Hot Deals", description: "1 Medium Pizza, 1 Creamy Pasta, and 1 Cold Drink (500ml)." , image: "/images/hot deal.jpeg"},
  { name: "Hot Deal 3", price: 2200, category: "Hot Deals", description: "1 Large Pizza, 1 Regular Fries, and 1 Cold Drink (1.5 Ltr)." , image: "/images/hot deal.jpeg"},
  { name: "Hot Deal 4", price: 2900, category: "Hot Deals", description: "2 Medium Pizzas, 1 Regular Fries, and 1 Cold Drink (1.5 Ltr)." , image: "/images/hot deal.jpeg"},
  { name: "Hot Deal 5", price: 3500, category: "Hot Deals", description: "1 Medium Pizza, 1 Large Pizza, 1 Regular Fries, and 1 Cold Drink (1.5 Ltr)." , image: "/images/hot deal.jpeg"},
  { name: "Hot Deal 6", price: 4000, category: "Hot Deals", description: "2 Large Pizzas, 1 Regular Fries, and 1 Cold Drink (1.5 Ltr)." , image: "/images/hot deal.jpeg"},
  { name: "Hot Deal 7", price: 1600, category: "Hot Deals", description: "1 Small Pizza, 2 Zinger Burgers, and 2 Can Drinks." , image: "/images/hot deal.jpeg"},
  { name: "Hot Deal 8", price: 2000, category: "Hot Deals", description: "4 Crispy Zinger Burgers, 2 Regular Fries, and 1 Drink (1.5 Ltr)." , image: "/images/hot deal.jpeg"},
  { name: "Hot Deal 9", price: 2850, category: "Hot Deals", description: "6 Crispy Zinger Burgers, 2 Regular Fries, and 1 Drink (1.5 Ltr)." , image: "/images/hot deal.jpeg"},
  { name: "Hot Deal 10", price: 5600, category: "Hot Deals", description: "2 Large Pizzas, 2 Regular Fries, 1 Drink (1.5 Ltr), and 4 Patty Burgers." , image: "/images/hot deal 10.jpeg"},
  { name: "Hot Deal 11", price: 2850, category: "Hot Deals", description: "1 XL Pizza, 1 Regular Fries, and 1 Drink (1.5 Ltr)." , image: "/images/hot deal.jpeg"},
  { name: "Hot Deal 12", price: 5700, category: "Hot Deals", description: "2 XL Pizzas, 2 Regular Fries, and 2 Drinks (1.5 Ltr)." , image: "/images/hot deal 12.jpeg"},

  // CHEF'S RANDOM CRAZY DEALS
  { name: "Midnight Craving Deal", price: 1250, category: "Hot Deals", description: "1 Zinger Burger, 6 Pery Pery Wings, 1 Loaded Fries, and 1 Mint Margarita. The ultimate late-night feast.", isPopular: true , image: "/images/hot deal.jpeg"},
  { name: "Pizza Party Box", price: 4500, category: "Hot Deals", description: "3 Large Pizzas (Any Flavor), 2 Garlic Mayo Fries, and 2x 1.5 Ltr Drinks." , image: "/images/hot deal.jpeg"},
  { name: "Desi Feast", price: 3200, category: "Hot Deals", description: "Half Chicken Karahi, 10 pc Malai Boti, 4 Roghni Naan, 1 Zeera Raita, and a 1.5 Ltr Drink." , image: "/images/hot deal.jpeg"},
  { name: "Ultimate Snack Attack", price: 1800, category: "Hot Deals", description: "1 Pizza Zinger Burger, 1 Jalapeno Cheese Fries, 6 Buffalo Wings, and 1 Nutella Shake." , image: "/images/hot deal.jpeg"},

  // BBQ PLATTERS
  { name: "B.B.Q Platter For 1 Person", price: 1299, category: "BBQ Platters", description: "Chicken Kabab (1), Beef Kabab (1), Malai Boti (2), Chicken Boti (2), Nan (1) with Rice, Raita, Fresh Salad, and 1 Soft Drink." , image: "/images/bbq platter.jpeg"},
  { name: "B.B.Q Platter For 2 Persons", price: 2999, category: "BBQ Platters", description: "Chicken Tikka (1), Chicken Kabab (2), Beef Kabab (2), Reshmi Kabab (2), Malai Boti (2), Chicken Boti (2), Fish Tikka (2), Nan (2) with Rice, Raita, Fresh Salad, and 1 Ltr Drink.", isPopular: true , image: "/images/bbq platter.jpeg"},
  { name: "B.B.Q Platter For 4 Persons", price: 5600, category: "BBQ Platters", description: "Chicken Tikka (2), Chicken Kabab (2), Reshmi Kabab (2), Malai Boti (4), Chicken Boti (4), Fish Tikka (4), Nan (2) with Rice, Raita, Fresh Salad, and 1.5 Ltr Drink." , image: "/images/bbq platter.jpeg"},

  // PAKISTANI FOOD
  { name: "Mr. Special Tawa Chicken", price: 1450, category: "Pakistani Food", description: "Our signature chicken cooked on a traditional flat pan with authentic local spices." , image: "/images/mr.special tawa chicken.jpeg"},
  { name: "Chicken Karahi", price: { half: 1100, full: 2000 }, category: "Pakistani Food", description: "Classic wok-cooked chicken with tomatoes, green chilies, and ginger." , image: "/images/karahi.jpeg"},
  { name: "Chicken White Karahi", price: { half: 1300, full: 2300 }, category: "Pakistani Food", description: "Creamy and mild chicken karahi prepared with cream, yogurt, and white pepper." , image: "/images/chicken white karahi.jpeg"},
  { name: "Chicken G.L Chilli Karahi", price: { half: 1150, full: 2100 }, category: "Pakistani Food", description: "Spicy chicken karahi with garlic, lemon, and extra green chilies." , image: "/images/chicken gl chili karahi.jpeg"},
  { name: "Chicken Achari Karahi", price: { half: 1200, full: 2200 }, category: "Pakistani Food", description: "Tangy and spicy chicken karahi infused with traditional pickle spices." , image: "/images/chicken achari karahi.jpeg"},
  { name: "Chicken Peshawari Karahi", price: { half: 1150, full: 2150 }, category: "Pakistani Food", description: "Authentic Peshawari style karahi cooked in tomato gravy with black pepper." , image: "/images/karahi.jpeg"},
  { name: "Chicken Mughali Handi", price: 1300, category: "Pakistani Food", description: "Rich, creamy Mughlai style chicken curry topped with almonds and cream." , image: "/images/chicken mughlai handi.jpeg"},
  { name: "Chicken Madrasi Handi", price: 1350, category: "Pakistani Food", description: "Spicy South Asian style handi with coconut and curry leaves." , image: "/images/chicken madrasi handi.jpeg"},
  { name: "Mozzarella Chicken Handi", price: 1550, category: "Pakistani Food", description: "Fusion handi topped with melted mozzarella cheese for a rich pull." , image: "/images/mozeralla chees handi.jpeg"},
  { name: "Chicken Handi", price: 1250, category: "Pakistani Food", description: "Boneless chicken pieces cooked in a rich, creamy, and flavorful gravy." , image: "/images/chicken handi.jpeg"},
  { name: "Chicken Achari Handi", price: 1350, category: "Pakistani Food", description: "Boneless chicken cooked with tangy pickle spices in a creamy gravy." , image: "/images/chicken achari handi.jpeg"},
  { name: "Chicken Ginger Handi", price: 1400, category: "Pakistani Food", description: "Boneless chicken handi with a prominent ginger and garlic profile." , image: "/images/chicken ginger handi.jpeg"},
  { name: "Chicken Jalfrezi Handi", price: 1450, category: "Pakistani Food", description: "Stir-fried boneless chicken with capsicums, onions, and tomatoes in a thick sauce." , image: "/images/chicken jalfrezi handi.jpeg"},
  { name: "Chicken Kabab Masala", price: 1200, category: "Pakistani Food", description: "Juicy chicken seekh kababs sliced and cooked in a spicy tomato masala." , image: "/images/chicken kabab masala.jpeg"},
  { name: "Arabian Pulao", price: 550, category: "Pakistani Food", description: "Fragrant rice cooked with Arabian spices, carrots, and raisins." , image: "/images/chicken fried rice.jpeg"},

  // B.B.Q
  { name: "Chicken Kabab (4pc)", price: 795, category: "Pakistani Food", subCategory: "BBQ", description: "Minced chicken perfectly spiced and grilled over charcoal." , image: "/images/chicken kabab masala.jpeg"},
  { name: "Chicken Cheese Kabab (4 pc)", price: 895, category: "Pakistani Food", subCategory: "BBQ", description: "Juicy chicken kababs stuffed with melted cheese inside." , image: "/images/chicken kabab masala.jpeg"},
  { name: "Reshmi Kabab (4 pc)", price: 995, category: "Pakistani Food", subCategory: "BBQ", description: "Silky, melt-in-the-mouth minced chicken kababs with cream and mild spices." , image: "/images/beef seekh kabab.jpeg"},
  { name: "Beef Seekh Kabab (4 pc)", price: 850, category: "Pakistani Food", subCategory: "BBQ", description: "Traditional beef mince kababs spiced with authentic herbs." , image: "/images/beef seekh kabab.jpeg"},
  { name: "Malai Boti (10 pc)", price: 1195, category: "Pakistani Food", subCategory: "BBQ", description: "Boneless chicken chunks marinated in cream, cheese, and green chilies." , image: "/images/malai boti.jpeg"},
  { name: "Tikka Boti (10 pc)", price: 950, category: "Pakistani Food", subCategory: "BBQ", description: "Spicy boneless chicken chunks marinated in our signature tikka spices." , image: "/images/tikka boti(10pcs).jpeg"},
  { name: "Tangri Tikka (6 pc)", price: 1199, category: "Pakistani Food", subCategory: "BBQ", description: "Chicken drumsticks marinated and grilled to smoky perfection." , image: "/images/tangri tikka.jpeg"},
  { name: "Fish Tikka (6 pc)", price: 1390, category: "Pakistani Food", subCategory: "BBQ", description: "Boneless fish cubes marinated in mild spices and char-grilled." , image: "/images/mr.special fish.jpeg"},
  { name: "Chicken Tikka (L/B)", price: 450, category: "Pakistani Food", subCategory: "BBQ", description: "Classic bone-in chicken quarter (Leg or Breast) char-grilled." , image: "/images/chiken tikka leg.jpeg"},
  { name: "Chicken Al Faham + Arabian Rice", price: 2100, category: "Pakistani Food", subCategory: "BBQ", description: "Arabian style grilled chicken served over fragrant rice." , image: "/images/chicken al faham with arabia.jpeg"},
  { name: "Mr. Special Fish Boneless (350 Gm)", price: 1200, category: "Pakistani Food", subCategory: "Seafood", description: "Fresh boneless fish lightly battered and fried to perfection." , image: "/images/mr.special fish.jpeg"},
  { name: "Mr. Special Fish Boneless (500 Gm)", price: 1700, category: "Pakistani Food", subCategory: "Seafood", description: "Fresh boneless fish lightly battered and fried to perfection." , image: "/images/mr.special fish.jpeg"},
  { name: "Mr. Special Fish Boneless (1000 Gm)", price: 3300, category: "Pakistani Food", subCategory: "Seafood", description: "Fresh boneless fish lightly battered and fried to perfection." , image: "/images/mr.special fish.jpeg"},

  // FRIES & APPETIZERS
  { name: "Loaded Fries", price: { half: 450, full: 799 }, category: "Appetizers", description: "Crispy fries loaded with cheese, chicken chunks, and special sauces." , image: "/images/loaded fries.jpeg"},
  { name: "Jalapeno Cheese Fries", price: 550, category: "Appetizers", description: "Fries topped with melted cheese and spicy jalapenos." , image: "/images/jalapeno fries.jpeg"},
  { name: "Garlic Mayo Fries", price: 350, category: "Appetizers", description: "Fries drizzled generously with our creamy garlic mayo." , image: "/images/garlic mayo fries.jpeg"},
  { name: "Plain Fries", price: 299, category: "Appetizers", description: "Classic salted crispy potato fries." , image: "/images/plain fries.jpeg"},
  { name: "Buffalo Wings (6 pc)", price: 599, category: "Appetizers", description: "Crispy wings tossed in spicy and tangy buffalo sauce." , image: "/images/buffalo wings.jpeg"},
  { name: "BBQ Wings (6 pc)", price: 499, category: "Appetizers", description: "Crispy wings tossed in sweet and smoky BBQ sauce." , image: "/images/bbq wings.jpeg"},
  { name: "Crispy Wings (6 pc)", price: 400, category: "Appetizers", description: "Classic golden fried crispy chicken wings." , image: "/images/crispy wings.jpeg"},
  { name: "Pery Pery Wings (6 pc)", price: 500, category: "Appetizers", description: "Wings tossed in a fiery peri peri spice mix." , image: "/images/pery pery wings.jpeg"},
  { name: "Hot Wings (10 pc)", price: { half: 380, full: 750 }, category: "Appetizers", description: "Spicy breaded chicken wings deep fried to perfection." , image: "/images/buffalo wings.jpeg"},
  { name: "Nuggets (10 pc)", price: { half: 270, full: 500 }, category: "Appetizers", description: "Golden fried tender chicken nuggets." , image: "/images/nuggets.jpeg"},
  { name: "Chicken Strips (3 pc)", price: 550, category: "Appetizers", description: "Crispy, breaded boneless chicken breast strips." , image: "/images/chicken strips.jpeg"},
  { name: "Finger Fish (4 pc)", price: 650, category: "Appetizers", description: "Crumb-fried long fish strips served with tartar sauce.", isPopular: true , image: "/images/fish n chips and fries.jpeg"},
  { name: "Fish N Chips With Fries (3 pc)", price: 950, category: "Appetizers", description: "Classic British style battered fish served with crispy fries." , image: "/images/fish n chips and fries.jpeg"},

  // PASTA & CHINESE CORNER
  { name: "Fettuccine Alfredo", price: 950, category: "Pasta", description: "Ribbon pasta tossed in a rich, creamy cheese sauce with grilled chicken." , image: "/images/fettuccine alfredo pasta.jpeg"},
  { name: "Mushroom Panini", price: 899, category: "Pasta", description: "Grilled panini sandwich stuffed with creamy mushrooms and chicken." , image: "/images/mushroom panini.jpeg"},
  { name: "Special Soup", price: { half: 649, full: 1249 }, category: "Chinese Corner", subCategory: "Soups", description: "Our chef's special thick soup loaded with chicken, prawns, and veggies." , image: "/images/special soup.jpeg"},
  { name: "Hot & Sour Soup", price: { half: 599, full: 1099 }, category: "Chinese Corner", subCategory: "Soups", description: "Classic tangy and spicy soup with chicken and vegetables." , image: "/images/hot and sour soup.jpeg"},
  { name: "Chicken Corn Soup", price: { half: 599, full: 1099 }, category: "Chinese Corner", subCategory: "Soups", description: "Mild, comforting thick soup with sweet corn and minced chicken." , image: "/images/chicken corn soup.jpeg"},
  { name: "Mr Sp. Chowmein", price: 1150, category: "Chinese Corner", description: "Special stir-fried noodles with mixed meats, vegetables, and signature sauce." , image: "/images/mr.sp chowmein.jpeg"},
  { name: "Chicken Chowmein", price: 999, category: "Chinese Corner", description: "Classic stir-fried noodles with chicken strips and vegetables.", isPopular: true , image: "/images/chicken chowmein.jpeg"},
  { name: "Veggie Chowmein", price: 699, category: "Chinese Corner", description: "Stir-fried noodles loaded with fresh crunchy vegetables." , image: "/images/veggie fried rice.jpeg"},
  { name: "Chicken Manchurian", price: 1150, category: "Chinese Corner", description: "Chicken cubes in a sweet, tangy, and slightly spicy red sauce." , image: "/images/chicken manchurian.jpeg"},
  { name: "Black Pepper Chicken", price: 1050, category: "Chinese Corner", description: "Stir-fried chicken tossed in a bold black pepper gravy." , image: "/images/black pepper chicken.jpeg"},
  { name: "Garlic Chicken", price: 1150, category: "Chinese Corner", description: "Chicken slices cooked in a strong garlic-infused sauce." , image: "/images/chicken chilli dry.jpeg"},
  { name: "Fish Chilli Dry", price: 1450, category: "Chinese Corner", description: "Crispy fried fish tossed with green chilies, onions, and dry spices." , image: "/images/fish chilli dry.jpeg"},
  { name: "Chicken Chilli Dry", price: 1150, category: "Chinese Corner", description: "Crispy chicken tossed with green chilies, capsicum, and dry spices." , image: "/images/chicken chilli dry.jpeg"},
  { name: "Chicken Almond", price: 1250, category: "Chinese Corner", description: "Mild chicken gravy topped with crunchy roasted almonds." , image: "/images/chicken almond.jpeg"},
  { name: "Chicken Cashew nut", price: 1250, category: "Chinese Corner", description: "Chicken stir-fried with roasted cashew nuts and veggies." , image: "/images/chicken cashew nuts.jpeg"},
  { name: "Mr. Special Rice", price: 1200, category: "Chinese Corner", description: "Signature fried rice mixed with chicken, prawns, and veggies." , image: "/images/chicken fried rice.jpeg"},
  { name: "Chicken Fried Rice", price: 1050, category: "Chinese Corner", description: "Wok-tossed rice with egg, veggies, and shredded chicken." , image: "/images/chicken fried rice.jpeg"},
  { name: "Egg Fried Rice", price: 850, category: "Chinese Corner", description: "Simple and delicious wok-tossed rice with scrambled eggs." , image: "/images/egg fried rice.jpeg"},
  { name: "Veggie Fried Rice", price: 750, category: "Chinese Corner", description: "Wok-tossed rice with fresh seasonal vegetables." , image: "/images/veggie fried rice.jpeg"},

  // NAAN, RAITA & SALAD
  { name: "Roti", price: 30, category: "Pakistani Food", subCategory: "Naan", description: "Traditional whole wheat flatbread cooked in a tandoor." , image: "/images/roti.jpeg"},
  { name: "Roghni Naan", price: 100, category: "Pakistani Food", subCategory: "Naan", description: "Soft, fluffy tandoori naan topped with sesame seeds and butter." , image: "/images/naan.jpeg"},
  { name: "Garlic Naan", price: 120, category: "Pakistani Food", subCategory: "Naan", description: "Tandoori naan infused with fresh minced garlic and butter." , image: "/images/garlic naan.jpeg"},
  { name: "Plain Naan", price: 80, category: "Pakistani Food", subCategory: "Naan", description: "Classic soft tandoori white flour flatbread." , image: "/images/naan.jpeg"},
  { name: "Mint Raita", price: 200, category: "Appetizers", subCategory: "Sides", description: "Cooling yogurt mixed with fresh mint and coriander." , image: "/images/raita.jpeg"},
  { name: "Zeera Raita", price: 150, category: "Appetizers", subCategory: "Sides", description: "Yogurt flavored with roasted cumin seeds." , image: "/images/raita.jpeg"},
  { name: "Fresh Salad", price: 180, category: "Appetizers", subCategory: "Sides", description: "Freshly cut cucumbers, tomatoes, onions, and greens." , image: "/images/raita.jpeg"},
  { name: "Russian Salad", price: 450, category: "Appetizers", subCategory: "Sides", description: "Creamy salad with boiled veggies, fruits, and mayo." , image: "/images/raita.jpeg"},
  { name: "Kachumber Salad (With Ice Cream)", price: 180, category: "Appetizers", subCategory: "Sides", description: "Finely chopped salad served with a unique touch." , image: "/images/raita.jpeg"},

  // PIZZA
  { name: "Mr. Special", price: { small: 750, medium: 1300, large: 1950, xl: 2550 }, category: "Pizza", subCategory: "Special", description: "Our masterpiece topped with premium chicken, mushrooms, olives, cheese, and a secret sauce." , image: "/images/mr. special pizza.jpeg"},
  { name: "Royal Supreme", price: { small: 750, medium: 1300, large: 1950, xl: 2550 }, category: "Pizza", subCategory: "Special", description: "A supreme blend of multiple chicken flavors, bell peppers, onions, and mozzarella." , image: "/images/royal supreme pizza.jpeg"},
  { name: "Click On", price: { small: 750, medium: 1300, large: 1950, xl: 2550 }, category: "Pizza", subCategory: "Special", description: "A delicious combination of chicken sausages, tikka chunks, and sweet corn." , image: "/images/click pn pizza.jpeg"},
  { name: "Borne Fire", price: { small: 750, medium: 1300, large: 1950, xl: 2550 }, category: "Pizza", subCategory: "Special", description: "Extremely spicy! Loaded with hot chicken, jalapenos, and our blazing chili sauce." , image: "/images/born fire platter.jpeg"},
  { name: "Donnar Pizza", price: { medium: 1500, large: 2000 }, category: "Pizza", subCategory: "Special", description: "Topped with juicy Doner meat slices, cheese, and fresh veggies." , image: "/images/doner pizza.jpeg"},
  { name: "Royal Crust", price: { medium: 1400, large: 2100, xl: 2550 }, category: "Pizza", subCategory: "Special", description: "A luxurious pizza featuring a special stuffed and seasoned crust." , image: "/images/royal crust.jpeg"},
  { name: "Behari Kabab", price: { medium: 1500, large: 2100, xl: 2900 }, category: "Pizza", subCategory: "Special", description: "Topped with authentic, spicy, melt-in-mouth Behari Kabab chunks." , image: "/images/behari kabab pizza.jpeg"},
  { name: "Makhni Pizza", price: { medium: 1500, large: 2100, xl: 2650 }, category: "Pizza", subCategory: "Special", description: "A creamy delight topped with rich Chicken Makhni (Butter Chicken) and cheese." , image: "/images/makhni pizza.jpeg"},
  { name: "Mr Sp Crown", price: { medium: 1600, large: 2600 }, category: "Pizza", subCategory: "Special", description: "Our premium crown-shaped crust pizza loaded with extra cheese and meat." , image: "/images/mr sp crow pizza.jpeg"},
  { name: "Mr Sp Sensation", price: { medium: 1600, large: 2600 }, category: "Pizza", subCategory: "Special", description: "A sensational mix of 3 different types of chicken and special white sauce." , image: "/images/mr sp sensation pizza.jpeg"},

  { name: "Chicken Tikka", price: { small: 700, medium: 1200, large: 1850, xl: 2450 }, category: "Pizza", subCategory: "Regular", description: "Traditional spicy Chicken Tikka chunks, onions, and lots of mozzarella cheese." , image: "/images/pizza.jpeg"},
  { name: "Chicken Fajita", price: { small: 700, medium: 1200, large: 1850, xl: 2450 }, category: "Pizza", subCategory: "Regular", description: "Mexican style Chicken Fajita meat, green peppers, and onions." , image: "/images/fajita pizaa.jpeg"},
  { name: "Fajita Sicillion", price: { small: 700, medium: 1200, large: 1850, xl: 2450 }, category: "Pizza", subCategory: "Regular", description: "A spicy twist on Fajita with added jalapenos and Sicilian hot sauce." , image: "/images/fajita pizaa.jpeg"},
  { name: "Cheese Lover", price: { small: 700, medium: 1200, large: 1850, xl: 2450 }, category: "Pizza", subCategory: "Regular", description: "A simple, classic pizza loaded with a double layer of mozzarella cheese." , image: "/images/cheese lover pizza.jpeg"},
  { name: "Spice On", price: { small: 700, medium: 1200, large: 1850, xl: 2450 }, category: "Pizza", subCategory: "Regular", description: "For heat seekers. Spicy chicken, hot chilies, and fiery sauce." , image: "/images/pizza.jpeg"},
  { name: "Chicken Supreme", price: { small: 700, medium: 1200, large: 1850, xl: 2450 }, category: "Pizza", subCategory: "Regular", description: "The ultimate classic with chicken chunks, olives, mushrooms, and bell peppers." , image: "/images/pizza.jpeg"},
  { name: "Euro", price: { small: 700, medium: 1200, large: 1850, xl: 2450 }, category: "Pizza", subCategory: "Regular", description: "European style pizza with sausages, smoked chicken, and mushrooms." , image: "/images/pizza.jpeg"},
  { name: "Veggie Lover", price: { small: 700, medium: 1200, large: 1850, xl: 2450 }, category: "Pizza", subCategory: "Regular", description: "A vegetarian delight loaded with fresh tomatoes, onions, capsicum, olives, and mushrooms." , image: "/images/veggie pizza.jpeg"},

  { name: "Chicken Stuffer", price: 2200, category: "Pizza", subCategory: "Stuffer", description: "A unique pizza with crust stuffed completely with minced chicken." , image: "/images/chicken and cheese stuffer pizza.jpeg"},
  { name: "Cheese Stuffer", price: 2200, category: "Pizza", subCategory: "Stuffer", description: "The crust is heavily stuffed with gooey melted mozzarella." , image: "/images/cheese stuffer pizza.jpeg"},
  { name: "Chicken & Cheese Stuffer", price: 2400, category: "Pizza", subCategory: "Stuffer", description: "The ultimate crust stuffed with both minced chicken and melted cheese." , image: "/images/chicken and cheese stuffer pizza.jpeg"},
  { name: "Kabab Stuffer", price: 2400, category: "Pizza", subCategory: "Stuffer", description: "A premium pizza with crust stuffed with juicy seekh kababs." , image: "/images/kabab stuffer pizza.jpeg"},

  // BURGERS
  { name: "Zinger Burger", price: 399, category: "Burgers", description: "Crispy, golden-fried chicken breast in a soft bun with mayo and lettuce." , image: "/images/zinger burger.jpeg"},
  { name: "Mr.Sp Zinger Burger", price: 499, category: "Burgers", description: "Our signature zinger topped with special sauces and extra cheese." , image: "/images/mr.sp zinger burger.jpeg"},
  { name: "BBQ Special Burger", price: 650, category: "Burgers", description: "Grilled chicken fillet smothered in smoky BBQ sauce and onions." , image: "/images/bbq special burger.jpeg"},
  { name: "Sp.Cheese Burger", price: 550, category: "Burgers", description: "A double cheese delight with a juicy chicken patty." , image: "/images/sp.cheese burger.jpeg"},
  { name: "Patty Burger", price: 350, category: "Burgers", description: "Classic grilled chicken minced patty with fresh veggies and mayo." , image: "/images/patty burger.jpeg"},
  { name: "BBQ Burger", price: 399, category: "Burgers", description: "Simple and delicious patty burger with BBQ sauce." , image: "/images/bbq special burger.jpeg"},
  { name: "Honey Mustard Burger", price: 599, category: "Burgers", description: "Crispy chicken burger topped with sweet and tangy honey mustard sauce." , image: "/images/honey mustard burger.jpeg"},
  { name: "Mashroom Burger", price: 550, category: "Burgers", description: "Juicy chicken burger loaded with a creamy mushroom sauce." , image: "/images/mushroom burger.jpeg"},
  { name: "Fish Burger With Fries", price: 650, category: "Burgers", description: "Crispy fried fish fillet in a bun, served with a side of fries." , image: "/images/fish burger.jpeg"},

  // PIZZA BURGERS
  { name: "Pizza Zinger Burger", price: 699, category: "Burgers", description: "A hybrid monster! Zinger burger baked with pizza sauce, cheese, and toppings on top." , image: "/images/burger pizza.jpeg"},
  { name: "Pizza Patty Burger", price: 600, category: "Burgers", description: "Grilled patty burger topped and baked like a pizza." , image: "/images/pizza patty burger.jpeg"},
  { name: "Pizza Double MAC", price: 750, category: "Burgers", description: "Double patty burger overloaded with cheese and pizza toppings." , image: "/images/burger pizza.jpeg"},

  // ROLLS, SHAWARMA & SANDWICHES
  { name: "Spin Roll", price: 700, category: "Rolls", description: "Crispy fried rolls stuffed with spiced chicken and cheese." , image: "/images/spin roll.jpeg"},
  { name: "Mr Special Roll", price: 700, category: "Rolls", description: "Our signature baked roll with an abundance of meat and cheese.", isPopular: true , image: "/images/crunchy roll.jpeg"},
  { name: "Crunchy Roll", price: 700, category: "Rolls", description: "A roll with an extra crispy exterior and creamy chicken inside." , image: "/images/crunchy roll.jpeg"},
  { name: "Nawabi Roll", price: 700, category: "Rolls", description: "A rich, royal roll loaded with premium ingredients and spices." , image: "/images/crunchy roll.jpeg"},

  { name: "Zinger Cheese Pratha Roll", price: 450, category: "Rolls", subCategory: "Pratha", description: "Crispy zinger chicken and cheese wrapped in a flaky paratha." , image: "/images/zinger paratha.jpeg"},
  { name: "Zinger Pratha Roll", price: 400, category: "Rolls", subCategory: "Pratha", description: "Crispy zinger chicken chunks wrapped in a flaky, buttery paratha." , image: "/images/zinger paratha.jpeg"},
  { name: "Kabab Pratha Roll", price: 500, category: "Rolls", subCategory: "Pratha", description: "Juicy grilled kababs wrapped in a paratha with onions and chutney." , image: "/images/kabab paratha.jpeg"},
  { name: "Chicken Pratha Roll", price: 450, category: "Rolls", subCategory: "Pratha", description: "Spicy BBQ chicken boti wrapped in a fresh paratha." , image: "/images/chicken paratha.jpeg"},
  { name: "Pizza Pratha Roll", price: 700, category: "Rolls", subCategory: "Pratha", description: "A heavy paratha roll stuffed with pizza sauce, olives, chicken, and cheese." , image: "/images/zinger paratha.jpeg"},

  { name: "Chicken Shawarma", price: 299, category: "Shawarma", description: "Authentic Arabic bread filled with roasted chicken and garlic sauce." , image: "/images/chicken shawarma.jpeg"},
  { name: "Cheesy Shawarma", price: 330, category: "Shawarma", description: "Classic chicken shawarma loaded with extra melted cheese." , image: "/images/cheese shawarma.jpeg"},
  { name: "Zinger Shawarma", price: 350, category: "Shawarma", description: "A spicy twist using crispy zinger chicken instead of roasted chicken." , image: "/images/zinger shwarma.jpeg"},
  { name: "Platter Shawarma", price: 549, category: "Shawarma", description: "Deconstructed open shawarma served as a platter with extra meat, fries, and bread." , image: "/images/plater shawarma.jpeg"},

  { name: "Trottila Wrap", price: 500, category: "Burgers", subCategory: "Wraps", description: "Grilled chicken and veggies wrapped tightly in a Mexican tortilla." , image: "/images/chicken shawarma.jpeg"},
  { name: "Chicken Grill Wrap", price: 500, category: "Burgers", subCategory: "Wraps", description: "Healthy grilled chicken strips wrapped in a soft flatbread." , image: "/images/chicken shawarma.jpeg"},

  { name: "Club Sandwich", price: 600, category: "Burgers", subCategory: "Sandwiches", description: "Classic 3-tier sandwich with chicken, egg, cheese, and veggies. Served with fries." , image: "/images/club sandwich.jpeg"},
  { name: "Kameera Sandwich", price: 700, category: "Burgers", subCategory: "Sandwiches", description: "Specialty sandwich made with local Kameera bread and roasted meat." , image: "/images/kameera sandwich.jpeg"},

  { name: "Mayo Dip", price: 70, category: "Appetizers", subCategory: "Dips", description: "Extra serving of our creamy mayonnaise." , image: "/images/raita.jpeg"},
  { name: "Garlic Dip", price: 70, category: "Appetizers", subCategory: "Dips", description: "Extra serving of our signature garlic sauce." , image: "/images/raita.jpeg"},

  // ARABIAN BROAST
  { name: "Quarter Broast (1 Leg/Thai)", price: 700, category: "Arabian Broast", description: "One piece of crispy, pressure-fried Arabian style chicken." , image: "/images/arabian broast.jpeg"},
  { name: "Half Broast (2 Leg/Thai, 1 Bun, 2 Dip, 1 Fries)", price: 1100, category: "Arabian Broast", description: "Two pieces of crispy broast served with bun, fries, and garlic dip." , image: "/images/arabian broast.jpeg"},
  { name: "Full Broast (4 Leg/Thai, 2 Bun, 4 Dip, 2 Fries)", price: 1800, category: "Arabian Broast", description: "Four pieces of crispy broast served with 2 buns, fries, and 4 dips." , image: "/images/arabian broast.jpeg"},
  { name: "Maza Deal (Half Broast & 500ml Drink)", price: 1300, category: "Arabian Broast", description: "Half Broast meal complete with a cold 500ml drink." , image: "/images/arabian broast.jpeg"},
  { name: "Family Deal (2 Full Broast & 4 Fries)", price: 3400, category: "Arabian Broast", description: "A massive feast of 8 broast pieces and 4 servings of fries." , image: "/images/arabian broast.jpeg"},
  { name: "Couple Deal (Full Broast & 1.5 Ltr Drink)", price: 2000, category: "Arabian Broast", description: "4 pieces of broast to share, plus a large 1.5L drink." , image: "/images/arabian broast.jpeg"},
  { name: "Jumbo Deal (4 Full Broast & Fries)", price: 6800, category: "Arabian Broast", description: "The ultimate party package with 16 pieces of broast and loads of fries." , image: "/images/arabian broast.jpeg"},

  // BAR MENU (MOCKTAILS & MOJITOS)
  { name: "Mr. Special Drinks", price: 550, category: "Bar Menu", subCategory: "Mocktails", description: "Our secret recipe mocktail. A refreshing mix of sweet and sour." , image: "/images/blueberry mojito.jpeg"},
  { name: "Mint Margarita", price: 299, category: "Bar Menu", subCategory: "Mocktails", description: "Classic crushed ice drink with fresh mint and lime." , image: "/images/mint mojito.jpeg"},
  { name: "Mint Lemonade", price: 299, category: "Bar Menu", subCategory: "Mocktails", description: "Refreshing lemonade infused with fresh mint leaves." , image: "/images/mint mojito.jpeg"},
  { name: "Blue Lagoon", price: 550, category: "Bar Menu", subCategory: "Mocktails", description: "A sweet, bright blue citrus mocktail served over ice." , image: "/images/blueberry mojito.jpeg"},
  { name: "Mango Zingo", price: 450, category: "Bar Menu", subCategory: "Mocktails", description: "A zingy and fizzy drink made with real mango puree." , image: "/images/mango mojito.jpeg"},
  { name: "Guava Mint", price: 400, category: "Bar Menu", subCategory: "Mocktails", description: "A unique blend of sweet guava juice and fresh mint." , image: "/images/mint mojito.jpeg"},
  { name: "Pina Colada", price: 500, category: "Bar Menu", subCategory: "Mocktails", description: "A creamy, tropical blend of coconut milk and pineapple juice." , image: "/images/blueberry mojito.jpeg"},
  { name: "Electric Lemonade", price: 400, category: "Bar Menu", subCategory: "Mocktails", description: "A charged-up, extra sour and sweet blue lemonade." , image: "/images/lemon mojito.jpeg"},
  { name: "Mint Colada", price: 450, category: "Bar Menu", subCategory: "Mocktails", description: "A refreshing twist on the Colada with a strong mint kick." , image: "/images/mint mojito.jpeg"},
  { name: "Fresh Lime", price: 200, category: "Bar Menu", subCategory: "Mocktails", description: "Simple, fizzy, and refreshing lime soda (sweet or salted)." , image: "/images/lemon mojito.jpeg"},

  { name: "Mint Mojito", price: 450, category: "Bar Menu", subCategory: "Mojitos", description: "Classic virgin mojito with muddled mint and lime." , image: "/images/mint mojito.jpeg"},
  { name: "Peach Mojito", price: 450, category: "Bar Menu", subCategory: "Mojitos", description: "Virgin mojito infused with sweet peach syrup." , image: "/images/peach mojito.jpeg"},
  { name: "Mango Mojito", price: 450, category: "Bar Menu", subCategory: "Mojitos", description: "Virgin mojito with a tropical mango twist." , image: "/images/mango mojito.jpeg"},
  { name: "Blue Berry Mojito", price: 450, category: "Bar Menu", subCategory: "Mojitos", description: "Virgin mojito bursting with blueberry flavors." , image: "/images/blueberry mojito.jpeg"},
  { name: "Strawberry Mojito", price: 450, category: "Bar Menu", subCategory: "Mojitos", description: "Virgin mojito mixed with fresh strawberry puree." , image: "/images/strawberry mojiti.jpeg"},
  { name: "Passion Fruit Mojito", price: 450, category: "Bar Menu", subCategory: "Mojitos", description: "Exotic passion fruit flavored virgin mojito." , image: "/images/passion fruit mojito.jpeg"},
  { name: "Lemon Mojito", price: 450, category: "Bar Menu", subCategory: "Mojitos", description: "Extra citrusy virgin mojito with a strong lemon profile." , image: "/images/lemon mojito.jpeg"},

  // SHAKES, SMOOTHIES & SLUSH
  { name: "Mr. Special Milk Shake", price: 550, category: "Bar Menu", subCategory: "Shakes", description: "Our signature overloaded, extremely rich milk shake." , image: "/images/mr.special milk shake.jpeg"},
  { name: "Vanilla Shake", price: 500, category: "Bar Menu", subCategory: "Shakes", description: "Classic thick shake made with premium vanilla ice cream." , image: "/images/vanilla shake.jpeg"},
  { name: "Chocolate Shake", price: 500, category: "Bar Menu", subCategory: "Shakes", description: "Rich, dense chocolate shake topped with chocolate syrup." , image: "/images/chocolate shake.jpeg"},
  { name: "Nutella Shake", price: 550, category: "Bar Menu", subCategory: "Shakes", description: "A heavenly shake blended with generous scoops of real Nutella." , image: "/images/nutella shake.jpeg"},
  { name: "Oreo Shake", price: 550, category: "Bar Menu", subCategory: "Shakes", description: "Thick vanilla shake blended with crunchy Oreo cookies." , image: "/images/oreo shake.jpeg"},

  { name: "Ginger Pineapple Smoothie", price: 450, category: "Bar Menu", subCategory: "Smoothies", description: "A healthy, sweet and spicy blend of pineapple and ginger." , image: "/images/ginger pineapple smoothie.jpeg"},
  { name: "Mango Smoothie", price: 500, category: "Bar Menu", subCategory: "Smoothies", description: "Thick and creamy smoothie made with fresh mangoes." , image: "/images/mango smoothie.jpeg"},
  { name: "Peach On Rock Smoothie", price: 500, category: "Bar Menu", subCategory: "Smoothies", description: "Icy and thick peach smoothie." , image: "/images/peach on rock smoothie.jpeg"},
  { name: "Blue Berry Smoothie", price: 450, category: "Bar Menu", subCategory: "Smoothies", description: "Antioxidant-rich thick blueberry smoothie." , image: "/images/blue berry smoothie.jpeg"},
  { name: "Kiwi Smoothie", price: 450, category: "Bar Menu", subCategory: "Smoothies", description: "Tart and sweet refreshing kiwi smoothie." , image: "/images/kiwi smoothie.jpeg"},

  { name: "Peach Slush", price: 400, category: "Bar Menu", subCategory: "Slush", description: "Icy, sweet, and refreshing peach flavored crushed ice drink." , image: "/images/peach slush.jpeg"},
  { name: "Mango Slush", price: 400, category: "Bar Menu", subCategory: "Slush", description: "Icy and sweet mango flavored crushed ice drink." , image: "/images/mango slush.jpeg"},
  { name: "Strawberry Slush", price: 400, category: "Bar Menu", subCategory: "Slush", description: "Icy, sweet, and refreshing strawberry crushed ice drink." , image: "/images/strawberry slush.jpeg"},
  { name: "Apple Slush", price: 400, category: "Bar Menu", subCategory: "Slush", description: "Sweet and tart apple flavored crushed ice drink." , image: "/images/apple slush.jpeg"},

  { name: "Peach Ice Tea", price: 450, category: "Bar Menu", subCategory: "Ice Tea", description: "Chilled black tea infused with sweet peach flavor." , image: "/images/peach iced tea.jpeg"},
  { name: "Lemon Ice Tea", price: 400, category: "Bar Menu", subCategory: "Ice Tea", description: "Chilled black tea with a refreshing squeeze of lemon." , image: "/images/lemon iced tea.jpeg"},
  { name: "Apple Ice Tea", price: 400, category: "Bar Menu", subCategory: "Ice Tea", description: "Chilled black tea infused with crisp apple flavor." , image: "/images/apple iced tea.jpeg"},

  // COFFEE, TEA & BEVERAGES
  { name: "Cappuccino", price: { small: 500, large: 650 }, category: "Coffee", description: "Espresso mixed with a balanced amount of steamed milk and thick foam." , image: "/images/hot coffee(cappuccino).jpeg"},
  { name: "Cafe Latte", price: { small: 500, large: 650 }, category: "Coffee", description: "Smooth espresso layered with lots of steamed milk and a light foam top." , image: "/images/caffe latte.jpeg"},
  { name: "Café Mocha", price: { small: 500, large: 650 }, category: "Coffee", description: "Espresso combined with rich chocolate syrup and steamed milk." , image: "/images/cafe mocha.jpeg"},
  { name: "Americano", price: { small: 400 }, category: "Coffee", description: "A simple, strong black coffee made with hot water and espresso." , image: "/images/americano.jpeg"},
  { name: "Espresso", price: { small: 300, large: 550 }, category: "Coffee", description: "A strong, concentrated shot of pure coffee." , image: "/images/espresso.jpeg"},
  { name: "Hot Chocolate", price: { large: 550 }, category: "Coffee", description: "Rich, sweet, and comforting hot chocolate milk." , image: "/images/hot chocolate.jpeg"},

  { name: "Vanilla Cold Coffee", price: 500, category: "Coffee", subCategory: "Cold", description: "Chilled sweet coffee blended with vanilla flavor." , image: "/images/vanilla cold coffee.jpeg"},
  { name: "Mix Cold Coffee", price: 500, category: "Coffee", subCategory: "Cold", description: "Our special blend of cold coffee." , image: "/images/mix cold coffee.jpeg"},
  { name: "Oreo Cold Coffee", price: 500, category: "Coffee", subCategory: "Cold", description: "Cold coffee blended with crushed Oreo cookies." , image: "/images/oreo cold coffee.jpeg"},
  { name: "Caramel Cold Coffee", price: 500, category: "Coffee", subCategory: "Cold", description: "Cold coffee sweetened with rich caramel syrup." , image: "/images/caramel col coffee.jpeg"},

  { name: "Vanilla Frape", price: 550, category: "Coffee", subCategory: "Frape", description: "Icy, blended coffee drink with vanilla syrup." , image: "/images/vanilla frappe coffee.jpeg"},
  { name: "Oreo Frape", price: 550, category: "Coffee", subCategory: "Frape", description: "Icy, blended coffee drink with crushed Oreos." , image: "/images/oreo frappe coffee.jpeg"},
  { name: "Chocolate Frape", price: 550, category: "Coffee", subCategory: "Frape", description: "Icy, blended coffee drink with rich chocolate syrup." , image: "/images/chocolate frappwe coffee.jpeg"},
  { name: "Mocha Frape", price: 550, category: "Coffee", subCategory: "Frape", description: "Icy, blended coffee drink combining espresso and chocolate." , image: "/images/mocha frape coffee.jpeg"},

  { name: "Ice Latte", price: 500, category: "Coffee", subCategory: "Ice", description: "Espresso and milk poured over ice." , image: "/images/caffe latte.jpeg"},
  { name: "Caramel Ice Coffee", price: 500, category: "Coffee", subCategory: "Ice", description: "Iced coffee with sweet caramel syrup." , image: "/images/caramel col coffee.jpeg"},

  { name: "Mix Tea", price: 230, category: "Coffee", description: "Traditional strong brewed milk tea (Doodh Patti)." , image: "/images/mix tea.jpeg"},
  { name: "Green Tea", price: 120, category: "Coffee", description: "Light and healthy brewed green tea leaves." , image: "/images/mint tea.jpeg"},
  { name: "Mint Tea", price: 120, category: "Coffee", description: "Soothing tea brewed with fresh mint leaves." , image: "/images/mint tea.jpeg"},
  { name: "Peach Tea", price: 120, category: "Coffee", description: "Hot black tea infused with sweet peach notes." , image: "/images/peach tea.jpeg"},

  { name: "Soft Drink Tin", price: 130, category: "Beverages", description: "Chilled 250ml canned soda of your choice." , image: "/images/pepsi tin.jpeg"},
  { name: "Large Water", price: 130, category: "Beverages", description: "1.5 Liter bottle of purified mineral water." , image: "/images/water large.jpeg"},
  { name: "Small Water", price: 70, category: "Beverages", description: "500ml bottle of purified mineral water." , image: "/images/water large.jpeg"},

  // DESSERTS & ICE CREAM
  { name: "Walnut Brownie", price: 550, category: "Deserts", description: "Warm, fudgy chocolate brownie loaded with roasted walnuts." , image: "/images/brownie.jpeg"},
  { name: "Cake Alaska", price: 550, category: "Deserts", description: "A special layered dessert featuring cake, ice cream, and meringue." , image: "/images/brownie.jpeg"},
  { name: "Molten Lava", price: 550, category: "Deserts", description: "Warm chocolate cake with a gooey, flowing chocolate center. Served with ice cream." , image: "/images/brownie.jpeg"},

  { name: "Ice Cream (1 Scoop)", price: 160, category: "Deserts", description: "One scoop of your favorite premium ice cream flavor." , image: "/images/ice cream scoop.jpeg"},
  { name: "Ice Cream (2 Scoops)", price: 300, category: "Deserts", description: "Two scoops of your favorite premium ice cream flavors." , image: "/images/ice cream scoop.jpeg"},
  { name: "Ice Cream (3 Scoops)", price: 430, category: "Deserts", description: "Three scoops of your favorite premium ice cream flavors." , image: "/images/ice cream scoop.jpeg"},

  { name: "Sweet Lassi", price: 150, category: "Deserts", subCategory: "Lassi", description: "Traditional sweet, thick, and creamy yogurt drink." , image: "/images/flavor lassi.jpeg"},
  { name: "Mango Lassi", price: 200, category: "Deserts", subCategory: "Lassi", description: "Thick yogurt drink blended with sweet, fresh mango puree." , image: "/images/flavor lassi.jpeg"},
  { name: "Flavour Lassi", price: 200, category: "Deserts", subCategory: "Lassi", description: "Traditional lassi blended with a flavor of your choice." , image: "/images/flavor lassi.jpeg"},
];
