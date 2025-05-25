import { RedirectButton as Button } from "@/components/ui/redirectButton"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Keyboard, Zap, Globe, Check, X } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 tracking-tight">
      {/* Header */}
      <header className="border-b border-gray-200 ">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <span className="font-bold text-lg">SittySaaS</span>
          </div>
          <div className="flex items-center space-x-6 ">
            <Button variant="outline" className="px-8 py-4" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-40  ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Try the demo API for free →
                </Badge>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">The SaaS for your SaaS.</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Because your SaaS landing page fucking sucks. Increase your MRR, KPIs, SEO, ROI, GDPR, BBCs and BBLs.
                </p>
              </div>
              <div className="flex space-x-4">
                <Button className="bg-gray-900 hover:bg-gray-800">Learn More</Button>
                <Button variant="outline">Pricing</Button>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-sm text-gray-600">"It looks great Ayush." - My Dad</span>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-4">
                <div className="flex justify-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <Input placeholder="Enter your SaaS landing page URL" className="w-full" />
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-40 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              EVERYTHING YOU NEED
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The most useful tool for your business{" "}
              <span className="inline-block w-6 h-6 bg-blue-500 text-white text-xs flex items-center justify-center rounded">
                ✓
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">Analytics</h3>
                <p className="text-gray-600">
                  Gain powerful insights into what your users actually think. Surprise, it's garbage.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                  <Keyboard className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold">Less Keystrokes</h3>
                <p className="text-gray-600">On average compared to typing out a "I launched my SaaS" onto Twitter.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8">
              <CardContent className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">Definitely Not Original</h3>
                <p className="text-gray-600">Letting you know this is the 50th GPT-4 wrapper we've seen this month.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-40 bg-gray-50 ">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900">Built like every other SaaS in 2025</h2>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 font-bold">👨‍💻</span>
                </div>
                <div>
                  <p className="text-gray-600">
                    SittySaaS is built of but not many a joke. Built to be saleable, expensive, and totally not a GPT-4
                    wrapper. Our landing page also explains nothing. Good Luck.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Optimized Emojis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>"Building in public"</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-blue-600">☁️</span>
                </div>
                <div className="text-3xl font-bold">2</div>
                <div className="text-sm text-gray-600">Cloud APIs</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-green-600">💯</span>
                </div>
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm text-gray-600">Open Source</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-yellow-600">⭐</span>
                </div>
                <div className="text-3xl font-bold">5 star</div>
                <div className="text-sm text-gray-600">User Reviews</div>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto">
                  <span className="text-purple-600">⚡</span>
                </div>
                <div className="text-3xl font-bold">1ms</div>
                <div className="text-sm text-gray-600">Response Times</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="py-40 ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Blazingly fast, with hundreds of servers all around the world ⚡
              </h2>
              <p className="text-gray-600">
                Spanning across all around the world, we can reach you in your user's quicker. Designed so you can
                disappoint your users without waiting. How fast.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>3ms Response Times</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Built to scale</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <Globe className="w-32 h-32 text-gray-400 mx-auto mb-4" />
                <div className="space-y-2">
                  <Badge className="bg-blue-100 text-blue-700">Actually deployed on the edge</Badge>
                  <p className="text-sm text-gray-600">I love burning money</p>
                  <div className="flex justify-center space-x-4 text-xs text-gray-500">
                    <span>Easy to use</span>
                    <span>Made for your customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLI Section */}
      <section className="py-40 bg-gray-50 ">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Disappoint yourself, even in the command line 💻</h2>
              <p className="text-gray-600">
                Using our API you can get info on how shitty your landing page is using cURL or any other tool.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>JSON format</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Totally Unique</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 text-green-400 font-mono text-sm">
              <div className="mb-2">curl api.sittysaas.app/roast</div>
              <div className="text-gray-500">
                {`{
  "roast": "Your landing page looks like it was designed by a toddler with crayons"
}`}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-40 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              PRICING
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple transparent pricing</h2>
            <p className="text-gray-600">Get fucked over for SEO support</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Free Plan */}
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Free</h3>
                  <div className="text-4xl font-bold">
                    $0<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">For teams, that like disappointment</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>1 URL to Roast 🔥</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <X className="w-4 h-4 text-red-500" />
                    <span>Up to 5 companies per hour</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="p-8 border-purple-200 relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600">Most Popular</Badge>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pro</h3>
                  <div className="text-4xl font-bold">
                    $199<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">Per seat - Billed monthly</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>5 URLs to Roast 🔥</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Up to 25 companies per hour 🚀</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Custom domain 🌐</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Improved output 📈</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Won't insult your mother 🤐</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Choose plan</Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                  <div className="text-4xl font-bold">
                    $5,000<span className="text-lg text-gray-500">/month</span>
                  </div>
                  <p className="text-sm text-gray-500">Per seat - Billed annually</p>
                </div>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Everything in the Pro plan 🎯</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>SSO Support 🔐</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>Priority Support 🚨</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-xs text-gray-500 mt-8">
            100% no-risk money back guarantee. Backed by Y/B and VC funds.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-gray-50 ">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Still want to contribute in this Project?
          </h2>
          <p className="text-gray-600 mb-8">Even if you make a PR, we care.</p>
          <Button className="bg-gray-900 hover:bg-gray-800" ><Link href={"https://github.com/ayushbairagii/ShittySaas"}>Contribute</Link></Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <span className="font-semibold">SittySaaS</span>
            </div>
            <p className="text-sm text-gray-500">Because your SaaS landing sucks.</p>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-200 text-center text-xs text-gray-500">
            © Copyright 2025 - SittySaaS | Created by{" "}
            <a href="https://x.com/WebOfAyush" target="_" className="text-blue-600 hover:underline">
              Ayush Because he was bored
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
