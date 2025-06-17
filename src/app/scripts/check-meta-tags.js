// Script para verificar meta tags localmente
const puppeteer = require('puppeteer');

async function checkMetaTags(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  try {
    await page.goto(url);
    
    const metaTags = await page.evaluate(() => {
      const metas = {};
      
      // Title
      metas.title = document.title;
      
      // Description
      const description = document.querySelector('meta[name="description"]');
      metas.description = description ? description.content : 'No description';
      
      // Open Graph
      metas.ogTitle = document.querySelector('meta[property="og:title"]')?.content || 'No OG title';
      metas.ogDescription = document.querySelector('meta[property="og:description"]')?.content || 'No OG description';
      metas.ogImage = document.querySelector('meta[property="og:image"]')?.content || 'No OG image';
      
      // Twitter Cards
      metas.twitterCard = document.querySelector('meta[name="twitter:card"]')?.content || 'No Twitter card';
      
      return metas;
    });
    
    console.log(`Meta tags for ${url}:`, metaTags);
    
  } catch (error) {
    console.error(`Error checking ${url}:`, error);
  } finally {
    await browser.close();
  }
}

// Usar el script
const urlsToCheck = [
  'http://localhost:3000',
  'http://localhost:3000/blog',
  'http://localhost:3000/contacto',
];