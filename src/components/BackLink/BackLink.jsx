import { NavBack } from "./BackLink.styled";
import PropTypes from 'prop-types';

const BackLink = ({ to }) => {
  return (
    <NavBack to={to}>
      Go Back
    </NavBack>
  );
};

export default BackLink;

// BackLink.propTypes = {
//   to: PropTypes.shape({
//     from:PropTypes.string,
//   }).isRequired,
// }