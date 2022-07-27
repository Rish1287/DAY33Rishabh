package com.example.Ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Ecommerce.entity.Product;
import com.example.Ecommerce.repository.ProductRespositoryImpl;



@Service
public class ProductServiceImpl  implements ProductService{
	
	@Autowired
	ProductRespositoryImpl pro;
		@Override
		
		public List<Product> findAll() {
			// TODO Auto-generated method stub
			
				
				return pro.findAll();
			}

			
			public Product findById(Integer id) {
				// TODO Auto-generated method stub
				return pro.findById(id);
			}
			
			public void saveOrUpdate(Product product) {
				pro.saveOrUpdate(product);
			}

		}
	  
