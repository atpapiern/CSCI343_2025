import Pitcher from "../components/Player/Pitcher";
import { PLAYERS } from "../data/player_data";

export default function PitcherScreen() {
  const type = "Pitcher";
  const displayedPlayers = PLAYERS.filter((rosterItem) => {
    return rosterItem.type === type;
  });

  return <Pitcher items={displayedPlayers} />;
}
