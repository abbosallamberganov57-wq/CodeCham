import Style from "./about.module.css"
import MiniFooter from "../componet/MiniFooter/MiniFooter.jsx"
import img16 from "../image/JJJ.jpg";

function About() {
    return (
        <div className={Style.parallax}>
            <div className="container">
                <section className={Style['about-hero']}>
                    <div className={Style['container']}>
                        <h1>О Caffeine Code</h1>
                        <p>
                            Мы создаём атмосферу,
                            а не просто кофе
                        </p>
                    </div>
                </section>
                <section className={Style['about-history']}>
                    <div className={Style['container']}>
                        <div className={Style['about-history-content']}>
                            <div className={Style['about-history-text']}>
                                <h2>Наша история</h2>
                                <p>
                                    Caffeine Code появился из любви
                                    к качественному кофе и уютной атмосфере.
                                </p>
                                <p>
                                    Мы хотели создать место,
                                    где люди смогут отдыхать,
                                    работать и наслаждаться напитками.
                                </p>
                            </div>
                            <div className={Style['about-history-image']} style={{ backgroundImage: `url(${img16})`, backgroundSize: "cover", backgroundPosition: "bottom" }}>
                                {/* <img src={img16} alt="Coffeine Code" /> */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className={Style['about-advantages']}>
                    <div className={Style['container']}>
                        <h2>Наши преимущества</h2>
                        <div className={Style['advantages-grid']}>
                            <div className={Style['advantage-card']}>
                                <h3>☕ Натуральный кофе</h3>
                                <p>
                                    Только свежие кофейные зёрна
                                    высокого качества
                                </p>
                            </div>
                            <div className={Style['advantage-card']}>
                                <h3>⚡ Быстрое обслуживание</h3>
                                <p>
                                    Мы ценим время каждого клиента
                                </p>
                            </div>
                            <div className={Style['advantage-card']}>
                                <h3>🌿 Свежие продукты</h3>
                                <p>
                                    Используем только свежие ингредиенты
                                </p>
                            </div>
                            <div className={Style['advantage-card']}>
                                <h3>🎧 Атмосфера</h3>
                                <p>
                                    Уютное место для отдыха и работы
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={Style['about-stats']}>
                    <div className={Style['container']}>
                        <div className={Style['stats-grid']}>
                            <div className={Style['stat-card']}>
                                <h2>10k+</h2>
                                <p>Клиентов</p>
                            </div>
                            <div className={Style['stat-card']}>
                                <h2>25+</h2>
                                <p>Напитков</p>
                            </div>
                            <div className={Style['stat-card']}>
                                <h2>5</h2>
                                <p>Лет опыта</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <MiniFooter
                title="Наша история кофе продолжается каждый день ☕"
                text="Мы создаём не просто кофе, а особую атмосферу, где каждый гость может насладиться уютом, вкусом и вдохновением."
            />
        </div>
    )
}

export default About