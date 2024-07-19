package com.Backend.backend.repository;

import com.Backend.backend.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository<Registration, Long> {
    Registration findByUsernameAndPassword(String username, String password);
}
