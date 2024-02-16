import PropTypes from "prop-types";

import "./Skill.css";

const Skill = ({
  name,
  experienceDuration,
  proProjectCount,
  personalProjectCount,
  tools,
  valuationValue,
}) => {
  return (
    <div className="skill-comp">
      <header>
        <h3 className="name">{name}</h3>
        <div className="valuation">
          {[1, 2, 3, 4, 5].map((index) => (
            <span className={index <= valuationValue ? "fill" : ""}>
              &#9733;
            </span>
          ))}
        </div>
      </header>
      {experienceDuration &&
      Number.isInteger(proProjectCount) &&
      Number.isInteger(personalProjectCount) ? (
        <main className="additional-infos">
          <div>
            {experienceDuration ? experienceDuration : "Pas "} d’expériences
            professionnelles
          </div>
          <div>
            {proProjectCount ? proProjectCount : "Pas de"} projet
            {proProjectCount > 1 ? "s" : ""} professionnel
            {proProjectCount > 1 ? "s" : ""}
          </div>
          <div>
            {personalProjectCount ? personalProjectCount : "Pas de"} projet
            {personalProjectCount > 1 ? "s" : ""} personnel
            {personalProjectCount > 1 ? "s" : ""}
          </div>
        </main>
      ) : null}
      {tools.length > 0 ? (
        <footer className="tools">{tools.join(", ")}</footer>
      ) : null}
    </div>
  );
};

Skill.propTypes = {
  name: PropTypes.string,
  experienceDuration: PropTypes.string,
  proProjectCount: PropTypes.number,
  personalProjectCount: PropTypes.number,
  tools: PropTypes.arrayOf(PropTypes.string),
  valuationValue: PropTypes.string,
};

Skill.defaultProps = {
  name: undefined,
  experienceDuration: undefined,
  proProjectCount: undefined,
  personalProjectCount: undefined,
  tools: [],
  valuationValue: undefined,
};

export default Skill;
