import { FileText } from "lucide-react" // Changed from Home to FileText
import { Button } from "./ui/button"

export function Header() {
  // PDF file path (assuming resume.pdf is in your public folder)
  const resumePDF = "/resume.pdf"

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold">Avijith Manikandan</div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <a 
              href={resumePDF} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FileText className="h-4 w-4 mr-2" />
              Resume
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="#projects">Projects</a>
          </Button>
        </div>
      </div>
    </header>
  )
}