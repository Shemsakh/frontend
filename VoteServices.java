package com.Backend.backend.service;

import com.Backend.backend.model.Vote;
import com.Backend.backend.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public interface VoteServices {
    public Vote postData(Vote vote);
    List<Vote> getAllVote();
}
