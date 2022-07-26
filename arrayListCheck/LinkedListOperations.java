package arrayListCheck;

import java.util.LinkedList;


public class LinkedListOperations {
	public static void main(String args[]) {
		LinkedList<String> blist = new LinkedList<String>();
		blist.add("first");
		blist.add("second");
		LinkedList<String> blist2 = new LinkedList<String>();
		blist2.add("Bruh");
		blist2.add("meme");
		blist2.add("nitro");
		blist.addAll(blist2);
		System.out.println(blist);
		blist.addFirst("lol");
		System.out.println("This is the first: " + blist);
		blist.addLast("notlol");
		System.out.println("this is the last:" +blist);
		System.out.println(blist.indexOf("meme"));
		System.out.println(blist.peekFirst());
		System.out.println(blist.peekLast());
		blist.pollFirst();
		System.out.println("blist.pollFirst() = " + blist);
		blist.pollLast();
		System.out.println("blist.pollLast() = " + blist);
		System.out.println("Size: " + blist.size());
		
		
	}

}
