package com.gardenBackend.gardenAssistant.repository;

import com.gardenBackend.gardenAssistant.model.AvatarImageData;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

public interface AvatarImageRepository extends MongoRepository<AvatarImageData, String> {
    @Query(value= "{userId: ?0}")
    AvatarImageData findAvatarImageDataByUserId(String plantId);


}
