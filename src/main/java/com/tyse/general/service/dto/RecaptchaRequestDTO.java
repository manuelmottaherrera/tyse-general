package com.tyse.general.service.dto;

public class RecaptchaRequestDTO {

    private String token;
    private String action;

    public RecaptchaRequestDTO() {}

    public RecaptchaRequestDTO(String token, String action) {
        this.token = token;
        this.action = action;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }
}
