import { UserPlus, Calendar, Briefcase, MessageSquare, Users, GraduationCap } from 'lucide-react';

const actions = [
  {
    name: 'Find Alumni',
    description: 'Connect with alumni',
    icon: UserPlus,
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
  },
  {
    name: 'Create Event',
    description: 'Organize a meetup',
    icon: Calendar,
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'from-emerald-50 to-teal-50',
  },
  {
    name: 'Post Job',
    description: 'Share opportunities',
    icon: Briefcase,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'from-orange-50 to-amber-50',
  },
  {
    name: 'Start Discussion',
    description: 'Engage with network',
    icon: MessageSquare,
    color: 'from-violet-500 to-purple-500',
    bgColor: 'from-violet-50 to-purple-50',
  },
  {
    name: 'Join Groups',
    description: 'Find your community',
    icon: Users,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'from-pink-50 to-rose-50',
  },
  {
    name: 'Mentorship',
    description: 'Guide or be guided',
    icon: GraduationCap,
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'from-indigo-50 to-blue-50',
  },
];

export default function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sticky top-24">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Quick Actions</h2>

      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.name}
              className={`p-4 rounded-lg bg-gradient-to-br ${action.bgColor} border border-slate-200 hover:shadow-md transition-all group text-left`}
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">{action.name}</h3>
              <p className="text-xs text-slate-600">{action.description}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg text-white">
        <h3 className="font-semibold mb-2">Upgrade to Premium</h3>
        <p className="text-sm text-blue-50 mb-4">
          Unlock exclusive features and networking opportunities
        </p>
        <button className="w-full bg-white text-blue-600 font-semibold py-2 rounded-lg hover:bg-blue-50 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}
