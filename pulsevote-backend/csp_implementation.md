# CSP (Content Security Policy) Implementation with Helmet.js

## What is Helmet.js?

Helmet.js is a collection of security middleware for Express.js applications that helps protect against common web vulnerabilities by setting various HTTP security headers.

### Default Helmet Features:
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking attacks
- **X-XSS-Protection**: Enables XSS filtering in browsers
- **Strict-Transport-Security**: Enforces HTTPS connections
- **Referrer-Policy**: Controls referrer information
- **Content-Security-Policy**: Controls resource loading (our focus)

## CSP Implementation

### Backend Configuration (app.js):
```javascript
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],                    // Default: only same origin
      scriptSrc: ["'self'", "https://apis.google.com"],  // Scripts: self + Google APIs
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],  // Styles: self + inline + Google Fonts
      fontSrc: ["'self'", "https://fonts.gstatic.com"],  // Fonts: self + Google Fonts
      imgSrc: ["'self'", "data:"],              // Images: self + data URIs
      connectSrc: ["'self'", "https://localhost:5000"],  // AJAX: self + our API
      objectSrc: ["'none'"],                    // No objects/embeds allowed
      upgradeInsecureRequests: []               // Upgrade HTTP to HTTPS
    },
  })
);
```

### What This CSP Policy Does:

1. **defaultSrc: ["'self'"]**
   - Only allows resources from the same origin by default
   - Prevents loading of external resources unless explicitly allowed

2. **scriptSrc: ["'self'", "https://apis.google.com"]**
   - Allows scripts from same origin
   - Allows scripts from Google APIs (for future integrations)
   - Blocks all other external scripts

3. **styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"]**
   - Allows styles from same origin
   - Allows inline styles (needed for React/Vite)
   - Allows Google Fonts stylesheets

4. **fontSrc: ["'self'", "https://fonts.gstatic.com"]**
   - Allows fonts from same origin
   - Allows Google Fonts

5. **imgSrc: ["'self'", "data:"]**
   - Allows images from same origin
   - Allows data URIs (base64 encoded images)

6. **connectSrc: ["'self'", "https://localhost:5000"]**
   - Allows AJAX requests to same origin
   - Allows requests to our API server
   - Blocks requests to other external APIs

7. **objectSrc: ["'none']**
   - Completely blocks `<object>`, `<embed>`, and `<applet>` elements
   - Prevents Flash and other plugin-based attacks

8. **upgradeInsecureRequests: []**
   - Automatically upgrades HTTP requests to HTTPS
   - Prevents mixed content issues

## Security Benefits:

### 1. **XSS Prevention**
- Blocks execution of malicious scripts from external sources
- Prevents inline script injection attacks
- Controls which scripts can run

### 2. **Data Exfiltration Prevention**
- Blocks unauthorized API calls to external domains
- Prevents sensitive data from being sent to malicious servers
- Controls network requests

### 3. **Resource Control**
- Prevents loading of malicious stylesheets, fonts, and images
- Controls which external resources can be loaded
- Reduces attack surface

### 4. **Mixed Content Prevention**
- Automatically upgrades HTTP to HTTPS
- Prevents insecure resource loading
- Ensures secure connections

## Testing CSP Violations:

### Frontend Test Page Features:
- **Violation Triggering**: Buttons to trigger various CSP violations
- **Real-time Monitoring**: Listens for `securitypolicyviolation` events
- **Violation Logging**: Displays blocked resources and violated directives
- **Educational Content**: Explains what CSP does and how it works

### Types of Violations Tested:
1. **External Script Loading**: Attempts to load scripts from untrusted domains
2. **External Image Loading**: Tries to load images from blocked sources
3. **External API Requests**: Makes requests to unauthorized APIs
4. **External Stylesheets**: Attempts to load CSS from untrusted sources
5. **External Fonts**: Tries to load fonts from blocked domains

## How to Test:

1. **Start both servers**:
   ```bash
   # Backend
   cd pulsevote-backend
   node server.js
   
   # Frontend
   cd pulsevote-frontend
   npm run dev
   ```

2. **Visit the test page**:
   - Go to `https://localhost:5173/csp-test`
   - Open browser Developer Tools (F12)
   - Go to Console tab

3. **Trigger violations**:
   - Click "Trigger CSP Violations" button
   - Watch console for CSP violation messages
   - Check Network tab for blocked requests

4. **Observe results**:
   - Violations will be logged in the console
   - Blocked requests will show in Network tab
   - The test page will display violation details

## Expected Console Output:
```
Refused to load the script from 'https://evil-site.com/malicious.js' because it violates the following Content Security Policy directive: "script-src 'self' https://apis.google.com".

Refused to load the image from 'https://evil-site.com/malicious.jpg' because it violates the following Content Security Policy directive: "img-src 'self' data:".

Refused to connect to 'https://evil-api.com/data' because it violates the following Content Security Policy directive: "connect-src 'self' https://localhost:5000".
```

## Production Considerations:

1. **Adjust Directives**: Modify CSP rules based on your actual external dependencies
2. **Report-Only Mode**: Use `reportOnly: true` for testing without blocking
3. **Violation Reporting**: Add `report-uri` directive to collect violation reports
4. **Gradual Implementation**: Start with report-only mode, then enforce
5. **Regular Updates**: Keep CSP rules updated as your app evolves

## Benefits for Your Tech Stack:

- **React/Vite**: Protects against XSS in component rendering
- **Express.js**: Server-side security header management
- **MongoDB**: Prevents data exfiltration through malicious requests
- **HTTPS**: Ensures secure communication
- **Modern Browsers**: Leverages built-in browser security features

This implementation provides enterprise-level security for your PulseVote application! 🔒
