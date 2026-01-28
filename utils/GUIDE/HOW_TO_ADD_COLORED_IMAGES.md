# How to Add Different Colored Bike Images

## The Problem

CSS filters change the ENTIRE image. To change only the **metal chassis** of the bike while keeping other parts (wheels, seat, etc.) the same color, you need **separate image files** for each color.

## Solution: Create Colored Image Variants

You need to create 4 different versions of each bike image with different chassis colors.

### Option 1: Using Image Editing Software (Photoshop, GIMP, etc.)

1. Open the bike image in Photoshop/GIMP
2. Use the **Magic Wand** or **Quick Selection Tool** to select only the metal chassis
3. Create a new layer
4. Fill the selection with the desired color (use Color Overlay or Hue/Saturation adjustment)
5. Save each version with a different filename

### Option 2: Using AI Tools

Use AI image editing tools like:
- **Photopea** (free, browser-based Photoshop alternative)
- **Remove.bg** for background removal
- **Canva** for color adjustments
- **Adobe Firefly** or **Midjourney** for AI-powered recoloring

### Required Images

For each bike model, create 4 versions:

#### CHALLENGER S110:
- `challenger-blue.jpg` (Electric Blue chassis)
- `challenger-red.jpg` (Crimson Red chassis)
- `challenger-black.jpg` (Midnight Black chassis)
- `challenger-white.jpg` (Pearl White chassis)

#### BNC PERFETTO:
- `perfetto-black.jpg` (Midnight Black chassis)
- `perfetto-red.jpg` (Racing Red chassis)
- `perfetto-blue.jpg` (Ocean Blue chassis)
- `perfetto-silver.jpg` (Silver Metallic chassis)

#### BNC THE BOSS:
- `boss-green.jpg` (Emerald Green chassis)
- `boss-black.jpg` (Stealth Black chassis)
- `boss-grey.jpg` (Titanium Grey chassis)
- `boss-white.jpg` (Arctic White chassis)

### Where to Place Images

Put all images in the `/public` folder of your project:
```
/public
  ├── challenger-blue.jpg
  ├── challenger-red.jpg
  ├── challenger-black.jpg
  ├── challenger-white.jpg
  ├── perfetto-black.jpg
  ├── perfetto-red.jpg
  ├── perfetto-blue.jpg
  ├── perfetto-silver.jpg
  ├── boss-green.jpg
  ├── boss-black.jpg
  ├── boss-grey.jpg
  └── boss-white.jpg
```

## Once You Have the Images

Let me know when you have the colored images ready, and I'll update the code to use the correct image paths for each color variant.

## Alternative: Quick Photoshop Action

If you have Photoshop, I can provide you with a script/action that:
1. Selects the chassis area
2. Applies different colors
3. Batch exports all variants

Would you like me to create that script for you?
