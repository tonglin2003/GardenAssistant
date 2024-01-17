package com.gardenBackend.gardenAssistant.model.responseModel;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@RequiredArgsConstructor
@Setter
@Getter
public class ResponseUser {
    private String userId;
    private String username;
    private String avatarUrl;
    private String account;

    public ResponseUser(String userId, String username, String avatarUrl, String account){
        this.userId = userId;
        this.username = username;
        this.avatarUrl = avatarUrl;
        this.account = account;
    }


}
