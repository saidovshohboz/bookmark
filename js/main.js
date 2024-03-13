let modifiers = {
  tabItemActive: 'tabs__item--active',
  tabPanelActive: 'tabpanels__item--active',
  accordionItemOpen: 'accordion__item--open'
};

let elsTabsItem = document.querySelectorAll('.tabs__item');
let elsTabsPanel = document.querySelectorAll('.tabpanels__item');
let elsTabLink = document.querySelectorAll('.js-tab-link');

let elsAccordionItem = document.querySelectorAll('.accordion__item');
let elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler');


function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove(modifiers.tabItemActive);
  });
}

function deactivateTabPanels () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove(modifiers.tabPanelActive);
  });
}

function closeAccordionItems () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove(modifiers.accordionItemOpen);
  });
}

elsTabLink.forEach(function (elTabLink) {
  elTabLink.addEventListener('click', function (evt) {
    // Prevent page move
    evt.preventDefault();

    // Remove active class from tabs__item elements
    deactivateTabItems();

    // Add active class to current tabs__item
    elTabLink.parentElement.classList.add(modifiers.tabItemActive);

    // Remove active class from tabs__panel elements
    deactivateTabPanels();

    // Show active tab panel
    // let elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    let elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);
    elTargetPanel.classList.add(modifiers.tabPanelActive);
  });
});

elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener('click', function () {
    closeAccordionItems();

    elAccordionItemToggler.closest('.accordion__item').classList.add(modifiers.accordionItemOpen);
  });
});
