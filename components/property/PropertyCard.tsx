import React from "react";

interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  description: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow-sm hover:shadow-md transition duration-300 overflow-hidden">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.title}</h3>
        <p className="text-sm text-gray-500">{property.location}</p>
        <p className="text-blue-600 font-bold mt-2">KSh {property.price.toLocaleString()}</p>
        <p className="text-sm text-gray-700 mt-2 line-clamp-2">
          {property.description}
        </p>
        <a
          href={`/property/${property.id}`}
          className="mt-4 inline-block text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 text-sm"
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
