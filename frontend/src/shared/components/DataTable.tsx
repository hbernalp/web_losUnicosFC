import { type ReactNode, useState } from 'react'
import { cn } from '@/shared/lib/utils'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'

export interface Column<T> {
  key: string
  header: string
  render?: (item: T) => ReactNode
  sortable?: boolean
  className?: string
}

interface DataTableProps<T> {
  columns: Column<T>[]
  data: T[]
  keyExtractor: (item: T) => string
  pageSize?: number
  isLoading?: boolean
  actions?: (item: T) => ReactNode
}

export function DataTable<T>({ columns, data, keyExtractor, pageSize = 10, isLoading, actions }: DataTableProps<T>) {
  const [page, setPage] = useState(1)
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc')

  const totalPages = Math.max(1, Math.ceil(data.length / pageSize))

  const sorted = [...data].sort((a, b) => {
    if (!sortKey) return 0
    const va = String((a as Record<string, unknown>)[sortKey] ?? '')
    const vb = String((b as Record<string, unknown>)[sortKey] ?? '')
    return sortDir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va)
  })

  const paginated = sorted.slice((page - 1) * pageSize, page * pageSize)

  const toggleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
  }

  if (isLoading) {
    return (
      <div className="rounded-xl border border-surface-800 bg-surface-900">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex gap-4 p-4 border-b border-surface-800 last:border-0">
            {columns.map((col) => (
              <div key={col.key} className="h-4 bg-surface-800 rounded animate-pulse flex-1" />
            ))}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-surface-800 bg-surface-900 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-surface-800">
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={cn(
                    'px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-surface-400',
                    col.sortable && 'cursor-pointer select-none hover:text-surface-200 transition-colors',
                    col.className,
                  )}
                  onClick={() => col.sortable && toggleSort(col.key)}
                >
                  <span className="inline-flex items-center gap-1">
                    {col.header}
                    {col.sortable && sortKey === col.key ? (
                      sortDir === 'asc' ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />
                    ) : col.sortable ? (
                      <ArrowUpDown className="h-3 w-3 opacity-50" />
                    ) : null}
                  </span>
                </th>
              ))}
              {actions && <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wider text-surface-400">Acciones</th>}
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-800">
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (actions ? 1 : 0)} className="px-4 py-12 text-center text-surface-500">
                  No hay registros disponibles
                </td>
              </tr>
            ) : (
              paginated.map((item) => (
                <tr key={keyExtractor(item)} className="hover:bg-surface-800/50 transition-colors">
                  {columns.map((col) => (
                    <td key={col.key} className={cn('px-4 py-3 text-surface-200', col.className)}>
                      {col.render ? col.render(item) : String((item as Record<string, unknown>)[col.key] ?? '')}
                    </td>
                  ))}
                  {actions && <td className="px-4 py-3 text-right">{actions(item)}</td>}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between px-4 py-3 border-t border-surface-800">
          <span className="text-xs text-surface-500">
            Página {page} de {totalPages} ({data.length} registros)
          </span>
          <div className="flex items-center gap-1">
            <button onClick={() => setPage(1)} disabled={page === 1} className="p-1.5 rounded text-surface-400 hover:text-surface-100 hover:bg-surface-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer">
              <ChevronsLeft className="h-4 w-4" />
            </button>
            <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="p-1.5 rounded text-surface-400 hover:text-surface-100 hover:bg-surface-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="px-3 py-1 text-sm text-surface-300">{page}</span>
            <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="p-1.5 rounded text-surface-400 hover:text-surface-100 hover:bg-surface-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer">
              <ChevronRight className="h-4 w-4" />
            </button>
            <button onClick={() => setPage(totalPages)} disabled={page === totalPages} className="p-1.5 rounded text-surface-400 hover:text-surface-100 hover:bg-surface-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer">
              <ChevronsRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
