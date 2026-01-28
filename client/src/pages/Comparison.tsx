import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Download, CheckCircle, XCircle, DollarSign, Zap, Globe } from "lucide-react";
import { Link } from "wouter";

export default function Comparison() {
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
                <a className="text-slate-300 hover:text-white transition-colors">Features</a>
              </Link>
              <Link href="/installation">
                <a className="text-slate-300 hover:text-white transition-colors">Installation</a>
              </Link>
              <Link href="/comparison">
                <a className="text-white font-semibold">Comparison</a>
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
          <h1 className="text-5xl font-bold text-white mb-4">Feature Comparison</h1>
          <p className="text-xl text-slate-400">
            How Enhanced Schema Plugin compares to SchemaWriter.ai
          </p>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Pricing Comparison</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl">SchemaWriter.ai</CardTitle>
                <CardDescription className="text-slate-400 text-lg">Agency Plan</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">$119</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-slate-700">
                    <span className="text-slate-300">Monthly Cost</span>
                    <span className="text-white font-semibold">$119</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700">
                    <span className="text-slate-300">Annual Cost</span>
                    <span className="text-white font-semibold">$1,428</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700">
                    <span className="text-slate-300">Runs per Month</span>
                    <span className="text-white font-semibold">150 runs</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700">
                    <span className="text-slate-300">Georadius</span>
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-slate-700">
                    <span className="text-slate-300">WordPress Integration</span>
                    <XCircle className="h-5 w-5 text-red-400" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-300">Automatic Output</span>
                    <XCircle className="h-5 w-5 text-red-400" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-500/50 relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">RECOMMENDED</span>
              </div>
              <CardHeader>
                <CardTitle className="text-white text-2xl">Enhanced Schema Plugin</CardTitle>
                <CardDescription className="text-blue-200 text-lg">One-Time Setup</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white">$0</span>
                  <span className="text-blue-200">/month</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2 border-b border-blue-700/30">
                    <span className="text-blue-100">Monthly Cost</span>
                    <span className="text-white font-semibold">$0</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-blue-700/30">
                    <span className="text-blue-100">Annual Cost</span>
                    <span className="text-white font-semibold">$0</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-blue-700/30">
                    <span className="text-blue-100">Runs per Month</span>
                    <span className="text-white font-semibold">Unlimited</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-blue-700/30">
                    <span className="text-blue-100">Georadius</span>
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-blue-700/30">
                    <span className="text-blue-100">WordPress Integration</span>
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-blue-100">Automatic Output</span>
                    <CheckCircle className="h-5 w-5 text-green-400" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Feature Matrix */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Feature Matrix</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-700">
                  <th className="text-left py-4 px-4 text-white font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">SchemaWriter.ai</th>
                  <th className="text-center py-4 px-4 text-white font-semibold">Enhanced Schema</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Automated Webpage Schema</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">12 Webpage Schema Types</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Entity Detection</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">YAKE Keyword Extraction</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Wikipedia Integration</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Wikidata Integration</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Google Knowledge Graph</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Georadius Generator</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Local Business Schema</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3 px-4">Schema Validation</td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800 bg-blue-900/20">
                  <td className="py-3 px-4 font-semibold">Usage Limits</td>
                  <td className="text-center py-3 px-4">50-150/month</td>
                  <td className="text-center py-3 px-4 font-semibold text-green-400">Unlimited</td>
                </tr>
                <tr className="border-b border-slate-800 bg-blue-900/20">
                  <td className="py-3 px-4 font-semibold">WordPress Integration</td>
                  <td className="text-center py-3 px-4"><XCircle className="h-5 w-5 text-red-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800 bg-blue-900/20">
                  <td className="py-3 px-4 font-semibold">Automatic Output</td>
                  <td className="text-center py-3 px-4"><XCircle className="h-5 w-5 text-red-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
                <tr className="border-b border-slate-800 bg-blue-900/20">
                  <td className="py-3 px-4 font-semibold">Per-Page Customization</td>
                  <td className="text-center py-3 px-4">Limited</td>
                  <td className="text-center py-3 px-4 font-semibold text-green-400">Full Control</td>
                </tr>
                <tr className="border-b border-slate-800 bg-blue-900/20">
                  <td className="py-3 px-4 font-semibold">Multi-Site Support</td>
                  <td className="text-center py-3 px-4"><XCircle className="h-5 w-5 text-red-400 mx-auto" /></td>
                  <td className="text-center py-3 px-4"><CheckCircle className="h-5 w-5 text-green-400 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Cost Savings Scenarios</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <DollarSign className="h-10 w-10 text-green-400 mb-4" />
                <CardTitle className="text-white">Single Local Business</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <div>
                  <p className="font-semibold text-white mb-2">SchemaWriter.ai:</p>
                  <p>$119/month × 12 = <span className="text-red-400 font-bold">$1,428/year</span></p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Enhanced Schema:</p>
                  <p>One-time setup = <span className="text-green-400 font-bold">$0/year</span></p>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-green-400 font-bold text-lg">Save $1,428/year</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Zap className="h-10 w-10 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Agency with 10 Clients</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <div>
                  <p className="font-semibold text-white mb-2">SchemaWriter.ai:</p>
                  <p>150 runs ÷ 10 sites = 15 runs/site</p>
                  <p className="text-red-400 font-bold">Very limited</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Enhanced Schema:</p>
                  <p>Unlimited per site</p>
                  <p className="text-green-400 font-bold">No restrictions</p>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-green-400 font-bold text-lg">Save $1,428+/year</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <Globe className="h-10 w-10 text-blue-400 mb-4" />
                <CardTitle className="text-white">Large Site (1000+ Pages)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-300">
                <div>
                  <p className="font-semibold text-white mb-2">SchemaWriter.ai:</p>
                  <p>Months to generate all</p>
                  <p className="text-red-400 font-bold">Manual copying</p>
                </div>
                <div>
                  <p className="font-semibold text-white mb-2">Enhanced Schema:</p>
                  <p>Automatic for all pages</p>
                  <p className="text-green-400 font-bold">Zero manual work</p>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-green-400 font-bold text-lg">Save $1,428 + labor</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-y border-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Make the Smart Choice</h2>
          <p className="text-lg text-slate-300 mb-8">
            Save $1,428/year with unlimited usage and better WordPress integration.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="/enhanced-schema-plugin.zip" download>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
                <Download className="mr-2 h-5 w-5" />
                Download Free Plugin
              </Button>
            </a>
            <Link href="/features">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-slate-700 hover:bg-slate-800">
                View All Features
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
