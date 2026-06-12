import { Search, ChevronDown } from "lucide-react";

export function SearchBar() {
  return (
    <div className="flex w-full items-center overflow-hidden rounded-xl border border-yovi-border bg-white shadow-sm transition-colors focus-within:border-yovi-primary">
      <input
        type="search"
        placeholder="Search for products, services or providers..."
        aria-label="Search"
        className="flex-1 bg-transparent px-4 py-2.5 text-sm text-yovi-text placeholder:text-yovi-muted outline-none"
      />
      <div className="hidden h-6 w-px bg-yovi-border sm:block" />
      <button
        type="button"
        className="hidden items-center gap-1 px-3 py-2.5 text-sm font-medium text-yovi-muted transition-colors hover:text-yovi-text sm:inline-flex"
      >
        All Categories
        <ChevronDown className="h-4 w-4" />
      </button>
      <button
        type="button"
        aria-label="Search"
        className="flex items-center justify-center bg-yovi-primary px-4 py-3 text-white transition-colors hover:bg-yovi-secondary"
      >
        <Search className="h-5 w-5" />
      </button>
    </div>
  );
}