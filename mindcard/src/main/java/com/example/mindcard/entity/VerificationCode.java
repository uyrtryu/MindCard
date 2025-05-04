package com.example.mindcard.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class VerificationCode {
    @Id
    private String email;
    private String code;
    private LocalDateTime timestamp;
}