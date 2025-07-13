import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500,
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
  };

  return (
    <main className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2">
        {/* Left: Booking Form + Policies */}
        <div className="space-y-8">
          <BookingForm />
          <CancellationPolicy />
        </div>

        {/* Right: Order Summary */}
        <div>
          <OrderSummary bookingDetails={bookingDetails} />
        </div>
      </div>
    </main>
  );
}
