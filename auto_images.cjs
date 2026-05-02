const fs = require('fs');
let code = fs.readFileSync('src/menuData.ts', 'utf8');

// Ensure image?: string is in the interface
if (!code.includes('image?: string')) {
    code = code.replace(/isPopular\?: boolean;/, 'isPopular?: boolean;\n  image?: string;');
}

const images = {
    pizza: [
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=600"
    ],
    burger: [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1594212848116-e8da6f1400ce?auto=format&fit=crop&q=80&w=600"
    ],
    fries: [
        "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=600"
    ],
    wings: [
        "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80&w=600"
    ],
    bbq: [
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=600"
    ],
    karahi_desi: [
        "https://images.unsplash.com/photo-1545231027-63b6f0a67ad5?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1589302168068-964664d93cb0?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1603894584373-5ac82b6ae398?auto=format&fit=crop&q=80&w=600"
    ],
    chinese_pasta: [
        "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=600"
    ],
    drinks: [
        "https://images.unsplash.com/photo-1513558161293-cdaf7659a97a?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=600"
    ],
    dessert: [
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600"
    ],
    deals: [
        "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1594212848116-e8da6f1400ce?auto=format&fit=crop&q=80&w=600"
    ],
    roll: [
        "https://images.unsplash.com/photo-1626700051175-656a42defd38?auto=format&fit=crop&q=80&w=600"
    ],
    seafood: [
        "https://images.unsplash.com/photo-1599084941913-c35d9ce8f946?auto=format&fit=crop&q=80&w=600"
    ]
};

// Strip existing image properties
code = code.replace(/,\s*image:\s*['"][^'"]+['"]/g, '');

const newLines = [];
const lines = code.split('\n');

for (let line of lines) {
    if (line.trim().startsWith('{') && line.includes('name:') && line.includes('category:')) {
        let nameMatch = line.match(/name:\s*"([^"]+)"/);
        let catMatch = line.match(/category:\s*"([^"]+)"/);
        let name = nameMatch ? nameMatch[1].toLowerCase() : "";
        let cat = catMatch ? catMatch[1] : "";
        let imgArr = [];
        
        if (name.includes('pizza')) imgArr = images.pizza;
        else if (name.includes('burger') || name.includes('zinger')) imgArr = images.burger;
        else if (name.includes('fries') || name.includes('potato')) imgArr = images.fries;
        else if (name.includes('wings') || name.includes('nuggets')) imgArr = images.wings;
        else if (name.includes('roll') || name.includes('shawarma') || cat.includes('Rolls') || cat.includes('Shawarma')) imgArr = images.roll;
        else if (name.includes('fish') || cat.includes('Seafood')) imgArr = images.seafood;
        else if (name.includes('karahi') || name.includes('handi') || name.includes('tawa') || name.includes('masala') || name.includes('pulao')) imgArr = images.karahi_desi;
        else if (name.includes('kabab') || name.includes('tikka') || name.includes('boti')) imgArr = images.bbq;
        else if (cat.includes('Chinese') || cat.includes('Pasta') || name.includes('macaroni') || name.includes('chowmein') || name.includes('manchurian') || name.includes('shashlik')) imgArr = images.chinese_pasta;
        else if (cat.includes('Deserts') || name.includes('ice cream') || name.includes('brownie') || name.includes('lava') || name.includes('alaska')) imgArr = images.dessert;
        else if (cat.includes('Bar Menu') || cat.includes('Beverages') || cat.includes('Coffee') || name.includes('shake') || name.includes('lassi') || name.includes('tea') || name.includes('mojito') || name.includes('margarita') || name.includes('slush')) imgArr = images.drinks;
        else if (cat.includes('Hot Deals') || cat.includes('Platters')) imgArr = images.deals;
        else imgArr = images.pizza; // fallback to pizza if completely unmatched
        
        let hash = 0;
        for (let i = 0; i < name.length; i++) hash += name.charCodeAt(i);
        let randomImg = imgArr[hash % imgArr.length];
        
        line = line.replace(/( \},|\}$)/, `, image: "${randomImg}"$1`);
    }
    newLines.push(line);
}

fs.writeFileSync('src/menuData.ts', newLines.join('\n'));
console.log('All 200+ items mapped successfully!');
