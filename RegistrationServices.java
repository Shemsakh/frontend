package com.Backend.backend.service;

import com.Backend.backend.model.Registration;
import com.Backend.backend.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegistrationServices implements RegistrationService {
    @Autowired
    private RegistrationRepository registrationRepository;
    @Override
    public Registration postData(Registration registration) {
        return registrationRepository.save(registration);

    }

    @Override
    public List<Registration> getData() {
        return  registrationRepository.findAll();
    }

    @Override
    public Registration findById(Long id) {
        return null;
    }
}
