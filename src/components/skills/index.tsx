import React from "react";
import 'devicon'
import {Skill} from "../../shared/interfaces/skill.interface";

interface Prop {
    skills: Skill[]
}

export class SkillsComponent extends React.Component<Prop, any> {
    render() {
        return (
            <div>
                <div className="mb-10">
                    <div className="flex items-center  mb-4 dark:text-gray-300">
                        <h5 className="mx-2 text-2xl font-semibold dark:text-gray-200">
                            👨‍💻
                            مهارت ها
                        </h5>
                    </div>
                    <div className="mx-6 grid  sm:grid-cols-2 gap-y-4 gap-x-6">
                        {this.props.skills.map((skill: Skill) => {
                            return (
                                <div key={skill.id} dir={'auto'}>
                                 <span
                                     className="inline-block font-medium text-md mb-2 dark:text-gray-300">
                                     <i className={skill.icon + " colored mr-2"}></i>
                                     {skill.name}
                                     </span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}