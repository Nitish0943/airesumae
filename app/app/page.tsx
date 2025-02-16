import ResumeUpload from "@/components/resume-upload"
import JobDescriptionInput from "@/components/job-description-input"
import ResultsSection from "@/components/results-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AppPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">AI Resume Screener</h1>
          <Button asChild variant="secondary">
            <Link href="/">Log Out</Link>
          </Button>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ResumeUpload />
          <JobDescriptionInput />
        </div>
        <ResultsSection />
      </main>
    </div>
  )
}

