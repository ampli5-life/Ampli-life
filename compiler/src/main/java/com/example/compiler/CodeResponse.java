package com.example.compiler;

/**
 * Represents the outgoing response to the React frontend.
 */
public record CodeResponse(String output, boolean isError) {}
