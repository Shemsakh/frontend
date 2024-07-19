import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Ensure to import the App.css for styles

const Voter = () => {
    const [selectedCandidate, setSelectedCandidate] = useState('');
    const [voteSubmitted, setVoteSubmitted] = useState(false);

    const handleSelection = (candidate) => {
        setSelectedCandidate(candidate);
    };

    const handleSubmit = async () => {
        if (selectedCandidate) {
            setVoteSubmitted(true);
            try {
                await axios.post('http://localhost:8089//Vote/submit"', { candidate: selectedCandidate });
                alert(`You have voted for ${selectedCandidate}`);
            } catch (error) {
                alert('Error submitting vote. Please try again.');
            }
        }
    };

    return (
        <div className="voter-container">
            <h2>Select Your Candidate</h2>
            <div className="candidate">
                <img src="/images/dr hussein.PNG" alt="Dr. Hussein" />
                <p>Dr Hussein Aliy Mwinyi</p>
                <input
                    type="radio"
                    name="candidate"
                    value="dr hussein"
                    checked={selectedCandidate === 'dr hussein'}
                    onChange={() => handleSelection('dr hussein')}
                    disabled={selectedCandidate !== '' && selectedCandidate !== 'dr hussein'}
                />
            </div>
            <div className="candidate">
                <img src="/images/dr samiyya.PNG" alt="Dr. Samiyya" />
                <p>Dr Samiyya Suluhu Hassan</p>
                <input
                    type="radio"
                    name="candidate"
                    value="dr samiyya"
                    checked={selectedCandidate === 'dr samiyya'}
                    onChange={() => handleSelection('dr samiyya')}
                    disabled={selectedCandidate !== '' && selectedCandidate !== 'dr samiyya'}
                />
            </div>
            <div className="candidate">
                <img src="/images/lipumba.PNG" alt="Lipumba" />
                <p>Proffecor Lipumba</p>
                <input
                    type="radio"
                    name="candidate"
                    value="lipumba"
                    checked={selectedCandidate === 'lipumba'}
                    onChange={() => handleSelection('lipumba')}
                    disabled={selectedCandidate !== '' && selectedCandidate !== 'lipumba'}
                />
            </div>
            <button className="submit-button" onClick={handleSubmit} disabled={!selectedCandidate || voteSubmitted}>
                {voteSubmitted ? 'Vote Submitted' : 'Submit Vote'}
            </button>
        </div>
    );
};

export default Voter;
