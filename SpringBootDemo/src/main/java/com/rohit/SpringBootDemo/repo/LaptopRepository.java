package com.rohit.SpringBootDemo;

import com.rohit.SpringBootDemo.model.Laptop;
import org.springframework.stereotype.Repository;

import java.sql.SQLOutput;
@Repository
public class LaptopRepository {
    public void save(Laptop lap){
        System.out.println("Saved in database");
    }
}
