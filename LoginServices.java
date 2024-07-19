package com.Backend.backend.service;

import com.Backend.backend.model.Login;
import com.Backend.backend.model.Registration;

public interface LoginServices {
    Registration postData(Login login);
}
