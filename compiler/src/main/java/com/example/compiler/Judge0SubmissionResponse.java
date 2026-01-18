package com.example.compiler;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Represents the response body received *from* the Judge0 API.
 * We only map the fields we care about.
 */
public record Judge0SubmissionResponse(
        @JsonProperty("stdout") String stdout,
        @JsonProperty("stderr") String stderr,
        @JsonProperty("compile_output") String compile_output,
        @JsonProperty("message") String message,
        @JsonProperty("status_id") Integer status_id,
        @JsonProperty("token") String token
) {}
