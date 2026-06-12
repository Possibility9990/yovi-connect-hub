import { Search } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex w-full items-center rounded-xl border border-yovi-border bg-white pl-4 pr-1 py-1 shadow-sm focus-within:border-yovi-primary transition-colors">
      <input
        type="search"
        placeholder="Search for products, services, or sellers..."
        aria-label="Search"
        className="flex-1 bg-transparent py-2.5 text-sm text-yovi-text placeholder:text-yovi-muted outline-none"
      />
      <button
        type="button"
        aria-label="Search"
        className="flex items-center gap-2 rounded-lg bg-yovi-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-yovi-secondary hover:-translate-y-0.5"
      >
        <Search className="h-4 w-4" />
        <span className="hidden sm:inline">Search</span>
      </button>
    </div>
  );
}