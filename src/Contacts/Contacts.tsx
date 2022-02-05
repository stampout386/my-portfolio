import style from './Contacts.module.css'

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>

            <div className={style.container}>
                <h3>Contacts</h3>
                <form action="" className={style.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" className={style.textarea}>
                    </textarea>
                </form>
                <a className={style.superButton}>Send form</a>
            </div>
        </div>
    )
}