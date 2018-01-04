// Load jQuery and WhatInput (used by Zurb Foundation)
import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

// Initialize Zurb Foundation
import './lib/foundation-explicit-pieces';
$(document).foundation();

// Initialize FontAwesome
var font_awesome = require('./lib/fontawesome-all.min');

// Initialize the parallax library
var parallaxModule = require('./lib/jquery.parallax');

// Initialize other custom JS
var custom = require('./custom');