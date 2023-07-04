package tingeso.backendacopiolecheservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class BackendAcopiolecheServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendAcopiolecheServiceApplication.class, args);
	}

}
