package com.mediconnect.auth.dto;

/**
 * Internal result of a successful login: the response body plus the raw refresh
 * token, which the controller sets as an httpOnly cookie (never in the body).
 */
public record LoginResult(LoginResponse body, String refreshToken) {}
