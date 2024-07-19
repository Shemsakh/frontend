package com.Backend.backend.controller;

import com.Backend.backend.model.Login;
import com.Backend.backend.model.Registration;
import com.Backend.backend.service.LoginServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")
public class LoginController {
    @Autowired
    private LoginServices loginServices;

    @PostMapping("/login")
    public ResponseEntity<Registration> login(@RequestBody Login login) {
        Registration user = loginServices.postData(login);
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(401).body(null); // Unauthorized
        }
    }
}
