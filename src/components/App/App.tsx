import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
import { type VoteType, type Votes } from "../../types/votes";
import { useState } from "react";
import Notification from "../Notification/Notification";
import VoteStats from "../VoteStats/VoteStats";
import VoteOptions from "../VoteOptions/VoteOptions";

function App() {
  const [counted, setCounted] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const onVote = (type: VoteType) => {
    setCounted({ ...counted, [type]: counted[type] + 1 });
  };
  const onReset = () => {
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
      <VoteOptions
        onVote={onVote}
        onReset={onReset}
        canReset={totalVotes > 0}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={counted}
          positiveRate={positiveRate}
          totalVotes={totalVotes}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
