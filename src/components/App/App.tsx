import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
import { VoteType, type Votes } from "../../types/votes";
import { useState } from "react";
import Notification from "../Notification/Notifcation";
import VoteStats from "../VoteStats/VoteStats";
import VoteOptions from "../VoteOptions/VoteOptions";

function App() {
  const votes: Votes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [counted, setCounted] = useState(votes);
  const handleVote = (type: typeof VoteType) => {
    setCounted({ ...counted, [type]: counted[type] + 1 });
  };
  const resetVotes = () => {
    setCounted({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalVotes = counted.good + counted.neutral + counted.bad;
  const positiveRate = totalVotes
    ? Math.round((counted.good / totalVotes) * 100)
    : 0;

  return (
    <div className={css.app}>
      <CafeInfo />

      {totalVotes > 0 ? (
        <>
          <VoteOptions
            handleVote={handleVote}
            resetVotes={resetVotes}
            canReset={true}
          />
          <VoteStats
            votes={counted}
            positiveRate={positiveRate}
            totalVotes={totalVotes}
          />
        </>
      ) : (
        <>
          <VoteOptions
            handleVote={handleVote}
            resetVotes={resetVotes}
            canReset={false}
          />
          <Notification />
        </>
      )}
    </div>
  );
}

export default App;
