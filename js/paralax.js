// promo section
// paralax number one
document.addEventListener('DOMContentLoaded', function () {
    const windowWidth = window.innerWidth;
    const headerBg = document.querySelector('.promo');
    const headerItem = document.querySelector('.promo-paralax-fon');

    if (windowWidth > 768) {
        parallax(windowWidth, headerBg, headerItem);
    }
});

function parallax(distance, itemBg, itemElement=null) {
    window.addEventListener('mousemove', function (e) {
        const x = e.clientX / distance;
        itemBg.style.backgroundPosition = `-${x * 50}px`;
        if (itemElement)
            itemElement.style.transform = `translateX(${x * 50}px)`;
    });
}

//paralax number two
document.addEventListener('DOMContentLoaded', function () {
    const windowWidth = window.innerWidth;
    const headerBg = document.querySelector('.promo');
    const headerItem = document.querySelector('.promo-paralax-track');

    if (windowWidth > 768) {
        parallax2(windowWidth, headerBg, headerItem);
    }
});
function parallax2(distance, itemBg, itemElement=null) {
    window.addEventListener('mousemove', function (e) {
        const x = e.clientX / distance;
        itemBg.style.backgroundPosition = `-${x * -100}px`;
        if (itemElement)
            itemElement.style.transform = `translateX(${x * -100}px)`;
    });
}

//paralax number three
document.addEventListener('DOMContentLoaded', function () {
    const windowWidth = window.innerWidth;
    const headerBg = document.querySelector('.promo');
    const headerItem = document.querySelector('.promo-paralax-elem');

    if (windowWidth > 992) {
        parallax3(windowWidth, headerBg, headerItem);
    }
});
function parallax3(distance, itemBg, itemElement=null) {
    window.addEventListener('mousemove', function (e) {
        const x = e.clientX / distance;
        itemBg.style.backgroundPosition = `-${x * -50}px`;
        if (itemElement)
            itemElement.style.transform = `translateX(${x * -50}px)`;
    });
}
// promo section


// run section
//paralax number four --run
document.addEventListener('DOMContentLoaded', function () {
    const windowWidth = window.innerWidth;
    const headerBg = document.querySelector('.run');
    const headerItem4 = document.querySelector('.run-block__fon');

    if (windowWidth > 992) {
        parallax3(windowWidth, headerBg, headerItem4);
    }
});
function parallax3(distance, itemBg, itemElement=null) {
    window.addEventListener('mousemove', function (e) {
        const x = e.clientX / distance;
        itemBg.style.backgroundPosition = `-${x * +70}px`;
        if (itemElement)
            itemElement.style.transform = `translateX(${x * +70}px)`;
    });
}

//paralax number five --run
document.addEventListener('DOMContentLoaded', function () {
    const windowWidth = window.innerWidth;
    const headerBg = document.querySelector('.run');
    const headerItem5 = document.querySelector('.run-block__player');

    if (windowWidth > 992) {
        parallax3(windowWidth, headerBg, headerItem5);
    }
});
function parallax3(distance, itemBg, itemElement=null) {
    window.addEventListener('mousemove', function (e) {
        const x = e.clientX / distance;
        itemBg.style.backgroundPosition = `-${x * -50}px`;
        if (itemElement)
            itemElement.style.transform = `translateX(${x * -50}px)`;
    });
}
// run section

//help section
//paralax number six --help
document.addEventListener('DOMContentLoaded', function () {
    const windowWidth = window.innerWidth;
    const headerBg = document.querySelector('.help');
    const headerItem6 = document.querySelector('.help-block__fon');

    if (windowWidth > 992) {
        parallax3(windowWidth, headerBg, headerItem6);
    }
});
function parallax3(distance, itemBg, itemElement=null) {
    window.addEventListener('mousemove', function (e) {
        const x = e.clientX / distance;
        itemBg.style.backgroundPosition = `-${x * +50}px`;
        if (itemElement)
            itemElement.style.transform = `translateX(${x * +50}px)`;
    });
}

//paralax number seven --help
document.addEventListener('DOMContentLoaded', function () {
    const windowWidth = window.innerWidth;
    const headerBg = document.querySelector('.help');
    const headerItem7 = document.querySelector('.help-block__player');

    if (windowWidth > 992) {
        parallax3(windowWidth, headerBg, headerItem7);
    }
});
function parallax3(distance, itemBg, itemElement=null) {
    window.addEventListener('mousemove', function (e) {
        const x = e.clientX / distance;
        itemBg.style.backgroundPosition = `-${x * +60}px`;
        if (itemElement)
            itemElement.style.transform = `translateX(${x * +60}px)`;
    });
}
//help section


//sity section
//paralax number eight --sity
document.addEventListener('DOMContentLoaded', function () {
    const windowWidth = window.innerWidth;
    const headerBg = document.querySelector('.sity');
    const headerItem8 = document.querySelector('.sity-block__fon');

    if (windowWidth > 992) {
        parallax3(windowWidth, headerBg, headerItem8);
    }
});
function parallax3(distance, itemBg, itemElement=null) {
    window.addEventListener('mousemove', function (e) {
        const x = e.clientX / distance;
        itemBg.style.backgroundPosition = `-${x * +50}px`;
        if (itemElement)
            itemElement.style.transform = `translateX(${x * +50}px)`;
    });
}

//paralax number nine --sity
document.addEventListener('DOMContentLoaded', function () {
    const windowWidth = window.innerWidth;
    const headerBg = document.querySelector('.sity');
    const headerItem7 = document.querySelector('.sity-block__player');

    if (windowWidth > 992) {
        parallax3(windowWidth, headerBg, headerItem7);
    }
});
function parallax3(distance, itemBg, itemElement=null) {
    window.addEventListener('mousemove', function (e) {
        const x = e.clientX / distance;
        itemBg.style.backgroundPosition = `-${x * +60}px`;
        if (itemElement)
            itemElement.style.transform = `translateX(${x * +60}px)`;

    });
}
//sity section
