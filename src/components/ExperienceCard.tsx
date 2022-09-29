const ExperienceCard = ({
  title,
  company,
  date,
  description,
}: {
  title: string;
  company: string;
  date: string;
  description: string;
}) => {
  return (
    <div className="experience-card">
      <div className="experience-card__title">
        <h3>{title}</h3>
        <h4>{company}</h4>
      </div>
      <div className="experience-card__date">{date}</div>
      <div className="experience-card__description">{description}</div>
    </div>
  );
};

export default ExperienceCard;
