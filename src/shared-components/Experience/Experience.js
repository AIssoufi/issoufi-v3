import PropTypes from "prop-types";

import "./Experience.css";

import Project from "./Project";
import Technologies from "./Technologies";

const Experience = ({
  jobName,
  entityName,
  entityLogoUrl,
  contratType,
  city,
  startDate,
  endDate,
  duration,
  children,
}) => {
  return (
    <article className="exp-comp">
      <header className="summary">
        <img className="entity-logo" src={entityLogoUrl} alt={entityName} />
        <div className="job-summary">
          <h2 className="job-name">{jobName}</h2>
          <div className="job-details">{`${entityName} · ${contratType} · ${city}`}</div>
          <div className="job-duration">{`${startDate} – ${endDate} · ${duration}`}</div>
        </div>
      </header>
      <main className="details">{children}</main>
    </article>
  );
};

Experience.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  jobName: PropTypes.string,
  entityName: PropTypes.string,
  entityLogoUrl: PropTypes.string,
  contratType: PropTypes.string,
  city: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  duration: PropTypes.string,
};

Experience.defaultProps = {
  children: undefined,
  jobName: undefined,
  entityName: undefined,
  entityLogoUrl: undefined,
  contratType: undefined,
  city: undefined,
  startDate: undefined,
  endDate: undefined,
  duration: undefined,
};

Experience.Technologies = Technologies;
Experience.Project = Project;

export default Experience;
