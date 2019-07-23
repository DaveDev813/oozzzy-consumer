const Card = props => (
  <div className="card card-poster gradient-overlay mb-4 mb-lg-0">
    {props.children}
  </div>
);

const CardTitle = props => {
  return <h6 className={`card-title ${props.className}`}>{props.children}</h6>;
};

const CardBody = props => (
  <div className={`card-body ${props.className}`}>{props.children}</div>
);

const CardSubtitle = props => (
  <div className="d-flex card-subtitle mb-3">{props.children}</div>
);

const CardImg = props => {
  const overlay = props.overlay ? "-overlay" : "";
  const position = props.position ? `-${props.position}` : "";

  return (
    <div className={`card-img${overlay}${position} ${props.className}`}>
      {props.children}
    </div>
  );
};

const CardTile = props => (
  <a {...props} className="tile-link">
    {props.children}
  </a>
);

const CardText = props => {
  const isMuted = props.muted ? "text-muted" : "";
  const textSize = props.size ? `text-${props.size}` : "";
  return <p className={`card-text ${isMuted} ${textSize}`}>{props.children}</p>;
};

export { Card, CardBody, CardTitle, CardSubtitle, CardImg, CardTile, CardText };
