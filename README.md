# ChopStocks - AI-Powered Investment Intelligence

ChopStocks is an AI-powered investment intelligence platform that transforms complex market data into digestible insights, helping investors make informed decisions with confidence.

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Tremor** - Data visualization and charts
- **Lucide React** - Icon library

### Backend & Services
- **Firebase** - Authentication, Firestore database, Cloud Functions
- **Vercel** - Deployment and hosting
- **Stripe** - Payment processing
- **Upstash** - Redis caching layer

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Playwright** - End-to-end testing
- **TypeScript** - Static type checking

## 🏗️ Project Architecture

```
chopstocks/
├── src/
│   ├── app/                 # App Router pages and layouts
│   ├── components/          # Reusable React components
│   │   ├── ui/             # shadcn/ui components
│   │   └── charts/         # Tremor chart wrappers
│   └── lib/                # Utilities and configurations
├── public/                 # Static assets
└── docs/                   # Project documentation
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zervin/chopstocks.git
   cd chopstocks
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your environment variables in `.env.local`.

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler check

## 🧪 Testing

Run end-to-end tests with Playwright:
```bash
npm run test:e2e
```

## 🚀 Deployment

The application is automatically deployed to Vercel when changes are pushed to the main branch.

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔧 Configuration

### Tailwind CSS
The project uses a custom Tailwind configuration with design system variables for consistent theming across light and dark modes.

### TypeScript
Configured with strict mode and path aliases:
- `@/*` maps to `./src/*`

### Next.js
- App Router enabled
- Image optimization configured
- TypeScript support enabled

## 🎨 Design System

The application uses a consistent design system with:
- CSS custom properties for theming
- Dark mode support
- Responsive design principles
- Accessible color palettes

## 📚 Key Features

- **AI-Powered Analysis** - Get intelligent insights on investment decisions
- **Real-Time Market Data** - Live market data with professional visualization
- **Smart Reports** - Generate comprehensive investment reports instantly
- **Portfolio Management** - Advanced portfolio tools and risk assessment
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Dark Mode Support** - Built-in dark mode with system preference detection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For support and questions, please contact the development team or create an issue in the repository.

---

Built with ❤️ by the ChopStocks team