import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { FaDumbbell } from "react-icons/fa6";

const ProgramDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { program } = location.state || {};

  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'dumbbell':
        return <FaDumbbell className="w-[50px] h-[25px] md:w-[70px] md:h-[30px] text-xxl text-white transform rotate-45" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-primary hover:text-primary/80 mb-8"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Program Details */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-6 mb-8">
            {program?.isIcon ? (
              <div className="w-24 h-24 bg-primary flex justify-center items-center p-4 rounded-lg">
                {renderIcon(program.iconType)}
              </div>
            ) : (
              <img 
                src={program?.icon} 
                alt={program?.alt} 
                className="w-24 h-24 object-cover rounded-lg" 
              />
            )}
            <div>
              <h1 className="text-3xl font-bold mb-2">{program?.title}</h1>
              <p className="text-gray-600">{program?.description}</p>
            </div>
          </div>

          {/* Additional Program Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Program Features</h3>
              <ul className="space-y-3">
                {program?.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                {program?.learnings?.map((learning, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    {learning}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails; 