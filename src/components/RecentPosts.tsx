import { Heart, MessageCircle, Share2 } from 'lucide-react';

const posts = [
  {
    id: 1,
    author: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'Tech Corp',
    avatar: 'SJ',
    content: 'Just completed my first year at Tech Corp! Grateful for the mentorship from fellow alumni who helped me land this opportunity. If anyone is looking for career guidance, happy to help!',
    timestamp: '2 hours ago',
    likes: 42,
    comments: 12,
    shares: 3,
    image: null,
  },
  {
    id: 2,
    author: 'Michael Chen',
    role: 'Founder',
    company: 'StartupXYZ',
    avatar: 'MC',
    content: 'We are hiring! Looking for passionate developers and designers to join our founding team. Open to alumni from the class of 2015 onwards. Check the jobs section for details.',
    timestamp: '5 hours ago',
    likes: 67,
    comments: 18,
    shares: 8,
    image: null,
  },
  {
    id: 3,
    author: 'Emily Rodriguez',
    role: 'Data Scientist',
    company: 'Analytics Pro',
    avatar: 'ER',
    content: 'Just published an article on career transitions in tech. Would love to hear your experiences and insights in the comments!',
    timestamp: '1 day ago',
    likes: 34,
    comments: 9,
    shares: 5,
    image: null,
  },
];

export default function RecentPosts() {
  return (
    <div className="bg-white rounded-xl border border-emerald-100 p-6 shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Posts</h2>

      <div className="space-y-5">
        {posts.map((post) => (
          <div key={post.id} className="border-b border-gray-200 pb-5 last:border-0 last:pb-0">
            <div className="flex gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold text-sm flex-shrink-0">
                {post.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                <p className="text-xs text-gray-500">
                  {post.role} at {post.company} • {post.timestamp}
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">{post.content}</p>
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <button className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <Heart className="w-4 h-4" />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
                <Share2 className="w-4 h-4" />
                <span>{post.shares}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
