package Tingeso.MicroServiceMilkStgoProveedores;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class MicroServiceMilkStgoProveedoresApplication {

	public static void main(String[] args) {
		SpringApplication.run(MicroServiceMilkStgoProveedoresApplication.class, args);
	}

}
