import Link from 'next/link'

import { Container } from '@/components/Container'
import { OctagonAlert } from "lucide-react";


export default function NotFound() {
  return (
    <Container className="items-center justify-between h-full py-24">
      <div className="flex items-center gap-4 px-50">
        <OctagonAlert className='text-error-100 size-80' />
        <div className='flex flex-col items-end flex-1 gap-10'>
          <p className="text-[100px] font-bold text-neutral-950">
            404
          </p>
          <div className='flex flex-col items-end gap-3'>
            <div className="text-[36px] font-semibold text-error-200">
              Page not found
            </div>
            <div className="text-[20px] text-silver-400">
              Sorry, we couldn’t find the page you’re looking for.
            </div>
          </div>
          <Link href="/"
            className="text-sm font-semibold text-silver-600 underline transition hover:text-blue-600"
          >
            Go to the Home Page
          </Link>
        </div>
      </div>
    </Container>
  )
}
