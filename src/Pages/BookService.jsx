import { useLoaderData } from "react-router-dom";

const BookService = () => {
  const service = useLoaderData();
  console.log(service);
  return (
    <div>
      <h2>{service.serviceName}</h2>
    </div>
  );
};

export default BookService;
