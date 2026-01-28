# ⚠️ IMPORTANT: To Change Only the Bike Chassis Color

## The Reality

**CSS filters cannot selectively change only the chassis** - they affect the entire image. To change ONLY the metal chassis part while keeping wheels, seat, and other parts their original color, you need **actual different colored images**.

## What You Need to Do

### Step 1: Create Colored Images

You need to create 4 versions of each bike image with different colored chassis:

**Tools you can use:**
1. **Photoshop/GIMP** - Select chassis, change color
2. **Photopea.com** - Free online Photoshop alternative
3. **Canva** - Easy color adjustments
4. **AI Tools** - Use AI to recolor specific parts

### Step 2: Name and Save Images

Save them in the `/public` folder with these names:

```
CHALLENGER S110:
- /public/challenger-blue.jpg
- /public/challenger-red.jpg
- /public/challenger-black.jpg
- /public/challenger-white.jpg

BNC PERFETTO:
- /public/perfetto-black.jpg
- /public/perfetto-red.jpg
- /public/perfetto-blue.jpg
- /public/perfetto-silver.jpg

BNC THE BOSS:
- /public/boss-green.jpg
- /public/boss-black.jpg
- /public/boss-grey.jpg
- /public/boss-white.jpg
```

### Step 3: Update constants.ts

Once you have the images, copy the content from `constants-template.ts` to `constants.ts` and update the image paths.

## Current Status

✅ Color selector component - WORKING
✅ Color switching logic - WORKING
✅ All components updated - WORKING
❌ Colored images - **YOU NEED TO CREATE THESE**

## The Code is Ready

The website is fully functional and ready to display different colored bikes. It will work perfectly once you add the actual colored images.

## Quick Photoshop Guide

If you have Photoshop:
1. Open bike image
2. Use **Magic Wand Tool** (W) to select the chassis
3. Create **Hue/Saturation Adjustment Layer** (Ctrl+U)
4. Check "Colorize"
5. Adjust Hue slider to desired color
6. Save as new file
7. Repeat for each color

## Need Help?

If you need help creating the colored images, you can:
1. Hire a designer on Fiverr/Upwork
2. Use AI tools like Adobe Firefly
3. Ask a graphic designer
4. Use online tools like Photopea

The functionality is 100% ready - you just need the colored image assets!
