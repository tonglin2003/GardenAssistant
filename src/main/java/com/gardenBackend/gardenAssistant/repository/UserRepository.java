package com.gardenBackend.gardenAssistant.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.gardenBackend.gardenAssistant.model.User;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UserRepository extends MongoRepository<User, String> {
    List<User> findAll();

    @Query(value = "{_id: ?0}")
    User findUserByUserId(ObjectId userId);


}
