package org.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/api/greet")
    public String greet(
            @RequestParam(defaultValue = "Guest") String name) {

        String safeName = name.trim();

        if (safeName.isEmpty() || safeName.length() > 80) {
            throw new IllegalArgumentException(
                    "Name must contain between 1 and 80 characters.");
        }

        return "Hello, " + safeName
                + "! Your request was processed by Spring Boot on EC2.";
    }

    @GetMapping("/api/health")
    public String health() {
        return "Backend is running successfully!";
    }
}
