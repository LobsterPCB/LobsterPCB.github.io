const TextBlock = ({ text, img }) => {
  return (
    <textblock>
      <div>
        <div className="text">
          <h3>{text.title}</h3>
          <p>{text.paragraph}</p>
        </div>
        {/* <div className="image">
          <img src={img} />
        </div> */}
      </div>
    </textblock>
  );
};

export default TextBlock;
