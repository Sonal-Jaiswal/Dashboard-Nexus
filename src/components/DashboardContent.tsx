import NetworkOverview from './NetworkOverview';
import ProfileStrength from './ProfileStrength';
import RecommendedProjects from './RecommendedProjects';
import RecentPosts from './RecentPosts';
import RecommendedConnection from './RecommendedConnection';
import UpcomingEvents from './UpcomingEvents';

export default function DashboardContent() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome back, John!
        </h1>
        <p className="text-gray-600">
          Here's your alumni network overview
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <NetworkOverview />
          <RecommendedProjects />
          <RecentPosts />
        </div>
        <div className="space-y-6">
          <ProfileStrength />
          <RecommendedConnection />
          <UpcomingEvents />
        </div>
      </div>
    </div>
  );
}
