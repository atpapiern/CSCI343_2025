import Story from "../components/Story/Story";
import { STORIES } from "../data/dummy_data";

export default function WorldNewsScreen() {
  const type = "WorldNews";
  const displayedStories = STORIES.filter((storyItem) => {
    return storyItem.type === type;
  });

  return <Story items={displayedStories} />;
}
