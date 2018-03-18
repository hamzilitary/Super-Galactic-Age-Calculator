import { Age } from './super-galactic-calculator.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#super-galactic-calculator-form').submit(function(event) {
    event.preventDefault();
    let userAge = $('#user-age').val();
    let output = new Age(userAge);
    $('#solution').append('<p>' + output);
  });
});
