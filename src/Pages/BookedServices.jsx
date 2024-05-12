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

        <p className="text-center text-3xl md:text-4xl font-platypi underline mt-4">
          Booking Status
        </p>

        <div className="space-y-2">
          {myBookedServices.map((service) => (
            <div
              key={service._id}
              className="max-w-2xl p-8 sm:flex sm:space-x-6 dark:bg-gray-50 dark:text-gray-800 border rounded-md shadow-xl mx-auto"
            >
              <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                <img
                  src={service.serviceImg}
                  alt=""
                  className="object-cover object-center w-full h-full rounded dark:bg-gray-500"
                />
              </div>
              <div className="flex flex-col space-y-4 flex-grow">
                <div>
                  <h2 className="text-2xl font-semibold">
                    {service.serviceName}
                  </h2>
                  <span className="text-sm dark:text-gray-600">
                    Service ID: {service.serviceID}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="dark:text-gray-600">
                    Service Fee: ${service.price}
                  </span>

                  <span className="dark:text-gray-600">
                    Booking for: {service.serviceDate}
                  </span>
                </div>
                <div className="flex justify-end">
                  <button className=" btn-block bg-red-500 max-w-24 rounded-lg text-white">
                    {service.serviceStatus}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookedServices;
