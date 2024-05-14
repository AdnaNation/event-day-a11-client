import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetail = () => {
  const service = useLoaderData();

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>EventDay | Service Detail</title>
      </Helmet>
      <div className="flex flex-col justify-center max-w-7xl p-6 shadow-md rounded sm:px-12 dark:bg-gray-50 dark:text-gray-800 mx-auto ">
        <p className="font-platypi text-center mb-2">Provider Information:</p>
        <img
          src={service.providerImgURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {service.providerName}
            </h2>
            <p className="px-5 text-xs sm:text-base dark:text-gray-600">
              Service Area: {service.serviceArea}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col max-w-7xl dark:bg-gray-50 dark:text-gray-800 mx-auto shadow-xl  rounded-xl mb-6 p-2">
        <h2 className="border text-center font-platypi font-semibold shadow">
          Service Information
        </h2>
        <img
          src={service.imgURL}
          alt=""
          className="flex-shrink-0 object-cover rounded-sm md:h-[650px] sm:h-full dark:bg-gray-500 aspect-square p-1"
        />
        <div className="p-6 bg-white">
          <p className="ml-12 -mb-4 font-medium text-gray-400">Provider</p>
          <div className="flex items-center pb-4 border-bottom">
            <img
              className=" rounded-sm w-12 p-1 border bg-base-200 shadow-xl"
              src={service.providerImgURL}
              alt=""
            />

            <div className="font-semibold text-gray-400 border pr-1 bg-base-200 rounded-sm shadow-xl">
              {service.providerName}
            </div>
          </div>
          <h2 className="text-xl text-black font-semibold">
            {service.serviceName}
          </h2>
          <span className="block pb-2 text-sm text-black">
            Service Fee: ${service.price}
          </span>
          <p className="text-black">{service.description}</p>
          <Link to={`/booking/${service._id}`} className="flex justify-end">
            <button className="btn bg-red-300 text-white">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
