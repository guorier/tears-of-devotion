import { PiStarFour, PiStarFourFill } from "react-icons/pi";
import { Bookmark, BookmarkCheck } from "lucide-react"
import { Toggle } from "@/components/ui/toggle"
import { useState } from "react"

export function ToggleDemo() {
  const [on, setOn] = useState(false)

  return (
    <Toggle
      pressed={on}
      onPressedChange={setOn}
      aria-label="Toggle bookmark"
      size="sm"
      variant="outline"
      className="text-[#212121] data-[state=on]:text-[#2b7fff]"
    >
      <span data-state={on ? "on" : "off"} className="data-[state=on]:hidden">
        <PiStarFour className="stroke-current" />
      </span>

      <span data-state={on ? "on" : "off"} className="hidden data-[state=on]:inline">
        <PiStarFourFill className="fill-[#2b7fff] stroke-[#2b7fff]" />
      </span>

      Check
    </Toggle>
  )
}
