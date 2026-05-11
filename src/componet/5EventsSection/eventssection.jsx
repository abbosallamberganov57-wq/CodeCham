import Style from "./eventsection.module.css";
import img10 from "../../image/Gor.jpg";
import img11 from "../../image/GOR2.jpg";
import img12 from "../../image/GOR3.jpg";
import img13 from "../../image/INS.png";
import img14 from "../../image/WHR.jpg";

function EventsSec() {
    return (
        <section className={`${Style.garan}`} id="events">
            <div className="container">
                <div className={Style.container}>
                    <h2 className={`${Style['section-title']} ${Style['text-right']}`}>
                        Наши новые <br /><span className={Style["text-green"]}>События</span>
                    </h2>
                    <p className={Style["events-subtitle"]}>
                        Только в 2021 году мы сделали более 100 000<br />
                        заказов для вас, ваших близких, всех вас, и в<br />
                        2026 году мы готовы очаровать вас кофе
                    </p>
                    <div className={Style["event-cards"]}>
                        <div className={Style["event-card"]}>
                            <div className={Style["event-image"]} style={{ backgroundImage: `url(${img10})` }}>
                                <div className={Style["event-overlay"]}>
                                    <h3 className={Style["event-title"]}>ДВА КОФЕ<br />НАПИТКА</h3>
                                    <a href="#more" className={`${Style.btn} ${Style['btn-primary']} ${Style['btn-small']}`}>Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div className={Style["event-card"]}>
                            <div className={Style["event-image"]} style={{ backgroundImage: `url(${img11})` }}>
                                <div className={Style["event-overlay"]}>
                                    <h3 className={Style["event-title"]}>СЕКРЕТЫ<br />КУХНИ</h3>
                                    <a href="#more" className={`${Style.btn} ${Style['btn-primary']} ${Style['btn-small']}`}>Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div className={Style["event-card"]}>
                            <div className={Style["event-image"]} style={{ backgroundImage: `url(${img12})` }}>
                                <div className={Style["event-overlay"]}>
                                    <h3 className={Style["event-title"]}>БЕСПЛАТНЫЕ<br />КОФЕ</h3>
                                    <a href="#more" className={`${Style.btn} ${Style['btn-primary']} ${Style['btn-small']}`}>Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div className={Style["event-card"]}>
                            <div className={Style["event-image"]} style={{ backgroundImage: `url(${img13})` }}>
                                <div className={Style["event-overlay"]}>
                                    <h3 className={Style["event-title"]}>НАШ<br />INSTAGRAM</h3>
                                    <a href="#more" className={`${Style.btn} ${Style['btn-primary']} ${Style['btn-small']}`}>Подробнее</a>
                                </div>
                            </div>
                        </div>
                        <div className={Style["event-card"]}>
                            <div className={Style["event-image"]} style={{ backgroundImage: `url(${img14})` }}>
                                <div className={Style["event-overlay"]}>
                                    <h3 className={Style["event-title"]}>ГДЕ МЫ</h3>
                                    <a href="#more" className={`${Style.btn} ${Style['btn-primary']} ${Style['btn-small']}`}>Подробнее</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default EventsSec;