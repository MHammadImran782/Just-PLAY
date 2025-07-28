#!/bin/bash

# Create all tool directories if they don't exist
mkdir -p tools/{image,seo,text,developer,calculator,converter,security,social,misc}

# Create a basic template function
create_tool() {
    local category=$1
    local filename=$2
    local title=$3
    local description=$4
    local icon=$5
    
    cat > "tools/$category/$filename" << HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="$description">
    <title>$title | Multi-Tools</title>
    <link rel="stylesheet" href="../../assets/css/main.css">
</head>
<body>
    <div id="header-placeholder"></div>
    <main class="container">
        <div class="row mt-4">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-header">
                        <h1>$icon $title</h1>
                        <p>$description</p>
                    </div>
                    <div class="card-body">
                        <div class="text-center p-5">
                            <h3>Tool Under Development</h3>
                            <p>This tool is currently being developed. Please check back soon!</p>
                            <a href="../../index.html" class="btn btn-primary">Back to Home</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="ad-section ad-sidebar">
                    <h4>Advertisement</h4>
                    <div style="background: #f0f0f0; height: 300px; display: flex; align-items: center; justify-content: center; border: 1px dashed #ccc;">
                        Ad Space - 300x250
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div id="footer-placeholder"></div>
    <script src="../../assets/js/main.js"></script>
</body>
</html>
HTML
}

# Create all the tools
# Image Tools
create_tool "image" "image-to-png.html" "Image to PNG Converter" "Convert any image format to PNG" "🖼️"
create_tool "image" "image-to-jpg.html" "Image to JPG Converter" "Convert any image format to JPG" "📷"
create_tool "image" "image-resizer.html" "Image Resizer" "Resize images to custom dimensions" "📐"
create_tool "image" "image-compressor.html" "Image Compressor" "Compress images to reduce file size" "🗜️"
create_tool "image" "image-cropper.html" "Image Cropper" "Crop images to desired area" "✂️"
create_tool "image" "image-to-base64.html" "Image to Base64" "Convert images to Base64 encoding" "🔤"
create_tool "image" "webp-to-png.html" "WebP to PNG" "Convert WebP images to PNG format" "🔄"
create_tool "image" "gif-maker.html" "GIF Maker" "Create animated GIFs from images" "🎬"
create_tool "image" "qr-generator.html" "QR Code Generator" "Generate QR codes for text or URLs" "📱"
create_tool "image" "screenshot-to-pdf.html" "Screenshot to PDF" "Convert screenshots to PDF" "📄"

# SEO Tools
create_tool "seo" "meta-tag-generator.html" "Meta Tag Generator" "Generate HTML meta tags for SEO" "🏷️"
create_tool "seo" "keyword-density.html" "Keyword Density Checker" "Check keyword density in text" "🔍"
create_tool "seo" "sitemap-generator.html" "Sitemap Generator" "Generate XML sitemaps" "🗺️"
create_tool "seo" "robots-generator.html" "Robots.txt Generator" "Generate robots.txt file" "🤖"
create_tool "seo" "google-index-checker.html" "Google Index Checker" "Check if pages are indexed by Google" "🔎"
create_tool "seo" "domain-authority.html" "Domain Authority Checker" "Check domain authority score" "📊"
create_tool "seo" "backlink-checker.html" "Backlink Checker" "Analyze website backlinks" "🔗"
create_tool "seo" "page-speed.html" "Page Speed Checker" "Test website loading speed" "⚡"
create_tool "seo" "sitemap-validator.html" "XML Sitemap Validator" "Validate XML sitemap format" "✅"
create_tool "seo" "mobile-friendly.html" "Mobile-Friendly Test" "Test mobile responsiveness" "📱"

echo "Created basic tool templates. You can now enhance individual tools as needed."
