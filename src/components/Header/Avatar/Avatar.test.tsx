import { render, screen } from "@testing-library/react";
import { Avatar } from "~/components/Header/Avatar/Avatar";
import type { User } from "next-auth";
describe("Avatar", () => {
  const mockUser: User = {
    id: "test-id",
    name: "test-name",
    image: "http://test-image-src",
  };

  test("renders Avatar with given user name as alt", () => {
    render(<Avatar user={mockUser} />);

    expect(screen.getByRole("img").getAttribute("alt")).toEqual(mockUser.name);
  });
});
