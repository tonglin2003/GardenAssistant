package com.gardenBackend.gardenAssistant.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import com.gardenBackend.gardenAssistant.model.User;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    List<User> findAll();

    @Query(value = "{_id: ?0}")
    User findUserByUserId(String userId);

    @Query(value ="{account:  ?0}")
    Optional<User> findByAccount(String account);


}
