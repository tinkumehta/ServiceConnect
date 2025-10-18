import React, { useState, useEffect } from "react";
import axios from "axios";

const api = import.meta.env.VITE_API_URL;

function GetReviews({ providerId }) {
  const [reviews, setReviews] = useState([]);
  const [stats, setStats] = useState({
    average: 0,
    total: 0,
    distribution: [0, 0, 0, 0, 0],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!providerId) return;

    const fetchReviews = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${api}/api/reviews/${providerId}`);
        const data = res.data?.data || [];

        setReviews(data);

        // ✅ Calculate review statistics
        if (data.length > 0) {
          const average =
            data.reduce((acc, review) => acc + review.rating, 0) / data.length;

          const distribution = [0, 0, 0, 0, 0];
          data.forEach((review) => {
            if (review.rating >= 1 && review.rating <= 5) {
              distribution[review.rating - 1]++;
            }
          });

          setStats({
            average: average.toFixed(1),
            total: data.length,
            distribution: distribution.map(
              (count) => (count / data.length) * 100
            ),
          });
        } else {
          setStats({ average: 0, total: 0, distribution: [0, 0, 0, 0, 0] });
        }
      } catch (error) {
        console.error("Failed to load reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [providerId]); // ✅ Runs when providerId changes

  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Review Summary
      </h2>

      {loading ? (
        <p className="text-gray-500">Loading reviews...</p>
      ) : stats.total > 0 ? (
        <>
          <div className="flex items-center mb-4">
            <span className="text-4xl font-bold text-yellow-500 mr-2">
              {stats.average}
            </span>
            <div>
              <p className="text-gray-600">Average Rating</p>
              <p className="text-sm text-gray-400">
                Based on {stats.total} reviews
              </p>
            </div>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star, i) => (
              <div key={star} className="flex items-center">
                <span className="w-10 text-gray-700">{star}★</span>
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden mx-2">
                  <div
                    className="h-full bg-yellow-400"
                    style={{
                      width: `${stats.distribution[5 - star].toFixed(1)}%`,
                    }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">
                  {stats.distribution[5 - star].toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-gray-500">No reviews yet for this provider.</p>
      )}
    </div>
  );
}

export default GetReviews;
