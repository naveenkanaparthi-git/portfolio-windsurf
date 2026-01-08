# Data Engineer Portfolio

A modern, responsive portfolio website built for data engineers to showcase their projects, skills, and professional experience. Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Modern Design**: Clean, professional interface with dark mode support
- **Responsive**: Optimized for all devices from mobile to desktop
- **Performance**: Built with Next.js 14 for optimal loading speeds
- **SEO Optimized**: Complete metadata, sitemap, and structured data
- **Accessibility**: WCAG AA compliant with keyboard navigation
- **Command Palette**: Quick navigation with ⌘K shortcut
- **Project Showcase**: Detailed case studies with architecture diagrams
- **Skills Matrix**: Organized tech stack with proficiency levels
- **Contact Form**: Integrated contact system with validation

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Icons**: Lucide React
- **Fonts**: Inter (UI) + JetBrains Mono (code)
- **Theme**: next-themes for dark/light mode
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-windsurf
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the following variables:
   ```env
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Content Management

### Personal Information
Edit your personal details in `src/data/person.json`:
```json
{
  "name": "Your Name",
  "title": "Data Engineer",
  "email": "your.email@example.com",
  "social": {
    "linkedin": "https://linkedin.com/in/yourprofile",
    "github": "https://github.com/yourusername"
  }
}
```

### Projects
Add your projects in `src/data/projects.json`. Each project should include:
- Basic info (title, summary, timeline)
- Technical details (tech stack, architecture)
- Impact metrics and results
- Code snippets and lessons learned

### Skills
Update your technical skills in `src/data/skills.json`:
```json
{
  "name": "Python",
  "category": "Languages",
  "level": "Expert"
}
```

## 🎨 Customization

### Colors & Theme
The design system uses CSS custom properties. Update colors in `src/app/globals.css`:
```css
:root {
  --primary: your-primary-color;
  --secondary: your-secondary-color;
}
```

### Components
All UI components are in `src/components/`:
- `layout/` - Header, footer, navigation
- `sections/` - Page sections (hero, project cards, etc.)
- `ui/` - Reusable UI components (buttons, cards, etc.)

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Update navigation in `src/components/layout/header.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The portfolio works on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

The portfolio is optimized for performance:
- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized LCP, FID, and CLS
- **Bundle Size**: Minimal JavaScript with code splitting
- **Images**: Optimized with Next.js Image component

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and landmarks
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios
- Focus indicators

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Project Structure
```
src/
├── app/                 # Next.js app router pages
├── components/          # React components
│   ├── layout/         # Layout components
│   ├── sections/       # Page sections
│   └── ui/             # UI components
├── data/               # Content data (JSON)
├── lib/                # Utility functions
└── types/              # TypeScript definitions
```

## 📈 Analytics

To add analytics, integrate your preferred service:
- Google Analytics 4
- Plausible (privacy-focused)
- Vercel Analytics
- Umami

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the [Issues](https://github.com/your-repo/issues) page
2. Create a new issue with detailed information
3. Include your environment details and steps to reproduce

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Lucide](https://lucide.dev/) for the icon library

---

Built with ❤️ for data engineers who want to showcase their work professionally.
