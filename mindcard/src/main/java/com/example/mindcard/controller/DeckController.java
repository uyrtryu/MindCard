package com.example.mindcard.controller;

import com.example.mindcard.entity.Deck;
import com.example.mindcard.service.DeckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/decks")
public class DeckController {

    @Autowired
    private DeckService deckService;

    @PostMapping
    public Deck createDeck(@RequestBody Deck deck) {
        return deckService.createDeck(deck);
    }

    @PutMapping("/{id}")
    public Optional<Deck> updateDeck(@PathVariable Long id, @RequestBody Deck deck) {
        return deckService.updateDeck(id, deck);
    }

    @DeleteMapping("/{id}")
    public String deleteDeck(@PathVariable Long id) {
        return deckService.deleteDeck(id) ? "Deck deleted successfully" : "Deck not found";
    }

    @GetMapping
    public List<Deck> getAllDecks() {
        return deckService.getAllDecks();
    }

    @GetMapping("/{id}")
    public Optional<Deck> getDeckById(@PathVariable Long id) {
        return deckService.getDeckById(id);
    }
}