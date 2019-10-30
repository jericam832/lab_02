'use strict';

$(document).ready(function() {
    let seen = {};
    $.get('data/page-1.json')
    .then( hornImg => {
        hornImg.forEach( data => { 
            let createImg = $("<img></img>");//create an image tag
            createImg.attr('src', `${data.image_url}`);//assign a source to the image tag
            createImg.attr('value', `${data.keyword}`);//assign a value attribute to the image tag
            $('#photo-template').append(createImg);//append image to the section tag
                let createOpt = $("<option></option>");//create an option tag
                createOpt.attr('value', `${data.keyword}`);//assign a keyword to the option tag
                createOpt.text(`${data.keyword}`);//assign a value attribute to the option tag
                $('select').append(createOpt); //append the option tag to the dropdown      
        });
    })
});

$('select').on('change', function() {
    let selectedValue = $(this).val();
    $('img').hide();
    $(`img[value=${selectedValue}]`).fadeIn(2000);
    console.log(selectedValue);
});