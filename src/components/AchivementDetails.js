import React from 'react';
import { useParams } from 'react-router-dom';


const acheivements = {
    achievement_1: {
      title: 'Achivement #1',
      description: `
      My first ever game on Unity!
      `,
      explanation: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quidem blanditiis possimus nostrum eos voluptatem necessitatibus molestiae officia vel quia incidunt, recusandae earum, rem exercitationem. Quasi iusto laborum natus vel.'
    },
    achievement_2: {
      title: 'Achivement #2',
      description: `My first ever game got published on play store!`,
      explanation: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quidem blanditiis possimus nostrum eos voluptatem necessitatibus molestiae officia vel quia incidunt, recusandae earum, rem exercitationem. Quasi iusto laborum natus vel.'
    },
    achievement_3: {
        title: 'Achivement #3',
        description: `Learning to develop websites using Html , Css & JS`,
        explanation: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quidem blanditiis possimus nostrum eos voluptatem necessitatibus molestiae officia vel quia incidunt, recusandae earum, rem exercitationem. Quasi iusto laborum natus vel.'
    },
    achievement_4: {
        title: 'Achivement #4',
        description: `I learnt how to create a website with React js!And how to \n implement API and firebase `,
        explanation: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla quidem blanditiis possimus nostrum eos voluptatem necessitatibus molestiae officia vel quia incidunt, recusandae earum, rem exercitationem. Quasi iusto laborum natus vel.'
    },
    // Add more blog objects as needed
};

const AchivementsDetails = () => {

    const { acheivementId } = useParams();
    const acheivement = acheivements[acheivementId];

    

    return (
        <div>
          <div className="achievement-details-content">
            <h1 className="achievement-title">{acheivement.title}</h1>
            <h4 className="achievement-description" >{acheivement.description}</h4>
            <p className="achievement-explanation">{acheivement.explanation}</p>
          </div>
          
        </div>
      );
}
 
export default AchivementsDetails;