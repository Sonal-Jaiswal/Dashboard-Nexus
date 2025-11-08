import { Users, TrendingUp, Target, Award } from 'lucide-react';

const stats = [
  { label: 'Connected Alumni', value: '1,247', icon: Users, color: 'emerald' },
  { label: 'Network Growth', value: '+23%', icon: TrendingUp, color: 'emerald' },
  { label: 'Goals Achieved', value: '156', icon: Target, color: 'emerald' },
  { label: 'Achievements', value: '89', icon: Award, color: 'emerald' },
];

export default function NetworkOverview() {
  return (
    <div className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Network Overview</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-emerald-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100/50 rounded-lg border border-emerald-200">
        <p className="text-sm text-emerald-800">
          <span className="font-semibold">Tip:</span> Complete your profile to unlock more networking opportunities and get recommendations from alumni.
        </p>
      </div>
    </div>
  );
}
