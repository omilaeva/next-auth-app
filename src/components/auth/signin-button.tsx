import { signIn } from "@/lib/auth"

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn()
      }}
    >
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              type="submit">Sign in</button>
    </form>
  )
}