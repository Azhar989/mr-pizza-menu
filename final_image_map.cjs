const fs = require('fs');

// Complete precise mapping: menu item name (lowercase) => local image path
const exactMap = {
  // PLATTERS
  "mrs special": "/images/special platter.jpeg",
  "borne fire": "/images/born fire platter.jpeg",
  "creamy": "/images/creamy.jpeg",

  // HOT DEALS
  "hot deal 1": "/images/hot deal.jpeg",
  "hot deal 2": "/images/hot deal.jpeg",
  "hot deal 3": "/images/hot deal.jpeg",
  "hot deal 4": "/images/hot deal.jpeg",
  "hot deal 5": "/images/hot deal.jpeg",
  "hot deal 6": "/images/hot deal.jpeg",
  "hot deal 7": "/images/hot deal.jpeg",
  "hot deal 8": "/images/hot deal.jpeg",
  "hot deal 9": "/images/hot deal.jpeg",
  "hot deal 10": "/images/hot deal 10.jpeg",
  "hot deal 11": "/images/hot deal.jpeg",
  "hot deal 12": "/images/hot deal 12.jpeg",
  "midnight craving deal": "/images/hot deal.jpeg",
  "pizza party box": "/images/hot deal.jpeg",
  "desi feast": "/images/hot deal.jpeg",
  "ultimate snack attack": "/images/hot deal.jpeg",

  // BBQ PLATTERS
  "b.b.q platter for 1 person": "/images/bbq platter.jpeg",
  "b.b.q platter for 2 persons": "/images/bbq platter.jpeg",
  "b.b.q platter for 4 persons": "/images/bbq platter.jpeg",

  // PAKISTANI FOOD
  "mr. special tawa chicken": "/images/mr.special tawa chicken.jpeg",
  "chicken karahi": "/images/karahi.jpeg",
  "chicken white karahi": "/images/chicken white karahi.jpeg",
  "chicken g.l chilli karahi": "/images/chicken gl chili karahi.jpeg",
  "chicken achari karahi": "/images/chicken achari karahi.jpeg",
  "chicken peshawari karahi": "/images/karahi.jpeg",
  "chicken mughali handi": "/images/chicken mughlai handi.jpeg",
  "chicken madrasi handi": "/images/chicken madrasi handi.jpeg",
  "mozzarella chicken handi": "/images/mozeralla chees handi.jpeg",
  "chicken handi": "/images/chicken handi.jpeg",
  "chicken achari handi": "/images/chicken achari handi.jpeg",
  "chicken ginger handi": "/images/chicken ginger handi.jpeg",
  "chicken jalfrezi handi": "/images/chicken jalfrezi handi.jpeg",
  "chicken kabab masala": "/images/chicken kabab masala.jpeg",
  "arabian pulao": "/images/chicken fried rice.jpeg",

  // BBQ
  "chicken kabab (4pc)": "/images/chicken kabab masala.jpeg",
  "chicken cheese kabab (4 pc)": "/images/chicken kabab masala.jpeg",
  "reshmi kabab (4 pc)": "/images/beef seekh kabab.jpeg",
  "beef seekh kabab (4 pc)": "/images/beef seekh kabab.jpeg",
  "malai boti (10 pc)": "/images/malai boti.jpeg",
  "tikka boti (10 pc)": "/images/tikka boti(10pcs).jpeg",
  "tangri tikka (6 pc)": "/images/tangri tikka.jpeg",
  "fish tikka (6 pc)": "/images/mr.special fish.jpeg",
  "chicken tikka (l/b)": "/images/chiken tikka leg.jpeg",
  "chicken al faham + arabian rice": "/images/chicken al faham with arabia.jpeg",
  "mr. special fish boneless (350 gm)": "/images/mr.special fish.jpeg",
  "mr. special fish boneless (500 gm)": "/images/mr.special fish.jpeg",
  "mr. special fish boneless (1000 gm)": "/images/mr.special fish.jpeg",

  // FRIES & APPETIZERS
  "loaded fries": "/images/loaded fries.jpeg",
  "jalapeno cheese fries": "/images/jalapeno fries.jpeg",
  "garlic mayo fries": "/images/garlic mayo fries.jpeg",
  "plain fries": "/images/plain fries.jpeg",
  "buffalo wings (6 pc)": "/images/buffalo wings.jpeg",
  "bbq wings (6 pc)": "/images/bbq wings.jpeg",
  "crispy wings (6 pc)": "/images/crispy wings.jpeg",
  "pery pery wings (6 pc)": "/images/pery pery wings.jpeg",
  "hot wings (10 pc)": "/images/buffalo wings.jpeg",
  "nuggets (10 pc)": "/images/nuggets.jpeg",
  "chicken strips (3 pc)": "/images/chicken strips.jpeg",
  "finger fish (4 pc)": "/images/fish n chips and fries.jpeg",
  "fish n chips with fries (3 pc)": "/images/fish n chips and fries.jpeg",

  // PASTA & CHINESE
  "fettuccine alfredo": "/images/fettuccine alfredo pasta.jpeg",
  "mushroom panini": "/images/mushroom panini.jpeg",
  "special soup": "/images/special soup.jpeg",
  "hot & sour soup": "/images/hot and sour soup.jpeg",
  "chicken corn soup": "/images/chicken corn soup.jpeg",
  "mr sp. chowmein": "/images/mr.sp chowmein.jpeg",
  "chicken chowmein": "/images/chicken chowmein.jpeg",
  "veggie chowmein": "/images/veggie fried rice.jpeg",
  "chicken manchurian": "/images/chicken manchurian.jpeg",
  "black pepper chicken": "/images/black pepper chicken.jpeg",
  "garlic chicken": "/images/chicken chilli dry.jpeg",
  "fish chilli dry": "/images/fish chilli dry.jpeg",
  "chicken chilli dry": "/images/chicken chilli dry.jpeg",
  "chicken almond": "/images/chicken almond.jpeg",
  "chicken cashew nut": "/images/chicken cashew nuts.jpeg",
  "mr. special rice": "/images/chicken fried rice.jpeg",
  "chicken fried rice": "/images/chicken fried rice.jpeg",
  "egg fried rice": "/images/egg fried rice.jpeg",
  "veggie fried rice": "/images/veggie fried rice.jpeg",

  // NAAN & SIDES
  "roti": "/images/roti.jpeg",
  "roghni naan": "/images/naan.jpeg",
  "garlic naan": "/images/garlic naan.jpeg",
  "plain naan": "/images/naan.jpeg",
  "mint raita": "/images/raita.jpeg",
  "zeera raita": "/images/raita.jpeg",
  "fresh salad": "/images/raita.jpeg",
  "russian salad": "/images/raita.jpeg",
  "kachumber salad (with ice cream)": "/images/raita.jpeg",
  "mayo dip": "/images/raita.jpeg",
  "garlic dip": "/images/raita.jpeg",

  // PIZZA - SPECIAL
  "mr. special": "/images/mr. special pizza.jpeg",
  "royal supreme": "/images/royal supreme pizza.jpeg",
  "click on": "/images/click pn pizza.jpeg",
  "borne fire pizza": "/images/born fire platter.jpeg",
  "donnar pizza": "/images/doner pizza.jpeg",
  "royal crust": "/images/royal crust.jpeg",
  "behari kabab": "/images/behari kabab pizza.jpeg",
  "makhni pizza": "/images/makhni pizza.jpeg",
  "mr sp crown": "/images/mr sp crow pizza.jpeg",
  "mr sp sensation": "/images/mr sp sensation pizza.jpeg",

  // PIZZA - REGULAR
  "chicken tikka": "/images/pizza.jpeg",
  "chicken fajita": "/images/fajita pizaa.jpeg",
  "fajita sicillion": "/images/fajita pizaa.jpeg",
  "cheese lover": "/images/cheese lover pizza.jpeg",
  "spice on": "/images/pizza.jpeg",
  "chicken supreme": "/images/pizza.jpeg",
  "euro": "/images/pizza.jpeg",
  "veggie lover": "/images/veggie pizza.jpeg",

  // PIZZA - STUFFER
  "chicken stuffer": "/images/chicken and cheese stuffer pizza.jpeg",
  "cheese stuffer": "/images/cheese stuffer pizza.jpeg",
  "chicken & cheese stuffer": "/images/chicken and cheese stuffer pizza.jpeg",
  "kabab stuffer": "/images/kabab stuffer pizza.jpeg",

  // BURGERS
  "zinger burger": "/images/zinger burger.jpeg",
  "mr.sp zinger burger": "/images/mr.sp zinger burger.jpeg",
  "bbq special burger": "/images/bbq special burger.jpeg",
  "sp.cheese burger": "/images/sp.cheese burger.jpeg",
  "patty burger": "/images/patty burger.jpeg",
  "bbq burger": "/images/bbq special burger.jpeg",
  "honey mustard burger": "/images/honey mustard burger.jpeg",
  "mashroom burger": "/images/mushroom burger.jpeg",
  "fish burger with fries": "/images/fish burger.jpeg",
  "pizza zinger burger": "/images/burger pizza.jpeg",
  "pizza patty burger": "/images/pizza patty burger.jpeg",
  "pizza double mac": "/images/burger pizza.jpeg",

  // ROLLS & SHAWARMA
  "spin roll": "/images/spin roll.jpeg",
  "mr special roll": "/images/crunchy roll.jpeg",
  "crunchy roll": "/images/crunchy roll.jpeg",
  "nawabi roll": "/images/crunchy roll.jpeg",
  "zinger cheese pratha roll": "/images/zinger paratha.jpeg",
  "zinger pratha roll": "/images/zinger paratha.jpeg",
  "kabab pratha roll": "/images/kabab paratha.jpeg",
  "chicken pratha roll": "/images/chicken paratha.jpeg",
  "pizza pratha roll": "/images/zinger paratha.jpeg",
  "chicken shawarma": "/images/chicken shawarma.jpeg",
  "cheesy shawarma": "/images/cheese shawarma.jpeg",
  "zinger shawarma": "/images/zinger shwarma.jpeg",
  "platter shawarma": "/images/plater shawarma.jpeg",
  "trottila wrap": "/images/chicken shawarma.jpeg",
  "chicken grill wrap": "/images/chicken shawarma.jpeg",
  "club sandwich": "/images/club sandwich.jpeg",
  "kameera sandwich": "/images/kameera sandwich.jpeg",

  // ARABIAN BROAST
  "quarter broast (1 leg/thai)": "/images/arabian broast.jpeg",
  "half broast (2 leg/thai, 1 bun, 2 dip, 1 fries)": "/images/arabian broast.jpeg",
  "full broast (4 leg/thai, 2 bun, 4 dip, 2 fries)": "/images/arabian broast.jpeg",
  "maza deal (half broast & 500ml drink)": "/images/arabian broast.jpeg",
  "family deal (2 full broast & 4 fries)": "/images/arabian broast.jpeg",
  "couple deal (full broast & 1.5 ltr drink)": "/images/arabian broast.jpeg",
  "jumbo deal (4 full broast & fries)": "/images/arabian broast.jpeg",

  // BAR MENU - MOCKTAILS
  "mr. special drinks": "/images/blueberry mojito.jpeg",
  "mint margarita": "/images/mint mojito.jpeg",
  "mint lemonade": "/images/mint mojito.jpeg",
  "blue lagoon": "/images/blueberry mojito.jpeg",
  "mango zingo": "/images/mango mojito.jpeg",
  "guava mint": "/images/mint mojito.jpeg",
  "pina colada": "/images/blueberry mojito.jpeg",
  "electric lemonade": "/images/lemon mojito.jpeg",
  "mint colada": "/images/mint mojito.jpeg",
  "fresh lime": "/images/lemon mojito.jpeg",

  // BAR MENU - MOJITOS
  "mint mojito": "/images/mint mojito.jpeg",
  "peach mojito": "/images/peach mojito.jpeg",
  "mango mojito": "/images/mango mojito.jpeg",
  "blue berry mojito": "/images/blueberry mojito.jpeg",
  "strawberry mojito": "/images/strawberry mojiti.jpeg",
  "passion fruit mojito": "/images/passion fruit mojito.jpeg",
  "lemon mojito": "/images/lemon mojito.jpeg",

  // SHAKES
  "mr. special milk shake": "/images/mr.special milk shake.jpeg",
  "vanilla shake": "/images/vanilla shake.jpeg",
  "chocolate shake": "/images/chocolate shake.jpeg",
  "nutella shake": "/images/nutella shake.jpeg",
  "oreo shake": "/images/oreo shake.jpeg",

  // SMOOTHIES
  "ginger pineapple smoothie": "/images/ginger pineapple smoothie.jpeg",
  "mango smoothie": "/images/mango smoothie.jpeg",
  "peach on rock smoothie": "/images/peach on rock smoothie.jpeg",
  "blue berry smoothie": "/images/blue berry smoothie.jpeg",
  "kiwi smoothie": "/images/kiwi smoothie.jpeg",

  // SLUSH
  "peach slush": "/images/peach slush.jpeg",
  "mango slush": "/images/mango slush.jpeg",
  "strawberry slush": "/images/strawberry slush.jpeg",
  "apple slush": "/images/apple slush.jpeg",

  // ICE TEA
  "peach ice tea": "/images/peach iced tea.jpeg",
  "lemon ice tea": "/images/lemon iced tea.jpeg",
  "apple ice tea": "/images/apple iced tea.jpeg",

  // COFFEE - HOT
  "cappuccino": "/images/hot coffee(cappuccino).jpeg",
  "cafe latte": "/images/caffe latte.jpeg",
  "café mocha": "/images/cafe mocha.jpeg",
  "americano": "/images/americano.jpeg",
  "espresso": "/images/espresso.jpeg",
  "hot chocolate": "/images/hot chocolate.jpeg",
  "mix tea": "/images/mix tea.jpeg",
  "green tea": "/images/mint tea.jpeg",
  "mint tea": "/images/mint tea.jpeg",
  "peach tea": "/images/peach tea.jpeg",

  // COFFEE - COLD
  "vanilla cold coffee": "/images/vanilla cold coffee.jpeg",
  "mix cold coffee": "/images/mix cold coffee.jpeg",
  "oreo cold coffee": "/images/oreo cold coffee.jpeg",
  "caramel cold coffee": "/images/caramel col coffee.jpeg",

  // COFFEE - FRAPE
  "vanilla frape": "/images/vanilla frappe coffee.jpeg",
  "oreo frape": "/images/oreo frappe coffee.jpeg",
  "chocolate frape": "/images/chocolate frappwe coffee.jpeg",
  "mocha frape": "/images/mocha frape coffee.jpeg",
  "ice latte": "/images/caffe latte.jpeg",
  "caramel ice coffee": "/images/caramel col coffee.jpeg",

  // BEVERAGES
  "soft drink tin": "/images/pepsi tin.jpeg",
  "large water": "/images/water large.jpeg",
  "small water": "/images/water large.jpeg",

  // DESSERTS
  "walnut brownie": "/images/brownie.jpeg",
  "cake alaska": "/images/brownie.jpeg",
  "molten lava": "/images/brownie.jpeg",
  "ice cream (1 scoop)": "/images/ice cream scoop.jpeg",
  "ice cream (2 scoops)": "/images/ice cream scoop.jpeg",
  "ice cream (3 scoops)": "/images/ice cream scoop.jpeg",
  "sweet lassi": "/images/flavor lassi.jpeg",
  "mango lassi": "/images/flavor lassi.jpeg",
  "flavour lassi": "/images/flavor lassi.jpeg",
};

const menuFile = 'src/menuData.ts';
let code = fs.readFileSync(menuFile, 'utf8');

// Strip ALL existing image properties (both local and Unsplash)
code = code.replace(/,\s*image:\s*['"][^'"]*['"]/g, '');

const newLines = [];
const lines = code.split('\n');

let matched = 0;
let unmatched = [];

for (let line of lines) {
  if (line.trim().startsWith('{') && line.includes('name:') && line.includes('category:')) {
    const nameMatch = line.match(/name:\s*"([^"]+)"/);
    const name = nameMatch ? nameMatch[1].toLowerCase() : "";

    const imgPath = exactMap[name];

    if (imgPath) {
      line = line.replace(/\}(,?)\s*$/, `, image: "${imgPath}"}$1`);
      matched++;
    } else {
      unmatched.push(name);
    }
  }
  newLines.push(line);
}

fs.writeFileSync(menuFile, newLines.join('\n'));
console.log(`\n✅ Done! Matched: ${matched} items.`);
if (unmatched.length > 0) {
  console.log(`\n⚠️  Unmatched items (${unmatched.length}):`);
  unmatched.forEach(n => console.log('  -', n));
}
