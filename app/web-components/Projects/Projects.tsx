import styles from './Projects.module.css';
import { ReactElement } from 'react';

type ProjectsType = {
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
    githubLink: string;
    liveLink: string;
}[];

const projectNames = [
    'chat-app',
    'floppy-bot',
    'etch-a-sketch',
    'homepage',
    'calculator',
    'my-website',
];

async function getProjects(): Promise<ProjectsType> {
    let projects: ProjectsType = [];

    for (const projectName of projectNames) {
        const project = await fetch(
            `https://api.github.com/repos/mart1d4/${projectName}`
        )
            .then((res) => res.json())
            .then((res) => {
                return {
                    title: res.name,
                    description: res.description,
                    created_at: res.created_at,
                    updated_at: res.updated_at,
                    githubLink: res.html_url,
                    liveLink: `https://${projectName}.mart1d4.com`,
                };
            });
        projects.push(project);
    }

    return projects;
}

const Projects = async (): Promise<ReactElement> => {
    const projects = await getProjects();

    return (
        <div className={styles.projectsCards}>
            {projects.map((project, index) => (
                <div
                    key={index}
                    className={styles.card}
                >
                    <h3>{project?.title}</h3>

                    <div className={styles.cardText}>
                        <div>
                            <h4>Description</h4>
                            <p>{project?.description}</p>
                        </div>

                        <div>
                            <h4>Created At</h4>
                            <p>
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit',
                                }).format(new Date(project?.created_at))}
                            </p>
                        </div>

                        <div>
                            <h4>Last Updated</h4>
                            <p>
                                {new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: '2-digit',
                                }).format(new Date(project?.updated_at))}
                            </p>
                        </div>
                    </div>

                    <div className={styles.cardButtons}>
                        <a
                            href={project?.githubLink}
                            target='_blank'
                            rel='noreferrer'
                        >
                            View on GitHub
                        </a>

                        <a
                            href={project?.liveLink}
                            target='_blank'
                            rel='noreferrer'
                        >
                            View live
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
