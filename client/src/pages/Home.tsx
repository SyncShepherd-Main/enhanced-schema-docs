import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Globe, MapPin, Search, Zap, Code, Shield, Sparkles } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">Enhanced Schema</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/features">
                <a className="text-slate-300 hover:text-white transition-colors">Features</a>
              </Link>
              <Link href="/installation">
                <a className="text-slate-300 hover:text-white transition-colors">Installation</a>
              </Link>
              <Link href="/comparison">
                <a className="text-slate-300 hover:text-white transition-colors">Comparison</a>
              </Link>
              <a href="./enhanced-schema-plugin.zip" download>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Plugin
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium">
                WordPress Schema Plugin
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight">
              Advanced Schema Markup
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                For Your Agency
              </span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              A comprehensive WordPress plugin with automated webpage schema, local business georadius, 
              entity detection, and advanced SEO features. Deploy across unlimited client sites with no monthly fees.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <a href="./enhanced-schema-plugin.zip" download>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                  <Download className="mr-2 h-5 w-5" />
                  Download Plugin
                </Button>
              </a>
              <Link href="/features">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-700 hover:bg-slate-800">
                  View Features
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center gap-8 pt-8 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Free & Open Source</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>Unlimited Usage</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Multi-Site Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-slate-400 text-lg">Everything you need for comprehensive schema markup</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Search className="h-10 w-10 text-blue-400 mb-4" />
                <CardTitle className="text-white">Automated Schema Generation</CardTitle>
                <CardDescription className="text-slate-400">
                  Automatically generates schema for all pages and posts with entity detection and keyword extraction
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <MapPin className="h-10 w-10 text-green-400 mb-4" />
                <CardTitle className="text-white">Georadius Generator</CardTitle>
                <CardDescription className="text-slate-400">
                  Define service areas with customizable radius, postal codes, and city mapping for local SEO
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-purple-400 mb-4" />
                <CardTitle className="text-white">Entity Detection</CardTitle>
                <CardDescription className="text-slate-400">
                  Automatically detects entities with Wikipedia, Wikidata, and Google Knowledge Graph integration
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Globe className="h-10 w-10 text-cyan-400 mb-4" />
                <CardTitle className="text-white">12 Schema Types</CardTitle>
                <CardDescription className="text-slate-400">
                  Support for WebPage, AboutPage, ContactPage, FAQPage, LocalBusiness, and more
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Code className="h-10 w-10 text-orange-400 mb-4" />
                <CardTitle className="text-white">Schema Validator</CardTitle>
                <CardDescription className="text-slate-400">
                  Built-in validation against schema.org standards with detailed error reporting
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Zap className="h-10 w-10 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Performance Optimized</CardTitle>
                <CardDescription className="text-slate-400">
                  Caching system, optimized queries, and minimal impact on page load times
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Enhanced Schema?</h2>
            <p className="text-slate-400 text-lg">Compare with SchemaWriter.ai Agency Plan</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">SchemaWriter.ai</CardTitle>
                <CardDescription className="text-slate-400 text-lg">Agency Plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Monthly Cost</span>
                  <span className="text-white font-bold">$119/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Annual Cost</span>
                  <span className="text-white font-bold">$1,428/year</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Runs per Month</span>
                  <span className="text-white font-bold">150 runs</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Georadius</span>
                  <span className="text-green-400">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">WordPress Integration</span>
                  <span className="text-red-400">✗ Manual</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-500/50">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Enhanced Schema Plugin</CardTitle>
                <CardDescription className="text-blue-200 text-lg">One-Time Setup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Monthly Cost</span>
                  <span className="text-white font-bold">$0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Annual Cost</span>
                  <span className="text-white font-bold">$0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Runs per Month</span>
                  <span className="text-white font-bold">Unlimited</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">Georadius</span>
                  <span className="text-green-400">✓ Included</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">WordPress Integration</span>
                  <span className="text-green-400">✓ Native</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/comparison">
              <Button variant="outline" size="lg" className="border-slate-700 hover:bg-slate-800">
                View Full Comparison
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-y border-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-slate-300 mb-8">
            Download the plugin and deploy it across unlimited client sites with no monthly fees.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="/enhanced-schema-plugin.zip" download>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                <Download className="mr-2 h-5 w-5" />
                Download Now
              </Button>
            </a>
            <Link href="/installation">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-700 hover:bg-slate-800">
                Installation Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Code className="h-6 w-6 text-blue-500" />
                <span className="text-lg font-bold text-white">Enhanced Schema</span>
              </div>
              <p className="text-slate-400 text-sm">
                Advanced schema markup plugin for WordPress agencies.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Documentation</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/features"><a className="hover:text-white">Features</a></Link></li>
                <li><Link href="/installation"><a className="hover:text-white">Installation</a></Link></li>
                <li><Link href="/comparison"><a className="hover:text-white">Comparison</a></Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="/enhanced-schema-plugin.zip" download className="hover:text-white">Download Plugin</a></li>
                <li><a href="./FEATURE_COMPARISON.md" download className="hover:text-white">Feature Comparison</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">License</h3>
              <p className="text-slate-400 text-sm">
                GPL v2 or later
                <br />
                Free and open source
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© 2024 Enhanced Schema Plugin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
