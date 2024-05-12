import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const BookService = () => {
  const { user } = useAuth();
  const service = useLoaderData();
  console.log(service);
  const handleBooking = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceID = form.serviceID.value;
    const serviceName = form.serviceName.value;
    const serviceImg = form.imgURL.value;
    const providerName = form.providerName.value;
    const providerEmail = form.providerEmail.value;
    const price = form.price.value;
    const clientName = form.clientName.value;
    const clientEmail = form.clientEmail.value;
    const serviceDate = form.serviceDate.value;
    const instruction = form.instruction.value;
    const serviceStatus = "pending";
    const bookedService = {
      serviceID,
      serviceName,
      serviceImg,
      providerName,
      providerEmail,
      price,
      clientEmail,
      clientName,
      serviceDate,
      instruction,
      serviceStatus,
    };
    console.log(bookedService);
    // send data to the server
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookedService),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Congrats!",
            text: "You have booked this service Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div className="min-h-screen pt-14 bg-base-300">
      <div className="bg-white bg-opacity-75 p-2 md:p-6 md:w-3/4 lg:w-2/4 mx-auto rounded-md py-10">
        <h2 className="text-3xl font-extrabold font-platypi text-center underline mb-12">
          Booking Detail
        </h2>
        <form onSubmit={handleBooking}>
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
                  placeholder="Service Name"
                  defaultValue={service.serviceName}
                  readOnly
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
                  readOnly
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
                  readOnly
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Service ID</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="serviceID"
                  placeholder="Service ID"
                  defaultValue={service._id}
                  readOnly
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Client Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="clientName"
                  defaultValue={user?.displayName}
                  placeholder="Client Name"
                  readOnly
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Client Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="clientEmail"
                  defaultValue={user?.email}
                  placeholder="Client Email"
                  readOnly
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Provider Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="providerName"
                  placeholder="Provider Name"
                  defaultValue={service.providerName}
                  readOnly
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Provider Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="providerEmail"
                  placeholder="Provider Email"
                  defaultValue={service.providerEmail}
                  readOnly
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Service Taking Date</span>
              </label>
              <label className="input-group">
                <input
                  type="date"
                  name="serviceDate"
                  placeholder="Provider Name"
                  required
                  className="input input-bordered w-full shadow-xl"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Special Instruction</span>
              </label>
              <label className="input-group">
                <textarea
                  className="w-full input input-bordered shadow-xl"
                  placeholder="Address , area, customized service plan"
                  name="instruction"
                  id=""
                ></textarea>
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Make a purchase"
            className="btn btn-block  btn-primary text-white shadow-xl mb-4 "
          />
        </form>
      </div>
    </div>
  );
};

export default BookService;
