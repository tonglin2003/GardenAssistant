package com.gardenBackend.gardenAssistant.repository;

import com.gardenBackend.gardenAssistant.model.UserPlantDiary;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserPlantDiaryRepository extends MongoRepository<UserPlantDiary, String> {

    @Query(value = "{plantId:  ?0}")
    List<UserPlantDiary> findUserPlantDiariesByPlantId(String plantId);

    @Query(value = "{userId:  ?0}")
    List<UserPlantDiary> findUserPlantDiariesByUserId(String userId);

}
