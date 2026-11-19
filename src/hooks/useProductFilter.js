import { useMemo } from 'react'

export default function useProductFilter(items, { query = '', category = 'all', sort = 'featured' }) {
  return useMemo(() => {
    const q = query.trim().toLowerCase()
    let out = items.filter(
      (p) =>
        (category === 'all' || p.category === category) &&
        (!q || p.name.toLowerCase().includes(q) || p.category.replace('-', ' ').includes(q))
    )
    if (sort === 'name') out = [...out].sort((a, b) => a.name.localeCompare(b.name))
    if (sort === 'price-low') out = [...out].sort((a, b) => (a.price ?? Infinity) - (b.price ?? Infinity))
    if (sort === 'price-high') out = [...out].sort((a, b) => (b.price ?? -1) - (a.price ?? -1))
    if (sort === 'new') out = [...out].sort((a, b) => Number(b.newArrival) - Number(a.newArrival))
    return out
  }, [items, query, category, sort])
}
