package com.tyse.general.service.dto;

public class RecaptchaResponseDTO {

    private boolean success = false;

    public RecaptchaResponseDTO() {}

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public boolean isSuccess() {
        return success;
    }
}
