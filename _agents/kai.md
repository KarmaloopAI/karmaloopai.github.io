---
layout: default
title: "Kai - AI Voice Agent | Karmaloop AI"
description: "Kai - AI Voice Agent for Sales and Support Calls"
keywords: "AI Voice Agent, Sales Calls, Support Calls, Customer Service, AI Phone Calls"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css">

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
                    <h2>📞 Experience Kai Live</h2>
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

.input-group input:focus {
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

.iti {
    width: 100%;
    position: relative;
}

.iti__selected-flag {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: 12px 0 0 12px;
    padding: 1rem 0.8rem;
    transition: all var(--transition-speed) var(--transition-smooth);
}

.iti__selected-flag:hover {
    background: rgba(255, 255, 255, 0.08);
}

.iti__arrow {
    border-top-color: var(--text-secondary);
}

.iti__country-list {
    background: var(--bg-glass);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 1000;
}

.iti__country {
    color: var(--text-primary);
    padding: 0.8rem 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.iti__country:hover {
    background: rgba(139, 92, 246, 0.1);
}

.iti__country.iti__highlight {
    background: rgba(139, 92, 246, 0.2);
}

.iti__country-name {
    color: var(--text-primary);
}

.iti__dial-code {
    color: var(--text-secondary);
}

.iti input[type=tel] {
    border-left: none;
    border-radius: 0 12px 12px 0;
    padding-left: 1rem;
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
    initTypingEffect('typed-text-kai', phrases);
    initPhoneInput();
});

// Demo call flow variables
let currentStep = 1;
let userPhoneNumber = '';
let userFirstName = '';
let userLastName = '';
let phoneInputInstance = null;

// Supabase edge function endpoint
const DEMO_CALL_ENDPOINT = 'https://bxmwvpdlzkttabpxcajt.supabase.co/functions/v1/demo-call';

// Initialize international phone input
function initPhoneInput() {
    const phoneInput = document.getElementById('phoneInput');
    phoneInputInstance = window.intlTelInput(phoneInput, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        separateDialCode: false,
        initialCountry: "auto",
        preferredCountries: ["us", "gb", "ca", "au"],
        geoIpLookup: function(callback) {
            fetch("https://ipapi.co/json")
                .then(res => res.json())
                .then(data => callback(data.country_code))
                .catch(() => callback("us"));
        }
    });
    
    // Add numeric input restriction
    phoneInput.addEventListener('input', function(e) {
        // Allow only numbers, plus, minus, parentheses, and spaces
        this.value = this.value.replace(/[^0-9\+\-\(\)\s]/g, '');
    });
}

// Step 1: Request OTP
async function requestOTP() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    
    // Get the full international phone number from intl-tel-input
    if (!phoneInputInstance) {
        alert('Phone input not initialized. Please refresh the page.');
        return;
    }
    
    const phoneNumber = phoneInputInstance.getNumber();
    
    // Basic validation
    if (!firstName || !lastName) {
        alert('Please fill in your first and last name');
        return;
    }
    
    // Validate phone number using intl-tel-input validation
    if (!phoneInputInstance.isValidNumber()) {
        alert('Please enter a valid phone number');
        return;
    }
    
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