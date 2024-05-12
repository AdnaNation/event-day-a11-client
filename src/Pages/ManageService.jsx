import { GiPriceTag } from "react-icons/gi";
import { MdPlace } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ManageService = () => {
  const services = useLoaderData();
  const { user } = useAuth();
  const userEmail = user.email;
  const myServices = services.filter(
    (service) => service.providerEmail === userEmail
  );
  //   console.log(myServices, userEmail);
  return (
    <div className=" min-h-screen my-5">
      <h2 className="text-center text-3xl md:text-5xl my-3 underline font-platypi">
        My Services
      </h2>
      <div className="grid md:grid-cols-2 justify-between container mx-auto gap-8 ">
        {myServices.map((service) => (
          <div
            key={service._id}
            className=" p-4 dark:bg-gray-50 dark:text-gray-800 shadow-xl rounded-md bg-base-200"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <img
                  src={service.imgURL}
                  alt=""
                  className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                />
                <div className=" flex gap-7 text-xs">
                  <span className="flex items-center">
                    <MdPlace />
                    {service.serviceArea}
                  </span>
                  <span className="flex items-center gap-1">
                    <GiPriceTag />
                    {service.price}$
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <a rel="noopener noreferrer" href="#" className="block">
                  <h3 className="text-xl font-semibold dark:text-violet-600">
                    {service.serviceName}
                  </h3>
                </a>
                <p className="leading-snug dark:text-gray-600 shadow p-2">
                  {(service.description = service.description.slice(0, 100))}...
                  <Link to={`/service/${service._id}`}>
                    <button className="border bg-red-100 px-1 font-bold rounded-sm">
                      View Detail
                    </button>
                  </Link>
                </p>
                <div className="flex justify-center gap-20">
                  <Link to={`/editService/${service._id}`}>
                    <button className="btn bg-orange-400 text-white px-6">
                      Edit
                    </button>
                  </Link>
                  <button className="btn bg-red-500 text-white">Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageService;
