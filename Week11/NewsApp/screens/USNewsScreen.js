import Story from "../components/Story/Story";
import { STORIES } from "../data/dummy_data";

export default function USNewsScreen() {
  const type = "USNews";
  const displayedStories = STORIES.filter((storyItem) => {
    return storyItem.type === type;
  });

  return <Story items={displayedStories} />;
}
