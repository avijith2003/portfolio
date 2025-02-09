import { Home } from "lucide-react"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"

export function Header() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold">Avijith Manikandan</div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={handleHomeClick} size="sm">
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
          <Button variant="ghost" asChild>
            <a href="#projects">Projects</a>
          </Button>
        </div>
      </div>
    </header>
  )
}