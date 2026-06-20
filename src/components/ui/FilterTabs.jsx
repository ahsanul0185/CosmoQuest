import { cn } from '../../utils/utils'

export function FilterTabs({ categories, activeCategory, onChange }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={cn(
            'px-5 py-2.5 rounded-full text-sm font-medium font-body transition-all duration-300 border',
            activeCategory === cat.id
              ? 'bg-primary text-on-primary border-primary shadow-lg shadow-primary/25'
              : 'bg-surface/60 text-on-surface-variant border-outline hover:border-primary/50 hover:text-star-white'
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
