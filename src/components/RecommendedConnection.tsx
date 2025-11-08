import { UserPlus, Briefcase, MapPin } from 'lucide-react';

export default function RecommendedConnection() {
  return (
    <div className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended Connection</h3>

      <div className="flex flex-col items-center text-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">
          AK
        </div>
        <h4 className="font-bold text-gray-900 mb-1">Alex Kumar</h4>
        <p className="text-sm text-emerald-600 font-medium mb-3">Class of 2018</p>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Briefcase className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>Senior Engineer at TechCorp</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>San Francisco, CA</span>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4 leading-relaxed">
        "I mentor young professionals in the tech industry and love connecting with alumni who are passionate about growth."
      </p>

      <div className="flex gap-2">
        <button className="flex-1 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
          <UserPlus className="w-4 h-4" />
          Connect
        </button>
        <button className="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium text-sm transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
}
