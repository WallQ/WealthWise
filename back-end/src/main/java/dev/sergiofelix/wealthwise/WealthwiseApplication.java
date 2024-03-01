package dev.sergiofelix.wealthwise;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.reactive.ReactiveSecurityAutoConfiguration;

@SpringBootApplication(exclude = {ReactiveSecurityAutoConfiguration.class})
public class WealthwiseApplication {
    public static void main(String[] args) {
        SpringApplication.run(WealthwiseApplication.class, args);
    }
}
