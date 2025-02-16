"use client"

import type React from "react"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Send } from "lucide-react"

export default function JobDescriptionInput() {
  const [jobDescription, setJobDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Send job description to AI backend
    console.log("Job description submitted:", jobDescription)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <FileText className="h-5 w-5" />
          <span>Job Description</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Paste the job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="h-40"
          />
          <Button type="submit" className="w-full">
            <Send className="mr-2 h-4 w-4" /> Analyze Resumes
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

