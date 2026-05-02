const fs = require('fs');

const menuFile = 'src/menuData.ts';
let code = fs.readFileSync(menuFile, 'utf8');

// Strip all existing Unsplash or local image links so we start fresh
code = code.replace(/,\s*image:\s*['"][^'"]+['"]/g, '');

const newLines = [];
const lines = code.split('\n');

for (let line of lines) {
    if (line.trim().startsWith('{') && line.includes('name:') && line.includes('category:')) {
        let nameMatch = line.match(/name:\s*"([^"]+)"/);
        let catMatch = line.match(/category:\s*"([^"]+)"/);
        
        let name = nameMatch ? nameMatch[1] : "";
        let cat = catMatch ? catMatch[1] : "";
        let nameLow = name.toLowerCase();
        
        let bestMatch = null;
        
        // Exact/Specific Mappings
        if (nameLow.includes('mr. special pizza') || nameLow.includes('mr special pizza')) bestMatch = 'mr. special pizza.jpeg';
        else if (nameLow.includes('bbq platter') || nameLow.includes('b.b.q platter')) bestMatch = 'bbq platter.jpeg';
        else if (nameLow.includes('borne fire')) bestMatch = 'born fire platter.jpeg';
        else if (nameLow === 'creamy') bestMatch = 'creamy.jpeg';
        else if (nameLow.includes('burger pizza')) bestMatch = 'burger pizza.jpeg';
        else if (nameLow.includes('cheese lover')) bestMatch = 'cheese lover pizza.jpeg';
        else if (nameLow.includes('cheese stuffer')) bestMatch = 'cheese stuffer pizza.jpeg';
        else if (nameLow.includes('doner pizza')) bestMatch = 'doner pizza.jpeg';
        else if (nameLow.includes('fried rice')) bestMatch = 'egg fried rice.jpeg';
        else if (nameLow.includes('fajita')) bestMatch = 'fajita pizaa.jpeg';
        else if (nameLow.includes('hot deal 10')) bestMatch = 'hot deal 10.jpeg';
        else if (nameLow.includes('hot deal 12')) bestMatch = 'hot deal 12.jpeg';
        else if (nameLow.includes('kabab stuffer')) bestMatch = 'kabab stuffer pizza.jpeg';
        else if (nameLow.includes('makhni')) bestMatch = 'makhni pizza.jpeg';
        else if (nameLow.includes('mint tea') || nameLow.includes('mint margarita')) bestMatch = 'mint tea.jpeg';
        else if (nameLow.includes('peach tea')) bestMatch = 'peach tea.jpeg';
        else if (nameLow.includes('mozzarella') && nameLow.includes('handi')) bestMatch = 'mozeralla chees handi.jpeg';
        else if (nameLow.includes('veggie') || nameLow.includes('vegetable')) bestMatch = 'veggie pizza.jpeg';
        else if (nameLow.includes('zinger shawarma')) bestMatch = 'zinger shwarma.jpeg';
        
        // General Category Fallbacks (Only if no specific match)
        if (!bestMatch) {
            if (nameLow.includes('karahi')) bestMatch = 'karahi.jpeg';
            else if (cat === 'Hot Deals' || nameLow.includes('deal')) bestMatch = 'hot deal.jpeg';
            else if (nameLow.includes('pizza')) bestMatch = 'pizza.jpeg';
        }

        // If a match was found, inject it
        if (bestMatch) {
            // Inject before the closing brace
            line = line.replace(/( \},|\}$)/, `, image: "/images/${bestMatch}"$1`);
        }
    }
    newLines.push(line);
}

fs.writeFileSync(menuFile, newLines.join('\n'));
console.log('Mapping complete based on your provided jpegs!');
