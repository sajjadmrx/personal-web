import { Skill } from '../../shared/interfaces/skill.interface';
import { GiSkills } from 'react-icons/gi';
import { SkillCard } from './skill.card';
import { BiCloudDownload } from 'react-icons/bi';
interface Prop {
    skills: Skill[]
    isLoading: boolean
}
export function SkillsSection({ skills, isLoading }: Prop) {
    return (
        <div className="mb-10" >
            <div className="flex items-center mb-4 dark:text-gray-300">
                <GiSkills size={30} />
                <h5 className="mx-2 text-2xl font-semibold dark:text-gray-200">مهارت‌ها</h5>
            </div>
            {isLoading ? <LoadingSpinner /> :
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" dir="ltr">
                    {skills.map((skill) => (
                        <SkillCard key={skill.id} skill={skill} />
                    ))}
                </div>
            }
        </div>
    );
}

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-24">
            <BiCloudDownload size={40} className="animate-ping  text-gray-500" /> {/* تغییر به ایکون جدید و اضافه کردن کلاس animate-bounce */}
        </div>
    );
};