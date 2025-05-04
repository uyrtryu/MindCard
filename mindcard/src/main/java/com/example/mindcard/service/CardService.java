package com.example.mindcard.service;

import com.example.mindcard.entity.Card;
import com.example.mindcard.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CardService {

    @Autowired
    private CardRepository cardRepository;

    public Card createCard(Card card) {
        return cardRepository.save(card);
    }

    public Optional<Card> updateCard(Long id, Card updatedCard) {
        return cardRepository.findById(id).map(card -> {
            card.setFrontside(updatedCard.getFrontside());
            card.setBackside(updatedCard.getBackside());
            return cardRepository.save(card);
        });
    }

    public boolean deleteCard(Long id) {
        if (cardRepository.existsById(id)) {
            cardRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Card> getAllCards() {
        return cardRepository.findAll();
    }
}