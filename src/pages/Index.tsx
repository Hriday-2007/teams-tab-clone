import { Sidebar } from "@/components/Sidebar";
import { TopBar } from "@/components/TopBar";
import { MeetingActionCard } from "@/components/MeetingActionCard";
import { Link2, Calendar, Hash, CalendarDays } from "lucide-react";
import emptyStateImg from "@/assets/empty-state.png";

const Index = () => {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />
        
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-6xl mx-auto p-8">
            {/* Page title */}
            <h1 className="text-3xl font-semibold text-foreground mb-8">Meet</h1>

            {/* Action cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
              <MeetingActionCard 
                icon={Link2}
                title="Create a meeting link"
                variant="primary"
              />
              <MeetingActionCard 
                icon={Calendar}
                title="Schedule a meeting"
              />
              <MeetingActionCard 
                icon={Hash}
                title="Join with a meeting ID"
              />
            </div>

            {/* Meeting links section */}
            <section className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">Meeting links</h2>
              <div className="bg-card rounded-lg p-8 flex flex-col items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Link2 className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-foreground font-medium mb-2">
                    Quickly create, save, and share links with anyone.
                  </p>
                  <a href="#" className="text-link hover:underline text-sm">
                    Learn more about meeting links
                  </a>
                </div>
              </div>
            </section>

            {/* Scheduled meetings section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">Scheduled meetings</h2>
                <button className="flex items-center gap-2 text-sm text-foreground hover:text-foreground/80">
                  <CalendarDays className="w-4 h-4" />
                  <span>View in calendar</span>
                </button>
              </div>
              
              <div className="bg-card rounded-lg overflow-hidden">
                <div className="p-8 flex items-center justify-center">
                  <p className="text-muted-foreground">You don't have anything scheduled.</p>
                </div>
                <div className="h-40 bg-gradient-to-b from-transparent to-muted/20 flex items-end justify-center">
                  <img 
                    src={emptyStateImg} 
                    alt="No scheduled meetings" 
                    className="w-full max-w-md h-32 object-cover object-top"
                  />
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
