const fs = require('fs');
let code = fs.readFileSync('src/menuData.ts', 'utf8');

const IMG_PLATTERS = 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600';
const IMG_PIZZA_COMBO = 'https://images.unsplash.com/photo-1613564834361-9436948817d1?auto=format&fit=crop&q=80&w=600';
const IMG_BURGER_COMBO = 'https://images.unsplash.com/photo-1594212848116-e8da6f1400ce?auto=format&fit=crop&q=80&w=600';
const IMG_BBQ_PLATTER = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600';
const IMG_LATE_NIGHT = 'https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&q=80&w=600';
const IMG_FINGER_FISH = 'https://images.unsplash.com/photo-1599084941913-c35d9ce8f946?auto=format&fit=crop&q=80&w=600';

// Replace existing images
code = code.replace(/(name:\s*"(?:Mrs Special|Borne Fire|Creamy)".*?image:\s*").*?(" \})/gm, `$1${IMG_PLATTERS}$2`);
code = code.replace(/(name:\s*"Hot Deal (?:1|2|3|4|5|6|11|12)".*?image:\s*").*?(" \})/gm, `$1${IMG_PIZZA_COMBO}$2`);
code = code.replace(/(name:\s*"Hot Deal (?:7|8|9|10)".*?image:\s*").*?(" \})/gm, `$1${IMG_BURGER_COMBO}$2`);
code = code.replace(/(name:\s*"(?:Midnight Craving Deal|Ultimate Snack Attack)".*?image:\s*").*?(" \})/gm, `$1${IMG_LATE_NIGHT}$2`);
code = code.replace(/(name:\s*"Pizza Party Box".*?image:\s*").*?(" \})/gm, `$1${IMG_PIZZA_COMBO}$2`);
code = code.replace(/(name:\s*"Desi Feast".*?image:\s*").*?(" \})/gm, `$1${IMG_BBQ_PLATTER}$2`);

// Finger fish was popular but missing an image
if (code.includes('Finger Fish (4 pc)') && !code.includes('image: "https://images.unsplash.com/photo-1599084941913-c35d9ce8f946')) {
    code = code.replace(/(name:\s*"Finger Fish \(4 pc\)".*?\s+isPopular:\s*true.*?)( \},|\}$)/gm, `$1, image: "${IMG_FINGER_FISH}"$2`);
}

fs.writeFileSync('src/menuData.ts', code);
console.log("Images updated!");
