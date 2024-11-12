export interface Project {
  id: number,
  preview: string,
  title: string,
  description: string,
  link: string
}

export interface DataProjects {
  projects: Project[]
};