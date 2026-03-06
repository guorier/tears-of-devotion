'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useParams } from 'next/navigation'

export default function DevotionDetail() {

  const params = useParams()
  const id = params.id as string

  const [data, setData] = useState<any>(null)

  useEffect(() => {

    const load = async () => {

      const { data } = await supabase
        .from('devotions')
        .select('*')
        .eq('id', id)
        .single()

      setData(data)
    }

    load()

  }, [id])

  if (!data) return null

  return (
    <div className="p-20">

      <h1 className="text-xl mb-10">묵상 상세</h1>

      <div className="border p-5">
        {data.content}
      </div>

    </div>

  )
}