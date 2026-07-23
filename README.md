# Dazzle Beauty Parlour & Makeup Studio Website

A premium, modern, SEO-friendly website for Dazzle Beauty Parlour & Makeup Studio.

## Features

- 🏠 **Home Page** - Hero section, trust indicators, services preview, gallery, testimonials
- 📖 **About Page** - Company story, mission, vision, and values
- 💇‍♀️ **Services Page** - Complete listing of all beauty services with categories
- 💍 **Bridal Packages** - Tiered bridal packages (Silver, Gold, Diamond, Platinum)
- 🖼️ **Gallery** - Filterable masonry gallery with lightbox
- ⭐ **Testimonials** - Client reviews and ratings
- 📞 **Contact** - Booking form with WhatsApp and Email integration
- 📜 **Privacy Policy & Terms** - Legal pages

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **UI:** React 18
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Language:** TypeScript

## Color Palette

- Primary: Rose Gold (#C58A73)
- Secondary: Soft Pink (#F8E8EA)
- Accent: Gold (#D6B25E)
- Text: Dark Charcoal (#333333)

## SEO Features

- ✅ Complete Schema.org markup (LocalBusiness, FAQ, Breadcrumb)
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ XML Sitemap
- ✅ Robots.txt
- ✅ Semantic HTML
- ✅ Alt text for images
- ✅ Meta descriptions

## Performance

- ✅ Mobile-first responsive design
- ✅ Optimized images (WebP, lazy loading)
- ✅ Code splitting
- ✅ Font optimization
- ✅ Core Web Vitals ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd dazzle-beauty

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically

Or use Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Project Structure

```
dazzle-beauty/
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── about/
│   │   ├── services/
│   │   ├── bridal-packages/
│   │   ├── gallery/
│   │   ├── testimonials/
│   │   ├── contact/
│   │   ├── privacy/
│   │   ├── terms/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ui/            # Reusable UI components
│   │   ├── layout/         # Layout components (Navbar, Footer)
│   │   └── sections/      # Page sections
│   ├── data/              # Static data files
│   ├── lib/               # Utility functions
│   └── types/             # TypeScript types
├── public/
└── package.json
```

## Customization

### Update Business Information

Edit `src/data/business.ts` to update:
- Business name, address, phone, email
- WhatsApp number
- Business hours
- Social media links
- Google Maps embed URL

### Update Services

Edit `src/data/services.ts` to add/modify services and bridal packages.

### Update Testimonials

Edit `src/data/testimonials.ts` to add client reviews.

## License

This project is proprietary and confidential. All rights reserved.

---

Built with ❤️ for Dazzle Beauty Parlour & Makeup Studio
