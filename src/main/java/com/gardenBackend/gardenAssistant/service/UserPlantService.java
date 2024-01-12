package com.gardenBackend.gardenAssistant.service;

import com.gardenBackend.gardenAssistant.exception.ItemNotFound;
import com.gardenBackend.gardenAssistant.model.UserPlant;
import com.gardenBackend.gardenAssistant.repository.UserPlantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserPlantService {
    @Autowired
    private final UserPlantRepository userPlantRepository;

    public UserPlantService(UserPlantRepository userPlantRepository) {
        this.userPlantRepository = userPlantRepository;
    }

    // add new user plant to db
    public UserPlant addUserPlant(UserPlant userPlant) {
        return userPlantRepository.save(userPlant);
    }

    // update user plant to db
    public UserPlant updateUserPlant(UserPlant userPlant) {
        return userPlantRepository.save(userPlant);
    }

    // delete user plant by plant id
    public void deleteUserPlant(String plantId) {
        userPlantRepository.deleteById(plantId);
    }

    // get plant by plant id
    public UserPlant getUserPlantById(String plantId) {
        UserPlant userPlant = userPlantRepository.findUserPlantByPlantId(plantId);
        if (userPlant != null) {
            return userPlant;
        } else {
            throw new ItemNotFound("User Plant #" + plantId + " is not found");
        }
    }

    public List<UserPlant> getUserPlantByUserId(String userId){
        List<UserPlant> userPlants = userPlantRepository.findUserPlantByUserId(userId);

        if (!userPlants.isEmpty()) {
            return userPlants;
        } else {
            throw new ItemNotFound("User " + userId + " does not have any plant");
        }
    }

}

