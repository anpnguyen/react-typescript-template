import React from 'react';
import Accordion from '../../components/customers/components/accordion/Accordion';

export interface IAccordionData {
    id: number;
    title: string;
    info: string;
    image: string;
    content: string;
}

const accordionData = [
    {
        id: 1,
        title: 'Section 1',
        info: 'Info about Section 1',
        image: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
        content: `When an industry matures, it means it's not advancing, and of course the jobs go overseas. That's the obligation of the multi-national corporation: to put the factory where it can make the widget as cheap as possible. Don't get angry when a corporation does that; we've all bought into this concept. We live in a capitalistic society.`,
    },
    {
        id: 2,
        title: 'Section 1',
        info: 'Info about Section 1',
        image: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
        content: `The history of exploration across nations and across time is not one where nations said, 'Let's explore because it's fun.' It was, 'Let's explore so that we can claim lands for our country, so that we can open up new trade routes; let's explore so we can become more powerful.'`,
    },
    {
        id: 3,
        title: 'Section 1',
        info: 'Info about Section 1',
        image: 'https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg',
        content: `For me, the most fascinating interface is Twitter. I have odd cosmic thoughts every day and I realized I could hold them to myself or share them with people who might be interested.`,
    },
];

const Customers = () => {
    return (
        <div className="card">
            <div className="col-12">
                {accordionData.map((data: IAccordionData) => (
                    <Accordion key={data.id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default Customers;
