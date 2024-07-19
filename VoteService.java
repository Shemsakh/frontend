package com.Backend.backend.service;

import com.Backend.backend.model.Vote;
import com.Backend.backend.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class VoteService {
    @Autowired
    private VoteRepository voteRepository;

    public Vote saveVote(Vote vote){
        return voteRepository.save(vote);
    }

    public List<Vote> getAllVotes(){
        return voteRepository.findAll();
    }
}
