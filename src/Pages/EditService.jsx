import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditService = () => {
  const service = useLoaderData();

  const handleEditService = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const imgURL = form.imgURL.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;

    const editedService = {
      serviceName,
      imgURL,
      price,
      serviceArea,
      description,
    };

    // send data to the server
    fetch(`https://event-day-server.vercel.app/services/${service._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editedService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your service has been updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="min-h-screen pt-14 bg-base-300">
      <Helmet>
        <title>EventDay | Edit Service</title>
      </Helmet>
      <div className="bg-white bg-opacity-75 p-2 md:p-6 md:w-3/4 lg:w-2/4 mx-auto rounded-md py-10">
        <h2 className="text-3xl font-extrabold font-platypi text-center underline mb-12">
          Add Your Service
        </h2>
        <form onSubmit={handleEditService}>
          <p className="font-bold underline">Service Information</p>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2 w-full">
              <label className="label">
                <span className="label-text">Service Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="serviceName"
                  defaultValue={service.serviceName}
                  placeholder="Service Name"
                  required
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="imgURL"
                  placeholder="Service Image URL"
                  defaultValue={service.imgURL}
                  required
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price ($)</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  defaultValue={service.price}
                  required
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Service Area</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="serviceArea"
                  placeholder="Service Area"
                  defaultValue={service.serviceArea}
                  required
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
          </div>

          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  defaultValue={service.description}
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Update Your Service"
            className="btn btn-block  btn-primary text-white shadow-xl mb-4 "
          />
        </form>
      </div>
    </div>
  );
};

export default EditService;
