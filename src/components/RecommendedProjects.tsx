import { ArrowRight, Users, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Alumni Mentorship Program',
    description: 'Connect with experienced alumni to guide your career path',
    members: 234,
    date: 'Ongoing',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Mentoring',
  },
  {
    id: 2,
    title: 'Tech Innovation Hub',
    description: 'Collaborate on cutting-edge technology projects with fellow alumni',
    members: 156,
    date: 'Mar 2024',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Technology',
  },
  {
    id: 3,
    title: 'Startup Founders Circle',
    description: 'Network with alumni entrepreneurs and build your next venture',
    members: 89,
    date: 'Feb 2024',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Entrepreneurship',
  },
];

export default function RecommendedProjects() {
  return (
    <div className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Recommended Projects</h2>
        <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1 transition-colors">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex gap-4 p-4 rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-all cursor-pointer"
          >
            <div className="flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-medium px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full flex-shrink-0 ml-2">
                  {project.category}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">{project.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  <span>{project.members} members</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{project.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
