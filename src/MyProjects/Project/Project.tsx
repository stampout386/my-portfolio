import style from './Project.module.css'

export const Project = (props: any) => {
    return (
        <div className={style.project}>
            <div className={style.imgContainer}>
                <a className={style.superButton}>View</a>
            </div>
            <div className={style.info}>
                <h3>{props.name}</h3>
                <span>{props.description}</span>
            </div>
        </div>
    )
}