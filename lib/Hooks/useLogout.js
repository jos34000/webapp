import Cookies from "js-cookie"

export default function useLogout() {
  const token = Cookies.get("token")

  const handleLogout = async () => {
    console.log(token)

    if (token) {
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "auth/logout",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ token: token }),
          }
        )
        if (!response.ok) {
          throw new Error("Erreur de réponse")
        }

        Cookies.remove("token")
        window.location.href = "/login"
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("pas de cookie")
    }
  }

  return handleLogout
}
