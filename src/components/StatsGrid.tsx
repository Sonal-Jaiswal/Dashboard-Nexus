import { Users, Calendar, Briefcase, TrendingUp } from 'lucide-react';

const stats = [
  {
    name: 'Alumni Connected',
    value: '1,247',
    change: '+12%',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
  },
  {
    name: 'Upcoming Events',
    value: '8',
    change: '3 this week',
    icon: Calendar,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50',
  },
  {
    name: 'Job Opportunities',
    value: '45',
    change: '12 new',
    icon: Briefcase,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'from-orange-50 to-amber-50',
  },
  {
    name: 'Network Growth',
    value: '23%',
    change: 'vs last month',
    icon: TrendingUp,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'from-violet-50 to-purple-50',
  },
];

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.name}
            className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-slate-600 mb-1">{stat.name}</p>
                <p className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-500">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.bgColor}`}>
                <Icon className={`w-6 h-6 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} strokeWidth={2.5} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
