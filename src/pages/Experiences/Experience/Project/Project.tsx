import Technologies from '../Technologies';

const Project = ({ title, state, technologies = [], children }: ProjectProps) => (
  <div className="exp-project">
    <header>
      <h3 className="title">
        {title}&nbsp;{state ? <span className="state">· {state}</span> : null}
      </h3>
    </header>
    <main className="description">{children}</main>
    {technologies.length > 0 ? <Technologies technologies={technologies} /> : null}
  </div>
);

export default Project;

interface ProjectProps {
  title: string;
  state?: string;
  technologies?: string[];
  children?: React.ReactNode;
}
