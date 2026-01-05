# 📸 Project Images Setup Guide

## 📁 Where to Place Your Images

Your portfolio is now configured to use local images. Place your project images in these specific folders:

```
📂 public/images/projects/
├── 📂 project01/          (Commercial Complex BIM Implementation)
│   ├── main.webp          ← Main/hero image (required)
│   ├── detail-1.webp      ← Additional detail image
│   ├── detail-2.webp      ← Additional detail image
│   └── detail-3.webp      ← Additional detail image
│
├── 📂 project02/          (Healthcare Facility Coordination)
│   ├── main.webp          ← Main/hero image (required)
│   ├── detail-1.webp      ← Additional detail image
│   └── detail-2.webp      ← Additional detail image
│
├── 📂 project03/          (30-Storey Reinforced Concrete Tower)
│   ├── main.webp          ← Main/hero image (required)
│   ├── detail-1.webp      ← Additional detail image
│   ├── detail-2.webp      ← Additional detail image
│   ├── detail-3.webp      ← Additional detail image
│   └── detail-4.webp      ← Additional detail image
│
└── 📂 project04/          (15-Storey Residential Complex)
    ├── main.webp          ← Main/hero image (required)
    ├── detail-1.webp      ← Additional detail image
    └── detail-2.webp      ← Additional detail image
```

## 🎯 Image Requirements

### **Recommended Formats (in order of preference):**
1. **WebP** (.webp) - Best compression, modern browsers ✅
2. **JPEG** (.jpg/.jpeg) - Good compression, universal support ✅
3. **PNG** (.png) - Lossless, larger file size ⚠️

### **Image Specifications:**
- **Aspect Ratio**: 3:2 (e.g., 1200×800px, 1500×1000px)
- **Resolution**: Minimum 1200×800px, Maximum 2400×1600px
- **File Size**: Keep under 1MB per image for fast loading
- **Quality**: 80-90% JPEG quality or equivalent

### **Naming Convention:**
- `main.webp` - Primary project image (shows first in carousel)
- `detail-1.webp`, `detail-2.webp`, etc. - Additional project views

## 🚀 Quick Setup Steps

### Step 1: Prepare Your Images
1. Resize images to 1200×800px (3:2 aspect ratio)
2. Optimize for web (compress to ~200-800KB)
3. Convert to WebP format (recommended) or use JPEG
4. Name them according to the convention above

### Step 2: Copy Images to Folders
Navigate to your project folder and copy images:

```
📍 Full Path Examples:
D:\000 DUC\03 NEXTJS\bim-porfolio\public\images\projects\project01\main.webp
D:\000 DUC\03 NEXTJS\bim-porfolio\public\images\projects\project01\detail-1.webp
D:\000 DUC\03 NEXTJS\bim-porfolio\public\images\projects\project02\main.webp
...and so on
```

### Step 3: Verify Setup
1. Ensure each project folder has at least a `main.webp` file
2. Check that image names match exactly (case-sensitive)
3. Restart your development server: `npm run dev`

## 🔧 Adding More Images

To add more images to any project:

1. **Add the image file** to the project folder (e.g., `detail-5.webp`)
2. **Update the code** in `app/data/portfolioData.js`:

```javascript
// Example: Adding more images to project01
images: [
  "/images/projects/project01/main.webp",
  "/images/projects/project01/detail-1.webp",
  "/images/projects/project01/detail-2.webp",
  "/images/projects/project01/detail-3.webp",
  "/images/projects/project01/detail-4.webp",  // ← Add new image path
  "/images/projects/project01/detail-5.webp"   // ← Add another new image path
]
```

## 🎨 Image Optimization Tools

### Online Tools:
- **TinyPNG** - https://tinypng.com/ (PNG/JPEG compression)
- **Squoosh** - https://squoosh.app/ (WebP conversion & optimization)
- **Canva** - Resize and optimize images

### Desktop Tools:
- **Adobe Photoshop** - Export for Web
- **GIMP** - Free alternative with WebP export
- **XnConvert** - Batch image processing

## 🔍 Troubleshooting

### Images Not Showing?
1. ✅ Check file paths are correct (case-sensitive)
2. ✅ Ensure images are in the right folders
3. ✅ Verify file extensions match the code (.webp, .jpg, etc.)
4. ✅ Restart the development server
5. ✅ Check browser console for 404 errors

### Slow Loading?
1. ✅ Compress images (aim for <500KB each)
2. ✅ Use WebP format for better compression
3. ✅ Ensure images aren't larger than 2400×1600px

## 📝 Current Project Structure

Your portfolio currently expects these projects:

1. **Project 01**: Commercial Complex BIM Implementation
2. **Project 02**: Healthcare Facility Coordination  
3. **Project 03**: 30-Storey Reinforced Concrete Tower
4. **Project 04**: 15-Storey Residential Complex

Each project will automatically cycle through its images every 5 seconds, and visitors can click the zoom button to view images in full-screen mode.

---

**Ready to showcase your BIM projects! 🏗️✨**
