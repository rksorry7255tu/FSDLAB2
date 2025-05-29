import { useState } from "react";
import "./VotingApp.css"; // Import the CSS file for styling

export default function VotingApp() {
  const [candidates, setCandidates] = useState([
    { name: "Alice", votes: 0 },
    { name: "Bob", votes: 0 },
    { name: "Charlie", votes: 0 },
  ]);

  const handleVote = (index) => {
    const updatedCandidates = [...candidates];
    updatedCandidates[index].votes += 1;
    setCandidates(updatedCandidates);
  };

  return (
    <div className="voting-app">
      <h1 className="title">Voting Application</h1>
      <div className="candidates">
        {candidates.map((candidate, index) => (
          <div key={index} className="candidate-card">
            <h2 className="candidate-name">{candidate.name}</h2>
            <p className="vote-count">Votes: {candidate.votes}</p>
            <button className="vote-button" onClick={() => handleVote(index)}>
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
