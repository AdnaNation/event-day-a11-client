import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const ServiceToDo = () => {
  const { user } = useAuth();
  const bookedServices = useLoaderData();
  const myServices = bookedServices.filter(
    (service) => service.providerEmail === user.email
  );

  const handleStatus = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const serviceStatus = form.serviceStatus.value;

    // send data to the server
    fetch(`http://localhost:5000/bookedServices/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ serviceStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "You have changed the status Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="min-h-screen ">
      <Helmet>
        <title>EventDay | Service-To-Do</title>
      </Helmet>
      <div className="space-y-2 my-5">
        {myServices.length === 0 ? (
          <p className="text-red-500 font-bold text-center mt-10">
            You have not added any service yet
          </p>
        ) : (
          <p className="text-center text-3xl md:text-4xl font-platypi underline mt-4">
            Booked Services
          </p>
        )}
        {myServices.map((service) => (
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
                <p className="text-sm dark:text-gray-600">
                  Service ID: {service.serviceID}
                </p>
                <p className="text-sm dark:text-gray-600">
                  Client: {service.clientName}
                </p>
              </div>
              <div className="flex flex-col">
                <span className="dark:text-gray-600">
                  Service Fee: ${service.price}
                </span>

                <span className="dark:text-gray-600">
                  Booking for: {service.serviceDate}
                </span>
              </div>
              <form
                onSubmit={(e) => handleStatus(e, service._id)}
                className="flex justify-end"
              >
                <div className="form-control">
                  <select
                    name="serviceStatus"
                    defaultValue={service.serviceStatus}
                    className=" w-full bg-red-500 rounded-lg text-white"
                  >
                    <option value="pending">pending</option>
                    <option value="working">working</option>
                    <option value="completed">completed</option>
                  </select>
                </div>

                <input
                  type="submit"
                  value="Save Changes"
                  className="border bg-white w-24 ml-2 rounded text-xs  "
                />
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceToDo;
