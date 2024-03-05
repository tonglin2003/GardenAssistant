package com.gardenBackend.gardenAssistant.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;

@Getter
@Setter
public class UserPlantDiary {
    @Id
    private String diaryId;

    private String title;

    private String content;

    private String plantId;

    private String userId;
    private Date createdAt;

    public UserPlantDiary(String title, String content, String plantId, String userId){
        super();
        this.title = title;
        this.content = content;
        this.plantId = plantId;
        this.userId = userId;
        this.createdAt = new Date();
    }
}
