import { MessageCircle, Video, Users, Calendar, Bell } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: MessageCircle, label: "Chat", active: false },
  { icon: Video, label: "Meet", active: true },
  { icon: Users, label: "Communities", active: false },
  { icon: Calendar, label: "Calendar", active: false },
  { icon: Bell, label: "Activity", active: false },
];

export const Sidebar = () => {
  return (
    <aside className="w-16 bg-sidebar border-r border-sidebar-border flex flex-col items-center py-4 gap-6">
      {/* Logo */}
      <div className="w-8 h-8 bg-primary rounded flex items-center justify-center mb-4">
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
          <path d="M11 2H4v9h7V2z" fill="#5B5FC7"/>
          <path d="M11 13H4v9h7v-9z" fill="#5B5FC7"/>
          <path d="M22 2h-7v9h7V2z" fill="#5B5FC7"/>
          <path d="M22 13h-7v9h7v-9z" fill="#5B5FC7"/>
        </svg>
      </div>

      {/* Navigation items */}
      {navItems.map((item) => (
        <button
          key={item.label}
          className={cn(
            "flex flex-col items-center gap-1 w-full py-2 transition-colors relative group",
            item.active && "text-sidebar-accent"
          )}
        >
          {item.active && (
            <div className="absolute left-0 w-0.5 h-8 bg-sidebar-accent" />
          )}
          <item.icon className={cn("w-5 h-5", item.active ? "text-sidebar-accent" : "text-sidebar-foreground")} />
          <span className={cn("text-[10px]", item.active ? "text-sidebar-accent" : "text-sidebar-foreground")}>
            {item.label}
          </span>
        </button>
      ))}
    </aside>
  );
};
