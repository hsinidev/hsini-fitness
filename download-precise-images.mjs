import fs from 'fs';
import path from 'path';
import axios from 'axios';
import sharp from 'sharp';

const outputDir = path.join(process.cwd(), 'public', 'images');

const imageMap = {
  yoga: [
    "yoga,pose,meditation",
    "yoga,class,studio",
    "yoga,stretch,flexible",
    "yoga,mat,peace"
  ],
  crossfit: [
    "crossfit,barbell,gym",
    "kettlebell,workout,gym",
    "weightlifting,gym,heavy",
    "fitness,gym,plates"
  ],
  bodycombat: [
    "boxing,gloves,gym",
    "mma,fighter,ring",
    "kickboxing,gym,workout",
    "martialarts,punch,gym"
  ],
  bodybike: [
    "spinning,class,bike",
    "indoor,cycling,gym",
    "peloton,workout,bike",
    "stationary,bike,gym"
  ],
  gym: [
    "bodybuilding,gym,dumbbells",
    "gym,workout,weights",
    "fitness,gym,dark",
    "gym,equipment,heavy"
  ]
};

async function downloadAndProcessImage(keywords, outputPath) {
  try {
    // We append a random number to avoid loremflickr caching the exact same image
    const randomSeed = Math.floor(Math.random() * 10000);
    const url = `https://loremflickr.com/800/800/${keywords}/all?lock=${randomSeed}`;
    
    console.log(`Downloading ${url} to ${outputPath}...`);
    const response = await axios({
      url,
      responseType: 'arraybuffer'
    });
    
    // Process with sharp: resize, webp, high compression
    await sharp(response.data)
      .resize(800, 800, { fit: 'cover' })
      .webp({ quality: 60 })
      .toFile(outputPath);
      
    console.log(`Successfully saved ${outputPath}`);
  } catch (error) {
    console.error(`Error downloading image for ${keywords}:`, error.message);
  }
}

async function main() {
  const categories = Object.keys(imageMap);
  
  for (const category of categories) {
    const keywordsList = imageMap[category];
    for (let i = 0; i < keywordsList.length; i++) {
      const outputPath = path.join(outputDir, `${category}-${i + 1}.webp`);
      await downloadAndProcessImage(keywordsList[i], outputPath);
    }
  }

  // Hero backgrounds
  await downloadAndProcessImage("gym,dark,cinematic", path.join(outputDir, "kinetic-1.webp"));
  await downloadAndProcessImage("gym,weights,dark", path.join(outputDir, "kinetic-14.webp"));
  
  console.log('All exact fitness images downloaded and compressed successfully!');
}

main();
