"use client"

import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { Upload, File, X, CheckCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResumeUpload() {
  const [files, setFiles] = useState<File[]>([])
  const [uploadProgress, setUploadProgress] = useState(0)

  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles)
    // Simulate upload progress
    let progress = 0
    const interval = setInterval(() => {
      progress += 10
      setUploadProgress(progress)
      if (progress >= 100) {
        clearInterval(interval)
      }
    }, 500)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    multiple: true,
  })

  const removeFile = (file: File) => {
    setFiles(files.filter((f) => f !== file))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Upload className="h-5 w-5" />
          <span>Upload Resumes</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary"
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">Drag & drop PDF or DOCX files here, or click to select files</p>
        </div>
        {files.length > 0 && (
          <div className="mt-4 space-y-2">
            {files.map((file) => (
              <div key={file.name} className="flex items-center justify-between bg-muted p-2 rounded">
                <div className="flex items-center space-x-2">
                  <File className="h-5 w-5 text-primary" />
                  <span className="text-sm">{file.name}</span>
                </div>
                <button onClick={() => removeFile(file)} className="text-destructive hover:text-destructive/90">
                  <X className="h-5 w-5" />
                </button>
              </div>
            ))}
            <div className="flex items-center space-x-2">
              <Progress value={uploadProgress} className="flex-grow" />
              {uploadProgress === 100 && <CheckCircle className="h-5 w-5 text-green-500" />}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

