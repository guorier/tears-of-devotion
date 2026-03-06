'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useParams } from 'next/navigation'

type Devotion = {
  id: string
  content: string
  created_at: string
}

export default function DevotionDetail() {
  const params = useParams()
  const id = params.id as string
  const [data, setData] = useState<Devotion | null>(null)

  useEffect(() => {
    const load = async () => {
      const { data } = await supabase
        .from('devotions')
        .select('*')
        .eq('id', id)
        .single()
      setData(data as Devotion)
    }
    load()
  }, [id])

  if (!data) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex justify-center">
      <div className="w-full max-w-4xl p-10">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-10">
          <div className="flex items-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800">묵상 상세</h1>
            <div className="ml-auto text-sm text-muted-foreground">
              {new Date(data.created_at).toLocaleDateString()}
            </div>
          </div>

          <div className="border-t border-slate-200 mb-8" />

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8 leading-relaxed whitespace-pre-wrap text-slate-700">
            {data.content}
          </div>

          <div className="border-b border-slate-200 mt-8" />
        </div>
      </div>
    </div>
  )
}