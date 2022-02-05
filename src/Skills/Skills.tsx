import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>My Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'}
                           description={' magnam natus nostrum perspiciatis rerum soluta veniam.'}/>
                    <Skill title={'React'}
                           description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.iciatis rerum soluta veniam.'}/>
                    <Skill title={'CSS'}
                           description={' cupiditate, dignissimos dolores ea illo impedit magnam natus nostrum perspiciatis rerum soluta veniam.'}/>

                </div>
            </div>
        </div>
    )
}