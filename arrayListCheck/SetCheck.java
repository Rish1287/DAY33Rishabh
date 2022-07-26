package arrayListCheck;

import java.util.Set;
import java.util.TreeSet;

public class SetCheck {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Set<Integer> Set1 = new TreeSet<Integer>();
		Set1.add(5);
		Set1.add(4);
		Set1.add(65);
		Set1.add(72);
		Set1.add(12);
		
		
		Set<Integer> Set2 = new TreeSet<Integer>();
		Set2.add(1);
		Set2.add(98);
		Set2.add(2);
		Set2.add(72);
		Set2.add(11);
		
		Set1.retainAll(Set2);
		System.out.println(Set1);

	}

}
