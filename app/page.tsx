import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import ClientLogos from "@/components/client-logos"
import AiModels from "@/components/ai-models"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ClientLogos />
        <AiModels />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

