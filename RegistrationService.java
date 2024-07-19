package com.Backend.backend.service;


import com.Backend.backend.model.Registration;

import java.util.List;

public interface RegistrationService {
    public Registration postData(Registration registration);
    public List<Registration> getData();
    public Registration findById(Long id);
}
