import { useMemo } from 'react'

export function useFilteredData(data, searchQuery, activeCategory) {
  return useMemo(() => {
    let result = [...data]

    if (activeCategory !== 'all') {
      result = result.filter((item) => item.category === activeCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      result = result.filter((item) => {
        const nameMatch = item.searchName?.toLowerCase().includes(query)
        const descMatch = item.description?.toLowerCase().includes(query)
        const roleMatch = item.role?.toLowerCase().includes(query)
        const titleMatch = item.title?.toLowerCase().includes(query)
        const typeMatch = item.type?.toLowerCase().includes(query)
        const classificationMatch = item.classification?.toLowerCase().includes(query)
        return nameMatch || descMatch || roleMatch || titleMatch || typeMatch || classificationMatch
      })
    }

    return result
  }, [data, searchQuery, activeCategory])
}
