---
layout: default
title: "Kai - AI Voice Agent | Karmaloop AI"
description: "Kai - AI Voice Agent for Sales and Support Calls"
keywords: "AI Voice Agent, Sales Calls, Support Calls, Customer Service, AI Phone Calls"
---

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css">

<style>
    .hero-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        align-items: center;
        margin: 0 auto;
        max-width: 1200px;
    }
    
    .hero-content {
        padding-right: 40px;
    }
    
    .phone-section {
        background: var(--card-bg);
        padding: 40px;
        border-radius: 10px;
        text-align: center;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    
    .phone-input-container {
        max-width: 400px;
        margin: 20px auto;
    }
    
    .iti {
        width: 100%;
        margin-bottom: 20px;
    }
    
    .phone-input {
        width: 100%;
        padding: 12px;
        font-size: 16px;
        border: 2px solid var(--border-color);
        border-radius: 4px;
        background: var(--secondary-color);
        color: var(--text-color);
        margin-bottom: 20px;
    }
    
    .name-input {
        width: 100%;
        padding: 12px;
        font-size: 16px;
        border: 2px solid var(--border-color);
        border-radius: 4px;
        background: var(--secondary-color);
        color: var(--text-color);
        margin-bottom: 20px;
    }
    
    .loading {
        display: none;
        margin-left: 8px;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
    }

    .loading i {
        animation: spin 1s linear infinite;
        color: var(--primary-color);
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    /* IntlTelInput Styles */
    .iti__flag {background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/img/flags.png");}
    @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
        .iti__flag {background-image: url("https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/img/flags@2x.png");}
    }
    .iti {
        width: 100%;
        margin-bottom: 20px;
    }
    .iti__selected-flag {
        background-color: var(--card-bg) !important;
    }
    .iti__country-list {
        background-color: var(--card-bg);
        border: 1px solid var(--border-color);
    }
    .iti__country {
        color: var(--text-color);
    }
    .iti__country:hover {
        background-color: var(--primary-color);
    }

    .feature-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        margin: 60px 0;
    }
    
    .feature-item {
        text-align: center;
        padding: 30px;
    }
    
    .feature-icon {
        font-size: 2.5rem;
        color: var(--primary-color);
        margin-bottom: 20px;
    }

    @media (max-width: 992px) {
        .hero-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .hero-content {
            padding-right: 0;
            text-align: center;
        }
        
        .phone-section {
            margin-top: 20px;
        }
    }

    .hero-section {
        position: relative;
        overflow: hidden;
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('{{ site.baseurl }}/assets/images/hero-plain.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 150px 0 100px;
        min-height: 80vh;
    }
</style>

<!-- Hero Section -->
<section class="hero-section">
    <div class="container">
        <div class="hero-grid">
            <div class="hero-content animate-on-scroll">
                <h1>Meet Kai</h1>
                <div class="typed-text-kai" id="typed-text-kai"></div>
                <p>Your AI voice agent that handles sales and support calls with human-like intelligence</p>
            </div>
            <div class="phone-section animate-on-scroll">
                <h2>Speak with Kai Now</h2>
                <p>Enter your phone number and experience Kai's capabilities firsthand</p>
                <div class="phone-input-container">
                    <input type="tel" id="phone" class="phone-input" placeholder="Enter your phone number">
                    <input type="text" id="name" class="name-input" placeholder="Enter your name">
                    <button class="button" onclick="initiateCall()">Call Me</button>
                    <div class="loading" id="loading">
                        <i class="fas fa-spinner"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Features Section -->
<section class="section">
    <div class="container">
        <div class="feature-grid">
            <div class="feature-item animate-on-scroll">
                <div class="feature-icon">
                    <i class="fas fa-phone-volume"></i>
                </div>
                <h3>24/7 Availability</h3>
                <p>Never miss a call. Kai handles customer inquiries around the clock, ensuring your business is always accessible.</p>
            </div>

            <div class="feature-item animate-on-scroll">
                <div class="feature-icon">
                    <i class="fas fa-chart-line"></i>
                </div>
                <h3>Sales Optimization</h3>
                <p>Convert more leads with Kai's intelligent sales approach, follow-ups, and appointment scheduling.</p>
            </div>

            <div class="feature-item animate-on-scroll">
                <div class="feature-icon">
                    <i class="fas fa-headset"></i>
                </div>
                <h3>Customer Support</h3>
                <p>Provide instant support resolution with Kai's deep understanding of your business and products.</p>
            </div>
        </div>

        <div class="section-header animate-on-scroll">
            <h2>How Kai Works</h2>
            <p>Kai uses advanced AI to handle your calls naturally and efficiently</p>
        </div>

        <div class="feature-grid">
            <div class="feature-item animate-on-scroll">
                <div class="feature-icon">
                    <i class="fas fa-robot"></i>
                </div>
                <h3>Natural Conversations</h3>
                <p>Kai engages in human-like conversations, understanding context and responding appropriately.</p>
            </div>

            <div class="feature-item animate-on-scroll">
                <div class="feature-icon">
                    <i class="fas fa-calendar-check"></i>
                </div>
                <h3>Automated Booking</h3>
                <p>Seamlessly schedule appointments and follow up with customers to ensure attendance.</p>
            </div>

            <div class="feature-item animate-on-scroll">
                <div class="feature-icon">
                    <i class="fas fa-chart-pie"></i>
                </div>
                <h3>Analytics & Insights</h3>
                <p>Get detailed reports on call performance, customer satisfaction, and conversion rates.</p>
            </div>
        </div>
    </div>
</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
<script src="{{ site.baseurl }}/assets/js/typing-effect.js"></script>
<script>
    // Initialize typing effect
    const phrases = [
        'The Clever Way to Close',
        'Smart AI, Seamless Sales',
        '24x7 Customer Support'
    ];
    initTypingEffect('typed-text-kai', phrases);
</script>
<script>
    // Initialize phone input
    const phoneInput = document.querySelector("#phone");
    const nameInput = document.querySelector("#name");
    const iti = window.intlTelInput(phoneInput, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
        separateDialCode: true,
        initialCountry: "auto",
        geoIpLookup: function(callback) {
            fetch("https://ipapi.co/json")
                .then(res => res.json())
                .then(data => callback(data.country_code))
                .catch(() => callback("us"));
        }
    });

    // Add input restrictions for numeric input only
    phoneInput.addEventListener('input', function(e) {
        this.value = this.value.replace(/[^0-9]/g, '');
        if (this.value.length > 10) {
            this.value = this.value.slice(0, 10);
        }
    });

    function initiateCall() {
        const phoneNumber = iti.getNumber();
        const name = nameInput.value.trim();
        if (phoneNumber && phoneNumber.length >= 10 && name) {
            document.getElementById('loading').style.display = 'inline-block';
            
            // Make API call to initiate the call
            fetch('https://europe-west2-karmaloop-ai.cloudfunctions.net/vapi-outbound-call', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customer: {
                        number: phoneNumber,
                        name: name
                    },
                    phoneNumberId: "f11e7e1c-4d09-4e50-8cb0-d636441f7f28",
                    name: "Sales call to " + name
                })
            })
            .then(response => {
                document.getElementById('loading').style.display = 'none';
                if (response.ok) {
                    alert('Great! Kai will call you shortly at ' + phoneNumber);
                } else {
                    alert('Sorry, something went wrong. Please try again later.');
                }
            })
            .catch(error => {
                document.getElementById('loading').style.display = 'none';
                alert('Sorry, something went wrong. Please try again later.');
                console.error('Error:', error);
            });
        } else {
            alert('Please enter a valid 10-digit phone number and your name');
        }
    }
</script>