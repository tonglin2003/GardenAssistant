package com.gardenBackend.gardenAssistant.model;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Indexed;

import java.util.Collection;
import java.util.List;

@Document(collection = "User")
public class User implements UserDetails {
    @Id
    private String id;

    @Getter
    private String username;
    private String avatarUrl;

    private String account;

    private String password;


    @Enumerated(EnumType.STRING)
    private Role role;



    public User(String username, String avatarUrl, String account, String password){
        this.username = username;
        this.avatarUrl = avatarUrl;
        this.account = account;
        this.password = password;

        this.role = Role.USER;
    }

    public String getUserId(){ return this.id; }

    public String getAvatarUrl(){ return this.avatarUrl; }

    public void setUsername(String username) { this.username = username; }

    public void setAvatarUrl(String avatarUrl) { this.avatarUrl = avatarUrl; }

    public void setPassword(String password) { this.password = password; }

    public String getAccountUsername() { return this. username; }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return account;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
