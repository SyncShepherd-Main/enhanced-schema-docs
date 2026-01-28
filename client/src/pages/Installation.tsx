import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Download, CheckCircle2, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Streamdown } from "streamdown";

const installationGuide = `
## Quick Start

Follow these steps to install and configure the Enhanced Schema Plugin on your WordPress website.

### Prerequisites

Before installing the plugin, ensure your environment meets these requirements:

- WordPress version 5.8 or higher
- PHP version 7.4 or higher
- MySQL version 5.7 or higher (or MariaDB 10.2+)
- Administrator access to your WordPress site

### Installation Steps

#### Step 1: Download the Plugin

Download the plugin ZIP file using the button below.

#### Step 2: Upload to WordPress

1. Log in to your WordPress admin dashboard
2. Navigate to **Plugins > Add New**
3. Click the **Upload Plugin** button at the top
4. Click **Choose File** and select the downloaded ZIP file
5. Click **Install Now** and wait for upload to complete
6. Click **Activate Plugin** when installation finishes

#### Step 3: Configure General Settings

1. Navigate to **Enhanced Schema** in your WordPress admin menu
2. Click on **Settings**
3. Enable the schema types you want to use:
   - ✓ Webpage Schema (recommended for all sites)
   - ✓ Organization Schema (recommended)
   - ✓ Local Business Schema (only for local businesses)
   - ✓ Video Schema (if you embed videos)
   - ✓ FAQ Schema (if you have FAQ content)
4. Configure entity detection sensitivity (Medium recommended)
5. Set cache duration (7 days default)
6. Click **Save Changes**

#### Step 4: Add Organization Information

1. Click on **Organization** in the Enhanced Schema submenu
2. Enter your organization details:
   - Organization Name (required)
   - Website URL (usually auto-filled)
   - Description (brief company description)
   - Logo URL (upload and enter URL)
   - Contact phone and email
3. Add social media profile URLs
4. Click **Save Changes**

#### Step 5: Configure Local Business (If Applicable)

If you run a local business:

1. Click on **Local Business** in the submenu
2. Enter business information:
   - Business Name
   - Business Type (select from dropdown)
   - Phone and Email
   - Full Address (street, city, state, postal code, country)
3. The plugin will automatically geocode your address
4. Add opening hours for each day
5. Add business social profiles
6. Click **Save Changes**

#### Step 6: Set Up Georadius (For Local Businesses)

Define your service area:

1. Click on **Georadius Builder** in the submenu
2. Your business coordinates are auto-filled from the address
3. Enter service radius in kilometers (e.g., 30)
4. Click **Generate Georadius**
5. Review the list of cities and postal codes
6. Remove any irrelevant locations
7. Add missing locations manually if needed
8. Click **Save Georadius Data**

#### Step 7: Configure API Keys (Optional)

For enhanced functionality:

1. Navigate to **Settings > API Keys** tab
2. **Google Places API Key** (recommended for georadius):
   - Get your key at https://console.cloud.google.com/
   - Enable "Places API" and "Geocoding API"
   - Enter the key and save
3. **OpenAI API Key** (optional for AI descriptions):
   - Get your key at https://platform.openai.com/
   - Enter the key and save

**Note:** Wikipedia and Wikidata APIs work without keys.

### Verification

After configuration, verify the plugin is working:

1. Visit any page on your website
2. Right-click and select "View Page Source"
3. Search for \`<script type="application/ld+json">\`
4. You should see JSON-LD schema markup in the page head

### Validate Schema

1. Copy the schema JSON from your page source
2. Visit Google's Rich Results Test: https://search.google.com/test/rich-results
3. Paste your page URL or schema JSON
4. Click "Test URL" or "Test Code"
5. Review results for any errors or warnings

### Per-Page Customization

On any post or page edit screen:

1. Scroll to the "Enhanced Schema Settings" meta box
2. Enable/disable schema for this page
3. Choose schema type or use auto-detect
4. Add custom entities or keywords
5. Click "Preview Schema" to see generated output
6. Optionally add custom JSON for full control

### Troubleshooting

**Schema Not Appearing:**
- Check if schema is enabled in Settings
- Verify schema is enabled for the specific page
- Clear all caches (WordPress, plugin, server, CDN)
- Check browser console for JavaScript errors

**Entity Detection Not Working:**
- Ensure page has sufficient content (200+ words)
- Check entity detection is enabled in Settings
- Verify Wikipedia API is accessible
- Try manually adding entities

**Georadius Not Generating:**
- Verify Google Places API key is configured
- Check API key has Places API enabled
- Ensure coordinates are valid
- Try a smaller radius

### Support

For detailed documentation, see the included README.md file in the plugin folder.

For issues or questions, refer to the plugin documentation or contact your development team.
`;

export default function Installation() {
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
                <a className="text-white font-semibold">Installation</a>
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
          <h1 className="text-5xl font-bold text-white mb-4">Installation Guide</h1>
          <p className="text-xl text-slate-400">
            Get up and running with Enhanced Schema Plugin in minutes
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="text-center">
                <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto mb-2" />
                <CardTitle className="text-white">5 Minutes</CardTitle>
                <p className="text-slate-400 text-sm">Average installation time</p>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="text-center">
                <AlertCircle className="h-12 w-12 text-blue-400 mx-auto mb-2" />
                <CardTitle className="text-white">7 Steps</CardTitle>
                <p className="text-slate-400 text-sm">Simple configuration process</p>
              </CardHeader>
            </Card>
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="text-center">
                <Download className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                <CardTitle className="text-white">44 KB</CardTitle>
                <p className="text-slate-400 text-sm">Lightweight plugin size</p>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Installation Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <div className="prose prose-invert prose-slate max-w-none">
                <Streamdown>{installationGuide}</Streamdown>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-y border-slate-800">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Install?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Download the plugin and follow the steps above to get started.
          </p>
          <a href="/enhanced-schema-plugin.zip" download>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6">
              <Download className="mr-2 h-5 w-5" />
              Download Plugin
            </Button>
          </a>
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
