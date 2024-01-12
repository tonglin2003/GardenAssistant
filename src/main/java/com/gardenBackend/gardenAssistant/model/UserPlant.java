package com.gardenBackend.gardenAssistant.model;


import org.apache.catalina.User;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.HashMap;
import java.util.Map;

@Document(collection = "UserPlant")
public class UserPlant {
    @Id
    private String plantId;
    private String name;
    private String description;
    private String imgUrl;
    private Map<String, Object> careRequirement;
    private String userId;


    public UserPlant(String name, String description, String imgUrl, Map<String, Object> careRequirement, String userId){
        super();
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
        // Setting the careRequirement of the UserPlant
        this.careRequirement = new HashMap<>();
        this.careRequirement.put("sunlight", careRequirement.getOrDefault("sunlight", null));
        this.careRequirement.put("water", careRequirement.getOrDefault("water", null));
        this.careRequirement.put("temperature", careRequirement.getOrDefault("temperature", null));
        this.careRequirement.put("soil", careRequirement.getOrDefault("soil", null));
        this.careRequirement.put("humidity", careRequirement.getOrDefault("humidity", null));

        this.userId = userId;

    }

    public String getPlantId() {
        return plantId;
    }

    public void setPlantId(String plantId) {
        this.plantId = plantId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public Map<String, Object> getCareRequirement() {
        return careRequirement;
    }

    public void setCareRequirement(Map<String, Object> careRequirement) {
        this.careRequirement = careRequirement;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }


    @Override
    public String toString() {
        return "UserPlant{" +
                "plantId=" + plantId +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                ", careRequirement=" + careRequirement +
                '}';
    }

}
