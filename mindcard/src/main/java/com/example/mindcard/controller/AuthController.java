package com.example.mindcard.controller;

import com.example.mindcard.dto.VerificationRequest;
import com.example.mindcard.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-code")
    public String sendCode(@RequestParam String email) {
        return emailService.sendVerificationCode(email);
    }

    @PostMapping("/verify-code")
    public String verifyCode(@RequestBody VerificationRequest request) {
        boolean isValid = emailService.verifyCode(request.getEmail(), request.getCode());
        return isValid ? "Code is valid!" : "Invalid or expired code.";
    }
}