import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, Users, Zap } from "lucide-react"
import LoginForm from "@/components/login-form"

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="container mx-auto px-4 py-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI Resume Screener</h1>
        <nav>
          <Link href="/app" className="text-primary hover:underline">
            Go to App
          </Link>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">Revolutionize Your Hiring Process with AI</h2>
            <p className="text-xl text-muted-foreground">
              Streamline your recruitment workflow and find the best candidates faster with our AI-powered resume
              screening tool.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FileText className="h-6 w-6 text-primary" />
                <span>Analyze hundreds of resumes in seconds</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-primary" />
                <span>Match candidates to job descriptions with precision</span>
              </div>
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-primary" />
                <span>Reduce hiring time and costs dramatically</span>
              </div>
            </div>
            <Button asChild size="lg" className="mt-8">
              <Link href="/app">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="bg-muted p-8 rounded-lg">
            <LoginForm />
          </div>
        </div>
      </main>
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        © 2025 AI Resume Screener. All rights reserved.
      </footer>
    </div>
  )
}

