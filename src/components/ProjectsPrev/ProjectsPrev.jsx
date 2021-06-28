import React from 'react';
import {Link} from "react-router-dom";
import './projectsPrev.css'

const ProjectsPrev = () => {
    return (
        <div>
            <div className='projects-block'>
            <div className="projects">

                <img className="projects-img" src="https://geekhacker.ru/wp-content/uploads/2019/06/obuchenie-programmirovaniju-s-nulja.jpg" alt=""/>
                <p className="project-title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque et facilis fugiat libero necessitatibus nobis totam! Ex id officiis quisquam sapiente sequi?
                </p>

            </div>
            <div className="projects">

                <img className="projects-img" src="https://geekhacker.ru/wp-content/uploads/2019/06/obuchenie-programmirovaniju-s-nulja.jpg" alt=""/>
                <p className="project-title">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque et facilis fugiat libero necessitatibus nobis totam! Ex id officiis quisquam sapiente sequi?
                </p>

            </div>
                <div className="projects">

                    <img className="projects-img" src="https://geekhacker.ru/wp-content/uploads/2019/06/obuchenie-programmirovaniju-s-nulja.jpg" alt=""/>
                    <p className="project-title">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque et facilis fugiat libero necessitatibus nobis totam! Ex id officiis quisquam sapiente sequi?
                    </p>

                </div>

            </div>
            <Link className='projects-btn' to='projects'>Смотреть все проекты</Link>
        </div>
    );
};

export default ProjectsPrev;