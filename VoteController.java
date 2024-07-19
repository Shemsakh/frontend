package com.Backend.backend.controller;

import com.Backend.backend.model.Vote;
import com.Backend.backend.service.VoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Vote")

public class VoteController {
    @Autowired
    private VoteService voteService;
    @PostMapping("/submit")
    public Vote submitVote(@RequestBody Vote vote){
        return voteService.saveVote(vote);

    }
    @GetMapping
    public List<Vote>getAllVote(){
        return voteService.getAllVotes();

    }
}
