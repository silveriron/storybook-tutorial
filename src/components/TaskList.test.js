import { render, screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as TaskListStories from "./TaskList.stories";

const { WithPinnedTasks } = composeStories(TaskListStories);

it("renders pinned tasks at the start of the list", () => {
  render(<WithPinnedTasks />);

  const pinnedInput = screen.getAllByRole("textbox");

  expect(pinnedInput[0]).toHaveValue("Task 6 (pinned)");
});
