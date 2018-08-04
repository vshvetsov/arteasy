﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="WebApplicationClassic.Default" %>
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
 <meta charset="utf-8" />
    <title>ART EASY Studio</title>

    <link href="Styles/styles.css" rel="stylesheet" type="text/css" />
    <link href="Styles/jcarousel.basic.css" rel="stylesheet" type="text/css" />
    <link href="Styles/jcarousel.customers.css" rel="stylesheet" type="text/css" />



    <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

    <script type="text/javascript" src="Scripts/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="Scripts/index.js"></script>
    <script type="text/javascript" src="Scripts/jquery.jcarousel.js"></script>

   
        <!-- Yandex.Metrika counter -->
      <!--  <script type="text/javascript">(function(d, w, c) {
                (w[c] = w[c] || []).push(function() {
                    try {
                        w.yaCounter30009269 = new Ya.Metrika({
                            id: 30009269,
                            webvisor: true,
                            clickmap: true,
                            trackLinks: true,
                            accurateTrackBounce: true
                        });
                    } catch (e) { }
                });

                var n = d.getElementsByTagName("script")[0],
                    s = d.createElement("script"),
                    f = function() { n.parentNode.insertBefore(s, n); };
                s.type = "text/javascript";
                s.async = true;
                s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

                if (w.opera == "[object Opera]") {
                    d.addEventListener("DOMContentLoaded", f, false);
                } else { f(); }
})(document, window, "yandex_metrika_callbacks");</script>
        <noscript><div><img src="//mc.yandex.ru/watch/30009269" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
        <!-- /Yandex.Metrika counter -->
</head>
<body>
    <form id="form1" runat="server">
        
    <div id="up-button">
        <div id="facade"></div>
        <img id="strelka" src="Images/strelka_up.png" />
        <img id="text" src="Images/text_up.png" />
    </div>
    <div id="wrapper">
        <nav>
            <a id="aboutLink">о студии</a>
            <a id="portfolioLink">проекты</a>
            <a id="contactsLink">контакты </a>
            <a href="tel:+79090917496" class="phone">8 (909) 09-17-496</a>
            <a href="mailto:info@arteasy.ru" class="mail" id="menu-mail">
                &nbsp;
                <span id="mail_msg"></span>

            </a>
        </nav>
        <header>
            <section>
                <!--start gallery of image-->
                <div class="jcarousel-wrapper-images">
                    <h1 id="logo">
                        <a>
                            <img src="Images/logo.png" width="379" height="347" alt="Art Easy Studio">
                        </a>
                    </h1>
                    <div class="jcarousel">
                        <ul>
                            <li>
                                <img src="Images/Carousel/1.png" alt="Картинка для слайдера" height="347" width="933">
                            </li>
                            <li>
                                <img src="Images/Carousel/2.png" alt="Картинка для слайдера" height="347" width="933">
                            </li>
                            <li>
                                <img src="Images/Carousel/3.png" alt="Картинка для слайдера" height="347" width="933">
                            </li>
                        </ul>
                    </div>
                    <a href="#" class="jcarousel-control-prev"></a><a href="#" class="jcarousel-control-next"></a>
                    <p class="jcarousel-pagination"></p>
                </div>
                <!--end gallery of image-->
            </section>
        </header>
        <section id="about">
            <div id="question1">

                <div id="AboutContentPlaceHolder_AboutTextPanel">

                    <div>
                        <p>
                            Мы - это небольшая студия дизайна с неравнодушными творителями бытия современной рекламы, работающая уже более 7 лет.&nbsp; Дизайн в нашем понимании &ndash; это не просто красивая картинка, соответствующая техническому заданию, а инструмент направленного действия. При работе над каждым проектом мы опираемся не только на свой богатый опыт и сладкий вкус, но и учитываем психологические особенности восприятия визуальной информации, подсознательные мотивы поведения людей, лабораторных мышей и тихоокеанских дельфинов в момент весеннего солнцестояния.
                        </p>
                    </div>
                </div>


            </div>
            <div id="about-addition">
                <div id="about-header">
                </div>
                <p>
                    <strong>ART EASY <span style="color:#0998fc">Studio</span></strong> - это студия с дизайнерскими наклонностями,
                    рекламным характером и экспериментальным настроением.
                    Наши помощники: солнце, душа и книга по когнитивной психологии.
                </p>
                <p>
                    Продукция, дизайн которой мы делаем чаще всего: многостраничные
                    каталоги, буклеты, лифлеты, квартальные календари, афиши,
                    биллборды, вывески, баннеры, сертификаты, визитки, логотипы,
                    открытки, флаеры, рекламные стойки и тэдэ и тэпэ.
                </p>
                <p>
                    Мы создаем дизайн как для крупных промышленных заводов,
                    так и для небольших компаний, только начинающих своё дело.
                    Мы не делаем дизайн ради дизайна. У нас не работает толпа
                    обезьянок, обученных работать на скорость. Если заказчик
                    не может ответить на вопрос, зачем ему огромный 100 метровый
                    баннер с изображением милых плюшевых мишек и целующихся кукол
                    барби - в таком случае, вероятнее всего, это не наш заказчик.
                    Мы - самокритичны. Работая над вариантами дизайна, мы стараемся
                    не показывать “сырой” промежуточный результат.
                </p>
                <p>
                    Перед тем как приступить к работе, составляется психологический
                    портрет целевого потребителя, проводятся исследования
                    рынка и конкурентов...
                </p>
                <p>
                    Думать, чувствовать и видеть как потребитель. Оценивать
                    результат в абстрагированном сознании. Анализировать
                    и тестировать эскизы на фокус группах. Всё это важные
                    составляющие эффективной рекламы.
                </p>
                <div id="about-footer"></div>
            </div>

            <div class="about">
                <a class="more">
                    Подробнее<br>
                    о нас
                </a>
            </div>
        </section>
        <section id="portfolio" name="portfolio">
            <h2>ПРОЕКТЫ</h2>
            <div class="anonce">
                <div id="photos"></div>
                <div class="clear-div"></div>
                <div class="more-wrapper"><a class="more">Показать всё</a></div>

            </div>
        </section>
        <section id="partners-logo">
            <ul>
                <li>
                    <div id="first-row">
                        <a><img id="fors" src="Images/Logos/fors.png" alt=""></a>
                        <a><img src="Images/Logos/smp-bank.png" alt=""></a>
                        <a><img src="Images/Logos/ariant.png" alt=""></a>
                        <a><img src="Images/Logos/pivovarnya.png" alt=""></a>
                        <a><img src="Images/Logos/ld.png" alt=""></a>
                    </div>
                </li>
                <li>
                    <div id="second-row">
                        <a><img src="Images/Logos/avtotransport.png" alt=""></a>
                        <a><img src="Images/Logos/philinsoft.png" alt=""></a>
                        <a><img src="Images/Logos/satka-travel.png" alt=""></a>
                        <a><img src="Images/Logos/temper.png" alt=""></a>
                    </div>                        
                </li>
                    
                
                <li>
                    <div id="third-row">
                        <a><img src="Images/Logos/escobar.png" alt=""></a>
                        <a><img src="Images/Logos/avtobus-park.png" alt=""></a>
                        <a><img src="Images/Logos/polytrans.png" alt=""></a>
                        <a><img src="Images/Logos/vuz-bank.png" alt=""></a>
                        <a><img src="Images/Logos/mondial.png" alt=""></a>
                    </div>
                </li>
            </ul>   
        </section>
        <section id="contacts">
            <div class="contact">
                <h2>Наши контакты</h2>
                <p>г. Челябинск </p>
                <a href="tel:+79090917496" id="contacts-phone">8 (909) 09-17-496</a><span>info@arteasy.ru</span>
            </div>
            <div class="form">
                <input id="name-input" type="text" placeholder="Ваше имя" class="short" />
                <input id="email-input" type="email" placeholder="E-mail" class="short no-margin" />
                <input id="subject-input" type="text" placeholder="Тема сообщения" />
                <textarea id="msg-input" placeholder="Сообщение"> </textarea>
                <div class="clear-div"></div>

                <div class="send-btn" onclick="document.getElementById('<%= sendBtn.ClientID %>').click()">Отправить</div>
                <asp:Button ID="sendBtn" runat="server" OnClick="Unnamed_Click" style="display:none"/>
            </div>
        </section>
        <div class="push"></div>
    </div>
    <footer>
        <ul>
            <li>Студия дизайна <a href="/" class="art-easy"></a>&copy;2015 | Все права защищены</li>
            <li><a href="http://philinsoft.com/" class="philin-studio"></a>Разработка сайта</li>
        </ul>
    </footer>
    </form>
</body>
</html>
