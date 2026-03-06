import { twMerge } from 'tailwind-merge'
import { OctagonAlert, FileExclamationPoint } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"



interface EmptyProps {
  className?: string
  children?: React.ReactNode
}

export const EmptyBox = ({ children, className }: EmptyProps) => {
  return (
    <Empty className={twMerge(className)}>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <OctagonAlert className='text-blue-700'/>
        </EmptyMedia>
        <EmptyTitle>404 - Not Found</EmptyTitle>
        <EmptyDescription>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for
          what you need below.
          
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex items-center gap-2">
          {children}
        </div>
      </EmptyContent>
    </Empty>
  );
}
