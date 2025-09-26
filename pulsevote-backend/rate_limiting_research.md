# Rate Limiting Research Summary

## What is Rate Limiting?

Rate limiting is a security technique that controls the number of requests a client can make to a server within a specific time window. It acts as a protective barrier against abuse, ensuring that no single client can overwhelm the server with excessive requests. Rate limiting can be implemented at various levels including per-IP address, per-user identifier, or per-API endpoint, and typically uses algorithms like token bucket or sliding window to track and enforce limits.

## Why is Rate Limiting Critical for Authentication Endpoints?

Rate limiting is absolutely critical for authentication endpoints because these endpoints are prime targets for automated attacks like credential stuffing, brute force attacks, and account enumeration. Without rate limiting, attackers can make thousands of login attempts per second to crack passwords or test stolen credentials, potentially compromising user accounts and overwhelming server resources. Authentication endpoints handle sensitive operations that directly impact security, making them the most important endpoints to protect with rate limiting.

## Per-IP vs Per-Identifier Rate Limiting

Per-IP rate limiting restricts requests based on the client's IP address, which is effective against distributed attacks but can be bypassed by attackers using multiple IPs or VPNs. Per-identifier rate limiting (like per-email) tracks attempts against specific user accounts, preventing targeted attacks on individual accounts but requiring more sophisticated tracking. The most secure approach combines both methods - limiting per-IP to prevent general abuse and per-identifier to prevent targeted attacks on specific accounts.

## Reverse Proxy Impact on Rate Limiting

Reverse proxies and load balancers can significantly affect rate limiting accuracy because they can mask the real client IP addresses, making `req.ip` return the proxy's IP instead of the actual client. This can cause legitimate users behind the same proxy to be incorrectly rate-limited together, or allow attackers to bypass limits by appearing to come from the proxy IP. To address this, applications must be configured to trust proxies and use headers like `X-Forwarded-For` to extract real client IPs, ensuring rate limiting works correctly in production environments.

## Safe Defaults vs Production Settings

Safe defaults for rate limiting are typically conservative to prevent abuse while allowing legitimate usage - common settings might be 5-10 requests per 15 minutes for authentication endpoints. Production-ready settings require careful tuning based on actual usage patterns, user behavior analytics, and business requirements. Production settings should consider factors like user base size, expected traffic patterns, geographic distribution, and the specific security requirements of the application, often requiring monitoring and adjustment over time to balance security with user experience.
