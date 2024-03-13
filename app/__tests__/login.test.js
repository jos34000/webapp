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
    const toggleSwitch = screen.getByRole("checkbox", {
      name: /mode connexion/i,
    })
    userEvent.click(toggleSwitch)

    await waitFor(() => {
      // Vérifiez la présence de la confirmation de l'email
      expect(screen.getByLabelText("ConfirmEmail")).toBeInTheDocument()

      // Vérifiez la présence de l'input pour le nom
      expect(screen.getByLabelText("Nom")).toBeInTheDocument()

      // Vérifiez la présence de l'input pour le prénom
      expect(screen.getByLabelText("Prénom")).toBeInTheDocument()
    })
  })

  test("submits form with valid data", async () => {
    render(<Login />)
    // Mock ici si vous avez besoin de mocker la réponse de useLogin
    const emailInput = screen.getByLabelText("Email")
    const passwordInput = screen.getByLabelText("Password")
    const submitButton = screen.getByLabelText("connexion")

    userEvent.type(emailInput, "user@example.com")
    userEvent.type(passwordInput, "password")
    userEvent.click(submitButton)

    await waitFor(() => {
      // Vérifiez le comportement attendu après la soumission réussie
      // Par exemple, vérifier que vous êtes redirigé ou qu'un message de succès apparaît
    })
  })

  test("displays validation messages on empty submission", async () => {
    render(<Login />)
    const submitButton = screen.getByRole("button", { name: /se connecter/i })
    userEvent.click(submitButton)
    await waitFor(() => {
      // Remplacez ce texte par le message de validation attendu pour les champs vides
      expect(screen.getByText("Ce champ est requis")).toBeInTheDocument()
    })
  })
})
