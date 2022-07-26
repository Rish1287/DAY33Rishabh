package mangathaGame;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DeckOfCards {
	
	Player player;
	 List<String> cardsInDeck = new ArrayList<String>();

	
	public List<String> shuffle() {
		  String[] SUITS =  "Clubs, Diamonds, Hearts, Spades".split(",");
		  String[] RANKS = "Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King".split(",");

		        // initialize deck
		  
		  for (String suit : SUITS) 
		  {
		      for (String rank : RANKS) {
		    	  
		    	  cardsInDeck.add(rank+suit);
		    	   System.out.println(cardsInDeck);
		            Collections.shuffle(cardsInDeck);
		      }
	      }
		return cardsInDeck;
		  
	}
}


