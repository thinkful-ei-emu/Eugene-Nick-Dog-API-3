/* eslint-disable no-console */
'use strict';



function getDogImage() {
  let input = $('.userInput').val();
  fetch(`https://dog.ceo/api/breed/${input}/images/random`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))

    //throw new Error ('Breed does not exist') 
    //.catch(error => alert('Something went wrong'));
}


function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});