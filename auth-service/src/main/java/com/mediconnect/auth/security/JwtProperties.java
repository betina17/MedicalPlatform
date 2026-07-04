package com.mediconnect.auth.security;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "jwt")
public class JwtProperties {
    private String secret;
    private long accessExpiryMs;
    private long refreshExpiryMs;
    private boolean cookieSecure;

    public String getSecret() { return secret; }
    public void setSecret(String secret) { this.secret = secret; }
    public long getAccessExpiryMs() { return accessExpiryMs; }
    public void setAccessExpiryMs(long accessExpiryMs) { this.accessExpiryMs = accessExpiryMs; }
    public long getRefreshExpiryMs() { return refreshExpiryMs; }
    public void setRefreshExpiryMs(long refreshExpiryMs) { this.refreshExpiryMs = refreshExpiryMs; }
    public boolean isCookieSecure() { return cookieSecure; }
    public void setCookieSecure(boolean cookieSecure) { this.cookieSecure = cookieSecure; }
}
