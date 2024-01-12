package com.gardenBackend.gardenAssistant;

import com.gardenBackend.gardenAssistant.model.UserPlant;
import com.gardenBackend.gardenAssistant.repository.UserPlantRepository;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.Map;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
@EnableMongoRepositories(basePackages = "com.gardenBackend.gardenAssistant.repository")
@ComponentScan(basePackages = "com.gardenBackend")
public class GardenAssistantApplication implements CommandLineRunner {

	@Autowired
	UserPlantRepository userPlantRepository;

	public static void main(String[] args) {
		SpringApplication.run(GardenAssistantApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception{
		System.out.println("The server is running at http://localhost:8080/");

	}

}
