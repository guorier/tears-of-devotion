import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="switch" />
      <Label htmlFor="switch">Switch</Label>
    </div>
  )
}
