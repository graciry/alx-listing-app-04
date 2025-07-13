import React from "react";

interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  description: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number; // e.g., in square meters
}

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-64 object-cover rounded mb-6"
      />

      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>

      <p className="text-2xl text-blue-600 font-semibold mb-4">
        KSh {property.price.toLocaleString()}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {property.bedrooms !== undefined && (
          <p>
            <strong>Bedrooms:</strong> {property.bedrooms}
          </p>
        )}
        {property.bathrooms !== undefined && (
          <p>
            <strong>Bathrooms:</strong> {property.bathrooms}
          </p>
        )}
        {property.area !== undefined && (
          <p>
            <strong>Area:</strong> {property.area} m²
          </p>
        )}
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Description</h2>
        <p className="text-gray-700 leading-relaxed">{property.description}</p>
      </div>
    </div>
  );
};

export default PropertyDetail;
