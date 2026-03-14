import { FaQuoteLeft } from "react-icons/fa";

const ReviewCard = ({review}) => {
    const {userName, review: testimonial, user_photoURL} = review;
    return (
         <div className="max-w-md bg-white rounded-2xl p-8 shadow-md">
      
      {/* Quote Icon */}
      <FaQuoteLeft className="text-4xl text-gray-300 mb-4" />

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed mb-6">
        {testimonial}
      </p>

      {/* Divider */}
      <div className="border-2 border-dashed border-gray-300 mb-6"></div>

      {/* User */}
      <div className="flex items-center gap-4">
        
        {/* Avatar */}
        <div className="avatar">
          <img src={user_photoURL} alt={userName} className="rounded-full"/>
        </div>

        {/* Name + Role */}
        <div>
          <h3 className="font-bold text-lg text-gray-800">
           {userName}
          </h3>
          <p className="text-gray-500 text-sm">
            Senior Product Designer
          </p>
        </div>

      </div>
    </div>
    );
};

export default ReviewCard;