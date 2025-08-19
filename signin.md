---
layout: default
title: "Sign In - Karmaloop AI"
description: "Sign in to your Karmaloop AI account"
keywords: "Sign In, Login, Karmaloop AI, Account"
---

<style>
    .signin-section {
        min-height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60px 20px;
        background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    }
    
    .signin-container {
        background: var(--card-bg);
        padding: 40px;
        border-radius: 10px;
        width: 100%;
        max-width: 400px;
        text-align: center;
    }
    
    .signin-container h1 {
        margin-bottom: 30px;
        color: var(--text-color);
    }
    
    .form-group {
        margin-bottom: 20px;
        text-align: left;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 8px;
        color: var(--text-color);
    }
    
    .form-group input {
        width: 100%;
        padding: 12px;
        background: var(--secondary-color);
        border: 2px solid var(--border-color);
        border-radius: 4px;
        color: var(--text-color);
        font-size: 1rem;
    }
    
    .form-group input:focus {
        border-color: var(--primary-color);
        outline: none;
    }
    
    .signin-button {
        width: 100%;
        margin-bottom: 20px;
    }
    
    .google-signin {
        width: 100%;
        background: #fff;
        color: #333;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 12px;
        border-radius: 4px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    .google-signin:hover {
        background: #f5f5f5;
    }
    
    .divider {
        display: flex;
        align-items: center;
        text-align: center;
        margin: 20px 0;
        color: var(--text-tertiary);
    }
    
    .divider::before,
    .divider::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid var(--border-color);
    }
    
    .divider span {
        padding: 0 10px;
    }
    
    .forgot-password {
        text-align: center;
        margin-top: 20px;
    }
</style>

<!-- Sign In Section -->
<section class="signin-section">
    <div class="signin-container">
        <h1>Sign In</h1>
        <div class="google-signin">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google Logo" height="18">
            Sign in with Google
        </div>
        
        <div class="divider">
            <span>or</span>
        </div>
        
        <form id="signin-form">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required>
            </div>
            
            <button type="submit" class="button signin-button">Sign In</button>
        </form>
        
        <div class="forgot-password">
            <a href="#">Forgot password?</a>
        </div>
    </div>
</section>