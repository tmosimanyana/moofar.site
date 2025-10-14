# 🌿 Moofar Website Setup Guide

## 📁 File Structure

Create the following files in your project:

```
moofar-project/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   └── HomePage.tsx          ← Create this file
│   │   ├── App.tsx                   ← Update this file
│   │   └── index.css                 ← Update this file
│   └── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Implementation Steps

### Step 1: Create the Pages Directory

```bash
mkdir -p client/src/pages
```

### Step 2: Create HomePage.tsx

Create the file `client/src/pages/HomePage.tsx` and copy the content from the artifact "client/src/pages/HomePage.tsx"

### Step 3: Update App.tsx

Replace the contents of `client/src/App.tsx` with the content from the artifact "client/src/App.tsx"

### Step 4: Update index.css

Replace the contents of `client/src/index.css` with the content from the artifact "client/src/index.css"

This file includes:
- Google Fonts import (Playfair Display + Inter)
- Tailwind directives
- CSS custom properties for theming
- Smooth scrolling

### Step 5: Install Dependencies (if needed)

Make sure all dependencies are installed:

```bash
npm install
```

### Step 6: Run the Development Server

```bash
npm run dev
```

Your application should now be running at `http://localhost:5000`

## ✅ What's Included

### Navigation Bar
- Fixed header with scroll effect
- Mobile responsive hamburger menu
- Smooth scroll to sections
- Deep Forest Green theme

### Hero Section
- Full-width background image
- Elegant typography (Playfair Display)
- Dual CTA buttons
- Gradient overlay

### Services Section
- Three service cards
- Hover animations
- Icons from Lucide React
- Responsive grid layout

### About Section
- Two-column layout
- Company information
- Image placeholder
- Registration badge

### Team Section
- Team member cards
- Contact information
- Avatar placeholders with initials
- Responsive design

### Contact Section
- Three contact cards
- Glassmorphism effect
- CTA button
- Phone, Email, Location info

### Footer
- Three-column layout
- Company links
- Contact details
- Copyright information

## 🎨 Design Features

### Colors Used
- **Deep Forest Green**: `hsl(145, 45%, 25%)` - Primary
- **Fresh Sage**: `hsl(145, 30%, 55%)` - Accents
- **Warm Earth Brown**: `hsl(25, 35%, 40%)` - Text
- **Soft Cream**: `hsl(45, 40%, 95%)` - Background
- **Rich Soil**: `hsl(25, 25%, 20%)` - Footer

### Typography
- **Headlines**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)
- Clean hierarchy throughout

### Animations
- Smooth scroll behavior
- Hover lift effects on cards
- Navigation background transition
- Mobile menu slide

## 🔧 Customization

### Change Colors
Find and replace the HSL color values in `HomePage.tsx`:
- `hsl(145,45%,25%)` - Deep Forest Green (primary)
- `hsl(145,30%,55%)` - Fresh Sage (accents)
- `hsl(25,35%,40%)` - Warm Earth Brown (text)
- `hsl(45,40%,95%)` - Soft Cream (background)

### Update Team Information
Edit the `team` array in `HomePage.tsx`:
```typescript
const team = [
  {
    name: "Your Name",
    role: "Your Role",
    email: "your.email@moofar.co.bw",
    phone: "+267 XXX XXXX"
  }
];
```

### Change Images
Replace the Unsplash URLs with your own images:
- **Hero**: Line 109 - Main landscape/garden image
- **About**: Line 218 - Nursery facility image

### Update Contact Information
Search for these placeholders and update:
- Phone: `+267 123 4567`
- Email: `info@moofar.co.bw`
- Location: `Gaborone, Botswana`
- Registration: `BW00001234567`

### Add More Services
Extend the `services` array in `HomePage.tsx`:
```typescript
const services = [
  {
    icon: YourIcon, // Import from lucide-react
    title: "Service Name",
    description: "Service description..."
  }
];
```

## 🐛 Troubleshooting

### Fonts Not Loading
Make sure the Google Fonts import is at the top of `index.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
```

### Components Not Found
Ensure ShadCN UI components are installed:
```bash
npx shadcn-ui@latest add button card
```

### TypeScript Errors
Make sure your `tsconfig.json` has the correct paths:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./client/src/*"]
    }
  }
}
```

### Images Not Loading
- Check if the Unsplash URLs are accessible
- Replace with local images in `client/public/` folder
- Update image paths to `/your-image.jpg`

## 📱 Mobile Responsiveness

The design is fully responsive with breakpoints:
- **Mobile**: `< 768px` - Single column, hamburger menu
- **Tablet**: `768px - 1024px` - Two columns
- **Desktop**: `> 1024px` - Three columns

## 🎯 Next Steps

### 1. Add More Pages
Create additional pages:
```bash
# Create files
touch client/src/pages/ServicesPage.tsx
touch client/src/pages/ContactPage.tsx
touch client/src/pages/AboutPage.tsx
```

Update `App.tsx`:
```tsx
import ServicesPage from "@/pages/ServicesPage";
import ContactPage from "@/pages/ContactPage";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/contact" component={ContactPage} />
    </Switch>
  );
}
```

### 2. Add Contact Form Functionality
Install form libraries:
```bash
npm install react-hook-form zod @hookform/resolvers
```

### 3. Add Backend Integration
- Create API endpoints in `server/`
- Connect contact form to database
- Set up email notifications

### 4. Deploy to Production
```bash
npm run build
npm run start
```

## 🔒 Environment Variables

Create a `.env` file for sensitive data:
```env
DATABASE_URL=your_database_url
VITE_API_URL=http://localhost:5000
VITE_CONTACT_EMAIL=info@moofar.co.bw
```

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format, compress images
2. **Lazy Loading**: Add lazy loading to images below fold
3. **Code Splitting**: Split routes for faster initial load
4. **CDN**: Use a CDN for static assets

## 🎨 Brand Customization

### Logo
Replace the Leaf icon with your logo:
```tsx
<img src="/logo.svg" alt="Moofar Logo" className="w-8 h-8" />
```

### Favicon
Add to `client/index.html`:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify all files are in correct locations
3. Ensure dependencies are installed
4. Clear browser cache and restart dev server

## ✨ Features to Add

Future enhancements:
- [ ] Image gallery/portfolio
- [ ] Testimonials carousel
- [ ] Blog section
- [ ] Service booking system
- [ ] Plant/product catalog
- [ ] Before/after project showcase
- [ ] Google Maps integration
- [ ] Social media feeds
- [ ] Newsletter signup
- [ ] Chat widget

## 🎉 You're All Set!

Your Moofar website is now ready. Run `npm run dev` and visit `http://localhost:5000` to see it live!

---

**Created by:** Moofar Development Team  
**Last Updated:** October 2025  
**Version:** 1.0.0