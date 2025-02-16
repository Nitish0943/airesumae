"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Star, TrendingUp } from "lucide-react"
import CandidateModal from "./candidate-modal"

type Candidate = {
  id: string
  name: string
  score: number
  matchingSkills: string[]
}

const mockCandidates: Candidate[] = [
  { id: "1", name: "John Doe", score: 95, matchingSkills: ["React", "TypeScript", "Node.js"] },
  { id: "2", name: "Jane Smith", score: 88, matchingSkills: ["Python", "Machine Learning", "Data Analysis"] },
  { id: "3", name: "Bob Johnson", score: 82, matchingSkills: ["Java", "Spring Boot", "SQL"] },
]

export default function ResultsSection() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null)

  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5" />
          <span>Results</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Matching Skills</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCandidates.map((candidate) => (
              <TableRow key={candidate.id}>
                <TableCell className="font-medium">{candidate.name}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>{candidate.score}%</span>
                  </div>
                </TableCell>
                <TableCell>{candidate.matchingSkills.join(", ")}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" onClick={() => setSelectedCandidate(candidate)}>
                    <Eye className="mr-2 h-4 w-4" /> View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {selectedCandidate && (
          <CandidateModal candidate={selectedCandidate} onClose={() => setSelectedCandidate(null)} />
        )}
      </CardContent>
    </Card>
  )
}

