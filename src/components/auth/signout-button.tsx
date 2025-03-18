import {signOut} from "@/lib/auth"

export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
    >
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              type="submit">Sign Out</button>
    </form>
  )
}