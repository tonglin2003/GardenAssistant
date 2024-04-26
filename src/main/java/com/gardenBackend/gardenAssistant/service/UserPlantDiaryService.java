package com.gardenBackend.gardenAssistant.service;

import com.gardenBackend.gardenAssistant.exception.ItemNotFound;
import com.gardenBackend.gardenAssistant.model.UserPlantDiary;
import com.gardenBackend.gardenAssistant.repository.UserPlantDiaryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserPlantDiaryService {
    @Autowired
    private final UserPlantDiaryRepository userPlantDiaryRepository;

    public UserPlantDiaryService(UserPlantDiaryRepository userPlantDiaryRepository) {
        this.userPlantDiaryRepository = userPlantDiaryRepository;
    }

    public UserPlantDiary addNewPlantDiary(UserPlantDiary userPlantDiary){
        return userPlantDiaryRepository.save(userPlantDiary);
    }

    public UserPlantDiary updatePlantDiary(UserPlantDiary userPlantDiary){
        return userPlantDiaryRepository.save(userPlantDiary);
    }

    public List<UserPlantDiary> findPlantDiaryByUserId(String userId){
        List<UserPlantDiary> userPlantDiaries = userPlantDiaryRepository.findUserPlantDiariesByUserId(userId);
        if (userPlantDiaries != null) {
            return userPlantDiaries;
        } else {
            throw new ItemNotFound("User #" + userId + " doesn't have diaries found");
        }
    }

    public List<UserPlantDiary> findPlantDiaryByPlantId(String plantId){
        List<UserPlantDiary> userPlantDiaries = userPlantDiaryRepository.findUserPlantDiariesByPlantId(plantId);
        if (userPlantDiaries != null) {
            return userPlantDiaries;
        } else {
            throw new ItemNotFound("User Plant #" + plantId + " doesn't have diaries found");
        }
    }
}
