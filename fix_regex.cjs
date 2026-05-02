const fs = require('fs');

const menuFile = 'src/menuData.ts';
let code = fs.readFileSync(menuFile, 'utf8');

// Strip ALL image properties entirely to clean the file
code = code.replace(/,\s*image:\s*['"][^'"]+['"]/g, '');

const newLines = [];
const lines = code.split('\n');

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

for (let line of lines) {
    if (line.trim().startsWith('{') && line.includes('name:') && line.includes('category:')) {
        let nameMatch = line.match(/name:\s*"([^"]+)"/);
        let catMatch = line.match(/category:\s*"([^"]+)"/);
        
        let name = nameMatch ? nameMatch[1] : "";
        let cat = catMatch ? catMatch[1] : "";
        let nameLow = name.toLowerCase();
        
        let bestMatch = null;
        
        // Exact/Specific Mappings from local JPEGs
        if (nameLow.includes('mr. special pizza') || nameLow.includes('mr special pizza')) bestMatch = '/images/mr. special pizza.jpeg';
        else if (nameLow.includes('bbq platter') || nameLow.includes('b.b.q platter')) bestMatch = '/images/bbq platter.jpeg';
        else if (nameLow.includes('borne fire')) bestMatch = '/images/born fire platter.jpeg';
        else if (nameLow === 'creamy') bestMatch = '/images/creamy.jpeg';
        else if (nameLow.includes('burger pizza')) bestMatch = '/images/burger pizza.jpeg';
        else if (nameLow.includes('cheese lover')) bestMatch = '/images/cheese lover pizza.jpeg';
        else if (nameLow.includes('cheese stuffer')) bestMatch = '/images/cheese stuffer pizza.jpeg';
        else if (nameLow.includes('doner pizza')) bestMatch = '/images/doner pizza.jpeg';
        else if (nameLow.includes('fried rice')) bestMatch = '/images/egg fried rice.jpeg';
        else if (nameLow.includes('fajita')) bestMatch = '/images/fajita pizaa.jpeg';
        else if (nameLow.includes('hot deal 10')) bestMatch = '/images/hot deal 10.jpeg';
        else if (nameLow.includes('hot deal 12')) bestMatch = '/images/hot deal 12.jpeg';
        else if (nameLow.includes('kabab stuffer')) bestMatch = '/images/kabab stuffer pizza.jpeg';
        else if (nameLow.includes('makhni')) bestMatch = '/images/makhni pizza.jpeg';
        else if (nameLow.includes('mint tea') || nameLow.includes('mint margarita')) bestMatch = '/images/mint tea.jpeg';
        else if (nameLow.includes('peach tea')) bestMatch = '/images/peach tea.jpeg';
        else if (nameLow.includes('mozzarella') && nameLow.includes('handi')) bestMatch = '/images/mozeralla chees handi.jpeg';
        else if (nameLow.includes('veggie') || nameLow.includes('vegetable')) bestMatch = '/images/veggie pizza.jpeg';
        else if (nameLow.includes('zinger shawarma')) bestMatch = '/images/zinger shwarma.jpeg';
        
        // General Category Fallbacks (Local JPEGs)
        if (!bestMatch) {
            if (nameLow.includes('karahi')) bestMatch = '/images/karahi.jpeg';
            else if (cat === 'Hot Deals' || nameLow.includes('deal')) bestMatch = '/images/hot deal.jpeg';
            else if (cat === 'Pizza') bestMatch = '/images/pizza.jpeg';
        }

        // Unsplash fallbacks for items the user didn't provide JPEGs for
        if (!bestMatch) {
            if (nameLow.includes('burger') || nameLow.includes('zinger') || nameLow.includes('patty')) bestMatch = fallbacks.burger;
            else if (nameLow.includes('fries') || nameLow.includes('potato')) bestMatch = fallbacks.fries;
            else if (nameLow.includes('wings') || nameLow.includes('nuggets')) bestMatch = fallbacks.wings;
            else if (nameLow.includes('roll') || nameLow.includes('shawarma') || cat.includes('Rolls') || cat.includes('Shawarma')) bestMatch = fallbacks.roll;
            else if (nameLow.includes('fish') || cat.includes('Seafood')) bestMatch = fallbacks.seafood;
            else if (nameLow.includes('karahi') || nameLow.includes('handi') || nameLow.includes('tawa') || nameLow.includes('masala') || nameLow.includes('pulao')) bestMatch = fallbacks.desi;
            else if (cat.includes('Chinese') || cat.includes('Pasta') || nameLow.includes('macaroni') || nameLow.includes('chowmein') || nameLow.includes('manchurian') || nameLow.includes('shashlik')) bestMatch = fallbacks.chinese_pasta;
            else if (cat.includes('Deserts') || nameLow.includes('ice cream') || nameLow.includes('brownie') || nameLow.includes('lava') || nameLow.includes('alaska')) bestMatch = fallbacks.dessert;
            else if (cat.includes('Bar Menu') || cat.includes('Beverages') || cat.includes('Coffee') || nameLow.includes('shake') || nameLow.includes('lassi') || nameLow.includes('tea') || nameLow.includes('mojito') || nameLow.includes('margarita') || nameLow.includes('slush')) bestMatch = fallbacks.drinks;
            else bestMatch = fallbacks.burger; // generic fallback
        }

        // CORRECT REGEX: Add image to the VERY END of the object!
        // We match `},` or `}` at the end of the line
        line = line.replace(/\}(,?)\s*$/, `, image: "${bestMatch}"}$1`);
    }
    newLines.push(line);
}

fs.writeFileSync(menuFile, newLines.join('\n'));
console.log('Fixed regex injection bug!');
