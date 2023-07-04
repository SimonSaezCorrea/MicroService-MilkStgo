package tingeso.backendproveedorservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class BackendProveedorServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendProveedorServiceApplication.class, args);
	}

}
