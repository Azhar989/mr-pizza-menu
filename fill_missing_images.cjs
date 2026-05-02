const fs = require('fs');

const menuFile = 'src/menuData.ts';
let code = fs.readFileSync(menuFile, 'utf8');

// These are our beautiful fallback images for categories the user didn't provide JPEGs for
const fallbacks = {
    burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
    fries: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=600",
    wings: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600",
    roll: "https://images.unsplash.com/photo-1626700051175-656a42defd38?auto=format&fit=crop&q=80&w=600",
    chinese_pasta: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600",
    drinks: "https://images.unsplash.com/photo-1513558161293-cdaf7659a97a?auto=format&fit=crop&q=80&w=600",
    dessert: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600",
    desi: "https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&q=80&w=600",
    seafood: "https://images.unsplash.com/photo-1599084941913-c35d9ce8f946?auto=format&fit=crop&q=80&w=600"
};

const newLines = [];
const lines = code.split('\n');

for (let line of lines) {
    if (line.trim().startsWith('{') && line.includes('name:') && line.includes('category:')) {
        // If this item DOES NOT have an image mapped yet
        if (!line.includes('image:')) {
            let nameMatch = line.match(/name:\s*"([^"]+)"/);
            let catMatch = line.match(/category:\s*"([^"]+)"/);
            
            let name = nameMatch ? nameMatch[1].toLowerCase() : "";
            let cat = catMatch ? catMatch[1] : "";
            
            let fallbackImg = "";
            
            if (name.includes('burger') || name.includes('zinger') || name.includes('patty')) fallbackImg = fallbacks.burger;
            else if (name.includes('fries') || name.includes('potato')) fallbackImg = fallbacks.fries;
            else if (name.includes('wings') || name.includes('nuggets')) fallbackImg = fallbacks.wings;
            else if (name.includes('roll') || name.includes('shawarma') || cat.includes('Rolls') || cat.includes('Shawarma')) fallbackImg = fallbacks.roll;
            else if (name.includes('fish') || cat.includes('Seafood')) fallbackImg = fallbacks.seafood;
            else if (name.includes('karahi') || name.includes('handi') || name.includes('tawa') || name.includes('masala') || name.includes('pulao')) fallbackImg = fallbacks.desi;
            else if (cat.includes('Chinese') || cat.includes('Pasta') || name.includes('macaroni') || name.includes('chowmein') || name.includes('manchurian') || name.includes('shashlik')) fallbackImg = fallbacks.chinese_pasta;
            else if (cat.includes('Deserts') || name.includes('ice cream') || name.includes('brownie') || name.includes('lava') || name.includes('alaska')) fallbackImg = fallbacks.dessert;
            else if (cat.includes('Bar Menu') || cat.includes('Beverages') || cat.includes('Coffee') || name.includes('shake') || name.includes('lassi') || name.includes('tea') || name.includes('mojito') || name.includes('margarita') || name.includes('slush')) fallbackImg = fallbacks.drinks;
            else fallbackImg = fallbacks.burger; // generic fallback
            
            line = line.replace(/( \},|\}$)/, `, image: "${fallbackImg}"$1`);
        }
    }
    newLines.push(line);
}

fs.writeFileSync(menuFile, newLines.join('\n'));
console.log('Fill-in complete!');
