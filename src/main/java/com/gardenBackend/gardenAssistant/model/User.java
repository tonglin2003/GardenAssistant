package com.gardenBackend.gardenAssistant.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
public class User {
    @Id
    private String id;
    private String username;
    private String avatarUrl;

    private String account;

    private String password;

    public User(String username, String avatarUrl){
        this.username = username;
        this.avatarUrl = avatarUrl;
    }

    public String getUserId(){ return this.id; }

    public String getUsername(){ return this.username; }

    public String getAvatarUrl(){ return this.avatarUrl; }

    public void setUsername(String username) { this.username = username; }

    public void setAvatarUrl(String avatarUrl) { this.avatarUrl = avatarUrl; }
}
