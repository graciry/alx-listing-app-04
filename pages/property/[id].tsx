// pages/property/[id].tsx
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetails";

interface Property {
  id: string;
  title: string;
  location: string;
  image: string;
  price: number;
  description: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
}

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchProperty = async () => {
      try {
        const response = await axios.get<Property>(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!property) return <p className="p-4 text-red-500">Property not found</p>;

  return <PropertyDetail property={property} />;
}
