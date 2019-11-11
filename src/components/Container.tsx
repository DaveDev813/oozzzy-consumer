const Container = props => {
  return (
    <div className={`container ${props.className} nigga`}>{props.children}</div>
  );
};

export default Container;
