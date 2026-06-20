import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'
import { SearchBar } from '../../components/ui/SearchBar'
import { FilterTabs } from '../../components/ui/FilterTabs'
import { Card } from '../../components/ui/Card'
import { Modal } from '../../components/ui/Modal'
import { spaceData, categories } from '../../data/spaceData'
import { useFilteredData } from '../../hooks/useFilteredData'
import { useLenis } from '../../hooks/useLenis'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export function Explore() {
  useLenis()
  const { gridRef } = useScrollReveal()
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  const urlQuery = searchParams.get('q') || ''
  const urlCategory = searchParams.get('category') || 'all'

  const [searchQuery, setSearchQuery] = useState(urlQuery)
  const [activeCategory, setActiveCategory] = useState(urlCategory)
  const [selectedItem, setSelectedItem] = useState(null)

  // Sync URL params to state on mount
  useEffect(() => {
    setSearchQuery(urlQuery)
    setActiveCategory(urlCategory)
  }, [urlQuery, urlCategory])

  // Update URL when search or filter changes
  const updateUrl = (query, category) => {
    const params = new URLSearchParams()
    if (query.trim()) params.set('q', query.trim())
    if (category !== 'all') params.set('category', category)
    setSearchParams(params)
  }

  const handleSearchChange = (value) => {
    setSearchQuery(value)
    updateUrl(value, activeCategory)
  }

  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    updateUrl(searchQuery, category)
  }

  const filteredData = useFilteredData(spaceData, searchQuery, activeCategory)

  const resultsCount = filteredData.length
  const totalCount = spaceData.length

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Header Section */}
      <section className="relative py-12 sm:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-10"
          >
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 text-sm text-on-surface-variant hover:text-primary transition-colors mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
              Back to Home
            </button>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-star-white mb-4">
              Cosmic <span className="text-primary">Search</span>
            </h1>
            <p className="text-on-surface-variant font-body max-w-xl mx-auto">
              Explore planets, astronauts, missions, galaxies, and cosmic facts across the universe.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mb-8"
          >
            <SearchBar value={searchQuery} onChange={handleSearchChange} />
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <FilterTabs
              categories={categories}
              activeCategory={activeCategory}
              onChange={handleCategoryChange}
            />
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary" />
              <span className="text-sm font-mono text-on-surface-variant uppercase tracking-wider">
                {searchQuery ? `Results for "${searchQuery}"` : 'All Records'}
              </span>
            </div>
            <span className="text-sm font-mono text-on-surface-variant/60">
              {resultsCount < 10 ? `0${resultsCount}` : resultsCount} / {totalCount < 10 ? `0${totalCount}` : totalCount}
            </span>
          </div>

          {/* Results Grid */}
          {resultsCount > 0 ? (
            <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredData.map((item) => (
                <Card
                  key={item.id}
                  item={item}
                  onClick={setSelectedItem}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-surface border border-outline mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-on-surface-variant"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
              <h3 className="font-headline text-xl text-star-white mb-2">No cosmic objects found</h3>
              <p className="text-on-surface-variant text-sm max-w-md mx-auto">
                Try adjusting your search terms or filter to discover something else in the universe.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                  setSearchParams(new URLSearchParams())
                }}
                className="mt-6 px-6 py-2.5 bg-primary text-on-primary font-body text-sm font-medium rounded-full hover:bg-primary-dim transition-colors"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Modal */}
      <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  )
}
