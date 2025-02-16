import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Star, Briefcase, TrendingUp, AlertTriangle } from "lucide-react"

type Candidate = {
  id: string
  name: string
  score: number
  matchingSkills: string[]
}

type CandidateModalProps = {
  candidate: Candidate
  onClose: () => void
}

export default function CandidateModal({ candidate, onClose }: CandidateModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Briefcase className="h-5 w-5" />
            <span>{candidate.name}</span>
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Star className="h-5 w-5 text-yellow-400" />
            <h3 className="font-semibold">Overall Score</h3>
          </div>
          <p>{candidate.score}%</p>
        </div>
        <div>
          <h3 className="font-semibold flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>Matching Skills</span>
          </h3>
          <ul className="list-disc list-inside mt-2">
            {candidate.matchingSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold flex items-center space-x-2">
            <Star className="h-5 w-5 text-green-500" />
            <span>Strengths</span>
          </h3>
          <p className="mt-2">Strong technical background and relevant experience in the required technologies.</p>
        </div>
        <div>
          <h3 className="font-semibold flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-yellow-500" />
            <span>Areas for Improvement</span>
          </h3>
          <p className="mt-2">Could benefit from more experience in team leadership and project management.</p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

