/*
 * slush-angularfire
 * https://github.com/arvindr21/slush-angularfire
 *
 * Copyright (c) 2014, Arvind Ravulavaru
 * Licensed under the MIT license.
 */

'use strict';

var gulp = require('gulp'),
    install = require('gulp-install'),
    conflict = require('gulp-conflict'),
    template = require('gulp-template'),
    rename = require('gulp-rename'),
    _ = require('underscore.string'),
    inquirer = require('inquirer'),
    whichOs = require('which-os');

gulp.task('default', function (done) {
    var prompts = [{
        type: 'input',
        name: 'appName',
        message: 'What is the name of your AngularFire App?',
        default: gulp.args.join(' ')
    }, {
        type: 'input',
        name: 'instanceName',
        message: 'What is the name of the Firebase Instance? (ex: https://my-app.firebaseio.com - "my-app" is the Instance)'
    }];
    //Ask
    inquirer.prompt(prompts,
        function (answers) {
            if (!answers.appName) {
                console.log('Please provide an App Name to continue');
                return done();
            }
            if (!answers.instanceName) {
                console.log('We need a Firebase Instance to proceed. Check for more info here: http://goo.gl/Io7fLD');
                return done();
            }
            answers.appNameSlug = _.slugify(answers.appName);
            answers.appCamelizeName = _.camelize(answers.appName);
            answers.os = whichOs();

            gulp.src(__dirname + '/templates/**')
                .pipe(template(answers))
                .pipe(rename(function (file) {
                    if (file.basename.indexOf('_') == 0) {
                        file.basename = file.basename.replace('_','.');
                    }
                }))
                .pipe(conflict('./'))
                .pipe(gulp.dest('./'))
                .pipe(install())
                .on('end', function () {
                    done();
                });
        });
});
