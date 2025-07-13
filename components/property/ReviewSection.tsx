import { useState, useEffect } from "react";
import axios from "axios";

interface Review {
  id: string;
  comment: string;
  author?: string;
  rating?: number;
  createdAt?: string;
}

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ propertyId }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!propertyId) return;

    const fetchReviews = async () => {
      try {
        const response = await axios.get<Review[]>(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;

  return (
    <div className="mt-4 space-y-4">
      <h3 className="text-lg font-bold">Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews yet.</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="border p-3 rounded bg-gray-50">
            <p className="font-semibold text-gray-800">
              {review.author || "Anonymous"}
            </p>
            <p className="text-gray-700">{review.comment}</p>
            {review.rating && <p className="text-yellow-500">⭐ {review.rating}/5</p>}
          </div>
        ))
      )}
    </div>
  );
};

export default ReviewSection;
