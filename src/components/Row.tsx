const Row = (props: any) => {
  return <div className={`row ${props.className}`}>{props.children}</div>;
};

export default Row;
