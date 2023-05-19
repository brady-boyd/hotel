package edu.wgu.d387_sample_code.i18n;

import java.util.*;

public class DisplayMessage implements Runnable {
    private Locale locale;
    private String message;

    public DisplayMessage(Locale locale) {
        this.locale = locale;
    }

    public String getMessage() {
        if (message == null) {
            ResourceBundle bundle = ResourceBundle.getBundle("welcome", locale);
            message = bundle.getString("welcomeMessage");
        }
        return message;
    }

    @Override
    public void run() {
        System.out.println(getMessage());
    }
}