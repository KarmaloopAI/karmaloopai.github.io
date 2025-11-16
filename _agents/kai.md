---
layout: default
title: "Kai - AI Voice Agent | Karmaloop AI"
description: "Kai - AI Voice Agent for Sales and Support Calls"
keywords: "AI Voice Agent, Sales Calls, Support Calls, Customer Service, AI Phone Calls"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.8/build/css/intlTelInput.css">

<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <div class="kai-hero-grid">
            <div class="hero-content animate-on-scroll">
                <h1>Meet Kai</h1>
                <div class="typed-text-kai" id="typed-text-kai"></div>
                <p>Your AI voice agent that handles sales and support calls with human-like intelligence. Experience the future of customer communication.</p>
            </div>
            <div class="demo-call-section animate-on-scroll">
                <div class="demo-call-card">
                    <h2>Experience Kai Live</h2>
                    <p>Get a personalized demo call and see how Kai can transform your business communication</p>
                    
                    <div class="demo-call-form" id="demoForm">
                        <!-- Step 1: Contact Info -->
                        <div class="form-step" id="step1">
                            <div class="input-group">
                                <input type="text" id="firstName" placeholder="First Name" required>
                            </div>
                            <div class="input-group">
                                <input type="text" id="lastName" placeholder="Last Name" required>
                            </div>
                            <div class="input-group phone-input-group">
                                <input type="tel" id="phoneInput" placeholder="Phone Number" required>
                            </div>
                            <button class="demo-button" onclick="requestOTP()" id="requestOTPBtn">
                                <span class="btn-text">Send Demo Code</span>
                                <span class="btn-loading" style="display: none;">
                                    <i class="fas fa-spinner fa-spin"></i> Sending...
                                </span>
                            </button>
                        </div>
                        
                        <!-- Step 2: OTP Verification -->
                        <div class="form-step" id="step2" style="display: none;">
                            <div class="otp-header">
                                <h3>📱 Check Your Phone</h3>
                                <p>Enter the 6-digit code we sent to <span id="phoneDisplay"></span></p>
                            </div>
                            <div class="input-group">
                                <input type="text" id="otpInput" placeholder="000000" maxlength="6" pattern="[0-9]*">
                            </div>
                            <button class="demo-button" onclick="verifyAndCall()" id="verifyCallBtn">
                                <span class="btn-text">Start Demo Call</span>
                                <span class="btn-loading" style="display: none;">
                                    <i class="fas fa-spinner fa-spin"></i> Connecting...
                                </span>
                            </button>
                            <button class="link-button" onclick="goBackToStep1()">
                                <i class="fas fa-arrow-left"></i> Change Phone Number
                            </button>
                        </div>
                        
                        <!-- Success Message -->
                        <div class="form-step success-message" id="successStep" style="display: none;">
                            <div class="success-icon">
                                <i class="fas fa-phone-alt"></i>
                            </div>
                            <h3>🎉 Demo Call Initiated!</h3>
                            <p>Kai will call you at <span id="successPhone"></span> within the next 30 seconds. Get ready for an amazing conversation!</p>
                            <button class="link-button" onclick="resetForm()">Schedule Another Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section class="section">
    <div class="container">
        <div class="section-header animate-on-scroll">
            <h2>Why Choose Kai?</h2>
            <p>Transform your business communication with AI-powered voice intelligence</p>
        </div>
        
        <div class="features-grid animate-on-scroll">
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-phone-volume"></i>
                </div>
                <h3>24/7 Availability</h3>
                <p>Never miss a call. Kai handles customer inquiries around the clock, ensuring your business is always accessible to prospects and customers.</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-chart-line"></i>
                </div>
                <h3>Sales Optimization</h3>
                <p>Convert more leads with Kai's intelligent sales approach, automated follow-ups, and seamless appointment scheduling capabilities.</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-headset"></i>
                </div>
                <h3>Customer Support</h3>
                <p>Provide instant support resolution with Kai's deep understanding of your business, products, and customer service protocols.</p>
            </div>
        </div>
    </div>
</section>

<!-- How It Works Section -->
<section class="section">
    <div class="container">
        <div class="section-header animate-on-scroll">
            <h2>How Kai Works</h2>
            <p>Sophisticated AI technology that delivers human-like conversation experiences</p>
        </div>

        <div class="features-grid animate-on-scroll">
            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-robot"></i>
                </div>
                <h3>Natural Conversations</h3>
                <p>Kai engages in human-like conversations, understanding context, handling interruptions, and responding with emotional intelligence.</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-calendar-check"></i>
                </div>
                <h3>Smart Scheduling</h3>
                <p>Seamlessly schedule appointments, send reminders, and follow up with customers to ensure maximum attendance and engagement.</p>
            </div>

            <div class="feature-card">
                <div class="feature-icon">
                    <i class="fas fa-chart-pie"></i>
                </div>
                <h3>Analytics & Insights</h3>
                <p>Get detailed reports on call performance, customer satisfaction, conversion rates, and actionable insights to improve your strategy.</p>
            </div>
        </div>
    </div>
</section>

<style>
/* Kai Page Specific Styles */
.kai-hero-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    max-width: 1400px;
    margin: 0 auto;
}

.demo-call-section {
    position: relative;
    z-index: 10;
}

.demo-call-card {
    background: var(--bg-glass);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 24px;
    padding: 3rem;
    text-align: center;
    position: relative;
    overflow: hidden;
}

.demo-call-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
        radial-gradient(circle at 30% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
}

.demo-call-card h2 {
    color: var(--text-primary);
    font-size: 1.8rem;
    margin-bottom: 1rem;
}

.demo-call-card > p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
}

.demo-call-form {
    position: relative;
    z-index: 1;
}

.form-step {
    animation: fadeIn 0.3s ease-in-out;
}

.input-group {
    margin-bottom: 1.5rem;
    position: relative;
}

.input-group input {
    width: 100%;
    padding: 1rem 1.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    color: var(--text-primary);
    font-size: 1rem;
    transition: all var(--transition-speed) var(--transition-smooth);
    box-sizing: border-box;
}

.input-group input:not(.iti input):focus {
    outline: none;
    border-color: var(--accent-purple);
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
    background: rgba(255, 255, 255, 0.08);
}

.input-group input::placeholder {
    color: var(--text-secondary);
}

/* International Phone Input Styling */
.phone-input-group {
    position: relative;
}

.phone-input-group .iti {
    width: 100% !important;
    position: relative !important;
    display: block !important;
}

.phone-input-group .iti__selected-flag {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    z-index: 2 !important;
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid var(--glass-border) !important;
    border-radius: 12px 0 0 12px !important;
    border-right: none !important;
    padding: 0 0.8rem !important;
    transition: all var(--transition-speed) var(--transition-smooth) !important;
    height: 56px !important;
    min-height: 56px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    width: 60px !important;
    min-width: 60px !important;
    max-width: 60px !important;
    box-sizing: border-box !important;
}

.phone-input-group .iti__selected-flag:hover {
    background: rgba(255, 255, 255, 0.08) !important;
}

.phone-input-group .iti__flag-container {
    height: 56px !important;
    display: flex !important;
    align-items: center !important;
}

.phone-input-group .iti__arrow {
    border-top-color: var(--text-secondary) !important;
    margin-left: 6px !important;
    border-top: 5px solid var(--text-secondary) !important;
    border-left: 3px solid transparent !important;
    border-right: 3px solid transparent !important;
    border-bottom: none !important;
}

.phone-input-group .iti__country-list {
    background: var(--bg-glass) !important;
    backdrop-filter: blur(var(--glass-blur)) !important;
    border: 1px solid var(--glass-border) !important;
    border-radius: 12px !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
    z-index: 1000 !important;
    max-height: 200px !important;
    overflow-y: auto !important;
    margin-top: 2px !important;
}

.phone-input-group .iti__country {
    color: var(--text-primary) !important;
    padding: 0.8rem 1rem !important;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
}

.phone-input-group .iti__country:hover {
    background: rgba(139, 92, 246, 0.1) !important;
}

.phone-input-group .iti__country.iti__highlight {
    background: rgba(139, 92, 246, 0.2) !important;
}

.phone-input-group .iti__country-name {
    color: var(--text-primary) !important;
}

.phone-input-group .iti__dial-code {
    color: var(--text-secondary) !important;
}

.phone-input-group .iti input[type=tel] {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid var(--glass-border) !important;
    border-radius: 0 12px 12px 0 !important;
    color: var(--text-primary) !important;
    height: 56px !important;
    min-height: 56px !important;
    padding: 0 1.5rem !important;
    padding-left: 70px !important;
    font-size: 1rem !important;
    width: 100% !important;
    box-sizing: border-box !important;
    margin: 0 !important;
}

.phone-input-group .iti input[type=tel]:focus {
    outline: none !important;
    border-color: var(--accent-purple) !important;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1) !important;
    background: rgba(255, 255, 255, 0.08) !important;
}

.phone-input-group .iti input[type=tel]::placeholder {
    color: var(--text-secondary) !important;
}

/* Focus state for the entire phone input */
.phone-input-group .iti:focus-within .iti__selected-flag {
    border-color: var(--accent-purple) !important;
    background: rgba(255, 255, 255, 0.08) !important;
}

/* IntlTelInput Flag Images */
.iti__flag {
    background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/img/flags.png");
}

@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    .iti__flag {
        background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/img/flags@2x.png");
    }
}

#otpInput {
    font-family: 'SF Mono', 'Monaco', 'Consolas', monospace;
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 0.5rem;
    font-weight: 600;
}

.demo-button {
    width: 100%;
    padding: 1rem 2rem;
    background: var(--accent-gradient);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all var(--transition-speed) var(--transition-smooth);
    position: relative;
    overflow: hidden;
}

.demo-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
}

.demo-button:active {
    transform: translateY(0);
}

.demo-button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
}

.link-button {
    background: none;
    border: none;
    color: var(--accent-purple);
    cursor: pointer;
    font-size: 0.9rem;
    margin-top: 1rem;
    padding: 0.5rem;
    transition: all var(--transition-speed) var(--transition-smooth);
}

.link-button:hover {
    color: var(--accent-blue);
}

.otp-header {
    margin-bottom: 2rem;
}

.otp-header h3 {
    color: var(--text-primary);
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
}

.otp-header p {
    color: var(--text-secondary);
    font-size: 0.95rem;
}

#phoneDisplay {
    color: var(--accent-purple);
    font-weight: 600;
}

.success-message {
    text-align: center;
    padding: 2rem 0;
}

.success-icon {
    font-size: 3rem;
    color: var(--accent-purple);
    margin-bottom: 1.5rem;
    animation: bounce 1s ease-in-out;
}

.success-message h3 {
    color: var(--text-primary);
    font-size: 1.6rem;
    margin-bottom: 1rem;
}

.success-message p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 2rem;
}

#successPhone {
    color: var(--accent-purple);
    font-weight: 600;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-20px);
    }
    60% {
        transform: translateY(-10px);
    }
}

/* Responsive Design */
@media (max-width: 768px) {
    .kai-hero-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .demo-call-card {
        padding: 2rem;
    }
    
    .demo-call-card h2 {
        font-size: 1.5rem;
    }
}
</style>

<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/intl-tel-input@17.0.8/build/js/intlTelInput.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/typing-effect.js"></script>
<script>
// Initialize typing effect
const phrases = [
    'The Clever Way to Close',
    'Smart AI, Seamless Sales',
    '24x7 Customer Support',
    'Natural Voice Intelligence'
];

// Initialize typing effect when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded');
    initTypingEffect('typed-text-kai', phrases);
    
    // Try multiple times to ensure library loads
    let attempts = 0;
    const maxAttempts = 10;
    
    function tryInitPhone() {
        attempts++;
        console.log(`Phone init attempt ${attempts}`);
        
        if (window.intlTelInput) {
            initPhoneInput();
        } else if (attempts < maxAttempts) {
            console.log('Library not ready, retrying...');
            setTimeout(tryInitPhone, 200 * attempts); // Exponential backoff
        } else {
            console.error('Failed to load intl-tel-input after all attempts');
            // Set fallback placeholder
            const phoneInput = document.getElementById('phoneInput');
            if (phoneInput) {
                phoneInput.placeholder = 'Phone Number (e.g. +1 234 567 8900)';
            }
        }
    }
    
    // Start trying immediately
    tryInitPhone();
});

// Also try when window loads
window.addEventListener('load', function() {
    console.log('Window loaded');
    if (!phoneInputInstance) {
        setTimeout(() => {
            initPhoneInput();
        }, 1000);
    }
});

// Debug function to check what's happening
function debugPhone() {
    console.log('=== Phone Input Debug ===');
    console.log('window.intlTelInput:', !!window.intlTelInput);
    console.log('phoneInputInstance:', phoneInputInstance);
    
    const phoneInput = document.getElementById('phoneInput');
    console.log('Phone input element:', phoneInput);
    console.log('Phone input value:', phoneInput ? phoneInput.value : 'N/A');
    console.log('Phone input classes:', phoneInput ? phoneInput.className : 'N/A');
    console.log('Parent element classes:', phoneInput ? phoneInput.parentElement.className : 'N/A');
    
    // Check if the intl-tel-input wrapper exists
    const itiWrapper = document.querySelector('.iti');
    console.log('ITI wrapper found:', !!itiWrapper);
    
    if (itiWrapper) {
        console.log('ITI wrapper classes:', itiWrapper.className);
        console.log('ITI wrapper children:', itiWrapper.children.length);
    }
    
    // Try to re-initialize
    if (window.intlTelInput && phoneInput && !phoneInputInstance) {
        console.log('Attempting manual initialization...');
        initPhoneInput();
    }
    
    alert('Debug info logged to console. Press F12 to see details.');
}
let currentStep = 1;
let userPhoneNumber = '';
let userFirstName = '';
let userLastName = '';
let phoneInputInstance = null;

// Supabase edge function endpoint
const DEMO_CALL_ENDPOINT = 'https://ixeqedgrusamxwsvwoho.supabase.co/functions/v1/demo-call';

// Initialize international phone input
function initPhoneInput() {
    console.log('initPhoneInput called');
    
    const phoneInput = document.getElementById('phoneInput');
    if (!phoneInput) {
        console.error('Phone input element not found');
        return;
    }
    
    console.log('Phone input found:', phoneInput);
    
    // Check if intl-tel-input is loaded
    if (!window.intlTelInput) {
        console.error('intl-tel-input library not loaded, attempting to load...');
        
        // Try to reload the script
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js';
        script.onload = function() {
            console.log('intl-tel-input loaded via dynamic script, retrying initialization');
            setTimeout(() => initPhoneInput(), 200);
        };
        script.onerror = function() {
            console.error('Failed to load intl-tel-input script');
        };
        document.head.appendChild(script);
        return;
    }
    
    console.log('intl-tel-input library found, initializing...');
    
    try {
        // Destroy existing instance if it exists
        if (phoneInputInstance && phoneInputInstance.destroy) {
            phoneInputInstance.destroy();
        }
        
        phoneInputInstance = window.intlTelInput(phoneInput, {
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
            separateDialCode: false,
            initialCountry: "us", // Start with US as default
            preferredCountries: ["us", "gb", "ca", "au"],
            autoPlaceholder: "aggressive",
            formatOnDisplay: true,
            nationalMode: true,
            geoIpLookup: function(callback) {
                console.log('Attempting geolocation lookup...');
                fetch("https://ipapi.co/json")
                    .then(res => res.json())
                    .then(data => {
                        console.log('Detected country:', data.country_code);
                        callback(data.country_code.toLowerCase());
                    })
                    .catch((error) => {
                        console.log('Geolocation failed:', error, 'defaulting to US');
                        callback("us");
                    });
            }
        });
        
        console.log('Phone input initialized successfully:', phoneInputInstance);
        
        // Force re-render
        setTimeout(() => {
            if (phoneInputInstance && phoneInputInstance.setCountry) {
                phoneInputInstance.setCountry('us');
                console.log('Country set to US');
            }
        }, 500);
        
        // Add numeric input restriction
        phoneInput.addEventListener('input', function(e) {
            console.log('Phone input changed:', e.target.value);
        });
        
    } catch (error) {
        console.error('Error initializing phone input:', error);
        
        // Fallback: just show a regular input
        phoneInput.placeholder = 'Enter your phone number (e.g. +1 234 567 8900)';
    }
}

// Step 1: Request OTP
async function requestOTP() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    
    let phoneNumber;
    
    // Try to get phone number from intl-tel-input if available
    if (phoneInputInstance && phoneInputInstance.getNumber) {
        try {
            phoneNumber = phoneInputInstance.getNumber();
            console.log('Got phone from intl-tel-input:', phoneNumber);
            
            // Validate using intl-tel-input if possible
            if (phoneInputInstance.isValidNumber && !phoneInputInstance.isValidNumber()) {
                alert('Please enter a valid phone number');
                return;
            }
        } catch (error) {
            console.error('Error getting phone from intl-tel-input:', error);
            phoneNumber = document.getElementById('phoneInput').value.trim();
        }
    } else {
        // Fallback: get raw value and do basic validation
        phoneNumber = document.getElementById('phoneInput').value.trim();
        console.log('Got phone from raw input:', phoneNumber);
        
        // Basic phone number validation for fallback
        const cleanPhone = phoneNumber.replace(/\D/g, '');
        if (cleanPhone.length < 10) {
            alert('Please enter a valid phone number with at least 10 digits');
            return;
        }
        
        // Format for international use
        if (!phoneNumber.startsWith('+')) {
            if (cleanPhone.length === 10) {
                phoneNumber = '+1' + cleanPhone; // Assume US
            } else if (cleanPhone.length === 11 && cleanPhone.startsWith('1')) {
                phoneNumber = '+' + cleanPhone;
            } else {
                phoneNumber = '+' + cleanPhone;
            }
        }
    }
    
    // Basic validation
    if (!firstName || !lastName) {
        alert('Please fill in your first and last name');
        return;
    }
    
    if (!phoneNumber || phoneNumber.length < 10) {
        alert('Please enter a valid phone number');
        return;
    }
    
    console.log('Final phone number:', phoneNumber);
    
    // Store user data
    userFirstName = firstName;
    userLastName = lastName;
    userPhoneNumber = phoneNumber;
    
    // Update UI
    const btn = document.getElementById('requestOTPBtn');
    btn.disabled = true;
    btn.querySelector('.btn-text').style.display = 'none';
    btn.querySelector('.btn-loading').style.display = 'inline';
    
    try {
        const response = await fetch(DEMO_CALL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: userPhoneNumber,
                firstName: userFirstName,
                lastName: userLastName
            })
        });
        
        const data = await response.json();
        
        if (data.success && data.otpSent) {
            // Move to step 2
            document.getElementById('step1').style.display = 'none';
            document.getElementById('step2').style.display = 'block';
            document.getElementById('phoneDisplay').textContent = userPhoneNumber;
            document.getElementById('otpInput').focus();
            currentStep = 2;
        } else {
            throw new Error(data.error || 'Failed to send OTP');
        }
        
    } catch (error) {
        console.error('Error requesting OTP:', error);
        alert('Sorry, something went wrong. Please try again later.');
    } finally {
        // Reset button
        btn.disabled = false;
        btn.querySelector('.btn-text').style.display = 'inline';
        btn.querySelector('.btn-loading').style.display = 'none';
    }
}

// Step 2: Verify OTP and initiate call
async function verifyAndCall() {
    const otp = document.getElementById('otpInput').value.trim();
    
    if (!otp || otp.length !== 6 || !/^\d+$/.test(otp)) {
        alert('Please enter the 6-digit code from your SMS');
        return;
    }
    
    // Update UI
    const btn = document.getElementById('verifyCallBtn');
    btn.disabled = true;
    btn.querySelector('.btn-text').style.display = 'none';
    btn.querySelector('.btn-loading').style.display = 'inline';
    
    try {
        const response = await fetch(DEMO_CALL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                phoneNumber: userPhoneNumber,
                firstName: userFirstName,
                lastName: userLastName,
                otp: otp
            })
        });
        
        const data = await response.json();
        
        if (data.success) {
            // Show success message
            document.getElementById('step2').style.display = 'none';
            document.getElementById('successStep').style.display = 'block';
            document.getElementById('successPhone').textContent = userPhoneNumber;
            currentStep = 3;
        } else {
            if (data.error.includes('Invalid OTP')) {
                alert(`Invalid code. ${data.attemptsRemaining ? `${data.attemptsRemaining} attempts remaining.` : 'Please try again.'}`);
            } else if (data.error.includes('expired')) {
                alert('Code has expired. Please request a new one.');
                goBackToStep1();
            } else {
                throw new Error(data.error);
            }
        }
        
    } catch (error) {
        console.error('Error verifying OTP:', error);
        alert('Sorry, something went wrong. Please try again.');
    } finally {
        // Reset button
        btn.disabled = false;
        btn.querySelector('.btn-text').style.display = 'inline';
        btn.querySelector('.btn-loading').style.display = 'none';
    }
}

// Go back to step 1
function goBackToStep1() {
    document.getElementById('step2').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
    document.getElementById('otpInput').value = '';
    currentStep = 1;
}

// Reset form
function resetForm() {
    document.getElementById('successStep').style.display = 'none';
    document.getElementById('step1').style.display = 'block';
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phoneInput').value = '';
    document.getElementById('otpInput').value = '';
    currentStep = 1;
    userPhoneNumber = '';
    userFirstName = '';
    userLastName = '';
}

// Handle Enter key presses
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        if (currentStep === 1) {
            requestOTP();
        } else if (currentStep === 2) {
            verifyAndCall();
        }
    }
});

// Auto-submit OTP when 6 digits entered
document.getElementById('otpInput').addEventListener('input', function(e) {
    const value = e.target.value.replace(/\D/g, '');
    e.target.value = value;
    
    if (value.length === 6) {
        setTimeout(() => verifyAndCall(), 500);
    }
});
</script>