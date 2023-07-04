package tingeso.backendplanilladepagoservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class BackendPlanilladepagoServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendPlanilladepagoServiceApplication.class, args);
	}

}
