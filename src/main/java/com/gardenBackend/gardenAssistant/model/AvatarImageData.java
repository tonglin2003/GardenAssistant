package com.gardenBackend.gardenAssistant.model;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AvatarImageData {
    private String AvatarImageId;
    private String userId;

    private String avatarImageName;
    private String avatarImageType;

    private String avatarImagePath;

}
