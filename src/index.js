'use strict';

import getData from './modules/getData';
import renderCards from './modules/renderCards';
import toggleCheckbox from './modules/toggleCheckbox';
import toggleCart from './modules/toggleCart';
import addCart from './modules/addCart';
import actionPage from './modules/actionPage';
import renderCatalog from './modules/renderCatalog';

(async function(){
    const db = await getData();
    renderCards(db);
    toggleCheckbox();
    toggleCart();
    addCart();
    actionPage();
    renderCatalog();   
}());

