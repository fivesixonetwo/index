const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//Getaway
const futuregetawayItems = $$(".futuregetaway__item")
const futuregetawayItemContents = $$(".futuregetaway__content")

const futuregetawayItemActive = $(".futuregetaway__item.futuregetaway__item--active")
const futuregetawayLineUp = $(".futuregetaway__line--up")
const lineMinus = futuregetawayItemActive.offsetLeft;
const b = +-getComputedStyle($(".futuregetaway__wrap")).marginLeft.replace("px", ""); // get margin left responsive
futuregetawayLineUp.style.left = (futuregetawayItemActive.offsetLeft - lineMinus + 1 + b) + "px";
futuregetawayLineUp.style.width = (futuregetawayItemActive.offsetWidth - 20) + "px";

futuregetawayItems.forEach((item, index) => {
    const content = futuregetawayItemContents[index];
    item.onclick = function () {
        let lineMinus2 = futuregetawayItemActive.offsetLeft;
        $(".futuregetaway__item.futuregetaway__item--active").classList.remove("futuregetaway__item--active");
        $(".futuregetaway__content.futuregetaway__content--active").classList.remove("futuregetaway__content--active");
        futuregetawayLineUp.style.left = (this.offsetLeft - lineMinus2 + 1 + +-getComputedStyle($(".futuregetaway__wrap")).marginLeft.replace("px", "")) + "px";
        futuregetawayLineUp.style.width = (this.offsetWidth - 20) + "px";

        this.classList.add("futuregetaway__item--active");
        content.classList.add("futuregetaway__content--active");
    };
});



//Modal
const modal = $(".modal");
const btnClose = $(".modal-content__x");
const btnModal = $$(".btn-modal-globe");
const btnCurrency = $(".btn-currency");
const modalHeaderItem = $$(".modal__header-category-item");
const modalContents = $$(".modal__body-item");
const lineUp = $(".modal__line--up")

const handlerModalHide = () => {
    modal.style.display = "none";
    $("body").style.overflowY = "auto";
}
const handlerModalShow = index => {
    addClass(index)
    modal.style.display = "block";
    $("body").style.overflowY = "hidden";

    //Set default width and position of line after modal showing
    const modalHeaderItemActive = $(".modal__header-category-item.modal__header-category--active");
    lineUp.style.left = (modalHeaderItemActive.offsetLeft) + "px";
    lineUp.style.width = (modalHeaderItemActive.offsetWidth - 20) + "px";
}
btnClose.onclick = handlerModalHide;
btnCurrency.onclick = function () {
    handlerModalShow(1);
}
btnModal.forEach(btn => btn.onclick = function () {
    handlerModalShow(0);
})
const addClass = index => {
    removeClass();
    modalHeaderItem[index].classList.add("modal__header-category--active");
    modalContents[index].classList.add("modal__body--active");
}
const removeClass = () => {
    $(".modal__header-category-item.modal__header-category--active").classList.remove("modal__header-category--active");
    $(".modal__body-item.modal__body--active").classList.remove("modal__body--active");
}
modalHeaderItem.forEach((item, index) => {
    const content = modalContents[index];
    item.onclick = function () {
        removeClass();
        lineUp.style.left = (this.offsetLeft) + "px";
        lineUp.style.width = (this.offsetWidth - 20) + "px";
        this.classList.add("modal__header-category--active");
        content.classList.add("modal__body--active");
    }
})


//Header search
let btnSearchCheck = false;
let check = 0;
let checkActive = true;
const btnSearchText = $(".searchbar__text");
const btnSearch = $(".btn-searchbar");
const searchbarLocation = $(".searchbar__location");
const searchbarDate = $(".searchbar__guests-date");
const searchbarCheckin = $(".searchbar__checkin");
const searchbarGuest = $(".searchbar__guests-content");
const searchbarGuestWrap = $(".searchbar__guests")
const btnHeader = $$(".btn-header");
const searchbarBtn = $$(".searchbar__wrap-item");
const searchbarActive = $$(".searchbar__1");
const locationContent = $(".search-expand__location");
const guestContent = $(".search-expand__guests");
const btnLocationVideo = $(".btn-location__video-content");

$(".input").addEventListener("focusout", () => {
    checkActive = false;
})
const removeClass1 = () => {
    if ($(".searchbar__1.searchbar__1--active"))
        $(".searchbar__1.searchbar__1--active").classList.remove("searchbar__1--active");
}
const handlerHeaderClick = function (btn, index) {
    $(".btn-header.search-box__header-item--active").classList.remove("search-box__header-item--active");
    btn.classList.add("search-box__header-item--active");
    if (index === 1) {
        searchbarGuest.style.display = "none";
        searchbarCheckin.style.display = "none";
        searchbarDate.style.display = "flex";
        btnSearch.style.marginLeft = 10 + "rem";
        searchbarGuestWrap.style.flexGrow = 1.2;
        check = 1;
        locationContent.style.display = "none";
        removeClass1();
        displayNoneExpand();
    }
    else {
        btnSearch.style.marginLeft = 5.5 + "rem";
        searchbarGuest.style.display = "flex";
        searchbarCheckin.style.display = "flex";
        searchbarDate.style.display = "none";
        searchbarGuestWrap.style.flexGrow = 0.5;
        check = 0;
        displayNoneExpand();
        removeClass1();
    }
}
const displayNoneExpand = () => {
    guestContent.style.display = "none";
    locationContent.style.display = "none";
}
btnHeader.forEach((btn, index) => btn.onclick = () => {
    handlerHeaderClick(btn, index);
    btnSearchCheck = true;
})
const searchBarActive = function () {
    btnSearchCheck = true;
    if (check === 1) {
        btnSearch.classList.add("btn-searchbar--active");
    }
    else {
        btnSearch.classList.add("btn-searchbar--active-2");
    }
    btnSearchText.style.display = "flex";
    searchbarGuestWrap.style.flexGrow = 1.2;
}
const searchbarItemActive = (btn, index) => {
    if (btn.classList.contains("searchbar__location")) {
        btn.children[1].onclick = function () {
            isInput = true;
        }
    }
    if (btn.classList.contains('searchbar__1--active') && isInput === false) {
        btn.classList.remove("searchbar__1--active");
        isInput = true;
    }
    else {
        if ($(".searchbar__1.searchbar__1--active")) {
            $(".searchbar__1.searchbar__1--active").classList.remove("searchbar__1--active");
        }
        displayNoneExpand();
        searchBarActive();
        isInput = false;
        btn.classList.add("searchbar__1--active");
    }
    if (index === 0) {
        if (isInput === false) {
            btnLocationVideo.play();
            $(".input").focus();
            locationContent.style.display = "flex";
        }
        else locationContent.style.display = "none";
    }
    if (index === 3 && check !== 1) {
        guestContent.style.display = "block";
    }
}
searchbarBtn.forEach(btn => {
    btn.onclick = () => {
        searchBarActive();
    }
})
searchbarActive.forEach((btn, index) => btn.onclick = () => {
    searchbarItemActive(btn, index);
})
btnSearch.onclick = searchBarActive;

btnUser = $(".navigation__user-profile");
let navUser = document.getElementById("navigation__user-control");
btnUser.onclick = function () {
    if (navUser.style.display === "" || navUser.style.display === "none") {
        navUser.style.display = "block";
    }
    else {
        navUser.style.display = "none";
    }
}

//Scroll search change
let checkscroll = false;
const nav = $(".navigation");
const searchBox = $(".search-box");
const navLogo = $("#navigation__logo");
const searchBox_a = $(".search-box__header-item-link");
const navHost_a = $(".navigation__user-host > a");
const globe = $(".navigation__user-globe");
const btnShowSearch = $(".btn-show-search");
const navSearch = $(".navigation__search");
const navM = $(".navigation-m");
const mBtnShow = $(".m-btn-show-search");

$(".navigation").classList.add("navigation--active")
btnShowSearch.onclick = function () {
    $(".navigation").classList.add("navigation--active")
    navSearch.style.display = "block";
    btnShowSearch.style.display = "none";
}

if ($(".navigation.navigation--active"))
    $(".navigation.navigation--active").classList.remove("navigation--active");


let lastScrollTop = 0;
const footerNav_m = $(".footer-navigation-m");
footerNav_m.classList.add("footer-navigation-m-open");
window.onscroll = function (e) {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    yOffset = document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        if ($(".footer-navigation-m.footer-navigation-m-open"))
            $(".footer-navigation-m.footer-navigation-m-open").classList.remove("footer-navigation-m-open");
        console.log("down")
    } else {
        // upscroll code
        if ($(".footer-navigation-m.footer-navigation-m-open"))
            $(".footer-navigation-m.footer-navigation-m-open").classList.remove("footer-navigation-m-open");
        footerNav_m.classList.add("footer-navigation-m-open");
        console.log("up");
    }
    lastScrollTop = st <= 0 ? 0 : st;
    if (yOffset > 0) {
        mBtnShow.style.backgroundColor = "#f7f7f7";
        checkscroll = true;
        if ($(".navigation.navigation--active"))
            $(".navigation.navigation--active").classList.remove("navigation--active");
        btnShowSearch.style.display = "flex";
        navSearch.style.display = "none";
        nav.style.backgroundColor = "#FFFFFF";
        navM.style.backgroundColor = "#FFFFFF";
        searchBox.style.color = "#000000";
        searchBox_a.style.color = "#000000";
        navHost_a.style.color = "#000000";
        navM.style.boxShadow = "0px 0px 8px rgba(0, 0, 0, 0.18)";
        globe.style.fill = "#000000";
        navLogo.style.fill = "rgb(255, 56, 92)";
        document.documentElement.style.setProperty('--opacity', 0);
        document.documentElement.style.setProperty('--header-hover-color', "#f7f7f7");
        document.documentElement.style.setProperty('--header-line-color', "#000000");
    }
    else {
        mBtnShow.style.backgroundColor = "#FFFFFF";
        checkscroll = false;
        if ($(".navigation.navigation--active"))
            $(".navigation.navigation--active").classList.remove("navigation--active");
        btnShowSearch.style.display = "none";
        navSearch.style.display = "block";
        navHost_a.style.color = "#f7f9f8";
        searchBox.style.color = "#f7f9f8";
        navM.style.boxShadow = "unset";
        nav.style.backgroundColor = "transparent";
        navM.style.backgroundColor = "transparent";
        navLogo.style.fill = "#FFFFFF";
        globe.style.fill = "#f7f9f8";
        searchBox_a.style.color = "#f7f9f8";
        document.documentElement.style.setProperty('--opacity', 0.4);
        document.documentElement.style.setProperty('--header-hover-color', "rgba(255, 255, 255, 0.15)");
        document.documentElement.style.setProperty('--header-line-color', "#dddddd");
    }
}

//btn responsive
const btnShowSearchM = $(".m-btn-show-search");
const searchExpandM = $(".search-expand__location-m");
const searchExpandMClose = $(".search-expand__location-m-icon");

btnShowSearchM.onclick = function () {
    $("body").style.overflowY = "hidden";
    searchExpandM.style.display = "block";
    btnLocationVideo.play();
    $(".search-expand__location-m-input").focus();
}
searchExpandMClose.onclick = function () {
    $("body").style.overflowY = "auto";
    searchExpandM.style.height = "0";
    setTimeout(function () {
        searchExpandM.style.height = "100vh";
        searchExpandM.style.display = "none";
    }, 280)
}

window.onclick = function (event) {
    if (!event.target.closest(".navigation") && checkscroll) {
        if ($(".navigation.navigation--active"))
            $(".navigation.navigation--active").classList.remove("navigation--active");
        navSearch.style.display = "none";
        btnShowSearch.style.display = "flex";
    }
    if (!event.target.closest(".navigation__user-profile")) {
        navUser.style.display = "none";
    }
    if (event.target == modal) {
        handlerModalHide();
    }
    if (!event.target.closest(".search-expand") && !event.target.closest(".search-box__header-item") && !event.target.closest(".searchbox__header") && !event.target.closest(".searchbar__wrap") && !event.target.closest(".searchbar-wrap") && !event.target.closest(".btn-searchbar") && event.target !== btnSearch) {
        if ($(".btn-searchbar.btn-searchbar--active"))
            $(".btn-searchbar.btn-searchbar--active").classList.remove("btn-searchbar--active");
        if ($(".btn-searchbar.btn-searchbar--active-2"))
            $(".btn-searchbar.btn-searchbar--active-2").classList.remove("btn-searchbar--active-2");
        btnSearchCheck = false;
        removeClass1();
        displayNoneExpand();
    }
    if (!btnSearchCheck) {
        if ($(".btn-searchbar.btn-searchbar--active"))
            $(".btn-searchbar.btn-searchbar--active").classList.remove("btn-searchbar--active");
        if ($(".btn-searchbar.btn-searchbar--active-2"))
            $(".btn-searchbar.btn-searchbar--active-2").classList.remove("btn-searchbar--active-2");
        btnSearchText.style.display = "none";
        searchbarGuestWrap.style.flexGrow = 0.5;
        if (check === 1) {
            searchbarGuestWrap.style.flexGrow = 1.2;
        }
        else {
            searchbarGuestWrap.style.flexGrow = 0.5;
        }
    }
}




