package com.Backend.backend.controller;

import com.Backend.backend.model.Registration;
import com.Backend.backend.service.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Registration")

public class RegistrationController {
    @Autowired
    private RegistrationService registrationService;
    @PostMapping("/add")
    public String postData(@RequestBody Registration Registration){
        registrationService.postData(Registration);
        return "create";
    }
 @GetMapping("/view")
    public List<Registration> getData(){
        return registrationService.getData();
 }

}
