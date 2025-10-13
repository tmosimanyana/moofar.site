# Design Guidelines: Moofar Proprietary Limited Website

## Design Approach: Nature-Inspired Professional Service Design

**Selected Approach:** Reference-based with inspiration from premium landscaping services (TruGreen, BrightView) and nature-focused brands, creating a professional yet organic aesthetic that builds trust while celebrating natural beauty.

**Core Principle:** Blend professional service credibility with the organic, living nature of gardening and landscaping work.

---

## Color Palette

**Primary Colors:**
- Deep Forest Green: 145 45% 25% (headers, primary buttons, navigation)
- Fresh Sage: 145 30% 55% (accents, hover states)
- Warm Earth Brown: 25 35% 40% (text, secondary elements)

**Supporting Colors:**
- Soft Cream: 45 40% 95% (backgrounds, cards)
- Rich Soil: 25 25% 20% (dark text, footer)
- Sky Blue: 195 60% 90% (subtle accents, badges)

**Dark Mode:** Use Deep Forest Green (145 30% 12%) as primary background, Soft Cream for text.

---

## Typography

**Font Families:**
- Headlines: 'Playfair Display' (serif) - elegant, established feel
- Body: 'Inter' (sans-serif) - clean, modern readability
- Accents: 'Inter' medium/semibold for CTAs

**Hierarchy:**
- Hero Headline: text-5xl/6xl, Playfair Display, semibold
- Section Headers: text-3xl/4xl, Playfair Display
- Service Titles: text-xl/2xl, Inter semibold
- Body Text: text-base/lg, Inter regular
- Small Text: text-sm, Inter

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm.

**Grid Structure:**
- Container: max-w-7xl mx-auto px-6
- Hero: Full-width background with centered max-w-5xl content
- Services: 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Team: 2-column split (lg:grid-cols-2)
- Contact: 2-column (form + info map)

**Section Padding:** py-20 desktop, py-12 mobile

---

## Component Library

### Navigation
- Transparent-to-solid on scroll, backdrop-blur
- Logo left, menu items center/right
- Contact CTA button (Deep Forest Green)
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- Full-width background image (lush garden/landscape)
- Overlay: gradient from transparent to Deep Forest Green (20% opacity)
- Centered content with company name (Playfair Display, text-6xl)
- Tagline beneath in Inter
- Dual CTAs: Primary "Our Services" + Secondary "Contact Us"
- Height: 85vh with natural content flow below

### Service Cards
- White/Cream background with subtle shadow
- Icon/illustration at top (use Heroicons nature icons)
- Service name as card header (Inter semibold)
- Brief description (2-3 lines)
- "Learn More" link in Sage green
- Hover: Lift effect (translate-y-1) with deeper shadow

### Team/Contact Cards
- Photo on left (circular crop for team)
- Name, title, contact info stacked right
- Icons for phone/email (Heroicons)
- Soft border with earth tone

### Forms
- Labeled inputs with focus ring in Sage green
- Textarea for messages
- Submit button: Deep Forest Green with hover lift
- Include contact alternatives (phone, email) beside form

### Footer
- Rich Soil background with Soft Cream text
- 3-column: Services, Contact, Developer Credit
- Company registration details
- Social links if applicable
- Copyright notice

---

## Images

**Large Hero Image:** Yes - showcase a stunning garden landscape or nursery environment (vibrant green plants, professional landscaping work). Should convey professionalism and natural beauty.

**Service Section Images:** Include photo representations for each service:
- Gardening: Close-up of hands planting or tending flowers
- Landscaping: Wide shot of completed landscape project with hardscaping
- Nursery: Rows of healthy plants in greenhouse/nursery setting

**About/Team:** Professional photos of Director Mooketsi Mapungwa and Manager Farai Madorobo in work environment (nursery or landscape site).

**Placement Strategy:**
- Hero: Full-width background image with overlay
- Services: Thumbnail images above card text (16:9 aspect ratio)
- Team: Circular headshots (1:1 aspect ratio)
- About section: Company workspace/nursery facility image

---

## Page Structure

**Homepage:**
1. Hero with CTA
2. Services overview (3 cards)
3. About snippet with company registration
4. Team introduction (2-column)
5. Testimonial/Trust section
6. Contact preview with prominent email/phone
7. Footer

**Services Page:**
Individual service showcases with detailed descriptions, before/after imagery potential, and service-specific CTAs.

**Contact Page:**
2-column layout - form left, contact information and business hours right.

---

## Animations

Minimal, purposeful animations:
- Subtle fade-in on scroll for service cards
- Smooth hover lifts on interactive elements
- Navigation background transition on scroll
- No distracting motion effects

---

## Accessibility

- WCAG AA contrast ratios maintained
- Focus indicators on all interactive elements
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support
- Dark mode with maintained contrast