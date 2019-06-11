/* eslint-disable no-console */
'use strict';



function getDogImage() {
  let input = $('.userInput').val();
  fetch(`https://dog.ceo/api/breed/${input}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson));
}


function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  if (responseJson.status !== 'success'){
    alert('Enter Valid Breed');
  }
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  );
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