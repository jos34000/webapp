import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Login from "@/lib/components/Organisms/Login.jsx"

describe("Login Component", () => {
  test("renders without crashing", () => {
    render(<Login />)
    expect(screen.getByText("Se connecter")).toBeInTheDocument()
  })

  test("allows user to enter email and password", () => {
    render(<Login />)
    const emailInput = screen.getByLabelText("Email")
    const passwordInput = screen.getByLabelText("Password")

    fireEvent.change(emailInput, { target: { value: "user@example.com" } })
    fireEvent.change(passwordInput, { target: { value: "password" } })

    expect(emailInput.value).toBe("user@example.com")
    expect(passwordInput.value).toBe("password")
  })

  test("toggles the switch and changes behavior", async () => {
    render(<Login />)
    const toggleSwitch = screen.getByLabelText("Switch")
    userEvent.click(toggleSwitch)

    await waitFor(() => {
      expect(screen.getByLabelText("ConfirmEmail")).toBeInTheDocument()

      expect(screen.getByLabelText("Nom")).toBeInTheDocument()

      expect(screen.getByLabelText("Prénom")).toBeInTheDocument()
    })
  })

  test("submits form with valid data", async () => {
    render(<Login />)
    const emailInput = screen.getByLabelText("Email")
    const passwordInput = screen.getByLabelText("Password")
    const submitButton = screen.getByLabelText("connexion")

    userEvent.type(emailInput, "user@example.com")
    userEvent.type(passwordInput, "password")
    userEvent.click(submitButton)

    await waitFor(() => {})
  })
})
