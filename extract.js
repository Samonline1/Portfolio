const fs = require('fs');
const text = fs.readFileSync('C:/Users/lenovo ideapad/.gemini/antigravity/brain/83200cc4-761d-4403-ac01-cd0c594db3c7/.system_generated/steps/861/content.md', 'utf8');
const urls = text.match(/https:\/\/[^\"'<>\s]+/g) || [];
console.log(Array.from(new Set(urls)).filter(u => u.includes('hVTEJbgKcY') || u.includes('png') || u.includes('svg')));
