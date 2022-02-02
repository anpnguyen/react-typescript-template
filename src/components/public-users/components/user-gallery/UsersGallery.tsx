import React from 'react';
import UserGalleryCard from '../user-gallery-card/UserGalleryCard';
import UserGalleryFilter from '../user-gallery-filter/UserGalleryFilter';
import './UsersGallery.css';

const gallerryData = [
    {
        id: 1,
        name: 'Alina A',
        description: `Hello. I am Alina from Yerevan. Thanks for visiting me.
        I always respect clients and follow their demands. Contact me so we can discuss the project in detail.`,
        image: 'https://randomuser.me/api/portraits/women/29.jpg',
        skills: ['Python', 'BlockChain', 'AWS', 'React'],
        rate: 30,
    },
    {
        id: 2,
        name: 'William D',
        description: `Having over 8 years of Web and Mobile experience , I'm providing Well Designed and High-quality Websites , Mobile and Web applications. I have extensive experience in a wide range of applications and websites including ecommerce, food delivery, chat messaging, health applications, and corporate apps.`,
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        skills: ['React-native', 'Nodejs', 'Django'],
        rate: 20,
    },
    {
        id: 3,
        name: 'Nenad V',
        description: `I’m Nenad, and I’m a Web and App Development Specialist with over 5 years of full stack experience. I’m Serbia-based, but capable of working globally as a top-tier Freelancer. I have developed many websites over the years, working with small businesses, corporate clients and individuals seeking high-end web and app assets.`,
        image: 'https://randomuser.me/api/portraits/men/74.jpg',
        skills: ['React.js', 'Angular', 'Vue.js'],
        rate: 50,
    },
    {
        id: 4,
        name: 'Divya M',
        description: `Having 7+ experience in the field of Software Development with vast knowledge of the below-mentioned area of software development. I am dedicated and committed to ensuring quality work is done within the specified time frame.`,
        image: 'https://randomuser.me/api/portraits/women/15.jpg',
        skills: ['Java', 'Kotlin', 'Ionic', 'Native'],
        rate: 40,
    },
];
export default function UsersGallery() {
    return (
        <div className="users-gallery">
            <div className="users-gallery__menu">
                <UserGalleryFilter />
            </div>
            <div className="users-gallery__cards">
                {gallerryData.map((data) => {
                    return <UserGalleryCard key={data.id} {...data} />;
                })}
            </div>
        </div>
    );
}
