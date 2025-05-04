package com.example.mindcard.controller;

import com.example.mindcard.entity.Card;
import com.example.mindcard.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cards")
public class CardController {

    @Autowired
    private CardService cardService;

    @PostMapping
    public Card createCard(@RequestBody Card card) {
        return cardService.createCard(card);
    }

    @PutMapping("/{id}")
    public Optional<Card> updateCard(@PathVariable Long id, @RequestBody Card card) {
        return cardService.updateCard(id, card);
    }

    @DeleteMapping("/{id}")
    public String deleteCard(@PathVariable Long id) {
        return cardService.deleteCard(id) ? "Deleted successfully" : "Card not found";
    }

    @GetMapping
    public List<Card> getAllCards() {
        return cardService.getAllCards();
    }
}