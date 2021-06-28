import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Main } from '../../pages/Main/Main'
import { About } from '../../pages/About/About'
import { Courses } from '../../pages/Courses/Courses'

import Styles from './Scene.module.css'
import Mentors from "../../pages/Mentors/Mentors";
import Projects from "../Projects/Projects";
import CoursesEng from "../../pages/ CoursesEng/CoursesEng";
import ProjectsPrev from "../ProjectsPrev/ProjectsPrev";

export const Scene = () => {
    return (
        <div className={Styles.scene}>
            <Switch>
                <Route path="/main" exact>
                    <Main />
                </Route>
                <Route path="/aboutus" exact>
                    <About />
                </Route>
                <Route path="/courses" exact>
                    <Courses />
                </Route>
                <Route path="/coursesEng" exact>
                        <CoursesEng />
                    </Route>
                <Route path="/mentors" exact>
                    <Mentors />
                </Route>
                <Route path="/projectsPrev" exact>
                    <ProjectsPrev />
                </Route>
            </Switch>
        </div>
    )
}
