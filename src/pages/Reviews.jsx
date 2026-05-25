import Style from './reviews.module.css'
import MiniFooter from "../componet/MiniFooter/MiniFooter.jsx"

function Reviews() {
    return (
        <div>
            <div className="container">
                <section className={Style['reviews-hero']}>
                    <div className={Style['container']}>
                        <h1>Отзывы клиентов</h1>
                        <p>
                            Узнайте что говорят о нас
                            наши посетители
                        </p>
                    </div>
                </section>
                <section className={Style['reviews-section']}>
                    <div className={Style['container']}>
                        <div className={Style['reviews-grid']}>
                            <div className={Style['review-card']}>
                                <h3>⭐⭐⭐⭐⭐</h3>
                                <p>
                                    Лучший кофе в городе,
                                    очень атмосферно
                                </p>
                                <span>— Алексей</span>
                            </div>
                            <div className={Style['review-card']}>
                                <h3>⭐⭐⭐⭐⭐</h3>
                                <p>
                                    Очень вкусный латте
                                    и приятный персонал
                                </p>
                                <span>— Валерка</span>
                            </div>
                            <div className={Style['review-card']}>
                                <h3>⭐⭐⭐⭐⭐</h3>
                                <p>
                                    Идеальное место
                                    для отдыха
                                </p>
                                <span>— Даниил</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={Style['reviews-rating']}>
                    <div className={Style['container']}>
                        <h2>4.7 / 5</h2>
                        <p>
                            Более 2000 довольных клиентов
                        </p>
                    </div>
                </section>
            </div>
            <MiniFooter
                title="Более 10 000 довольных гостей"
                text="Каждый отзыв вдохновляет нас делать Caffeine Code ещё лучше и создавать идеальную кофейную атмосферу."
            />
        </div>
    )
}

export default Reviews