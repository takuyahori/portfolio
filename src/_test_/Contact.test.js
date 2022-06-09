import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import ContactPage from "../component/ContactPage"

describe("Test ContactPage Component", () => {
    test("render form with 1 button", async () => {
        render(<ContactPage />);
        const button = await screen.findAllByRole("button");
        expect(button).toHaveLength(1);
    });

    test("should be able to submit the form", () => {
        render(<ContactPage />);
        const submitButton = screen.getByTestId("submit");
        const name = screen.getByPlaceholderText("name");
        const email = screen.getByPlaceholderText("email");
        const message = screen.getByPlaceholderText("message");
        
        userEvent.type(name, "takuya");
        userEvent.type(email, "takuyahori0904@gmail.com");
        userEvent.type(message, "hello");

        userEvent.click(submitButton)
        const userInfo = screen.getByText(null);
        expect(userInfo).toBeInTheDocument();

    });
})