import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Download, Search, MapPin, Sparkles, Globe, Shield, Zap, Database, FileCode, CheckCircle, Settings } from "lucide-react";
import { Link } from "wouter";

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <a className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-blue-500" />
                <span className="text-2xl font-bold text-white">Enhanced Schema</span>
              </a>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/features">
                <a className="text-white font-semibold">Features</a>
              </Link>
              <Link href="/installation">
                <a className="text-slate-300 hover:text-white transition-colors">Installation</a>
              </Link>
              <Link href="/comparison">
                <a className="text-slate-300 hover:text-white transition-colors">Comparison</a>
              </Link>
              <a href="/enhanced-schema-plugin.zip" download>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download Plugin
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 px-4 border-b border-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Comprehensive Features</h1>
          <p className="text-xl text-slate-400">
            Everything you need for advanced schema markup and local SEO
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Core Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Search className="h-10 w-10 text-blue-400 mb-4" />
                <CardTitle className="text-white">Automated Webpage Schema</CardTitle>
                <CardDescription className="text-slate-400">
                  Automatically generates schema for all pages and posts with intelligent entity detection and keyword extraction using YAKE algorithm.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Globe className="h-10 w-10 text-green-400 mb-4" />
                <CardTitle className="text-white">12 Webpage Schema Types</CardTitle>
                <CardDescription className="text-slate-400">
                  Support for WebPage, AboutPage, ContactPage, FAQPage, CollectionPage, CheckoutPage, ItemPage, ProfilePage, QAPage, SearchResultsPage, and more.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Sparkles className="h-10 w-10 text-purple-400 mb-4" />
                <CardTitle className="text-white">Entity Detection</CardTitle>
                <CardDescription className="text-slate-400">
                  Automatically detects relevant entities from content with scoring algorithm. Enriched with Wikipedia, Wikidata, and Google Knowledge Graph URLs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <MapPin className="h-10 w-10 text-cyan-400 mb-4" />
                <CardTitle className="text-white">Georadius Generator</CardTitle>
                <CardDescription className="text-slate-400">
                  Define service areas with customizable radius. Automatically fetches cities and postal codes within your service area for local SEO.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Database className="h-10 w-10 text-orange-400 mb-4" />
                <CardTitle className="text-white">Local Business Schema</CardTitle>
                <CardDescription className="text-slate-400">
                  Complete local business markup with areaServed schema. Google Places API integration for automatic business information population.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <FileCode className="h-10 w-10 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Schema Validator</CardTitle>
                <CardDescription className="text-slate-400">
                  Built-in validation against schema.org standards with detailed error reporting and warnings for best practices.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Advanced Capabilities</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <Settings className="h-6 w-6 text-blue-400" />
                  Per-Page Customization
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <p>• Enable/disable schema for individual pages</p>
                <p>• Choose specific schema types per page</p>
                <p>• Add custom entities and keywords</p>
                <p>• Preview generated schema before publishing</p>
                <p>• Override with custom JSON for full control</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  API Integrations
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <p>• Wikipedia API for entity enrichment</p>
                <p>• Wikidata API for structured data</p>
                <p>• Google Places API for business info</p>
                <p>• OpenAI API for AI-generated descriptions</p>
                <p>• All with intelligent caching system</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <Shield className="h-6 w-6 text-green-400" />
                  Performance & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <p>• Efficient caching reduces API calls</p>
                <p>• Optimized database queries</p>
                <p>• Minimal impact on page load time</p>
                <p>• All inputs sanitized and validated</p>
                <p>• Role-based access control</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-purple-400" />
                  Additional Schema Types
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-300 space-y-2">
                <p>• Organization schema with social profiles</p>
                <p>• Person schema for authors and team</p>
                <p>• Video schema with automatic detection</p>
                <p>• Image schema for featured images</p>
                <p>• FAQ schema from content patterns</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Enhanced Schema?</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">For Agencies</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Deploy across unlimited client sites with no monthly fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Unlimited schema generation with no usage restrictions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Fully automated - set it and forget it</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>White-label ready with no branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Multi-site support for WordPress networks</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">For Businesses</h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Improve search engine visibility with rich results</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Local SEO optimization with georadius targeting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Automatic updates when content changes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>No technical knowledge required after setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Works with all themes and page builders</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-y border-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Download the plugin and start generating advanced schema markup today.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="/enhanced-schema-plugin.zip" download>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                <Download className="mr-2 h-5 w-5" />
                Download Plugin
              </Button>
            </a>
            <Link href="/installation">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-700 hover:bg-slate-800">
                View Installation Guide
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-800">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-6 w-6 text-blue-500" />
            <span className="text-lg font-bold text-white">Enhanced Schema</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2024 Enhanced Schema Plugin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
