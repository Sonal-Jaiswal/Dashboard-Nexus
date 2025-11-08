import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Annual Alumni Reunion 2024',
    date: 'March 15, 2024',
    time: '6:00 PM',
    location: 'Grand Hall, Campus',
    attendees: 234,
    image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    title: 'Tech Career Workshop',
    date: 'March 20, 2024',
    time: '2:00 PM',
    location: 'Virtual Event',
    attendees: 156,
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    title: 'Networking Mixer',
    date: 'March 25, 2024',
    time: '7:00 PM',
    location: 'Downtown Plaza',
    attendees: 89,
    image: 'https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

export default function EventsCard() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-slate-900">Upcoming Events</h2>
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-1 transition-colors">
          View All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="group flex gap-4 p-4 rounded-lg hover:bg-slate-50 transition-all cursor-pointer border border-transparent hover:border-slate-200"
          >
            <div className="flex-shrink-0">
              <img
                src={event.image}
                alt={event.title}
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {event.title}
              </h3>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar className="w-4 h-4" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="w-4 h-4" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Users className="w-4 h-4" />
                  <span>{event.attendees} attending</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
