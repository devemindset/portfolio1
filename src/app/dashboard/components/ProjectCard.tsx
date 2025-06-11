import type { FC } from 'react';

interface ProjectCardProps {}

const ProjectCard: FC<ProjectCardProps> = ({}) => {
        return (
            <section>
        
        <div>
          <div>
            <p>project name</p>
            <p>clien name</p>
            <p>total hours : 45h</p>
          </div>
          <div>
            <div>
              <button>add a session</button>
              
              <button>see/export rapport</button>
            </div>
          </div>

        </div>
      </section>
        );
}
export default ProjectCard;