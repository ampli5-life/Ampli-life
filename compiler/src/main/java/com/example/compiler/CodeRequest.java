package com.example.compiler;

/**
 * Represents the incoming request from the React frontend.
 */
public record CodeRequest(String code, String language) {}
