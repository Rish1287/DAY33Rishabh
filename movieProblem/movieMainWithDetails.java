package movieProblem;

import java.util.HashMap;
import java.util.Map;

public class movieMainWithDetails {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
Map<String , MovieCons> movieMap = new HashMap<String,MovieCons>();
		
		movieMap.put("D1", new MovieCons("M1","D1","2h 10m",2010));
		movieMap.put("D2", new MovieCons("M2", "D2","2h 52m", 2013));
		movieMap.put("D3", new MovieCons("M3","D3","3h 8m",2015));
		movieMap.put("D4",new MovieCons("M4","D4","1h 1m", 2017));
		movieMap.put("D5", new MovieCons("M5","D5","2h 34m",2004));
		movieMap.put("D6", new MovieCons("M6","D6","1h 59m",2005));
		movieMap.put("D5", new MovieCons("M7","D5","2h",2015));
		movieMap.put("D4", new MovieCons("M8","D4", "2h 5m",2019));
		movieMap.put("D2", new MovieCons("M9", "D1","2h 6m", 2022));
		movieMap.put("D1", new MovieCons("M10","D1","3h 11m",2020));
		
		
		for(Map.Entry<String,MovieCons> mapdata : movieMap.entrySet())
		{
			System.out.println(mapdata);
		}

	}

}
