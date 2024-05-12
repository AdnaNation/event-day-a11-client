import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const BookedServices = () => {
  const { user } = useAuth();
  const bookedServices = useLoaderData();
  const myBookedServices = bookedServices.filter(
    (service) => service.clientEmail === user?.email
  );

  return (
    <div className="min-h-screen">
      <div>
        {myBookedServices.length === 0 && (
          <p className="text-red-500 font-bold text-center mt-10">
            You have not booked any service yet
          </p>
        )}
        {myBookedServices.map((service) => (
          <div key={service._id}>{service.serviceName}</div>
        ))}
      </div>
    </div>
  );
};

export default BookedServices;
