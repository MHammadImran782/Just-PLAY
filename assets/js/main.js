// Multi-Tools Website Main JavaScript

// Tool data structure
const toolsData = [
    // Image Tools
    { name: "Image to PNG Converter", category: "image", file: "image-to-png.html", description: "Convert any image format to PNG", icon: "🖼️" },
    { name: "Image to JPG Converter", category: "image", file: "image-to-jpg.html", description: "Convert any image format to JPG", icon: "📷" },
    { name: "Image Resizer", category: "image", file: "image-resizer.html", description: "Resize images to custom dimensions", icon: "📐" },
    { name: "Image Compressor", category: "image", file: "image-compressor.html", description: "Compress images to reduce file size", icon: "🗜️" },
    { name: "Image Cropper", category: "image", file: "image-cropper.html", description: "Crop images to desired area", icon: "✂️" },
    { name: "Image to Base64", category: "image", file: "image-to-base64.html", description: "Convert images to Base64 encoding", icon: "🔤" },
    { name: "WebP to PNG", category: "image", file: "webp-to-png.html", description: "Convert WebP images to PNG format", icon: "🔄" },
    { name: "GIF Maker", category: "image", file: "gif-maker.html", description: "Create animated GIFs from images", icon: "🎬" },
    { name: "QR Code Generator", category: "image", file: "qr-generator.html", description: "Generate QR codes for text or URLs", icon: "📱" },
    { name: "Screenshot to PDF", category: "image", file: "screenshot-to-pdf.html", description: "Convert screenshots to PDF", icon: "📄" },

    // SEO Tools
    { name: "Meta Tag Generator", category: "seo", file: "meta-tag-generator.html", description: "Generate HTML meta tags for SEO", icon: "🏷️" },
    { name: "Keyword Density Checker", category: "seo", file: "keyword-density.html", description: "Check keyword density in text", icon: "🔍" },
    { name: "Sitemap Generator", category: "seo", file: "sitemap-generator.html", description: "Generate XML sitemaps", icon: "🗺️" },
    { name: "Robots.txt Generator", category: "seo", file: "robots-generator.html", description: "Generate robots.txt file", icon: "🤖" },
    { name: "Google Index Checker", category: "seo", file: "google-index-checker.html", description: "Check if pages are indexed by Google", icon: "🔎" },
    { name: "Domain Authority Checker", category: "seo", file: "domain-authority.html", description: "Check domain authority score", icon: "📊" },
    { name: "Backlink Checker", category: "seo", file: "backlink-checker.html", description: "Analyze website backlinks", icon: "🔗" },
    { name: "Page Speed Checker", category: "seo", file: "page-speed.html", description: "Test website loading speed", icon: "⚡" },
    { name: "XML Sitemap Validator", category: "seo", file: "sitemap-validator.html", description: "Validate XML sitemap format", icon: "✅" },
    { name: "Mobile-Friendly Test", category: "seo", file: "mobile-friendly.html", description: "Test mobile responsiveness", icon: "📱" },

    // Text Tools
    { name: "Word Counter", category: "text", file: "word-counter.html", description: "Count words, characters, and paragraphs", icon: "📝" },
    { name: "Character Counter", category: "text", file: "character-counter.html", description: "Count characters in text", icon: "🔢" },
    { name: "Case Converter", category: "text", file: "case-converter.html", description: "Convert text case (upper, lower, title)", icon: "🔤" },
    { name: "Plagiarism Checker", category: "text", file: "plagiarism-checker.html", description: "Check text for plagiarism", icon: "🔍" },
    { name: "Grammar Checker", category: "text", file: "grammar-checker.html", description: "Check and correct grammar", icon: "✏️" },
    { name: "Text-to-Speech", category: "text", file: "text-to-speech.html", description: "Convert text to speech", icon: "🔊" },
    { name: "Speech-to-Text", category: "text", file: "speech-to-text.html", description: "Convert speech to text", icon: "🎤" },
    { name: "URL Encoder/Decoder", category: "text", file: "url-encoder.html", description: "Encode and decode URLs", icon: "🔗" },
    { name: "Fancy Text Generator", category: "text", file: "fancy-text.html", description: "Generate stylized text", icon: "✨" },
    { name: "Random Text Generator", category: "text", file: "random-text.html", description: "Generate random text and lorem ipsum", icon: "🎲" },

    // Developer Tools
    { name: "JSON Formatter", category: "developer", file: "json-formatter.html", description: "Format and validate JSON", icon: "📋" },
    { name: "HTML to Markdown", category: "developer", file: "html-to-markdown.html", description: "Convert HTML to Markdown", icon: "📝" },
    { name: "CSS Minifier", category: "developer", file: "css-minifier.html", description: "Minify CSS code", icon: "🗜️" },
    { name: "JavaScript Minifier", category: "developer", file: "js-minifier.html", description: "Minify JavaScript code", icon: "⚡" },
    { name: "SQL Formatter", category: "developer", file: "sql-formatter.html", description: "Format SQL queries", icon: "🗄️" },
    { name: "HTACCESS Generator", category: "developer", file: "htaccess-generator.html", description: "Generate .htaccess redirects", icon: "🔧" },
    { name: "Markdown to HTML", category: "developer", file: "markdown-to-html.html", description: "Convert Markdown to HTML", icon: "📄" },
    { name: "Color Code Picker", category: "developer", file: "color-picker.html", description: "Pick and convert color codes", icon: "🎨" },
    { name: "Base64 Encoder/Decoder", category: "developer", file: "base64-converter.html", description: "Encode and decode Base64", icon: "🔐" },
    { name: "IP Address Lookup", category: "developer", file: "ip-lookup.html", description: "Get IP address information", icon: "🌐" },

    // Math & Calculators
    { name: "Percentage Calculator", category: "calculator", file: "percentage-calculator.html", description: "Calculate percentages", icon: "%" },
    { name: "Age Calculator", category: "calculator", file: "age-calculator.html", description: "Calculate age from birthdate", icon: "🎂" },
    { name: "BMI Calculator", category: "calculator", file: "bmi-calculator.html", description: "Calculate Body Mass Index", icon: "⚖️" },
    { name: "Loan EMI Calculator", category: "calculator", file: "emi-calculator.html", description: "Calculate loan EMI", icon: "💰" },
    { name: "Scientific Calculator", category: "calculator", file: "scientific-calculator.html", description: "Advanced scientific calculator", icon: "🧮" },
    { name: "Discount Calculator", category: "calculator", file: "discount-calculator.html", description: "Calculate discounts and savings", icon: "💸" },
    { name: "Currency Converter", category: "calculator", file: "currency-converter.html", description: "Convert between currencies", icon: "💱" },
    { name: "Time Zone Converter", category: "calculator", file: "timezone-converter.html", description: "Convert between time zones", icon: "🕐" },
    { name: "Binary to Decimal", category: "calculator", file: "binary-converter.html", description: "Convert binary to decimal", icon: "🔢" },
    { name: "Tip Calculator", category: "calculator", file: "tip-calculator.html", description: "Calculate tips and split bills", icon: "🧾" },

    // Unit Converters
    { name: "Length Converter", category: "converter", file: "length-converter.html", description: "Convert length units", icon: "📏" },
    { name: "Weight Converter", category: "converter", file: "weight-converter.html", description: "Convert weight units", icon: "⚖️" },
    { name: "Speed Converter", category: "converter", file: "speed-converter.html", description: "Convert speed units", icon: "🏃" },
    { name: "Temperature Converter", category: "converter", file: "temperature-converter.html", description: "Convert temperature units", icon: "🌡️" },
    { name: "Volume Converter", category: "converter", file: "volume-converter.html", description: "Convert volume units", icon: "🥤" },
    { name: "Data Storage Converter", category: "converter", file: "storage-converter.html", description: "Convert data storage units", icon: "💾" },
    { name: "Energy Converter", category: "converter", file: "energy-converter.html", description: "Convert energy units", icon: "⚡" },
    { name: "Pressure Converter", category: "converter", file: "pressure-converter.html", description: "Convert pressure units", icon: "🌪️" },
    { name: "Fuel Efficiency Converter", category: "converter", file: "fuel-converter.html", description: "Convert fuel efficiency units", icon: "⛽" },
    { name: "Angle Converter", category: "converter", file: "angle-converter.html", description: "Convert angle units", icon: "📐" },

    // Security & Encryption
    { name: "MD5 Hash Generator", category: "security", file: "md5-generator.html", description: "Generate MD5 hash", icon: "🔒" },
    { name: "SHA256 Hash Generator", category: "security", file: "sha256-generator.html", description: "Generate SHA256 hash", icon: "🔐" },
    { name: "Password Generator", category: "security", file: "password-generator.html", description: "Generate secure passwords", icon: "🔑" },
    { name: "Random String Generator", category: "security", file: "random-string.html", description: "Generate random strings", icon: "🎲" },
    { name: "URL Shortener", category: "security", file: "url-shortener.html", description: "Shorten long URLs", icon: "🔗" },
    { name: "IP Geolocation", category: "security", file: "ip-geolocation.html", description: "Find IP location", icon: "🌍" },
    { name: "SSL Certificate Checker", category: "security", file: "ssl-checker.html", description: "Check SSL certificate", icon: "🛡️" },
    { name: "Whois Lookup", category: "security", file: "whois-lookup.html", description: "Domain whois information", icon: "🔍" },
    { name: "HTTP Headers Checker", category: "security", file: "headers-checker.html", description: "Check HTTP headers", icon: "📋" },
    { name: "Privacy Policy Generator", category: "security", file: "privacy-generator.html", description: "Generate privacy policy", icon: "📜" },

    // Social Media Tools
    { name: "YouTube Thumbnail Downloader", category: "social", file: "youtube-thumbnail.html", description: "Download YouTube thumbnails", icon: "📺" },
    { name: "Instagram Photo Downloader", category: "social", file: "instagram-downloader.html", description: "Download Instagram photos", icon: "📸" },
    { name: "Twitter Video Downloader", category: "social", file: "twitter-downloader.html", description: "Download Twitter videos", icon: "🐦" },
    { name: "Facebook Video Downloader", category: "social", file: "facebook-downloader.html", description: "Download Facebook videos", icon: "📘" },
    { name: "TikTok Video Downloader", category: "social", file: "tiktok-downloader.html", description: "Download TikTok videos", icon: "🎵" },
    { name: "YouTube Tags Extractor", category: "social", file: "youtube-tags.html", description: "Extract YouTube video tags", icon: "🏷️" },
    { name: "Hashtag Generator", category: "social", file: "hashtag-generator.html", description: "Generate trending hashtags", icon: "#️⃣" },
    { name: "Social Media Post Generator", category: "social", file: "post-generator.html", description: "Generate social media posts", icon: "📱" },
    { name: "Emoji Keyboard", category: "social", file: "emoji-keyboard.html", description: "Copy and paste emojis", icon: "😀" },
    { name: "Twitter Character Counter", category: "social", file: "twitter-counter.html", description: "Count Twitter characters", icon: "🐦" },

    // Miscellaneous Tools
    { name: "Barcode Generator", category: "misc", file: "barcode-generator.html", description: "Generate barcodes", icon: "📊" },
    { name: "Meme Generator", category: "misc", file: "meme-generator.html", description: "Create memes", icon: "😂" },
    { name: "Resume Builder", category: "misc", file: "resume-builder.html", description: "Build professional resumes", icon: "📄" },
    { name: "Invoice Generator", category: "misc", file: "invoice-generator.html", description: "Generate invoices", icon: "🧾" },
    { name: "Business Name Generator", category: "misc", file: "business-name.html", description: "Generate business names", icon: "🏢" },
    { name: "Lottery Number Generator", category: "misc", file: "lottery-generator.html", description: "Generate lottery numbers", icon: "🎰" },
    { name: "Flip a Coin", category: "misc", file: "coin-flip.html", description: "Flip a virtual coin", icon: "🪙" },
    { name: "Random Number Generator", category: "misc", file: "random-number.html", description: "Generate random numbers", icon: "🎲" },
    { name: "Dice Roller", category: "misc", file: "dice-roller.html", description: "Roll virtual dice", icon: "🎲" },
    { name: "Internet Speed Test", category: "misc", file: "speed-test.html", description: "Test internet speed", icon: "📶" },
    { name: "Daily Planner", category: "misc", file: "daily-planner.html", description: "Plan your daily tasks", icon: "📅" },
    { name: "Wedding Invitation Generator", category: "misc", file: "wedding-invitation.html", description: "Create wedding invitations", icon: "💒" },
    { name: "Story Plot Generator", category: "misc", file: "story-generator.html", description: "Generate story plots", icon: "📚" },
    { name: "E-book Creator", category: "misc", file: "ebook-creator.html", description: "Create digital e-books", icon: "📖" },
    { name: "AI Chatbot Demo", category: "misc", file: "chatbot-demo.html", description: "Demo AI chatbot", icon: "🤖" },
    { name: "IP Address Tracker", category: "misc", file: "ip-tracker.html", description: "Track IP addresses", icon: "🌐" },
    { name: "Fake Address Generator", category: "misc", file: "fake-address.html", description: "Generate fake addresses", icon: "🏠" },
    { name: "Electric Bill Calculator", category: "misc", file: "electric-calculator.html", description: "Calculate electricity bills", icon: "⚡" },
    { name: "Leap Year Checker", category: "misc", file: "leap-year.html", description: "Check if year is leap year", icon: "📅" },
    { name: "Numerology Calculator", category: "misc", file: "numerology.html", description: "Calculate name numerology", icon: "🔢" }
];

// Category information
const categories = {
    image: { name: "Image Tools", icon: "🖼️", color: "#e74c3c" },
    seo: { name: "SEO Tools", icon: "🔍", color: "#3498db" },
    text: { name: "Text Tools", icon: "📝", color: "#2ecc71" },
    developer: { name: "Developer Tools", icon: "💻", color: "#9b59b6" },
    calculator: { name: "Calculators", icon: "🧮", color: "#f39c12" },
    converter: { name: "Unit Converters", icon: "🔄", color: "#1abc9c" },
    security: { name: "Security Tools", icon: "🔒", color: "#e67e22" },
    social: { name: "Social Media", icon: "📱", color: "#e91e63" },
    misc: { name: "Miscellaneous", icon: "🛠️", color: "#607d8b" }
};

// DOM manipulation utilities
const DOM = {
    get: (selector) => document.querySelector(selector),
    getAll: (selector) => document.querySelectorAll(selector),
    create: (tag, attributes = {}, content = '') => {
        const element = document.createElement(tag);
        Object.entries(attributes).forEach(([key, value]) => {
            if (key === 'className') {
                element.className = value;
            } else {
                element.setAttribute(key, value);
            }
        });
        if (content) element.innerHTML = content;
        return element;
    }
};

// Load header and footer dynamically
function loadComponents() {
    loadHeader();
    loadFooter();
}

function loadHeader() {
    const headerPlaceholder = DOM.get('#header-placeholder');
    if (headerPlaceholder) {
        fetch('components/header.html')
            .then(response => response.text())
            .then(html => {
                headerPlaceholder.innerHTML = html;
                initializeSearch();
            })
            .catch(() => {
                // Fallback header if file doesn't exist
                headerPlaceholder.innerHTML = `
                    <header class="header">
                        <div class="container">
                            <nav class="navbar">
                                <a href="index.html" class="navbar-brand">🛠️ Multi-Tools</a>
                                <ul class="navbar-nav">
                                    <li><a href="index.html" class="nav-link">Home</a></li>
                                    <li><a href="#image" class="nav-link">Image Tools</a></li>
                                    <li><a href="#seo" class="nav-link">SEO Tools</a></li>
                                    <li><a href="#text" class="nav-link">Text Tools</a></li>
                                    <li><a href="#developer" class="nav-link">Developer</a></li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                `;
                initializeSearch();
            });
    }
}

function loadFooter() {
    const footerPlaceholder = DOM.get('#footer-placeholder');
    if (footerPlaceholder) {
        fetch('components/footer.html')
            .then(response => response.text())
            .then(html => {
                footerPlaceholder.innerHTML = html;
            })
            .catch(() => {
                // Fallback footer if file doesn't exist
                footerPlaceholder.innerHTML = `
                    <footer class="footer">
                        <div class="container">
                            <div class="footer-content">
                                <div class="footer-section">
                                    <h4>Quick Links</h4>
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="#about">About</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                        <li><a href="#privacy">Privacy Policy</a></li>
                                    </ul>
                                </div>
                                <div class="footer-section">
                                    <h4>Popular Tools</h4>
                                    <ul>
                                        <li><a href="tools/image/image-to-png.html">Image to PNG</a></li>
                                        <li><a href="tools/text/word-counter.html">Word Counter</a></li>
                                        <li><a href="tools/calculator/percentage-calculator.html">Percentage Calculator</a></li>
                                        <li><a href="tools/developer/json-formatter.html">JSON Formatter</a></li>
                                    </ul>
                                </div>
                                <div class="footer-section">
                                    <h4>Follow Us</h4>
                                    <ul>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Twitter</a></li>
                                        <li><a href="#">LinkedIn</a></li>
                                        <li><a href="#">GitHub</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="footer-bottom">
                                <p>&copy; ${new Date().getFullYear()} Multi-Tools Website. All rights reserved.</p>
                            </div>
                        </div>
                    </footer>
                `;
            });
    }
}

// Search functionality
function initializeSearch() {
    const searchInput = DOM.get('#search-input');
    const searchBtn = DOM.get('#search-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                handleSearch();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
}

function handleSearch() {
    const query = DOM.get('#search-input')?.value.toLowerCase().trim();
    if (!query) {
        showAllTools();
        return;
    }
    
    const filteredTools = toolsData.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query)
    );
    
    displaySearchResults(filteredTools, query);
}

function displaySearchResults(tools, query) {
    const toolsContainer = DOM.get('#tools-container');
    if (!toolsContainer) return;
    
    if (tools.length === 0) {
        toolsContainer.innerHTML = `
            <div class="col-12 text-center">
                <div class="card">
                    <div class="card-body">
                        <h3>No tools found</h3>
                        <p>No tools match your search for "${query}". Try a different search term.</p>
                    </div>
                </div>
            </div>
        `;
        return;
    }
    
    toolsContainer.innerHTML = `
        <div class="col-12 mb-4">
            <h2>Search Results for "${query}" (${tools.length} tools found)</h2>
        </div>
        ${tools.map(tool => createToolCard(tool)).join('')}
    `;
}

function showAllTools() {
    renderToolsByCategory();
}

// Tool rendering functions
function renderToolsByCategory() {
    const toolsContainer = DOM.get('#tools-container');
    if (!toolsContainer) return;
    
    let html = '';
    
    Object.entries(categories).forEach(([categoryKey, categoryInfo]) => {
        const categoryTools = toolsData.filter(tool => tool.category === categoryKey);
        if (categoryTools.length > 0) {
            html += `
                <div class="col-12 mb-4" id="${categoryKey}">
                    <div class="card">
                        <div class="card-header">
                            <h2>${categoryInfo.icon} ${categoryInfo.name}</h2>
                        </div>
                    </div>
                </div>
                ${categoryTools.map(tool => createToolCard(tool)).join('')}
            `;
        }
    });
    
    toolsContainer.innerHTML = html;
}

function createToolCard(tool) {
    const categoryInfo = categories[tool.category];
    return `
        <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
            <a href="tools/${tool.category}/${tool.file}" class="tool-card">
                <div class="tool-category" style="background-color: ${categoryInfo.color}">
                    ${categoryInfo.name}
                </div>
                <div class="tool-icon">${tool.icon}</div>
                <div class="tool-title">${tool.name}</div>
                <div class="tool-description">${tool.description}</div>
            </a>
        </div>
    `;
}

// Utility functions
function showAlert(message, type = 'info') {
    const alertContainer = DOM.get('#alert-container') || document.body;
    const alert = DOM.create('div', {
        className: `alert alert-${type}`,
        role: 'alert'
    }, message);
    
    alertContainer.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 5000);
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text)
            .then(() => showAlert('Copied to clipboard!', 'success'))
            .catch(() => fallbackCopyToClipboard(text));
    } else {
        fallbackCopyToClipboard(text);
    }
}

function fallbackCopyToClipboard(text) {
    const textArea = DOM.create('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showAlert('Copied to clipboard!', 'success');
    } catch (err) {
        showAlert('Failed to copy to clipboard', 'danger');
    }
    
    document.body.removeChild(textArea);
}

function downloadFile(content, filename, contentType = 'text/plain') {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const link = DOM.create('a', { href: url, download: filename });
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validateURL(url) {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadComponents();
    
    // If we're on the home page, render tools
    if (DOM.get('#tools-container')) {
        renderToolsByCategory();
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Export functions for use in tool pages
window.MultiTools = {
    showAlert,
    copyToClipboard,
    downloadFile,
    formatFileSize,
    validateEmail,
    validateURL,
    DOM
};