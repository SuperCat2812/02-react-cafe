import type { VoteType } from "../../types/votes";
import css from "./VoteOptions.module.css";
interface OptionPropsProps {
  handleVote: (vote: VoteType) => void;
  resetVotes: () => void;
  canReset: boolean;
}
export default function VoteOptions({
  handleVote,
  resetVotes,
  canReset,
}: OptionPropsProps) {
  return (
    <div className={css.container}>
      <button
        className={css.button}
        onClick={() => handleVote("good")}>
        Good
      </button>
      <button
        className={css.button}
        onClick={() => handleVote("neutral")}>
        Neutral
      </button>
      <button
        className={css.button}
        onClick={() => handleVote("bad")}>
        Bad
      </button>
      {canReset && (
        <button
          className={`${css.button} ${css.reset}`}
          onClick={resetVotes}>
          Reset
        </button>
      )}
    </div>
  );
}
