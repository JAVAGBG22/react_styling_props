const NameTag = ({ firstName, lastName, style }) => {
  return (
    <div style={style} className="nametag">
      <p>{firstName}</p>
      <p>{lastName}</p>
    </div>
  );
};

export default NameTag;
