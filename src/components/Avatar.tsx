const Avatar = props => (
  <img
    className={props.className}
    src={props.src === undefined ? "blank_src" : props.src}
    alt={props.alt}
  />
);

export default Avatar;
