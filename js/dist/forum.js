module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/hero-carousel/index.js":
/*!*********************************************!*\
  !*** ./node_modules/hero-carousel/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Carousel(carouselEl, speed) {
  var _this = this;

  this.slides = carouselEl.querySelector('.carousel__slides');
  this.controls = carouselEl.querySelector('.carousel__controls');
  this.carouselSpeed = speed || 5000;
  this.slides.addEventListener('keydown', function (e) {
    _this.handleKeyPress(e);
  });
  this.slides.parentElement.addEventListener('touchstart', function (e) {
    _this.handleSwipe(e);
  });
  this.init();
} // Get things going


Carousel.prototype.init = function () {
  var _this2 = this;

  this.current = this.slides.firstElementChild;
  this.createControls();
  this.current.classList.add('carousel__slide--current'); // Beginning the cycle

  this.carouselCycle = setInterval(function () {
    _this2.nextSlide();
  }, this.carouselSpeed);
}; // Updates the carousel by taking in the target slide


Carousel.prototype.updateCarousel = function (target) {
  var _this3 = this;

  // Pause the cycle
  clearInterval(this.carouselCycle); // Removing active class from current slide

  Array.from(this.slides.children).forEach(function (el) {
    return el.classList.remove('carousel__slide--current');
  }); // Set active class on new current slide

  target.classList.add('carousel__slide--current'); // Get index of new slide and update controls

  var targetIndex = this.getCurrentSlideIndex(target);
  this.updateControls(targetIndex); // Updating current variable

  this.current = target; // Restart carousel cycle

  this.carouselCycle = setInterval(function () {
    _this3.nextSlide();
  }, this.carouselSpeed);
};

Carousel.prototype.nextSlide = function () {
  this.updateCarousel(this.current.nextElementSibling || this.slides.firstElementChild);
};

Carousel.prototype.prevSlide = function () {
  this.updateCarousel(this.current.previousElementSibling || this.slides.lastElementChild);
}; // Handling the indicator buttons on click


Carousel.prototype.handleControls = function (_el, index) {
  var newSlide = Array.from(this.slides.children)[index];
  this.updateCarousel(newSlide);
  return this.carouselCycle;
}; // Keyboard nav (tabindex set on 'carousel__slides' div)


Carousel.prototype.handleKeyPress = function (e) {
  var target;

  if (e.key === 'ArrowRight') {
    target = this.current.nextElementSibling || this.slides.firstElementChild;
  } else if (e.key === 'ArrowLeft') {
    target = this.current.previousElementSibling || this.slides.lastElementChild;
  } else {
    return;
  }

  this.updateCarousel(target);
};

Carousel.prototype.createControls = function () {
  var _this4 = this;

  var numberOfSlides = this.slides.children.length;

  for (var i = 0; i < numberOfSlides; i++) {
    var indicator = document.createElement('div');
    indicator.setAttribute('role', 'button');
    indicator.setAttribute('class', 'carousel__control');
    this.controls.insertAdjacentElement('beforeend', indicator);
  }

  this.controls.firstElementChild.classList.add('carousel__control--current');
  var controlIndicators = Array.from(this.controls.children);
  controlIndicators.forEach(function (el, index) {
    el.addEventListener('click', function () {
      return _this4.handleControls(el, index);
    });
  });
};

Carousel.prototype.updateControls = function (index) {
  var indicators = Array.from(this.controls.querySelectorAll('.carousel__control'));
  indicators.forEach(function (el) {
    return el.classList.remove('carousel__control--current');
  });
  indicators[index].classList.add('carousel__control--current');
};

Carousel.prototype.getCurrentSlideIndex = function (currentSlide) {
  var index = Array.from(this.slides.querySelectorAll('.carousel__slide')).findIndex(function (slide) {
    return slide === currentSlide;
  });
  return index;
}; // Touch/Swipe support


Carousel.prototype.handleSwipe = function (e) {
  var _this5 = this;

  var startPos = e.touches[0].clientX;
  var threshold = 120;

  function touchEnd(touchEvent, carouselInstance) {
    carouselInstance.slides.removeEventListener('touchend', touchEnd);
    var endPos = touchEvent.changedTouches[0].clientX;

    if (startPos < endPos && endPos - startPos > threshold) {
      carouselInstance.prevSlide();
    } else if (startPos > endPos && startPos - endPos > threshold) {
      carouselInstance.nextSlide();
    }
  }

  this.slides.addEventListener('touchend', function (touchEvent) {
    touchEnd(touchEvent, _this5);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Carousel);

/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/forum/components/IndexPage */ "flarum/forum/components/IndexPage");
/* harmony import */ var flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hero_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hero-carousel */ "./node_modules/hero-carousel/index.js");
/*
 * This file is part of justoverclock/custom-header.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */




flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializers.add('justoverclock/header-slideshow', function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'view', function (vdom) {
    if (vdom.children && vdom.children.splice) {
      var ImageOne = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('ImageOne');
      var ImageTwo = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('ImageTwo');
      var ImageThree = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('ImageThree');
      var LinkOne = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('LinkOne');
      var LinkTwo = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('LinkTwo');
      var LinkThree = flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('LinkThree'); //codice per l'header

      var insert = m('div', {
        className: 'carousel'
      }, [m('div', {
        className: 'carousel__slides',
        tabindex: '0'
      }, [m('div', {
        className: 'carousel__slide'
      }, [m('div', {
        className: 'carousel__slide-content'
      }, [m('h2', {
        className: 'carousel__slide-title'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('TitleSlide1') || 'Set your title'), m('p', {
        className: 'carousel__slide-description'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('TextSlide1') || 'Set the slogan for your first slide into the admin panel'), m('a', {
        className: 'carousel__slide-button',
        href: LinkOne
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('BtnSlide1') || 'Button Text Here')]), m('img', {
        className: 'carousel__slide-image',
        src: ImageOne
      })]), m('div', {
        className: 'carousel__slide'
      }, [m('div', {
        className: 'carousel__slide-content'
      }, [m('h2', {
        className: 'carousel__slide-title'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('TitleSlide2') || 'Set your title'), m('p', {
        className: 'carousel__slide-description'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('TextSlide2') || 'Set the slogan for your second slide into the admin panel'), m('a', {
        className: 'carousel__slide-button',
        href: LinkTwo
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('BtnSlide2') || 'Button Text Here')]), m('img', {
        className: 'carousel__slide-image',
        src: ImageTwo
      })]), m('div', {
        className: 'carousel__slide'
      }, [m('div', {
        className: 'carousel__slide-content'
      }, [m('h2', {
        className: 'carousel__slide-title'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('TitleSlide3') || 'Set your title'), m('p', {
        className: 'carousel__slide-description'
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('TextSlide3') || 'Set the slogan for your third slide into the admin panel'), m('a', {
        className: 'carousel__slide-button',
        href: LinkThree
      }, flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('BtnSlide3') || 'Button Text Here')]), m('img', {
        className: 'carousel__slide-image',
        src: ImageThree
      })])]), m('div', {
        className: 'carousel__controls'
      })]);
      vdom.children.splice(0, 0, insert);
    }
  });
});
Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'oncreate', function (vnode) {
  var welcomeHero = document.getElementsByClassName('Hero WelcomeHero');
  new hero_carousel__WEBPACK_IMPORTED_MODULE_3__["default"](document.querySelector('.carousel'), 5000); // nascondiamo la welcome hero nella pagina principale

  if (flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.current.matches(flarum_forum_components_IndexPage__WEBPACK_IMPORTED_MODULE_2___default.a)) {
    for (var i = 0; i < welcomeHero.length; i++) {
      welcomeHero[i].style.display = 'none';
    }
  }
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/forum/components/IndexPage":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['forum/components/IndexPage']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['forum/components/IndexPage'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map