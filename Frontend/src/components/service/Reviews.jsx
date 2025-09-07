import { useState, useEffect, useContext } from 'react';
import axios from 'axios';

export default function Reviews() {
  const [providerId, setProviderId] = useState('');
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ rating: '', comment: '' });
 
  const [isLoading, setIsLoading] = useState(false);
  const [providerInfo, setProviderInfo] = useState(null);

  const fetchReviews = async () => {
    if (!providerId) return;
    setIsLoading(true);
    try {
      const res = await axios.get(`/api/reviews/${providerId}`);
      setReviews(res.data.data);
      
      // In a real app, you would fetch provider info from another endpoint
      setProviderInfo({
        name: "Service Provider",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
        service: "Professional Service"
      });
    } catch (err) {
      console.error("Error fetching reviews:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        '/api/reviews',
        { providerId, rating: form.rating, comment: form.comment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        }
      );
      setForm({ rating: '', comment: '' });
      fetchReviews();
    } catch (err) {
      alert(err.response?.data?.message || 'Error adding review');
    }
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Service Reviews</h1>
          <p className="text-gray-600">Share your experience and read what others have to say</p>
        </div>

        {/* Provider Search Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Find Provider Reviews</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <label htmlFor="providerId" className="block text-sm font-medium text-gray-700 mb-1">
                Provider ID
              </label>
              <input
                id="providerId"
                placeholder="Enter provider ID"
                value={providerId}
                onChange={(e) => setProviderId(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            <div className="flex items-end">
              <button 
                onClick={fetchReviews} 
                disabled={!providerId || isLoading}
                className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Loading...
                  </div>
                ) : (
                  'Load Reviews'
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Provider Info (if available) */}
        {providerInfo && (
          <div className="bg-white rounded-xl shadow-md p-6 mb-8 flex items-center gap-4">
            <img
              src={providerInfo.avatar}
              alt={providerInfo.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-200"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{providerInfo.name}</h3>
              <p className="text-gray-600">{providerInfo.service}</p>
              <div className="flex items-center mt-1">
                {renderStars(4)} {/* Assuming average rating of 4 */}
                <span className="ml-2 text-sm text-gray-500">(Based on {reviews.length} reviews)</span>
              </div>
            </div>
          </div>
        )}

        {/* Reviews List */}
        {reviews.length > 0 ? (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Customer Reviews</h2>
            <div className="grid gap-4">
              {reviews.map((r) => (
                <div key={r._id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                        {r.user?.name?.charAt(0) || 'U'}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-800">{r.user?.name || 'Anonymous'}</h4>
                        <div className="flex items-center">
                          {renderStars(r.rating)}
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2">{r.comment}</p>
                      <p className="text-sm text-gray-500">
                        {new Date().toLocaleDateString()} • Rating: {r.rating}/5
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : providerId ? (
          <div className="bg-white rounded-xl shadow-md p-8 text-center mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No reviews yet</h3>
            <p className="text-gray-500">Be the first to share your experience with this provider!</p>
          </div>
        ) : null}

        {/* Add Review Form */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Share Your Experience</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                Your Rating
              </label>
              <div className="flex space-x-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setForm({ ...form, rating: star.toString() })}
                    className={`text-2xl focus:outline-none ${
                      parseInt(form.rating) >= star ? 'text-yellow-400' : 'text-gray-300'
                    } hover:text-yellow-500 transition-colors duration-200`}
                  >
                    ★
                  </button>
                ))}
              </div>
              <input
                type="number"
                id="rating"
                min="1"
                max="5"
                placeholder="Rating (1-5)"
                value={form.rating}
                onChange={(e) => setForm({ ...form, rating: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              />
            </div>
            
            <div>
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Your Review
              </label>
              <textarea
                id="comment"
                placeholder="Share your experience with this provider..."
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg shadow-md hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}