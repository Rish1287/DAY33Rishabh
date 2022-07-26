package arrayListCheck;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class ArraylistA {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List alist = new ArrayList();
		alist.add("the");
		alist.add("game");
		alist.add("save");
		alist.add("vase");
		System.out.println(alist);
		System.out.println("Size is: " +alist.size());
		if(alist.isEmpty()) {
			System.out.println("its Empty");
		}
		else {
			System.out.println("its not Empty");
		}
		System.out.println("Element at Index 0 : " +alist.get(0));
		//System.out.println("After Changes: " +alist.set(alist.indexOf("game") , "games"));
		alist.set(1, "games");
		System.out.println(alist);
		List alist2 = new ArrayList();
		alist2.add("new");
		alist2.add("words");
		alist2.add("list");
		alist.addAll(alist2);
		System.out.println(alist);
		for(int j = 1; j < alist.size(); j++)
		{
			for(int k = j+1; k < alist.size();k++)
			{
				anagrams(alist.get(j),alist.get(k));
			}
		}

	}
	public static void anagrams(Object object, Object object2)
	{
		
		char[] character1 = ((String) object).toCharArray();
		char[] characters2 = ((String) object2).toCharArray();
		Arrays.sort(character1);
		Arrays.sort(characters2);
		if (Arrays.equals(character1, characters2))
		{
           	 System.out.println(object+" "+object2);
           
		}
               
		
	}

}
