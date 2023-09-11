import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "#000" : "#c9fbf4",
        color: reverse ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;

// <div className={`card ${reverse && "reverse"}`}>{children}</div>;
