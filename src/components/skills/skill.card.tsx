import { Badge, Tooltip } from "react-daisyui";
import { Skill } from "../../shared/interfaces/skill.interface";
import { FaUserCog, FaBook, FaBrain } from 'react-icons/fa';
interface Prop {
    skill: Skill
}
export function SkillCard({ skill }: Prop): JSX.Element {
    return (
        <div className="bg-base-300 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center">
            <i className={skill.icon + " colored text-4xl text-blue-500 mr-6"}></i>
            <div className="flex flex-col">
                <h3 className="text-2xl font-semibold text-base-600">{skill.name}</h3>
            </div>
            <div className="flex-grow"></div>
            <div className="flex-shrink-0">
                {skill.learning &&
                    <Tooltip message="در حال یادگیری" >
                        <FaBook className="text-2xl text-gray-500 animate-bounce" />
                    </Tooltip>
                }
            </div>
        </div>
    );
};

