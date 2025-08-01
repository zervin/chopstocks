import { MarketingLayout } from '@/components/layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ChefHat, TrendingUp, Brain, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced AI models analyze market trends, financial data, and news sentiment to deliver actionable insights."
  },
  {
    icon: TrendingUp,
    title: "Real-Time Market Data",
    description: "Live stock prices, market movements, and breaking news integrated into every report for timely decisions."
  },
  {
    icon: Zap,
    title: "Instant Reports",
    description: "Generate comprehensive investment reports in seconds, not hours. Get the information you need when you need it."
  }
]

const pricingTiers = [
  {
    name: "Cook",
    price: "2 credits",
    description: "Perfect for getting started",
    features: ["Basic analysis", "Key metrics", "Simple recommendations"]
  },
  {
    name: "Chef",
    price: "5 credits",
    description: "For serious investors",
    features: ["Detailed analysis", "Technical indicators", "Risk assessment", "News sentiment"]
  },
  {
    name: "Master Chef",
    price: "10 credits",
    description: "Professional grade insights",
    features: ["Comprehensive research", "Advanced metrics", 
              "Competitive analysis", "Financial modeling", "Custom insights"]
  }
]

export default function HomePage() {
  return (
    <MarketingLayout>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 text-brand rounded-full text-sm font-medium mb-6">
            <ChefHat className="h-4 w-4" />
            AI-Powered Investment Intelligence
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-brand to-foreground bg-clip-text text-transparent">
            Cook Up Better
            <br />
            Investment Decisions
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform complex market data into digestible insights with our AI-powered investment intelligence platform. 
            Get professional-grade analysis in seconds, not hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-brand text-white hover:opacity-90">
              <Link href="/dashboard" className="flex items-center gap-2">
                Get Started Free
                <Zap className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="#features">
                Learn More
              </Link>
            </Button>
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground">
            Join thousands of investors making smarter decisions with ChopStocks
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose ChopStocks?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge AI technology with real-time market data to deliver 
              insights that help you make confident investment decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-brand/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-brand" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Analysis Level
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From quick insights to comprehensive research, we have the right tier for your investment needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`text-center ${index === 1 ? 'ring-2 ring-brand shadow-lg scale-105' : ''}`}>
                <CardHeader>
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <div className="text-3xl font-bold text-brand mb-2">{tier.price}</div>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={index === 1 ? 'gradient-brand text-white w-full' : 'w-full'} 
                    variant={index === 1 ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-brand/10 via-brand/5 to-brand/10 rounded-2xl p-8 md:p-12">
            <ChefHat className="h-12 w-12 text-brand mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Cooking?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of investors who trust ChopStocks for their investment research. 
              Get your first AI-powered report today.
            </p>
            <Button size="lg" className="gradient-brand text-white">
              <Link href="/dashboard" className="flex items-center gap-2">
                Start Free Trial
                <Zap className="h-4 w-4" />
              </Link>
            </Button>
            <div className="mt-4 text-sm text-muted-foreground">
              No credit card required • Get started in 30 seconds
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  )
}