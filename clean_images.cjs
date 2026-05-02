const fs = require('fs');
let code = fs.readFileSync('src/menuData.ts', 'utf8');

// Strip all `image: ...` from objects
code = code.replace(/,\s*image:\s*img\.[a-zA-Z0-9_]+/g, '');
code = code.replace(/,\s*image:\s*images\.[a-zA-Z0-9_]+/g, '');

// Also remove the `const img = { ... }` block completely
code = code.replace(/const img = \{[\s\S]*?\};\n\n/g, '');

// Remove `image?: string;` from MenuItem
code = code.replace(/\s*image\?:\s*string;/g, '');

fs.writeFileSync('src/menuData.ts', code);
console.log("menuData cleaned up");
