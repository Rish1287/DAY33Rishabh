package com.example.prod.service;
import java.util.List;

import com.example.prod.entity.Product;


public interface ProductService {
	
	public void save(Product prod);
	public List<Product> findAll();
	public Product findById(Integer id);
	public void deleteById(Integer id);

	

}
