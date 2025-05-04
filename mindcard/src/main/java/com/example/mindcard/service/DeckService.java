package com.example.mindcard.service;

import com.example.mindcard.entity.Deck;
import com.example.mindcard.repository.DeckRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeckService {

    @Autowired
    private DeckRepository deckRepository;

    public Deck createDeck(Deck deck) {
        return deckRepository.save(deck);
    }

    public Optional<Deck> updateDeck(Long id, Deck updatedDeck) {
        return deckRepository.findById(id).map(deck -> {
            deck.setName(updatedDeck.getName());
            deck.setCards(updatedDeck.getCards());
            return deckRepository.save(deck);
        });
    }

    public boolean deleteDeck(Long id) {
        if (deckRepository.existsById(id)) {
            deckRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Deck> getAllDecks() {
        return deckRepository.findAll();
    }

    public Optional<Deck> getDeckById(Long id) {
        return deckRepository.findById(id);
    }
}