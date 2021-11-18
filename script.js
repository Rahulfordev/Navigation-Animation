var tabs = document.querySelector('.js-tabs');
var tabItems = document.querySelectorAll(
  '.js-tab-item:not(.js-tab-item-main-control'
);
var tabItemMainControl = document.querySelector('.js-tab-item-main-control');
var coverBackBody = document.querySelector('.js-cover-back-body');
var coverBackTabs = document.querySelector('.js-cover-back-tabs');

tabItemMainControl.addEventListener('click', function () {
  if (tabs.classList.contains('js-tabs-init')) {
    tabs.classList.remove('js-tabs-init');
    tabItemMainControl.style.transform = 'rotate(45deg)';
    for (var i = 0; i < tabItems.length; i++) {
      tabItems[i].classList.add('js-tab-item-show');
    }
  } else {
    for (var i = 0; i < tabItems.length; i++) {
      tabItems[i].classList.remove('js-tab-item-show');
    }
    setTimeout(function () {
      tabItemMainControl.style.transform = 'rotate(0deg)';
      tabs.classList.add('js-tabs-init');
    }, 2000);
  }
});
for (var i = 0; i < tabItems.length; i++) {
  tabItems[0].classList.add('js-tab-item-active');
  tabItems[i].addEventListener('click', function () {
    var tabActive = document.querySelector('.js-tab-item-active');
    tabActive.classList.remove('js-tab-item-active');
    this.classList.add('js-tab-item-active');
    coverBackBody.style.animationName = 'remove-background';
    coverBackBody.style.animationDuration = '1s';
    coverBackBody.style.animationTimingFunction = 'linear';
    coverBackBody.style.animationFillMode = 'forwards';
    coverBackTabs.style.width = 0;

    var self = this;
    window.setTimeout(function () {
      coverBackBody.style.animationName = 'add-background';
      coverBackBody.style.backgroundImage =
        'linear-gradient(#' +
        self.dataset.gradientStart +
        ', #' +
        self.dataset.gradientStop +
        ')';
      coverBackBody.classList.add('js-cover-back-animate');

      coverBackTabs.style.backgroundColor = '#' + self.dataset.tabColor;
      coverBackTabs.style.width = '100%';
    }, 1200);
  });
}
for (var i = 0; i < tabItems.length; i++) {
  tabItems[0].classList.add('js-tab-item-active');
  tabItems[i].addEventListener('click', function () {
    var tabActive = document.querySelector('.js-tab-item-active');
    tabActive.classList.remove('js-tab-item-active');
    this.classList.add('js-tab-item-active');
    coverBackBody.style.animationName = 'remove-background';
    coverBackBody.style.animationDuration = '1s';
    coverBackBody.style.animationTimingFunction = 'linear';
    coverBackBody.style.animationFillMode = 'forwards';
    coverBackTabs.style.width = 0;

    var self = this;
    window.setTimeout(function () {
      coverBackBody.style.animationName = 'add-background';
      coverBackBody.style.backgroundImage =
        'linear-gradient(#' +
        self.dataset.gradientStart +
        ', #' +
        self.dataset.gradientStop +
        ')';
      coverBackBody.classList.add('js-cover-back-animate');

      coverBackTabs.style.backgroundColor = '#' + self.dataset.tabColor;
      coverBackTabs.style.width = '100%';
    }, 1200);
  });
}
tabs.classList.add('js-tabs-init');
