import Style from './contacts.module.css'
import MiniFooter from "../componet/MiniFooter/MiniFooter.jsx"

function Contacts() {
    return (
        <div>
            <div className="container">
                <section className={Style['contacts-hero']}>
                    <div className={Style['container']}>
                        <h1>Свяжитесь с нами</h1>
                        <p>
                            Мы всегда рады вашим вопросам
                        </p>
                    </div>
                </section>
                <section className={Style['contacts-info']}>
                    <div className={Style['container']}>
                        <div className={Style['contacts-grid']}>
                            <div className={Style['contact-card']}>
                                <h3>📞 Телефон</h3>
                                <p>+998 95 222 66 65</p>
                            </div>
                            <div className={Style['contact-card']}>
                                <h3>📧 Email</h3>
                                <p>caffeinecode@gmail.com</p>
                            </div>
                            <div className={Style['contact-card']}>
                                <h3>📸 Instagram</h3>
                                <p>@caffeinecode</p>
                            </div>
                            <div className={Style['contact-card']}>
                                <h3>📍 Адрес</h3>
                                <p>Чебоксары, Чувашская Республика</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={Style['contacts-form']}>
                    <div className={Style['container']}>
                        <form>
                            <input
                                type="text"
                                placeholder="Ваше имя"
                            />
                            <input
                                type="email"
                                placeholder="Ваш email"
                            />
                            <textarea
                                placeholder="Ваше сообщение"
                            />
                            <button>
                                Отправить
                            </button>
                        </form>
                    </div>
                </section>
            </div>
            <MiniFooter
                title="Мы всегда рады видеть вас ☕"
                text="Заходите в Caffeine Code в любое время и наслаждайтесь премиальным кофе, уютной атмосферой и незабываемым вкусом."
            />
        </div>
    )
}

export default Contacts