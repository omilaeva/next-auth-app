import { signIn } from "@/lib/auth"

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn();
      }}
    >
      <button className="btn"
              type="submit">Sign in</button>
    </form>
  )
}