import style from './RemoteWork.module.css'

export const RemoteWork = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={style.container}>
                <h3>I'm considering remote work options</h3>
                <button className={style.superButton}>hire me</button>
            </div>
        </div>
    )
}