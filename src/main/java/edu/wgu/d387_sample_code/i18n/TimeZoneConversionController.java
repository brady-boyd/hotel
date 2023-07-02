package edu.wgu.d387_sample_code.i18n;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/time")
@CrossOrigin(origins = "http://localhost:4200")
public class TimeZoneConversionController {

    @GetMapping("/convert")
    public String convertTimeZone() {
        return TimeZoneConversion.convertTimeToAllZones();
    }
}