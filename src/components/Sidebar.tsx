import { X, LayoutDashboard, Users, Calendar, Briefcase, GraduationCap, Settings, MessageSquare, TrendingUp } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '#', current: true },
  { name: 'Alumni Network', icon: Users, href: '#', current: false },
  { name: 'Events', icon: Calendar, href: '#', current: false },
  { name: 'Career Center', icon: Briefcase, href: '#', current: false },
  { name: 'Mentorship', icon: GraduationCap, href: '#', current: false },
  { name: 'Messages', icon: MessageSquare, href: '#', current: false },
  { name: 'Analytics', icon: TrendingUp, href: '#', current: false },
  { name: 'Settings', icon: Settings, href: '#', current: false },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 z-40 lg:hidden transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-gradient-to-b from-emerald-600 to-emerald-700 shadow-xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between h-20 px-6 border-b border-emerald-500/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-emerald-600 font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold text-white">NEXUS</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden text-emerald-100 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    item.current
                      ? 'bg-white/20 text-white shadow-lg'
                      : 'text-emerald-50 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {item.name}
                </a>
              );
            })}
          </nav>

          <div className="p-4 m-4 bg-white/15 rounded-lg border border-white/20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center text-emerald-600 font-semibold text-sm flex-shrink-0">
                JD
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">John Doe</p>
                <p className="text-xs text-emerald-100 truncate">Class of 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
