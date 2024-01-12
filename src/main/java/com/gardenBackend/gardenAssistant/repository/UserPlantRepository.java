package com.gardenBackend.gardenAssistant.repository;

import com.gardenBackend.gardenAssistant.model.UserPlant;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserPlantRepository extends MongoRepository<UserPlant, String> {
    List<UserPlant> findAll();

    @Query(value = "{userId: ?0}")
    List<UserPlant> findUserPlantByUserId(String userId);

    @Query(value = "{plantId: ?0}")
    UserPlant findUserPlantByPlantId(String plantId);

    public long count();
}
