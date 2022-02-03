import React, { useEffect, useState } from 'react';
import { galleryData } from '../../../../data/dummy-gallery.data';
import { selectedTechStackState } from '../../../../redux/user-filter-menu/user-filter-menu-slice';
import { useAppSelector } from '../../../../utils/hooks/redux/redux-toolkit-hooks';
import UserGalleryCard from '../user-gallery-card/UserGalleryCard';
import UserGalleryFilter from '../user-gallery-filter/UserGalleryFilter';
import './UsersGallery.css';

export interface IGalleryData {
    id: number;
    name: string;
    description: string;
    image: string;
    techStack: string;
    skills: string[];
    rate: number;
}

export default function UsersGallery() {
    const [data, setData] = useState<IGalleryData[]>([]);
    const techStack = useAppSelector(selectedTechStackState);

    function filterData(stack: string): void {
        if (stack !== 'select') {
            const newFilteredByTechStackData: IGalleryData[] =
                galleryData.filter((newValues: IGalleryData) => {
                    return newValues.techStack === stack;
                });
            setData(newFilteredByTechStackData);
        } else {
            setData(galleryData);
        }
    }

    let newSkillList: string[] = [];
    const skillsData = data.map((skill) => {
        return skill.skills.map((items: string) => {
            newSkillList.push(items);
            return items;
        });
    });

    useEffect(() => {
        filterData(techStack.techStack);
    }, [techStack]);

    return (
        <div className="users-gallery">
            <div className="users-gallery__menu">
                <UserGalleryFilter skillsData={newSkillList} />
            </div>
            <div className="users-gallery__cards">
                {data.map((data) => {
                    return <UserGalleryCard key={data.id} {...data} />;
                })}
            </div>
        </div>
    );
}
