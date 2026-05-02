const fs = require('fs');

const menuFile = 'src/menuData.ts';
let code = fs.readFileSync(menuFile, 'utf8');

const newLines = [];
const lines = code.split('\n');

for (let line of lines) {
    if (line.trim().startsWith('{') && line.includes('name:') && line.includes('category:')) {
        let nameMatch = line.match(/name:\s*"([^"]+)"/);
        let catMatch = line.match(/category:\s*"([^"]+)"/);
        
        let name = nameMatch ? nameMatch[1] : "";
        let cat = catMatch ? catMatch[1] : "";
        
        // If it's a Pizza but it has no image property yet
        if (cat === 'Pizza' && !line.includes('image:')) {
            // Give it the generic pizza image
            line = line.replace(/( \},|\}$)/, `, image: "/images/pizza.jpeg"$1`);
        }
        
        // Also fix Rolls/Shawarmas if they missed out? The user didn't complain about them, but let's check
        // The user only said "some pizza images are not showing"
    }
    newLines.push(line);
}

fs.writeFileSync(menuFile, newLines.join('\n'));
console.log('Fixed missing pizza images!');
