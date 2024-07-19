package com.Backend.backend.service;

import com.Backend.backend.model.Login;
import com.Backend.backend.model.Registration;
import com.Backend.backend.repository.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService implements LoginServices {
    @Autowired
    private LoginRepository loginRepository;

    @Override
    public Registration postData(Login login) {
        Registration user = loginRepository.findByUsernameAndPassword(login.getUsername(), login.getPassword());
        if (user != null) {
            // Optionally, you can exclude the password before returning the user object
            user.setPassword(null);
            return user;
        } else {
            // Handle the case when the user is not found
            return null;
        }
    }
}
