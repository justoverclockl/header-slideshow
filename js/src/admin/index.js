/*
 * This file is part of justoverclock/custom-header.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';

app.initializers.add('justoverclock/header-slideshow', () => {
    app.extensionData
      .for('justoverclock-header-slideshow')
      .registerSetting({
        setting: 'justoverclock-header-slideshow.TransitionTime',
        name: 'TransitionTime',
        type: 'number',
        label: app.translator.trans('header-slideshow.admin.TransitionTime'),
        help: app.translator.trans('header-slideshow.admin.TransitionTime-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.TitleSlide1',
        name: 'TitleSlide1',
        type: 'text',
        label: app.translator.trans('header-slideshow.admin.TitleSlide1'),
        help: app.translator.trans('header-slideshow.admin.TitleSlide1-help'),
    })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.TextSlide1',
        name: 'TextSlide1',
        type: 'text',
        label: app.translator.trans('header-slideshow.admin.TextSlide1'),
        help: app.translator.trans('header-slideshow.admin.TextSlide1-help'),
    })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.BtnSlide1',
        name: 'BtnSlide1',
        type: 'text',
        label: app.translator.trans('header-slideshow.admin.BtnSlide1'),
        help: app.translator.trans('header-slideshow.admin.BtnSlide1-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.LinkOne',
        name: 'LinkOne',
        type: 'URL',
        label: app.translator.trans('header-slideshow.admin.LinkOne'),
        help: app.translator.trans('header-slideshow.admin.LinkOne-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.ImageOne',
        name: 'ImageOne',
        type: 'URL',
        label: app.translator.trans('header-slideshow.admin.ImageOne'),
        help: app.translator.trans('header-slideshow.admin.ImageOne-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.TitleSlide2',
        name: 'TitleSlide2',
        type: 'text',
        label: app.translator.trans('header-slideshow.admin.TitleSlide2'),
        help: app.translator.trans('header-slideshow.admin.TitleSlide2-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.TextSlide2',
        name: 'TextSlide2',
        type: 'text',
        label: app.translator.trans('header-slideshow.admin.TextSlide2'),
        help: app.translator.trans('header-slideshow.admin.TextSlide2-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.BtnSlide2',
        name: 'BtnSlide2',
        type: 'text',
        label: app.translator.trans('header-slideshow.admin.BtnSlide2'),
        help: app.translator.trans('header-slideshow.admin.BtnSlide2-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.LinkTwo',
        name: 'LinkTwo',
        type: 'URL',
        label: app.translator.trans('header-slideshow.admin.LinkTwo'),
        help: app.translator.trans('header-slideshow.admin.LinkTwo-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.ImageTwo',
        name: 'ImageTwo',
        type: 'URL',
        label: app.translator.trans('header-slideshow.admin.ImageTwo'),
        help: app.translator.trans('header-slideshow.admin.ImageTwo-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.TitleSlide3',
        name: 'TitleSlide3',
        type: 'text',
        label: app.translator.trans('header-slideshow.admin.TitleSlide3'),
        help: app.translator.trans('header-slideshow.admin.TitleSlide3-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.TextSlide3',
        name: 'TextSlide3',
        type: 'text',
        label: app.translator.trans('header-slideshow.admin.TextSlide3'),
        help: app.translator.trans('header-slideshow.admin.TextSlide3-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.BtnSlide3',
        name: 'BtnSlide3',
        type: 'text',
        label: app.translator.trans('header-slideshow.admin.BtnSlide3'),
        help: app.translator.trans('header-slideshow.admin.BtnSlide3-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.LinkThree',
        name: 'LinkThree',
        type: 'URL',
        label: app.translator.trans('header-slideshow.admin.LinkThree'),
        help: app.translator.trans('header-slideshow.admin.LinkThree-help'),
      })
      .registerSetting({
        setting: 'justoverclock-header-slideshow.ImageThree',
        name: 'ImageThree',
        type: 'URL',
        label: app.translator.trans('header-slideshow.admin.ImageThree'),
        help: app.translator.trans('header-slideshow.admin.ImageThree-help'),
      });
});
