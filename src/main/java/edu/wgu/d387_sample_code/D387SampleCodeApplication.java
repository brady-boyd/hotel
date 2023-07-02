package edu.wgu.d387_sample_code;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import java.util.Locale;
import edu.wgu.d387_sample_code.i18n.DisplayMessage;

@SpringBootApplication
public class D387SampleCodeApplication {

	public static void main(String[] args) {
		SpringApplication.run(D387SampleCodeApplication.class, args);

		// Create DisplayMessage instances for each locale
		DisplayMessage displayMessageEnglish = new DisplayMessage(Locale.US);
		DisplayMessage displayMessageFrench = new DisplayMessage(Locale.CANADA_FRENCH);

		// Create threads for each DisplayMessage instance
		Thread englishThread = new Thread(displayMessageEnglish);
		Thread frenchThread = new Thread(displayMessageFrench);

		// Start threads
		englishThread.start();
		frenchThread.start();

	}

}
