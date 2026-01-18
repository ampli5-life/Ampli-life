package com.example.compiler;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents the request body sent *to* the Judge0 API.
 * We use @JsonProperty to map our camelCase fields (java standard)
 * to Judge0's snake_case fields (JSON standard).
 */
public record Judge0SubmissionRequest(
        @JsonProperty("source_code") String sourceCode,
        @JsonProperty("language_id") int languageId,
        @JsonProperty("stdin") String stdin // We won't use this, but it's part of the API
) {}
