import PropTypes from 'prop-types';

interface TechnologiesProps {
  technologies: string[];
}

const Technologies = ({ technologies }: TechnologiesProps) => (
  <footer className="exp-technologies">
    <div className="title">Technologies que j’utilise</div>
    {technologies.slice(0, technologies.length - 1).join(', ')} et{' '}
    {technologies[technologies.length - 1]}
  </footer>
);

Technologies.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.string),
};

Technologies.defaultProps = {
  technologies: [],
};

export default Technologies;
