$(function () {
    $.galleries = {
        branding: {
            name: 'branding',
            title: 'Брендинг',
            dirName: 'Galleries/Branding/'
        },
        externalAdvertising: {
            name: 'external-advertising',
            title: 'Наружная реклама',
            dirName: 'Galleries/Advertising/'
        },

        polygraphy: {
            name: 'polygraphy',
            title: 'Полиграфия',
            dirName: 'Galleries/Polygraphy/'
        },

        digital: {
            name: 'digital',
            title: 'Digital',
            dirName: 'Galleries/Digital/'
        }
    };

    $.galleries.branding.photos = [
        {
            title: 'Логотип',
            description: 'Логотип разрабатывался для новой сети мобильных кофеен. Основные потребители - ' +
                'офисные работники, студенты, активная часть населения.',
            fileName: '1.jpg',
            previewFileName: '1_preview.jpg',
            parentGallery: $.galleries.branding
        },
        {
            title: 'Логотип',
            description: 'Задача логотипа новой линейки шаровых кранов – подчеркнуть их премиальность.',
            fileName: '2.jpg',
            previewFileName: '2_preview.jpg',
            parentGallery: $.galleries.branding
        },
        {
            title: 'Фирменный стиль',
            description: 'Начиная с разработки логотипа, визиток, сигарной карты, меню, ' +
                'подставок для соусов, заканчивая формой для официантов, интерьером и ' +
                'наружной рекламой - всё это для одного уютного ресторанчика.',
            fileName: '3.jpg',
            previewFileName: '3_preview.jpg',
            parentGallery: $.galleries.branding
        },
        {
            title: 'Логотип',
            description: 'Логотип создавался для компании-разработчика программного обеспечения, ' +
                'а главный персонаж логотипа ФИЛИН, даже имеет легкое сходство с её директором.',
            fileName: '4.jpg',
            previewFileName: '4_preview.jpg',
            parentGallery: $.galleries.branding
        },
        {
            title: 'Фирменный стиль',
            description: 'Строгий и в тоже время деловой стиль - для некоммерческой организации, ' +
                'защищающей и лоббирующей интересы транспортных компаний Челябинской области.',
            fileName: '5.jpg',
            previewFileName: '5_preview.jpg',
            parentGallery: $.galleries.branding
        }
    ];

    $.galleries.externalAdvertising.photos = [
        {
            title: 'Ковбой в сапогах',
            description: '“Куда в ресторане пристроить настоящие ковбойские ' +
                'кожаные сапоги и старое потрепанное  американское лассо?” - ' +
                'такой вопрос был в начале.',
            fileName: '1.jpg',
            previewFileName: '1_preview.jpg',
            parentGallery: $.galleries.externalAdvertising
        },
        {
            title: 'Выставочный стенд',
            description: 'Концепция дизайна разрабатывалась специально для ' +
                'участия в выставках. Всего за один год компания смогла ' +
                'сформировать широкую дилерскую сеть - от Калининграда до Владивостока.',
            fileName: '2.jpg',
            previewFileName: '2_preview.jpg',
            parentGallery: $.galleries.externalAdvertising
        },
        {
            title: 'Неон и ночь',
            description: 'Большая пятиметровая корона из композитного материала, ' +
                'объемные буквы со стробоскопами  и, конечно же, сияющий неон - ' +
                'всё это придает красок серому ночному городу.',
            fileName: '3.jpg',
            previewFileName: '3_preview.jpg',
            parentGallery: $.galleries.externalAdvertising
        },
        {
            title: 'Вывеска',
            description: 'Более 5 входных групп сети мясных магазинов были ' +
                'оформлены яркими вывесками и объемными световыми конструкциями.',
            fileName: '4.jpg',
            previewFileName: '4_preview.jpg',
            parentGallery: $.galleries.externalAdvertising
        },
        {
            title: 'Биллборд',
            description: 'Дизайн биллборда разрабатывался для старейшего проектного ' +
                'института Челябинска с целью продвижения услуг экспертизы проектной ' +
                'документации. ',
            fileName: '5.jpg',
            previewFileName: '5_preview.jpg',
            parentGallery: $.galleries.externalAdvertising
        },
        {
            title: 'Оформление транспорта',
            description: 'На несколько месяцев этот автобус превратился в настоящую ' +
                'приемную для граждан. У людей появилась возможность обратиться к ' +
                'депутату с вопросом или инициативой прямо у своего дома.',
            fileName: '6.jpg',
            previewFileName: '6_preview.jpg',
            parentGallery: $.galleries.externalAdvertising
        }
    ];

    $.galleries.polygraphy.photos = [
        {
            title: 'Предвыборная кампания',
            description: 'Взгляд, одежда, цвет, шрифт, размер, композиция - всё ' +
                'это имеет большое значение, когда речь идет о доверии избирателей. ',
            fileName: '1.jpg',
            previewFileName: '1_preview.jpg',
            parentGallery: $.galleries.polygraphy
        },
        {
            title: 'Карта напитков',
            description: 'Челобарик в чайнике, качественная и приятная бумага, ' +
                'светлый фон и интуитивно понятное наполнение - всё это работа, ' +
                'за которую можно с доброй мыслью выпить чашку чая, а то и две.',
            fileName: '2.jpg',
            previewFileName: '2_preview.jpg',
            parentGallery: $.galleries.polygraphy
        },
        {
            title: 'Открытка с дедулей',
            description: 'Бородатый дедуля с большим мешком подарков, уверенно ' +
                'подкидывающий кости - это образ добра, сказки и улыбающейся удачи ' +
                'в новом году.',
            fileName: '3.jpg',
            previewFileName: '3_preview.jpg',
            parentGallery: $.galleries.polygraphy
        },
        {
            title: 'Каталог',
            description: 'Работа по разработке дизайна и верстки многостраничного ' +
                'каталога (а это - около 300 страниц, более 500 всевозможных таблиц) ' +
                'велась кропотливо и усердно. Вероятность ошибки сводилась к нулю.',
            fileName: '4.jpg',
            previewFileName: '4_preview.jpg',
            parentGallery: $.galleries.polygraphy
        },
        {
            title: 'Этикетка',
            description: 'Дизайн этикетки разрабатывался специально для ограниченной ' +
                'партии пива, которое варилось и разливалось на заводе “Балтика” в ' +
                'Санкт-Петербурге.',
            fileName: '5.jpg',
            previewFileName: '5_preview.jpg',
            parentGallery: $.galleries.polygraphy
        },
        {
            title: 'Деньги',
            description: 'Вузики - это деньги, придуманные специально для ' +
                'нестандартного собеседования в Вуз банк, проходящего в виде ' +
                'деловой игры.',
            fileName: '6.jpg',
            previewFileName: '6_preview.jpg',
            parentGallery: $.galleries.polygraphy
        }
    ];

    $.galleries.digital.photos =
        [{
            title: 'Сайт Деревенька Аракуль',
            description: 'Сайт гостевого комплекса “Деревенька Аракуль”, ' +
                'расположенного в живописнейшем месте Южного Урала. ',
            fileName: '1.jpg',
            previewFileName: '1_preview.jpg',
            parentGallery: $.galleries.digital
        },
        {
            title: 'Сайт Автобусный парк',
            description: 'Дизайн разрабатывался для сайта транспортной компании.',
            fileName: '2.jpg',
            previewFileName: '2_preview.jpg',
            parentGallery: $.galleries.digital
        },
        {
            title: 'Сайт FORS',
            description: 'Ребрендинг устаревшего сайта, дизайн новых страниц и ' +
                'разработка дополнительных элементов навигации. ',
            fileName: '3.jpg',
            previewFileName: '3_preview.jpg',
            parentGallery: $.galleries.digital
        },
        {
            title: 'Интерфейс терминалов',
            description: 'Дизайн интерфейса информационных терминалов, располагающихся  на территории автовокзала.',
            fileName: '4.jpg',
            previewFileName: '4_preview.jpg',
            parentGallery: $.galleries.digital
        },
        {
            title: 'Интерфейс игры',
            description: 'Дизайн интерфейса игры-викторины в социальной сети Одноклассники.',
            fileName: '5.jpg',
            previewFileName: '5_preview.jpg',
            parentGallery: $.galleries.digital
        }];


    $.menufixInterval = 380;
    $.menuFixDuration = 200;
    $.scrollToSectionDuration = 300;
    $.photosChangeDuration = 600;
    $.randomPhotoChangingDuration = 5000;
    $.fullSizePhotoWidth = 881;

    $.isBtnUpHide = true;
    $.isPhotoChangingOn = true;
    $.photoChangingIntervalId;
    $.isAllPhotosGalleryOpen = false;
    $.isSelectingNavLinksOnScrollEnabled = true; //влючение-отключение выделения ссылок при скролинге.
    $.isAboutExpanded = false;

    $.aboutAdditionInitialHeight;


    initMailMsg();
    initCarousel();
    initAnimatedLetters();
    initMenu();
    initAboutRegion();
    initBtnUp();
    initGallery();
    initSendMailForms();
});



function initBtnUp() {
    var btnUp,
        facade,
        strelka,
        text;

    btnUp = $("#up-button");
    facade = $(" #up-button #facade");
    strelka = $("#up-button #strelka");
    text = $("#up-button #text");

    btnUp.hide();
    text.hide();

    facade.click(function () {
        scrollHome();
    });
    facade.hover(function () {
        strelka.animate({ width: "+=4px", top: "-=2px", left: "-=2px" }, 50);
        text.fadeIn(50);
    }, function () {
        strelka.animate({ width: "-=4px", top: "+=2px", left: "+=2px" }, 50);
        text.fadeOut(50);
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= $.menufixInterval &&
            $.isBtnUpHide == true) {
            $.isBtnUpHide = false;
            showBtn();
        } else if ($(window).scrollTop() < $.menufixInterval &&
            $.isBtnUpHide == false) {
            $.isBtnUpHide = true;
            hideBtn();
        }
    });

    function showBtn() {
        btnUp.stop();
        btnUp.show();
        btnUp.animate({ bottom: '100px' }, $.menuFixDuration);
        strelka.show();
    }

    function hideBtn() {
        btnUp.stop();
        btnUp.animate({ bottom: '0px' }, $.menuFixDuration, function () {
            btnUp.hide();
            text.hide();
        });

    }
}

function initCarousel() {
    $('.jcarousel').jcarousel({
        wrap: 'both'

    }).jcarouselAutoscroll({
        interval: 4000,
        target: '+=1',
        autostart: true
    });

    $('.jcarousel').hover(function () {
        $(this).jcarouselAutoscroll('stop');
    }, function () {
        $(this).jcarouselAutoscroll('start');
    });

    $('.jcarousel-control-prev')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '-=1'
        });

    $('.jcarousel-control-next')
        .on('jcarouselcontrol:active', function () {
            $(this).removeClass('inactive');
        })
        .on('jcarouselcontrol:inactive', function () {
            $(this).addClass('inactive');
        })
        .jcarouselControl({
            target: '+=1'
        });

    $('.jcarousel-pagination')
        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })
        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
        .jcarouselPagination();


    initLogos();

    function initLogos() {
        $('.jcarousel-wrapper .jcarousel li img').fadeTo(0, 0.3);

        $('.jcarousel-wrapper .jcarousel li img').hover(function () {
            $(this).stop();
            $(this).fadeTo(0, 1);
        }, function () {
            $(this).fadeTo(300, 0.3);
        });
    }


}

function initMailMsg() {
    var mailMsg,
        mailIcon;

    mailMsg = $('#mail_msg');
    mailIcon = $('.mail');

    mailMsg.hide();

    mailIcon.hover(function () {
        mailMsg.stop();
        mailMsg.fadeIn(0);
    },
    function () {
        mailMsg.fadeOut(0);
    });
}

function initAnimatedLetters() {
    initLetter($('#letter-e'), $('#letter-facade-e'));
    initLetter($('#letter-a'), $('#letter-facade-a'));
    initLetter($('#letter-s'), $('#letter-facade-s'));
    initLetter($('#letter-y'), $('#letter-facade-y'));

    function initLetter(letter, letterFacade) {
        letter.hide();

        letterFacade.hover(function () {
            letter.stop();
            letter.fadeIn(100);
        },
        function () {
            letter.fadeOut(1000);
        });
    }
}

function initMenu() {
    $.isMenuFixed = false; //Так ли нужно инициализировать?
    $(window).scroll(function () {
        var scrollPos,
            aboutPos,
            potfolioPos,
            customerPos,
            contactsPos;



        scrollPos = $(window).scrollTop();
        aboutPos = $('#about').offset().top - 105;
        potfolioPos = $('#portfolio').offset().top - 106;
        contactsPos = $('#contacts').offset().top - 300;

        if (scrollPos >= $.menufixInterval &&
            $.isMenuFixed == false) {
            $.isMenuFixed = true;
            fixMenu();
        } else if (scrollPos < $.menufixInterval &&
            $.isMenuFixed == true) {
            $.isMenuFixed = false;
            unfixMenu();
        }


        if ($.isSelectingNavLinksOnScrollEnabled == true) {
            if (scrollPos >= aboutPos && scrollPos < potfolioPos) {
                selectNavigationLink($('#aboutLink'));
            } else if (scrollPos >= potfolioPos && scrollPos < contactsPos) {
                selectNavigationLink($('#portfolioLink'));
            } else if (scrollPos >= contactsPos) {
                selectNavigationLink($('#contactsLink'));
            } else {
                deselectAllNavigationLinks();
            }
        }
    });

    $('#aboutLink').click(function () {
        selectNavigationLink($(this));
        scrollToAbout(function () {
            if ($.isAboutExpanded == false) {
                expandAboutRegion();
            }

        });
    });

    $('#portfolioLink').click(function () {
        selectNavigationLink($(this));
        scrollToPortfolio();
    });

    $('#contactsLink').click(function () {
        selectNavigationLink($(this));
        scrollToSection($('#contacts'), 0);
    });

    function selectNavigationLink(link) {
        deselectAllNavigationLinks();
        link.addClass('selected');


    }

    function deselectAllNavigationLinks() {
        $('#aboutLink').removeClass('selected');
        $('#portfolioLink').removeClass('selected');
        $('#contactsLink').removeClass('selected');
    }

}

function scrollToAbout(onComplete) {
    scrollToSection($('#about'), 105, onComplete);
}

function scrollToPortfolio(onComplete) {
    scrollToSection($('#portfolio'), 105, onComplete);
}

function fixMenu() {
    var menu,
        mailMsg;

    mailMsg = $('#mail_msg');
    menu = $('nav a, nav .phone');
    menu.stop();
    menu.animate({ 'line-height': '55px' }, $.menuFixDuration, function () {
        mailMsg.addClass('fixed-menu');
    });
}

function unfixMenu() {
    var menu,
        mailMsg;

    mailMsg = $('#mail_msg');
    menu = $('nav a, nav .phone');
    menu.stop();
    menu.animate({ 'line-height': '107px' }, $.menuFixDuration, function () {
        mailMsg.removeClass('fixed-menu');
    });
}


function scrollHome() {
    var body = $("html, body");

    body.stop();
    body.animate({ scrollTop: 0 }, $.scrollToSectionDuration, 'swing');
}

function scrollToSection(section, offset, onComplete) {
    var top = section.offset().top,
        body = $("body"),
        htmlBody = $("html, body");

    htmlBody.stop();
    if (body.scrollTop() != top - offset) {
        $.isSelectingNavLinksOnScrollEnabled = false;
        htmlBody.animate({ scrollTop: top - offset }, $.scrollToSectionDuration, 'swing', function () {
            $.isSelectingNavLinksOnScrollEnabled = true;
            if (onComplete != null) {
                onComplete.call(null);
            }
        });
    } else {
        if (onComplete != null) {
            onComplete.call(null);
        }
    }
}

function initGallery() {
    $('#branding').click(function () {
        showGallery($(this), function () {
            showBrandingGallery();
        });
    });

    $('#external-advertising').click(function () {
        showGallery($(this), function () {
            showExternalAdvertisingGallery();
        });
    });

    $('#polygraphy').click(function () {
        showGallery($(this), function () {
            showPolygraphyGallery();
        });
    });

    $('#digital').click(function () {
        showGallery($(this), function () {
            showDigitalGallery();
        });
    });

    $('#portfolio .more').click(function () {
        if ($.isAllPhotosGalleryOpen == true) {
            closeAllPhotos();
            clearPhotos(function () {
                showRandomPhotos();
                initPhotoChanging();
            });
        } else {
            selectGalleryMoreLink($('#portfolio .more'));
            clearPhotos(function () {
                showAll();
            });
            stopPhotoChanging();
        }

        scrollToPortfolio();

    });

    showRandomPhotos();
    initPhotoChanging();

    function showGallery(link, showingFunc) {
        clearPhotos(showingFunc);
        closeAllPhotos();
        selectGalleryLink(link);
        stopPhotoChanging();
        scrollToPortfolio();
    }

    function showAll() {
        $.isAllPhotosGalleryOpen = true;
        showAllPhotos();
    }

    function closeAllPhotos() {
        $.isAllPhotosGalleryOpen = false;
        deselectGalleryMoreLink($('#portfolio .more'));
    }
}

function initPhotoChanging() {
    //$.isPhotoChangingOn = true;
    $.photoChangingIntervalId = setInterval(function () {
        clearPhotos(function () {
            showRandomPhotos();
        });

    }, $.randomPhotoChangingDuration);
}

function stopPhotoChanging() {
    //$.isPhotoChangingOn = false;
    clearInterval($.photoChangingIntervalId);
}

function initAboutRegion() {
    $.aboutAdditionInitialHeight = $('#about-addition').height();
    $('#about-addition').height(0);

    $('#about .more').click(function () {
        if ($.isAboutExpanded == false) {
            scrollToAbout(function () {
                expandAboutRegion();
            });

        } else {

            scrollToAbout(function () {
                collapseAboutRegion();
            });

        }
    });
}

function expandAboutRegion() {
    $.isAboutExpanded = true;
    $('#question1').animate({ 'margin-bottom': 0 }, 300);
    $('#about-addition').animate({ height: $.aboutAdditionInitialHeight + 'px' }, 300);
    $('#about .more').addClass('selected');
    $('#about .more').empty().append('Свернуть<br/>о нас');
}

function collapseAboutRegion() {
    $.isAboutExpanded = false;
    $('#about-addition').animate({ height: 0 + 'px' }, 300);
    $('#about .more').removeClass('selected');
    $('#about .more').empty().append('Подробнее<br/>о нас');
}

//------------------------------------------PHOTO GALLEY------------------------------------------

function selectGalleryMoreLink(link) {
    selectGalleryLink(link);
    link.empty();
    link.append('Свернуть всё');
}

function deselectGalleryMoreLink(link) {
    deselectGalleryLink(link);
    link.empty();
    link.append('Показать всё');
}

function selectGalleryLink(link) {
    deselectAll();
    link.addClass('hover');

    function deselectAll() {
        deselectGalleryLink($('#branding'));
        deselectGalleryLink($('#external-advertising'));
        deselectGalleryLink($('#polygraphy'));
        deselectGalleryLink($('#digital'));
        deselectGalleryMoreLink($('#portfolio .more'));
    }
}

function deselectGalleryLink(link) {
    link.removeClass('hover');
}

function showRandomPhotos() {
    var photos,
        randomIndex,
        randomPhotos;

    randomPhotos = [];
    photos = $.galleries.branding.photos;
    photos = photos.concat($.galleries.externalAdvertising.photos);
    photos = photos.concat($.galleries.polygraphy.photos);
    photos = photos.concat($.galleries.digital.photos);


    for (var i = 0; i < 6; i++) {
        randomIndex = Math.floor(Math.random() * photos.length);
        randomPhotos.push(photos[randomIndex]);
        photos.splice(randomIndex, 1);
    }

    showPhotosArray(randomPhotos);
}

function showAllPhotos() {
    showBrandingGallery();
    showExternalAdvertisingGallery(2);
    showPolygraphyGallery(2);
    showDigitalGallery(2);
}

function showBrandingGallery(firstPhotoColumn) {
    showGallery($.galleries.branding.name, firstPhotoColumn);
}

function showExternalAdvertisingGallery(firstPhotoColumn) {
    showGallery($.galleries.externalAdvertising.name, firstPhotoColumn);
}

function showPolygraphyGallery(firstPhotoColumn) {
    showGallery($.galleries.polygraphy.name, firstPhotoColumn);
}

function showDigitalGallery(firstPhotoColumn) {
    showGallery($.galleries.digital.name, firstPhotoColumn);
}

// photoColumn - номер столбца фотографии, начиная с нуля.
function showGallery(galleryName, firstPhotoColumn) {
    var photosArray;

    if (galleryName === $.galleries.branding.name) {
        photosArray = $.galleries.branding.photos;

    } else if (galleryName === $.galleries.externalAdvertising.name) {
        photosArray = $.galleries.externalAdvertising.photos;
    } else if (galleryName === $.galleries.polygraphy.name) {
        photosArray = $.galleries.polygraphy.photos;
    } else { //digital gallery
        photosArray = $.galleries.digital.photos;
    }

    showPhotosArray(photosArray, firstPhotoColumn);
}

function showPhotosArray(photosArray, firstPhotoColumn) {
    var photosDiv;

    photosDiv = $("#portfolio #photos");

    if (firstPhotoColumn == null) {
        firstPhotoColumn = 0;
    }

    photosDiv.hide();
    $.each(photosArray, function (index, photo) {
        var figureClass,
            previewUrl,
            photoPreview;

        previewUrl = 'Images/' + photo.parentGallery.dirName + photo.previewFileName;
        //fullSizeImageUrl = 'Images/' + photo.parentGallery.dirName + photo.fileName;

        figureClass = "";
        if (firstPhotoColumn == 1) {
            figureClass = 'class="center"';
            firstPhotoColumn++;
        } else if (firstPhotoColumn == 2) {
            figureClass = 'class="right"';
            firstPhotoColumn = 0;
        } else {
            firstPhotoColumn++;
        }

        photoPreview = createPhotoPreview(previewUrl, photo, figureClass);
        photosDiv.append(photoPreview);

    });

    photosDiv.fadeIn($.photosChangeDuration / 2);

}

function createPhotoPreview(src, photo, figureClass) {
    var preview,
        wrapperFigure;

    preview = $('<figure>', { 'class': figureClass });
    wrapperFigure = $('<div>', { 'class': 'wrapper-figure' });

    preview.append(wrapperFigure);
    wrapperFigure.append(
        '<i>Открыть</i>' +
        '<a>' +
        '<img src="' + src + '" width="295" height="242"></a>' +
        '<figcaption>' +
        '<p>' + photo.title + '</p>' +
        '<b>' + photo.parentGallery.title + '</b></figcaption>'
        );


    wrapperFigure.find('i').hide();
    wrapperFigure.click(function () {
        openGalleryAt(photo);
    });

    wrapperFigure.hover(function () {
        showEffect($(this));
    }, function () {
        hideEffect($(this));
    });

    function showEffect(object) {
        var subobject = object.find("i");
        subobject.stop();
        subobject.fadeIn(0);
    }

    function hideEffect(object) {
        var subobject = object.find("i");
        subobject.stop();
        subobject.fadeOut(300, function () {
        });
    }

    return preview;
}

function clearPhotos(onComplete) {
    var photosDiv;

    photosDiv = $("#portfolio #photos");
    photosDiv.fadeOut($.photosChangeDuration / 2, function () {
        photosDiv.empty();
        photosDiv.show();
        if (onComplete != null) {
            onComplete.call(null);
        }
    });


};

function openGalleryAt(photo) {
    var windowTopOffset = 66,
        galleryOpeningDuration = 100,
        curGallery,
        photos,
        selectedPhotoIndex,
        photosCount,
        wrapper,
        overlay,
        win,
        title,
        description,
        closeBtn,
        navigation,
        brandingLink,
        advertLink,
        polygraphyLink,
        digitalLink,
        photoView,
        documentHeight,
        windowTopPos,
        photoRow,
        leftBtn,
        leftBtnOverlay,
        rightBtn,
        rightBtnOverlay,
        bottomLine;

    wrapper = $('<div>', { id: 'photoviewer-wrapper' });
    overlay = $('<div>', { id: 'overlay' });
    win = $('<div>', { id: 'window' });
    title = $('<div>', { id: 'title' });
    description = $('<div>', { id: 'description' });
    closeBtn = $('<div>', { id: 'close-btn' });
    navigation = $('<div>', { id: 'navigation' });
    brandingLink = $('<a>', { id: 'branding-link' });
    advertLink = $('<a>', { id: 'advertising-link' });
    polygraphyLink = $('<a>', { id: 'poligraphy-link' });
    digitalLink = $('<a>', { id: 'digital-link' });
    photoView = $('<div>', { id: 'photoview' });
    leftBtn = $('<div>', { id: 'left-btn' });
    leftBtnOverlay = $('<div>', { id: 'left-btn-overlay' });
    rightBtnOverlay = $('<div>', { id: 'right-btn-overlay' });
    rightBtn = $('<div>', { id: 'right-btn' });
    photoRow = $('<div>', { id: 'photorow' });
    bottomLine = $('<div>', { id: 'bottom-line' });

    leftBtn.click(function () {
        movePrevPhoto();
    });

    rightBtn.click(function () {
        moveNextPhoto();
    });

    leftBtnOverlay.click(function () {
        movePrevPhoto();
    });

    rightBtnOverlay.click(function () {
        moveNextPhoto();
    });


    leftBtnOverlay.hover(function () {
        leftBtn.addClass('hover');
    }, function () {
        leftBtn.removeClass('hover');
    });

    rightBtnOverlay.hover(function () {
        rightBtn.addClass('hover');
    }, function () {
        rightBtn.removeClass('hover');
    });


    brandingLink.append('БРЕНДИНГ');
    brandingLink.append('<div class="strelka"></div>');
    advertLink.append('НАРУЖНАЯ РЕКЛАМА');
    advertLink.append('<div class="strelka"></div>');
    polygraphyLink.append('ПОЛИГРАФИЯ');
    polygraphyLink.append('<div class="strelka"></div>');
    digitalLink.append('DIGITAL');
    digitalLink.append('<div class="strelka"></div>');

    brandingLink.click(function () {
        selectGallery($.galleries.branding.name);
        selectLink(brandingLink);
    });

    advertLink.click(function () {
        selectGallery($.galleries.externalAdvertising.name);
        selectLink(advertLink);
    });

    polygraphyLink.click(function () {
        selectGallery($.galleries.polygraphy.name);
        selectLink(polygraphyLink);
    });

    digitalLink.click(function () {
        selectGallery($.galleries.digital.name);
        selectLink(digitalLink);
    });


    navigation.append('<h2>ПОРТФОЛИО</h2>');
    navigation.append(brandingLink);
    navigation.append(advertLink);
    navigation.append(polygraphyLink);
    navigation.append(digitalLink);

    photoView.append(photoRow);

    photoView.append(leftBtnOverlay);
    photoView.append(rightBtnOverlay);

    photoView.append(leftBtn);
    photoView.append(rightBtn);
    photoView.append(bottomLine);

    closeBtn.click(function () {
        close();
    });


    //title.append('Каталог');
    win.append(title);
    //description.append('Описаиние');
    win.append(description);

    win.append(navigation);
    win.append(photoView);
    win.append(closeBtn);
    win.append('<div id="logo"></div>');

    documentHeight = $(document).outerHeight(true);
    overlay.height(documentHeight);
    overlay.click(function () {
        close();
    });


    windowTopPos = $(document).scrollTop() + windowTopOffset;
    win.css('top', windowTopPos + 'px');

    wrapper.append(overlay);
    wrapper.append(win);



    if (photo.parentGallery.name === $.galleries.branding.name) {
        selectLink(brandingLink);
    } else if (photo.parentGallery.name === $.galleries.externalAdvertising.name) {
        selectLink(advertLink);
    } else if (photo.parentGallery.name === $.galleries.polygraphy.name) {
        selectLink(polygraphyLink);
    } else { //digital gallery
        selectLink(digitalLink);
    }

    photos = $.merge([], $.galleries.branding.photos);
    $.merge(photos, $.galleries.externalAdvertising.photos);
    $.merge(photos, $.galleries.polygraphy.photos);
    $.merge(photos, $.galleries.digital.photos);
    photosCount = photos.length;

    
    fillPhotoRow();
    selectPhoto();

    show();

    function fillPhotoRow() {
        var photoUrl;

        photoRow.css('width', $.fullSizePhotoWidth * photos.length + "px");
        $.each(photos, function (index, curPhoto) {
            photoUrl = 'Images/' + curPhoto.parentGallery.dirName + curPhoto.fileName;
            photoRow.append('<div><img src="' + photoUrl + '" /></div>');
        });
    }

    function show() {
        $("body").append(wrapper);
        wrapper.hide();
        wrapper.fadeIn(galleryOpeningDuration);
    }

    function close() {
        wrapper.fadeOut(galleryOpeningDuration, function () {
            wrapper.detach();
        });
    }

    function selectPhoto() {
        curGallery = photo.parentGallery;

        $.each(photos, function (index, curPhoto) {
            var fullName,
                curFullName;

            fullName = photo.parentGallery.dirName + photo.fileName;
            curFullName = curPhoto.parentGallery.dirName + curPhoto.fileName;
            if (fullName === curFullName) {
                selectedPhotoIndex = index;
                return false;
            }
        });

        title.append(photo.title);
        description.append(photo.description);

        photoRow.css('left', $.fullSizePhotoWidth * (-1) * selectedPhotoIndex);
        verifyStrelki();
    }

    function selectFirstGalleryPhoto() {
        $.each(photos, function (index, curPhoto) {
            if (curPhoto.parentGallery.name === curGallery.name) {
                selectedPhotoIndex = index;
                return false;
            }
        });

        moveToPhotoByIndex(selectedPhotoIndex);
    }

    function moveToPhotoByIndex(index) {
        
        photoRow.animate({ left: $.fullSizePhotoWidth * (-1) * index }, 1000, function () {
        });

        curGallery = photos[index].parentGallery;
        verifyLinks();
        setTitleAndDescription(index);
        verifyStrelki();
    }

    function movePrevPhoto() {
        if (selectedPhotoIndex > 0) {
            selectedPhotoIndex--;
            photoRow.animate({ left: '+=' + $.fullSizePhotoWidth }, 300, function () {
            });

            setTitleAndDescription(selectedPhotoIndex);
            curGallery = photos[selectedPhotoIndex].parentGallery;
            verifyLinks();
            verifyStrelki();
        }
    }

    function moveNextPhoto() {
        if (selectedPhotoIndex < photosCount - 1) {
            selectedPhotoIndex++;
            photoRow.animate({ left: '-=' + $.fullSizePhotoWidth }, 300, function () {

            });

            setTitleAndDescription(selectedPhotoIndex);
            curGallery = photos[selectedPhotoIndex].parentGallery;
            verifyLinks();
            verifyStrelki();
        }
    }

    function verifyLinks() {
        if (curGallery.name === $.galleries.branding.name) {
            selectLink(brandingLink);
        } else if (curGallery.name === $.galleries.externalAdvertising.name) {
            selectLink(advertLink);
        } else if (curGallery.name === $.galleries.polygraphy.name) {
            selectLink(polygraphyLink);
        } else { //digital gallery
            selectLink(digitalLink);
        }
    }

    function verifyStrelki() {
        if (selectedPhotoIndex == 0) {
            leftBtn.hide();
        } else {
            leftBtn.show();
        }

        if (selectedPhotoIndex == photosCount - 1) {
            rightBtn.hide();
        } else {
            rightBtn.show();
        }
    }
    

    function selectGallery(galleryName) {
        if (galleryName === $.galleries.branding.name) {
            curGallery = $.galleries.branding;
        } else if (galleryName === $.galleries.externalAdvertising.name) {
            curGallery = $.galleries.externalAdvertising;
        } else if (galleryName === $.galleries.polygraphy.name) {
            curGallery = $.galleries.polygraphy;
        } else { //digital gallery
            curGallery = $.galleries.digital;
        }
        
        selectFirstGalleryPhoto();
    }

    function selectLink(link) {
        brandingLink.removeClass('selected');
        advertLink.removeClass('selected');
        polygraphyLink.removeClass('selected');
        digitalLink.removeClass('selected');

        link.addClass('selected');
    }

    function setTitleAndDescription(photoIndex) {
        title.empty();
        description.empty();
        title.append(photos[photoIndex].title);
        description.append(photos[photoIndex].description);
    }

}
//------------------------------------------------------------------------------------------------


function initSendMailForms() {
    var sendBtn;

    sendBtn = $('.form .send-btn');

    sendBtn.click(function () {
        var name,
            email,
            subject,
            msg;

        name = $('#name-input').val();
        email = $('#email-input').val();
        subject = $('#subject-input').val();
        msg = $('#msg-input').val();

        $.ajax({
            //url: 'http://localhost:1354/sendMail',
            url: 'http://arteasy.ru/sendMail',
            data: { name: name, email: email, subject: subject, message: msg }
        }).done(function (data) {
            if (data == 'ok') {
                alert('Отправлено');
            } else {
                alert('Ошибка');
            }

        });

    });
}