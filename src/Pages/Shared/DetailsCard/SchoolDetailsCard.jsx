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
      <div className=" bg-white/50 backdrop-blur-md rounded-lg flex border items-center gap-2 md:gap-10 md:w-3/4 mx-auto p-2 md:p-4">
        <div>
          <img className="w-22 h-28 object-cover md:w-36 md:h-full" src={image} alt="" />
        </div>
        <div className="flex-grow text-base text-black noto-serif-bengali">
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
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          আরো জানুন
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box p-8 md:p-10">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="card bg-base-100 md:w-full shadow-xl ">
              <figure className="border border-b-black p-4">
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
