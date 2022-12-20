import React from "react";
import 'devicon'
import {Skill} from "../../shared/interfaces/skill.interface";
import {Badge} from "react-daisyui";

interface Prop {
    skills: Skill[]
}

export class SkillsComponent extends React.Component<Prop, any> {
    render() {
        return (
            <div>
                <div className="mb-10">
                    <div className="flex items-center  mb-4 dark:text-gray-300">
                        <Badge className={"p-4 mr-2 mx-2 text-2xl"} color={"ghost"}>👨‍💻</Badge>
                        <h5 className="mx-2 text-2xl font-semibold dark:text-gray-200">
                            مهارت ها
                        </h5>
                    </div>
                    <div className="mx-6 grid  sm:grid-cols-2 gap-y-4 gap-x-6">
                        {this.props.skills.map((skill: Skill) => {
                            return (
                                <div key={skill.id} dir={'auto'}
                                     className={'border-l border-success hover:border-error'}>
                                    <div className={'ml-3'}>
                                           <span
                                               className="inline-block font-medium text-md dark:text-gray-300">
                                     <i className={skill.icon + " colored mr-2"}></i>
                                               {skill.name}
                                     </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}