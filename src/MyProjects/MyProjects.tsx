import style from './MyProjects.module.css'
import {Project} from "./Project/Project";

export const MyProjects = () => {
    return (
        <div className={style.projectsBlock}>
            <div className={style.container}>
                <div className={style.title}>
                    <h2>My projects</h2>
                </div>
                <div className={style.projects}>
                    <Project name={'Project 1'}
                             description={'Ldlkdsljk dsflkdsjflksdjfdl sdfdlfjdflk '}/>
                    <Project name={'Project 2'} description={'Ldlkdsljk dsflkdsjflksdjfdl sdfdlfjdflk ksdjflsdjsljdlk sdlfkjflsdjslk '}/>
                </div>
            </div>
        </div>
    )
}