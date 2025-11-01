import { Search, MoreHorizontal } from "lucide-react";

export const TopBar = () => {
  return (
    <header className="h-12 bg-card border-b border-border flex items-center justify-between px-4">
      {/* Search bar */}
      <div className="flex-1 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-background border border-border rounded px-10 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2">
        <button className="p-1 hover:bg-muted rounded">
          <MoreHorizontal className="w-5 h-5 text-foreground" />
        </button>
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-semibold text-primary-foreground">
          MK
        </div>
      </div>
    </header>
  );
};
