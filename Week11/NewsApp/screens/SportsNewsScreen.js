import Story from "../components/Story/Story";
import { STORIES } from "../data/dummy_data";

export default function SportsNewsScreen() {
  const type = "SportsNews";
  const displayedStories = STORIES.filter((storyItem) => {
    return storyItem.type === type;
  });

  return <Story items={displayedStories} />;
}
