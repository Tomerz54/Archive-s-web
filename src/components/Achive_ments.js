import { Link } from 'react-router-dom';
const Achive_ments = () => {

    const achievements = [
        { id: 'achievement_1', title: 'Achivement #1' , description : 'My first ever game on Unity!'},
        { id: 'achievement_2', title: 'Achivement #2' , description : 'My first ever got published on play store!'},
        { id: 'achievement_3', title: 'Achivement #3' , description : 'Learning to develop websites using Html , Css & JS'},
        { id: 'achievement_4', title: 'Achivement #4' , description : 'I learnt how to create a website with React js!And how to \nimplement API and firebase '},

        // Add more blogs as needed
      ];
    
    return ( 
        <div>
            
            <div className='achievements-container'>
                <div className="achievements-content">
                    <h1 className='title-achievements'>My Achievements</h1>
                    {achievements.map(achievement => (
                    <div className="achievement-form" key={achievement.id}>
                        
                        <h3 className="achievement-title">{achievement.title}</h3>
                        <p>{achievement.description}</p>
                        <Link to={`/Achive_ments/${achievement.id}`} className="achievement-button">Read more</Link>
                    </div>
                    ))}
                </div>
            </div>
            
        </div>
        


        

        
    );
}
export default Achive_ments;