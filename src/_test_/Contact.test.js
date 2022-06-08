import { render, screen } from "@testing-library/react"
import ContactPage from "../component/ContactPage"

describe("Test ContactPage Component", () => {
    test("render form with 1 button", async () => {
        render(<ContactPage />);
        const button = await screen.findAllByRole("button");
        expect(button).toHaveLength(1);
    })
})