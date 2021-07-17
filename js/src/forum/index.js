/*
 * This file is part of justoverclock/custom-header.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/forum/components/IndexPage';
import Carousel from 'hero-carousel';

app.initializers.add('justoverclock/header-slideshow', () => {
    extend(IndexPage.prototype, 'view', function (vdom) {
        if (vdom.children && vdom.children.splice) {

            const ImageOne = app.forum.attribute('ImageOne');
            const ImageTwo = app.forum.attribute('ImageTwo');
            const ImageThree = app.forum.attribute('ImageThree');
            const LinkOne = app.forum.attribute('LinkOne');
            const LinkTwo = app.forum.attribute('LinkTwo');
            const LinkThree = app.forum.attribute('LinkThree');

            //codice per l'header
            const insert = m('div', { className: 'carousel' }, [
                m('div', { className: 'carousel__slides', tabindex: '0' }, [
                    m('div', { className: 'carousel__slide' }, [
                        m('div', { className: 'carousel__slide-content' }, [
                            m('h2', { className: 'carousel__slide-title' }, app.forum.attribute('TitleSlide1') || 'Set your title'),
                            m('p',
                                { className: 'carousel__slide-description' },
                                app.forum.attribute('TextSlide1') || 'Set the slogan for your first slide into the admin panel'
                            ),
                            m('a', { className: 'carousel__slide-button', href: LinkOne }, app.forum.attribute('BtnSlide1') || 'Button Text Here'),
                        ]),
                        m('img', { className: 'carousel__slide-image', src: ImageOne }),
                    ]),
                    m('div', { className: 'carousel__slide' }, [
                        m('div', { className: 'carousel__slide-content' }, [
                            m('h2', { className: 'carousel__slide-title' }, app.forum.attribute('TitleSlide2') || 'Set your title'),
                            m('p',
                                { className: 'carousel__slide-description' },
                                app.forum.attribute('TextSlide2') || 'Set the slogan for your second slide into the admin panel'
                            ),
                            m('a', { className: 'carousel__slide-button', href: LinkTwo }, app.forum.attribute('BtnSlide2') || 'Button Text Here'),
                        ]),
                        m('img', { className: 'carousel__slide-image', src: ImageTwo }),
                    ]),
                    m('div', { className: 'carousel__slide' }, [
                        m('div', { className: 'carousel__slide-content' }, [
                            m('h2', { className: 'carousel__slide-title' }, app.forum.attribute('TitleSlide3') || 'Set your title'),
                            m('p',
                                { className: 'carousel__slide-description' },
                              app.forum.attribute('TextSlide3') || 'Set the slogan for your third slide into the admin panel'
                            ),
                            m('a', { className: 'carousel__slide-button', href: LinkThree }, app.forum.attribute('BtnSlide3') || 'Button Text Here'),
                        ]),
                        m('img', { className: 'carousel__slide-image', src: ImageThree }),
                    ]),
                ]),
                m('div', { className: 'carousel__controls' }),
            ]);
            vdom.children.splice(0, 0, insert);
        }
    });
});
extend(IndexPage.prototype, 'oncreate', function (vnode) {
    const welcomeHero = document.getElementsByClassName('Hero WelcomeHero');
    new Carousel(document.querySelector('.carousel'), app.forum.attribute('TransitionTime') * 1000) || 5000;
    // nascondiamo la welcome hero nella pagina principale
    if (app.current.matches(IndexPage)) {
        for (var i = 0; i < welcomeHero.length; i++) {
            welcomeHero[i].style.display = 'none';
        }
    }
});
