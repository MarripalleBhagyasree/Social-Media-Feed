import Feed from "@/components/Feed"
import RegistrationForm from "@/components/RegistrationForm"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Social Media Feed</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Register</h2>
          <RegistrationForm />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Feed</h2>
          <Feed />
        </div>
      </div>
    </main>
  )
}

