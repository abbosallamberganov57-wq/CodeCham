import Style from "./contactssection.module.css";
import img15 from "../../image/BArS.jpg";

function Contacts (){
    return(
        <section className ={Style.Gouseru}>
    <div className ={Style.container}>
        <div className ={Style["contacts-content"]}>
            <div className ={Style["contacts-left"]}>
                <h2 className ={Style["section-title"]}>
                    Наши<br/><span className ={Style["text-green"]}>Контакты</span>
                </h2>
                <p className ={Style["contacts-text"]}>
                    Успейте купить самые гармоничные<br/>
                    напитки в новом Caffeine Code кофе и<br/>
                    не забудьте о скидке!
                </p>
                <div className ={Style["contact-info"]}>
                    <div className ={Style["contact-item"]}>
                        <div className ={Style["contact-icon"]}>@</div>
                        <a href="mailto:supercoffee" className ={Style["contact-link"]}>@caffeinecode</a>
                    </div>
                    <div className ={Style["contact-item"]}>
                        <div className ={Style["contact-icon"]}>📞</div>
                        <a href="tel:+7-999-999-99-99" className ={Style["contact-link"]}>+998 95 (222)-66-65</a>
                    </div>
                </div>
            </div>
            <div className ={Style["contacts-right"]}>
                <div className ={Style["contact-image-wrapper"]}>
                    <div className ={Style["we-have-badge"]}>У нас есть</div>
                    <img 
                        src={img15} 
                        alt="Barista"
                        className ={Style["contact-image"]}
                    />
                </div>
            </div>
        </div>
    </div>
</section>
    )
}
export default Contacts;