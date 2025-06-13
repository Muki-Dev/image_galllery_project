var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_IMAGE_TITLE = '[data-image-role="title"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var ESC_KEY = 27;

function setDetais(imageUrl,titleText){
    'use strict';
    var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
    detailImage.setAttribute('src',imageUrl);

    var detailTitle = document.querySelector(DETAIL_IMAGE_TITLE);
    detailTitle.textContent = titleText;

}

function imageFromThumb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail){
    'use strict';
    return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail){
    'use strict';
    setDetais(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThunbClickHandler(thumb){
    'use strict';
    thumb.addEventListener('click', function(event){
        event.preventDefault();
        setDetailsFromThumb(thumb);
        showDetails()
    })
}

function getThumbnailsArray(){
    'use strict';
    var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function hideDetails(){
    'use strict';
    document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails(){
    'use strict';
    document.body.classList.remove(HIDDEN_DETAIL_CLASS);
}

function addKeyPressHandler(){
    'use strict';
    document.body.addEventListener('keyup', function(event){
        event.preventDefault();
        if(event.keyCode === ESC_KEY){
            hideDetails();
        }
    })
}

function initializeEvents(){
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThunbClickHandler)
    addKeyPressHandler();
}

initializeEvents();