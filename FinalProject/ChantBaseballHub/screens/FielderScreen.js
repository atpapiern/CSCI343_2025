import Fielder from "../components/Player/Fielder";
import { PLAYERS } from "../data/player_data";

export default function RosterScreen() {
  const type = "Fielder";
  const displayedPlayers = PLAYERS.filter((rosterItem) => {
    return rosterItem.type === type;
  });

  return <Fielder items={displayedPlayers} />;
}
