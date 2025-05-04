package com.example.mindcard.service;

import com.example.mindcard.entity.User;
import com.example.mindcard.entity.VerificationCode;
import com.example.mindcard.repository.UserRepository;
import com.example.mindcard.repository.VerificationCodeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
public class EmailService {

    private static final int CODE_EXPIRATION_MINUTES = 5;

    @Autowired
    private JavaMailSender emailSender;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private VerificationCodeRepository verificationCodeRepository;

    public String sendVerificationCode(String email) {
        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) return "User not found.";

        String code = String.format("%04d", new Random().nextInt(10000));

        VerificationCode verificationCode = new VerificationCode();
        verificationCode.setEmail(email);
        verificationCode.setCode(code);
        verificationCode.setTimestamp(LocalDateTime.now());

        verificationCodeRepository.save(verificationCode);

        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Your Verification Code");
        message.setText("Your verification code is: " + code);
        emailSender.send(message);

        return "Verification code sent to " + email;
    }

    public boolean verifyCode(String email, String code) {
        Optional<VerificationCode> opt = verificationCodeRepository.findByEmail(email);
        if (opt.isEmpty()) return false;

        VerificationCode stored = opt.get();
        return stored.getCode().equals(code) &&
               stored.getTimestamp().plusMinutes(CODE_EXPIRATION_MINUTES).isAfter(LocalDateTime.now());
    }
}