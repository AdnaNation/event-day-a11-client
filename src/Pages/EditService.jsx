import { useLoaderData } from "react-router-dom";

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
    const providerName = form.providerName.value;
    const providerEmail = form.providerEmail.value;
    const providerImgURL = form.providerImgURL.value;
    const editedService = {
      serviceName,
      imgURL,
      price,
      serviceArea,
      description,
      providerName,
      providerEmail,
      providerImgURL,
    };
  };
  console.log(service);
  return (
    <div className="min-h-screen pt-14 bg-base-300">
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
                  required
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
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
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Add Your Service"
            className="btn btn-block  btn-primary text-white shadow-xl mb-4 "
          />
        </form>
      </div>
    </div>
  );
};

export default EditService;
