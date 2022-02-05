import style from './RemoteWork.module.css'

export const RemoteWork = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={style.container}>
                <h3>I'm considering remote work options</h3>
                <a className={style.superButton}>hire me</a>
            </div>
        </div>
    )
}