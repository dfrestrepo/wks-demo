import "./HomeCard.scss"

const HomeCard = ({ title, city, state, project, image = "./substation-card-placeholder.png" }) => {
  return (
    <div className="card">
      <div className="card__header">
        <span class="cds-avatar cds-avatar--secondary cds-avatar--medium">
          <span className="cds-ico-skyline" />
        </span>
        <h2>{title}</h2>
      </div>
      <div className="card__info">
        <div className="card__info__left">
          <p>{city}</p>| <p>{state}</p>
        </div>
        <div className="card__info__right">
            <p>{project}</p>
        </div>
      </div>
      <div className="card__image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default HomeCard;
