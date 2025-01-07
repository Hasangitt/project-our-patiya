import PropTypes from "prop-types";

const DocDetails = ({ doctor }) => {
  const { name, details, chamber, phone, image, type } = doctor;
  return (
    <div>
     
      <div className=" bg-gradient-to-r from-[#4b4b4b] to-[#013220] backdrop-blur-2xl rounded-lg flex-col flex md:flex-row border items-center gap-2 md:gap-10 md:w-3/4 mx-auto p-2 md:p-4 justify-center md:justify-evenly">
        <div className="border rounded-md md:w-1/3">
          <img
            className=" w-36 h-36 md:w-full md:h-full object-cover rounded-md"
            src={image ? image : 'https://static.vecteezy.com/system/resources/thumbnails/043/099/050/small_2x/diverse-male-and-female-doctors-flat-illustration-vector.jpg'}
            alt=""
          />
        </div>
        <div className="text-base text-white noto-serif-bengali md:w-2/3">
          <h2>নামঃ {name}</h2>
          <p className="text-lime-300">সেবার ধরণঃ {type}</p>
          <h2>অধ্যয়নঃ {details}</h2>
          <p>চেম্বারঃ {chamber}</p>
          <p>যোগাযোগঃ {phone}</p>
        </div>
      </div>
    </div>
  );
};

export default DocDetails;

DocDetails.propTypes = {
  doctor: PropTypes.node,
};
