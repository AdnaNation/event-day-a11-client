import { Helmet } from "react-helmet-async";
import { GiPriceTag } from "react-icons/gi";
import { MdPlace } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const Services = () => {
  const services = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>EventDay | Services</title>
      </Helmet>
      <div className="text-center my-6 space-y-3">
        <h2 className="text-3xl md:text-5xl font-platypi">Our Services</h2>
        <p className="mx-6">
          The below are our running services at this moment. Take service and
          make your day special.
        </p>
      </div>
      <div className="grid md:grid-cols-2 justify-between container mx-auto gap-8 ">
        {services.map((service) => (
          <div
            key={service._id}
            className=" p-4 dark:bg-gray-50 dark:text-gray-800 shadow-xl rounded-md bg-base-200"
          >
            {" "}
            <p className="ml-12 -mb-4 font-medium text-gray-400">Provider</p>
            <div className="flex items-center pb-4 border-bottom">
              <img
                className=" rounded-sm w-12 p-1 border bg-base-200 shadow-xl"
                src={service.providerImgURL}
                alt=""
              />

              <div className="font-semibold text-gray-800 border pr-1 bg-base-200 rounded-sm shadow-xl">
                {service.providerName}
              </div>
            </div>
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
