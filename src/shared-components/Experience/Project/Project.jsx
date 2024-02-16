import PropTypes from "prop-types";
import Technologies from "../Technologies";

const Project = ({ title, state, technologies, children }) => (
  <div className="exp-project">
    <header>
      <h3 className="title">
        {title}&nbsp;{state ? <span className="state">· {state}</span> : null}
      </h3>
    </header>
    <main className="description">{children}</main>
    {technologies.length > 0 ? (
      <Technologies technologies={technologies} />
    ) : null}
  </div>
);

Project.propTypes = {
  title: PropTypes.string,
  state: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

Project.defaultProps = {
  title: undefined,
  technologies: [],
  state: "",
};

export default Project;
