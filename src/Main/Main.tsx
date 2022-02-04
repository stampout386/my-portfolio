import style from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'


export const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>

                <div className={style.text}>
                    <span>Hi there</span>
                    <h1>I am Mikhail Shestak</h1>
                    <p>Front-End Developer</p>
                </div>

                <div className={style.photo}>
                    <img src="" alt="photo"/>
                </div>

            </div>

        </div>
    )
}