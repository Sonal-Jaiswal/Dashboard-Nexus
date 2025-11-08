import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react';

const activities = [
  {
    id: 1,
    user: 'Sarah Johnson',
    userClass: 'Class of 2018',
    action: 'shared a job opportunity',
    content: 'Senior Product Manager position available at Tech Corp. Great opportunity for experienced alumni!',
    time: '2 hours ago',
    likes: 24,
    comments: 8,
    avatar: 'SJ',
  },
  {
    id: 2,
    user: 'Michael Chen',
    userClass: 'Class of 2015',
    action: 'posted an update',
    content: 'Excited to announce my startup just raised Series A! Looking forward to connecting with fellow alumni entrepreneurs.',
    time: '5 hours ago',
    likes: 67,
    comments: 15,
    avatar: 'MC',
  },
  {
    id: 3,
    user: 'Emily Rodriguez',
    userClass: 'Class of 2019',
    action: 'shared a resource',
    content: 'Great article on career development strategies. Highly recommend for anyone looking to advance their career!',
    time: '1 day ago',
    likes: 42,
    comments: 12,
    avatar: 'ER',
  },
];

export default function NetworkActivity() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <h2 className="text-xl font-bold text-slate-900 mb-6">Network Activity</h2>

      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="border-b border-slate-100 last:border-0 pb-6 last:pb-0">
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {activity.avatar}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="mb-2">
                  <span className="font-semibold text-slate-900">{activity.user}</span>
                  <span className="text-slate-500 text-sm"> • {activity.userClass}</span>
                  <p className="text-sm text-slate-600">{activity.action}</p>
                </div>
                <p className="text-slate-700 mb-3">{activity.content}</p>
                <div className="flex items-center gap-6 text-sm text-slate-500">
                  <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{activity.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    <span>{activity.comments}</span>
                  </button>
                  <button className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                  <span className="ml-auto">{activity.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
