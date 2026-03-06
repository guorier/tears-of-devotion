'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import * as React from 'react'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ChevronsUpDown, ChevronDown, Search } from 'lucide-react'

type Devotion = {
  id: string
  content: string
  created_at: string
}

export default function MyPage() {

  const [list, setList] = useState<Devotion[]>([])

  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})

  useEffect(() => {

    const load = async () => {

      const { data: user } = await supabase.auth.getUser()

      if (!user.user) return

      const { data } = await supabase
        .from('devotions')
        .select('*')
        .eq('user_id', user.user.id)
        .order('created_at', { ascending: false })

      setList((data as Devotion[]) || [])
    }

    load()

  }, [])

  const columns: ColumnDef<Devotion>[] = [
    {
      accessorKey: 'content',
      header: '묵상 내용',
      cell: ({ row }) => (
        <div className="whitespace-pre-wrap max-w-[720px] leading-relaxed">
          {row.getValue('content')}
        </div>
      ),
    },
    {
      accessorKey: 'created_at',
      header: ({ column }) => (
        <Button
          variant="ghost"
          className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          작성일
          <ChevronsUpDown className="size-4" />
        </Button>
      ),
      cell: ({ row }) => {
        const date = new Date(row.getValue('created_at') as string)
        return (
          <div className="text-sm text-muted-foreground">
            {date.toLocaleDateString()}
          </div>
        )
      },
    },
  ]

  const table = useReactTable({
    data: list,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex justify-center">
      <div className="w-full max-w-6xl p-10">

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-10">

          <div className="flex items-center mb-8">
            <h1 className="text-2xl font-bold text-slate-800">내 묵상</h1>
            <div className="ml-auto text-sm text-muted-foreground">
              {table.getFilteredRowModel().rows.length}개 기록
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">

            <div className="relative">
              <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
              <Input
                placeholder="묵상 검색..."
                value={(table.getColumn('content')?.getFilterValue() as string) ?? ''}
                onChange={(event) =>
                  table.getColumn('content')?.setFilterValue(event.target.value)
                }
                className="pl-9 w-[280px]"
              />
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <Table>
              <TableHeader className="bg-slate-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead key={header.id} className="font-semibold text-slate-600">
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      className="hover:bg-slate-50 transition"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="py-4">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                      묵상 기록이 없습니다
                    </TableCell>

                  </TableRow>

                )}

              </TableBody>

            </Table>

          </div>

          <div className="flex items-center justify-end gap-2 mt-6">

            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              이전
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              다음
            </Button>

          </div>
        </div>
      </div>
    </div>
  )
}