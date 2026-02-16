package com.ampli5.backend.auth;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

@Component
@Order(Ordered.HIGHEST_PRECEDENCE)
public class DebugLogFilter extends OncePerRequestFilter {

    private static final Logger log = LoggerFactory.getLogger(DebugLogFilter.class);

    @Override
    protected void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain)
            throws ServletException, IOException {
        String uri = request.getRequestURI();
        if (!uri.contains("confirm-session")) {
            filterChain.doFilter(request, response);
            return;
        }
        // #region agent log
        log.info("[DEBUG] confirm-session REQUEST method={} uri={} queryString={}",
                request.getMethod(), uri, request.getQueryString());
        // #endregion
        filterChain.doFilter(request, response);
    }
}
