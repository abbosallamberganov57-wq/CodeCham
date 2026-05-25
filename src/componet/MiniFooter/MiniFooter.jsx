import Style from "./MiniFooter.module.css"

function MiniFooter({ title, text }) {
    return (
        <section className={Style.miniFooter}>
            <div className="container">
                <div className={Style.content}>
                    <h2 className={Style.title}>
                        {title}
                    </h2>
                    <p className={Style.text}>
                        {text}
                    </p>
                    <div className={Style.bottom}>
                        <p>Caffeine Code © 2026 — Все права защищены</p>
                        <div className={Style.links}>
                            <a href="#">Инстаграм</a>
                            <a href="#">Ютуб</a>
                            <a href="#">Телеграм</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiniFooter