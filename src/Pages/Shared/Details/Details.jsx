import PropTypes from "prop-types";
import SchoolDetailsCard from "../DetailsCard/SchoolDetailsCard";

const Details = ({ school }) => {
  const { image, name, eiin, location, details, phone, established } = school;
  return (
    <div>
      <SchoolDetailsCard
      image={image}
       name={name}
       eiin={eiin}
       location={location}
       details={details}
       phone={phone}
       established={established}
      ></SchoolDetailsCard>
    </div>
  );
};

export default Details;

Details.propTypes = {
  school: PropTypes.node,
};
