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
                    <div className="flex items-center text-gray-700 mb-4 dark:text-gray-300">
                        <h2 className="mx-2 text-2xl font-semibold dark:text-gray-200">
                            👨‍💻
                            مهارت ها
                        </h2>
                    </div>
                    <div className="grid grid-cols1 sm:grid-cols-2 gap-y-4 gap-x-6">
                        {this.props.skills.map((skill: Skill) => {
                            return (
                                <div key={skill.id}>
                                 <span
                                     className="inline-block font-medium text-slate-700 text-md mb-2 dark:text-gray-300">{skill.name}
                                     <i className={skill.icon + " colored"}></i>
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