import PropTypes from "prop-types";

const SchoolDetailsCard = ({
  image,
  name,
  eiin,
  location,
  details,
  phone,
  established,
}) => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-[#4b4b4b] to-[#013220] backdrop-blur-2xl rounded-lg flex border items-center gap-2 md:gap-10 md:w-3/4 mx-auto p-2 md:p-4">
        <div className="border rounded-md w-24 h-28 md:w-36 md:h-36">
          <img className="w-24 h-28 object-cover rounded-md md:w-36 md:h-36" src={image} alt="" />
        </div>
        <div className="flex-grow text-base text-white noto-serif-bengali">
          <h2>নামঃ {name}</h2>
          <h2>প্রতিষ্ঠিতঃ {established}</h2>
          <p>ইআইআইএন নাম্বারঃ {eiin}</p>
          <p>যোগাযোগঃ {phone}</p>
          <p>ঠিকানাঃ {location}</p>
        </div>
      </div>
      <div className="flex justify-end mt-2 md:w-3/4 mx-auto">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn btn-block noto-serif-bengali"
          onClick={() => document.getElementById(`modal_${eiin}`).showModal()}
        >
          আরো জানুন
        </button>
        <dialog id={`modal_${eiin}`} className="modal">
          <div className="modal-box p-8 md:p-10 bg-white/20 border backdrop-blur-md">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn text-white btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="card bg-white/60 md:w-full shadow-xl text-black">
              <figure className="border border-b-white p-4">
                <img className="w-full h-72 object-fill" src={image} alt=""/>
              </figure>
              <div className="card-body text-justify ">
                <h2 className="card-title">{name}</h2>
                <p className="">{details}</p>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default SchoolDetailsCard;

SchoolDetailsCard.propTypes = {
  image: PropTypes.node,
  name: PropTypes.node,
  established: PropTypes.node,
  phone: PropTypes.node,
  eiin: PropTypes.node,
  location: PropTypes.node,
  details: PropTypes.node,

}