import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MeetingActionCardProps {
  icon: LucideIcon;
  title: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export const MeetingActionCard = ({ 
  icon: Icon, 
  title, 
  variant = "secondary",
  onClick 
}: MeetingActionCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-6 py-4 rounded-lg transition-all hover:scale-105",
        variant === "primary" 
          ? "bg-primary text-primary-foreground hover:bg-primary/90" 
          : "bg-card text-card-foreground hover:bg-card/80"
      )}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{title}</span>
    </button>
  );
};
