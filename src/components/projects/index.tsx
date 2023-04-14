import React from "react";
import { Project } from "../../shared/interfaces/project.interface";
import { ProjectComponent } from "./project";
import { Badge } from "react-daisyui";
import { FiFolder } from "react-icons/fi"
interface Props {
    projects: Array<Project>
}

export class ProjectsComponent extends React.Component<Props, any> {
    render() {
        return (
            <div>
                <div className="flex items-center  mb-4 dark:text-gray-300">
                    {/* <Badge className={"p-4 mr-2 mx-2 text-2xl"} color={"ghost"}> */}
                    <FiFolder size={30} />
                    {/* </Badge> */}
                    <h5 className="mx-2 text-2xl font-semibold dark:text-gray-200">
                        پروژها
                    </h5>
                </div>
                <div className="grid grid-cols-1 gap-0 md:gap-5 sm:grid-cols-2 lg:grid-cols-3 mx-16 md:mx-6 py-5"
                >
                    {this.props.projects.map((project: Project) => {
                        return (
                            <div key={project.id}>
                                <ProjectComponent project={project} />
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }

}