import React, { useEffect, useState } from 'react';
import './UserGalleryFilter.css';
import { useAppDispatch } from '../../../../utils/hooks/redux/redux-toolkit-hooks';
import {
    userSelectedSkills,
    userSelectedTechStack,
} from '../../../../redux/user-filter-menu/user-filter-menu-slice';

export default function UserGalleryFilter({ skillsData }: any): JSX.Element {
    const [techStack, setTechStack] = useState({ stack: 'select' });
    const [skills, setSkills] = useState<string[]>([]);
    const [uniqueSkillValues, setUniqueSkillValues] = useState<string[]>([]);
    const dispatch = useAppDispatch();

    console.log('skills', skills);

    function handleOnchange(event: {
        target: { name: string; value: any };
    }): void {
        setTechStack({
            ...techStack,
            [event.target.name]: event.target.value,
        });
    }

    function handleSkillsOnchange(
        event: React.ChangeEvent<HTMLSelectElement>
    ): void {
        const selectedOptions = event.currentTarget.selectedOptions;
        const newSkillSelected = [];
        for (let item = 0; item < selectedOptions.length; item++) {
            newSkillSelected.push(selectedOptions[item].value);
        }
        setSkills(newSkillSelected);
    }

    function setSkillsArray(): void {
        const skillsArray: string[] = skillsData.map((item: string) => {
            return item;
        });
        const setSkill: string[] = [...new Set(skillsArray)];
        setUniqueSkillValues(setSkill);
    }

    useEffect(() => {
        dispatch(userSelectedTechStack(techStack.stack));
        dispatch(userSelectedSkills(skills));
        setSkillsArray();
    }, [dispatch, techStack, skillsData, skills]);

    return (
        <div className="gallery-filter">
            <div className="gallery-filter__header">
                <h1>Select your developers skill</h1>
            </div>

            <div className="gallery-filter__filters">
                <label htmlFor="stack">
                    Tech-stack
                    <select
                        name="stack"
                        id="stack"
                        value={techStack.stack}
                        onChange={handleOnchange}
                    >
                        <option value="select">Select Tech-stack</option>
                        <option value="full-stack">Full-stack</option>
                        <option value="front-end">Front-end</option>
                        <option value="back-end">Back-end</option>
                    </select>
                </label>
                <label htmlFor="skills">
                    Skills
                    <select
                        name="skills"
                        id="skills"
                        multiple={true}
                        value={skills}
                        onChange={handleSkillsOnchange}
                    >
                        {uniqueSkillValues.map((item: any, index: number) => {
                            return (
                                <option key={index} value={item}>
                                    {item}
                                </option>
                            );
                        })}
                    </select>
                </label>
            </div>
        </div>
    );
}
