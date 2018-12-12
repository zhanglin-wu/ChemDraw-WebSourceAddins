//
// minimum-api-version-unsatisfied.js
//
// This is a simple example of using ChemDraw Add-in API.
//
// Copyright © 2018 PerkinElmer, Inc. All rights reserved.

// ESLint configuration
/* global ChemDrawAPI */

function onLoadBody() {
    var messageBox = document.getElementById('message-box');
    messageBox.innerHTML = 'Using ChemDraw API ' + ChemDrawAPI.version;
}