import style from './Footer.module.css'

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={style.container}>
               <h3>Mikhail Shestak</h3>
                <div className={style.social}>
                     <div className={style.icon}></div>
                     <div className={style.icon}></div>
                     <div className={style.icon}></div>
                     <div className={style.icon}></div>
                </div>
                <span>Copyright © 2022 All Rights Reserved.</span>
            </div>
        </div>
    )
}