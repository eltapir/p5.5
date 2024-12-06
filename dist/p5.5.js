(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z$3 = "/* ============================================================================================== */\n/*                                                                                                */\n/* Copyright 2024 Kris HEYSE                                                                      */\n/*                                                                                                */\n/* Licensed under the Apache License, Version 2.0 (the \"License\");                                */\n/* you may not use this file except in compliance with the License.                               */\n/* You may obtain a copy of the License at                                                        */\n/*                                                                                                */\n/* http: *www.apache.org/licenses/LICENSE-2.0                                                     */\n/*                                                                                                */\n/* Unless required by applicable lthis or agreed to in writing, software                          */\n/* distributed under the License is distributed on an \"AS IS\" BASIS,                              */\n/* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.                       */\n/* See the License for the specific language governing permissions and                            */\n/* limitations under the License.                                                                 */\n/*                                                                                                */\n/* ============================================================================================== */\n\n@font-face {\n\n    font-family: system-sans;\n    font-style: normal;\n    font-weight: normal;\n    src: \n        local(\"system-ui\"),\n        local(\"-apple-system\"),\n        local(\"BlinkMacSystemFont\"),\n        local(\"Segoe UI\"),\n        local(\"Liberation Sans\"),\n        local(\"Roboto\"),\n        local(\"Oxygen-Sans\"),\n        local(\"Ubuntu\"),\n        local(\"Cantarell\"),\n        local(\"Noto Sans\"),\n        local(\"Droid Sans\"),\n        local(\"Helvetica Neue\"),\n        local(\"sans-serif\");\n}\n\n@font-face {\n\n    font-family: system-mono;\n    font-style: normal;\n    font-weight: normal;\n    src: \n        local(\"ui-monospace\"),\n        local(\"Cascadia Mono\"),\n        local(\"Segoe UI Mono\"),\n        local(\"Liberation mono\"),\n        local(\"Ubuntu Mono\"),\n        local(\"Roboto Mono\"),\n        local(\"Menlo\"),\n        local(\"Monaco\"),\n        local(\"Consolas\"),\n        local(\"monospace\");\n}\n\n@font-face { \n    font-family: \"icomoon\";\n    font-weight: normal;\n    src: url(data:font/ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SBgsAAAC8AAAAYGNtYXAAcru+AAABHAAAAGRnYXNwAAAAEAAAAYAAAAAIZ2x5ZmhOIYcAAAGIAAADNGhlYWQnMgSRAAAEvAAAADZoaGVhB2wD0AAABPQAAAAkaG10eDIAAAAAAAUYAAAAPGxvY2EEGATuAAAFVAAAACBtYXhwABUALgAABXQAAAAgbmFtZVvBMfUAAAWUAAABqnBvc3QAAwAAAAAHQAAAACAAAwPVAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpDAPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQASAAAAA4ACAACAAYAAQAg6QjpCukM//3//wAAAAAAIOkA6QrpDP/9//8AAf/jFwQXAxcCAAMAAQAAAAAAAAAAAAAAAAAAAAEAAf//AA8AAQAA/8AAAAPAAAIAADc5AQAAAAABAAD/wAAAA8AAAgAANzkBAAAAAAEAAP/AAAADwAACAAA3OQEAAAAAAgAA/8ADlgPAAAIABQAACQIhEQECKgFs/pT+gAFsAqv/AP8AAgD/AAAAAAACAAD/wAMAA8AAAwAHAAABMxEjIREzEQJWqqr+qqoC1f2sAlT9rAAAAQAA/8ADKgPAAAIAAAkCAVYB1P4sAtX+1v7WAAIAAP/AAwADwAADAAYAAAEzESMhEQECqlZW/lYBagKr/gACAP8AAAACAAD/wAMqA8AAAwAKAAA3IRUhCQIzESER1gJU/awCVP7W/taqAQCrVgHW/tYBKgEA/wAABAAA/8ADgAPAAAYADQAUABsAAAERITcnNxcFIREXNxcHAxEhBxcHJyUhEScHJzcDgP8AYnw+ev5i/wBiej58ngEAYnw+egGeAQBiej58ASv/AGJ6PnyeAQBifD56AZ4BAGJ6Pnye/wBifD56AAAAAAUAAP/AA6oDwAADAA0AFwAhACsAAAERIRETFSMiJyY9ATMVJTMVFAcGKwE1MwEjNTQ3NjsBFSMlMzIXFh0BIzUjAwD+ACqAIhkZVAKsVBkZIoCA/VRUGRkigIACLIAiGRlUgAJV/qwBVP5WVhoaIlZWVlYiGhpWAapWIhoaVlYaGiJWVgAAAAACAAD/wANqA8AABQALAAABEwMjEwMhEwMjEwMBatbWwNbWAezU1MDU1ALV/tb+1gEqASr+1v7WASoBKgABAAD/wAKSA8AABQAAJQcJARcHApI8/wABADzE5zwBAAEAPMQAAAAAAgAA/8ADqgPAAA8AHwAAJTI3NjU0JyYjIgcGFRQXFhMyFxYVFAcGIyInJjU0NzYCAIxlZWVljIxlZWVljLB9fX19sLB9fX19VWVljIxlZWVljIxlZQMAfX2wsH19fX2wsH19AAEAAP/AA6oDwAAfAAABIgcGBwYHBhUUFxYXFhcWMzI3Njc2NzY1NCcmJyYnJgIAWE5OOjohISEhOjpOTlhYTk46OiEhISE6Ok5OA1UhITo6Tk5YWE5OOjohISEhOjpOTlhYTk46OiEhAAAAAAEAAAABAADNccIjXw889QALBAAAAAAA4jRgCgAAAADiNGAKAAD/wAOqA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAAA6oAAQAAAAAAAAAAAAAAAAAAAA8EAAAAAAAAAAAAAAACAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAAAAAAAAoAFAAeADQASABWAGoAhAC8AQABHgEyAWQBmgABAAAADwAsAAUAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAADgCuAAEAAAAAAAEACgAAAAEAAAAAAAIABwB7AAEAAAAAAAMACgA/AAEAAAAAAAQACgCQAAEAAAAAAAUACwAeAAEAAAAAAAYACgBdAAEAAAAAAAoAGgCuAAMAAQQJAAEAFAAKAAMAAQQJAAIADgCCAAMAAQQJAAMAFABJAAMAAQQJAAQAFACaAAMAAQQJAAUAFgApAAMAAQQJAAYAFABnAAMAAQQJAAoANADIYXctaWNvbW9vbgBhAHcALQBpAGMAbwBtAG8AbwBuVmVyc2lvbiAxLjAAVgBlAHIAcwBpAG8AbgAgADEALgAwYXctaWNvbW9vbgBhAHcALQBpAGMAbwBtAG8AbwBuYXctaWNvbW9vbgBhAHcALQBpAGMAbwBtAG8AbwBuUmVndWxhcgBSAGUAZwB1AGwAYQByYXctaWNvbW9vbgBhAHcALQBpAGMAbwBtAG8AbwBuRm9udCBnZW5lcmF0ZWQgYnkgSWNvTW9vbi4ARgBvAG4AdAAgAGcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAASQBjAG8ATQBvAG8AbgAuAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==);\n}\n\n:root {\n\n    --p5-pink: #ed225d;\n    --p5-pink-light: #f1678e;\n    --p5-pink-extra-light: #f9b2c6;\n    --p5-green: #47b28f;\n\n    --size-xxxsmall: 0.125rem;\n    --size-tiny: var(--size-xxxsmall);\n    --size-xxsmall: 0.25rem;\n    --size-xsmall: 0.5rem;\n    --size-small: 0.75rem;\n    --size-normal: 1.0rem;\n    --size-medium: var(--size-normal);\n    --size-normal-em: 1.0em;\n    --size-medium-em: var(--size-normal-em);\n    --size-large: 1.5rem;\n    --size-xlarge: 2.0rem;\n    --size-xxlarge: 4.0rem;\n    --size-huge: var(--size-xxlarge);\n\n    --font-size-xsmall: var(--size-xsmall);\n    --font-size-small: var(--size-small);\n    --font-size-normal: var(--size-normal);\n    --font-size-medium: var(--font-size-normal);\n    --font-size-normal-em: var(--size-normal-em);\n    --font-size-medium-em: var(--size-medium-em);\n    --font-size-large: var(--size-large);\n    --font-size-xlarge: var(--size-xlarge);\n    --font-size-xxlarge: var(--size-xxlarge);\n    --font-size-huge: var(--font-size-xxlarge);\n\n    --font-family-sans: system-sans;\n    --font-family-mono: system-mono;\n    --font-family-icon: \"icomoon\";\n\n    --preloader-width: 4rem;\n    --preloader-height: var(--preloader-width);\n    --preloader-background: #222222;\n    --preloader-anim-base-color: #cccccc;\n    --preloader-anim-color: var(--p5-pink-light);\n    --preloader-text-color: #818997;\n    --preloader-font-size: 1em;\n\n    --wallpaper-color: #ddd;\n\n    --screen-padding-top: 3rem;\n    --screen-padding-right: 3rem;\n    --screen-padding-bottom: 3rem;\n    --screen-padding-left: 3rem;\n\n    --canvas-background: #ffffff;\n    --canvas-shadow: 0 64px 64px -16px rgba(64, 64, 64, 0.25);\n\n    --scrollbar-width: thin;\n    --scrollbar-track-color: transparent;\n    --scrollbar-thumb-color: #222222;\n    --scrollbar-thumb-color-hover: #ff6eff;\n\n    /* ------------------------------------------------------------------------------------------ */\n\n    --gui-animation-speed: 450ms;\n\n    --gui-button-size: calc(2 * var(--size-normal));\n    --gui-button-icon-size: calc(0.66 * var(--gui-button-size));\n    \n    --gui-width: 0px; /* set in gui.js - depends on lil-gui width */\n    --gui-scale: 1.0; /* set as parameter */\n\n\n    /* theme - default */\n    /* ------------------------------------------------------------------------------------------ */\n\n    --gui-background-color: #444;\n    --gui-text-color: #ebebeb;\n\t--gui-title-background-color: #333;\n\t--gui-title-text-color: #ebebeb;\n\t--gui-widget-color: #424242;\n\t--gui-hover-color: #4f4f4f;\n\t--gui-focus-color: #595959;\n\t--gui-number-color: #2cc9ff;\n\t--gui-string-color: #a2db3c;\n\n    --gui-font-size: 11px;\n    --gui-input-font-size: 11px;\n    --gui-font-family: var(--font-family-sans);\n    --gui-font-family-mono: var(--font-family-mono);\n\t--gui-padding: 4px;\n\t--gui-spacing: 4px;\n    --gui-title-height: calc(var(--gui-widget-height) + var(--gui-spacing) * 1.25);\n    --gui-name-width: 45%;\n    --gui-slider-knob-width: 2px;\n    --gui-slider-input-width: 27%;\n    --gui-color-input-width: 27%;\n    --gui-slider-input-min-width: 45px;\n    --gui-color-input-min-width: 45px;\n    --gui-folder-indent: 7px;\n    --gui-widget-padding: 0 0 0 3px;\n    --gui-widget-border-radius: 3px;\n    --gui-checkbox-size: calc(0.75 * var(--gui-widget-height));\n    --gui-scrollbar-width: 5px;\n\n\t--gui-widget-height: 24px;\n\n    --gui-button-color: var(--gui-text-color);\n    --gui-button-bgcolor: var(--gui-background-color);\n    --gui-header-shadow: 0 1px 5px rgba(0, 0, 0, 0.75); \n    --gui-footer-shadow: 0 -1px 5px rgba(0, 0, 0, 0.75);\n    --gui-widget-shadow: 1px 1px 2px #111,-1px -1px 2px #999;\n    --gui-widget-shadow: 0 1px 10px rgba(255, 255, 255, 0.5);\n    --gui-widget-shadow: 0 1px 5px rgba(0, 0, 0, 0.75);\n\n    --gui-icon-button-height: 2.5rem;\n    --gui-icon-button-font-size: calc(0.66 * var(--gui-icon-button-height));\n    --gui-icon-text-button-font-size: 1.4rem;\n}\n\n:root .gui-theme-light {\n\n        --gui-background-color: #f6f6f6;\n        --gui-text-color: #666;\n        --gui-title-background-color: #efefef;\n        --gui-title-text-color: var(--gui-text-color);\n        --gui-widget-color: #eaeaea;\n        --gui-hover-color: #f0f0f0;\n        --gui-focus-color: #fafafa;\n        --gui-number-color: #07aacf;\n        --gui-string-color: #8da300;\n    \n        --gui-font-size: 11px;\n        --gui-input-font-size: 11px;\n        --gui-font-family: var(--font-family-sans);\n        --gui-font-family-mono: var(--font-family-mono);\n        --gui-padding: 4px;\n        --gui-spacing: 4px;\n        --gui-title-height: calc(var(--gui-widget-height) + var(--gui-spacing) * 1.25);\n        --gui-name-width: 45%;\n        --gui-slider-knob-width: 2px;\n        --gui-slider-input-width: 27%;\n        --gui-color-input-width: 27%;\n        --gui-slider-input-min-width: 45px;\n        --gui-color-input-min-width: 45px;\n        --gui-folder-indent: 7px;\n        --gui-widget-padding: 0 0 0 3px;\n        --gui-widget-border-radius: 3px;\n        --gui-checkbox-size: calc(0.75 * var(--gui-widget-height));\n        --gui-scrollbar-width: 5px;\n    \n        --gui-widget-height: 24px;\n    \n        --gui-button-color: var(--gui-text-color);\n        --gui-button-bgcolor: var(--gui-background-color);\n        --gui-header-shadow: 0 1px 5px rgba(0, 0, 0, 0.25); \n        --gui-footer-shadow: 0 -1px 5px rgba(0, 0, 0, 0.25);\n        --gui-widget-shadow: 1px 1px 2px #aaa,-1px -1px 2px #fff;\n        --gui-widget-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);\n\n        --gui-icon-button-height: 2.5rem;\n        --gui-icon-button-font-size: calc(0.66 * var(--gui-icon-button-height));\n        --gui-icon-text-button-font-size: 1.4rem;    \n    }\n\n/* ============================================================================================== */ \n\n.lil-gui {\n\n    /* colors */\n\n    --background-color: var(--gui-background-color);\n\t--text-color: var(--gui-text-color);\n\t--title-background-color: var(--gui-title-background-color);\n\t--title-text-color: var(--gui-title-text-color);\n\t--widget-color: var(--gui-widget-color);\n\t--hover-color: var(--gui-hover-color);\n\t--focus-color: var(--gui-focus-color);\n\t--number-color: var(--gui-number-color);\n\t--string-color: var(--gui-string-color);\n\n    /* others */\n\n    --font-size: var(--gui-font-size);\n    --input-font-size: var(--gui-input-font-size);\n    --font-family: var(--gui-font-family);\n    --font-family-mono: var(--gui-font-family-mono);\n\t--padding: var(--gui-padding);\n\t--spacing: var(--gui-spacing);\n    --title-height: var(--gui-title-height);\n    --name-width: var(--gui-name-width);\n    --slider-knob-width: var(--gui-slider-knob-width);\n    --slider-input-width: var(--gui-slider-input-width);\n    --color-input-width: var(--gui-color-input-width);\n    --slider-input-min-width: var(--gui-slider-input-width);\n    --color-input-min-width: var(--gui-color-input-min-width);\n    --folder-indent: var(--gui-folder-indent);\n    --widget-padding: var(--gui-widget-padding);\n    --widget-border-radius: var(--gui-widget-border-radius);\n    --checkbox-size: var(--gui-checkbox-size);\n    --scrollbar-width: var(--gui-scrollbar-width);\n\n\t--widget-height: var(--gui-widget-height);\n}\n\n";
  styleInject(css_248z$3);

  var css_248z$2 = "*,\n::before,\n::after {\n\n    box-sizing: border-box;\n\n    margin: 0;\n    padding: 0;\n\n    outline: 0;\n\n    scrollbar-width: var(--scrollbar-width);\n    scrollbar-color: var(--scrollbar-thumb-color) var(--scrollbar-track-color);\n}\n\nhtml {\n\n    font-family: var(--font-family-sans);\n    font-size: 16px;\n}\n\nhtml,\nbody {\n\n    width: 100%;\n    height: 100%;\n\n    overflow: hidden;\n}\n\nimg,\nsvg,\nvideo,\ncanvas {\n\n    display: block;\n    font-size: 0;\n}\n\nimg,\nvideo {\n\n    height: auto !important;\n    max-width: 100% !important;\n}\n\n";
  styleInject(css_248z$2);

  var css_248z$1 = "#p5_loading {\n\n    position: absolute;\n\n    top: 50%;\n    left: 50%;\n\n    transform: translate(-50%, -50%);\n\n    font-size: max(10vw, min(4rem, 15vw));\n}\n";
  styleInject(css_248z$1);

  var css_248z = ".app {\n\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n\n    background-color: var(--wallpaper-color);\n\n    display: flex;\n\n    -webkit-user-select: none;\n\n            user-select: none;\n\n    /* gui button */\n    /* ------------------------------------------------------------------------------------------ */            \n}\n.app .gui-button {\n\n        z-index: 3;\n        position: absolute;\n        top: var(--size-small);\n\n        width: var(--gui-button-size);\n        height: var(--gui-button-size);\n\n        filter: drop-shadow(0 1px 5px rgba(0, 0, 0, 0.5));\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n\n        cursor: pointer;\n    }\n.app .gui-button .arrow {\n            \n            transform-origin: center;\n            transition: transform var(--gui-animation-speed);\n        }\n.app .gui-button .arrow path {\n\n                fill: var(--p5-pink);\n            }\n.app .gui-button:hover {\n\n            opacity: 0.75;\n            scale: 1.1;\n        }\n.app.left .gui-button {\n\n            left: var(--size-small);\n        }\n.app.left .gui-button .arrow {\n\n                transform: rotate(360deg);\n            }\n.app.left.open .gui-button .arrow {\n\n                    transform: rotate(0deg);\n                }\n.app.right .gui-button {\n\n            right: var(--size-small);\n        }\n.app.right .gui-button .arrow {\n\n                transform: rotate(0deg);\n            }\n.app.right.open .gui-button .arrow {\n\n                    transform: rotate(360deg);\n                }\n\n/* gui */\n\n/* ------------------------------------------------------------------------------------------ */\n.app .gui {\n\n        z-index: 2;\n    \n        height: 100%;\n        width: var(--gui-width);\n    }\n.app .gui .gui-inner {\n    \n            height: 100%;\n            width: var(--gui-width);\n\n            background-color: var(--gui-background-color);\n            /* background-color: hsl(from var(--gui-background-color) h s calc(l * 1.25)); */\n    \n            transition: transform var(--gui-animation-speed);\n\n            overflow: hidden;\n        }\n.app .gui .gui-content {\n    \n            display: flex;\n            flex-direction: column;\n            \n            height: 100%;\n            max-width: 100%;\n        }\n.app .gui .gui-header,.app .gui .gui-body,.app .gui .gui-footer {\n\n            padding: var(--size-small) 0;\n            padding: 0;\n        }\n.app .gui .gui-header,.app .gui .gui-footer {\n\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n.app .gui .gui-header {\n\n            color: var(--gui-title-text-color);\n\n        }\n.app .gui .gui-header .gui-header-box {\n\n                height: calc(var(--size-small) + 2 * var(--size-normal) + var(--size-small));\n    \n                width: 100%;\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: flex-end;\n                \n                background-color: var(--gui-title-background-color);\n    \n                padding: var(--size-small);\n    \n                box-shadow: var(--gui-header-shadow);\n            }\n.app .gui .gui-header .gui-header-box:last-child {\n    \n                    margin-top: 2px;\n                    justify-content: center;\n                    align-items: center;\n                }\n.app .gui .gui-header .title {\n\n                font-size: var(--font-size-large);\n                font-weight: bold;\n                letter-spacing: 2px;\n            }\n.app .gui .gui-header .version,.app .gui .gui-header .pixels,.app .gui .gui-header .units {\n\n                font-size: var(--font-size-small);\n                letter-spacing: 1px;\n            }\n.app .gui .gui-header .pixels,.app .gui .gui-header .units {\n\n                font-family: var(--font-family-mono);\n                letter-spacing: 1px;\n            }\n.app .gui .gui-body {\n    \n            flex: 1;\n\n            display: flex;\n            flex-direction: column;\n            gap: var(--size-xsmall);\n\n            margin-top: var(--size-xxsmall);\n            padding: var(--size-xsmall);\n\n            overflow: auto;\n        }\n.app .gui .gui-body .gui-body-content {\n\n                display: flex;\n                flex-direction: column;\n                gap: var(--size-small) !important;\n            }\n.app .gui .gui-footer {\n\n            justify-content: center;\n\n            color: var(--gui-title-text-color);\n\n            height: calc(var(--size-small) + 2 * var(--size-normal) + var(--size-small));\n            \n            box-shadow: var(--gui-footer-shadow);\n\n            flex-direction: column;\n            gap: 1px;\n        }\n.app .gui .gui-footer .gui-footer-box {\n\n                height: calc(var(--size-small) + 2 * var(--size-normal) + var(--size-small));\n                height: 100%;\n                width: 100%;\n                display: flex;\n                flex-direction: column;\n                justify-content: center;\n                align-items: center;\n                \n                background-color: var(--gui-title-background-color);\n\n                padding: var(--size-xsmall) 0;\n            }\n.app .gui .gui-footer .pixels,.app .gui .gui-footer .units {\n                \n                font-family: var(--font-family-mono);\n                font-size: var(--font-size-s);\n                letter-spacing: 1px;\n            }\n.app.left .gui {\n\n            order: 0;\n\n            width: 0;\n        }\n.app.left .gui .gui-inner {\n\n                transform: translate(-100%, 0);\n            }\n.app.left .gui.animating {\n\n                width: var(--gui-width) !important;\n            }\n.app.left.open .gui {\n\n                width: var(--gui-width);\n                box-shadow: 5px 0px 10px rgba(64, 64, 64, 0.35);\n            }\n.app.left.open .gui .gui-inner {\n                    \n                    transform: translate(0, 0);\n                }\n.app.left.open .gui.animating {\n                    \n                    width: 0 !important;\n                }\n.app.right .gui {\n\n            order: 2;\n            width: 0;\n        }\n.app.right .gui.animating {\n\n                width: var(--gui-width) !important;\n            }\n.app.right .gui.animating .gui-inner {\n\n                    transition-duration: var(--gui-animation-speed);\n                    transform: translate(100%, 0);\n                }\n.app.right .gui .gui-inner {\n\n                /* transition: none; */\n                transition-duration: 0ms;\n                transform: translate(0%, 0);\n            }\n.app.right .gui .gui-header .gui-header-box {\n\n                    align-items: flex-start;\n                }\n.app.right.open .gui {\n\n                width: var(--gui-width);\n                box-shadow: -5px 0px 10px rgba(64, 64, 64, 0.25);\n            }\n.app.right.open .gui.animating {\n                    \n                    width: 0 !important;\n                }\n.app.right.open .gui.animating .gui-inner {\n                    \n                        transition-duration: var(--gui-animation-speed);\n                        transform: translate(-100%, 0) !important;\n                    }\n.app.right.open .gui .gui-inner {\n                    \n                    /* transition: none; */\n                    transition-duration: 0ms;\n                    transform: translate(0%, 0) !important;\n                }\n\n/* lil-gui */\n\n/* ------------------------------------------------------------------------------------------ */\n.app .lil-gui.root {\n        \n        border-radius: var(--gui-widget-border-radius);\n        box-shadow: var(--gui-widget-shadow);\n        overflow: hidden;\n\n        width: 100%;\n    }\n.app .lil-gui.root:has(.extra-bottom-margin) {\n\n            margin-bottom: var(--size-small);\n        }\n.app .gui-coords-wrapper {\n\n        width: 100%;\n        height: 100%;\n    }\n.app .gui-coords-wrapper button {\n            \n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: center;\n\n            width: 100%;\n            height: 100%;\n\n            cursor: pointer;\n    \n            border: none;\n            outline: none;\n    \n            color: var(--gui-title-text-color);\n            background-color: var(--gui-title-background-color);\n            \n            font-size: var(--font-size-small);\n\n            -webkit-user-select: none;\n\n                    user-select: none;\n        }\n.app .gui-coords-wrapper button:hover {\n                \n                opacity: 0.75;\n            }\n.app .gui-hor-btn-container {\n\n        display: flex;\n        justify-content: space-evenly;\n        flex-direction: row;\n        gap: var(--gui-spacing);\n\n        padding: 0;\n    }\n.app .gui-hor-btn-container .controller {\n    \n            width: 100%;\n\n            padding: 0;\n            margin-bottom: 0;\n        }\n.app .gui-hor-btn-container button {\n    \n            height: var(--gui-icon-button-height);\n            /* border-radius: 0; */\n            margin-bottom: var(--size-tiny);\n        }\n.app .gui-hor-btn-container button:focus {\n\n                box-shadow: none;\n            }\n.app .gui-hor-btn-container .name {\n    \n            display: flex;\n            justify-content: center;\n            align-items: center;\n\n            height: 100%;\n    \n            font-family: \"icomoon\", monospace;\n            font-size: var(--gui-icon-button-font-size);\n        }\n.app .gui-hor-btn-container .name.text {\n    \n                font-size: var(--gui-icon-text-button-font-size);\n            }\n.app .gui-hor-btn-container .name .png-in-name {\n    \n                font-size: var(--font-size-small);\n            }\n\n/* artwork */\n\n/* ------------------------------------------------------------------------------------------ */\n.app .artwork-wrapper {\n\n        flex: 1;\n        order: 1;\n        z-index: 1;\n    }\n.app .artwork-wrapper .artwork {\n            \n            position: relative; /* do not change */\n    \n            width: 100%;\n            height: 100%;\n    \n            padding-top: var(--screen-padding-top);\n            padding-right: var(--screen-padding-right);\n            padding-bottom: var(--screen-padding-bottom);\n            padding-left: var(--screen-padding-left);\n    \n            overflow: hidden;\n        }\n.app .artwork-wrapper .artwork-content {\n    \n            position: relative; /* do not change */\n    \n            width: 100% !important;\n            height: 100% !important;\n        }\n.app .artwork-wrapper .canvas {\n    \n            position: absolute;\n        }\n.app .artwork-wrapper .canvas:active {\n                \n                cursor: grabbing;\n            }\n.app .artwork-wrapper .canvas:first-child {\n                \n                box-shadow: var(--canvas-shadow);\n                background: var(--canvas-background);\n            }    \n\n\n";
  styleInject(css_248z);

  // =================================================================================================
  // EXTENSIONS
  // =================================================================================================

  const commands = {

      // public methods
      // ---------------------------------------------------------------------------------------------

      cmdLoop(dispatch = true) {

          if (this.isLooping()) {

              this.noLoop();

          } else {

              this.loop();
          }

          this.__et.dispatchEvent(this.loopingToggledEvent);
      },

      cmdLoopStep() {

          if (this._loop === false) {
                      
              this.redraw(1);
          }
      },

      cmdLoopMultiStep() {

          if (this._loop === false) {
                      
              this.redraw(this.__multiLoopSteps);
          }
      },

      cmdZoom(value) {
          
          this.__zoom = value * this.__cssScreenPPI / p5.__exportPPI;
          this.__positionArtwork();
          this.__et.dispatchEvent(this.zoomedEvent);
      },

      cmdZoomFit() {
          
          this.__zoom = this.__zoomFit;
          this.__positionArtwork();
          this.__et.dispatchEvent(this.zoomedEvent);
      },

      cmdZoomOne() {

          this.__zoom = 1 / p5.__exportPPI * this.__cssScreenPPI;
          this.__positionArtwork();
          this.__et.dispatchEvent(this.zoomedEvent);
      },

      cmdZoomMax() {

          this.__zoom = this.__zoomMaxScaled;
          this.__positionArtwork();
          this.__et.dispatchEvent(this.zoomedEvent);
      },

      cmdExport() {

          this.saveToPNG();
      },

      cmdShadowToggle() {

          if (this.__shadowVisible === true) {

              this.__clearShadow();
              this.__shadowVisible = false;

          } else {

              this.__drawShadow();
              this.__shadowVisible = true;
          }
      },

      cmdGuiToggle() {

          this.__guiButtonClicked();
      },

      cmdGuiLeft() {

          this.__app.classList.remove(this.GUI_RIGHT);
          this.__app.classList.add(this.GUI_LEFT);
      },
      
      cmdGuiRight() {

          this.__app.classList.remove(this.GUI_LEFT);
          this.__app.classList.add(this.GUI_RIGHT);
      },
      
      cmdFullScreenToggle() {
          
          this.__toggleFullScreen();
      },

      __toggleFullScreen() {

          let elem = this.__awWrapper;

          if (!document.fullscreenElement) {

              elem.requestFullscreen().then(() => {

                  console.log('OK');

              }).catch((err) => {

                  alert(
                      `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
                  );
              });

          } else {

              document.exitFullscreen();
          }
      }
  };

  // =================================================================================================
  // EXTENSION
  // =================================================================================================

  const constants = {

      // default hotkeys

      DEFAULT_COMMAND_HOT_KEYS: {

          // loop
          cmdLoop: 'L',
          cmdLoopStep: '+',
          cmdLoopMultiStep: '*',
      
          // zoom
          cmdZoomFit: 'F',
          cmdZoomOne: 'O',
          cmdZoomMax: 'M',

          // export
          cmdExport: 'E',
      
          // show/hide shadow
          cmdShadowToggle: 'Alt+Shift+S',

          // show/hide ui
          cmdGuiToggle: 'Tab',

          // place ui left or right
          cmdGuiLeft: 'Shift+L',
          cmdGuiRight: 'Shift+R',

          // toggle fullscreen
          cmdFullScreenToggle: 'Shift+F'
      },

      
      // default artwork properties

      DEFAULT_ARTWORK_PROPS: {

          renderer: 'p2d',        // string: only 'p2d' !!! no 'webgl'

          zoomMax: 5.0,           // number: maximum zoom
          zoomMin: 0.1,           // number: minimum zoom => can change to fit on screen
          zoomInc: 0.03,          // number: zoom / scroll step size

          screenPaddingTop: '3rem',       // string: min. space betw. canvas and window => css format
                                          // number: min. space betw. canvas and window => pixels
          screenPaddingRight: '3rem',     // string: min. space betw. canvas and window => css format
                                          // number: min. space betw. canvas and window => pixels
          screenPaddingBottom: '3rem',    // string: min. space betw. canvas and window => css format
                                          // number: min. space betw. canvas and window => pixels
          screenPaddingLeft: '3rem',      // string: min. space betw. canvas and window => css format
                                          // number: min. space betw. canvas and window => pixels

          wallpaperColor: '#ebebff',      // string: css element color
                                  
          shadowVisible: true,                        // boolean: shadow visible
          shadowColor: 'rgba(64, 64, 64, 0.5)',       // string: shadow color (css notation)
          shadowX: 0,                                 // number: x offset in units
          shadowY: 64,                                // number: y offset in units
          shadowBlur: 64,                             // number: blur in units
          shadowSpread: -16,                          // number: spread in units

          outputFileName: 'aw-S@seed-D@date-L@loops', // string: output file name
                                                      // @seed == current seed value
                                                      // @date == date & time
                                                      // @loops == number of loops made (frameCount)
                                                      // eg: artwork-@seed-@date-@loops
                                                      // =>  name    seed   date    time  loops
                                                      // =>  artwork-1234-20190513-161132-10000

          seed: null,                     // number: random seed (null == random seed number)

          targetFrameRate: 60,            // number: target loop frame rate
          multiLoopSteps: 10,             // number of loops for multi loop
          loop: false,                    // boolean: if false, draw function gets called only once
                                          //          if true, draw function gets called continuously

          disableFriendlyErrors: true,    // boolean: p5 friendly errors or not

          guiOpen: true,                  // boolean: show info/commands pane
          guiScale: 1.0,                  // number: scale of the gui layout (NOT IN USE)
          guiPosition: 'left',            // string: 'left' or 'right'
          guiCoordsUnits: 'mm',           // string: unit type for coordinates in ui (mm, cm, in)
          guiTheme: 'light',              // string: 'light' or 'dark'

          commandHotKeys: {},             // object: see const DEFAULT_COMMAND_HOT_KEYS above

      },


      // html element id's and classes

      APP_CLASS: 'app',
      ARTWORK_WRAPPER_CLASS: 'artwork-wrapper',
      ARTWORK_ID: 'artwork',
      ARTWORK_CLASS: 'artwork',
      ARTWORK_CONTENT_CLASS: 'artwork-content',
      CANVAS_CLASS: 'canvas',

      GUI_LEFT: 'left',
      GUI_RIGHT: 'right',
      GUI_OPEN: 'open',
  };

  // =================================================================================================
  // EXTENSION
  // =================================================================================================

  const core = {

      // private methods
      // ---------------------------------------------------------------------------------------------

      __initArtwork() {

          document.body.classList.add(`gui-theme-${this.__guiTheme}` || 'gui-theme-dark');

          // app
          this.__app = document.createElement('div');
          this.__app.classList.add(this.APP_CLASS);
          this.__addBeforeScriptsInBody(this.__app);

          // artwork wrapper
          this.__awWrapper = document.createElement('div');
          this.__awWrapper.classList.add(this.ARTWORK_WRAPPER_CLASS);
          this.__app.appendChild(this.__awWrapper);

          // artwork
          this.__aw = document.createElement('div');
          this.__aw.classList.add(this.ARTWORK_CLASS);
          this.__awWrapper.appendChild(this.__aw);

          // artwork content
          this.__awContent = document.createElement('div');
          this.__awContent.classList.add(this.ARTWORK_CONTENT_CLASS);
          this.__aw.appendChild(this.__awContent);

          // custom properties
          document.documentElement.style.setProperty('--wallpaper-color', this.__wallpaperColor);
      },

      __initListeners() {

          const waitForFinalEvent = (() => {
      
              // SOURCE :
              // https://gist.github.com/mazell/289e13ccf01759fcb921
          
              let timers = {};
          
              return function (callback, ms, uniqueId) {
                  if (!uniqueId) { uniqueId = 'Don\'t call this twice without a uniqueId'; }
                  if (timers[uniqueId]) { clearTimeout(timers[uniqueId]); }
                  timers[uniqueId] = setTimeout(callback, ms);
              };
          
          })();

          window.addEventListener('resize', (ev) => {

              waitForFinalEvent(this.__onFinalWindowResize.bind(this, ev), 200, `unique resize key`);
          });

          this.__cvs.addEventListener('mousemove', this.__onMouseMove.bind(this));
          this.__cvs.addEventListener('mousedown', this.__onMouseDown.bind(this));
          this.__cvs.addEventListener('mouseup', this.__onMouseUpOrLeave.bind(this));
          this.__cvs.addEventListener('wheel', this.__onMouseWheel.bind(this), { passive: false });

          this.loopingToggledEvent = new CustomEvent('loopingtoggled');
          // this.loopsChangedEvent = new CustomEvent('loopschanged');
          this.tfrChangedEvent = new CustomEvent('tfrchanged');
          this.frChangedEvent = new CustomEvent('frchanged');
          this.zoomedEvent = new CustomEvent('zoomed');
          this.windowResizedEvent = new CustomEvent('windowresized');
          this.mouseMovedEvent = new CustomEvent('mousemoved');
          this.mousePressedEvent = new CustomEvent('mousepressed');
          this.mouseReleasedEvent = new CustomEvent('mousereleased');

      },

      __initPanZoom() {

          let awWrapperBoundings = this.__awWrapper.getBoundingClientRect();

          document.documentElement.style.setProperty('--screen-padding-top', this.__screenPaddingTop);            
          document.documentElement.style.setProperty('--screen-padding-right', this.__screenPaddingRight);            
          document.documentElement.style.setProperty('--screen-padding-bottom', this.__screenPaddingBottom);            
          document.documentElement.style.setProperty('--screen-padding-left', this.__screenPaddingLeft);            

          this.__awWidth = this.__aw.offsetWidth;
          this.__awHeight = this.__aw.offsetHeight;        
          this.__awContentWidth = this.__awContent.offsetWidth;
          this.__awContentHeight = this.__awContent.offsetHeight;
          this.__scrPaddingT = parseFloat(window.getComputedStyle(this.__aw).getPropertyValue('padding-top'));
          this.__scrPaddingL = parseFloat(window.getComputedStyle(this.__aw).getPropertyValue('padding-left'));
          this.__scrPaddingL += awWrapperBoundings.x;
          this.__scrPaddingT += awWrapperBoundings.y;

          const kw = this.__awContentWidth / this.__cvsWidth;
          const kh = this.__awContentHeight / this.__cvsHeight;

          this.__zoomMinScaled = Math.min(this.__zoomMin, this.__zoomMin / p5.__exportPPI * this.__cssScreenPPI);
          this.__zoomMaxScaled = Math.min(this.__zoomMax, this.__zoomMax / p5.__exportPPI * this.__cssScreenPPI);
          
          this.__zoomFit = Math.min(this.__zoomMaxScaled, Math.min(kw, kh));
          this.__zoomMinCurrent = this.__zoomFit < this.__zoomMinScaled ? this.__zoomFit : this.__zoomMinScaled;

          this.__zoomFit = Math.min(1 / p5.__exportPPI * this.__cssScreenPPI, this.__zoomFit);
          this.__zoom = this.__setupZoom ?  this.__setupZoom : this.__zoomFit;

          this.__initialZoom = this.__zoom;
          this.__initialX = (this.__awContentWidth - this.__cvsWidth * this.__initialZoom) / 2;
          this.__initialY = (this.__awContentHeight - this.__cvsHeight * this.__initialZoom) / 2;

          this.__positionArtwork(this.__initialX + this.__scrPaddingL, this.__initialY + this.__scrPaddingT);
      },

      __positionArtwork(left, top) {

          let deltaX;
          let deltaY;

          if (!(left || top)) {

              deltaX = (this.__awContentWidth - this.__cvsWidth * this.__zoom) / 2;
              deltaY = (this.__awContentHeight - this.__cvsHeight * this.__zoom) / 2;

          } else {

              deltaX = left - this.__scrPaddingL;
              deltaY = top - this.__scrPaddingT;
          }    

          this.__cvs.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(${this.__zoom})`;

          if (this.__shadowVisible) this.__drawShadow();
      },

      __onFinalWindowResize(ev) {

          this.__initPanZoom();
          this.__et.dispatchEvent(this.zoomedEvent);
          this.__et.dispatchEvent(this.windowResizedEvent);
      },

      __initMoreListeners() {

          this.__prevFPS = -1;
          
          setInterval(() => {

              this.__fps = this.frameRate();
              
              if (this.__prevFPS !== this.__fps && this.isLooping()) {

                  this.__et.dispatchEvent(this.frChangedEvent);

              } else if (!this.isLooping()) {

                  this.__fps = 0;
                  this.__et.dispatchEvent(this.frChangedEvent);
              }

              this.__prevFPS = this.__fps;

          }, 1000);

          // adding global event listeners
          // -----------------------------------------------------------------------------------------

          let context = this._isGlobal ? window : this;

          if (context.onZoom) {

              this.__et.addEventListener('zoomed', (e) => {

                  if (this.__zoomPrev !== this.__zoom) {

                      context.onZoom(e);
                      this.__zoomPrev = this.__zoom;
                  }
              });
          }    },

      __onMouseMove(ev) {

          const rect = this.__cvs.getBoundingClientRect();
          const cvsScale = this.__cvsWidth / rect.width;
          const screenX = (ev.clientX - rect.left) * cvsScale;
          const screenY = (ev.clientY - rect.top) * cvsScale;
          const transform = this.drawingContext.getTransform();

          if (transform.isIdentity) {

              this.__mouseX = screenX;
              this.__mouseY = screenY;

          } else {

              const invMat = transform.invertSelf();
              this.__mouseX =  Math.round(screenX * invMat.a + screenY * invMat.c + invMat.e);
              this.__mouseY =  Math.round(screenX * invMat.b + screenY * invMat.d + invMat.f);
          }

          this._setProperty('mouseTX', this.__mouseX);
          this._setProperty('mouseTY', this.__mouseY);

          this.__et.dispatchEvent(this.mouseMovedEvent);
      },

      __onMouseDown(ev) {

          this.__mouseDown = true;
          
          this.__cvsStartPos = this.__cvs.getBoundingClientRect();
          this.__mouseStartDragX = ev.clientX;
          this.__mouseStartDragY = ev.clientY;

          this.__cvs.addEventListener('mousemove', this.__onMouseDragged.bind(this));
          this.__cvs.addEventListener('mouseleave', this.__onMouseUpOrLeave.bind(this));

          this.__et.dispatchEvent(this.mousePressedEvent);
      },

      __onMouseDragged(ev) {

          if (this.__mouseDown === true) {

              let newLeft = this.__cvsStartPos.x + (ev.clientX - this.__mouseStartDragX);
              let newTop = this.__cvsStartPos.y + (ev.clientY - this.__mouseStartDragY);

              this.__mouseDragging = true;

              this.__positionArtwork(newLeft, newTop);
          }
      },

      __onMouseUpOrLeave(ev) {

          if (this.__mouseDragging === true) {

              this.__cvs.removeEventListener('mousemove', this.__onMouseDragged);
              this.__cvs.removeEventListener('mouseleave', this.__onMouseUpOrLeave);
          }

          this.__mouseDown = false;
          this.__mouseDragging = false;

          this.__et.dispatchEvent(this.mouseReleasedEvent);
      },

      __onMouseWheel(ev) {

          this.__zoomInOut(ev, ev.offsetX, ev.offsetY);
          this.__et.dispatchEvent(this.zoomedEvent);
      },

      __zoomInOut(ev, mX, mY) {

          const oldZoom = this.__zoom;
          const pctLeft = mX ? mX / this.__cvsWidth : 0;
          const pctTop = mY ? mY / this.__cvsHeight : 0;
          const pos = this.__cvs.getBoundingClientRect();
          
          let zoomInc = this.__zoomInc;
          let newLeft, newTop;

          if (ev) {

              ev.preventDefault();

              if (ev.ctrlKey) {
                  zoomInc *= 2;
              }

              if (ev.altKey) {
                  zoomInc *= 0.25;
              }

              if (ev.deltaY > 0) {

                  // zoom out
                  
                  if (this.__zoom > this.__zoomMinCurrent / p5.__exportPPI * this.__cssScreenPPI) {
                      
                      this.__zoom = Math.max(this.__zoomMinCurrent, this.__zoom - zoomInc);
                  }

              } else if (ev.deltaY < 0) {

                  // zoom in

                  if (this.__zoom < this.__zoomMaxScaled) {

                      this.__zoom = Math.min(this.__zoomMaxScaled, this.__zoom + zoomInc);
                  }
              }
          }

          newLeft = pos.x + (this.__cvsWidth * oldZoom - this.__cvsWidth * this.__zoom) * pctLeft;
          newTop = pos.y + (this.__cvsHeight * oldZoom - this.__cvsHeight * this.__zoom) * pctTop;

          this.__positionArtwork(newLeft, newTop);
      },

      __initShadow() {

          const xoff = `${this.__shadowX}px`;
          const yoff = `${this.__shadowY}px`;
          const blur = `${this.__shadowBlur}px`;
          const sprd = `${this.__shadowSpread}px`;
          const colr = `${this.__shadowColor}`;

          this.__canvasShadow = xoff + ' ' + yoff + ' ' + blur + ' ' + sprd + ' ' + colr;

          if (this.__shadowVisible) this.__drawShadow();
          else this.__clearShadow();
      },

      __drawShadow() {

          let thisCVS = this.__useRootCanvas ? this.__cvsRoot : this.__cvs;

          thisCVS.style.setProperty('--canvas-shadow', this.__canvasShadow);
      },

      __clearShadow() {

          let thisCVS = this.__useRootCanvas ? this.__cvsRoot : this.__cvs;

          thisCVS.style.setProperty('--canvas-shadow', 'none');
      },

      // public methods
      // ---------------------------------------------------------------------------------------------
      
      fps() {

          return this.__fps;
      },

      wallpaperBackground(bg) {

          if (bg) {

              this.__wallpaperColor = bg;
              document.documentElement.style.setProperty('--wallpaper-color', this.__wallpaperColor);
          }

          return this.__wallpaperColor;
      },

      zoomFactor(factor) {

          if (!this._setupDone) this.__setupZoom = factor  * this.__cssScreenPPI / p5.__exportPPI;

          if (factor) {

              this.cmdZoom(factor);
          }

          return this.__zoom / this.__cssScreenPPI * p5.__exportPPI;
      }
  };

  var name = "p5.5";
  var version = "0.1.0";
  var description = "P5 plugin, adding a UI, panning and zooming and more... ";
  var main = "index.js";
  var scripts = {
  	prebuild: "rm -rf lib",
  	build: "NODE_ENV=production rollup -c --bundleConfigAsCjs",
  	watch: "rollup -c -w --bundleConfigAsCjs"
  };
  var keywords = [
  	"art",
  	"canvas",
  	"coding",
  	"creative",
  	"generative",
  	"gui",
  	"p5",
  	"p5.5",
  	"pan",
  	"ui",
  	"zoom"
  ];
  var author = "Kris HEYSE";
  var license = "MIT";
  var browserslist = {
  	production: [
  		">0.2%",
  		"not dead",
  		"not op_mini all",
  		"last 15 versions"
  	],
  	development: [
  		"last 1 chrome version",
  		"last 1 firefox version",
  		"last 1 safari version"
  	]
  };
  var devDependencies = {
  	"@rollup/plugin-commonjs": "^28.0.1",
  	"@rollup/plugin-json": "^6.1.0",
  	"@rollup/plugin-node-resolve": "^15.3.0",
  	"@rollup/plugin-terser": "^0.4.4",
  	"postcss-preset-env": "^10.1.1",
  	rollup: "^4.27.4",
  	"rollup-plugin-postcss": "^4.0.2"
  };
  var pkg = {
  	name: name,
  	version: version,
  	description: description,
  	main: main,
  	scripts: scripts,
  	keywords: keywords,
  	author: author,
  	license: license,
  	browserslist: browserslist,
  	devDependencies: devDependencies
  };

  /**
   * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
   * Original file: /npm/lil-gui@0.20.0/dist/lil-gui.esm.js
   *
   * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
   */
  /**
   * lil-gui
   * https://lil-gui.georgealways.com
   * @version 0.20.0
   * @author George Michael Brower
   * @license MIT
   */
  let t$1 = class t{constructor(i,e,n,s,l="div"){this.parent=i,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(l),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),t.nextNameID=t.nextNameID||0,this.$name.id="lil-gui-name-"+ ++t.nextNameID,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",(t=>t.stopPropagation())),this.domElement.addEventListener("keyup",(t=>t.stopPropagation())),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n);}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),void 0!==this._onChange&&this._onChange.call(this,this.getValue()),this._changed=!0;}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),void 0!==this._onFinishChange&&this._onFinishChange.call(this,this.getValue())),this._changed=!1;}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,void 0!==this._listenCallbackID&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t;}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement);}};let i$1 = class i extends t$1{constructor(t,i,e){super(t,i,e,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",(()=>{this.setValue(this.$input.checked),this._callOnFinishChange();})),this.$disable=this.$input,this.updateDisplay();}updateDisplay(){return this.$input.checked=this.getValue(),this}};function e$1(t){let i,e;return (i=t.match(/(#|0x)?([a-f0-9]{6})/i))?e=i[2]:(i=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),!!e&&"#"+e}const n$1={isPrimitive:!0,match:t=>"number"==typeof t,fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},s={isPrimitive:!1,match:t=>Array.isArray(t),fromHexString(t,i,e=1){const s=n$1.fromHexString(t);i[0]=(s>>16&255)/255*e,i[1]=(s>>8&255)/255*e,i[2]=(255&s)/255*e;},toHexString:([t,i,e],s=1)=>n$1.toHexString(t*(s=255/s)<<16^i*s<<8^e*s<<0)},l={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,i,e=1){const s=n$1.fromHexString(t);i.r=(s>>16&255)/255*e,i.g=(s>>8&255)/255*e,i.b=(255&s)/255*e;},toHexString:({r:t,g:i,b:e},s=1)=>n$1.toHexString(t*(s=255/s)<<16^i*s<<8^e*s<<0)},r$1=[{isPrimitive:!0,match:t=>"string"==typeof t,fromHexString:e$1,toHexString:e$1},n$1,s,l];let o$1 = class o extends t$1{constructor(t,i,n,s){var l;super(t,i,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(l=this.initialValue,r$1.find((t=>t.match(l)))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",(()=>{this._setValueFromHexString(this.$input.value);})),this.$input.addEventListener("blur",(()=>{this._callOnFinishChange();})),this.$text.addEventListener("input",(()=>{const t=e$1(this.$text.value);t&&this._setValueFromHexString(t);})),this.$text.addEventListener("focus",(()=>{this._textFocused=!0,this.$text.select();})),this.$text.addEventListener("blur",(()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange();})),this.$disable=this.$text,this.updateDisplay();}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i);}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay();}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}};let a$1 = class a extends t$1{constructor(t,i,e){super(t,i,e,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",(t=>{t.preventDefault(),this.getValue().call(this.object),this._callOnChange();})),this.$button.addEventListener("touchstart",(()=>{}),{passive:!0}),this.$disable=this.$button;}};class h extends t$1{constructor(t,i,e,n,s,l){super(t,i,e,"number"),this._initInput(),this.min(n),this.max(s);const r=void 0!==l;this.step(r?l:this._getImplicitStep(),r),this.updateDisplay();}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=100*i+"%";}return this._inputFocused||(this.$input.value=void 0===this._decimals?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id);window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=t=>{const i=parseFloat(this.$input.value);isNaN(i)||(this._snapClampSetValue(i+t),this.$input.value=this.getValue());};let i,e,n,s,l,r=!1;const o=t=>{if(r){const n=t.clientX-i,s=t.clientY-e;Math.abs(s)>5?(t.preventDefault(),this.$input.blur(),r=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(n)>5&&a();}if(!r){const i=t.clientY-n;l-=i*this._step*this._arrowKeyMultiplier(t),s+l>this._max?l=this._max-s:s+l<this._min&&(l=this._min-s),this._snapClampSetValue(s+l);}n=t.clientY;},a=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",a);};this.$input.addEventListener("input",(()=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._stepExplicit&&(t=this._snap(t)),this.setValue(this._clamp(t)));})),this.$input.addEventListener("keydown",(i=>{"Enter"===i.key&&this.$input.blur(),"ArrowUp"===i.code&&(i.preventDefault(),t(this._step*this._arrowKeyMultiplier(i))),"ArrowDown"===i.code&&(i.preventDefault(),t(this._step*this._arrowKeyMultiplier(i)*-1));})),this.$input.addEventListener("wheel",(i=>{this._inputFocused&&(i.preventDefault(),t(this._step*this._normalizeMouseWheel(i)));}),{passive:!1}),this.$input.addEventListener("mousedown",(t=>{i=t.clientX,e=n=t.clientY,r=!0,s=this.getValue(),l=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",a);})),this.$input.addEventListener("focus",(()=>{this._inputFocused=!0;})),this.$input.addEventListener("blur",(()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange();}));}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=t=>{const i=this.$slider.getBoundingClientRect();let e=(n=t,s=i.left,l=i.right,r=this._min,o=this._max,(n-s)/(l-s)*(o-r)+r);var n,s,l,r,o;this._snapClampSetValue(e);},i=i=>{t(i.clientX);},e=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",e);};let n,s,l=!1;const r=i=>{i.preventDefault(),this._setDraggingStyle(!0),t(i.touches[0].clientX),l=!1;},o=i=>{if(l){const t=i.touches[0].clientX-n,e=i.touches[0].clientY-s;Math.abs(t)>Math.abs(e)?r(i):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",a));}else i.preventDefault(),t(i.touches[0].clientX);},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",a);},h=this._callOnFinishChange.bind(this);let d;this.$slider.addEventListener("mousedown",(n=>{this._setDraggingStyle(!0),t(n.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",e);})),this.$slider.addEventListener("touchstart",(t=>{t.touches.length>1||(this._hasScrollBar?(n=t.touches[0].clientX,s=t.touches[0].clientY,l=!0):r(t),window.addEventListener("touchmove",o,{passive:!1}),window.addEventListener("touchend",a));}),{passive:!1}),this.$slider.addEventListener("wheel",(t=>{if(Math.abs(t.deltaX)<Math.abs(t.deltaY)&&this._hasScrollBar)return;t.preventDefault();const i=this._normalizeMouseWheel(t)*this._step;this._snapClampSetValue(this.getValue()+i),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(h,400);}),{passive:!1});}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${i}`,t);}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay());}_normalizeMouseWheel(t){let{deltaX:i,deltaY:e}=t;Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,e=-t.wheelDelta/120,e*=this._stepExplicit?1:10);return i+-e}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){let i=0;return this._hasMin?i=this._min:this._hasMax&&(i=this._max),t-=i,t=Math.round(t/this._step)*this._step,t+=i,t=parseFloat(t.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)));}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return void 0!==this._min}get _hasMax(){return void 0!==this._max}}let d$1 = class d extends t$1{constructor(t,i,e,n){super(t,i,e,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",(()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange();})),this.$select.addEventListener("focus",(()=>{this.$display.classList.add("focus");})),this.$select.addEventListener("blur",(()=>{this.$display.classList.remove("focus");})),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(n);}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach((t=>{const i=document.createElement("option");i.textContent=t,this.$select.appendChild(i);})),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.textContent=-1===i?t:this._names[i],this}};let c$1 = class c extends t$1{constructor(t,i,e){super(t,i,e,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",(()=>{this.setValue(this.$input.value);})),this.$input.addEventListener("keydown",(t=>{"Enter"===t.code&&this.$input.blur();})),this.$input.addEventListener("blur",(()=>{this._callOnFinishChange();})),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay();}updateDisplay(){return this.$input.value=this.getValue(),this}};let u$1=!1;class p{constructor({parent:t,autoPlace:i=void 0===t,container:e,width:n,title:s="Controls",closeFolders:l=!1,injectStyles:r=!0,touchStyles:o=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",(()=>this.openAnimated(this._closed))),this.$title.addEventListener("touchstart",(()=>{}),{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),o&&this.domElement.classList.add("allow-touch-styles"),!u$1&&r&&(!function(t){const i=document.createElement("style");i.innerHTML=t;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(i,e):document.head.appendChild(i);}('.lil-gui {\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  line-height: 1;\n  font-weight: normal;\n  font-style: normal;\n  text-align: left;\n  color: var(--text-color);\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  --background-color: #1f1f1f;\n  --text-color: #ebebeb;\n  --title-background-color: #111111;\n  --title-text-color: #ebebeb;\n  --widget-color: #424242;\n  --hover-color: #4f4f4f;\n  --focus-color: #595959;\n  --number-color: #2cc9ff;\n  --string-color: #a2db3c;\n  --font-size: 11px;\n  --input-font-size: 11px;\n  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;\n  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;\n  --padding: 4px;\n  --spacing: 4px;\n  --widget-height: 20px;\n  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);\n  --name-width: 45%;\n  --slider-knob-width: 2px;\n  --slider-input-width: 27%;\n  --color-input-width: 27%;\n  --slider-input-min-width: 45px;\n  --color-input-min-width: 45px;\n  --folder-indent: 7px;\n  --widget-padding: 0 0 0 3px;\n  --widget-border-radius: 2px;\n  --checkbox-size: calc(0.75 * var(--widget-height));\n  --scrollbar-width: 5px;\n}\n.lil-gui, .lil-gui * {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n.lil-gui.root {\n  width: var(--width, 245px);\n  display: flex;\n  flex-direction: column;\n  background: var(--background-color);\n}\n.lil-gui.root > .title {\n  background: var(--title-background-color);\n  color: var(--title-text-color);\n}\n.lil-gui.root > .children {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.lil-gui.root > .children::-webkit-scrollbar {\n  width: var(--scrollbar-width);\n  height: var(--scrollbar-width);\n  background: var(--background-color);\n}\n.lil-gui.root > .children::-webkit-scrollbar-thumb {\n  border-radius: var(--scrollbar-width);\n  background: var(--focus-color);\n}\n@media (pointer: coarse) {\n  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {\n    --widget-height: 28px;\n    --padding: 6px;\n    --spacing: 6px;\n    --font-size: 13px;\n    --input-font-size: 16px;\n    --folder-indent: 10px;\n    --scrollbar-width: 7px;\n    --slider-input-min-width: 50px;\n    --color-input-min-width: 65px;\n  }\n}\n.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {\n  --widget-height: 28px;\n  --padding: 6px;\n  --spacing: 6px;\n  --font-size: 13px;\n  --input-font-size: 16px;\n  --folder-indent: 10px;\n  --scrollbar-width: 7px;\n  --slider-input-min-width: 50px;\n  --color-input-min-width: 65px;\n}\n.lil-gui.autoPlace {\n  max-height: 100%;\n  position: fixed;\n  top: 0;\n  right: 15px;\n  z-index: 1001;\n}\n\n.lil-gui .controller {\n  display: flex;\n  align-items: center;\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n}\n.lil-gui .controller.disabled {\n  opacity: 0.5;\n}\n.lil-gui .controller.disabled, .lil-gui .controller.disabled * {\n  pointer-events: none !important;\n}\n.lil-gui .controller > .name {\n  min-width: var(--name-width);\n  flex-shrink: 0;\n  white-space: pre;\n  padding-right: var(--spacing);\n  line-height: var(--widget-height);\n}\n.lil-gui .controller .widget {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: var(--widget-height);\n}\n.lil-gui .controller.string input {\n  color: var(--string-color);\n}\n.lil-gui .controller.boolean {\n  cursor: pointer;\n}\n.lil-gui .controller.color .display {\n  width: 100%;\n  height: var(--widget-height);\n  border-radius: var(--widget-border-radius);\n  position: relative;\n}\n@media (hover: hover) {\n  .lil-gui .controller.color .display:hover:before {\n    content: " ";\n    display: block;\n    position: absolute;\n    border-radius: var(--widget-border-radius);\n    border: 1px solid #fff9;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n  }\n}\n.lil-gui .controller.color input[type=color] {\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n.lil-gui .controller.color input[type=text] {\n  margin-left: var(--spacing);\n  font-family: var(--font-family-mono);\n  min-width: var(--color-input-min-width);\n  width: var(--color-input-width);\n  flex-shrink: 0;\n}\n.lil-gui .controller.option select {\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  max-width: 100%;\n}\n.lil-gui .controller.option .display {\n  position: relative;\n  pointer-events: none;\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  line-height: var(--widget-height);\n  max-width: 100%;\n  overflow: hidden;\n  word-break: break-all;\n  padding-left: 0.55em;\n  padding-right: 1.75em;\n  background: var(--widget-color);\n}\n@media (hover: hover) {\n  .lil-gui .controller.option .display.focus {\n    background: var(--focus-color);\n  }\n}\n.lil-gui .controller.option .display.active {\n  background: var(--focus-color);\n}\n.lil-gui .controller.option .display:after {\n  font-family: "lil-gui";\n  content: "↕";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  padding-right: 0.375em;\n}\n.lil-gui .controller.option .widget,\n.lil-gui .controller.option select {\n  cursor: pointer;\n}\n@media (hover: hover) {\n  .lil-gui .controller.option .widget:hover .display {\n    background: var(--hover-color);\n  }\n}\n.lil-gui .controller.number input {\n  color: var(--number-color);\n}\n.lil-gui .controller.number.hasSlider input {\n  margin-left: var(--spacing);\n  width: var(--slider-input-width);\n  min-width: var(--slider-input-min-width);\n  flex-shrink: 0;\n}\n.lil-gui .controller.number .slider {\n  width: 100%;\n  height: var(--widget-height);\n  background: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n  padding-right: var(--slider-knob-width);\n  overflow: hidden;\n  cursor: ew-resize;\n  touch-action: pan-y;\n}\n@media (hover: hover) {\n  .lil-gui .controller.number .slider:hover {\n    background: var(--hover-color);\n  }\n}\n.lil-gui .controller.number .slider.active {\n  background: var(--focus-color);\n}\n.lil-gui .controller.number .slider.active .fill {\n  opacity: 0.95;\n}\n.lil-gui .controller.number .fill {\n  height: 100%;\n  border-right: var(--slider-knob-width) solid var(--number-color);\n  box-sizing: content-box;\n}\n\n.lil-gui-dragging .lil-gui {\n  --hover-color: var(--widget-color);\n}\n.lil-gui-dragging * {\n  cursor: ew-resize !important;\n}\n\n.lil-gui-dragging.lil-gui-vertical * {\n  cursor: ns-resize !important;\n}\n\n.lil-gui .title {\n  height: var(--title-height);\n  font-weight: 600;\n  padding: 0 var(--padding);\n  width: 100%;\n  text-align: left;\n  background: none;\n  text-decoration-skip: objects;\n}\n.lil-gui .title:before {\n  font-family: "lil-gui";\n  content: "▾";\n  padding-right: 2px;\n  display: inline-block;\n}\n.lil-gui .title:active {\n  background: var(--title-background-color);\n  opacity: 0.75;\n}\n@media (hover: hover) {\n  body:not(.lil-gui-dragging) .lil-gui .title:hover {\n    background: var(--title-background-color);\n    opacity: 0.85;\n  }\n  .lil-gui .title:focus {\n    text-decoration: underline var(--focus-color);\n  }\n}\n.lil-gui.root > .title:focus {\n  text-decoration: none !important;\n}\n.lil-gui.closed > .title:before {\n  content: "▸";\n}\n.lil-gui.closed > .children {\n  transform: translateY(-7px);\n  opacity: 0;\n}\n.lil-gui.closed:not(.transition) > .children {\n  display: none;\n}\n.lil-gui.transition > .children {\n  transition-duration: 300ms;\n  transition-property: height, opacity, transform;\n  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);\n  overflow: hidden;\n  pointer-events: none;\n}\n.lil-gui .children:empty:before {\n  content: "Empty";\n  padding: 0 var(--padding);\n  margin: var(--spacing) 0;\n  display: block;\n  height: var(--widget-height);\n  font-style: italic;\n  line-height: var(--widget-height);\n  opacity: 0.5;\n}\n.lil-gui.root > .children > .lil-gui > .title {\n  border: 0 solid var(--widget-color);\n  border-width: 1px 0;\n  transition: border-color 300ms;\n}\n.lil-gui.root > .children > .lil-gui.closed > .title {\n  border-bottom-color: transparent;\n}\n.lil-gui + .controller {\n  border-top: 1px solid var(--widget-color);\n  margin-top: 0;\n  padding-top: var(--spacing);\n}\n.lil-gui .lil-gui .lil-gui > .title {\n  border: none;\n}\n.lil-gui .lil-gui .lil-gui > .children {\n  border: none;\n  margin-left: var(--folder-indent);\n  border-left: 2px solid var(--widget-color);\n}\n.lil-gui .lil-gui .controller {\n  border: none;\n}\n\n.lil-gui label, .lil-gui input, .lil-gui button {\n  -webkit-tap-highlight-color: transparent;\n}\n.lil-gui input {\n  border: 0;\n  outline: none;\n  font-family: var(--font-family);\n  font-size: var(--input-font-size);\n  border-radius: var(--widget-border-radius);\n  height: var(--widget-height);\n  background: var(--widget-color);\n  color: var(--text-color);\n  width: 100%;\n}\n@media (hover: hover) {\n  .lil-gui input:hover {\n    background: var(--hover-color);\n  }\n  .lil-gui input:active {\n    background: var(--focus-color);\n  }\n}\n.lil-gui input:disabled {\n  opacity: 1;\n}\n.lil-gui input[type=text],\n.lil-gui input[type=number] {\n  padding: var(--widget-padding);\n  -moz-appearance: textfield;\n}\n.lil-gui input[type=text]:focus,\n.lil-gui input[type=number]:focus {\n  background: var(--focus-color);\n}\n.lil-gui input[type=checkbox] {\n  appearance: none;\n  width: var(--checkbox-size);\n  height: var(--checkbox-size);\n  border-radius: var(--widget-border-radius);\n  text-align: center;\n  cursor: pointer;\n}\n.lil-gui input[type=checkbox]:checked:before {\n  font-family: "lil-gui";\n  content: "✓";\n  font-size: var(--checkbox-size);\n  line-height: var(--checkbox-size);\n}\n@media (hover: hover) {\n  .lil-gui input[type=checkbox]:focus {\n    box-shadow: inset 0 0 0 1px var(--focus-color);\n  }\n}\n.lil-gui button {\n  outline: none;\n  cursor: pointer;\n  font-family: var(--font-family);\n  font-size: var(--font-size);\n  color: var(--text-color);\n  width: 100%;\n  border: none;\n}\n.lil-gui .controller button {\n  height: var(--widget-height);\n  text-transform: none;\n  background: var(--widget-color);\n  border-radius: var(--widget-border-radius);\n}\n@media (hover: hover) {\n  .lil-gui .controller button:hover {\n    background: var(--hover-color);\n  }\n  .lil-gui .controller button:focus {\n    box-shadow: inset 0 0 0 1px var(--focus-color);\n  }\n}\n.lil-gui .controller button:active {\n  background: var(--focus-color);\n}\n\n@font-face {\n  font-family: "lil-gui";\n  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");\n}'),u$1=!0),e?e.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=l;}add(t,e,n,s,l){if(Object(n)===n)return new d$1(this,t,e,n);const r=t[e];switch(typeof r){case"number":return new h(this,t,e,n,s,l);case"boolean":return new i$1(this,t,e);case"string":return new c$1(this,t,e);case"function":return new a$1(this,t,e)}console.error("gui.add failed\n\tproperty:",e,"\n\tobject:",t,"\n\tvalue:",r);}addColor(t,i,e=1){return new o$1(this,t,i,e)}addFolder(t){const i=new p({parent:this,title:t});return this.root._closeFolders&&i.close(),i}load(t,i=!0){return t.controllers&&this.controllers.forEach((i=>{i instanceof a$1||i._name in t.controllers&&i.load(t.controllers[i._name]);})),i&&t.folders&&this.folders.forEach((i=>{i._title in t.folders&&i.load(t.folders[i._title]);})),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach((t=>{if(!(t instanceof a$1)){if(t._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);i.controllers[t._name]=t.save();}})),t&&this.folders.forEach((t=>{if(t._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);i.folders[t._title]=t.save();})),i}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this));}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame((()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const e=t=>{t.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",e));};this.$children.addEventListener("transitionend",e);const n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame((()=>{this.$children.style.height=n+"px";}));})),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return (t?this.controllersRecursive():this.controllers).forEach((t=>t.reset())),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),void 0!==this._onChange&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t});}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),void 0!==this._onFinishChange&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t});}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),void 0!==this._onOpenClose&&this._onOpenClose.call(this,t);}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach((t=>t.destroy()));}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach((i=>{t=t.concat(i.controllersRecursive());})),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach((i=>{t=t.concat(i.foldersRecursive());})),t}}

  // =================================================================================================
  // IMPORTS
  // =================================================================================================



  // =================================================================================================
  // CONSTANTS
  // =================================================================================================

  const guiHTML = `

    <div class="gui" id="gui">
        <div class="gui-inner">
            <div class="gui-content">
                <div class="gui-header">
                    <div class="gui-header-box">
                        <span class="title">${pkg.name.toUpperCase()}</span>
                        <span class="version">${pkg.version}</span>
                    </div>
                    <div class="gui-header-box">
                        <span class="pixels"></span>
                        <span class="units"></span>
                    </div>
                </div>
                <div class="gui-body">
                    <div class="gui-body-content"></div>
                </div>
                <div class="gui-footer">
                    <div class="gui-coords-wrapper">
                        <button id="gui-coords" class="gui-coords-box" type="button">
                            <span class="pixels">000</span>
                            <span class="units">000</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

  const guiButtonHTML = `

    <div class="gui-button" id="gui-button">
        <div class="arrow">
            <svg 
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                width="28" height="28"
                viewBox="0 0 28 28"
                fill="none"
            >
                <path 
                    stroke-miterlimit="10"
                    d="M16.909,10.259l8.533-2.576l1.676,5.156l-8.498,2.899l5.275,7.48l-4.447,3.225l-5.553-7.348L8.487,26.25l-4.318-3.289l5.275-7.223L0.88,12.647l1.678-5.16l8.598,2.771V1.364h5.754V10.259z"
                >
                </path>
            </svg>
        </div>
    </div>
`;

  // =================================================================================================
  // EXTENSION
  // =================================================================================================

  const gui = {

      // private methods
      // ---------------------------------------------------------------------------------------------

      __initGUI() {

          this.__app.appendChild(this.__getHtmlFragment(guiButtonHTML));
          this.__guiButton = document.getElementById('gui-button');

          this.__app.appendChild(this.__getHtmlFragment(guiHTML));
          this.__gui = document.getElementById('gui');
          this.__guiInner = this.__gui.querySelector('.gui-inner');
          this.__guiContent = this.__gui.querySelector('.gui-content');
          this.__guiBody = this.__gui.querySelector('.gui-body');
          this.__guiBodyContent = this.__guiBody.querySelector('.gui-body-content');
          this.__guiHeader = this.__gui.querySelector('.gui-header');

          // -----------------------------------------------------------------------------------------

          this.__initGuiTweeks();
          this.__initGuiCoords();

          // -----------------------------------------------------------------------------------------

          this.__lilgui = this.__lilguiLoop; // just take the first one
          this.__lilguiWidth = this.__lilgui.domElement.offsetWidth || 245;
          this.__guiSizeSmallCSS = getComputedStyle(document.documentElement).getPropertyValue('--size-small');
          this.__guiWidthCSS = `calc(${this.__guiSizeSmallCSS} + ${this.__lilguiWidth * this.__guiScale}px + ${this.__guiSizeSmallCSS})`;

          document.documentElement.style.setProperty('--gui-width', this.__guiWidthCSS);
          document.documentElement.style.setProperty('--gui-scale', this.__guiScale);

          // -----------------------------------------------------------------------------------------

          if (this.__guiOpen) {

              this.__app.classList.add(this.GUI_OPEN);

          } else {

              this.__app.classList.remove(this.GUI_OPEN);
          }

          if (this.__guiPosition === this.GUI_LEFT) {

              this.__app.classList.remove(this.GUI_RIGHT);
              this.__app.classList.add(this.GUI_LEFT);

          } else {

              this.__app.classList.add(this.GUI_RIGHT);
              this.__app.classList.remove(this.GUI_LEFT);
          }

          this.__guiButton.addEventListener('click', this.__guiButtonClicked.bind(this));

          this.__initPanZoom();

          // -----------------------------------------------------------------------------------------

          this.__guiHeader.querySelector('.pixels')
              .innerText = `${this.__cvsWidth.toLocaleString()}px / ${this.__cvsHeight.toLocaleString()}px`;

          this.__setCanvasSizeInUnits();
      },

      __setCanvasSizeInUnits() {

          if (this.__guiCoordsUnits === 'mm') {

              this.__guiHeader.querySelector('.units')
              .innerText = `${(this.pxmm(this.__cvsWidth).toFixed(2)).toLocaleString()}mm / ${(this.pxmm(this.__cvsHeight).toFixed(2)).toLocaleString()}mm`;

          } else if (this.__guiCoordsUnits === 'cm') {

              this.__guiHeader.querySelector('.units')
              .innerText = `${(this.pxcm(this.__cvsWidth).toFixed(2)).toLocaleString()}cm / ${(this.pxcm(this.__cvsHeight).toFixed(2)).toLocaleString()}cm`;

          } else {

              this.__guiHeader.querySelector('.units')
              .innerText = `${(this.pxin(this.__cvsWidth).toFixed(2)).toLocaleString()}" / ${(this.pxin(this.__cvsHeight).toFixed(2)).toLocaleString()}"`;

          }

      },

      __guiButtonClicked(ev) {

          if (this.__app.classList.contains(this.GUI_LEFT)) {

              // LEFT SIDE

              if (this.__app.classList.contains(this.GUI_OPEN)) {
      
                  this.__app.classList.remove(this.GUI_OPEN);
                  this.__gui.classList.add('animating');

                  this.__guiInner.addEventListener('transitionend', ev => {
      
                      this.__gui.classList.remove('animating');
                      this.__initPanZoom();
      
                  }, { once: true });
      
              } else {
      
                  this.__app.classList.add(this.GUI_OPEN);
                  this.__gui.classList.add('animating');

                  this.__guiInner.addEventListener('transitionend', ev => {

                      this.__gui.classList.remove('animating');
                      this.__initPanZoom();
      
                  }, { once: true });
              }

          } else {

              // RIGHT SIDE

              if (this.__app.classList.contains(this.GUI_OPEN)) {
      
                  this.__app.classList.remove(this.GUI_OPEN);
                  this.__gui.classList.add('animating');

                  this.__guiInner.addEventListener('transitionend', ev => {
      
                      this.__gui.classList.remove('animating');
                      this.__initPanZoom();
      
                  }, { once: true });
      
              } else {
      
                  this.__app.classList.add(this.GUI_OPEN);
                  this.__gui.classList.add('animating');

                  this.__guiInner.addEventListener('transitionend', ev => {

                      this.__gui.classList.remove('animating');
                      this.__initPanZoom();
      
                  }, { once: true });
              }
          }
      },

      __initGuiTweeks() {

          this.__guiObject = {

              loop: (test) => { this.cmdLoop(true); },
              loopStep: () => { this.cmdLoopStep(); },
              loopMultiStep: () => { this.cmdLoopMultiStep(); },

              zoomFit: () => { this.cmdZoomFit(); },
              zoomOne: () => { this.cmdZoomOne(); },
              zoomMax: () => { this.cmdZoomMax(); },

              exportToPNG: () => { this.cmdExport(); },

              wallpaper: this.wallpaperBackground(),

              theme: '',

              panepos: '',

              scrppi: 96
          };


          // loop
          // -----------------------------------------------------------------------------------------

          this.__lilguiLoop = new p({

              container: this.__guiBodyContent,
              title: 'LOOP'
          });

          this.__guiLoop = this.__lilguiLoop.add(this.__guiObject, 'loop').name(this.isLooping() ? '\ue901' : '\ue902');
          this.__guiLoopStep = this.__lilguiLoop.add(this.__guiObject, 'loopStep').name('\ue903');
          this.__guiLoopMultiStep = this.__lilguiLoop.add(this.__guiObject, 'loopMultiStep').name(`\ue900`);

          this.__guiLoopStep.disable(this.isLooping());
          this.__guiLoopMultiStep.disable(this.isLooping());

          let loopContainer = this.__lilguiLoop.domElement.querySelector('.children');
          loopContainer.classList.add('gui-hor-btn-container');

          this.__et.addEventListener('loopingtoggled', ev => {

              this.__guiLoop.name(this.isLooping() ? '\ue901' : '\ue902');
              this.__guiLoopStep.disable(this.isLooping());
              this.__guiLoopMultiStep.disable(this.isLooping());
          });

          this.__et.addEventListener('frchanged', (ev) => {

              this.__lilguiLoop.title().$title.innerHTML = `LOOP &nbsp; &nbsp; ( ~ ${this.round(this.fps())} fps )`;
          });


          // zoom
          // -----------------------------------------------------------------------------------------

          this.__lilguiZoom = new p({

              container: this.__guiBodyContent,
              title: 'ZOOM'
          });

          this.__lilguiZoom.title().$title.innerHTML = `ZOOM &nbsp; &nbsp; ( x ${this.zoomFactor().toFixed(2)} )`;
          this.__lilguiZoom.title().$title.innerHTML = `ZOOM &nbsp; &nbsp; ( x ${(this.__zoom / p5.__screenPPI * p5.__exportPPI).toFixed(2)} )`;
          this.__lilguiZoom.add(this.__guiObject, 'zoomFit').name('\ue906');
          this.__lilguiZoom.add(this.__guiObject, 'zoomOne').name('1:1');
          this.__lilguiZoom.add(this.__guiObject, 'zoomMax').name('\ue905');

          let zoomContainer = this.__lilguiZoom.domElement.querySelector('.children');
          let zoomOneController = this.__lilguiZoom.controllers[1].domElement;
          let zoomOneNameEl = zoomOneController.querySelector('.name');
          zoomContainer.classList.add('gui-hor-btn-container');
          zoomOneNameEl.classList.add('text');

          this.__et.addEventListener('zoomed', (ev) => {

              this.__lilguiZoom.title().$title.innerHTML = `ZOOM &nbsp; &nbsp; ( x ${this.zoomFactor().toFixed(2)} )`;
          });


          // export
          // -----------------------------------------------------------------------------------------

          this.__lilguiExport = new p({

              container: this.__guiBodyContent,
              title: 'EXPORT'
          });

          let exportContainer = this.__lilguiExport.domElement.querySelector('.children');
          this.__lilguiExport.add(this.__guiObject, 'exportToPNG').name('\ue904');
          let exportController = this.__lilguiExport.controllers[0].domElement;
          let exportNameEl = exportController.querySelector('.name');

          exportContainer.classList.add('gui-hor-btn-container');
          // exportContainer.classList.add('gui-hor-btn-container', 'extra-bottom-margin');
          exportNameEl.innerHTML += '<span class="png-in-name">PNG</span>';


          // look
          // -----------------------------------------------------------------------------------------

          this.__lilguiLook = new p({

              container: this.__guiBodyContent,
              title: 'LOOK . . .'
          });

          let lookContainer = this.__lilguiLook.domElement.querySelector('.children');
          lookContainer.classList.add('extra-bottom-margin');

          this.wallpaperBackground(this.getElementBackgroundColor(this.__app));
          
          // look - theme
          let themes = ['dark', 'light'];
          this.__guiLookTheme = this.__lilguiLook
              .add(this.__guiObject, 'theme').name('Theme').options(themes)
              .onChange(value => {

                  themes.forEach(t => document.body.classList.remove(`gui-theme-${t}`));
                  document.body.classList.add(`gui-theme-${value}`);
              });
          this.__guiLookTheme.setValue(this.__guiTheme);

          // look - pane position
          let panepos = ['left', 'right'];
          this.__guiLookPanePos = this.__lilguiLook
              .add(this.__guiObject, 'panepos').name('GUI position').options(panepos)
              .onChange(value => {

                  panepos.forEach(pos => this.__app.classList.remove(pos));
                  this.__guiPosition = value;
                  this.__app.classList.add(value);
                  this.__initPanZoom();
              });
          this.__guiLookPanePos.setValue(this.__guiPosition);

          // look - wallpaper
          this.__guiWallpaper = this.__lilguiLook
              .addColor(this.__guiObject, 'wallpaper').name('Wallpaper')
              .onChange(value => { this.wallpaperBackground(value); });
          this.__guiWallpaper.setValue(this.getElementBackgroundColor(this.__app));

      },


      // 
      // !!! TODO: CLEANING UP CODE
      //

      __initGuiCoords() {

          const units = ['mm', 'cm', 'in'];
          const unitsLong = { mm: 'millimeters', cm: 'centimeters', in: 'inches' };

          const displayCoords = (ev) =>  {

              if (!this.__guiOpen) return;

              const rect = this.__cvs.getBoundingClientRect();
              const cvsScale = this.__cvsWidth / rect.width;
              const screenX = (ev.clientX - rect.left) * cvsScale;
              const screenY = (ev.clientY - rect.top) * cvsScale;
              const cvsX = Math.round(screenX);
              const cvsY = Math.round(screenY);

              this.__coordsPixels.innerText = `${cvsX.toLocaleString()}px / ${cvsY.toLocaleString()}px`;

              if (this.__guiCoordsUnits === 'mm')
                  this.__coordsUnits.innerText = `${(this.pxmm(cvsX).toFixed(2)).toLocaleString()}mm / ${(this.pxmm(cvsY).toFixed(2)).toLocaleString()}mm`;
              else if (this.__guiCoordsUnits === 'cm')
                  this.__coordsUnits.innerText = `${(this.pxcm(cvsX).toFixed(2)).toLocaleString()}cm / ${(this.pxcm(cvsY).toFixed(2)).toLocaleString()}cm`;
              else if (this.__guiCoordsUnits === 'in')
                  this.__coordsUnits.innerText = `${(this.pxin(cvsX).toFixed(2)).toLocaleString()}" / ${(this.pxin(cvsY).toFixed(2)).toLocaleString()}"`;
              else
                  this.__coordsUnits.innerText = `${cvsX.toLocaleString()}px / ${cvsY.toLocaleString()}px`;
          };

          this.__coordsButton = document.getElementById('gui-coords');
          this.__coordsPixels = this.__coordsButton.querySelector('.pixels');
          this.__coordsUnits = this.__coordsButton.querySelector('.units');

          this.__coordsPixels.innerText = `pixels`;
          this.__coordsUnits.innerText = unitsLong[this.__guiCoordsUnits].toUpperCase() + ' (click)';

          // 
          // !!! TODO: Listen only when gui is open
          // 

          this.__cvs.addEventListener('mouseover', ev => {

              this.__cvs.addEventListener('mousemove', displayCoords);
          });

          this.__cvs.addEventListener('mouseout', ev => {

              this.__cvs.removeEventListener('mousemove', displayCoords);
              
              this.__coordsPixels.innerText = `pixels`;
              this.__coordsUnits.innerText = unitsLong[this.__guiCoordsUnits].toUpperCase() + ' (click)';
          });

          this.__coordsButton.addEventListener('click', (ev) => {

              let idx = units.indexOf(this.__guiCoordsUnits) + 1;
              idx = idx === units.length ? 0 : idx;
              this.__guiCoordsUnits = units[idx];

              this.__coordsPixels.innerText = `pixels`;
              this.__coordsUnits.innerText = unitsLong[this.__guiCoordsUnits].toUpperCase() + ' (click)';

              this.__setCanvasSizeInUnits();
          });
      },

      // public methods
      // ---------------------------------------------------------------------------------------------

      addGUI(title = 'CUSTOM TWEAKS') {

          let props = {

              container: this.__guiBodyContent,
              width: this.__guiBodyContent.offsetWidth,
              autoPlace: false,
              title
          };

          return new p(props);
      }
  };

  /**
   * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
   * Original file: /npm/tinykeys@3.0.0/dist/tinykeys.module.js
   *
   * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
   */
  var e=["Shift","Meta","Alt","Control"],t="object"==typeof navigator?navigator.platform:"",n=/Mac|iPod|iPhone|iPad/.test(t),i=n?"Meta":"Control",r="Win32"===t?["Control","Alt"]:n?["Alt"]:[];function o(e,t){return "function"==typeof e.getModifierState&&(e.getModifierState(t)||r.includes(t)&&e.getModifierState("AltGraph"))}function a(e){return e.trim().split(" ").map((function(e){var t=e.split(/\b\+/),n=t.pop(),r=n.match(/^\((.+)\)$/);return r&&(n=new RegExp("^"+r[1]+"$")),[t=t.map((function(e){return "$mod"===e?i:e})),n]}))}function u(t,n){var i=n[0],r=n[1];return !((r instanceof RegExp?!r.test(t.key)&&!r.test(t.code):r.toUpperCase()!==t.key.toUpperCase()&&r!==t.code)||i.find((function(e){return !o(t,e)}))||e.find((function(e){return !i.includes(e)&&r!==e&&o(t,e)})))}function c(e,t){var n;void 0===t&&(t={});var i=null!=(n=t.timeout)?n:1e3,r=Object.keys(e).map((function(t){return [a(t),e[t]]})),c=new Map,d=null;return function(e){e instanceof KeyboardEvent&&(r.forEach((function(t){var n=t[0],i=t[1],r=c.get(n)||n;u(e,r[0])?r.length>1?c.set(n,r.slice(1)):(c.delete(n),i(e)):o(e,e.key)||c.delete(n);})),d&&clearTimeout(d),d=setTimeout(c.clear.bind(c),i));}}function d(e,t,n){var i=void 0===n?{}:n,r=i.event,o=void 0===r?"keydown":r,a=i.capture,u=c(t,{timeout:i.timeout});return e.addEventListener(o,u,a),function(){e.removeEventListener(o,u,a);}}

  // =================================================================================================
  // IMPORTS
  // =================================================================================================



  // =================================================================================================
  // EXTENSIONS
  // =================================================================================================

  const hotkeys = {

      tinykeys: d,
      parseKeybinding: a,

      __initHotKeys() {

          const commands = [

              'cmdLoop',
              'cmdLoopStep',
              'cmdLoopMultiStep',
              'cmdZoomFit',
              'cmdZoomOne',
              'cmdZoomMax',
              'cmdExport',
              'cmdShadowToggle',
              'cmdGuiToggle',
              'cmdGuiLeft',
              'cmdGuiRight',
              'cmdFullScreenToggle'
          ];

          const commandsObject = {};

          commands.forEach((cmd) => {
              commandsObject[this.__cmdHotKeys[cmd]] = (e) => {
                  e.preventDefault();
                  this[cmd]();
              };
          });

          d(window, commandsObject);

          // tinykeys(window, {
          //
          //     [this.__cmdHotKeys.cmdLoop]: (e) => {
          //
          //         e.preventDefault();
          //         this.cmdLoop();
          //     },
          //
          //     ...
          //
          // }

      },

      getHotKeyToolTip(hotkey = 'X', escaped = true) {

          let parsedKeys = a(hotkey);
          let retVal = '';

          let lt = escaped ? '&lt; ' : '< ';
          let gt = escaped ? ' &gt;' : ' >';

          parsedKeys.forEach(el1 => {

              el1.forEach(el2 => {

                  if (Array.isArray(el2) && el2.length) {

                      el2.forEach(el3 => {

                          retVal += lt + el3 + gt;
                      });

                  } else if (typeof el2 === 'string') {

                      retVal += lt + el2 + gt;
                  }
              });

              retVal += ' ';
          });

          return retVal.trim();
      },

      cmdLoopTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdLoop, false); },
      cmdLoopStepTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdLoopStep, false); },
      cmdLoopMultiStepTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdLoopMultiStep, false); },

      cmdZoomFitTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdZoomFit, false); },
      cmdZoomOneTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdZoomOne, false); },
      cmdZoomMaxTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdZoomMax, false); },

      cmdExportTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdExport, false); },

      cmdGuiToggleTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdGuiToggle, false); },
      cmdGuiLeftTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdGuiLeft, false); },
      cmdGuiRightTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdGuiRight, false); },

      cmdFullScreenToggleTip() { return this.getHotKeyToolTip(this.__cmdHotKeys.cmdFullScreenToggle, false); },
  };

  // =================================================================================================
  // EXTENSIONS
  // =================================================================================================

  const output = {

      // private methods
      // ---------------------------------------------------------------------------------------------

      __getFullName() {

          let fullName = this.__outputFileName.replace('@date', this.__getDateString());
          fullName = fullName.replace('@seed', this.__seed);
          fullName = fullName.replace('@loops', this.frameCount);

          return fullName;
      },


      // public methods
      // ---------------------------------------------------------------------------------------------

      saveToPNG() {

          // *** P5 ***
          // this.save(this.__getFullName());

          // *** custom ***
          this.__saveToPNG(this.__getFullName());
      },

      __saveToPNG(file) {

          let ext = '.png';
          let a = document.createElement('a');

          if (this.exportPPI() < 300) {

              alert(
                  'Just letting you know that you are exporting an image with a ' +
                  'resolution less then 300ppi.\n\n' +
                  'This could be too low for decent quality prints.'
              );
          }

          this.__startExportAnim();

          this.__cvs.toBlob((blob) => {

              document.body.appendChild(a);

              a.type = 'image/png';
              a.style.display = 'none';
              a.href = (window.URL || window.webkitURL).createObjectURL(blob);
              a.download = file.endsWith(ext) ? file : file + ext;
              a.target = '_blank';
              a.click();
              a.remove();

              this.__stopExportAnim();
          });
      },

      __startExportAnim() {

          this.__bodyCover = document.createElement('div');
          this.__bodyCover.style.position = 'fixed';
          this.__bodyCover.style.inset = 0;
          this.__bodyCover.style.backgroundColor = 'rgba(0, 0, 0, 0.5';
          this.__bodyCover.style.cursor = 'progress';
          this.__bodyCover.style.zIndex = 1000000;

          document.body.appendChild(this.__bodyCover);
      },

      __stopExportAnim() {

          document.body.removeChild(this.__bodyCover);
      }
  };

  // =================================================================================================
  // EXTENSION
  // =================================================================================================

  const renderer = {
      
      __ctx: null,
      __cvs: null,

      __initRenderer() {

          this.__cvs = document.createElement('canvas');
          this.__cvs.width = this.__cvsWidth;
          this.__cvs.height = this.__cvsHeight;
          this.__cvs.style.transformOrigin = '0 0';
          this.__cvs.classList.add(this.CANVAS_CLASS);
      
          this.__awContent.appendChild(this.__cvs);
      
          this.__ctx = this.__cvs.getContext('2d');
          this.__ctx.imageSmoothingEnabled = true;
          this.__ctx.imageSmoothingQuality = 'high';
      }
  };

  // =================================================================================================
  // CONSTANTS
  // =================================================================================================

  const MM_INCH = 25.4;
  const CM_INCH = 2.54;


  // =================================================================================================
  // EXTENSIONS
  // =================================================================================================

  const units = {

      // private properties
      // ---------------------------------------------------------------------------------------------

      __metricsErrorTest() {

          if (!p5.__metricsSet) throw new Error(`You have to run 'p5.initMetrics(...) before setup.`);
      },


      // public methods
      // ---------------------------------------------------------------------------------------------

      exportPPI() {
          this.__metricsErrorTest();
          return p5.__exportPPI;
      },
      screenPPI() {
          this.__metricsErrorTest();
          return p5.__screenPPI;
      },

      mmpx(mm, ppi = p5.__exportPPI) {
          this.__metricsErrorTest();
          return Math.round(mm / MM_INCH * ppi);
      },
      cmpx(cm, ppi = p5.__exportPPI) {
          this.__metricsErrorTest();
          return Math.round(cm / CM_INCH * ppi);
      },
      inpx(inch, ppi = p5.__exportPPI) {
          this.__metricsErrorTest();
          return Math.round(inch * ppi);
      },

      pxmm(px, ppi = p5.__exportPPI) {
          this.__metricsErrorTest();
          return px / ppi * MM_INCH;
      },
      pxcm(px, ppi = p5.__exportPPI) {
          this.__metricsErrorTest();
          return px / ppi * CM_INCH;
      },
      pxin(px, ppi = p5.__exportPPI) {
          this.__metricsErrorTest();
          return px / ppi;
      }
  };

  // =================================================================================================
  // EXTENSIONS
  // =================================================================================================

  const utilities = {

      // public methods
      // ---------------------------------------------------------------------------------------------

      getCSSVariable(prop, element = document.documentElement) {

          return window.getComputedStyle(element).getPropertyValue(prop);
      },

      setCSSVariable(prop, value, element = document.documentElement) {

          element.style.setProperty(prop, value);
      },

      getElementBackgroundColor(el) {

          return window.getComputedStyle(el, null).getPropertyValue('background-color');
      },

      // console.log(aw.getInvertedColor('rgba(100%, 50%, 50%, 50%)'))
      // console.log(aw.getInvertedColor(bgColor, { black: 'rgb(0, 0, 0)', white: 'rgb(255, 255, 255)'}));
      // console.log(aw.getInvertedColor(bgColor));
      getInvertedColor(rgbString, bw) {

          const rgbArray = this.__rgbStringToArray(rgbString);

          if (bw && typeof bw === 'object') {

              if (rgbArray[0] * 0.299 + rgbArray[1] * 0.587 + rgbArray[2] * 0.114 > 186) {

                  return bw.black;

              } else {

                  return bw.white;
              }
          }

          rgbArray[0] = 255 - rgbArray[0];
          rgbArray[1] = 255 - rgbArray[1];
          rgbArray[2] = 255 - rgbArray[2];

          if (rgbArray.length === 3) {

              return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;

          } else {

              return `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, ${rgbArray[3]})`;
          }
      },

      
      // private methods
      // ---------------------------------------------------------------------------------------------

      __rgbStringToArray(rgbString) {

          // result of Gemini AI Chat
          // -----------------------------------------------------------------------------------------

          const sep = rgbString.indexOf(',') > -1 ? ',' : ' ';
          let rgbArray;

          // convert multiple spaces to one space
          rgbString = rgbString.replace(/ {1,}/g, ' ');

          // check for rgb or rgba
          if (rgbString.indexOf('rgba') === 0) {
              
              rgbArray = rgbString.substr(5).split(')')[0].split(sep);

              if (rgbArray.indexOf('/') > -1) {
                  rgbArray.splice(3, 1);
              }

          } else {

              rgbArray = rgbString.substr(4).split(')')[0].split(sep);
          }

          for (let colOrAlpha in rgbArray) {

              let coa = rgbArray[colOrAlpha];

              if (coa.indexOf("%") > -1) {

                  let pct = coa.substr(0, coa.length - 1) / 100;

                  if (colOrAlpha < 3) {

                      rgbArray[colOrAlpha] = Math.round(pct * 255);

                  } else {

                      rgbArray[colOrAlpha] = pct;
                  }
              }
          }

          return rgbArray.map(el => parseFloat(el));
      },

      __getHtmlFragment(htmlString) {
          
          // SOURCE:
          // https://love2dev.com/blog/inserting-html-using-createdocumentfragment-instead-of-using-jquery/
      
          let frag = document.createDocumentFragment();
          let temp = document.createElement('div');
      
          temp.innerHTML = htmlString;
      
          while (temp.firstChild) {
      
              frag.appendChild(temp.firstChild);
          }
      
          return (frag);
      },

      __addBeforeScriptsInHead(el) {

          let firstScriptTag = document.head.getElementsByTagName('script')[0];
      
          if (firstScriptTag) document.head.insertBefore(el, firstScriptTag);
          else document.head.appendChild(el);
      },


      __addBeforeScriptsInBody(el) {

          let firstScriptTag = document.body.getElementsByTagName('script')[0];
      
          if (firstScriptTag) document.body.insertBefore(el, firstScriptTag);
          else document.body.appendChild(el);
      },

      __removeEmptyMainTags() {

          let mainTags = document.getElementsByTagName('main');

          mainTags.forEach(mt => {

              if (!mt.hasChildNodes()) {

                  mt.remove();
              }
          });
      },

      __removeComments(node) {

          // SOURCE:
          // https://www.sitepoint.com/removing-useless-nodes-from-the-dom/
      
          for (let n = 0; n < node.childNodes.length; n++) {
      
              let child = node.childNodes[n];
      
              if (child.nodeType === Node.COMMENT_NODE) { // 8
      
                  node.removeChild(child);
                  n--;
      
              } else if (child.nodeType === Node.ELEMENT_NODE) { // 1
      
                  this.__removeComments.bind(this, child);
              }
          }
      },

      __getDateString() {

          let d = new Date();

          return d.getFullYear() +
              ('' + (d.getMonth() + 1)).padStart(2, '0') +
              ('' + d.getDate()).padStart(2, '0') + '-' +
              ('' + d.getHours()).padStart(2, '0') +
              ('' + d.getMinutes()).padStart(2, '0') +
              ('' + d.getSeconds()).padStart(2, '0');
      },

      
      __getCssVarPixelValue(element, variableName) {
          
          // result of Gemini AI Chat
          // -----------------------------------------------------------------------------------------
      
          const computedStyle = window.getComputedStyle(element);
          const value = computedStyle.getPropertyValue(variableName);

          // Remove any trailing whitespace
          const trimmedValue = value.trim();

          // Handle pixel values directly
          if (trimmedValue.endsWith('px')) {
              return parseFloat(trimmedValue);
          }

          // Handle em and rem (requires font size)
          if (trimmedValue.endsWith('em') || trimmedValue.endsWith('rem')) {
              const fontSize = parseFloat(computedStyle.fontSize);
              return parseFloat(trimmedValue) * fontSize;
          }

          // Handle percentages (requires containing element size)
          if (trimmedValue.endsWith('%')) {
              const parent = element.parentElement;
              if (!parent) {
                  console.warn(`Failed to convert "${variableName}" (percentage) - no parent element found`);
                  return null;
              }

              const parentWidth = parent.clientWidth;
              const parentHeight = parent.clientHeight;

              const percentValue = parseFloat(trimmedValue);
              let pixelValue;

              if (variableName.endsWith('width')) {
                  pixelValue = parentWidth * (percentValue / 100);
              } else if (variableName.endsWith('height')) {
                  pixelValue = parentHeight * (percentValue / 100);
              } else {
                  console.warn(`Failed to convert "${variableName}" (percentage) - unsupported property`);
                  return null;
              }

              return pixelValue;
          }

          // Handle basic calculations with supported units (basic implementation)
          const match = trimmedValue.match(/^([0-9.]+)([a-z]+)$/);
          if (match) {
              const numberValue = parseFloat(match[1]);
              const unit = match[2];

              if (unit === 'em' || unit === 'rem') {
                  const fontSize = parseFloat(computedStyle.fontSize);
                  return numberValue * fontSize;
              } else if (unit === '%') {
                  // (Same logic as percentage handling above)
                  const parent = element.parentElement;
                  if (!parent) {
                      console.warn(`Failed to convert "${variableName}" (calculation with %) - no parent element found`);
                      return null;
                  }

                  const parentWidth = parent.clientWidth;
                  const parentHeight = parent.clientHeight;

                  let pixelValue;
                  if (variableName.endsWith('width')) {
                      pixelValue = parentWidth * (numberValue / 100);
                  } else if (variableName.endsWith('height')) {
                      pixelValue = parentHeight * (numberValue / 100);
                  } else {
                      console.warn(`Failed to convert "${variableName}" (calculation with %) - unsupported property`);
                      return null;
                  }

                  return pixelValue;
              } else {
                  console.warn(`Failed to convert "${variableName}" (calculation) - unsupported unit: ${unit}`);
                  return null;
              }
          }

          // Handle other units or complex calculations (optional)
          // You can add logic here to handle other units (vh, vw, etc.) or more complex calculations,
          // but be aware of potential limitations and edge cases.

          console.warn(`Failed to convert "${variableName}" - unsupported format`);
          return null;
      }
  };

  // =================================================================================================
  // EXTENSIONS
  // =================================================================================================

  const ppi = {

      // private properties
      // ---------------------------------------------------------------------------------------------

      __metricsSet: false,

      __displaySize: 0,               // diagonal size of the display

      __exportPPI: 0,                 // export resolution (0 => equal to screen resolution)
                                      // for a good export/printing result, set to >= 300

      __screenPPI: 0,                 // screen resolution gets calculated by screen width and height
                                      // and display size


      // private methods
      // ---------------------------------------------------------------------------------------------

      __calculatePPI(pxW, pxH, inchSize, devPixRatio = 1) {

          return ((Math.sqrt( pxW * pxW + pxH * pxH) / inchSize) * devPixRatio);
      },


      // public methods
      // ---------------------------------------------------------------------------------------------

      initMetrics(displaySize, exportPPI = 0, forcedScreenPPI = 0) {

          if (!displaySize && forcedScreenPPI == 0) {

              throw new Error(`The 'displaySize' argument is required.`);
          }

          if (forcedScreenPPI === 0) {

              p5.__screenPPI = p5.__calculatePPI(
                  window.screen.width, window.screen.height, displaySize, devicePixelRatio
              );

          } else {

              p5.__screenPPI = forcedScreenPPI;
          }

          
          p5.__exportPPI = exportPPI === 0 ? p5.__screenPPI : exportPPI;
          
          console.log(
              'screenPPI:', p5.__screenPPI,
              ' - exportPPI:', p5.__exportPPI,
              ' - devPixRatio:', devicePixelRatio
          );

          p5.__metricsSet = true;
      },
      
  };

  // =================================================================================================
  // IMPORTS
  // =================================================================================================



  // =================================================================================================
  // P5 CLASS EXTENSIONS
  // =================================================================================================

  p5.__extensionsToInit = [];

  p5.extend = (src, proto, forceOverride, ignores = []) => {

      if (src?.[0]) src.forEach(srcObj => p5.__extend(srcObj, proto, forceOverride, ignores));
      else p5.__extend(src, proto, forceOverride, ignores);
  };

  p5.__extend = (srcObj, proto = true, forceOverride = false, ignores = []) => {

      const tgtObj = proto ? p5.prototype : p5;

      for (let key in srcObj) {

          if (ignores.indexOf(key) === -1 && key !== '__name__' && key !== '__init__') {

              if (tgtObj.hasOwnProperty(key) && !forceOverride) {

                  console.log('\n');
                  console.warn(p5.__getWarningText('p5', key));
              }
      
              tgtObj[key] = srcObj[key];
          }
      }

      // save the plugins __init__() functions so we can
      // run them when the renderer is set up
      if (srcObj.hasOwnProperty('__init__')) {

          p5.__extensionsToInit.push(srcObj['__init__']);
      }

      // give message when the plugin is loaded
      // (plugins with __name__ property value starting with '_' do not output message)
      if (srcObj.hasOwnProperty('__name__')) {

          if (srcObj.__name__.substring(0, 1) !== '_') {

              console.log(`=> Loaded plugin: ${srcObj.__name__ || '<annonymus>'}`);
          }
      }
  };

  p5.__getWarningText = (objText, key) => {

      return `
        ${objText} already has a property/method called "${key}".\n
        If you did override it on purpose, you can just ignore this warning \n
        or you can use the forceOverride option to avoid future warnings.\n
        Otherwize, try to rename your new "${key}" property/method.\n
    `;
  };

  // =================================================================================================
  // P5 METHOD OVERRIDES
  // =================================================================================================

  // createCanvas

  p5.prototype.createCanvas = function($_createCanvas) {

      const parsePadding = (p) => {

          return (typeof p === 'number' || `${parseInt(p)}` === p) ? p + 'px' : p;
      };

      return function() {

          let cvs;

          if (!p5.__metricsSet) throw new Error(`You have to run 'p5.initMetrics(...) before setup.`);
          
          this.__p5Mode = true;
          
          this.__aw = null;
          
          if (typeof arguments[2] === 'object') {
              
              this.__p5Mode = false;
              this.__changing_ppi_disabled = true;

              this.__et = new EventTarget();

              this.__fps = 0;

              this.__props = { ...this.DEFAULT_ARTWORK_PROPS, ...arguments[2] };
              
              p5.disableFriendlyErrors = this.__props.disableFriendlyErrors;

              this.__cvsWidth = arguments[0];
              this.__cvsHeight = arguments[1];

              // !!! only 2D for now
              if (this.__props.renderer != 'p2d') {

                  throw new Error('Sorry, only 2D Global mode is supported');
              }

              this.__renderer = this.__props.renderer;
              
              this.__screenPaddingTop = parsePadding(this.__props.screenPaddingTop);
              this.__screenPaddingRight = parsePadding(this.__props.screenPaddingRight);
              this.__screenPaddingBottom = parsePadding(this.__props.screenPaddingBottom);
              this.__screenPaddingLeft = parsePadding(this.__props.screenPaddingLeft);

              this.__cssScreenPPI = this.screenPPI() / (Math.ceil(window.devicePixelRatio) || 1);

              this.__zoomMin = this.__props.zoomMin;
              this.__zoomMinCurrent = this.__zoomMin;
              this.__zoomMax = this.__props.zoomMax;
              this.__zoomInc = this.__props.zoomInc;

              this.__shadowVisible = !!this.__props.shadowVisible;
              this.__shadowColor = this.__props.shadowColor;
              this.__shadowX = this.__props.shadowX;
              this.__shadowY = this.__props.shadowY;
              this.__shadowBlur = this.__props.shadowBlur;
              this.__shadowSpread = this.__props.shadowSpread;

              this.__seed = this.__props.seed
                  ? this.__props.seed
                  : Math.floor(Math.random() * (10000 - 1000) + 1000);
                  
              this.__noiseSeed = this.__seed;

              this.__targetFrameRate = this.__props.targetFrameRate;
              this.frameRate(this.__props.targetFrameRate);

              this.__wallpaperColor = this.__props.wallpaperColor;
              this.__wallpaperImage = this.__props.wallpaperImage;
              this.__wallpaperPosition = this.__props.wallpaperPosition;
              this.__wallpaperRepeat = this.__props.wallpaperRepeat;
              this.__wallpaperSize = this.__props.wallpaperSize;
          
              this.__outputFileName = this.__props.outputFileName;

              this.__loop = this.__props.loop;
              this.__multiLoopSteps = this.__props.multiLoopSteps;
              this.__initialNumberOfLoops = this.__props.initialNumberOfLoops;

              this.__cmdHotKeys = { ...this.DEFAULT_COMMAND_HOT_KEYS, ...this.__props.commandHotKeys };
      
              this.__guiOpen = this.__props.guiOpen;
              this.__guiScale = this.__props.guiScale;
              this.__guiPosition = this.__props.guiPosition;
              this.__guiCoordsUnits = this.__props.guiCoordsUnits;
              this.__guiTheme = this.__props.guiTheme;
          
              this.__zoomPrev = 0;
              
              this.__initArtwork();
              this.__initRenderer();
              this.__initPanZoom();
              this.__initListeners();
              this.__initMoreListeners();
              this.__initShadow();
              this.__initHotKeys();

              this.randomSeed(this.__seed);
              this.noiseSeed(this.__noiseSeed);

              this.__initGUI();
              this.cmdZoomFit();  // HACK to show correct zoom factor in gui pane
                                  // Should be ok whitout this hack, but it isn't ;)
                                  // Soo...

              if (this.__loop) this.loop();
              else this.noLoop();

              // set global properties
              this._setProperty('events', this.__et);
              this._setProperty('mouseTX', this.__mouseX || 0);
              this._setProperty('mouseTY', this.__mouseY || 0);

              // create p5 createCanvas
              cvs = $_createCanvas.call(this, arguments[0], arguments[1], this.__renderer, this.__cvs);

              // remove empty <main> elements
              // created and added by default
              this.__removeEmptyMainTags();
          

              // run the __init__() method for the respective extensions/plugins (if one is present)
              // -------------------------------------------------------------------------------------
              p5.__extensionsToInit.forEach(el => el(this));

          } else {

              cvs = $_createCanvas.apply(this, arguments);
          }

          // remove comments in html
          this.__removeComments(document.head);
          this.__removeComments(document.body);

          return cvs;
      }

  }(p5.prototype.createCanvas);


  // noLoop

  p5.prototype.$_noLoop = p5.prototype.noLoop;
  p5.prototype.noLoop = function() {

      this.$_noLoop(); // used in cmdLoop()
      this.__et.dispatchEvent(this.loopingToggledEvent);
  };


  // loop

  p5.prototype.$_loop = p5.prototype.loop;
  p5.prototype.loop = function() {

      this.$_loop(); // used in cmdLoop()
      this.__et.dispatchEvent(this.loopingToggledEvent);
  };


  // randomSeed

  p5.prototype.randomSeed = function($_randomSeed) {

      return function(s) {

          $_randomSeed.call(this, s);
          this.__seed = s;
      }
      
  }(p5.prototype.randomSeed);


  // noiseSeed

  p5.prototype.noiseSeed = function($_noiseSeed) {

      return function(s) {

          $_noiseSeed.call(this, s);
          this.__noiseSeed = s;
      }

  }(p5.prototype.noiseSeed);


  // =================================================================================================
  // EXTEND P5 INSTANCE
  // =================================================================================================

  p5.extend(commands);
  p5.extend(constants);
  p5.extend(core);
  p5.extend(gui);
  p5.extend(hotkeys);
  p5.extend(output);
  p5.extend(renderer);
  p5.extend(units);
  p5.extend(utilities);

  p5.extend(ppi, false);

}));
