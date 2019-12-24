/**
 * simple-json-editor 1.0.1
 * https://github.com/114132584/simple-json-editor
 * build at Tue Dec 24 2019 09:51:54 GMT+0800 (GMT+08:00)
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.SimpleJsonEditor = factory());
}(this, (function () { 'use strict';

    function polyfill () {
        // https://tc39.github.io/ecma262/#sec-array.prototype.includes
        if (!Array.prototype.includes) {
            Object.defineProperty(Array.prototype, 'includes', {
                value: function value(searchElement, fromIndex) {
                    // 1. Let O be ? ToObject(this value).
                    if (this == null) {
                        throw new TypeError('"this" is null or not defined')
                    }

                    var o = Object(this);

                    // 2. Let len be ? ToLength(? Get(O, "length")).
                    var len = o.length >>> 0;

                    // 3. If len is 0, return false.
                    if (len === 0) {
                        return false
                    }

                    // 4. Let n be ? ToInteger(fromIndex).
                    //    (If fromIndex is undefined, this step produces the value 0.)
                    var n = fromIndex | 0;

                    // 5. If n ≥ 0, then
                    //  a. Let k be n.
                    // 6. Else n < 0,
                    //  a. Let k be len + n.
                    //  b. If k < 0, let k be 0.
                    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

                    // 7. Repeat, while k < len
                    while (k < len) {
                        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
                        // b. If SameValueZero(searchElement, elementK) is true, return true.
                        // c. Increase k by 1.
                        // NOTE: === provides the correct "SameValueZero" comparison needed here.
                        if (o[k] === searchElement) {
                            return true
                        }
                        k++;
                    }

                    // 8. Return false
                    return false
                }
            });
        }
        // text.contains()
        if (!Text.prototype.contains) {
            Text.prototype.contains = function contains(node) {
                return this === node
            };
        }
    }

    /**
     * remove format of selection
     * Created by peak on 16/8/18.
     */
    var eraser = {
        name: 'eraser',
        icon: 'fa fa-eraser',
        i18n: 'eraser',
        handler: function handler(editor) {
            editor.execCommand('removeFormat');
        }
    };

    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    function getCjsExportFromNamespace (n) {
    	return n && n['default'] || n;
    }

    var lrz_all_bundle = createCommonjsModule(function (module, exports) {
    !function(e,t){{ module.exports=t(); }}(commonjsGlobal,function(){return function(e){function t(r){if(n[r]){ return n[r].exports; }var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(6),n(7),e.exports=n(8);},function(e,t,n){(function(t){!function(n){function r(e,t){return function(){e.apply(t,arguments);}}function i(e){if("object"!=typeof this){ throw new TypeError("Promises must be constructed via new"); }if("function"!=typeof e){ throw new TypeError("not a function"); }this._state=null,this._value=null,this._deferreds=[],l(e,r(a,this),r(s,this));}function o(e){var t=this;return null===this._state?void this._deferreds.push(e):void f(function(){var n=t._state?e.onFulfilled:e.onRejected;if(null===n){ return void(t._state?e.resolve:e.reject)(t._value); }var r;try{r=n(t._value);}catch(i){return void e.reject(i)}e.resolve(r);})}function a(e){try{if(e===this){ throw new TypeError("A promise cannot be resolved with itself."); }if(e&&("object"==typeof e||"function"==typeof e)){var t=e.then;if("function"==typeof t){ return void l(r(t,e),r(a,this),r(s,this)) }}this._state=!0,this._value=e,u.call(this);}catch(n){s.call(this,n);}}function s(e){this._state=!1,this._value=e,u.call(this);}function u(){for(var e=0,t=this._deferreds.length;t>e;e++){ o.call(this,this._deferreds[e]); }this._deferreds=null;}function c(e,t,n,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.resolve=n,this.reject=r;}function l(e,t,n){var r=!1;try{e(function(e){r||(r=!0,t(e));},function(e){r||(r=!0,n(e));});}catch(i){if(r){ return; }r=!0,n(i);}}var f="function"==typeof t&&t||function(e){setTimeout(e,1);},d=Array.isArray||function(e){return "[object Array]"===Object.prototype.toString.call(e)};i.prototype["catch"]=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=this;return new i(function(r,i){o.call(n,new c(e,t,r,i));})},i.all=function(){var e=Array.prototype.slice.call(1===arguments.length&&d(arguments[0])?arguments[0]:arguments);return new i(function(t,n){function r(o,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s){ return void s.call(a,function(e){r(o,e);},n) }}e[o]=a,0===--i&&t(e);}catch(u){n(u);}}if(0===e.length){ return t([]); }for(var i=e.length,o=0;o<e.length;o++){ r(o,e[o]); }})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e);})},i.reject=function(e){return new i(function(t,n){n(e);})},i.race=function(e){return new i(function(t,n){for(var r=0,i=e.length;i>r;r++){ e[r].then(t,n); }})},i._setImmediateFn=function(e){f=e;},i.prototype.always=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})},"undefined"!=typeof e&&e.exports?e.exports=i:n.Promise||(n.Promise=i);}(this);}).call(t,n(2).setImmediate);},function(e,t,n){(function(e,r){function i(e,t){this._id=e,this._clearFn=t;}var o=n(3).nextTick,a=Function.prototype.apply,s=Array.prototype.slice,u={},c=0;t.setTimeout=function(){return new i(a.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new i(a.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e.close();},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id);},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t;},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1;},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout();},t));},t.setImmediate="function"==typeof e?e:function(e){var n=c++,r=arguments.length<2?!1:s.call(arguments,1);return u[n]=!0,o(function(){u[n]&&(r?e.apply(null,r):e.call(null),t.clearImmediate(n));}),n},t.clearImmediate="function"==typeof r?r:function(e){delete u[e];};}).call(t,n(2).setImmediate,n(2).clearImmediate);},function(e,t){function n(){c=!1,a.length?u=a.concat(u):l=-1,u.length&&r();}function r(){if(!c){var e=setTimeout(n);c=!0;for(var t=u.length;t;){for(a=u,u=[];++l<t;){ a&&a[l].run(); }l=-1,t=u.length;}a=null,c=!1,clearTimeout(e);}}function i(e,t){this.fun=e,this.array=t;}function o(){}var a,s=e.exports={},u=[],c=!1,l=-1;s.nextTick=function(e){
    var arguments$1 = arguments;
    var t=new Array(arguments.length-1);if(arguments.length>1){ for(var n=1;n<arguments.length;n++){ t[n-1]=arguments$1[n]; } }u.push(new i(e,t)),1!==u.length||c||setTimeout(r,0);},i.prototype.run=function(){this.fun.apply(null,this.array);},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=o,s.addListener=o,s.once=o,s.off=o,s.removeListener=o,s.removeAllListeners=o,s.emit=o,s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return "/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0};},function(e,t){function n(){var e=~navigator.userAgent.indexOf("Android")&&~navigator.vendor.indexOf("Google")&&!~navigator.userAgent.indexOf("Chrome");return e&&navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop()<=534||/MQQBrowser/g.test(navigator.userAgent)}var r=function(){try{return new Blob,!0}catch(e){return !1}}()?window.Blob:function(e,t){var n=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MSBlobBuilder||window.MozBlobBuilder);return e.forEach(function(e){n.append(e);}),n.getBlob(t?t.type:void 0)},i=function(){function e(){var e=this,n=[],i=Array(21).join("-")+(+new Date*(1e16*Math.random())).toString(36),o=XMLHttpRequest.prototype.send;this.getParts=function(){return n.toString()},this.append=function(e,t,r){n.push("--"+i+'\r\nContent-Disposition: form-data; name="'+e+'"'),t instanceof Blob?(n.push('; filename="'+(r||"blob")+'"\r\nContent-Type: '+t.type+"\r\n\r\n"),n.push(t)):n.push("\r\n\r\n"+t),n.push("\r\n");},t++,XMLHttpRequest.prototype.send=function(a){var s,u,c=this;a===e?(n.push("--"+i+"--\r\n"),u=new r(n),s=new FileReader,s.onload=function(){o.call(c,s.result);},s.onerror=function(e){throw e},s.readAsArrayBuffer(u),this.setRequestHeader("Content-Type","multipart/form-data; boundary="+i),t--,0==t&&(XMLHttpRequest.prototype.send=o)):o.call(this,a);};}var t=0;return e.prototype=Object.create(FormData.prototype),e}();e.exports={Blob:r,FormData:n()?i:FormData};},function(e,t,n){var r,i;(function(){function n(e){return !!e.exifdata}function o(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,i=new ArrayBuffer(r),o=new Uint8Array(i),a=0;r>a;a++){ o[a]=n.charCodeAt(a); }return i}function a(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){(200==this.status||0===this.status)&&t(this.response);},n.send();}function s(e,t){function n(n){var r=u(n),i=c(n);e.exifdata=r||{},e.iptcdata=i||{},t&&t.call(e);}if(e.src){ if(/^data\:/i.test(e.src)){var r=o(e.src);n(r);}else if(/^blob\:/i.test(e.src)){var i=new FileReader;i.onload=function(e){n(e.target.result);},a(e.src,function(e){i.readAsArrayBuffer(e);});}else{var s=new XMLHttpRequest;s.onload=function(){200==this.status||0===this.status?n(s.response):t(new Error("Could not load image")),s=null;},s.open("GET",e.src,!0),s.responseType="arraybuffer",s.send(null);} }else if(window.FileReader&&(e instanceof window.Blob||e instanceof window.File)){var i=new FileReader;i.onload=function(e){n(e.target.result);},i.readAsArrayBuffer(e);}}function u(e){var t=new DataView(e);if(255!=t.getUint8(0)||216!=t.getUint8(1)){ return !1; }for(var n,r=2,i=e.byteLength;i>r;){if(255!=t.getUint8(r)){ return !1; }if(n=t.getUint8(r+1),225==n){ return g(t,r+4,t.getUint16(r+2)-2); }r+=2+t.getUint16(r+2);}}function c(e){var t=new DataView(e);if(255!=t.getUint8(0)||216!=t.getUint8(1)){ return !1; }for(var n=2,r=e.byteLength,i=function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)};r>n;){if(i(t,n)){var o=t.getUint8(n+7);o%2!==0&&(o+=1),0===o&&(o=4);var a=n+8+o,s=t.getUint16(n+6+o);return l(e,a,s)}n++;}}function l(e,t,n){for(var r,i,o,a,u=new DataView(e),c={},l=t;t+n>l;){ 28===u.getUint8(l)&&2===u.getUint8(l+1)&&(a=u.getUint8(l+2),a in S&&(o=u.getInt16(l+3),i=S[a],r=h(u,l+5,o),c.hasOwnProperty(i)?c[i]instanceof Array?c[i].push(r):c[i]=[c[i],r]:c[i]=r)),l++; }return c}function f(e,t,n,r,i){var o,a,s,u=e.getUint16(n,!i),c={};for(s=0;u>s;s++){ o=n+12*s+2,a=r[e.getUint16(o,!i)],!a&&p&&console.log("Unknown tag: "+e.getUint16(o,!i)),c[a]=d(e,o,t,n,i); }return c}function d(e,t,n,r,i){var o,a,s,u,c,l,f=e.getUint16(t+2,!i),d=e.getUint32(t+4,!i),g=e.getUint32(t+8,!i)+n;switch(f){case 1:case 7:if(1==d){ return e.getUint8(t+8,!i); }for(o=d>4?g:t+8,a=[],u=0;d>u;u++){ a[u]=e.getUint8(o+u); }return a;case 2:return o=d>4?g:t+8,h(e,o,d-1);case 3:if(1==d){ return e.getUint16(t+8,!i); }for(o=d>2?g:t+8,a=[],u=0;d>u;u++){ a[u]=e.getUint16(o+2*u,!i); }return a;case 4:if(1==d){ return e.getUint32(t+8,!i); }for(a=[],u=0;d>u;u++){ a[u]=e.getUint32(g+4*u,!i); }return a;case 5:if(1==d){ return c=e.getUint32(g,!i),l=e.getUint32(g+4,!i),s=new Number(c/l),s.numerator=c,s.denominator=l,s; }for(a=[],u=0;d>u;u++){ c=e.getUint32(g+8*u,!i),l=e.getUint32(g+4+8*u,!i),a[u]=new Number(c/l),a[u].numerator=c,a[u].denominator=l; }return a;case 9:if(1==d){ return e.getInt32(t+8,!i); }for(a=[],u=0;d>u;u++){ a[u]=e.getInt32(g+4*u,!i); }return a;case 10:if(1==d){ return e.getInt32(g,!i)/e.getInt32(g+4,!i); }for(a=[],u=0;d>u;u++){ a[u]=e.getInt32(g+8*u,!i)/e.getInt32(g+4+8*u,!i); }return a}}function h(e,t,n){var r,i="";for(r=t;t+n>r;r++){ i+=String.fromCharCode(e.getUint8(r)); }return i}function g(e,t){if("Exif"!=h(e,t,4)){ return !1; }var n,r,i,o,a,s=t+6;if(18761==e.getUint16(s)){ n=!1; }else{if(19789!=e.getUint16(s)){ return !1; }n=!0;}if(42!=e.getUint16(s+2,!n)){ return !1; }var u=e.getUint32(s+4,!n);if(8>u){ return !1; }if(r=f(e,s,s+u,v,n),r.ExifIFDPointer){o=f(e,s,s+r.ExifIFDPointer,w,n);for(i in o){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":o[i]=b[i][o[i]];break;case"ExifVersion":case"FlashpixVersion":o[i]=String.fromCharCode(o[i][0],o[i][1],o[i][2],o[i][3]);break;case"ComponentsConfiguration":o[i]=b.Components[o[i][0]]+b.Components[o[i][1]]+b.Components[o[i][2]]+b.Components[o[i][3]];}r[i]=o[i];}}if(r.GPSInfoIFDPointer){a=f(e,s,s+r.GPSInfoIFDPointer,y,n);for(i in a){switch(i){case"GPSVersionID":a[i]=a[i][0]+"."+a[i][1]+"."+a[i][2]+"."+a[i][3];}r[i]=a[i];}}return r}var p=!1,m=function(e){return e instanceof m?e:this instanceof m?void(this.EXIFwrapped=e):new m(e)};"undefined"!=typeof e&&e.exports&&(t=e.exports=m),t.EXIF=m;var w=m.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},v=m.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},y=m.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},b=m.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},S={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};m.getData=function(e,t){return (e instanceof Image||e instanceof HTMLImageElement)&&!e.complete?!1:(n(e)?t&&t.call(e):s(e,t),!0)},m.getTag=function(e,t){return n(e)?e.exifdata[t]:void 0},m.getAllTags=function(e){if(!n(e)){ return {}; }var t,r=e.exifdata,i={};for(t in r){ r.hasOwnProperty(t)&&(i[t]=r[t]); }return i},m.pretty=function(e){if(!n(e)){ return ""; }var t,r=e.exifdata,i="";for(t in r){ r.hasOwnProperty(t)&&(i+="object"==typeof r[t]?r[t]instanceof Number?t+" : "+r[t]+" ["+r[t].numerator+"/"+r[t].denominator+"]\r\n":t+" : ["+r[t].length+" values]\r\n":t+" : "+r[t]+"\r\n"); }return i},m.readFromBinaryFile=function(e){return u(e)},r=[],i=function(){return m}.apply(t,r),!(void 0!==i&&(e.exports=i));}).call(this);},function(e,t,n){var r,i;!function(){function n(e){var t=e.naturalWidth,n=e.naturalHeight;if(t*n>1048576){var r=document.createElement("canvas");r.width=r.height=1;var i=r.getContext("2d");return i.drawImage(e,-t+1,0),0===i.getImageData(0,0,1,1).data[3]}return !1}function o(e,t,n){var r=document.createElement("canvas");r.width=1,r.height=n;var i=r.getContext("2d");i.drawImage(e,0,0);for(var o=i.getImageData(0,0,1,n).data,a=0,s=n,u=n;u>a;){var c=o[4*(u-1)+3];0===c?s=u:a=u,u=s+a>>1;}var l=u/n;return 0===l?1:l}function a(e,t,n){var r=document.createElement("canvas");return s(e,r,t,n),r.toDataURL("image/jpeg",t.quality||.8)}function s(e,t,r,i){var a=e.naturalWidth,s=e.naturalHeight,c=r.width,l=r.height,f=t.getContext("2d");f.save(),u(t,f,c,l,r.orientation);var d=n(e);d&&(a/=2,s/=2);var h=1024,g=document.createElement("canvas");g.width=g.height=h;for(var p=g.getContext("2d"),m=i?o(e,a,s):1,w=Math.ceil(h*c/a),v=Math.ceil(h*l/s/m),y=0,b=0;s>y;){for(var S=0,I=0;a>S;){ p.clearRect(0,0,h,h),p.drawImage(e,-S,-y),f.drawImage(g,0,0,h,h,I,b,w,v),S+=h,I+=w; }y+=h,b+=v;}f.restore(),g=p=null;}function u(e,t,n,r,i){switch(i){case 5:case 6:case 7:case 8:e.width=r,e.height=n;break;default:e.width=n,e.height=r;}switch(i){case 2:t.translate(n,0),t.scale(-1,1);break;case 3:t.translate(n,r),t.rotate(Math.PI);break;case 4:t.translate(0,r),t.scale(1,-1);break;case 5:t.rotate(.5*Math.PI),t.scale(1,-1);break;case 6:t.rotate(.5*Math.PI),t.translate(0,-r);break;case 7:t.rotate(.5*Math.PI),t.translate(n,-r),t.scale(-1,1);break;case 8:t.rotate(-.5*Math.PI),t.translate(-n,0);}}function c(e){if(window.Blob&&e instanceof Blob){var t=new Image,n=window.URL&&window.URL.createObjectURL?window.URL:window.webkitURL&&window.webkitURL.createObjectURL?window.webkitURL:null;if(!n){ throw Error("No createObjectURL function found to create blob url"); }t.src=n.createObjectURL(e),this.blob=e,e=t;}if(!e.naturalWidth&&!e.naturalHeight){var r=this;e.onload=function(){var e=r.imageLoadListeners;if(e){r.imageLoadListeners=null;for(var t=0,n=e.length;n>t;t++){ e[t](); }}},this.imageLoadListeners=[];}this.srcImage=e;}c.prototype.render=function(e,t,n){if(this.imageLoadListeners){var r=this;return void this.imageLoadListeners.push(function(){r.render(e,t,n);})}t=t||{};var i=this.srcImage,o=i.src,u=o.length,c=i.naturalWidth,l=i.naturalHeight,f=t.width,d=t.height,h=t.maxWidth,g=t.maxHeight,p=this.blob&&"image/jpeg"===this.blob.type||0===o.indexOf("data:image/jpeg")||o.indexOf(".jpg")===u-4||o.indexOf(".jpeg")===u-5;f&&!d?d=l*f/c<<0:d&&!f?f=c*d/l<<0:(f=c,d=l),h&&f>h&&(f=h,d=l*f/c<<0),g&&d>g&&(d=g,f=c*d/l<<0);var m={width:f,height:d};for(var w in t){ m[w]=t[w]; }var v=e.tagName.toLowerCase();"img"===v?e.src=a(this.srcImage,m,p):"canvas"===v&&s(this.srcImage,e,m,p),"function"==typeof this.onrender&&this.onrender(e),n&&n();},r=[],i=function(){return c}.apply(t,r),!(void 0!==i&&(e.exports=i));}();},function(e,t){function n(e){function t(e){for(var t=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],n=0;64>n;n++){var r=F((t[n]*e+50)/100);1>r?r=1:r>255&&(r=255),D[N[n]]=r;}for(var i=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],o=0;64>o;o++){var a=F((i[o]*e+50)/100);1>a?a=1:a>255&&(a=255),x[N[o]]=a;}for(var s=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],u=0,c=0;8>c;c++){ for(var l=0;8>l;l++){ U[u]=1/(D[N[u]]*s[c]*s[l]*8),C[u]=1/(x[N[u]]*s[c]*s[l]*8),u++; } }}function n(e,t){for(var n=0,r=0,i=new Array,o=1;16>=o;o++){for(var a=1;a<=e[o];a++){ i[t[r]]=[],i[t[r]][0]=n,i[t[r]][1]=o,r++,n++; }n*=2;}return i}function r(){y=n(W,H),b=n(V,X),S=n(z,q),I=n(Q,Y);}function i(){for(var e=1,t=2,n=1;15>=n;n++){for(var r=e;t>r;r++){ A[32767+r]=n,T[32767+r]=[],T[32767+r][1]=n,T[32767+r][0]=r; }for(var i=-(t-1);-e>=i;i++){ A[32767+i]=n,T[32767+i]=[],T[32767+i][1]=n,T[32767+i][0]=t-1+i; }e<<=1,t<<=1;}}function o(){for(var e=0;256>e;e++){ k[e]=19595*e,k[e+256>>0]=38470*e,k[e+512>>0]=7471*e+32768,k[e+768>>0]=-11059*e,k[e+1024>>0]=-21709*e,k[e+1280>>0]=32768*e+8421375,k[e+1536>>0]=-27439*e,k[e+1792>>0]=-5329*e; }}function a(e){for(var t=e[0],n=e[1]-1;n>=0;){ t&1<<n&&(G|=1<<O),n--,O--,0>O&&(255==G?(s(255),s(0)):s(G),O=7,G=0); }}function s(e){M.push(j[e]);}function u(e){s(e>>8&255),s(255&e);}function c(e,t){var n,r,i,o,a,s,u,c,l,f=0;var d=8,h=64;for(l=0;d>l;++l){n=e[f],r=e[f+1],i=e[f+2],o=e[f+3],a=e[f+4],s=e[f+5],u=e[f+6],c=e[f+7];var g=n+c,p=n-c,m=r+u,w=r-u,v=i+s,y=i-s,b=o+a,S=o-a,I=g+b,P=g-b,F=m+v,D=m-v;e[f]=I+F,e[f+4]=I-F;var x=.707106781*(D+P);e[f+2]=P+x,e[f+6]=P-x,I=S+y,F=y+w,D=w+p;var U=.382683433*(I-D),C=.5411961*I+U,T=1.306562965*D+U,A=.707106781*F,R=p+A,M=p-A;e[f+5]=M+C,e[f+3]=M-C,e[f+1]=R+T,e[f+7]=R-T,f+=8;}for(f=0,l=0;d>l;++l){n=e[f],r=e[f+8],i=e[f+16],o=e[f+24],a=e[f+32],s=e[f+40],u=e[f+48],c=e[f+56];var G=n+c,O=n-c,_=r+u,B=r-u,E=i+s,j=i-s,k=o+a,N=o-a,W=G+k,H=G-k,z=_+E,q=_-E;e[f]=W+z,e[f+32]=W-z;var V=.707106781*(q+H);e[f+16]=H+V,e[f+48]=H-V,W=N+j,z=j+B,q=B+O;var X=.382683433*(W-q),Q=.5411961*W+X,Y=1.306562965*q+X,K=.707106781*z,J=O+K,Z=O-K;e[f+40]=Z+Q,e[f+24]=Z-Q,e[f+8]=J+Y,e[f+56]=J-Y,f++;}var $;for(l=0;h>l;++l){ $=e[l]*t[l],L[l]=$>0?$+.5|0:$-.5|0; }return L}function l(){u(65504),u(16),s(74),s(70),s(73),s(70),s(0),s(1),s(1),s(0),u(1),u(1),s(0),s(0);}function f(e,t){u(65472),u(17),s(8),u(t),u(e),s(3),s(1),s(17),s(0),s(2),s(17),s(1),s(3),s(17),s(1);}function d(){u(65499),u(132),s(0);for(var e=0;64>e;e++){ s(D[e]); }s(1);for(var t=0;64>t;t++){ s(x[t]); }}function h(){u(65476),u(418),s(0);for(var e=0;16>e;e++){ s(W[e+1]); }for(var t=0;11>=t;t++){ s(H[t]); }s(16);for(var n=0;16>n;n++){ s(z[n+1]); }for(var r=0;161>=r;r++){ s(q[r]); }s(1);for(var i=0;16>i;i++){ s(V[i+1]); }for(var o=0;11>=o;o++){ s(X[o]); }s(17);for(var a=0;16>a;a++){ s(Q[a+1]); }for(var c=0;161>=c;c++){ s(Y[c]); }}function g(){u(65498),u(12),s(3),s(1),s(0),s(2),s(17),s(3),s(17),s(0),s(63),s(0);}function p(e,t,n,r,i){var o,s=i[0],u=i[240];var l=16,f=63,d=64;for(var h=c(e,t),g=0;d>g;++g){ R[N[g]]=h[g]; }var p=R[0]-n;n=R[0],0==p?a(r[0]):(o=32767+p,a(r[A[o]]),a(T[o]));for(var m=63;m>0&&0==R[m];m--){ }if(0==m){ return a(s),n; }for(var w,v=1;m>=v;){for(var y=v;0==R[v]&&m>=v;++v){ }var b=v-y;if(b>=l){w=b>>4;for(var S=1;w>=S;++S){ a(u); }b=15&b;}o=32767+R[v],a(i[(b<<4)+A[o]]),a(T[o]),v++;}return m!=f&&a(s),n}function m(){for(var e=String.fromCharCode,t=0;256>t;t++){ j[t]=e(t); }}function w(e){if(0>=e&&(e=1),e>100&&(e=100),P!=e){var n=0;n=50>e?Math.floor(5e3/e):Math.floor(200-2*e),t(n),P=e;}}function v(){var t=(new Date).getTime();e||(e=50),m(),r(),i(),o(),w(e);(new Date).getTime()-t;}var y,b,S,I,P,F=(Math.floor),D=new Array(64),x=new Array(64),U=new Array(64),C=new Array(64),T=new Array(65535),A=new Array(65535),L=new Array(64),R=new Array(64),M=[],G=0,O=7,_=new Array(64),B=new Array(64),E=new Array(64),j=new Array(256),k=new Array(2048),N=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],W=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],H=[0,1,2,3,4,5,6,7,8,9,10,11],z=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],q=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],V=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],X=[0,1,2,3,4,5,6,7,8,9,10,11],Q=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],Y=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];this.encode=function(e,t,n){var r=(new Date).getTime();t&&w(t),M=new Array,G=0,O=7,u(65496),l(),d(),f(e.width,e.height),h(),g();var i=0,o=0,s=0;G=0,O=7,this.encode.displayName="_encode_";for(var c,m,v,P,F,D,x,T,A,L=e.data,R=e.width,j=e.height,N=4*R,W=0;j>W;){for(c=0;N>c;){for(F=N*W+c,D=F,x=-1,T=0,A=0;64>A;A++){ T=A>>3,x=4*(7&A),D=F+T*N+x,W+T>=j&&(D-=N*(W+1+T-j)),c+x>=N&&(D-=c+x-N+4),m=L[D++],v=L[D++],P=L[D++],_[A]=(k[m]+k[v+256>>0]+k[P+512>>0]>>16)-128,B[A]=(k[m+768>>0]+k[v+1024>>0]+k[P+1280>>0]>>16)-128,E[A]=(k[m+1280>>0]+k[v+1536>>0]+k[P+1792>>0]>>16)-128; }i=p(_,U,i,y,S),o=p(B,C,o,b,I),s=p(E,C,s,b,I),c+=32;}W+=8;}if(O>=0){var H=[];H[1]=O+1,H[0]=(1<<O+1)-1,a(H);}if(u(65497),n){for(var z=M.length,q=new Uint8Array(z),V=0;z>V;V++){ q[V]=M[V].charCodeAt(); }M=[];(new Date).getTime()-r;return q}var X="data:image/jpeg;base64,"+btoa(M.join(""));M=[];(new Date).getTime()-r;return X},v();}e.exports=n;},function(e,t,n){function r(e,t){var n=this;if(!e){ throw new Error("没有收到图片，可能的解决方案：https://github.com/think2011/localResizeIMG/issues/7"); }t=t||{},n.defaults={width:null,height:null,fieldName:"file",quality:.7},n.file=e;for(var r in t){ t.hasOwnProperty(r)&&(n.defaults[r]=t[r]); }return this.init()}function i(e){var t=null;return t=e?[].filter.call(document.scripts,function(t){return -1!==t.src.indexOf(e)})[0]:document.scripts[document.scripts.length-1],t?t.src.substr(0,t.src.lastIndexOf("/")):null}function o(e){var t;t=e.split(",")[0].indexOf("base64")>=0?atob(e.split(",")[1]):unescape(e.split(",")[1]);for(var n=e.split(",")[0].split(":")[1].split(";")[0],r=new Uint8Array(t.length),i=0;i<t.length;i++){ r[i]=t.charCodeAt(i); }return new s.Blob([r.buffer],{type:n})}n.p=i("lrz")+"/",window.URL=window.URL||window.webkitURL;var a=n(1),s=n(4),u=n(5),c=function(e){var t=/OS (\d)_.* like Mac OS X/g.exec(e),n=/Android (\d.*?);/g.exec(e)||/Android\/(\d.*?) /g.exec(e);return {oldIOS:t?+t.pop()<8:!1,oldAndroid:n?+n.pop().substr(0,3)<4.5:!1,iOS:/\(i[^;]+;( U;)? CPU.+Mac OS X/.test(e),android:/Android/g.test(e),mQQBrowser:/MQQBrowser/g.test(e)}}(navigator.userAgent);r.prototype.init=function(){var e=this,t=e.file,n="string"==typeof t,r=/^data:/.test(t),i=new Image,u=document.createElement("canvas"),c=n?t:URL.createObjectURL(t);if(e.img=i,e.blob=c,e.canvas=u,n?e.fileName=r?"base64.jpg":t.split("/").pop():e.fileName=t.name,!document.createElement("canvas").getContext){ throw new Error("浏览器不支持canvas"); }return new a(function(n,a){i.onerror=function(){var e=new Error("加载图片文件失败");throw a(e),e},i.onload=function(){e._getBase64().then(function(e){if(e.length<10){var t=new Error("生成base64失败");throw a(t),t}return e}).then(function(r){var i=null;"object"==typeof e.file&&r.length>e.file.size?(i=new FormData,t=e.file):(i=new s.FormData,t=o(r)),i.append(e.defaults.fieldName,t,e.fileName.replace(/\..+/g,".jpg")),n({formData:i,fileLen:+t.size,base64:r,base64Len:r.length,origin:e.file,file:t});for(var a in e){ e.hasOwnProperty(a)&&(e[a]=null); }URL.revokeObjectURL(e.blob);});},!r&&(i.crossOrigin="*"),i.src=c;})},r.prototype._getBase64=function(){var e=this,t=e.img,n=e.file,r=e.canvas;return new a(function(i){try{u.getData("object"==typeof n?n:t,function(){e.orientation=u.getTag(this,"Orientation"),e.resize=e._getResize(),e.ctx=r.getContext("2d"),r.width=e.resize.width,r.height=e.resize.height,e.ctx.fillStyle="#fff",e.ctx.fillRect(0,0,r.width,r.height),c.oldIOS?e._createBase64ForOldIOS().then(i):e._createBase64().then(i);});}catch(o){throw new Error(o)}})},r.prototype._createBase64ForOldIOS=function(){var e=this,t=e.img,r=e.canvas,i=e.defaults,o=e.orientation;return new a(function(e){!function(){var a=[n(6)];(function(n){var a=new n(t);"5678".indexOf(o)>-1?a.render(r,{width:r.height,height:r.width,orientation:o}):a.render(r,{width:r.width,height:r.height,orientation:o}),e(r.toDataURL("image/jpeg",i.quality));}).apply(null,a);}();})},r.prototype._createBase64=function(){var e=this,t=e.resize,r=e.img,i=e.canvas,o=e.ctx,s=e.defaults,u=e.orientation;switch(u){case 3:o.rotate(180*Math.PI/180),o.drawImage(r,-t.width,-t.height,t.width,t.height);break;case 6:o.rotate(90*Math.PI/180),o.drawImage(r,0,-t.width,t.height,t.width);break;case 8:o.rotate(270*Math.PI/180),o.drawImage(r,-t.height,0,t.height,t.width);break;case 2:o.translate(t.width,0),o.scale(-1,1),o.drawImage(r,0,0,t.width,t.height);break;case 4:o.translate(t.width,0),o.scale(-1,1),o.rotate(180*Math.PI/180),o.drawImage(r,-t.width,-t.height,t.width,t.height);break;case 5:o.translate(t.width,0),o.scale(-1,1),o.rotate(90*Math.PI/180),o.drawImage(r,0,-t.width,t.height,t.width);break;case 7:o.translate(t.width,0),o.scale(-1,1),o.rotate(270*Math.PI/180),o.drawImage(r,-t.height,0,t.height,t.width);break;default:o.drawImage(r,0,0,t.width,t.height);}return new a(function(e){c.oldAndroid||c.mQQBrowser||!navigator.userAgent?!function(){var t=[n(7)];(function(t){var n=new t,r=o.getImageData(0,0,i.width,i.height);e(n.encode(r,100*s.quality));}).apply(null,t);}():e(i.toDataURL("image/jpeg",s.quality));})},r.prototype._getResize=function(){var e=this,t=e.img,n=e.defaults,r=n.width,i=n.height,o=e.orientation,a={width:t.width,height:t.height};if("5678".indexOf(o)>-1&&(a.width=t.height,a.height=t.width),a.width<r||a.height<i){ return a; }var s=a.width/a.height;for(r&&i?s>=r/i?a.width>r&&(a.width=r,a.height=Math.ceil(r/s)):a.height>i&&(a.height=i,a.width=Math.ceil(i*s)):r?r<a.width&&(a.width=r,a.height=Math.ceil(r/s)):i&&i<a.height&&(a.width=Math.ceil(i*s),a.height=i);a.width>=3264||a.height>=2448;){ a.width*=.8,a.height*=.8; }return a},window.lrz=function(e,t){return new r(e,t)},window.lrz.version="4.9.40",
    e.exports=window.lrz;}])});

    });

    var template = "<div> <div v-show=\"upload.status=='ready'\"> <input type=\"text\" v-model=\"imageUrl\" maxlength=\"255\" :placeholder=\"$parent.locale['please enter a url']\"> <button type=\"button\" @click=\"insertImageUrl\">{{$parent.locale.save}}</button> <input type=\"file\" ref=\"file\" style=\"display: none !important;\" @change=\"process\" accept=\"image/png,image/jpeg,image/gif,image/jpg\"> <button type=\"button\" @click=\"pick\">{{$parent.locale.upload}}</button> </div> <div v-if=\"upload.status=='progress'\"> {{$parent.locale.progress}}:{{upload.progressComputable ? $parent.locale.unknown : upload.complete}} </div> <div v-if=\"upload.status=='success'\"> {{$parent.locale[\"please wait\"]}}... </div> <div v-if=\"upload.status=='error'\"> {{$parent.locale.error}}:{{upload.errorMsg}} <button type=\"button\" @click=\"reset\">{{$parent.locale.reset}}</button> </div> <div v-if=\"upload.status=='abort'\"> {{$parent.locale.upload}}&nbsp;{{$parent.locale.abort}}, <button type=\"button\" @click=\"reset\">{{$parent.locale.reset}}</button> </div> </div> ";

    /**
     * Created by peak on 2017/2/14.
     */
    var Command = {
        JUSTIFY_LEFT: 'justifyLeft',
        JUSTIFY_CENTER: 'justifyCenter',
        JUSTIFY_RIGHT: 'justifyRight',
        FORE_COLOR: 'foreColor',
        BACK_COLOR: 'backColor',
        REMOVE_FORMAT: 'removeFormat',
        FONT_NAME: 'fontName',
        FONT_SIZE: 'fontSize',
        FORMAT_BLOCK: 'formatBlock',
        LINE_HEIGHT: 'lineHeight',
        INSERT_HORIZONTAL_RULE: 'insertHorizontalRule',
        INSERT_IMAGE: 'insertImage',
        INSERT_VIDEO: 'insertHTML',
        CREATE_LINK: 'createLink',
        INSERT_ORDERED_LIST: 'insertOrderedList',
        INSERT_UNORDERED_LIST: 'insertUnorderedList',
        INSERT_HTML: 'insertHTML',
        BOLD: 'bold',
        ITALIC: 'italic',
        UNDERLINE: 'underline',
        STRIKE_THROUGH: 'strikeThrough',
        SUBSCRIPT: 'subscript',
        SUPERSCRIPT: 'superscript',
        UNDO: 'undo',
        UNLINK: 'unlink'
    };

    /**
     * Created by peak on 2017/2/10.
     */
    var dashboard = {
        template: template,
        data: function data() {
            return {
                imageUrl: '',
                upload: {
                    status: 'ready', // progress,success,error,abort
                    errorMsg: null,
                    progressComputable: false,
                    complete: 0
                }
            }
        },
        methods: {
            reset: function reset(){
                this.upload.status = 'ready';
            },
            insertImageUrl: function insertImageUrl() {
                if (!this.imageUrl) {
                    return
                }
                this.$parent.execCommand(Command.INSERT_IMAGE, this.imageUrl);
                this.imageUrl = null;
            },
            pick: function pick() {
                this.$refs.file.click();
            },
            setUploadError: function setUploadError(msg){
                this.upload.status = 'error';
                this.upload.errorMsg = msg;
            },
            process: function process() {
                var this$1 = this;

                var component = this;
                var config = this.$options.module.config;
                // compatibility with older format
                // {
                //     server: null,
                //     fieldName: 'image',
                //     compress: true,
                //     width: 1600,
                //     height: 1600,
                //     quality: 80
                // }
                // ----------- divider ----------------
                // {
                //     upload: {
                //         url: null,
                //         headers: {},
                //         params: {},
                //         fieldName: {}
                //     },
                //     compress: {
                //         width: 1600,
                //         height: 1600,
                //         quality: 80
                //     },
                // }
                if (!config.upload && typeof config.server === 'string') {
                    config.upload = {url: config.server};
                }
                if (config.upload && !config.upload.url) {
                    config.upload = null;
                }
                if (config.upload && typeof config.fieldName === 'string') {
                    config.upload.fieldName = config.fieldName;
                }

                if (typeof config.compress === 'boolean') {
                    config.compress = {
                        width: config.width,
                        height: config.height,
                        quality: config.quality
                    };
                }

                var file = this.$refs.file.files[0];
                if (file.size > config.sizeLimit) {
                    this.setUploadError(this.$parent.locale['exceed size limit']);
                    return
                }
                this.$refs.file.value = null;

                if (config.compress) {
                    config.compress.fieldName = config.upload && config.upload.fieldName
                        ? config.upload.fieldName : 'image';
                    lrz_all_bundle(file, config.compress).then(function (rst) {
                        if (config.upload) {
                            component.uploadToServer(rst.file);
                        } else {
                            component.insertBase64(rst.base64);
                        }
                    }).catch(function (err) {
                        this$1.setUploadError(err.toString());
                    });
                    return
                }
                // 不需要压缩
                // base64
                if (!config.upload) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        component.insertBase64(e.target.result);
                    };
                    reader.readAsDataURL(file);
                    return
                }
                // 上传服务器
                component.uploadToServer(file);
            },
            insertBase64: function insertBase64(data) {
                this.$parent.execCommand(Command.INSERT_IMAGE, data);
            },
            uploadToServer: function uploadToServer(file) {
                var this$1 = this;

                var config = this.$options.module.config;

                var formData = new FormData();
                formData.append(config.upload.fieldName || 'image', file);

                if (typeof config.upload.params === 'object') {
                    Object.keys(config.upload.params).forEach(function (key) {
                        var value = config.upload.params[key];
                        if (Array.isArray(value)) {
                            value.forEach(function (v) {
                                formData.append(key, v);
                            });
                        } else {
                            formData.append(key, value);
                        }
                    });
                }

                var xhr = new XMLHttpRequest();

                xhr.onprogress = function (e) {
                    this$1.upload.status = 'progress';
                    if (e.lengthComputable) {
                        this$1.upload.progressComputable = true;
                        var percentComplete = e.loaded / e.total;
                        this$1.upload.complete = (percentComplete * 100).toFixed(2);
                    } else {
                        this$1.upload.progressComputable = false;
                    }
                };

                xhr.onload = function () {
                    if (xhr.status >= 300) {
                        this$1.setUploadError(("request error,code " + (xhr.status)));
                        return
                    }

                    try {
                        var url = config.uploadHandler(xhr.responseText);
                        if (url) {
                            this$1.$parent.execCommand(Command.INSERT_IMAGE, url);
                        }
                    } catch (err) {
                        this$1.setUploadError(err.toString());
                    } finally {
                        this$1.upload.status = 'ready';
                    }
                };

                xhr.onerror = function () {
                    // find network info in brower tools
                    this$1.setUploadError('request error');
                };

                xhr.onabort = function () {
                    this$1.upload.status = 'abort';
                };

                xhr.open('POST', config.upload.url);
                if (typeof config.upload.headers === 'object') {
                    Object.keys(config.upload.headers).forEach(function (k) {
                        xhr.setRequestHeader(k, config.upload.headers[k]);
                    });
                }
                xhr.send(formData);
            }
        }
    };

    /**
     * insert image
     * Created by peak on 16/8/18.
     */
    var image = {
        name: 'image',
        icon: 'fa fa-file-image-o',
        i18n: 'image',
        config: {
            // server: null,
            // fieldName: 'image',
            // compress: true,
            // width: 1600,
            // height: 1600,
            // quality: 80,
            sizeLimit: 512 * 1024,// 512k
            // upload: {
            //     url: null,
            //     headers: {},
            //     params: {},
            //     fieldName: {}
            // },
            compress: {
                width: 1600,
                height: 1600,
                quality: 80
            },
            uploadHandler: function uploadHandler(responseText){
                var json = JSON.parse(responseText);
                return json.ok ? json.data : null
            }
        },
        dashboard: dashboard
    };

    var template$1 = "<form @submit.prevent=\"createLink\"> <input type=\"text\" :placeholder=\"$parent.locale['please enter a url']\" v-model=\"url\" maxlength=\"1024\"> <button type=\"submit\">{{$parent.locale[\"create link\"]}}</button> </form>";

    var dashboard$1 = {
        template: template$1,
        data: function data(){
            return {url: null}
        },
        methods: {
            createLink: function createLink(){
                if (!this.url) {
                    return
                }
                this.$parent.execCommand('createLink', this.url);
                this.url = null;
            }
        }
    };

    /**
     * create link
     * Created by peak on 16/8/18.
     */

    var link = {
        name: 'link',
        icon: 'fa fa-chain',
        i18n: 'link',
        dashboard: dashboard$1
    };

    /**
     * unlink
     * Created by peak on 16/8/18.
     */
    var unlink = {
        name: 'unlink',
        icon: 'fa fa-chain-broken',
        i18n: 'unlink',
        handler: function handler(editor) {
            editor.execCommand('unlink');
        }
    };

    var template$2 = "<div> <div v-show=\"upload.status=='ready'\"> <input type=\"text\" v-model=\"imageUrl\" maxlength=\"255\" :placeholder=\"$parent.locale['please enter a url']\"> <button type=\"button\" @click=\"insertImageUrl\">{{$parent.locale.save}}</button> <input type=\"file\" ref=\"file\" style=\"display: none !important;\" @change=\"process\" accept=\"video/*\" capture=\"camcorder\"> <button type=\"button\" @click=\"pick\">{{$parent.locale.upload}}</button> </div> <div v-if=\"upload.status=='progress'\"> {{$parent.locale.progress}}:{{upload.progressComputable ? $parent.locale.unknown : upload.complete}} </div> <div v-if=\"upload.status=='success'\"> {{$parent.locale[\"please wait\"]}}... </div> <div v-if=\"upload.status=='error'\"> {{$parent.locale.error}}:{{upload.errorMsg}} <button type=\"button\" @click=\"reset\">{{$parent.locale.reset}}</button> </div> <div v-if=\"upload.status=='abort'\"> {{$parent.locale.upload}}&nbsp;{{$parent.locale.abort}}, <button type=\"button\" @click=\"reset\">{{$parent.locale.reset}}</button> </div> </div> ";

    /**
     * Created by peak on 2017/2/10.
     */
    var dashboard$2 = {
        template: template$2,
        data: function data() {
            return {
                imageUrl: '',
                upload: {
                    status: 'ready', // progress,success,error,abort
                    errorMsg: null,
                    progressComputable: false,
                    complete: 0
                }
            }
        },
        methods: {
            reset: function reset(){
                this.upload.status = 'ready';
            },
            insertImageUrl: function insertImageUrl() {
                if (!this.imageUrl) {
                    return
                }
                this.$parent.execCommand(Command.INSERT_VIDEO, this.imageUrl);
                this.imageUrl = null;
            },
            pick: function pick() {
                this.$refs.file.click();
            },
            setUploadError: function setUploadError(msg){
                this.upload.status = 'error';
                this.upload.errorMsg = msg;
            },
            process: function process() {
                var component = this;
                var config = this.$options.module.config;
                // compatibility with older format
                // {
                //     server: null,
                //     fieldName: 'image',
                //     compress: true,
                //     width: 1600,
                //     height: 1600,
                //     quality: 80
                // }
                // ----------- divider ----------------
                // {
                //     upload: {
                //         url: null,
                //         headers: {},
                //         params: {},
                //         fieldName: {}
                //     },
                //     compress: {
                //         width: 1600,
                //         height: 1600,
                //         quality: 80
                //     },
                // }
                console.log(config);
                if (!config.upload && typeof config.server === 'string') {
                    config.upload = {url: config.server};
                    console.log(1);
                }
                if (config.upload && !config.upload.url) {
                    config.upload = null;
                    console.log(2);
                }
                if (config.upload && typeof config.fieldName === 'string') {
                    config.upload.fieldName = config.fieldName;
                    console.log(3);
                }

                if (typeof config.compress === 'boolean') {
                    console.log(4);
                    config.compress = {
                        width: config.width,
                        height: config.height,
                        quality: config.quality
                    };
                }

                var file = this.$refs.file.files[0];
                if (file.size > config.sizeLimit) {
                    console.log(5);
                    this.setUploadError(this.$parent.locale['exceed size limit']);
                    return
                }
                this.$refs.file.value = null;

                if (config.compress) {
                    console.log(6);
                    config.compress.fieldName = config.upload && config.upload.fieldName
                        ? config.upload.fieldName : 'video';
                    // lrz(file, config.compress).then((rst) => {
                    //     if (config.upload) {
                    //         component.uploadToServer(rst.file)
                    //     } else {
                    //         component.insertBase64(rst.base64)
                    //     }
                    // }).catch((err) => {
                    //     console.log('erro')
                    //     this.setUploadError(err.toString())
                    // })
                    // return
                }
                // 不需要压缩
                // base64
                if (!config.upload) {
                    console.log(7);
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        component.insertBase64(e.target.result);
                    };
                    reader.readAsDataURL(file);
                    return
                }
                // 上传服务器
                // component.uploadToServer(file)
            },
            insertBase64: function insertBase64(data) {
                this.$parent.execCommand(Command.INSERT_VIDEO, data);
            },
            uploadToServer: function uploadToServer(file) {
                var this$1 = this;

                var config = this.$options.module.config;

                var formData = new FormData();
                formData.append(config.upload.fieldName || 'video', file);

                if (typeof config.upload.params === 'object') {
                    Object.keys(config.upload.params).forEach(function (key) {
                        var value = config.upload.params[key];
                        if (Array.isArray(value)) {
                            value.forEach(function (v) {
                                formData.append(key, v);
                            });
                        } else {
                            formData.append(key, value);
                        }
                    });
                }

                var xhr = new XMLHttpRequest();

                xhr.onprogress = function (e) {
                    this$1.upload.status = 'progress';
                    if (e.lengthComputable) {
                        this$1.upload.progressComputable = true;
                        var percentComplete = e.loaded / e.total;
                        this$1.upload.complete = (percentComplete * 100).toFixed(2);
                    } else {
                        this$1.upload.progressComputable = false;
                    }
                };

                xhr.onload = function () {
                    if (xhr.status >= 300) {
                        this$1.setUploadError(("request error,code " + (xhr.status)));
                        return
                    }

                    try {
                        var url = config.uploadHandler(xhr.responseText);
                        if (url) {
                            this$1.$parent.execCommand(Command.INSERT_IMAGE, url);
                        }
                    } catch (err) {
                        this$1.setUploadError(err.toString());
                    } finally {
                        this$1.upload.status = 'ready';
                    }
                };

                xhr.onerror = function () {
                    // find network info in brower tools
                    this$1.setUploadError('request error');
                };

                xhr.onabort = function () {
                    this$1.upload.status = 'abort';
                };

                xhr.open('POST', config.upload.url);
                if (typeof config.upload.headers === 'object') {
                    Object.keys(config.upload.headers).forEach(function (k) {
                        xhr.setRequestHeader(k, config.upload.headers[k]);
                    });
                }
                xhr.send(formData);
            }
        }
    };

    /**
     * insert image
     * Created by peak on 16/8/18.
     */
    var video = {
        name: 'video',
        icon: 'fa fa-file-video-o',
        i18n: 'video',
        config: {
            // server: null,
            // fieldName: 'image',
            // compress: true,
            // width: 1600,
            // height: 1600,
            // quality: 80,
            sizeLimit: 10000 * 1024,// 10m
            // upload: {
            //     url: null,
            //     headers: {},
            //     params: {},
            //     fieldName: {}
            // },
            compress: {
                width: 1600,
                height: 1600,
                quality: 80
            },
            uploadHandler: function uploadHandler(responseText){
                var json = JSON.parse(responseText);
                return json.ok ? json.data : null
            }
        },
        dashboard: dashboard$2
    };

    // import align from './align/index'
    /**
     * build-in moduls
     * Created by peak on 2016/11/1.
     */
    var buildInModules = [
        // text,
        // color,
        // font,
        // align,
        // list,
        link,
        unlink,
        // table,
        image,
        video,
        // hr,
        eraser ];

    var decode = {
    	"0": 65533,
    	"128": 8364,
    	"130": 8218,
    	"131": 402,
    	"132": 8222,
    	"133": 8230,
    	"134": 8224,
    	"135": 8225,
    	"136": 710,
    	"137": 8240,
    	"138": 352,
    	"139": 8249,
    	"140": 338,
    	"142": 381,
    	"145": 8216,
    	"146": 8217,
    	"147": 8220,
    	"148": 8221,
    	"149": 8226,
    	"150": 8211,
    	"151": 8212,
    	"152": 732,
    	"153": 8482,
    	"154": 353,
    	"155": 8250,
    	"156": 339,
    	"158": 382,
    	"159": 376
    };

    var decode$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        'default': decode
    });

    var decodeMap = getCjsExportFromNamespace(decode$1);

    var decode_codepoint = decodeCodePoint;

    // modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119
    function decodeCodePoint(codePoint) {
        if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
            return "\uFFFD";
        }

        if (codePoint in decodeMap) {
            codePoint = decodeMap[codePoint];
        }

        var output = "";

        if (codePoint > 0xffff) {
            codePoint -= 0x10000;
            output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
            codePoint = 0xdc00 | (codePoint & 0x3ff);
        }

        output += String.fromCharCode(codePoint);
        return output;
    }

    const Aacute = "Á";
    const aacute = "á";
    const Abreve = "Ă";
    const abreve = "ă";
    const ac = "∾";
    const acd = "∿";
    const acE = "∾̳";
    const Acirc = "Â";
    const acirc = "â";
    const acute = "´";
    const Acy = "А";
    const acy = "а";
    const AElig = "Æ";
    const aelig = "æ";
    const af = "⁡";
    const Afr = "𝔄";
    const afr = "𝔞";
    const Agrave = "À";
    const agrave = "à";
    const alefsym = "ℵ";
    const aleph = "ℵ";
    const Alpha = "Α";
    const alpha = "α";
    const Amacr = "Ā";
    const amacr = "ā";
    const amalg = "⨿";
    const amp = "&";
    const AMP = "&";
    const andand = "⩕";
    const And = "⩓";
    const and = "∧";
    const andd = "⩜";
    const andslope = "⩘";
    const andv = "⩚";
    const ang = "∠";
    const ange = "⦤";
    const angle = "∠";
    const angmsdaa = "⦨";
    const angmsdab = "⦩";
    const angmsdac = "⦪";
    const angmsdad = "⦫";
    const angmsdae = "⦬";
    const angmsdaf = "⦭";
    const angmsdag = "⦮";
    const angmsdah = "⦯";
    const angmsd = "∡";
    const angrt = "∟";
    const angrtvb = "⊾";
    const angrtvbd = "⦝";
    const angsph = "∢";
    const angst = "Å";
    const angzarr = "⍼";
    const Aogon = "Ą";
    const aogon = "ą";
    const Aopf = "𝔸";
    const aopf = "𝕒";
    const apacir = "⩯";
    const ap = "≈";
    const apE = "⩰";
    const ape = "≊";
    const apid = "≋";
    const apos = "'";
    const ApplyFunction = "⁡";
    const approx = "≈";
    const approxeq = "≊";
    const Aring = "Å";
    const aring = "å";
    const Ascr = "𝒜";
    const ascr = "𝒶";
    const Assign = "≔";
    const ast = "*";
    const asymp = "≈";
    const asympeq = "≍";
    const Atilde = "Ã";
    const atilde = "ã";
    const Auml = "Ä";
    const auml = "ä";
    const awconint = "∳";
    const awint = "⨑";
    const backcong = "≌";
    const backepsilon = "϶";
    const backprime = "‵";
    const backsim = "∽";
    const backsimeq = "⋍";
    const Backslash = "∖";
    const Barv = "⫧";
    const barvee = "⊽";
    const barwed = "⌅";
    const Barwed = "⌆";
    const barwedge = "⌅";
    const bbrk = "⎵";
    const bbrktbrk = "⎶";
    const bcong = "≌";
    const Bcy = "Б";
    const bcy = "б";
    const bdquo = "„";
    const becaus = "∵";
    const because = "∵";
    const Because = "∵";
    const bemptyv = "⦰";
    const bepsi = "϶";
    const bernou = "ℬ";
    const Bernoullis = "ℬ";
    const Beta = "Β";
    const beta = "β";
    const beth = "ℶ";
    const between = "≬";
    const Bfr = "𝔅";
    const bfr = "𝔟";
    const bigcap = "⋂";
    const bigcirc = "◯";
    const bigcup = "⋃";
    const bigodot = "⨀";
    const bigoplus = "⨁";
    const bigotimes = "⨂";
    const bigsqcup = "⨆";
    const bigstar = "★";
    const bigtriangledown = "▽";
    const bigtriangleup = "△";
    const biguplus = "⨄";
    const bigvee = "⋁";
    const bigwedge = "⋀";
    const bkarow = "⤍";
    const blacklozenge = "⧫";
    const blacksquare = "▪";
    const blacktriangle = "▴";
    const blacktriangledown = "▾";
    const blacktriangleleft = "◂";
    const blacktriangleright = "▸";
    const blank = "␣";
    const blk12 = "▒";
    const blk14 = "░";
    const blk34 = "▓";
    const block = "█";
    const bne = "=⃥";
    const bnequiv = "≡⃥";
    const bNot = "⫭";
    const bnot = "⌐";
    const Bopf = "𝔹";
    const bopf = "𝕓";
    const bot = "⊥";
    const bottom = "⊥";
    const bowtie = "⋈";
    const boxbox = "⧉";
    const boxdl = "┐";
    const boxdL = "╕";
    const boxDl = "╖";
    const boxDL = "╗";
    const boxdr = "┌";
    const boxdR = "╒";
    const boxDr = "╓";
    const boxDR = "╔";
    const boxh = "─";
    const boxH = "═";
    const boxhd = "┬";
    const boxHd = "╤";
    const boxhD = "╥";
    const boxHD = "╦";
    const boxhu = "┴";
    const boxHu = "╧";
    const boxhU = "╨";
    const boxHU = "╩";
    const boxminus = "⊟";
    const boxplus = "⊞";
    const boxtimes = "⊠";
    const boxul = "┘";
    const boxuL = "╛";
    const boxUl = "╜";
    const boxUL = "╝";
    const boxur = "└";
    const boxuR = "╘";
    const boxUr = "╙";
    const boxUR = "╚";
    const boxv = "│";
    const boxV = "║";
    const boxvh = "┼";
    const boxvH = "╪";
    const boxVh = "╫";
    const boxVH = "╬";
    const boxvl = "┤";
    const boxvL = "╡";
    const boxVl = "╢";
    const boxVL = "╣";
    const boxvr = "├";
    const boxvR = "╞";
    const boxVr = "╟";
    const boxVR = "╠";
    const bprime = "‵";
    const breve = "˘";
    const Breve = "˘";
    const brvbar = "¦";
    const bscr = "𝒷";
    const Bscr = "ℬ";
    const bsemi = "⁏";
    const bsim = "∽";
    const bsime = "⋍";
    const bsolb = "⧅";
    const bsol = "\\";
    const bsolhsub = "⟈";
    const bull = "•";
    const bullet = "•";
    const bump = "≎";
    const bumpE = "⪮";
    const bumpe = "≏";
    const Bumpeq = "≎";
    const bumpeq = "≏";
    const Cacute = "Ć";
    const cacute = "ć";
    const capand = "⩄";
    const capbrcup = "⩉";
    const capcap = "⩋";
    const cap = "∩";
    const Cap = "⋒";
    const capcup = "⩇";
    const capdot = "⩀";
    const CapitalDifferentialD = "ⅅ";
    const caps = "∩︀";
    const caret = "⁁";
    const caron = "ˇ";
    const Cayleys = "ℭ";
    const ccaps = "⩍";
    const Ccaron = "Č";
    const ccaron = "č";
    const Ccedil = "Ç";
    const ccedil = "ç";
    const Ccirc = "Ĉ";
    const ccirc = "ĉ";
    const Cconint = "∰";
    const ccups = "⩌";
    const ccupssm = "⩐";
    const Cdot = "Ċ";
    const cdot = "ċ";
    const cedil = "¸";
    const Cedilla = "¸";
    const cemptyv = "⦲";
    const cent = "¢";
    const centerdot = "·";
    const CenterDot = "·";
    const cfr = "𝔠";
    const Cfr = "ℭ";
    const CHcy = "Ч";
    const chcy = "ч";
    const check = "✓";
    const checkmark = "✓";
    const Chi = "Χ";
    const chi = "χ";
    const circ = "ˆ";
    const circeq = "≗";
    const circlearrowleft = "↺";
    const circlearrowright = "↻";
    const circledast = "⊛";
    const circledcirc = "⊚";
    const circleddash = "⊝";
    const CircleDot = "⊙";
    const circledR = "®";
    const circledS = "Ⓢ";
    const CircleMinus = "⊖";
    const CirclePlus = "⊕";
    const CircleTimes = "⊗";
    const cir = "○";
    const cirE = "⧃";
    const cire = "≗";
    const cirfnint = "⨐";
    const cirmid = "⫯";
    const cirscir = "⧂";
    const ClockwiseContourIntegral = "∲";
    const CloseCurlyDoubleQuote = "”";
    const CloseCurlyQuote = "’";
    const clubs = "♣";
    const clubsuit = "♣";
    const colon = ":";
    const Colon = "∷";
    const Colone = "⩴";
    const colone = "≔";
    const coloneq = "≔";
    const comma = ",";
    const commat = "@";
    const comp = "∁";
    const compfn = "∘";
    const complement = "∁";
    const complexes = "ℂ";
    const cong = "≅";
    const congdot = "⩭";
    const Congruent = "≡";
    const conint = "∮";
    const Conint = "∯";
    const ContourIntegral = "∮";
    const copf = "𝕔";
    const Copf = "ℂ";
    const coprod = "∐";
    const Coproduct = "∐";
    const copy = "©";
    const COPY = "©";
    const copysr = "℗";
    const CounterClockwiseContourIntegral = "∳";
    const crarr = "↵";
    const cross = "✗";
    const Cross = "⨯";
    const Cscr = "𝒞";
    const cscr = "𝒸";
    const csub = "⫏";
    const csube = "⫑";
    const csup = "⫐";
    const csupe = "⫒";
    const ctdot = "⋯";
    const cudarrl = "⤸";
    const cudarrr = "⤵";
    const cuepr = "⋞";
    const cuesc = "⋟";
    const cularr = "↶";
    const cularrp = "⤽";
    const cupbrcap = "⩈";
    const cupcap = "⩆";
    const CupCap = "≍";
    const cup = "∪";
    const Cup = "⋓";
    const cupcup = "⩊";
    const cupdot = "⊍";
    const cupor = "⩅";
    const cups = "∪︀";
    const curarr = "↷";
    const curarrm = "⤼";
    const curlyeqprec = "⋞";
    const curlyeqsucc = "⋟";
    const curlyvee = "⋎";
    const curlywedge = "⋏";
    const curren = "¤";
    const curvearrowleft = "↶";
    const curvearrowright = "↷";
    const cuvee = "⋎";
    const cuwed = "⋏";
    const cwconint = "∲";
    const cwint = "∱";
    const cylcty = "⌭";
    const dagger = "†";
    const Dagger = "‡";
    const daleth = "ℸ";
    const darr = "↓";
    const Darr = "↡";
    const dArr = "⇓";
    const dash = "‐";
    const Dashv = "⫤";
    const dashv = "⊣";
    const dbkarow = "⤏";
    const dblac = "˝";
    const Dcaron = "Ď";
    const dcaron = "ď";
    const Dcy = "Д";
    const dcy = "д";
    const ddagger = "‡";
    const ddarr = "⇊";
    const DD = "ⅅ";
    const dd = "ⅆ";
    const DDotrahd = "⤑";
    const ddotseq = "⩷";
    const deg = "°";
    const Del = "∇";
    const Delta = "Δ";
    const delta = "δ";
    const demptyv = "⦱";
    const dfisht = "⥿";
    const Dfr = "𝔇";
    const dfr = "𝔡";
    const dHar = "⥥";
    const dharl = "⇃";
    const dharr = "⇂";
    const DiacriticalAcute = "´";
    const DiacriticalDot = "˙";
    const DiacriticalDoubleAcute = "˝";
    const DiacriticalGrave = "`";
    const DiacriticalTilde = "˜";
    const diam = "⋄";
    const diamond = "⋄";
    const Diamond = "⋄";
    const diamondsuit = "♦";
    const diams = "♦";
    const die = "¨";
    const DifferentialD = "ⅆ";
    const digamma = "ϝ";
    const disin = "⋲";
    const div = "÷";
    const divide = "÷";
    const divideontimes = "⋇";
    const divonx = "⋇";
    const DJcy = "Ђ";
    const djcy = "ђ";
    const dlcorn = "⌞";
    const dlcrop = "⌍";
    const dollar = "$";
    const Dopf = "𝔻";
    const dopf = "𝕕";
    const Dot = "¨";
    const dot = "˙";
    const DotDot = "⃜";
    const doteq = "≐";
    const doteqdot = "≑";
    const DotEqual = "≐";
    const dotminus = "∸";
    const dotplus = "∔";
    const dotsquare = "⊡";
    const doublebarwedge = "⌆";
    const DoubleContourIntegral = "∯";
    const DoubleDot = "¨";
    const DoubleDownArrow = "⇓";
    const DoubleLeftArrow = "⇐";
    const DoubleLeftRightArrow = "⇔";
    const DoubleLeftTee = "⫤";
    const DoubleLongLeftArrow = "⟸";
    const DoubleLongLeftRightArrow = "⟺";
    const DoubleLongRightArrow = "⟹";
    const DoubleRightArrow = "⇒";
    const DoubleRightTee = "⊨";
    const DoubleUpArrow = "⇑";
    const DoubleUpDownArrow = "⇕";
    const DoubleVerticalBar = "∥";
    const DownArrowBar = "⤓";
    const downarrow = "↓";
    const DownArrow = "↓";
    const Downarrow = "⇓";
    const DownArrowUpArrow = "⇵";
    const DownBreve = "̑";
    const downdownarrows = "⇊";
    const downharpoonleft = "⇃";
    const downharpoonright = "⇂";
    const DownLeftRightVector = "⥐";
    const DownLeftTeeVector = "⥞";
    const DownLeftVectorBar = "⥖";
    const DownLeftVector = "↽";
    const DownRightTeeVector = "⥟";
    const DownRightVectorBar = "⥗";
    const DownRightVector = "⇁";
    const DownTeeArrow = "↧";
    const DownTee = "⊤";
    const drbkarow = "⤐";
    const drcorn = "⌟";
    const drcrop = "⌌";
    const Dscr = "𝒟";
    const dscr = "𝒹";
    const DScy = "Ѕ";
    const dscy = "ѕ";
    const dsol = "⧶";
    const Dstrok = "Đ";
    const dstrok = "đ";
    const dtdot = "⋱";
    const dtri = "▿";
    const dtrif = "▾";
    const duarr = "⇵";
    const duhar = "⥯";
    const dwangle = "⦦";
    const DZcy = "Џ";
    const dzcy = "џ";
    const dzigrarr = "⟿";
    const Eacute = "É";
    const eacute = "é";
    const easter = "⩮";
    const Ecaron = "Ě";
    const ecaron = "ě";
    const Ecirc = "Ê";
    const ecirc = "ê";
    const ecir = "≖";
    const ecolon = "≕";
    const Ecy = "Э";
    const ecy = "э";
    const eDDot = "⩷";
    const Edot = "Ė";
    const edot = "ė";
    const eDot = "≑";
    const ee = "ⅇ";
    const efDot = "≒";
    const Efr = "𝔈";
    const efr = "𝔢";
    const eg = "⪚";
    const Egrave = "È";
    const egrave = "è";
    const egs = "⪖";
    const egsdot = "⪘";
    const el = "⪙";
    const Element = "∈";
    const elinters = "⏧";
    const ell = "ℓ";
    const els = "⪕";
    const elsdot = "⪗";
    const Emacr = "Ē";
    const emacr = "ē";
    const empty = "∅";
    const emptyset = "∅";
    const EmptySmallSquare = "◻";
    const emptyv = "∅";
    const EmptyVerySmallSquare = "▫";
    const emsp13 = " ";
    const emsp14 = " ";
    const emsp = " ";
    const ENG = "Ŋ";
    const eng = "ŋ";
    const ensp = " ";
    const Eogon = "Ę";
    const eogon = "ę";
    const Eopf = "𝔼";
    const eopf = "𝕖";
    const epar = "⋕";
    const eparsl = "⧣";
    const eplus = "⩱";
    const epsi = "ε";
    const Epsilon = "Ε";
    const epsilon = "ε";
    const epsiv = "ϵ";
    const eqcirc = "≖";
    const eqcolon = "≕";
    const eqsim = "≂";
    const eqslantgtr = "⪖";
    const eqslantless = "⪕";
    const Equal = "⩵";
    const equals = "=";
    const EqualTilde = "≂";
    const equest = "≟";
    const Equilibrium = "⇌";
    const equiv = "≡";
    const equivDD = "⩸";
    const eqvparsl = "⧥";
    const erarr = "⥱";
    const erDot = "≓";
    const escr = "ℯ";
    const Escr = "ℰ";
    const esdot = "≐";
    const Esim = "⩳";
    const esim = "≂";
    const Eta = "Η";
    const eta = "η";
    const ETH = "Ð";
    const eth = "ð";
    const Euml = "Ë";
    const euml = "ë";
    const euro = "€";
    const excl = "!";
    const exist = "∃";
    const Exists = "∃";
    const expectation = "ℰ";
    const exponentiale = "ⅇ";
    const ExponentialE = "ⅇ";
    const fallingdotseq = "≒";
    const Fcy = "Ф";
    const fcy = "ф";
    const female = "♀";
    const ffilig = "ﬃ";
    const fflig = "ﬀ";
    const ffllig = "ﬄ";
    const Ffr = "𝔉";
    const ffr = "𝔣";
    const filig = "ﬁ";
    const FilledSmallSquare = "◼";
    const FilledVerySmallSquare = "▪";
    const fjlig = "fj";
    const flat = "♭";
    const fllig = "ﬂ";
    const fltns = "▱";
    const fnof = "ƒ";
    const Fopf = "𝔽";
    const fopf = "𝕗";
    const forall = "∀";
    const ForAll = "∀";
    const fork = "⋔";
    const forkv = "⫙";
    const Fouriertrf = "ℱ";
    const fpartint = "⨍";
    const frac12 = "½";
    const frac13 = "⅓";
    const frac14 = "¼";
    const frac15 = "⅕";
    const frac16 = "⅙";
    const frac18 = "⅛";
    const frac23 = "⅔";
    const frac25 = "⅖";
    const frac34 = "¾";
    const frac35 = "⅗";
    const frac38 = "⅜";
    const frac45 = "⅘";
    const frac56 = "⅚";
    const frac58 = "⅝";
    const frac78 = "⅞";
    const frasl = "⁄";
    const frown = "⌢";
    const fscr = "𝒻";
    const Fscr = "ℱ";
    const gacute = "ǵ";
    const Gamma = "Γ";
    const gamma = "γ";
    const Gammad = "Ϝ";
    const gammad = "ϝ";
    const gap = "⪆";
    const Gbreve = "Ğ";
    const gbreve = "ğ";
    const Gcedil = "Ģ";
    const Gcirc = "Ĝ";
    const gcirc = "ĝ";
    const Gcy = "Г";
    const gcy = "г";
    const Gdot = "Ġ";
    const gdot = "ġ";
    const ge = "≥";
    const gE = "≧";
    const gEl = "⪌";
    const gel = "⋛";
    const geq = "≥";
    const geqq = "≧";
    const geqslant = "⩾";
    const gescc = "⪩";
    const ges = "⩾";
    const gesdot = "⪀";
    const gesdoto = "⪂";
    const gesdotol = "⪄";
    const gesl = "⋛︀";
    const gesles = "⪔";
    const Gfr = "𝔊";
    const gfr = "𝔤";
    const gg = "≫";
    const Gg = "⋙";
    const ggg = "⋙";
    const gimel = "ℷ";
    const GJcy = "Ѓ";
    const gjcy = "ѓ";
    const gla = "⪥";
    const gl = "≷";
    const glE = "⪒";
    const glj = "⪤";
    const gnap = "⪊";
    const gnapprox = "⪊";
    const gne = "⪈";
    const gnE = "≩";
    const gneq = "⪈";
    const gneqq = "≩";
    const gnsim = "⋧";
    const Gopf = "𝔾";
    const gopf = "𝕘";
    const grave = "`";
    const GreaterEqual = "≥";
    const GreaterEqualLess = "⋛";
    const GreaterFullEqual = "≧";
    const GreaterGreater = "⪢";
    const GreaterLess = "≷";
    const GreaterSlantEqual = "⩾";
    const GreaterTilde = "≳";
    const Gscr = "𝒢";
    const gscr = "ℊ";
    const gsim = "≳";
    const gsime = "⪎";
    const gsiml = "⪐";
    const gtcc = "⪧";
    const gtcir = "⩺";
    const gt = ">";
    const GT = ">";
    const Gt = "≫";
    const gtdot = "⋗";
    const gtlPar = "⦕";
    const gtquest = "⩼";
    const gtrapprox = "⪆";
    const gtrarr = "⥸";
    const gtrdot = "⋗";
    const gtreqless = "⋛";
    const gtreqqless = "⪌";
    const gtrless = "≷";
    const gtrsim = "≳";
    const gvertneqq = "≩︀";
    const gvnE = "≩︀";
    const Hacek = "ˇ";
    const hairsp = " ";
    const half = "½";
    const hamilt = "ℋ";
    const HARDcy = "Ъ";
    const hardcy = "ъ";
    const harrcir = "⥈";
    const harr = "↔";
    const hArr = "⇔";
    const harrw = "↭";
    const Hat = "^";
    const hbar = "ℏ";
    const Hcirc = "Ĥ";
    const hcirc = "ĥ";
    const hearts = "♥";
    const heartsuit = "♥";
    const hellip = "…";
    const hercon = "⊹";
    const hfr = "𝔥";
    const Hfr = "ℌ";
    const HilbertSpace = "ℋ";
    const hksearow = "⤥";
    const hkswarow = "⤦";
    const hoarr = "⇿";
    const homtht = "∻";
    const hookleftarrow = "↩";
    const hookrightarrow = "↪";
    const hopf = "𝕙";
    const Hopf = "ℍ";
    const horbar = "―";
    const HorizontalLine = "─";
    const hscr = "𝒽";
    const Hscr = "ℋ";
    const hslash = "ℏ";
    const Hstrok = "Ħ";
    const hstrok = "ħ";
    const HumpDownHump = "≎";
    const HumpEqual = "≏";
    const hybull = "⁃";
    const hyphen = "‐";
    const Iacute = "Í";
    const iacute = "í";
    const ic = "⁣";
    const Icirc = "Î";
    const icirc = "î";
    const Icy = "И";
    const icy = "и";
    const Idot = "İ";
    const IEcy = "Е";
    const iecy = "е";
    const iexcl = "¡";
    const iff = "⇔";
    const ifr = "𝔦";
    const Ifr = "ℑ";
    const Igrave = "Ì";
    const igrave = "ì";
    const ii = "ⅈ";
    const iiiint = "⨌";
    const iiint = "∭";
    const iinfin = "⧜";
    const iiota = "℩";
    const IJlig = "Ĳ";
    const ijlig = "ĳ";
    const Imacr = "Ī";
    const imacr = "ī";
    const image$1 = "ℑ";
    const ImaginaryI = "ⅈ";
    const imagline = "ℐ";
    const imagpart = "ℑ";
    const imath = "ı";
    const Im = "ℑ";
    const imof = "⊷";
    const imped = "Ƶ";
    const Implies = "⇒";
    const incare = "℅";
    const infin = "∞";
    const infintie = "⧝";
    const inodot = "ı";
    const intcal = "⊺";
    const int = "∫";
    const Int = "∬";
    const integers = "ℤ";
    const Integral = "∫";
    const intercal = "⊺";
    const Intersection = "⋂";
    const intlarhk = "⨗";
    const intprod = "⨼";
    const InvisibleComma = "⁣";
    const InvisibleTimes = "⁢";
    const IOcy = "Ё";
    const iocy = "ё";
    const Iogon = "Į";
    const iogon = "į";
    const Iopf = "𝕀";
    const iopf = "𝕚";
    const Iota = "Ι";
    const iota = "ι";
    const iprod = "⨼";
    const iquest = "¿";
    const iscr = "𝒾";
    const Iscr = "ℐ";
    const isin = "∈";
    const isindot = "⋵";
    const isinE = "⋹";
    const isins = "⋴";
    const isinsv = "⋳";
    const isinv = "∈";
    const it = "⁢";
    const Itilde = "Ĩ";
    const itilde = "ĩ";
    const Iukcy = "І";
    const iukcy = "і";
    const Iuml = "Ï";
    const iuml = "ï";
    const Jcirc = "Ĵ";
    const jcirc = "ĵ";
    const Jcy = "Й";
    const jcy = "й";
    const Jfr = "𝔍";
    const jfr = "𝔧";
    const jmath = "ȷ";
    const Jopf = "𝕁";
    const jopf = "𝕛";
    const Jscr = "𝒥";
    const jscr = "𝒿";
    const Jsercy = "Ј";
    const jsercy = "ј";
    const Jukcy = "Є";
    const jukcy = "є";
    const Kappa = "Κ";
    const kappa = "κ";
    const kappav = "ϰ";
    const Kcedil = "Ķ";
    const kcedil = "ķ";
    const Kcy = "К";
    const kcy = "к";
    const Kfr = "𝔎";
    const kfr = "𝔨";
    const kgreen = "ĸ";
    const KHcy = "Х";
    const khcy = "х";
    const KJcy = "Ќ";
    const kjcy = "ќ";
    const Kopf = "𝕂";
    const kopf = "𝕜";
    const Kscr = "𝒦";
    const kscr = "𝓀";
    const lAarr = "⇚";
    const Lacute = "Ĺ";
    const lacute = "ĺ";
    const laemptyv = "⦴";
    const lagran = "ℒ";
    const Lambda = "Λ";
    const lambda = "λ";
    const lang = "⟨";
    const Lang = "⟪";
    const langd = "⦑";
    const langle = "⟨";
    const lap = "⪅";
    const Laplacetrf = "ℒ";
    const laquo = "«";
    const larrb = "⇤";
    const larrbfs = "⤟";
    const larr = "←";
    const Larr = "↞";
    const lArr = "⇐";
    const larrfs = "⤝";
    const larrhk = "↩";
    const larrlp = "↫";
    const larrpl = "⤹";
    const larrsim = "⥳";
    const larrtl = "↢";
    const latail = "⤙";
    const lAtail = "⤛";
    const lat = "⪫";
    const late = "⪭";
    const lates = "⪭︀";
    const lbarr = "⤌";
    const lBarr = "⤎";
    const lbbrk = "❲";
    const lbrace = "{";
    const lbrack = "[";
    const lbrke = "⦋";
    const lbrksld = "⦏";
    const lbrkslu = "⦍";
    const Lcaron = "Ľ";
    const lcaron = "ľ";
    const Lcedil = "Ļ";
    const lcedil = "ļ";
    const lceil = "⌈";
    const lcub = "{";
    const Lcy = "Л";
    const lcy = "л";
    const ldca = "⤶";
    const ldquo = "“";
    const ldquor = "„";
    const ldrdhar = "⥧";
    const ldrushar = "⥋";
    const ldsh = "↲";
    const le = "≤";
    const lE = "≦";
    const LeftAngleBracket = "⟨";
    const LeftArrowBar = "⇤";
    const leftarrow = "←";
    const LeftArrow = "←";
    const Leftarrow = "⇐";
    const LeftArrowRightArrow = "⇆";
    const leftarrowtail = "↢";
    const LeftCeiling = "⌈";
    const LeftDoubleBracket = "⟦";
    const LeftDownTeeVector = "⥡";
    const LeftDownVectorBar = "⥙";
    const LeftDownVector = "⇃";
    const LeftFloor = "⌊";
    const leftharpoondown = "↽";
    const leftharpoonup = "↼";
    const leftleftarrows = "⇇";
    const leftrightarrow = "↔";
    const LeftRightArrow = "↔";
    const Leftrightarrow = "⇔";
    const leftrightarrows = "⇆";
    const leftrightharpoons = "⇋";
    const leftrightsquigarrow = "↭";
    const LeftRightVector = "⥎";
    const LeftTeeArrow = "↤";
    const LeftTee = "⊣";
    const LeftTeeVector = "⥚";
    const leftthreetimes = "⋋";
    const LeftTriangleBar = "⧏";
    const LeftTriangle = "⊲";
    const LeftTriangleEqual = "⊴";
    const LeftUpDownVector = "⥑";
    const LeftUpTeeVector = "⥠";
    const LeftUpVectorBar = "⥘";
    const LeftUpVector = "↿";
    const LeftVectorBar = "⥒";
    const LeftVector = "↼";
    const lEg = "⪋";
    const leg = "⋚";
    const leq = "≤";
    const leqq = "≦";
    const leqslant = "⩽";
    const lescc = "⪨";
    const les = "⩽";
    const lesdot = "⩿";
    const lesdoto = "⪁";
    const lesdotor = "⪃";
    const lesg = "⋚︀";
    const lesges = "⪓";
    const lessapprox = "⪅";
    const lessdot = "⋖";
    const lesseqgtr = "⋚";
    const lesseqqgtr = "⪋";
    const LessEqualGreater = "⋚";
    const LessFullEqual = "≦";
    const LessGreater = "≶";
    const lessgtr = "≶";
    const LessLess = "⪡";
    const lesssim = "≲";
    const LessSlantEqual = "⩽";
    const LessTilde = "≲";
    const lfisht = "⥼";
    const lfloor = "⌊";
    const Lfr = "𝔏";
    const lfr = "𝔩";
    const lg = "≶";
    const lgE = "⪑";
    const lHar = "⥢";
    const lhard = "↽";
    const lharu = "↼";
    const lharul = "⥪";
    const lhblk = "▄";
    const LJcy = "Љ";
    const ljcy = "љ";
    const llarr = "⇇";
    const ll = "≪";
    const Ll = "⋘";
    const llcorner = "⌞";
    const Lleftarrow = "⇚";
    const llhard = "⥫";
    const lltri = "◺";
    const Lmidot = "Ŀ";
    const lmidot = "ŀ";
    const lmoustache = "⎰";
    const lmoust = "⎰";
    const lnap = "⪉";
    const lnapprox = "⪉";
    const lne = "⪇";
    const lnE = "≨";
    const lneq = "⪇";
    const lneqq = "≨";
    const lnsim = "⋦";
    const loang = "⟬";
    const loarr = "⇽";
    const lobrk = "⟦";
    const longleftarrow = "⟵";
    const LongLeftArrow = "⟵";
    const Longleftarrow = "⟸";
    const longleftrightarrow = "⟷";
    const LongLeftRightArrow = "⟷";
    const Longleftrightarrow = "⟺";
    const longmapsto = "⟼";
    const longrightarrow = "⟶";
    const LongRightArrow = "⟶";
    const Longrightarrow = "⟹";
    const looparrowleft = "↫";
    const looparrowright = "↬";
    const lopar = "⦅";
    const Lopf = "𝕃";
    const lopf = "𝕝";
    const loplus = "⨭";
    const lotimes = "⨴";
    const lowast = "∗";
    const lowbar = "_";
    const LowerLeftArrow = "↙";
    const LowerRightArrow = "↘";
    const loz = "◊";
    const lozenge = "◊";
    const lozf = "⧫";
    const lpar = "(";
    const lparlt = "⦓";
    const lrarr = "⇆";
    const lrcorner = "⌟";
    const lrhar = "⇋";
    const lrhard = "⥭";
    const lrm = "‎";
    const lrtri = "⊿";
    const lsaquo = "‹";
    const lscr = "𝓁";
    const Lscr = "ℒ";
    const lsh = "↰";
    const Lsh = "↰";
    const lsim = "≲";
    const lsime = "⪍";
    const lsimg = "⪏";
    const lsqb = "[";
    const lsquo = "‘";
    const lsquor = "‚";
    const Lstrok = "Ł";
    const lstrok = "ł";
    const ltcc = "⪦";
    const ltcir = "⩹";
    const lt = "<";
    const LT = "<";
    const Lt = "≪";
    const ltdot = "⋖";
    const lthree = "⋋";
    const ltimes = "⋉";
    const ltlarr = "⥶";
    const ltquest = "⩻";
    const ltri = "◃";
    const ltrie = "⊴";
    const ltrif = "◂";
    const ltrPar = "⦖";
    const lurdshar = "⥊";
    const luruhar = "⥦";
    const lvertneqq = "≨︀";
    const lvnE = "≨︀";
    const macr = "¯";
    const male = "♂";
    const malt = "✠";
    const maltese = "✠";
    const map = "↦";
    const mapsto = "↦";
    const mapstodown = "↧";
    const mapstoleft = "↤";
    const mapstoup = "↥";
    const marker = "▮";
    const mcomma = "⨩";
    const Mcy = "М";
    const mcy = "м";
    const mdash = "—";
    const mDDot = "∺";
    const measuredangle = "∡";
    const MediumSpace = " ";
    const Mellintrf = "ℳ";
    const Mfr = "𝔐";
    const mfr = "𝔪";
    const mho = "℧";
    const micro = "µ";
    const midast = "*";
    const midcir = "⫰";
    const mid = "∣";
    const middot = "·";
    const minusb = "⊟";
    const minus = "−";
    const minusd = "∸";
    const minusdu = "⨪";
    const MinusPlus = "∓";
    const mlcp = "⫛";
    const mldr = "…";
    const mnplus = "∓";
    const models = "⊧";
    const Mopf = "𝕄";
    const mopf = "𝕞";
    const mp = "∓";
    const mscr = "𝓂";
    const Mscr = "ℳ";
    const mstpos = "∾";
    const Mu = "Μ";
    const mu = "μ";
    const multimap = "⊸";
    const mumap = "⊸";
    const nabla = "∇";
    const Nacute = "Ń";
    const nacute = "ń";
    const nang = "∠⃒";
    const nap = "≉";
    const napE = "⩰̸";
    const napid = "≋̸";
    const napos = "ŉ";
    const napprox = "≉";
    const natural = "♮";
    const naturals = "ℕ";
    const natur = "♮";
    const nbsp = " ";
    const nbump = "≎̸";
    const nbumpe = "≏̸";
    const ncap = "⩃";
    const Ncaron = "Ň";
    const ncaron = "ň";
    const Ncedil = "Ņ";
    const ncedil = "ņ";
    const ncong = "≇";
    const ncongdot = "⩭̸";
    const ncup = "⩂";
    const Ncy = "Н";
    const ncy = "н";
    const ndash = "–";
    const nearhk = "⤤";
    const nearr = "↗";
    const neArr = "⇗";
    const nearrow = "↗";
    const ne = "≠";
    const nedot = "≐̸";
    const NegativeMediumSpace = "​";
    const NegativeThickSpace = "​";
    const NegativeThinSpace = "​";
    const NegativeVeryThinSpace = "​";
    const nequiv = "≢";
    const nesear = "⤨";
    const nesim = "≂̸";
    const NestedGreaterGreater = "≫";
    const NestedLessLess = "≪";
    const NewLine = "\n";
    const nexist = "∄";
    const nexists = "∄";
    const Nfr = "𝔑";
    const nfr = "𝔫";
    const ngE = "≧̸";
    const nge = "≱";
    const ngeq = "≱";
    const ngeqq = "≧̸";
    const ngeqslant = "⩾̸";
    const nges = "⩾̸";
    const nGg = "⋙̸";
    const ngsim = "≵";
    const nGt = "≫⃒";
    const ngt = "≯";
    const ngtr = "≯";
    const nGtv = "≫̸";
    const nharr = "↮";
    const nhArr = "⇎";
    const nhpar = "⫲";
    const ni = "∋";
    const nis = "⋼";
    const nisd = "⋺";
    const niv = "∋";
    const NJcy = "Њ";
    const njcy = "њ";
    const nlarr = "↚";
    const nlArr = "⇍";
    const nldr = "‥";
    const nlE = "≦̸";
    const nle = "≰";
    const nleftarrow = "↚";
    const nLeftarrow = "⇍";
    const nleftrightarrow = "↮";
    const nLeftrightarrow = "⇎";
    const nleq = "≰";
    const nleqq = "≦̸";
    const nleqslant = "⩽̸";
    const nles = "⩽̸";
    const nless = "≮";
    const nLl = "⋘̸";
    const nlsim = "≴";
    const nLt = "≪⃒";
    const nlt = "≮";
    const nltri = "⋪";
    const nltrie = "⋬";
    const nLtv = "≪̸";
    const nmid = "∤";
    const NoBreak = "⁠";
    const NonBreakingSpace = " ";
    const nopf = "𝕟";
    const Nopf = "ℕ";
    const Not = "⫬";
    const not = "¬";
    const NotCongruent = "≢";
    const NotCupCap = "≭";
    const NotDoubleVerticalBar = "∦";
    const NotElement = "∉";
    const NotEqual = "≠";
    const NotEqualTilde = "≂̸";
    const NotExists = "∄";
    const NotGreater = "≯";
    const NotGreaterEqual = "≱";
    const NotGreaterFullEqual = "≧̸";
    const NotGreaterGreater = "≫̸";
    const NotGreaterLess = "≹";
    const NotGreaterSlantEqual = "⩾̸";
    const NotGreaterTilde = "≵";
    const NotHumpDownHump = "≎̸";
    const NotHumpEqual = "≏̸";
    const notin = "∉";
    const notindot = "⋵̸";
    const notinE = "⋹̸";
    const notinva = "∉";
    const notinvb = "⋷";
    const notinvc = "⋶";
    const NotLeftTriangleBar = "⧏̸";
    const NotLeftTriangle = "⋪";
    const NotLeftTriangleEqual = "⋬";
    const NotLess = "≮";
    const NotLessEqual = "≰";
    const NotLessGreater = "≸";
    const NotLessLess = "≪̸";
    const NotLessSlantEqual = "⩽̸";
    const NotLessTilde = "≴";
    const NotNestedGreaterGreater = "⪢̸";
    const NotNestedLessLess = "⪡̸";
    const notni = "∌";
    const notniva = "∌";
    const notnivb = "⋾";
    const notnivc = "⋽";
    const NotPrecedes = "⊀";
    const NotPrecedesEqual = "⪯̸";
    const NotPrecedesSlantEqual = "⋠";
    const NotReverseElement = "∌";
    const NotRightTriangleBar = "⧐̸";
    const NotRightTriangle = "⋫";
    const NotRightTriangleEqual = "⋭";
    const NotSquareSubset = "⊏̸";
    const NotSquareSubsetEqual = "⋢";
    const NotSquareSuperset = "⊐̸";
    const NotSquareSupersetEqual = "⋣";
    const NotSubset = "⊂⃒";
    const NotSubsetEqual = "⊈";
    const NotSucceeds = "⊁";
    const NotSucceedsEqual = "⪰̸";
    const NotSucceedsSlantEqual = "⋡";
    const NotSucceedsTilde = "≿̸";
    const NotSuperset = "⊃⃒";
    const NotSupersetEqual = "⊉";
    const NotTilde = "≁";
    const NotTildeEqual = "≄";
    const NotTildeFullEqual = "≇";
    const NotTildeTilde = "≉";
    const NotVerticalBar = "∤";
    const nparallel = "∦";
    const npar = "∦";
    const nparsl = "⫽⃥";
    const npart = "∂̸";
    const npolint = "⨔";
    const npr = "⊀";
    const nprcue = "⋠";
    const nprec = "⊀";
    const npreceq = "⪯̸";
    const npre = "⪯̸";
    const nrarrc = "⤳̸";
    const nrarr = "↛";
    const nrArr = "⇏";
    const nrarrw = "↝̸";
    const nrightarrow = "↛";
    const nRightarrow = "⇏";
    const nrtri = "⋫";
    const nrtrie = "⋭";
    const nsc = "⊁";
    const nsccue = "⋡";
    const nsce = "⪰̸";
    const Nscr = "𝒩";
    const nscr = "𝓃";
    const nshortmid = "∤";
    const nshortparallel = "∦";
    const nsim = "≁";
    const nsime = "≄";
    const nsimeq = "≄";
    const nsmid = "∤";
    const nspar = "∦";
    const nsqsube = "⋢";
    const nsqsupe = "⋣";
    const nsub = "⊄";
    const nsubE = "⫅̸";
    const nsube = "⊈";
    const nsubset = "⊂⃒";
    const nsubseteq = "⊈";
    const nsubseteqq = "⫅̸";
    const nsucc = "⊁";
    const nsucceq = "⪰̸";
    const nsup = "⊅";
    const nsupE = "⫆̸";
    const nsupe = "⊉";
    const nsupset = "⊃⃒";
    const nsupseteq = "⊉";
    const nsupseteqq = "⫆̸";
    const ntgl = "≹";
    const Ntilde = "Ñ";
    const ntilde = "ñ";
    const ntlg = "≸";
    const ntriangleleft = "⋪";
    const ntrianglelefteq = "⋬";
    const ntriangleright = "⋫";
    const ntrianglerighteq = "⋭";
    const Nu = "Ν";
    const nu = "ν";
    const num = "#";
    const numero = "№";
    const numsp = " ";
    const nvap = "≍⃒";
    const nvdash = "⊬";
    const nvDash = "⊭";
    const nVdash = "⊮";
    const nVDash = "⊯";
    const nvge = "≥⃒";
    const nvgt = ">⃒";
    const nvHarr = "⤄";
    const nvinfin = "⧞";
    const nvlArr = "⤂";
    const nvle = "≤⃒";
    const nvlt = "<⃒";
    const nvltrie = "⊴⃒";
    const nvrArr = "⤃";
    const nvrtrie = "⊵⃒";
    const nvsim = "∼⃒";
    const nwarhk = "⤣";
    const nwarr = "↖";
    const nwArr = "⇖";
    const nwarrow = "↖";
    const nwnear = "⤧";
    const Oacute = "Ó";
    const oacute = "ó";
    const oast = "⊛";
    const Ocirc = "Ô";
    const ocirc = "ô";
    const ocir = "⊚";
    const Ocy = "О";
    const ocy = "о";
    const odash = "⊝";
    const Odblac = "Ő";
    const odblac = "ő";
    const odiv = "⨸";
    const odot = "⊙";
    const odsold = "⦼";
    const OElig = "Œ";
    const oelig = "œ";
    const ofcir = "⦿";
    const Ofr = "𝔒";
    const ofr = "𝔬";
    const ogon = "˛";
    const Ograve = "Ò";
    const ograve = "ò";
    const ogt = "⧁";
    const ohbar = "⦵";
    const ohm = "Ω";
    const oint = "∮";
    const olarr = "↺";
    const olcir = "⦾";
    const olcross = "⦻";
    const oline = "‾";
    const olt = "⧀";
    const Omacr = "Ō";
    const omacr = "ō";
    const Omega = "Ω";
    const omega = "ω";
    const Omicron = "Ο";
    const omicron = "ο";
    const omid = "⦶";
    const ominus = "⊖";
    const Oopf = "𝕆";
    const oopf = "𝕠";
    const opar = "⦷";
    const OpenCurlyDoubleQuote = "“";
    const OpenCurlyQuote = "‘";
    const operp = "⦹";
    const oplus = "⊕";
    const orarr = "↻";
    const Or = "⩔";
    const or = "∨";
    const ord = "⩝";
    const order = "ℴ";
    const orderof = "ℴ";
    const ordf = "ª";
    const ordm = "º";
    const origof = "⊶";
    const oror = "⩖";
    const orslope = "⩗";
    const orv = "⩛";
    const oS = "Ⓢ";
    const Oscr = "𝒪";
    const oscr = "ℴ";
    const Oslash = "Ø";
    const oslash = "ø";
    const osol = "⊘";
    const Otilde = "Õ";
    const otilde = "õ";
    const otimesas = "⨶";
    const Otimes = "⨷";
    const otimes = "⊗";
    const Ouml = "Ö";
    const ouml = "ö";
    const ovbar = "⌽";
    const OverBar = "‾";
    const OverBrace = "⏞";
    const OverBracket = "⎴";
    const OverParenthesis = "⏜";
    const para = "¶";
    const parallel = "∥";
    const par = "∥";
    const parsim = "⫳";
    const parsl = "⫽";
    const part = "∂";
    const PartialD = "∂";
    const Pcy = "П";
    const pcy = "п";
    const percnt = "%";
    const period = ".";
    const permil = "‰";
    const perp = "⊥";
    const pertenk = "‱";
    const Pfr = "𝔓";
    const pfr = "𝔭";
    const Phi = "Φ";
    const phi = "φ";
    const phiv = "ϕ";
    const phmmat = "ℳ";
    const phone = "☎";
    const Pi = "Π";
    const pi = "π";
    const pitchfork = "⋔";
    const piv = "ϖ";
    const planck = "ℏ";
    const planckh = "ℎ";
    const plankv = "ℏ";
    const plusacir = "⨣";
    const plusb = "⊞";
    const pluscir = "⨢";
    const plus = "+";
    const plusdo = "∔";
    const plusdu = "⨥";
    const pluse = "⩲";
    const PlusMinus = "±";
    const plusmn = "±";
    const plussim = "⨦";
    const plustwo = "⨧";
    const pm = "±";
    const Poincareplane = "ℌ";
    const pointint = "⨕";
    const popf = "𝕡";
    const Popf = "ℙ";
    const pound = "£";
    const prap = "⪷";
    const Pr = "⪻";
    const pr = "≺";
    const prcue = "≼";
    const precapprox = "⪷";
    const prec = "≺";
    const preccurlyeq = "≼";
    const Precedes = "≺";
    const PrecedesEqual = "⪯";
    const PrecedesSlantEqual = "≼";
    const PrecedesTilde = "≾";
    const preceq = "⪯";
    const precnapprox = "⪹";
    const precneqq = "⪵";
    const precnsim = "⋨";
    const pre = "⪯";
    const prE = "⪳";
    const precsim = "≾";
    const prime = "′";
    const Prime = "″";
    const primes = "ℙ";
    const prnap = "⪹";
    const prnE = "⪵";
    const prnsim = "⋨";
    const prod = "∏";
    const Product = "∏";
    const profalar = "⌮";
    const profline = "⌒";
    const profsurf = "⌓";
    const prop = "∝";
    const Proportional = "∝";
    const Proportion = "∷";
    const propto = "∝";
    const prsim = "≾";
    const prurel = "⊰";
    const Pscr = "𝒫";
    const pscr = "𝓅";
    const Psi = "Ψ";
    const psi = "ψ";
    const puncsp = " ";
    const Qfr = "𝔔";
    const qfr = "𝔮";
    const qint = "⨌";
    const qopf = "𝕢";
    const Qopf = "ℚ";
    const qprime = "⁗";
    const Qscr = "𝒬";
    const qscr = "𝓆";
    const quaternions = "ℍ";
    const quatint = "⨖";
    const quest = "?";
    const questeq = "≟";
    const quot = "\"";
    const QUOT = "\"";
    const rAarr = "⇛";
    const race = "∽̱";
    const Racute = "Ŕ";
    const racute = "ŕ";
    const radic = "√";
    const raemptyv = "⦳";
    const rang = "⟩";
    const Rang = "⟫";
    const rangd = "⦒";
    const range = "⦥";
    const rangle = "⟩";
    const raquo = "»";
    const rarrap = "⥵";
    const rarrb = "⇥";
    const rarrbfs = "⤠";
    const rarrc = "⤳";
    const rarr = "→";
    const Rarr = "↠";
    const rArr = "⇒";
    const rarrfs = "⤞";
    const rarrhk = "↪";
    const rarrlp = "↬";
    const rarrpl = "⥅";
    const rarrsim = "⥴";
    const Rarrtl = "⤖";
    const rarrtl = "↣";
    const rarrw = "↝";
    const ratail = "⤚";
    const rAtail = "⤜";
    const ratio = "∶";
    const rationals = "ℚ";
    const rbarr = "⤍";
    const rBarr = "⤏";
    const RBarr = "⤐";
    const rbbrk = "❳";
    const rbrace = "}";
    const rbrack = "]";
    const rbrke = "⦌";
    const rbrksld = "⦎";
    const rbrkslu = "⦐";
    const Rcaron = "Ř";
    const rcaron = "ř";
    const Rcedil = "Ŗ";
    const rcedil = "ŗ";
    const rceil = "⌉";
    const rcub = "}";
    const Rcy = "Р";
    const rcy = "р";
    const rdca = "⤷";
    const rdldhar = "⥩";
    const rdquo = "”";
    const rdquor = "”";
    const rdsh = "↳";
    const real = "ℜ";
    const realine = "ℛ";
    const realpart = "ℜ";
    const reals = "ℝ";
    const Re = "ℜ";
    const rect = "▭";
    const reg = "®";
    const REG = "®";
    const ReverseElement = "∋";
    const ReverseEquilibrium = "⇋";
    const ReverseUpEquilibrium = "⥯";
    const rfisht = "⥽";
    const rfloor = "⌋";
    const rfr = "𝔯";
    const Rfr = "ℜ";
    const rHar = "⥤";
    const rhard = "⇁";
    const rharu = "⇀";
    const rharul = "⥬";
    const Rho = "Ρ";
    const rho = "ρ";
    const rhov = "ϱ";
    const RightAngleBracket = "⟩";
    const RightArrowBar = "⇥";
    const rightarrow = "→";
    const RightArrow = "→";
    const Rightarrow = "⇒";
    const RightArrowLeftArrow = "⇄";
    const rightarrowtail = "↣";
    const RightCeiling = "⌉";
    const RightDoubleBracket = "⟧";
    const RightDownTeeVector = "⥝";
    const RightDownVectorBar = "⥕";
    const RightDownVector = "⇂";
    const RightFloor = "⌋";
    const rightharpoondown = "⇁";
    const rightharpoonup = "⇀";
    const rightleftarrows = "⇄";
    const rightleftharpoons = "⇌";
    const rightrightarrows = "⇉";
    const rightsquigarrow = "↝";
    const RightTeeArrow = "↦";
    const RightTee = "⊢";
    const RightTeeVector = "⥛";
    const rightthreetimes = "⋌";
    const RightTriangleBar = "⧐";
    const RightTriangle = "⊳";
    const RightTriangleEqual = "⊵";
    const RightUpDownVector = "⥏";
    const RightUpTeeVector = "⥜";
    const RightUpVectorBar = "⥔";
    const RightUpVector = "↾";
    const RightVectorBar = "⥓";
    const RightVector = "⇀";
    const ring = "˚";
    const risingdotseq = "≓";
    const rlarr = "⇄";
    const rlhar = "⇌";
    const rlm = "‏";
    const rmoustache = "⎱";
    const rmoust = "⎱";
    const rnmid = "⫮";
    const roang = "⟭";
    const roarr = "⇾";
    const robrk = "⟧";
    const ropar = "⦆";
    const ropf = "𝕣";
    const Ropf = "ℝ";
    const roplus = "⨮";
    const rotimes = "⨵";
    const RoundImplies = "⥰";
    const rpar = ")";
    const rpargt = "⦔";
    const rppolint = "⨒";
    const rrarr = "⇉";
    const Rrightarrow = "⇛";
    const rsaquo = "›";
    const rscr = "𝓇";
    const Rscr = "ℛ";
    const rsh = "↱";
    const Rsh = "↱";
    const rsqb = "]";
    const rsquo = "’";
    const rsquor = "’";
    const rthree = "⋌";
    const rtimes = "⋊";
    const rtri = "▹";
    const rtrie = "⊵";
    const rtrif = "▸";
    const rtriltri = "⧎";
    const RuleDelayed = "⧴";
    const ruluhar = "⥨";
    const rx = "℞";
    const Sacute = "Ś";
    const sacute = "ś";
    const sbquo = "‚";
    const scap = "⪸";
    const Scaron = "Š";
    const scaron = "š";
    const Sc = "⪼";
    const sc = "≻";
    const sccue = "≽";
    const sce = "⪰";
    const scE = "⪴";
    const Scedil = "Ş";
    const scedil = "ş";
    const Scirc = "Ŝ";
    const scirc = "ŝ";
    const scnap = "⪺";
    const scnE = "⪶";
    const scnsim = "⋩";
    const scpolint = "⨓";
    const scsim = "≿";
    const Scy = "С";
    const scy = "с";
    const sdotb = "⊡";
    const sdot = "⋅";
    const sdote = "⩦";
    const searhk = "⤥";
    const searr = "↘";
    const seArr = "⇘";
    const searrow = "↘";
    const sect = "§";
    const semi = ";";
    const seswar = "⤩";
    const setminus = "∖";
    const setmn = "∖";
    const sext = "✶";
    const Sfr = "𝔖";
    const sfr = "𝔰";
    const sfrown = "⌢";
    const sharp = "♯";
    const SHCHcy = "Щ";
    const shchcy = "щ";
    const SHcy = "Ш";
    const shcy = "ш";
    const ShortDownArrow = "↓";
    const ShortLeftArrow = "←";
    const shortmid = "∣";
    const shortparallel = "∥";
    const ShortRightArrow = "→";
    const ShortUpArrow = "↑";
    const shy = "­";
    const Sigma = "Σ";
    const sigma = "σ";
    const sigmaf = "ς";
    const sigmav = "ς";
    const sim = "∼";
    const simdot = "⩪";
    const sime = "≃";
    const simeq = "≃";
    const simg = "⪞";
    const simgE = "⪠";
    const siml = "⪝";
    const simlE = "⪟";
    const simne = "≆";
    const simplus = "⨤";
    const simrarr = "⥲";
    const slarr = "←";
    const SmallCircle = "∘";
    const smallsetminus = "∖";
    const smashp = "⨳";
    const smeparsl = "⧤";
    const smid = "∣";
    const smile = "⌣";
    const smt = "⪪";
    const smte = "⪬";
    const smtes = "⪬︀";
    const SOFTcy = "Ь";
    const softcy = "ь";
    const solbar = "⌿";
    const solb = "⧄";
    const sol = "/";
    const Sopf = "𝕊";
    const sopf = "𝕤";
    const spades = "♠";
    const spadesuit = "♠";
    const spar = "∥";
    const sqcap = "⊓";
    const sqcaps = "⊓︀";
    const sqcup = "⊔";
    const sqcups = "⊔︀";
    const Sqrt = "√";
    const sqsub = "⊏";
    const sqsube = "⊑";
    const sqsubset = "⊏";
    const sqsubseteq = "⊑";
    const sqsup = "⊐";
    const sqsupe = "⊒";
    const sqsupset = "⊐";
    const sqsupseteq = "⊒";
    const square = "□";
    const Square = "□";
    const SquareIntersection = "⊓";
    const SquareSubset = "⊏";
    const SquareSubsetEqual = "⊑";
    const SquareSuperset = "⊐";
    const SquareSupersetEqual = "⊒";
    const SquareUnion = "⊔";
    const squarf = "▪";
    const squ = "□";
    const squf = "▪";
    const srarr = "→";
    const Sscr = "𝒮";
    const sscr = "𝓈";
    const ssetmn = "∖";
    const ssmile = "⌣";
    const sstarf = "⋆";
    const Star = "⋆";
    const star = "☆";
    const starf = "★";
    const straightepsilon = "ϵ";
    const straightphi = "ϕ";
    const strns = "¯";
    const sub = "⊂";
    const Sub = "⋐";
    const subdot = "⪽";
    const subE = "⫅";
    const sube = "⊆";
    const subedot = "⫃";
    const submult = "⫁";
    const subnE = "⫋";
    const subne = "⊊";
    const subplus = "⪿";
    const subrarr = "⥹";
    const subset = "⊂";
    const Subset = "⋐";
    const subseteq = "⊆";
    const subseteqq = "⫅";
    const SubsetEqual = "⊆";
    const subsetneq = "⊊";
    const subsetneqq = "⫋";
    const subsim = "⫇";
    const subsub = "⫕";
    const subsup = "⫓";
    const succapprox = "⪸";
    const succ = "≻";
    const succcurlyeq = "≽";
    const Succeeds = "≻";
    const SucceedsEqual = "⪰";
    const SucceedsSlantEqual = "≽";
    const SucceedsTilde = "≿";
    const succeq = "⪰";
    const succnapprox = "⪺";
    const succneqq = "⪶";
    const succnsim = "⋩";
    const succsim = "≿";
    const SuchThat = "∋";
    const sum = "∑";
    const Sum = "∑";
    const sung = "♪";
    const sup1 = "¹";
    const sup2 = "²";
    const sup3 = "³";
    const sup = "⊃";
    const Sup = "⋑";
    const supdot = "⪾";
    const supdsub = "⫘";
    const supE = "⫆";
    const supe = "⊇";
    const supedot = "⫄";
    const Superset = "⊃";
    const SupersetEqual = "⊇";
    const suphsol = "⟉";
    const suphsub = "⫗";
    const suplarr = "⥻";
    const supmult = "⫂";
    const supnE = "⫌";
    const supne = "⊋";
    const supplus = "⫀";
    const supset = "⊃";
    const Supset = "⋑";
    const supseteq = "⊇";
    const supseteqq = "⫆";
    const supsetneq = "⊋";
    const supsetneqq = "⫌";
    const supsim = "⫈";
    const supsub = "⫔";
    const supsup = "⫖";
    const swarhk = "⤦";
    const swarr = "↙";
    const swArr = "⇙";
    const swarrow = "↙";
    const swnwar = "⤪";
    const szlig = "ß";
    const Tab = "\t";
    const target = "⌖";
    const Tau = "Τ";
    const tau = "τ";
    const tbrk = "⎴";
    const Tcaron = "Ť";
    const tcaron = "ť";
    const Tcedil = "Ţ";
    const tcedil = "ţ";
    const Tcy = "Т";
    const tcy = "т";
    const tdot = "⃛";
    const telrec = "⌕";
    const Tfr = "𝔗";
    const tfr = "𝔱";
    const there4 = "∴";
    const therefore = "∴";
    const Therefore = "∴";
    const Theta = "Θ";
    const theta = "θ";
    const thetasym = "ϑ";
    const thetav = "ϑ";
    const thickapprox = "≈";
    const thicksim = "∼";
    const ThickSpace = "  ";
    const ThinSpace = " ";
    const thinsp = " ";
    const thkap = "≈";
    const thksim = "∼";
    const THORN = "Þ";
    const thorn = "þ";
    const tilde = "˜";
    const Tilde = "∼";
    const TildeEqual = "≃";
    const TildeFullEqual = "≅";
    const TildeTilde = "≈";
    const timesbar = "⨱";
    const timesb = "⊠";
    const times = "×";
    const timesd = "⨰";
    const tint = "∭";
    const toea = "⤨";
    const topbot = "⌶";
    const topcir = "⫱";
    const top = "⊤";
    const Topf = "𝕋";
    const topf = "𝕥";
    const topfork = "⫚";
    const tosa = "⤩";
    const tprime = "‴";
    const trade = "™";
    const TRADE = "™";
    const triangle = "▵";
    const triangledown = "▿";
    const triangleleft = "◃";
    const trianglelefteq = "⊴";
    const triangleq = "≜";
    const triangleright = "▹";
    const trianglerighteq = "⊵";
    const tridot = "◬";
    const trie = "≜";
    const triminus = "⨺";
    const TripleDot = "⃛";
    const triplus = "⨹";
    const trisb = "⧍";
    const tritime = "⨻";
    const trpezium = "⏢";
    const Tscr = "𝒯";
    const tscr = "𝓉";
    const TScy = "Ц";
    const tscy = "ц";
    const TSHcy = "Ћ";
    const tshcy = "ћ";
    const Tstrok = "Ŧ";
    const tstrok = "ŧ";
    const twixt = "≬";
    const twoheadleftarrow = "↞";
    const twoheadrightarrow = "↠";
    const Uacute = "Ú";
    const uacute = "ú";
    const uarr = "↑";
    const Uarr = "↟";
    const uArr = "⇑";
    const Uarrocir = "⥉";
    const Ubrcy = "Ў";
    const ubrcy = "ў";
    const Ubreve = "Ŭ";
    const ubreve = "ŭ";
    const Ucirc = "Û";
    const ucirc = "û";
    const Ucy = "У";
    const ucy = "у";
    const udarr = "⇅";
    const Udblac = "Ű";
    const udblac = "ű";
    const udhar = "⥮";
    const ufisht = "⥾";
    const Ufr = "𝔘";
    const ufr = "𝔲";
    const Ugrave = "Ù";
    const ugrave = "ù";
    const uHar = "⥣";
    const uharl = "↿";
    const uharr = "↾";
    const uhblk = "▀";
    const ulcorn = "⌜";
    const ulcorner = "⌜";
    const ulcrop = "⌏";
    const ultri = "◸";
    const Umacr = "Ū";
    const umacr = "ū";
    const uml = "¨";
    const UnderBar = "_";
    const UnderBrace = "⏟";
    const UnderBracket = "⎵";
    const UnderParenthesis = "⏝";
    const Union = "⋃";
    const UnionPlus = "⊎";
    const Uogon = "Ų";
    const uogon = "ų";
    const Uopf = "𝕌";
    const uopf = "𝕦";
    const UpArrowBar = "⤒";
    const uparrow = "↑";
    const UpArrow = "↑";
    const Uparrow = "⇑";
    const UpArrowDownArrow = "⇅";
    const updownarrow = "↕";
    const UpDownArrow = "↕";
    const Updownarrow = "⇕";
    const UpEquilibrium = "⥮";
    const upharpoonleft = "↿";
    const upharpoonright = "↾";
    const uplus = "⊎";
    const UpperLeftArrow = "↖";
    const UpperRightArrow = "↗";
    const upsi = "υ";
    const Upsi = "ϒ";
    const upsih = "ϒ";
    const Upsilon = "Υ";
    const upsilon = "υ";
    const UpTeeArrow = "↥";
    const UpTee = "⊥";
    const upuparrows = "⇈";
    const urcorn = "⌝";
    const urcorner = "⌝";
    const urcrop = "⌎";
    const Uring = "Ů";
    const uring = "ů";
    const urtri = "◹";
    const Uscr = "𝒰";
    const uscr = "𝓊";
    const utdot = "⋰";
    const Utilde = "Ũ";
    const utilde = "ũ";
    const utri = "▵";
    const utrif = "▴";
    const uuarr = "⇈";
    const Uuml = "Ü";
    const uuml = "ü";
    const uwangle = "⦧";
    const vangrt = "⦜";
    const varepsilon = "ϵ";
    const varkappa = "ϰ";
    const varnothing = "∅";
    const varphi = "ϕ";
    const varpi = "ϖ";
    const varpropto = "∝";
    const varr = "↕";
    const vArr = "⇕";
    const varrho = "ϱ";
    const varsigma = "ς";
    const varsubsetneq = "⊊︀";
    const varsubsetneqq = "⫋︀";
    const varsupsetneq = "⊋︀";
    const varsupsetneqq = "⫌︀";
    const vartheta = "ϑ";
    const vartriangleleft = "⊲";
    const vartriangleright = "⊳";
    const vBar = "⫨";
    const Vbar = "⫫";
    const vBarv = "⫩";
    const Vcy = "В";
    const vcy = "в";
    const vdash = "⊢";
    const vDash = "⊨";
    const Vdash = "⊩";
    const VDash = "⊫";
    const Vdashl = "⫦";
    const veebar = "⊻";
    const vee = "∨";
    const Vee = "⋁";
    const veeeq = "≚";
    const vellip = "⋮";
    const verbar = "|";
    const Verbar = "‖";
    const vert = "|";
    const Vert = "‖";
    const VerticalBar = "∣";
    const VerticalLine = "|";
    const VerticalSeparator = "❘";
    const VerticalTilde = "≀";
    const VeryThinSpace = " ";
    const Vfr = "𝔙";
    const vfr = "𝔳";
    const vltri = "⊲";
    const vnsub = "⊂⃒";
    const vnsup = "⊃⃒";
    const Vopf = "𝕍";
    const vopf = "𝕧";
    const vprop = "∝";
    const vrtri = "⊳";
    const Vscr = "𝒱";
    const vscr = "𝓋";
    const vsubnE = "⫋︀";
    const vsubne = "⊊︀";
    const vsupnE = "⫌︀";
    const vsupne = "⊋︀";
    const Vvdash = "⊪";
    const vzigzag = "⦚";
    const Wcirc = "Ŵ";
    const wcirc = "ŵ";
    const wedbar = "⩟";
    const wedge = "∧";
    const Wedge = "⋀";
    const wedgeq = "≙";
    const weierp = "℘";
    const Wfr = "𝔚";
    const wfr = "𝔴";
    const Wopf = "𝕎";
    const wopf = "𝕨";
    const wp = "℘";
    const wr = "≀";
    const wreath = "≀";
    const Wscr = "𝒲";
    const wscr = "𝓌";
    const xcap = "⋂";
    const xcirc = "◯";
    const xcup = "⋃";
    const xdtri = "▽";
    const Xfr = "𝔛";
    const xfr = "𝔵";
    const xharr = "⟷";
    const xhArr = "⟺";
    const Xi = "Ξ";
    const xi = "ξ";
    const xlarr = "⟵";
    const xlArr = "⟸";
    const xmap = "⟼";
    const xnis = "⋻";
    const xodot = "⨀";
    const Xopf = "𝕏";
    const xopf = "𝕩";
    const xoplus = "⨁";
    const xotime = "⨂";
    const xrarr = "⟶";
    const xrArr = "⟹";
    const Xscr = "𝒳";
    const xscr = "𝓍";
    const xsqcup = "⨆";
    const xuplus = "⨄";
    const xutri = "△";
    const xvee = "⋁";
    const xwedge = "⋀";
    const Yacute = "Ý";
    const yacute = "ý";
    const YAcy = "Я";
    const yacy = "я";
    const Ycirc = "Ŷ";
    const ycirc = "ŷ";
    const Ycy = "Ы";
    const ycy = "ы";
    const yen = "¥";
    const Yfr = "𝔜";
    const yfr = "𝔶";
    const YIcy = "Ї";
    const yicy = "ї";
    const Yopf = "𝕐";
    const yopf = "𝕪";
    const Yscr = "𝒴";
    const yscr = "𝓎";
    const YUcy = "Ю";
    const yucy = "ю";
    const yuml = "ÿ";
    const Yuml = "Ÿ";
    const Zacute = "Ź";
    const zacute = "ź";
    const Zcaron = "Ž";
    const zcaron = "ž";
    const Zcy = "З";
    const zcy = "з";
    const Zdot = "Ż";
    const zdot = "ż";
    const zeetrf = "ℨ";
    const ZeroWidthSpace = "​";
    const Zeta = "Ζ";
    const zeta = "ζ";
    const zfr = "𝔷";
    const Zfr = "ℨ";
    const ZHcy = "Ж";
    const zhcy = "ж";
    const zigrarr = "⇝";
    const zopf = "𝕫";
    const Zopf = "ℤ";
    const Zscr = "𝒵";
    const zscr = "𝓏";
    const zwj = "‍";
    const zwnj = "‌";
    var entities = {
    	Aacute: Aacute,
    	aacute: aacute,
    	Abreve: Abreve,
    	abreve: abreve,
    	ac: ac,
    	acd: acd,
    	acE: acE,
    	Acirc: Acirc,
    	acirc: acirc,
    	acute: acute,
    	Acy: Acy,
    	acy: acy,
    	AElig: AElig,
    	aelig: aelig,
    	af: af,
    	Afr: Afr,
    	afr: afr,
    	Agrave: Agrave,
    	agrave: agrave,
    	alefsym: alefsym,
    	aleph: aleph,
    	Alpha: Alpha,
    	alpha: alpha,
    	Amacr: Amacr,
    	amacr: amacr,
    	amalg: amalg,
    	amp: amp,
    	AMP: AMP,
    	andand: andand,
    	And: And,
    	and: and,
    	andd: andd,
    	andslope: andslope,
    	andv: andv,
    	ang: ang,
    	ange: ange,
    	angle: angle,
    	angmsdaa: angmsdaa,
    	angmsdab: angmsdab,
    	angmsdac: angmsdac,
    	angmsdad: angmsdad,
    	angmsdae: angmsdae,
    	angmsdaf: angmsdaf,
    	angmsdag: angmsdag,
    	angmsdah: angmsdah,
    	angmsd: angmsd,
    	angrt: angrt,
    	angrtvb: angrtvb,
    	angrtvbd: angrtvbd,
    	angsph: angsph,
    	angst: angst,
    	angzarr: angzarr,
    	Aogon: Aogon,
    	aogon: aogon,
    	Aopf: Aopf,
    	aopf: aopf,
    	apacir: apacir,
    	ap: ap,
    	apE: apE,
    	ape: ape,
    	apid: apid,
    	apos: apos,
    	ApplyFunction: ApplyFunction,
    	approx: approx,
    	approxeq: approxeq,
    	Aring: Aring,
    	aring: aring,
    	Ascr: Ascr,
    	ascr: ascr,
    	Assign: Assign,
    	ast: ast,
    	asymp: asymp,
    	asympeq: asympeq,
    	Atilde: Atilde,
    	atilde: atilde,
    	Auml: Auml,
    	auml: auml,
    	awconint: awconint,
    	awint: awint,
    	backcong: backcong,
    	backepsilon: backepsilon,
    	backprime: backprime,
    	backsim: backsim,
    	backsimeq: backsimeq,
    	Backslash: Backslash,
    	Barv: Barv,
    	barvee: barvee,
    	barwed: barwed,
    	Barwed: Barwed,
    	barwedge: barwedge,
    	bbrk: bbrk,
    	bbrktbrk: bbrktbrk,
    	bcong: bcong,
    	Bcy: Bcy,
    	bcy: bcy,
    	bdquo: bdquo,
    	becaus: becaus,
    	because: because,
    	Because: Because,
    	bemptyv: bemptyv,
    	bepsi: bepsi,
    	bernou: bernou,
    	Bernoullis: Bernoullis,
    	Beta: Beta,
    	beta: beta,
    	beth: beth,
    	between: between,
    	Bfr: Bfr,
    	bfr: bfr,
    	bigcap: bigcap,
    	bigcirc: bigcirc,
    	bigcup: bigcup,
    	bigodot: bigodot,
    	bigoplus: bigoplus,
    	bigotimes: bigotimes,
    	bigsqcup: bigsqcup,
    	bigstar: bigstar,
    	bigtriangledown: bigtriangledown,
    	bigtriangleup: bigtriangleup,
    	biguplus: biguplus,
    	bigvee: bigvee,
    	bigwedge: bigwedge,
    	bkarow: bkarow,
    	blacklozenge: blacklozenge,
    	blacksquare: blacksquare,
    	blacktriangle: blacktriangle,
    	blacktriangledown: blacktriangledown,
    	blacktriangleleft: blacktriangleleft,
    	blacktriangleright: blacktriangleright,
    	blank: blank,
    	blk12: blk12,
    	blk14: blk14,
    	blk34: blk34,
    	block: block,
    	bne: bne,
    	bnequiv: bnequiv,
    	bNot: bNot,
    	bnot: bnot,
    	Bopf: Bopf,
    	bopf: bopf,
    	bot: bot,
    	bottom: bottom,
    	bowtie: bowtie,
    	boxbox: boxbox,
    	boxdl: boxdl,
    	boxdL: boxdL,
    	boxDl: boxDl,
    	boxDL: boxDL,
    	boxdr: boxdr,
    	boxdR: boxdR,
    	boxDr: boxDr,
    	boxDR: boxDR,
    	boxh: boxh,
    	boxH: boxH,
    	boxhd: boxhd,
    	boxHd: boxHd,
    	boxhD: boxhD,
    	boxHD: boxHD,
    	boxhu: boxhu,
    	boxHu: boxHu,
    	boxhU: boxhU,
    	boxHU: boxHU,
    	boxminus: boxminus,
    	boxplus: boxplus,
    	boxtimes: boxtimes,
    	boxul: boxul,
    	boxuL: boxuL,
    	boxUl: boxUl,
    	boxUL: boxUL,
    	boxur: boxur,
    	boxuR: boxuR,
    	boxUr: boxUr,
    	boxUR: boxUR,
    	boxv: boxv,
    	boxV: boxV,
    	boxvh: boxvh,
    	boxvH: boxvH,
    	boxVh: boxVh,
    	boxVH: boxVH,
    	boxvl: boxvl,
    	boxvL: boxvL,
    	boxVl: boxVl,
    	boxVL: boxVL,
    	boxvr: boxvr,
    	boxvR: boxvR,
    	boxVr: boxVr,
    	boxVR: boxVR,
    	bprime: bprime,
    	breve: breve,
    	Breve: Breve,
    	brvbar: brvbar,
    	bscr: bscr,
    	Bscr: Bscr,
    	bsemi: bsemi,
    	bsim: bsim,
    	bsime: bsime,
    	bsolb: bsolb,
    	bsol: bsol,
    	bsolhsub: bsolhsub,
    	bull: bull,
    	bullet: bullet,
    	bump: bump,
    	bumpE: bumpE,
    	bumpe: bumpe,
    	Bumpeq: Bumpeq,
    	bumpeq: bumpeq,
    	Cacute: Cacute,
    	cacute: cacute,
    	capand: capand,
    	capbrcup: capbrcup,
    	capcap: capcap,
    	cap: cap,
    	Cap: Cap,
    	capcup: capcup,
    	capdot: capdot,
    	CapitalDifferentialD: CapitalDifferentialD,
    	caps: caps,
    	caret: caret,
    	caron: caron,
    	Cayleys: Cayleys,
    	ccaps: ccaps,
    	Ccaron: Ccaron,
    	ccaron: ccaron,
    	Ccedil: Ccedil,
    	ccedil: ccedil,
    	Ccirc: Ccirc,
    	ccirc: ccirc,
    	Cconint: Cconint,
    	ccups: ccups,
    	ccupssm: ccupssm,
    	Cdot: Cdot,
    	cdot: cdot,
    	cedil: cedil,
    	Cedilla: Cedilla,
    	cemptyv: cemptyv,
    	cent: cent,
    	centerdot: centerdot,
    	CenterDot: CenterDot,
    	cfr: cfr,
    	Cfr: Cfr,
    	CHcy: CHcy,
    	chcy: chcy,
    	check: check,
    	checkmark: checkmark,
    	Chi: Chi,
    	chi: chi,
    	circ: circ,
    	circeq: circeq,
    	circlearrowleft: circlearrowleft,
    	circlearrowright: circlearrowright,
    	circledast: circledast,
    	circledcirc: circledcirc,
    	circleddash: circleddash,
    	CircleDot: CircleDot,
    	circledR: circledR,
    	circledS: circledS,
    	CircleMinus: CircleMinus,
    	CirclePlus: CirclePlus,
    	CircleTimes: CircleTimes,
    	cir: cir,
    	cirE: cirE,
    	cire: cire,
    	cirfnint: cirfnint,
    	cirmid: cirmid,
    	cirscir: cirscir,
    	ClockwiseContourIntegral: ClockwiseContourIntegral,
    	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
    	CloseCurlyQuote: CloseCurlyQuote,
    	clubs: clubs,
    	clubsuit: clubsuit,
    	colon: colon,
    	Colon: Colon,
    	Colone: Colone,
    	colone: colone,
    	coloneq: coloneq,
    	comma: comma,
    	commat: commat,
    	comp: comp,
    	compfn: compfn,
    	complement: complement,
    	complexes: complexes,
    	cong: cong,
    	congdot: congdot,
    	Congruent: Congruent,
    	conint: conint,
    	Conint: Conint,
    	ContourIntegral: ContourIntegral,
    	copf: copf,
    	Copf: Copf,
    	coprod: coprod,
    	Coproduct: Coproduct,
    	copy: copy,
    	COPY: COPY,
    	copysr: copysr,
    	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
    	crarr: crarr,
    	cross: cross,
    	Cross: Cross,
    	Cscr: Cscr,
    	cscr: cscr,
    	csub: csub,
    	csube: csube,
    	csup: csup,
    	csupe: csupe,
    	ctdot: ctdot,
    	cudarrl: cudarrl,
    	cudarrr: cudarrr,
    	cuepr: cuepr,
    	cuesc: cuesc,
    	cularr: cularr,
    	cularrp: cularrp,
    	cupbrcap: cupbrcap,
    	cupcap: cupcap,
    	CupCap: CupCap,
    	cup: cup,
    	Cup: Cup,
    	cupcup: cupcup,
    	cupdot: cupdot,
    	cupor: cupor,
    	cups: cups,
    	curarr: curarr,
    	curarrm: curarrm,
    	curlyeqprec: curlyeqprec,
    	curlyeqsucc: curlyeqsucc,
    	curlyvee: curlyvee,
    	curlywedge: curlywedge,
    	curren: curren,
    	curvearrowleft: curvearrowleft,
    	curvearrowright: curvearrowright,
    	cuvee: cuvee,
    	cuwed: cuwed,
    	cwconint: cwconint,
    	cwint: cwint,
    	cylcty: cylcty,
    	dagger: dagger,
    	Dagger: Dagger,
    	daleth: daleth,
    	darr: darr,
    	Darr: Darr,
    	dArr: dArr,
    	dash: dash,
    	Dashv: Dashv,
    	dashv: dashv,
    	dbkarow: dbkarow,
    	dblac: dblac,
    	Dcaron: Dcaron,
    	dcaron: dcaron,
    	Dcy: Dcy,
    	dcy: dcy,
    	ddagger: ddagger,
    	ddarr: ddarr,
    	DD: DD,
    	dd: dd,
    	DDotrahd: DDotrahd,
    	ddotseq: ddotseq,
    	deg: deg,
    	Del: Del,
    	Delta: Delta,
    	delta: delta,
    	demptyv: demptyv,
    	dfisht: dfisht,
    	Dfr: Dfr,
    	dfr: dfr,
    	dHar: dHar,
    	dharl: dharl,
    	dharr: dharr,
    	DiacriticalAcute: DiacriticalAcute,
    	DiacriticalDot: DiacriticalDot,
    	DiacriticalDoubleAcute: DiacriticalDoubleAcute,
    	DiacriticalGrave: DiacriticalGrave,
    	DiacriticalTilde: DiacriticalTilde,
    	diam: diam,
    	diamond: diamond,
    	Diamond: Diamond,
    	diamondsuit: diamondsuit,
    	diams: diams,
    	die: die,
    	DifferentialD: DifferentialD,
    	digamma: digamma,
    	disin: disin,
    	div: div,
    	divide: divide,
    	divideontimes: divideontimes,
    	divonx: divonx,
    	DJcy: DJcy,
    	djcy: djcy,
    	dlcorn: dlcorn,
    	dlcrop: dlcrop,
    	dollar: dollar,
    	Dopf: Dopf,
    	dopf: dopf,
    	Dot: Dot,
    	dot: dot,
    	DotDot: DotDot,
    	doteq: doteq,
    	doteqdot: doteqdot,
    	DotEqual: DotEqual,
    	dotminus: dotminus,
    	dotplus: dotplus,
    	dotsquare: dotsquare,
    	doublebarwedge: doublebarwedge,
    	DoubleContourIntegral: DoubleContourIntegral,
    	DoubleDot: DoubleDot,
    	DoubleDownArrow: DoubleDownArrow,
    	DoubleLeftArrow: DoubleLeftArrow,
    	DoubleLeftRightArrow: DoubleLeftRightArrow,
    	DoubleLeftTee: DoubleLeftTee,
    	DoubleLongLeftArrow: DoubleLongLeftArrow,
    	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
    	DoubleLongRightArrow: DoubleLongRightArrow,
    	DoubleRightArrow: DoubleRightArrow,
    	DoubleRightTee: DoubleRightTee,
    	DoubleUpArrow: DoubleUpArrow,
    	DoubleUpDownArrow: DoubleUpDownArrow,
    	DoubleVerticalBar: DoubleVerticalBar,
    	DownArrowBar: DownArrowBar,
    	downarrow: downarrow,
    	DownArrow: DownArrow,
    	Downarrow: Downarrow,
    	DownArrowUpArrow: DownArrowUpArrow,
    	DownBreve: DownBreve,
    	downdownarrows: downdownarrows,
    	downharpoonleft: downharpoonleft,
    	downharpoonright: downharpoonright,
    	DownLeftRightVector: DownLeftRightVector,
    	DownLeftTeeVector: DownLeftTeeVector,
    	DownLeftVectorBar: DownLeftVectorBar,
    	DownLeftVector: DownLeftVector,
    	DownRightTeeVector: DownRightTeeVector,
    	DownRightVectorBar: DownRightVectorBar,
    	DownRightVector: DownRightVector,
    	DownTeeArrow: DownTeeArrow,
    	DownTee: DownTee,
    	drbkarow: drbkarow,
    	drcorn: drcorn,
    	drcrop: drcrop,
    	Dscr: Dscr,
    	dscr: dscr,
    	DScy: DScy,
    	dscy: dscy,
    	dsol: dsol,
    	Dstrok: Dstrok,
    	dstrok: dstrok,
    	dtdot: dtdot,
    	dtri: dtri,
    	dtrif: dtrif,
    	duarr: duarr,
    	duhar: duhar,
    	dwangle: dwangle,
    	DZcy: DZcy,
    	dzcy: dzcy,
    	dzigrarr: dzigrarr,
    	Eacute: Eacute,
    	eacute: eacute,
    	easter: easter,
    	Ecaron: Ecaron,
    	ecaron: ecaron,
    	Ecirc: Ecirc,
    	ecirc: ecirc,
    	ecir: ecir,
    	ecolon: ecolon,
    	Ecy: Ecy,
    	ecy: ecy,
    	eDDot: eDDot,
    	Edot: Edot,
    	edot: edot,
    	eDot: eDot,
    	ee: ee,
    	efDot: efDot,
    	Efr: Efr,
    	efr: efr,
    	eg: eg,
    	Egrave: Egrave,
    	egrave: egrave,
    	egs: egs,
    	egsdot: egsdot,
    	el: el,
    	Element: Element,
    	elinters: elinters,
    	ell: ell,
    	els: els,
    	elsdot: elsdot,
    	Emacr: Emacr,
    	emacr: emacr,
    	empty: empty,
    	emptyset: emptyset,
    	EmptySmallSquare: EmptySmallSquare,
    	emptyv: emptyv,
    	EmptyVerySmallSquare: EmptyVerySmallSquare,
    	emsp13: emsp13,
    	emsp14: emsp14,
    	emsp: emsp,
    	ENG: ENG,
    	eng: eng,
    	ensp: ensp,
    	Eogon: Eogon,
    	eogon: eogon,
    	Eopf: Eopf,
    	eopf: eopf,
    	epar: epar,
    	eparsl: eparsl,
    	eplus: eplus,
    	epsi: epsi,
    	Epsilon: Epsilon,
    	epsilon: epsilon,
    	epsiv: epsiv,
    	eqcirc: eqcirc,
    	eqcolon: eqcolon,
    	eqsim: eqsim,
    	eqslantgtr: eqslantgtr,
    	eqslantless: eqslantless,
    	Equal: Equal,
    	equals: equals,
    	EqualTilde: EqualTilde,
    	equest: equest,
    	Equilibrium: Equilibrium,
    	equiv: equiv,
    	equivDD: equivDD,
    	eqvparsl: eqvparsl,
    	erarr: erarr,
    	erDot: erDot,
    	escr: escr,
    	Escr: Escr,
    	esdot: esdot,
    	Esim: Esim,
    	esim: esim,
    	Eta: Eta,
    	eta: eta,
    	ETH: ETH,
    	eth: eth,
    	Euml: Euml,
    	euml: euml,
    	euro: euro,
    	excl: excl,
    	exist: exist,
    	Exists: Exists,
    	expectation: expectation,
    	exponentiale: exponentiale,
    	ExponentialE: ExponentialE,
    	fallingdotseq: fallingdotseq,
    	Fcy: Fcy,
    	fcy: fcy,
    	female: female,
    	ffilig: ffilig,
    	fflig: fflig,
    	ffllig: ffllig,
    	Ffr: Ffr,
    	ffr: ffr,
    	filig: filig,
    	FilledSmallSquare: FilledSmallSquare,
    	FilledVerySmallSquare: FilledVerySmallSquare,
    	fjlig: fjlig,
    	flat: flat,
    	fllig: fllig,
    	fltns: fltns,
    	fnof: fnof,
    	Fopf: Fopf,
    	fopf: fopf,
    	forall: forall,
    	ForAll: ForAll,
    	fork: fork,
    	forkv: forkv,
    	Fouriertrf: Fouriertrf,
    	fpartint: fpartint,
    	frac12: frac12,
    	frac13: frac13,
    	frac14: frac14,
    	frac15: frac15,
    	frac16: frac16,
    	frac18: frac18,
    	frac23: frac23,
    	frac25: frac25,
    	frac34: frac34,
    	frac35: frac35,
    	frac38: frac38,
    	frac45: frac45,
    	frac56: frac56,
    	frac58: frac58,
    	frac78: frac78,
    	frasl: frasl,
    	frown: frown,
    	fscr: fscr,
    	Fscr: Fscr,
    	gacute: gacute,
    	Gamma: Gamma,
    	gamma: gamma,
    	Gammad: Gammad,
    	gammad: gammad,
    	gap: gap,
    	Gbreve: Gbreve,
    	gbreve: gbreve,
    	Gcedil: Gcedil,
    	Gcirc: Gcirc,
    	gcirc: gcirc,
    	Gcy: Gcy,
    	gcy: gcy,
    	Gdot: Gdot,
    	gdot: gdot,
    	ge: ge,
    	gE: gE,
    	gEl: gEl,
    	gel: gel,
    	geq: geq,
    	geqq: geqq,
    	geqslant: geqslant,
    	gescc: gescc,
    	ges: ges,
    	gesdot: gesdot,
    	gesdoto: gesdoto,
    	gesdotol: gesdotol,
    	gesl: gesl,
    	gesles: gesles,
    	Gfr: Gfr,
    	gfr: gfr,
    	gg: gg,
    	Gg: Gg,
    	ggg: ggg,
    	gimel: gimel,
    	GJcy: GJcy,
    	gjcy: gjcy,
    	gla: gla,
    	gl: gl,
    	glE: glE,
    	glj: glj,
    	gnap: gnap,
    	gnapprox: gnapprox,
    	gne: gne,
    	gnE: gnE,
    	gneq: gneq,
    	gneqq: gneqq,
    	gnsim: gnsim,
    	Gopf: Gopf,
    	gopf: gopf,
    	grave: grave,
    	GreaterEqual: GreaterEqual,
    	GreaterEqualLess: GreaterEqualLess,
    	GreaterFullEqual: GreaterFullEqual,
    	GreaterGreater: GreaterGreater,
    	GreaterLess: GreaterLess,
    	GreaterSlantEqual: GreaterSlantEqual,
    	GreaterTilde: GreaterTilde,
    	Gscr: Gscr,
    	gscr: gscr,
    	gsim: gsim,
    	gsime: gsime,
    	gsiml: gsiml,
    	gtcc: gtcc,
    	gtcir: gtcir,
    	gt: gt,
    	GT: GT,
    	Gt: Gt,
    	gtdot: gtdot,
    	gtlPar: gtlPar,
    	gtquest: gtquest,
    	gtrapprox: gtrapprox,
    	gtrarr: gtrarr,
    	gtrdot: gtrdot,
    	gtreqless: gtreqless,
    	gtreqqless: gtreqqless,
    	gtrless: gtrless,
    	gtrsim: gtrsim,
    	gvertneqq: gvertneqq,
    	gvnE: gvnE,
    	Hacek: Hacek,
    	hairsp: hairsp,
    	half: half,
    	hamilt: hamilt,
    	HARDcy: HARDcy,
    	hardcy: hardcy,
    	harrcir: harrcir,
    	harr: harr,
    	hArr: hArr,
    	harrw: harrw,
    	Hat: Hat,
    	hbar: hbar,
    	Hcirc: Hcirc,
    	hcirc: hcirc,
    	hearts: hearts,
    	heartsuit: heartsuit,
    	hellip: hellip,
    	hercon: hercon,
    	hfr: hfr,
    	Hfr: Hfr,
    	HilbertSpace: HilbertSpace,
    	hksearow: hksearow,
    	hkswarow: hkswarow,
    	hoarr: hoarr,
    	homtht: homtht,
    	hookleftarrow: hookleftarrow,
    	hookrightarrow: hookrightarrow,
    	hopf: hopf,
    	Hopf: Hopf,
    	horbar: horbar,
    	HorizontalLine: HorizontalLine,
    	hscr: hscr,
    	Hscr: Hscr,
    	hslash: hslash,
    	Hstrok: Hstrok,
    	hstrok: hstrok,
    	HumpDownHump: HumpDownHump,
    	HumpEqual: HumpEqual,
    	hybull: hybull,
    	hyphen: hyphen,
    	Iacute: Iacute,
    	iacute: iacute,
    	ic: ic,
    	Icirc: Icirc,
    	icirc: icirc,
    	Icy: Icy,
    	icy: icy,
    	Idot: Idot,
    	IEcy: IEcy,
    	iecy: iecy,
    	iexcl: iexcl,
    	iff: iff,
    	ifr: ifr,
    	Ifr: Ifr,
    	Igrave: Igrave,
    	igrave: igrave,
    	ii: ii,
    	iiiint: iiiint,
    	iiint: iiint,
    	iinfin: iinfin,
    	iiota: iiota,
    	IJlig: IJlig,
    	ijlig: ijlig,
    	Imacr: Imacr,
    	imacr: imacr,
    	image: image$1,
    	ImaginaryI: ImaginaryI,
    	imagline: imagline,
    	imagpart: imagpart,
    	imath: imath,
    	Im: Im,
    	imof: imof,
    	imped: imped,
    	Implies: Implies,
    	incare: incare,
    	"in": "∈",
    	infin: infin,
    	infintie: infintie,
    	inodot: inodot,
    	intcal: intcal,
    	int: int,
    	Int: Int,
    	integers: integers,
    	Integral: Integral,
    	intercal: intercal,
    	Intersection: Intersection,
    	intlarhk: intlarhk,
    	intprod: intprod,
    	InvisibleComma: InvisibleComma,
    	InvisibleTimes: InvisibleTimes,
    	IOcy: IOcy,
    	iocy: iocy,
    	Iogon: Iogon,
    	iogon: iogon,
    	Iopf: Iopf,
    	iopf: iopf,
    	Iota: Iota,
    	iota: iota,
    	iprod: iprod,
    	iquest: iquest,
    	iscr: iscr,
    	Iscr: Iscr,
    	isin: isin,
    	isindot: isindot,
    	isinE: isinE,
    	isins: isins,
    	isinsv: isinsv,
    	isinv: isinv,
    	it: it,
    	Itilde: Itilde,
    	itilde: itilde,
    	Iukcy: Iukcy,
    	iukcy: iukcy,
    	Iuml: Iuml,
    	iuml: iuml,
    	Jcirc: Jcirc,
    	jcirc: jcirc,
    	Jcy: Jcy,
    	jcy: jcy,
    	Jfr: Jfr,
    	jfr: jfr,
    	jmath: jmath,
    	Jopf: Jopf,
    	jopf: jopf,
    	Jscr: Jscr,
    	jscr: jscr,
    	Jsercy: Jsercy,
    	jsercy: jsercy,
    	Jukcy: Jukcy,
    	jukcy: jukcy,
    	Kappa: Kappa,
    	kappa: kappa,
    	kappav: kappav,
    	Kcedil: Kcedil,
    	kcedil: kcedil,
    	Kcy: Kcy,
    	kcy: kcy,
    	Kfr: Kfr,
    	kfr: kfr,
    	kgreen: kgreen,
    	KHcy: KHcy,
    	khcy: khcy,
    	KJcy: KJcy,
    	kjcy: kjcy,
    	Kopf: Kopf,
    	kopf: kopf,
    	Kscr: Kscr,
    	kscr: kscr,
    	lAarr: lAarr,
    	Lacute: Lacute,
    	lacute: lacute,
    	laemptyv: laemptyv,
    	lagran: lagran,
    	Lambda: Lambda,
    	lambda: lambda,
    	lang: lang,
    	Lang: Lang,
    	langd: langd,
    	langle: langle,
    	lap: lap,
    	Laplacetrf: Laplacetrf,
    	laquo: laquo,
    	larrb: larrb,
    	larrbfs: larrbfs,
    	larr: larr,
    	Larr: Larr,
    	lArr: lArr,
    	larrfs: larrfs,
    	larrhk: larrhk,
    	larrlp: larrlp,
    	larrpl: larrpl,
    	larrsim: larrsim,
    	larrtl: larrtl,
    	latail: latail,
    	lAtail: lAtail,
    	lat: lat,
    	late: late,
    	lates: lates,
    	lbarr: lbarr,
    	lBarr: lBarr,
    	lbbrk: lbbrk,
    	lbrace: lbrace,
    	lbrack: lbrack,
    	lbrke: lbrke,
    	lbrksld: lbrksld,
    	lbrkslu: lbrkslu,
    	Lcaron: Lcaron,
    	lcaron: lcaron,
    	Lcedil: Lcedil,
    	lcedil: lcedil,
    	lceil: lceil,
    	lcub: lcub,
    	Lcy: Lcy,
    	lcy: lcy,
    	ldca: ldca,
    	ldquo: ldquo,
    	ldquor: ldquor,
    	ldrdhar: ldrdhar,
    	ldrushar: ldrushar,
    	ldsh: ldsh,
    	le: le,
    	lE: lE,
    	LeftAngleBracket: LeftAngleBracket,
    	LeftArrowBar: LeftArrowBar,
    	leftarrow: leftarrow,
    	LeftArrow: LeftArrow,
    	Leftarrow: Leftarrow,
    	LeftArrowRightArrow: LeftArrowRightArrow,
    	leftarrowtail: leftarrowtail,
    	LeftCeiling: LeftCeiling,
    	LeftDoubleBracket: LeftDoubleBracket,
    	LeftDownTeeVector: LeftDownTeeVector,
    	LeftDownVectorBar: LeftDownVectorBar,
    	LeftDownVector: LeftDownVector,
    	LeftFloor: LeftFloor,
    	leftharpoondown: leftharpoondown,
    	leftharpoonup: leftharpoonup,
    	leftleftarrows: leftleftarrows,
    	leftrightarrow: leftrightarrow,
    	LeftRightArrow: LeftRightArrow,
    	Leftrightarrow: Leftrightarrow,
    	leftrightarrows: leftrightarrows,
    	leftrightharpoons: leftrightharpoons,
    	leftrightsquigarrow: leftrightsquigarrow,
    	LeftRightVector: LeftRightVector,
    	LeftTeeArrow: LeftTeeArrow,
    	LeftTee: LeftTee,
    	LeftTeeVector: LeftTeeVector,
    	leftthreetimes: leftthreetimes,
    	LeftTriangleBar: LeftTriangleBar,
    	LeftTriangle: LeftTriangle,
    	LeftTriangleEqual: LeftTriangleEqual,
    	LeftUpDownVector: LeftUpDownVector,
    	LeftUpTeeVector: LeftUpTeeVector,
    	LeftUpVectorBar: LeftUpVectorBar,
    	LeftUpVector: LeftUpVector,
    	LeftVectorBar: LeftVectorBar,
    	LeftVector: LeftVector,
    	lEg: lEg,
    	leg: leg,
    	leq: leq,
    	leqq: leqq,
    	leqslant: leqslant,
    	lescc: lescc,
    	les: les,
    	lesdot: lesdot,
    	lesdoto: lesdoto,
    	lesdotor: lesdotor,
    	lesg: lesg,
    	lesges: lesges,
    	lessapprox: lessapprox,
    	lessdot: lessdot,
    	lesseqgtr: lesseqgtr,
    	lesseqqgtr: lesseqqgtr,
    	LessEqualGreater: LessEqualGreater,
    	LessFullEqual: LessFullEqual,
    	LessGreater: LessGreater,
    	lessgtr: lessgtr,
    	LessLess: LessLess,
    	lesssim: lesssim,
    	LessSlantEqual: LessSlantEqual,
    	LessTilde: LessTilde,
    	lfisht: lfisht,
    	lfloor: lfloor,
    	Lfr: Lfr,
    	lfr: lfr,
    	lg: lg,
    	lgE: lgE,
    	lHar: lHar,
    	lhard: lhard,
    	lharu: lharu,
    	lharul: lharul,
    	lhblk: lhblk,
    	LJcy: LJcy,
    	ljcy: ljcy,
    	llarr: llarr,
    	ll: ll,
    	Ll: Ll,
    	llcorner: llcorner,
    	Lleftarrow: Lleftarrow,
    	llhard: llhard,
    	lltri: lltri,
    	Lmidot: Lmidot,
    	lmidot: lmidot,
    	lmoustache: lmoustache,
    	lmoust: lmoust,
    	lnap: lnap,
    	lnapprox: lnapprox,
    	lne: lne,
    	lnE: lnE,
    	lneq: lneq,
    	lneqq: lneqq,
    	lnsim: lnsim,
    	loang: loang,
    	loarr: loarr,
    	lobrk: lobrk,
    	longleftarrow: longleftarrow,
    	LongLeftArrow: LongLeftArrow,
    	Longleftarrow: Longleftarrow,
    	longleftrightarrow: longleftrightarrow,
    	LongLeftRightArrow: LongLeftRightArrow,
    	Longleftrightarrow: Longleftrightarrow,
    	longmapsto: longmapsto,
    	longrightarrow: longrightarrow,
    	LongRightArrow: LongRightArrow,
    	Longrightarrow: Longrightarrow,
    	looparrowleft: looparrowleft,
    	looparrowright: looparrowright,
    	lopar: lopar,
    	Lopf: Lopf,
    	lopf: lopf,
    	loplus: loplus,
    	lotimes: lotimes,
    	lowast: lowast,
    	lowbar: lowbar,
    	LowerLeftArrow: LowerLeftArrow,
    	LowerRightArrow: LowerRightArrow,
    	loz: loz,
    	lozenge: lozenge,
    	lozf: lozf,
    	lpar: lpar,
    	lparlt: lparlt,
    	lrarr: lrarr,
    	lrcorner: lrcorner,
    	lrhar: lrhar,
    	lrhard: lrhard,
    	lrm: lrm,
    	lrtri: lrtri,
    	lsaquo: lsaquo,
    	lscr: lscr,
    	Lscr: Lscr,
    	lsh: lsh,
    	Lsh: Lsh,
    	lsim: lsim,
    	lsime: lsime,
    	lsimg: lsimg,
    	lsqb: lsqb,
    	lsquo: lsquo,
    	lsquor: lsquor,
    	Lstrok: Lstrok,
    	lstrok: lstrok,
    	ltcc: ltcc,
    	ltcir: ltcir,
    	lt: lt,
    	LT: LT,
    	Lt: Lt,
    	ltdot: ltdot,
    	lthree: lthree,
    	ltimes: ltimes,
    	ltlarr: ltlarr,
    	ltquest: ltquest,
    	ltri: ltri,
    	ltrie: ltrie,
    	ltrif: ltrif,
    	ltrPar: ltrPar,
    	lurdshar: lurdshar,
    	luruhar: luruhar,
    	lvertneqq: lvertneqq,
    	lvnE: lvnE,
    	macr: macr,
    	male: male,
    	malt: malt,
    	maltese: maltese,
    	"Map": "⤅",
    	map: map,
    	mapsto: mapsto,
    	mapstodown: mapstodown,
    	mapstoleft: mapstoleft,
    	mapstoup: mapstoup,
    	marker: marker,
    	mcomma: mcomma,
    	Mcy: Mcy,
    	mcy: mcy,
    	mdash: mdash,
    	mDDot: mDDot,
    	measuredangle: measuredangle,
    	MediumSpace: MediumSpace,
    	Mellintrf: Mellintrf,
    	Mfr: Mfr,
    	mfr: mfr,
    	mho: mho,
    	micro: micro,
    	midast: midast,
    	midcir: midcir,
    	mid: mid,
    	middot: middot,
    	minusb: minusb,
    	minus: minus,
    	minusd: minusd,
    	minusdu: minusdu,
    	MinusPlus: MinusPlus,
    	mlcp: mlcp,
    	mldr: mldr,
    	mnplus: mnplus,
    	models: models,
    	Mopf: Mopf,
    	mopf: mopf,
    	mp: mp,
    	mscr: mscr,
    	Mscr: Mscr,
    	mstpos: mstpos,
    	Mu: Mu,
    	mu: mu,
    	multimap: multimap,
    	mumap: mumap,
    	nabla: nabla,
    	Nacute: Nacute,
    	nacute: nacute,
    	nang: nang,
    	nap: nap,
    	napE: napE,
    	napid: napid,
    	napos: napos,
    	napprox: napprox,
    	natural: natural,
    	naturals: naturals,
    	natur: natur,
    	nbsp: nbsp,
    	nbump: nbump,
    	nbumpe: nbumpe,
    	ncap: ncap,
    	Ncaron: Ncaron,
    	ncaron: ncaron,
    	Ncedil: Ncedil,
    	ncedil: ncedil,
    	ncong: ncong,
    	ncongdot: ncongdot,
    	ncup: ncup,
    	Ncy: Ncy,
    	ncy: ncy,
    	ndash: ndash,
    	nearhk: nearhk,
    	nearr: nearr,
    	neArr: neArr,
    	nearrow: nearrow,
    	ne: ne,
    	nedot: nedot,
    	NegativeMediumSpace: NegativeMediumSpace,
    	NegativeThickSpace: NegativeThickSpace,
    	NegativeThinSpace: NegativeThinSpace,
    	NegativeVeryThinSpace: NegativeVeryThinSpace,
    	nequiv: nequiv,
    	nesear: nesear,
    	nesim: nesim,
    	NestedGreaterGreater: NestedGreaterGreater,
    	NestedLessLess: NestedLessLess,
    	NewLine: NewLine,
    	nexist: nexist,
    	nexists: nexists,
    	Nfr: Nfr,
    	nfr: nfr,
    	ngE: ngE,
    	nge: nge,
    	ngeq: ngeq,
    	ngeqq: ngeqq,
    	ngeqslant: ngeqslant,
    	nges: nges,
    	nGg: nGg,
    	ngsim: ngsim,
    	nGt: nGt,
    	ngt: ngt,
    	ngtr: ngtr,
    	nGtv: nGtv,
    	nharr: nharr,
    	nhArr: nhArr,
    	nhpar: nhpar,
    	ni: ni,
    	nis: nis,
    	nisd: nisd,
    	niv: niv,
    	NJcy: NJcy,
    	njcy: njcy,
    	nlarr: nlarr,
    	nlArr: nlArr,
    	nldr: nldr,
    	nlE: nlE,
    	nle: nle,
    	nleftarrow: nleftarrow,
    	nLeftarrow: nLeftarrow,
    	nleftrightarrow: nleftrightarrow,
    	nLeftrightarrow: nLeftrightarrow,
    	nleq: nleq,
    	nleqq: nleqq,
    	nleqslant: nleqslant,
    	nles: nles,
    	nless: nless,
    	nLl: nLl,
    	nlsim: nlsim,
    	nLt: nLt,
    	nlt: nlt,
    	nltri: nltri,
    	nltrie: nltrie,
    	nLtv: nLtv,
    	nmid: nmid,
    	NoBreak: NoBreak,
    	NonBreakingSpace: NonBreakingSpace,
    	nopf: nopf,
    	Nopf: Nopf,
    	Not: Not,
    	not: not,
    	NotCongruent: NotCongruent,
    	NotCupCap: NotCupCap,
    	NotDoubleVerticalBar: NotDoubleVerticalBar,
    	NotElement: NotElement,
    	NotEqual: NotEqual,
    	NotEqualTilde: NotEqualTilde,
    	NotExists: NotExists,
    	NotGreater: NotGreater,
    	NotGreaterEqual: NotGreaterEqual,
    	NotGreaterFullEqual: NotGreaterFullEqual,
    	NotGreaterGreater: NotGreaterGreater,
    	NotGreaterLess: NotGreaterLess,
    	NotGreaterSlantEqual: NotGreaterSlantEqual,
    	NotGreaterTilde: NotGreaterTilde,
    	NotHumpDownHump: NotHumpDownHump,
    	NotHumpEqual: NotHumpEqual,
    	notin: notin,
    	notindot: notindot,
    	notinE: notinE,
    	notinva: notinva,
    	notinvb: notinvb,
    	notinvc: notinvc,
    	NotLeftTriangleBar: NotLeftTriangleBar,
    	NotLeftTriangle: NotLeftTriangle,
    	NotLeftTriangleEqual: NotLeftTriangleEqual,
    	NotLess: NotLess,
    	NotLessEqual: NotLessEqual,
    	NotLessGreater: NotLessGreater,
    	NotLessLess: NotLessLess,
    	NotLessSlantEqual: NotLessSlantEqual,
    	NotLessTilde: NotLessTilde,
    	NotNestedGreaterGreater: NotNestedGreaterGreater,
    	NotNestedLessLess: NotNestedLessLess,
    	notni: notni,
    	notniva: notniva,
    	notnivb: notnivb,
    	notnivc: notnivc,
    	NotPrecedes: NotPrecedes,
    	NotPrecedesEqual: NotPrecedesEqual,
    	NotPrecedesSlantEqual: NotPrecedesSlantEqual,
    	NotReverseElement: NotReverseElement,
    	NotRightTriangleBar: NotRightTriangleBar,
    	NotRightTriangle: NotRightTriangle,
    	NotRightTriangleEqual: NotRightTriangleEqual,
    	NotSquareSubset: NotSquareSubset,
    	NotSquareSubsetEqual: NotSquareSubsetEqual,
    	NotSquareSuperset: NotSquareSuperset,
    	NotSquareSupersetEqual: NotSquareSupersetEqual,
    	NotSubset: NotSubset,
    	NotSubsetEqual: NotSubsetEqual,
    	NotSucceeds: NotSucceeds,
    	NotSucceedsEqual: NotSucceedsEqual,
    	NotSucceedsSlantEqual: NotSucceedsSlantEqual,
    	NotSucceedsTilde: NotSucceedsTilde,
    	NotSuperset: NotSuperset,
    	NotSupersetEqual: NotSupersetEqual,
    	NotTilde: NotTilde,
    	NotTildeEqual: NotTildeEqual,
    	NotTildeFullEqual: NotTildeFullEqual,
    	NotTildeTilde: NotTildeTilde,
    	NotVerticalBar: NotVerticalBar,
    	nparallel: nparallel,
    	npar: npar,
    	nparsl: nparsl,
    	npart: npart,
    	npolint: npolint,
    	npr: npr,
    	nprcue: nprcue,
    	nprec: nprec,
    	npreceq: npreceq,
    	npre: npre,
    	nrarrc: nrarrc,
    	nrarr: nrarr,
    	nrArr: nrArr,
    	nrarrw: nrarrw,
    	nrightarrow: nrightarrow,
    	nRightarrow: nRightarrow,
    	nrtri: nrtri,
    	nrtrie: nrtrie,
    	nsc: nsc,
    	nsccue: nsccue,
    	nsce: nsce,
    	Nscr: Nscr,
    	nscr: nscr,
    	nshortmid: nshortmid,
    	nshortparallel: nshortparallel,
    	nsim: nsim,
    	nsime: nsime,
    	nsimeq: nsimeq,
    	nsmid: nsmid,
    	nspar: nspar,
    	nsqsube: nsqsube,
    	nsqsupe: nsqsupe,
    	nsub: nsub,
    	nsubE: nsubE,
    	nsube: nsube,
    	nsubset: nsubset,
    	nsubseteq: nsubseteq,
    	nsubseteqq: nsubseteqq,
    	nsucc: nsucc,
    	nsucceq: nsucceq,
    	nsup: nsup,
    	nsupE: nsupE,
    	nsupe: nsupe,
    	nsupset: nsupset,
    	nsupseteq: nsupseteq,
    	nsupseteqq: nsupseteqq,
    	ntgl: ntgl,
    	Ntilde: Ntilde,
    	ntilde: ntilde,
    	ntlg: ntlg,
    	ntriangleleft: ntriangleleft,
    	ntrianglelefteq: ntrianglelefteq,
    	ntriangleright: ntriangleright,
    	ntrianglerighteq: ntrianglerighteq,
    	Nu: Nu,
    	nu: nu,
    	num: num,
    	numero: numero,
    	numsp: numsp,
    	nvap: nvap,
    	nvdash: nvdash,
    	nvDash: nvDash,
    	nVdash: nVdash,
    	nVDash: nVDash,
    	nvge: nvge,
    	nvgt: nvgt,
    	nvHarr: nvHarr,
    	nvinfin: nvinfin,
    	nvlArr: nvlArr,
    	nvle: nvle,
    	nvlt: nvlt,
    	nvltrie: nvltrie,
    	nvrArr: nvrArr,
    	nvrtrie: nvrtrie,
    	nvsim: nvsim,
    	nwarhk: nwarhk,
    	nwarr: nwarr,
    	nwArr: nwArr,
    	nwarrow: nwarrow,
    	nwnear: nwnear,
    	Oacute: Oacute,
    	oacute: oacute,
    	oast: oast,
    	Ocirc: Ocirc,
    	ocirc: ocirc,
    	ocir: ocir,
    	Ocy: Ocy,
    	ocy: ocy,
    	odash: odash,
    	Odblac: Odblac,
    	odblac: odblac,
    	odiv: odiv,
    	odot: odot,
    	odsold: odsold,
    	OElig: OElig,
    	oelig: oelig,
    	ofcir: ofcir,
    	Ofr: Ofr,
    	ofr: ofr,
    	ogon: ogon,
    	Ograve: Ograve,
    	ograve: ograve,
    	ogt: ogt,
    	ohbar: ohbar,
    	ohm: ohm,
    	oint: oint,
    	olarr: olarr,
    	olcir: olcir,
    	olcross: olcross,
    	oline: oline,
    	olt: olt,
    	Omacr: Omacr,
    	omacr: omacr,
    	Omega: Omega,
    	omega: omega,
    	Omicron: Omicron,
    	omicron: omicron,
    	omid: omid,
    	ominus: ominus,
    	Oopf: Oopf,
    	oopf: oopf,
    	opar: opar,
    	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
    	OpenCurlyQuote: OpenCurlyQuote,
    	operp: operp,
    	oplus: oplus,
    	orarr: orarr,
    	Or: Or,
    	or: or,
    	ord: ord,
    	order: order,
    	orderof: orderof,
    	ordf: ordf,
    	ordm: ordm,
    	origof: origof,
    	oror: oror,
    	orslope: orslope,
    	orv: orv,
    	oS: oS,
    	Oscr: Oscr,
    	oscr: oscr,
    	Oslash: Oslash,
    	oslash: oslash,
    	osol: osol,
    	Otilde: Otilde,
    	otilde: otilde,
    	otimesas: otimesas,
    	Otimes: Otimes,
    	otimes: otimes,
    	Ouml: Ouml,
    	ouml: ouml,
    	ovbar: ovbar,
    	OverBar: OverBar,
    	OverBrace: OverBrace,
    	OverBracket: OverBracket,
    	OverParenthesis: OverParenthesis,
    	para: para,
    	parallel: parallel,
    	par: par,
    	parsim: parsim,
    	parsl: parsl,
    	part: part,
    	PartialD: PartialD,
    	Pcy: Pcy,
    	pcy: pcy,
    	percnt: percnt,
    	period: period,
    	permil: permil,
    	perp: perp,
    	pertenk: pertenk,
    	Pfr: Pfr,
    	pfr: pfr,
    	Phi: Phi,
    	phi: phi,
    	phiv: phiv,
    	phmmat: phmmat,
    	phone: phone,
    	Pi: Pi,
    	pi: pi,
    	pitchfork: pitchfork,
    	piv: piv,
    	planck: planck,
    	planckh: planckh,
    	plankv: plankv,
    	plusacir: plusacir,
    	plusb: plusb,
    	pluscir: pluscir,
    	plus: plus,
    	plusdo: plusdo,
    	plusdu: plusdu,
    	pluse: pluse,
    	PlusMinus: PlusMinus,
    	plusmn: plusmn,
    	plussim: plussim,
    	plustwo: plustwo,
    	pm: pm,
    	Poincareplane: Poincareplane,
    	pointint: pointint,
    	popf: popf,
    	Popf: Popf,
    	pound: pound,
    	prap: prap,
    	Pr: Pr,
    	pr: pr,
    	prcue: prcue,
    	precapprox: precapprox,
    	prec: prec,
    	preccurlyeq: preccurlyeq,
    	Precedes: Precedes,
    	PrecedesEqual: PrecedesEqual,
    	PrecedesSlantEqual: PrecedesSlantEqual,
    	PrecedesTilde: PrecedesTilde,
    	preceq: preceq,
    	precnapprox: precnapprox,
    	precneqq: precneqq,
    	precnsim: precnsim,
    	pre: pre,
    	prE: prE,
    	precsim: precsim,
    	prime: prime,
    	Prime: Prime,
    	primes: primes,
    	prnap: prnap,
    	prnE: prnE,
    	prnsim: prnsim,
    	prod: prod,
    	Product: Product,
    	profalar: profalar,
    	profline: profline,
    	profsurf: profsurf,
    	prop: prop,
    	Proportional: Proportional,
    	Proportion: Proportion,
    	propto: propto,
    	prsim: prsim,
    	prurel: prurel,
    	Pscr: Pscr,
    	pscr: pscr,
    	Psi: Psi,
    	psi: psi,
    	puncsp: puncsp,
    	Qfr: Qfr,
    	qfr: qfr,
    	qint: qint,
    	qopf: qopf,
    	Qopf: Qopf,
    	qprime: qprime,
    	Qscr: Qscr,
    	qscr: qscr,
    	quaternions: quaternions,
    	quatint: quatint,
    	quest: quest,
    	questeq: questeq,
    	quot: quot,
    	QUOT: QUOT,
    	rAarr: rAarr,
    	race: race,
    	Racute: Racute,
    	racute: racute,
    	radic: radic,
    	raemptyv: raemptyv,
    	rang: rang,
    	Rang: Rang,
    	rangd: rangd,
    	range: range,
    	rangle: rangle,
    	raquo: raquo,
    	rarrap: rarrap,
    	rarrb: rarrb,
    	rarrbfs: rarrbfs,
    	rarrc: rarrc,
    	rarr: rarr,
    	Rarr: Rarr,
    	rArr: rArr,
    	rarrfs: rarrfs,
    	rarrhk: rarrhk,
    	rarrlp: rarrlp,
    	rarrpl: rarrpl,
    	rarrsim: rarrsim,
    	Rarrtl: Rarrtl,
    	rarrtl: rarrtl,
    	rarrw: rarrw,
    	ratail: ratail,
    	rAtail: rAtail,
    	ratio: ratio,
    	rationals: rationals,
    	rbarr: rbarr,
    	rBarr: rBarr,
    	RBarr: RBarr,
    	rbbrk: rbbrk,
    	rbrace: rbrace,
    	rbrack: rbrack,
    	rbrke: rbrke,
    	rbrksld: rbrksld,
    	rbrkslu: rbrkslu,
    	Rcaron: Rcaron,
    	rcaron: rcaron,
    	Rcedil: Rcedil,
    	rcedil: rcedil,
    	rceil: rceil,
    	rcub: rcub,
    	Rcy: Rcy,
    	rcy: rcy,
    	rdca: rdca,
    	rdldhar: rdldhar,
    	rdquo: rdquo,
    	rdquor: rdquor,
    	rdsh: rdsh,
    	real: real,
    	realine: realine,
    	realpart: realpart,
    	reals: reals,
    	Re: Re,
    	rect: rect,
    	reg: reg,
    	REG: REG,
    	ReverseElement: ReverseElement,
    	ReverseEquilibrium: ReverseEquilibrium,
    	ReverseUpEquilibrium: ReverseUpEquilibrium,
    	rfisht: rfisht,
    	rfloor: rfloor,
    	rfr: rfr,
    	Rfr: Rfr,
    	rHar: rHar,
    	rhard: rhard,
    	rharu: rharu,
    	rharul: rharul,
    	Rho: Rho,
    	rho: rho,
    	rhov: rhov,
    	RightAngleBracket: RightAngleBracket,
    	RightArrowBar: RightArrowBar,
    	rightarrow: rightarrow,
    	RightArrow: RightArrow,
    	Rightarrow: Rightarrow,
    	RightArrowLeftArrow: RightArrowLeftArrow,
    	rightarrowtail: rightarrowtail,
    	RightCeiling: RightCeiling,
    	RightDoubleBracket: RightDoubleBracket,
    	RightDownTeeVector: RightDownTeeVector,
    	RightDownVectorBar: RightDownVectorBar,
    	RightDownVector: RightDownVector,
    	RightFloor: RightFloor,
    	rightharpoondown: rightharpoondown,
    	rightharpoonup: rightharpoonup,
    	rightleftarrows: rightleftarrows,
    	rightleftharpoons: rightleftharpoons,
    	rightrightarrows: rightrightarrows,
    	rightsquigarrow: rightsquigarrow,
    	RightTeeArrow: RightTeeArrow,
    	RightTee: RightTee,
    	RightTeeVector: RightTeeVector,
    	rightthreetimes: rightthreetimes,
    	RightTriangleBar: RightTriangleBar,
    	RightTriangle: RightTriangle,
    	RightTriangleEqual: RightTriangleEqual,
    	RightUpDownVector: RightUpDownVector,
    	RightUpTeeVector: RightUpTeeVector,
    	RightUpVectorBar: RightUpVectorBar,
    	RightUpVector: RightUpVector,
    	RightVectorBar: RightVectorBar,
    	RightVector: RightVector,
    	ring: ring,
    	risingdotseq: risingdotseq,
    	rlarr: rlarr,
    	rlhar: rlhar,
    	rlm: rlm,
    	rmoustache: rmoustache,
    	rmoust: rmoust,
    	rnmid: rnmid,
    	roang: roang,
    	roarr: roarr,
    	robrk: robrk,
    	ropar: ropar,
    	ropf: ropf,
    	Ropf: Ropf,
    	roplus: roplus,
    	rotimes: rotimes,
    	RoundImplies: RoundImplies,
    	rpar: rpar,
    	rpargt: rpargt,
    	rppolint: rppolint,
    	rrarr: rrarr,
    	Rrightarrow: Rrightarrow,
    	rsaquo: rsaquo,
    	rscr: rscr,
    	Rscr: Rscr,
    	rsh: rsh,
    	Rsh: Rsh,
    	rsqb: rsqb,
    	rsquo: rsquo,
    	rsquor: rsquor,
    	rthree: rthree,
    	rtimes: rtimes,
    	rtri: rtri,
    	rtrie: rtrie,
    	rtrif: rtrif,
    	rtriltri: rtriltri,
    	RuleDelayed: RuleDelayed,
    	ruluhar: ruluhar,
    	rx: rx,
    	Sacute: Sacute,
    	sacute: sacute,
    	sbquo: sbquo,
    	scap: scap,
    	Scaron: Scaron,
    	scaron: scaron,
    	Sc: Sc,
    	sc: sc,
    	sccue: sccue,
    	sce: sce,
    	scE: scE,
    	Scedil: Scedil,
    	scedil: scedil,
    	Scirc: Scirc,
    	scirc: scirc,
    	scnap: scnap,
    	scnE: scnE,
    	scnsim: scnsim,
    	scpolint: scpolint,
    	scsim: scsim,
    	Scy: Scy,
    	scy: scy,
    	sdotb: sdotb,
    	sdot: sdot,
    	sdote: sdote,
    	searhk: searhk,
    	searr: searr,
    	seArr: seArr,
    	searrow: searrow,
    	sect: sect,
    	semi: semi,
    	seswar: seswar,
    	setminus: setminus,
    	setmn: setmn,
    	sext: sext,
    	Sfr: Sfr,
    	sfr: sfr,
    	sfrown: sfrown,
    	sharp: sharp,
    	SHCHcy: SHCHcy,
    	shchcy: shchcy,
    	SHcy: SHcy,
    	shcy: shcy,
    	ShortDownArrow: ShortDownArrow,
    	ShortLeftArrow: ShortLeftArrow,
    	shortmid: shortmid,
    	shortparallel: shortparallel,
    	ShortRightArrow: ShortRightArrow,
    	ShortUpArrow: ShortUpArrow,
    	shy: shy,
    	Sigma: Sigma,
    	sigma: sigma,
    	sigmaf: sigmaf,
    	sigmav: sigmav,
    	sim: sim,
    	simdot: simdot,
    	sime: sime,
    	simeq: simeq,
    	simg: simg,
    	simgE: simgE,
    	siml: siml,
    	simlE: simlE,
    	simne: simne,
    	simplus: simplus,
    	simrarr: simrarr,
    	slarr: slarr,
    	SmallCircle: SmallCircle,
    	smallsetminus: smallsetminus,
    	smashp: smashp,
    	smeparsl: smeparsl,
    	smid: smid,
    	smile: smile,
    	smt: smt,
    	smte: smte,
    	smtes: smtes,
    	SOFTcy: SOFTcy,
    	softcy: softcy,
    	solbar: solbar,
    	solb: solb,
    	sol: sol,
    	Sopf: Sopf,
    	sopf: sopf,
    	spades: spades,
    	spadesuit: spadesuit,
    	spar: spar,
    	sqcap: sqcap,
    	sqcaps: sqcaps,
    	sqcup: sqcup,
    	sqcups: sqcups,
    	Sqrt: Sqrt,
    	sqsub: sqsub,
    	sqsube: sqsube,
    	sqsubset: sqsubset,
    	sqsubseteq: sqsubseteq,
    	sqsup: sqsup,
    	sqsupe: sqsupe,
    	sqsupset: sqsupset,
    	sqsupseteq: sqsupseteq,
    	square: square,
    	Square: Square,
    	SquareIntersection: SquareIntersection,
    	SquareSubset: SquareSubset,
    	SquareSubsetEqual: SquareSubsetEqual,
    	SquareSuperset: SquareSuperset,
    	SquareSupersetEqual: SquareSupersetEqual,
    	SquareUnion: SquareUnion,
    	squarf: squarf,
    	squ: squ,
    	squf: squf,
    	srarr: srarr,
    	Sscr: Sscr,
    	sscr: sscr,
    	ssetmn: ssetmn,
    	ssmile: ssmile,
    	sstarf: sstarf,
    	Star: Star,
    	star: star,
    	starf: starf,
    	straightepsilon: straightepsilon,
    	straightphi: straightphi,
    	strns: strns,
    	sub: sub,
    	Sub: Sub,
    	subdot: subdot,
    	subE: subE,
    	sube: sube,
    	subedot: subedot,
    	submult: submult,
    	subnE: subnE,
    	subne: subne,
    	subplus: subplus,
    	subrarr: subrarr,
    	subset: subset,
    	Subset: Subset,
    	subseteq: subseteq,
    	subseteqq: subseteqq,
    	SubsetEqual: SubsetEqual,
    	subsetneq: subsetneq,
    	subsetneqq: subsetneqq,
    	subsim: subsim,
    	subsub: subsub,
    	subsup: subsup,
    	succapprox: succapprox,
    	succ: succ,
    	succcurlyeq: succcurlyeq,
    	Succeeds: Succeeds,
    	SucceedsEqual: SucceedsEqual,
    	SucceedsSlantEqual: SucceedsSlantEqual,
    	SucceedsTilde: SucceedsTilde,
    	succeq: succeq,
    	succnapprox: succnapprox,
    	succneqq: succneqq,
    	succnsim: succnsim,
    	succsim: succsim,
    	SuchThat: SuchThat,
    	sum: sum,
    	Sum: Sum,
    	sung: sung,
    	sup1: sup1,
    	sup2: sup2,
    	sup3: sup3,
    	sup: sup,
    	Sup: Sup,
    	supdot: supdot,
    	supdsub: supdsub,
    	supE: supE,
    	supe: supe,
    	supedot: supedot,
    	Superset: Superset,
    	SupersetEqual: SupersetEqual,
    	suphsol: suphsol,
    	suphsub: suphsub,
    	suplarr: suplarr,
    	supmult: supmult,
    	supnE: supnE,
    	supne: supne,
    	supplus: supplus,
    	supset: supset,
    	Supset: Supset,
    	supseteq: supseteq,
    	supseteqq: supseteqq,
    	supsetneq: supsetneq,
    	supsetneqq: supsetneqq,
    	supsim: supsim,
    	supsub: supsub,
    	supsup: supsup,
    	swarhk: swarhk,
    	swarr: swarr,
    	swArr: swArr,
    	swarrow: swarrow,
    	swnwar: swnwar,
    	szlig: szlig,
    	Tab: Tab,
    	target: target,
    	Tau: Tau,
    	tau: tau,
    	tbrk: tbrk,
    	Tcaron: Tcaron,
    	tcaron: tcaron,
    	Tcedil: Tcedil,
    	tcedil: tcedil,
    	Tcy: Tcy,
    	tcy: tcy,
    	tdot: tdot,
    	telrec: telrec,
    	Tfr: Tfr,
    	tfr: tfr,
    	there4: there4,
    	therefore: therefore,
    	Therefore: Therefore,
    	Theta: Theta,
    	theta: theta,
    	thetasym: thetasym,
    	thetav: thetav,
    	thickapprox: thickapprox,
    	thicksim: thicksim,
    	ThickSpace: ThickSpace,
    	ThinSpace: ThinSpace,
    	thinsp: thinsp,
    	thkap: thkap,
    	thksim: thksim,
    	THORN: THORN,
    	thorn: thorn,
    	tilde: tilde,
    	Tilde: Tilde,
    	TildeEqual: TildeEqual,
    	TildeFullEqual: TildeFullEqual,
    	TildeTilde: TildeTilde,
    	timesbar: timesbar,
    	timesb: timesb,
    	times: times,
    	timesd: timesd,
    	tint: tint,
    	toea: toea,
    	topbot: topbot,
    	topcir: topcir,
    	top: top,
    	Topf: Topf,
    	topf: topf,
    	topfork: topfork,
    	tosa: tosa,
    	tprime: tprime,
    	trade: trade,
    	TRADE: TRADE,
    	triangle: triangle,
    	triangledown: triangledown,
    	triangleleft: triangleleft,
    	trianglelefteq: trianglelefteq,
    	triangleq: triangleq,
    	triangleright: triangleright,
    	trianglerighteq: trianglerighteq,
    	tridot: tridot,
    	trie: trie,
    	triminus: triminus,
    	TripleDot: TripleDot,
    	triplus: triplus,
    	trisb: trisb,
    	tritime: tritime,
    	trpezium: trpezium,
    	Tscr: Tscr,
    	tscr: tscr,
    	TScy: TScy,
    	tscy: tscy,
    	TSHcy: TSHcy,
    	tshcy: tshcy,
    	Tstrok: Tstrok,
    	tstrok: tstrok,
    	twixt: twixt,
    	twoheadleftarrow: twoheadleftarrow,
    	twoheadrightarrow: twoheadrightarrow,
    	Uacute: Uacute,
    	uacute: uacute,
    	uarr: uarr,
    	Uarr: Uarr,
    	uArr: uArr,
    	Uarrocir: Uarrocir,
    	Ubrcy: Ubrcy,
    	ubrcy: ubrcy,
    	Ubreve: Ubreve,
    	ubreve: ubreve,
    	Ucirc: Ucirc,
    	ucirc: ucirc,
    	Ucy: Ucy,
    	ucy: ucy,
    	udarr: udarr,
    	Udblac: Udblac,
    	udblac: udblac,
    	udhar: udhar,
    	ufisht: ufisht,
    	Ufr: Ufr,
    	ufr: ufr,
    	Ugrave: Ugrave,
    	ugrave: ugrave,
    	uHar: uHar,
    	uharl: uharl,
    	uharr: uharr,
    	uhblk: uhblk,
    	ulcorn: ulcorn,
    	ulcorner: ulcorner,
    	ulcrop: ulcrop,
    	ultri: ultri,
    	Umacr: Umacr,
    	umacr: umacr,
    	uml: uml,
    	UnderBar: UnderBar,
    	UnderBrace: UnderBrace,
    	UnderBracket: UnderBracket,
    	UnderParenthesis: UnderParenthesis,
    	Union: Union,
    	UnionPlus: UnionPlus,
    	Uogon: Uogon,
    	uogon: uogon,
    	Uopf: Uopf,
    	uopf: uopf,
    	UpArrowBar: UpArrowBar,
    	uparrow: uparrow,
    	UpArrow: UpArrow,
    	Uparrow: Uparrow,
    	UpArrowDownArrow: UpArrowDownArrow,
    	updownarrow: updownarrow,
    	UpDownArrow: UpDownArrow,
    	Updownarrow: Updownarrow,
    	UpEquilibrium: UpEquilibrium,
    	upharpoonleft: upharpoonleft,
    	upharpoonright: upharpoonright,
    	uplus: uplus,
    	UpperLeftArrow: UpperLeftArrow,
    	UpperRightArrow: UpperRightArrow,
    	upsi: upsi,
    	Upsi: Upsi,
    	upsih: upsih,
    	Upsilon: Upsilon,
    	upsilon: upsilon,
    	UpTeeArrow: UpTeeArrow,
    	UpTee: UpTee,
    	upuparrows: upuparrows,
    	urcorn: urcorn,
    	urcorner: urcorner,
    	urcrop: urcrop,
    	Uring: Uring,
    	uring: uring,
    	urtri: urtri,
    	Uscr: Uscr,
    	uscr: uscr,
    	utdot: utdot,
    	Utilde: Utilde,
    	utilde: utilde,
    	utri: utri,
    	utrif: utrif,
    	uuarr: uuarr,
    	Uuml: Uuml,
    	uuml: uuml,
    	uwangle: uwangle,
    	vangrt: vangrt,
    	varepsilon: varepsilon,
    	varkappa: varkappa,
    	varnothing: varnothing,
    	varphi: varphi,
    	varpi: varpi,
    	varpropto: varpropto,
    	varr: varr,
    	vArr: vArr,
    	varrho: varrho,
    	varsigma: varsigma,
    	varsubsetneq: varsubsetneq,
    	varsubsetneqq: varsubsetneqq,
    	varsupsetneq: varsupsetneq,
    	varsupsetneqq: varsupsetneqq,
    	vartheta: vartheta,
    	vartriangleleft: vartriangleleft,
    	vartriangleright: vartriangleright,
    	vBar: vBar,
    	Vbar: Vbar,
    	vBarv: vBarv,
    	Vcy: Vcy,
    	vcy: vcy,
    	vdash: vdash,
    	vDash: vDash,
    	Vdash: Vdash,
    	VDash: VDash,
    	Vdashl: Vdashl,
    	veebar: veebar,
    	vee: vee,
    	Vee: Vee,
    	veeeq: veeeq,
    	vellip: vellip,
    	verbar: verbar,
    	Verbar: Verbar,
    	vert: vert,
    	Vert: Vert,
    	VerticalBar: VerticalBar,
    	VerticalLine: VerticalLine,
    	VerticalSeparator: VerticalSeparator,
    	VerticalTilde: VerticalTilde,
    	VeryThinSpace: VeryThinSpace,
    	Vfr: Vfr,
    	vfr: vfr,
    	vltri: vltri,
    	vnsub: vnsub,
    	vnsup: vnsup,
    	Vopf: Vopf,
    	vopf: vopf,
    	vprop: vprop,
    	vrtri: vrtri,
    	Vscr: Vscr,
    	vscr: vscr,
    	vsubnE: vsubnE,
    	vsubne: vsubne,
    	vsupnE: vsupnE,
    	vsupne: vsupne,
    	Vvdash: Vvdash,
    	vzigzag: vzigzag,
    	Wcirc: Wcirc,
    	wcirc: wcirc,
    	wedbar: wedbar,
    	wedge: wedge,
    	Wedge: Wedge,
    	wedgeq: wedgeq,
    	weierp: weierp,
    	Wfr: Wfr,
    	wfr: wfr,
    	Wopf: Wopf,
    	wopf: wopf,
    	wp: wp,
    	wr: wr,
    	wreath: wreath,
    	Wscr: Wscr,
    	wscr: wscr,
    	xcap: xcap,
    	xcirc: xcirc,
    	xcup: xcup,
    	xdtri: xdtri,
    	Xfr: Xfr,
    	xfr: xfr,
    	xharr: xharr,
    	xhArr: xhArr,
    	Xi: Xi,
    	xi: xi,
    	xlarr: xlarr,
    	xlArr: xlArr,
    	xmap: xmap,
    	xnis: xnis,
    	xodot: xodot,
    	Xopf: Xopf,
    	xopf: xopf,
    	xoplus: xoplus,
    	xotime: xotime,
    	xrarr: xrarr,
    	xrArr: xrArr,
    	Xscr: Xscr,
    	xscr: xscr,
    	xsqcup: xsqcup,
    	xuplus: xuplus,
    	xutri: xutri,
    	xvee: xvee,
    	xwedge: xwedge,
    	Yacute: Yacute,
    	yacute: yacute,
    	YAcy: YAcy,
    	yacy: yacy,
    	Ycirc: Ycirc,
    	ycirc: ycirc,
    	Ycy: Ycy,
    	ycy: ycy,
    	yen: yen,
    	Yfr: Yfr,
    	yfr: yfr,
    	YIcy: YIcy,
    	yicy: yicy,
    	Yopf: Yopf,
    	yopf: yopf,
    	Yscr: Yscr,
    	yscr: yscr,
    	YUcy: YUcy,
    	yucy: yucy,
    	yuml: yuml,
    	Yuml: Yuml,
    	Zacute: Zacute,
    	zacute: zacute,
    	Zcaron: Zcaron,
    	zcaron: zcaron,
    	Zcy: Zcy,
    	zcy: zcy,
    	Zdot: Zdot,
    	zdot: zdot,
    	zeetrf: zeetrf,
    	ZeroWidthSpace: ZeroWidthSpace,
    	Zeta: Zeta,
    	zeta: zeta,
    	zfr: zfr,
    	Zfr: Zfr,
    	ZHcy: ZHcy,
    	zhcy: zhcy,
    	zigrarr: zigrarr,
    	zopf: zopf,
    	Zopf: Zopf,
    	Zscr: Zscr,
    	zscr: zscr,
    	zwj: zwj,
    	zwnj: zwnj
    };

    var entities$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Aacute: Aacute,
        aacute: aacute,
        Abreve: Abreve,
        abreve: abreve,
        ac: ac,
        acd: acd,
        acE: acE,
        Acirc: Acirc,
        acirc: acirc,
        acute: acute,
        Acy: Acy,
        acy: acy,
        AElig: AElig,
        aelig: aelig,
        af: af,
        Afr: Afr,
        afr: afr,
        Agrave: Agrave,
        agrave: agrave,
        alefsym: alefsym,
        aleph: aleph,
        Alpha: Alpha,
        alpha: alpha,
        Amacr: Amacr,
        amacr: amacr,
        amalg: amalg,
        amp: amp,
        AMP: AMP,
        andand: andand,
        And: And,
        and: and,
        andd: andd,
        andslope: andslope,
        andv: andv,
        ang: ang,
        ange: ange,
        angle: angle,
        angmsdaa: angmsdaa,
        angmsdab: angmsdab,
        angmsdac: angmsdac,
        angmsdad: angmsdad,
        angmsdae: angmsdae,
        angmsdaf: angmsdaf,
        angmsdag: angmsdag,
        angmsdah: angmsdah,
        angmsd: angmsd,
        angrt: angrt,
        angrtvb: angrtvb,
        angrtvbd: angrtvbd,
        angsph: angsph,
        angst: angst,
        angzarr: angzarr,
        Aogon: Aogon,
        aogon: aogon,
        Aopf: Aopf,
        aopf: aopf,
        apacir: apacir,
        ap: ap,
        apE: apE,
        ape: ape,
        apid: apid,
        apos: apos,
        ApplyFunction: ApplyFunction,
        approx: approx,
        approxeq: approxeq,
        Aring: Aring,
        aring: aring,
        Ascr: Ascr,
        ascr: ascr,
        Assign: Assign,
        ast: ast,
        asymp: asymp,
        asympeq: asympeq,
        Atilde: Atilde,
        atilde: atilde,
        Auml: Auml,
        auml: auml,
        awconint: awconint,
        awint: awint,
        backcong: backcong,
        backepsilon: backepsilon,
        backprime: backprime,
        backsim: backsim,
        backsimeq: backsimeq,
        Backslash: Backslash,
        Barv: Barv,
        barvee: barvee,
        barwed: barwed,
        Barwed: Barwed,
        barwedge: barwedge,
        bbrk: bbrk,
        bbrktbrk: bbrktbrk,
        bcong: bcong,
        Bcy: Bcy,
        bcy: bcy,
        bdquo: bdquo,
        becaus: becaus,
        because: because,
        Because: Because,
        bemptyv: bemptyv,
        bepsi: bepsi,
        bernou: bernou,
        Bernoullis: Bernoullis,
        Beta: Beta,
        beta: beta,
        beth: beth,
        between: between,
        Bfr: Bfr,
        bfr: bfr,
        bigcap: bigcap,
        bigcirc: bigcirc,
        bigcup: bigcup,
        bigodot: bigodot,
        bigoplus: bigoplus,
        bigotimes: bigotimes,
        bigsqcup: bigsqcup,
        bigstar: bigstar,
        bigtriangledown: bigtriangledown,
        bigtriangleup: bigtriangleup,
        biguplus: biguplus,
        bigvee: bigvee,
        bigwedge: bigwedge,
        bkarow: bkarow,
        blacklozenge: blacklozenge,
        blacksquare: blacksquare,
        blacktriangle: blacktriangle,
        blacktriangledown: blacktriangledown,
        blacktriangleleft: blacktriangleleft,
        blacktriangleright: blacktriangleright,
        blank: blank,
        blk12: blk12,
        blk14: blk14,
        blk34: blk34,
        block: block,
        bne: bne,
        bnequiv: bnequiv,
        bNot: bNot,
        bnot: bnot,
        Bopf: Bopf,
        bopf: bopf,
        bot: bot,
        bottom: bottom,
        bowtie: bowtie,
        boxbox: boxbox,
        boxdl: boxdl,
        boxdL: boxdL,
        boxDl: boxDl,
        boxDL: boxDL,
        boxdr: boxdr,
        boxdR: boxdR,
        boxDr: boxDr,
        boxDR: boxDR,
        boxh: boxh,
        boxH: boxH,
        boxhd: boxhd,
        boxHd: boxHd,
        boxhD: boxhD,
        boxHD: boxHD,
        boxhu: boxhu,
        boxHu: boxHu,
        boxhU: boxhU,
        boxHU: boxHU,
        boxminus: boxminus,
        boxplus: boxplus,
        boxtimes: boxtimes,
        boxul: boxul,
        boxuL: boxuL,
        boxUl: boxUl,
        boxUL: boxUL,
        boxur: boxur,
        boxuR: boxuR,
        boxUr: boxUr,
        boxUR: boxUR,
        boxv: boxv,
        boxV: boxV,
        boxvh: boxvh,
        boxvH: boxvH,
        boxVh: boxVh,
        boxVH: boxVH,
        boxvl: boxvl,
        boxvL: boxvL,
        boxVl: boxVl,
        boxVL: boxVL,
        boxvr: boxvr,
        boxvR: boxvR,
        boxVr: boxVr,
        boxVR: boxVR,
        bprime: bprime,
        breve: breve,
        Breve: Breve,
        brvbar: brvbar,
        bscr: bscr,
        Bscr: Bscr,
        bsemi: bsemi,
        bsim: bsim,
        bsime: bsime,
        bsolb: bsolb,
        bsol: bsol,
        bsolhsub: bsolhsub,
        bull: bull,
        bullet: bullet,
        bump: bump,
        bumpE: bumpE,
        bumpe: bumpe,
        Bumpeq: Bumpeq,
        bumpeq: bumpeq,
        Cacute: Cacute,
        cacute: cacute,
        capand: capand,
        capbrcup: capbrcup,
        capcap: capcap,
        cap: cap,
        Cap: Cap,
        capcup: capcup,
        capdot: capdot,
        CapitalDifferentialD: CapitalDifferentialD,
        caps: caps,
        caret: caret,
        caron: caron,
        Cayleys: Cayleys,
        ccaps: ccaps,
        Ccaron: Ccaron,
        ccaron: ccaron,
        Ccedil: Ccedil,
        ccedil: ccedil,
        Ccirc: Ccirc,
        ccirc: ccirc,
        Cconint: Cconint,
        ccups: ccups,
        ccupssm: ccupssm,
        Cdot: Cdot,
        cdot: cdot,
        cedil: cedil,
        Cedilla: Cedilla,
        cemptyv: cemptyv,
        cent: cent,
        centerdot: centerdot,
        CenterDot: CenterDot,
        cfr: cfr,
        Cfr: Cfr,
        CHcy: CHcy,
        chcy: chcy,
        check: check,
        checkmark: checkmark,
        Chi: Chi,
        chi: chi,
        circ: circ,
        circeq: circeq,
        circlearrowleft: circlearrowleft,
        circlearrowright: circlearrowright,
        circledast: circledast,
        circledcirc: circledcirc,
        circleddash: circleddash,
        CircleDot: CircleDot,
        circledR: circledR,
        circledS: circledS,
        CircleMinus: CircleMinus,
        CirclePlus: CirclePlus,
        CircleTimes: CircleTimes,
        cir: cir,
        cirE: cirE,
        cire: cire,
        cirfnint: cirfnint,
        cirmid: cirmid,
        cirscir: cirscir,
        ClockwiseContourIntegral: ClockwiseContourIntegral,
        CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
        CloseCurlyQuote: CloseCurlyQuote,
        clubs: clubs,
        clubsuit: clubsuit,
        colon: colon,
        Colon: Colon,
        Colone: Colone,
        colone: colone,
        coloneq: coloneq,
        comma: comma,
        commat: commat,
        comp: comp,
        compfn: compfn,
        complement: complement,
        complexes: complexes,
        cong: cong,
        congdot: congdot,
        Congruent: Congruent,
        conint: conint,
        Conint: Conint,
        ContourIntegral: ContourIntegral,
        copf: copf,
        Copf: Copf,
        coprod: coprod,
        Coproduct: Coproduct,
        copy: copy,
        COPY: COPY,
        copysr: copysr,
        CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
        crarr: crarr,
        cross: cross,
        Cross: Cross,
        Cscr: Cscr,
        cscr: cscr,
        csub: csub,
        csube: csube,
        csup: csup,
        csupe: csupe,
        ctdot: ctdot,
        cudarrl: cudarrl,
        cudarrr: cudarrr,
        cuepr: cuepr,
        cuesc: cuesc,
        cularr: cularr,
        cularrp: cularrp,
        cupbrcap: cupbrcap,
        cupcap: cupcap,
        CupCap: CupCap,
        cup: cup,
        Cup: Cup,
        cupcup: cupcup,
        cupdot: cupdot,
        cupor: cupor,
        cups: cups,
        curarr: curarr,
        curarrm: curarrm,
        curlyeqprec: curlyeqprec,
        curlyeqsucc: curlyeqsucc,
        curlyvee: curlyvee,
        curlywedge: curlywedge,
        curren: curren,
        curvearrowleft: curvearrowleft,
        curvearrowright: curvearrowright,
        cuvee: cuvee,
        cuwed: cuwed,
        cwconint: cwconint,
        cwint: cwint,
        cylcty: cylcty,
        dagger: dagger,
        Dagger: Dagger,
        daleth: daleth,
        darr: darr,
        Darr: Darr,
        dArr: dArr,
        dash: dash,
        Dashv: Dashv,
        dashv: dashv,
        dbkarow: dbkarow,
        dblac: dblac,
        Dcaron: Dcaron,
        dcaron: dcaron,
        Dcy: Dcy,
        dcy: dcy,
        ddagger: ddagger,
        ddarr: ddarr,
        DD: DD,
        dd: dd,
        DDotrahd: DDotrahd,
        ddotseq: ddotseq,
        deg: deg,
        Del: Del,
        Delta: Delta,
        delta: delta,
        demptyv: demptyv,
        dfisht: dfisht,
        Dfr: Dfr,
        dfr: dfr,
        dHar: dHar,
        dharl: dharl,
        dharr: dharr,
        DiacriticalAcute: DiacriticalAcute,
        DiacriticalDot: DiacriticalDot,
        DiacriticalDoubleAcute: DiacriticalDoubleAcute,
        DiacriticalGrave: DiacriticalGrave,
        DiacriticalTilde: DiacriticalTilde,
        diam: diam,
        diamond: diamond,
        Diamond: Diamond,
        diamondsuit: diamondsuit,
        diams: diams,
        die: die,
        DifferentialD: DifferentialD,
        digamma: digamma,
        disin: disin,
        div: div,
        divide: divide,
        divideontimes: divideontimes,
        divonx: divonx,
        DJcy: DJcy,
        djcy: djcy,
        dlcorn: dlcorn,
        dlcrop: dlcrop,
        dollar: dollar,
        Dopf: Dopf,
        dopf: dopf,
        Dot: Dot,
        dot: dot,
        DotDot: DotDot,
        doteq: doteq,
        doteqdot: doteqdot,
        DotEqual: DotEqual,
        dotminus: dotminus,
        dotplus: dotplus,
        dotsquare: dotsquare,
        doublebarwedge: doublebarwedge,
        DoubleContourIntegral: DoubleContourIntegral,
        DoubleDot: DoubleDot,
        DoubleDownArrow: DoubleDownArrow,
        DoubleLeftArrow: DoubleLeftArrow,
        DoubleLeftRightArrow: DoubleLeftRightArrow,
        DoubleLeftTee: DoubleLeftTee,
        DoubleLongLeftArrow: DoubleLongLeftArrow,
        DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
        DoubleLongRightArrow: DoubleLongRightArrow,
        DoubleRightArrow: DoubleRightArrow,
        DoubleRightTee: DoubleRightTee,
        DoubleUpArrow: DoubleUpArrow,
        DoubleUpDownArrow: DoubleUpDownArrow,
        DoubleVerticalBar: DoubleVerticalBar,
        DownArrowBar: DownArrowBar,
        downarrow: downarrow,
        DownArrow: DownArrow,
        Downarrow: Downarrow,
        DownArrowUpArrow: DownArrowUpArrow,
        DownBreve: DownBreve,
        downdownarrows: downdownarrows,
        downharpoonleft: downharpoonleft,
        downharpoonright: downharpoonright,
        DownLeftRightVector: DownLeftRightVector,
        DownLeftTeeVector: DownLeftTeeVector,
        DownLeftVectorBar: DownLeftVectorBar,
        DownLeftVector: DownLeftVector,
        DownRightTeeVector: DownRightTeeVector,
        DownRightVectorBar: DownRightVectorBar,
        DownRightVector: DownRightVector,
        DownTeeArrow: DownTeeArrow,
        DownTee: DownTee,
        drbkarow: drbkarow,
        drcorn: drcorn,
        drcrop: drcrop,
        Dscr: Dscr,
        dscr: dscr,
        DScy: DScy,
        dscy: dscy,
        dsol: dsol,
        Dstrok: Dstrok,
        dstrok: dstrok,
        dtdot: dtdot,
        dtri: dtri,
        dtrif: dtrif,
        duarr: duarr,
        duhar: duhar,
        dwangle: dwangle,
        DZcy: DZcy,
        dzcy: dzcy,
        dzigrarr: dzigrarr,
        Eacute: Eacute,
        eacute: eacute,
        easter: easter,
        Ecaron: Ecaron,
        ecaron: ecaron,
        Ecirc: Ecirc,
        ecirc: ecirc,
        ecir: ecir,
        ecolon: ecolon,
        Ecy: Ecy,
        ecy: ecy,
        eDDot: eDDot,
        Edot: Edot,
        edot: edot,
        eDot: eDot,
        ee: ee,
        efDot: efDot,
        Efr: Efr,
        efr: efr,
        eg: eg,
        Egrave: Egrave,
        egrave: egrave,
        egs: egs,
        egsdot: egsdot,
        el: el,
        Element: Element,
        elinters: elinters,
        ell: ell,
        els: els,
        elsdot: elsdot,
        Emacr: Emacr,
        emacr: emacr,
        empty: empty,
        emptyset: emptyset,
        EmptySmallSquare: EmptySmallSquare,
        emptyv: emptyv,
        EmptyVerySmallSquare: EmptyVerySmallSquare,
        emsp13: emsp13,
        emsp14: emsp14,
        emsp: emsp,
        ENG: ENG,
        eng: eng,
        ensp: ensp,
        Eogon: Eogon,
        eogon: eogon,
        Eopf: Eopf,
        eopf: eopf,
        epar: epar,
        eparsl: eparsl,
        eplus: eplus,
        epsi: epsi,
        Epsilon: Epsilon,
        epsilon: epsilon,
        epsiv: epsiv,
        eqcirc: eqcirc,
        eqcolon: eqcolon,
        eqsim: eqsim,
        eqslantgtr: eqslantgtr,
        eqslantless: eqslantless,
        Equal: Equal,
        equals: equals,
        EqualTilde: EqualTilde,
        equest: equest,
        Equilibrium: Equilibrium,
        equiv: equiv,
        equivDD: equivDD,
        eqvparsl: eqvparsl,
        erarr: erarr,
        erDot: erDot,
        escr: escr,
        Escr: Escr,
        esdot: esdot,
        Esim: Esim,
        esim: esim,
        Eta: Eta,
        eta: eta,
        ETH: ETH,
        eth: eth,
        Euml: Euml,
        euml: euml,
        euro: euro,
        excl: excl,
        exist: exist,
        Exists: Exists,
        expectation: expectation,
        exponentiale: exponentiale,
        ExponentialE: ExponentialE,
        fallingdotseq: fallingdotseq,
        Fcy: Fcy,
        fcy: fcy,
        female: female,
        ffilig: ffilig,
        fflig: fflig,
        ffllig: ffllig,
        Ffr: Ffr,
        ffr: ffr,
        filig: filig,
        FilledSmallSquare: FilledSmallSquare,
        FilledVerySmallSquare: FilledVerySmallSquare,
        fjlig: fjlig,
        flat: flat,
        fllig: fllig,
        fltns: fltns,
        fnof: fnof,
        Fopf: Fopf,
        fopf: fopf,
        forall: forall,
        ForAll: ForAll,
        fork: fork,
        forkv: forkv,
        Fouriertrf: Fouriertrf,
        fpartint: fpartint,
        frac12: frac12,
        frac13: frac13,
        frac14: frac14,
        frac15: frac15,
        frac16: frac16,
        frac18: frac18,
        frac23: frac23,
        frac25: frac25,
        frac34: frac34,
        frac35: frac35,
        frac38: frac38,
        frac45: frac45,
        frac56: frac56,
        frac58: frac58,
        frac78: frac78,
        frasl: frasl,
        frown: frown,
        fscr: fscr,
        Fscr: Fscr,
        gacute: gacute,
        Gamma: Gamma,
        gamma: gamma,
        Gammad: Gammad,
        gammad: gammad,
        gap: gap,
        Gbreve: Gbreve,
        gbreve: gbreve,
        Gcedil: Gcedil,
        Gcirc: Gcirc,
        gcirc: gcirc,
        Gcy: Gcy,
        gcy: gcy,
        Gdot: Gdot,
        gdot: gdot,
        ge: ge,
        gE: gE,
        gEl: gEl,
        gel: gel,
        geq: geq,
        geqq: geqq,
        geqslant: geqslant,
        gescc: gescc,
        ges: ges,
        gesdot: gesdot,
        gesdoto: gesdoto,
        gesdotol: gesdotol,
        gesl: gesl,
        gesles: gesles,
        Gfr: Gfr,
        gfr: gfr,
        gg: gg,
        Gg: Gg,
        ggg: ggg,
        gimel: gimel,
        GJcy: GJcy,
        gjcy: gjcy,
        gla: gla,
        gl: gl,
        glE: glE,
        glj: glj,
        gnap: gnap,
        gnapprox: gnapprox,
        gne: gne,
        gnE: gnE,
        gneq: gneq,
        gneqq: gneqq,
        gnsim: gnsim,
        Gopf: Gopf,
        gopf: gopf,
        grave: grave,
        GreaterEqual: GreaterEqual,
        GreaterEqualLess: GreaterEqualLess,
        GreaterFullEqual: GreaterFullEqual,
        GreaterGreater: GreaterGreater,
        GreaterLess: GreaterLess,
        GreaterSlantEqual: GreaterSlantEqual,
        GreaterTilde: GreaterTilde,
        Gscr: Gscr,
        gscr: gscr,
        gsim: gsim,
        gsime: gsime,
        gsiml: gsiml,
        gtcc: gtcc,
        gtcir: gtcir,
        gt: gt,
        GT: GT,
        Gt: Gt,
        gtdot: gtdot,
        gtlPar: gtlPar,
        gtquest: gtquest,
        gtrapprox: gtrapprox,
        gtrarr: gtrarr,
        gtrdot: gtrdot,
        gtreqless: gtreqless,
        gtreqqless: gtreqqless,
        gtrless: gtrless,
        gtrsim: gtrsim,
        gvertneqq: gvertneqq,
        gvnE: gvnE,
        Hacek: Hacek,
        hairsp: hairsp,
        half: half,
        hamilt: hamilt,
        HARDcy: HARDcy,
        hardcy: hardcy,
        harrcir: harrcir,
        harr: harr,
        hArr: hArr,
        harrw: harrw,
        Hat: Hat,
        hbar: hbar,
        Hcirc: Hcirc,
        hcirc: hcirc,
        hearts: hearts,
        heartsuit: heartsuit,
        hellip: hellip,
        hercon: hercon,
        hfr: hfr,
        Hfr: Hfr,
        HilbertSpace: HilbertSpace,
        hksearow: hksearow,
        hkswarow: hkswarow,
        hoarr: hoarr,
        homtht: homtht,
        hookleftarrow: hookleftarrow,
        hookrightarrow: hookrightarrow,
        hopf: hopf,
        Hopf: Hopf,
        horbar: horbar,
        HorizontalLine: HorizontalLine,
        hscr: hscr,
        Hscr: Hscr,
        hslash: hslash,
        Hstrok: Hstrok,
        hstrok: hstrok,
        HumpDownHump: HumpDownHump,
        HumpEqual: HumpEqual,
        hybull: hybull,
        hyphen: hyphen,
        Iacute: Iacute,
        iacute: iacute,
        ic: ic,
        Icirc: Icirc,
        icirc: icirc,
        Icy: Icy,
        icy: icy,
        Idot: Idot,
        IEcy: IEcy,
        iecy: iecy,
        iexcl: iexcl,
        iff: iff,
        ifr: ifr,
        Ifr: Ifr,
        Igrave: Igrave,
        igrave: igrave,
        ii: ii,
        iiiint: iiiint,
        iiint: iiint,
        iinfin: iinfin,
        iiota: iiota,
        IJlig: IJlig,
        ijlig: ijlig,
        Imacr: Imacr,
        imacr: imacr,
        image: image$1,
        ImaginaryI: ImaginaryI,
        imagline: imagline,
        imagpart: imagpart,
        imath: imath,
        Im: Im,
        imof: imof,
        imped: imped,
        Implies: Implies,
        incare: incare,
        infin: infin,
        infintie: infintie,
        inodot: inodot,
        intcal: intcal,
        int: int,
        Int: Int,
        integers: integers,
        Integral: Integral,
        intercal: intercal,
        Intersection: Intersection,
        intlarhk: intlarhk,
        intprod: intprod,
        InvisibleComma: InvisibleComma,
        InvisibleTimes: InvisibleTimes,
        IOcy: IOcy,
        iocy: iocy,
        Iogon: Iogon,
        iogon: iogon,
        Iopf: Iopf,
        iopf: iopf,
        Iota: Iota,
        iota: iota,
        iprod: iprod,
        iquest: iquest,
        iscr: iscr,
        Iscr: Iscr,
        isin: isin,
        isindot: isindot,
        isinE: isinE,
        isins: isins,
        isinsv: isinsv,
        isinv: isinv,
        it: it,
        Itilde: Itilde,
        itilde: itilde,
        Iukcy: Iukcy,
        iukcy: iukcy,
        Iuml: Iuml,
        iuml: iuml,
        Jcirc: Jcirc,
        jcirc: jcirc,
        Jcy: Jcy,
        jcy: jcy,
        Jfr: Jfr,
        jfr: jfr,
        jmath: jmath,
        Jopf: Jopf,
        jopf: jopf,
        Jscr: Jscr,
        jscr: jscr,
        Jsercy: Jsercy,
        jsercy: jsercy,
        Jukcy: Jukcy,
        jukcy: jukcy,
        Kappa: Kappa,
        kappa: kappa,
        kappav: kappav,
        Kcedil: Kcedil,
        kcedil: kcedil,
        Kcy: Kcy,
        kcy: kcy,
        Kfr: Kfr,
        kfr: kfr,
        kgreen: kgreen,
        KHcy: KHcy,
        khcy: khcy,
        KJcy: KJcy,
        kjcy: kjcy,
        Kopf: Kopf,
        kopf: kopf,
        Kscr: Kscr,
        kscr: kscr,
        lAarr: lAarr,
        Lacute: Lacute,
        lacute: lacute,
        laemptyv: laemptyv,
        lagran: lagran,
        Lambda: Lambda,
        lambda: lambda,
        lang: lang,
        Lang: Lang,
        langd: langd,
        langle: langle,
        lap: lap,
        Laplacetrf: Laplacetrf,
        laquo: laquo,
        larrb: larrb,
        larrbfs: larrbfs,
        larr: larr,
        Larr: Larr,
        lArr: lArr,
        larrfs: larrfs,
        larrhk: larrhk,
        larrlp: larrlp,
        larrpl: larrpl,
        larrsim: larrsim,
        larrtl: larrtl,
        latail: latail,
        lAtail: lAtail,
        lat: lat,
        late: late,
        lates: lates,
        lbarr: lbarr,
        lBarr: lBarr,
        lbbrk: lbbrk,
        lbrace: lbrace,
        lbrack: lbrack,
        lbrke: lbrke,
        lbrksld: lbrksld,
        lbrkslu: lbrkslu,
        Lcaron: Lcaron,
        lcaron: lcaron,
        Lcedil: Lcedil,
        lcedil: lcedil,
        lceil: lceil,
        lcub: lcub,
        Lcy: Lcy,
        lcy: lcy,
        ldca: ldca,
        ldquo: ldquo,
        ldquor: ldquor,
        ldrdhar: ldrdhar,
        ldrushar: ldrushar,
        ldsh: ldsh,
        le: le,
        lE: lE,
        LeftAngleBracket: LeftAngleBracket,
        LeftArrowBar: LeftArrowBar,
        leftarrow: leftarrow,
        LeftArrow: LeftArrow,
        Leftarrow: Leftarrow,
        LeftArrowRightArrow: LeftArrowRightArrow,
        leftarrowtail: leftarrowtail,
        LeftCeiling: LeftCeiling,
        LeftDoubleBracket: LeftDoubleBracket,
        LeftDownTeeVector: LeftDownTeeVector,
        LeftDownVectorBar: LeftDownVectorBar,
        LeftDownVector: LeftDownVector,
        LeftFloor: LeftFloor,
        leftharpoondown: leftharpoondown,
        leftharpoonup: leftharpoonup,
        leftleftarrows: leftleftarrows,
        leftrightarrow: leftrightarrow,
        LeftRightArrow: LeftRightArrow,
        Leftrightarrow: Leftrightarrow,
        leftrightarrows: leftrightarrows,
        leftrightharpoons: leftrightharpoons,
        leftrightsquigarrow: leftrightsquigarrow,
        LeftRightVector: LeftRightVector,
        LeftTeeArrow: LeftTeeArrow,
        LeftTee: LeftTee,
        LeftTeeVector: LeftTeeVector,
        leftthreetimes: leftthreetimes,
        LeftTriangleBar: LeftTriangleBar,
        LeftTriangle: LeftTriangle,
        LeftTriangleEqual: LeftTriangleEqual,
        LeftUpDownVector: LeftUpDownVector,
        LeftUpTeeVector: LeftUpTeeVector,
        LeftUpVectorBar: LeftUpVectorBar,
        LeftUpVector: LeftUpVector,
        LeftVectorBar: LeftVectorBar,
        LeftVector: LeftVector,
        lEg: lEg,
        leg: leg,
        leq: leq,
        leqq: leqq,
        leqslant: leqslant,
        lescc: lescc,
        les: les,
        lesdot: lesdot,
        lesdoto: lesdoto,
        lesdotor: lesdotor,
        lesg: lesg,
        lesges: lesges,
        lessapprox: lessapprox,
        lessdot: lessdot,
        lesseqgtr: lesseqgtr,
        lesseqqgtr: lesseqqgtr,
        LessEqualGreater: LessEqualGreater,
        LessFullEqual: LessFullEqual,
        LessGreater: LessGreater,
        lessgtr: lessgtr,
        LessLess: LessLess,
        lesssim: lesssim,
        LessSlantEqual: LessSlantEqual,
        LessTilde: LessTilde,
        lfisht: lfisht,
        lfloor: lfloor,
        Lfr: Lfr,
        lfr: lfr,
        lg: lg,
        lgE: lgE,
        lHar: lHar,
        lhard: lhard,
        lharu: lharu,
        lharul: lharul,
        lhblk: lhblk,
        LJcy: LJcy,
        ljcy: ljcy,
        llarr: llarr,
        ll: ll,
        Ll: Ll,
        llcorner: llcorner,
        Lleftarrow: Lleftarrow,
        llhard: llhard,
        lltri: lltri,
        Lmidot: Lmidot,
        lmidot: lmidot,
        lmoustache: lmoustache,
        lmoust: lmoust,
        lnap: lnap,
        lnapprox: lnapprox,
        lne: lne,
        lnE: lnE,
        lneq: lneq,
        lneqq: lneqq,
        lnsim: lnsim,
        loang: loang,
        loarr: loarr,
        lobrk: lobrk,
        longleftarrow: longleftarrow,
        LongLeftArrow: LongLeftArrow,
        Longleftarrow: Longleftarrow,
        longleftrightarrow: longleftrightarrow,
        LongLeftRightArrow: LongLeftRightArrow,
        Longleftrightarrow: Longleftrightarrow,
        longmapsto: longmapsto,
        longrightarrow: longrightarrow,
        LongRightArrow: LongRightArrow,
        Longrightarrow: Longrightarrow,
        looparrowleft: looparrowleft,
        looparrowright: looparrowright,
        lopar: lopar,
        Lopf: Lopf,
        lopf: lopf,
        loplus: loplus,
        lotimes: lotimes,
        lowast: lowast,
        lowbar: lowbar,
        LowerLeftArrow: LowerLeftArrow,
        LowerRightArrow: LowerRightArrow,
        loz: loz,
        lozenge: lozenge,
        lozf: lozf,
        lpar: lpar,
        lparlt: lparlt,
        lrarr: lrarr,
        lrcorner: lrcorner,
        lrhar: lrhar,
        lrhard: lrhard,
        lrm: lrm,
        lrtri: lrtri,
        lsaquo: lsaquo,
        lscr: lscr,
        Lscr: Lscr,
        lsh: lsh,
        Lsh: Lsh,
        lsim: lsim,
        lsime: lsime,
        lsimg: lsimg,
        lsqb: lsqb,
        lsquo: lsquo,
        lsquor: lsquor,
        Lstrok: Lstrok,
        lstrok: lstrok,
        ltcc: ltcc,
        ltcir: ltcir,
        lt: lt,
        LT: LT,
        Lt: Lt,
        ltdot: ltdot,
        lthree: lthree,
        ltimes: ltimes,
        ltlarr: ltlarr,
        ltquest: ltquest,
        ltri: ltri,
        ltrie: ltrie,
        ltrif: ltrif,
        ltrPar: ltrPar,
        lurdshar: lurdshar,
        luruhar: luruhar,
        lvertneqq: lvertneqq,
        lvnE: lvnE,
        macr: macr,
        male: male,
        malt: malt,
        maltese: maltese,
        map: map,
        mapsto: mapsto,
        mapstodown: mapstodown,
        mapstoleft: mapstoleft,
        mapstoup: mapstoup,
        marker: marker,
        mcomma: mcomma,
        Mcy: Mcy,
        mcy: mcy,
        mdash: mdash,
        mDDot: mDDot,
        measuredangle: measuredangle,
        MediumSpace: MediumSpace,
        Mellintrf: Mellintrf,
        Mfr: Mfr,
        mfr: mfr,
        mho: mho,
        micro: micro,
        midast: midast,
        midcir: midcir,
        mid: mid,
        middot: middot,
        minusb: minusb,
        minus: minus,
        minusd: minusd,
        minusdu: minusdu,
        MinusPlus: MinusPlus,
        mlcp: mlcp,
        mldr: mldr,
        mnplus: mnplus,
        models: models,
        Mopf: Mopf,
        mopf: mopf,
        mp: mp,
        mscr: mscr,
        Mscr: Mscr,
        mstpos: mstpos,
        Mu: Mu,
        mu: mu,
        multimap: multimap,
        mumap: mumap,
        nabla: nabla,
        Nacute: Nacute,
        nacute: nacute,
        nang: nang,
        nap: nap,
        napE: napE,
        napid: napid,
        napos: napos,
        napprox: napprox,
        natural: natural,
        naturals: naturals,
        natur: natur,
        nbsp: nbsp,
        nbump: nbump,
        nbumpe: nbumpe,
        ncap: ncap,
        Ncaron: Ncaron,
        ncaron: ncaron,
        Ncedil: Ncedil,
        ncedil: ncedil,
        ncong: ncong,
        ncongdot: ncongdot,
        ncup: ncup,
        Ncy: Ncy,
        ncy: ncy,
        ndash: ndash,
        nearhk: nearhk,
        nearr: nearr,
        neArr: neArr,
        nearrow: nearrow,
        ne: ne,
        nedot: nedot,
        NegativeMediumSpace: NegativeMediumSpace,
        NegativeThickSpace: NegativeThickSpace,
        NegativeThinSpace: NegativeThinSpace,
        NegativeVeryThinSpace: NegativeVeryThinSpace,
        nequiv: nequiv,
        nesear: nesear,
        nesim: nesim,
        NestedGreaterGreater: NestedGreaterGreater,
        NestedLessLess: NestedLessLess,
        NewLine: NewLine,
        nexist: nexist,
        nexists: nexists,
        Nfr: Nfr,
        nfr: nfr,
        ngE: ngE,
        nge: nge,
        ngeq: ngeq,
        ngeqq: ngeqq,
        ngeqslant: ngeqslant,
        nges: nges,
        nGg: nGg,
        ngsim: ngsim,
        nGt: nGt,
        ngt: ngt,
        ngtr: ngtr,
        nGtv: nGtv,
        nharr: nharr,
        nhArr: nhArr,
        nhpar: nhpar,
        ni: ni,
        nis: nis,
        nisd: nisd,
        niv: niv,
        NJcy: NJcy,
        njcy: njcy,
        nlarr: nlarr,
        nlArr: nlArr,
        nldr: nldr,
        nlE: nlE,
        nle: nle,
        nleftarrow: nleftarrow,
        nLeftarrow: nLeftarrow,
        nleftrightarrow: nleftrightarrow,
        nLeftrightarrow: nLeftrightarrow,
        nleq: nleq,
        nleqq: nleqq,
        nleqslant: nleqslant,
        nles: nles,
        nless: nless,
        nLl: nLl,
        nlsim: nlsim,
        nLt: nLt,
        nlt: nlt,
        nltri: nltri,
        nltrie: nltrie,
        nLtv: nLtv,
        nmid: nmid,
        NoBreak: NoBreak,
        NonBreakingSpace: NonBreakingSpace,
        nopf: nopf,
        Nopf: Nopf,
        Not: Not,
        not: not,
        NotCongruent: NotCongruent,
        NotCupCap: NotCupCap,
        NotDoubleVerticalBar: NotDoubleVerticalBar,
        NotElement: NotElement,
        NotEqual: NotEqual,
        NotEqualTilde: NotEqualTilde,
        NotExists: NotExists,
        NotGreater: NotGreater,
        NotGreaterEqual: NotGreaterEqual,
        NotGreaterFullEqual: NotGreaterFullEqual,
        NotGreaterGreater: NotGreaterGreater,
        NotGreaterLess: NotGreaterLess,
        NotGreaterSlantEqual: NotGreaterSlantEqual,
        NotGreaterTilde: NotGreaterTilde,
        NotHumpDownHump: NotHumpDownHump,
        NotHumpEqual: NotHumpEqual,
        notin: notin,
        notindot: notindot,
        notinE: notinE,
        notinva: notinva,
        notinvb: notinvb,
        notinvc: notinvc,
        NotLeftTriangleBar: NotLeftTriangleBar,
        NotLeftTriangle: NotLeftTriangle,
        NotLeftTriangleEqual: NotLeftTriangleEqual,
        NotLess: NotLess,
        NotLessEqual: NotLessEqual,
        NotLessGreater: NotLessGreater,
        NotLessLess: NotLessLess,
        NotLessSlantEqual: NotLessSlantEqual,
        NotLessTilde: NotLessTilde,
        NotNestedGreaterGreater: NotNestedGreaterGreater,
        NotNestedLessLess: NotNestedLessLess,
        notni: notni,
        notniva: notniva,
        notnivb: notnivb,
        notnivc: notnivc,
        NotPrecedes: NotPrecedes,
        NotPrecedesEqual: NotPrecedesEqual,
        NotPrecedesSlantEqual: NotPrecedesSlantEqual,
        NotReverseElement: NotReverseElement,
        NotRightTriangleBar: NotRightTriangleBar,
        NotRightTriangle: NotRightTriangle,
        NotRightTriangleEqual: NotRightTriangleEqual,
        NotSquareSubset: NotSquareSubset,
        NotSquareSubsetEqual: NotSquareSubsetEqual,
        NotSquareSuperset: NotSquareSuperset,
        NotSquareSupersetEqual: NotSquareSupersetEqual,
        NotSubset: NotSubset,
        NotSubsetEqual: NotSubsetEqual,
        NotSucceeds: NotSucceeds,
        NotSucceedsEqual: NotSucceedsEqual,
        NotSucceedsSlantEqual: NotSucceedsSlantEqual,
        NotSucceedsTilde: NotSucceedsTilde,
        NotSuperset: NotSuperset,
        NotSupersetEqual: NotSupersetEqual,
        NotTilde: NotTilde,
        NotTildeEqual: NotTildeEqual,
        NotTildeFullEqual: NotTildeFullEqual,
        NotTildeTilde: NotTildeTilde,
        NotVerticalBar: NotVerticalBar,
        nparallel: nparallel,
        npar: npar,
        nparsl: nparsl,
        npart: npart,
        npolint: npolint,
        npr: npr,
        nprcue: nprcue,
        nprec: nprec,
        npreceq: npreceq,
        npre: npre,
        nrarrc: nrarrc,
        nrarr: nrarr,
        nrArr: nrArr,
        nrarrw: nrarrw,
        nrightarrow: nrightarrow,
        nRightarrow: nRightarrow,
        nrtri: nrtri,
        nrtrie: nrtrie,
        nsc: nsc,
        nsccue: nsccue,
        nsce: nsce,
        Nscr: Nscr,
        nscr: nscr,
        nshortmid: nshortmid,
        nshortparallel: nshortparallel,
        nsim: nsim,
        nsime: nsime,
        nsimeq: nsimeq,
        nsmid: nsmid,
        nspar: nspar,
        nsqsube: nsqsube,
        nsqsupe: nsqsupe,
        nsub: nsub,
        nsubE: nsubE,
        nsube: nsube,
        nsubset: nsubset,
        nsubseteq: nsubseteq,
        nsubseteqq: nsubseteqq,
        nsucc: nsucc,
        nsucceq: nsucceq,
        nsup: nsup,
        nsupE: nsupE,
        nsupe: nsupe,
        nsupset: nsupset,
        nsupseteq: nsupseteq,
        nsupseteqq: nsupseteqq,
        ntgl: ntgl,
        Ntilde: Ntilde,
        ntilde: ntilde,
        ntlg: ntlg,
        ntriangleleft: ntriangleleft,
        ntrianglelefteq: ntrianglelefteq,
        ntriangleright: ntriangleright,
        ntrianglerighteq: ntrianglerighteq,
        Nu: Nu,
        nu: nu,
        num: num,
        numero: numero,
        numsp: numsp,
        nvap: nvap,
        nvdash: nvdash,
        nvDash: nvDash,
        nVdash: nVdash,
        nVDash: nVDash,
        nvge: nvge,
        nvgt: nvgt,
        nvHarr: nvHarr,
        nvinfin: nvinfin,
        nvlArr: nvlArr,
        nvle: nvle,
        nvlt: nvlt,
        nvltrie: nvltrie,
        nvrArr: nvrArr,
        nvrtrie: nvrtrie,
        nvsim: nvsim,
        nwarhk: nwarhk,
        nwarr: nwarr,
        nwArr: nwArr,
        nwarrow: nwarrow,
        nwnear: nwnear,
        Oacute: Oacute,
        oacute: oacute,
        oast: oast,
        Ocirc: Ocirc,
        ocirc: ocirc,
        ocir: ocir,
        Ocy: Ocy,
        ocy: ocy,
        odash: odash,
        Odblac: Odblac,
        odblac: odblac,
        odiv: odiv,
        odot: odot,
        odsold: odsold,
        OElig: OElig,
        oelig: oelig,
        ofcir: ofcir,
        Ofr: Ofr,
        ofr: ofr,
        ogon: ogon,
        Ograve: Ograve,
        ograve: ograve,
        ogt: ogt,
        ohbar: ohbar,
        ohm: ohm,
        oint: oint,
        olarr: olarr,
        olcir: olcir,
        olcross: olcross,
        oline: oline,
        olt: olt,
        Omacr: Omacr,
        omacr: omacr,
        Omega: Omega,
        omega: omega,
        Omicron: Omicron,
        omicron: omicron,
        omid: omid,
        ominus: ominus,
        Oopf: Oopf,
        oopf: oopf,
        opar: opar,
        OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
        OpenCurlyQuote: OpenCurlyQuote,
        operp: operp,
        oplus: oplus,
        orarr: orarr,
        Or: Or,
        or: or,
        ord: ord,
        order: order,
        orderof: orderof,
        ordf: ordf,
        ordm: ordm,
        origof: origof,
        oror: oror,
        orslope: orslope,
        orv: orv,
        oS: oS,
        Oscr: Oscr,
        oscr: oscr,
        Oslash: Oslash,
        oslash: oslash,
        osol: osol,
        Otilde: Otilde,
        otilde: otilde,
        otimesas: otimesas,
        Otimes: Otimes,
        otimes: otimes,
        Ouml: Ouml,
        ouml: ouml,
        ovbar: ovbar,
        OverBar: OverBar,
        OverBrace: OverBrace,
        OverBracket: OverBracket,
        OverParenthesis: OverParenthesis,
        para: para,
        parallel: parallel,
        par: par,
        parsim: parsim,
        parsl: parsl,
        part: part,
        PartialD: PartialD,
        Pcy: Pcy,
        pcy: pcy,
        percnt: percnt,
        period: period,
        permil: permil,
        perp: perp,
        pertenk: pertenk,
        Pfr: Pfr,
        pfr: pfr,
        Phi: Phi,
        phi: phi,
        phiv: phiv,
        phmmat: phmmat,
        phone: phone,
        Pi: Pi,
        pi: pi,
        pitchfork: pitchfork,
        piv: piv,
        planck: planck,
        planckh: planckh,
        plankv: plankv,
        plusacir: plusacir,
        plusb: plusb,
        pluscir: pluscir,
        plus: plus,
        plusdo: plusdo,
        plusdu: plusdu,
        pluse: pluse,
        PlusMinus: PlusMinus,
        plusmn: plusmn,
        plussim: plussim,
        plustwo: plustwo,
        pm: pm,
        Poincareplane: Poincareplane,
        pointint: pointint,
        popf: popf,
        Popf: Popf,
        pound: pound,
        prap: prap,
        Pr: Pr,
        pr: pr,
        prcue: prcue,
        precapprox: precapprox,
        prec: prec,
        preccurlyeq: preccurlyeq,
        Precedes: Precedes,
        PrecedesEqual: PrecedesEqual,
        PrecedesSlantEqual: PrecedesSlantEqual,
        PrecedesTilde: PrecedesTilde,
        preceq: preceq,
        precnapprox: precnapprox,
        precneqq: precneqq,
        precnsim: precnsim,
        pre: pre,
        prE: prE,
        precsim: precsim,
        prime: prime,
        Prime: Prime,
        primes: primes,
        prnap: prnap,
        prnE: prnE,
        prnsim: prnsim,
        prod: prod,
        Product: Product,
        profalar: profalar,
        profline: profline,
        profsurf: profsurf,
        prop: prop,
        Proportional: Proportional,
        Proportion: Proportion,
        propto: propto,
        prsim: prsim,
        prurel: prurel,
        Pscr: Pscr,
        pscr: pscr,
        Psi: Psi,
        psi: psi,
        puncsp: puncsp,
        Qfr: Qfr,
        qfr: qfr,
        qint: qint,
        qopf: qopf,
        Qopf: Qopf,
        qprime: qprime,
        Qscr: Qscr,
        qscr: qscr,
        quaternions: quaternions,
        quatint: quatint,
        quest: quest,
        questeq: questeq,
        quot: quot,
        QUOT: QUOT,
        rAarr: rAarr,
        race: race,
        Racute: Racute,
        racute: racute,
        radic: radic,
        raemptyv: raemptyv,
        rang: rang,
        Rang: Rang,
        rangd: rangd,
        range: range,
        rangle: rangle,
        raquo: raquo,
        rarrap: rarrap,
        rarrb: rarrb,
        rarrbfs: rarrbfs,
        rarrc: rarrc,
        rarr: rarr,
        Rarr: Rarr,
        rArr: rArr,
        rarrfs: rarrfs,
        rarrhk: rarrhk,
        rarrlp: rarrlp,
        rarrpl: rarrpl,
        rarrsim: rarrsim,
        Rarrtl: Rarrtl,
        rarrtl: rarrtl,
        rarrw: rarrw,
        ratail: ratail,
        rAtail: rAtail,
        ratio: ratio,
        rationals: rationals,
        rbarr: rbarr,
        rBarr: rBarr,
        RBarr: RBarr,
        rbbrk: rbbrk,
        rbrace: rbrace,
        rbrack: rbrack,
        rbrke: rbrke,
        rbrksld: rbrksld,
        rbrkslu: rbrkslu,
        Rcaron: Rcaron,
        rcaron: rcaron,
        Rcedil: Rcedil,
        rcedil: rcedil,
        rceil: rceil,
        rcub: rcub,
        Rcy: Rcy,
        rcy: rcy,
        rdca: rdca,
        rdldhar: rdldhar,
        rdquo: rdquo,
        rdquor: rdquor,
        rdsh: rdsh,
        real: real,
        realine: realine,
        realpart: realpart,
        reals: reals,
        Re: Re,
        rect: rect,
        reg: reg,
        REG: REG,
        ReverseElement: ReverseElement,
        ReverseEquilibrium: ReverseEquilibrium,
        ReverseUpEquilibrium: ReverseUpEquilibrium,
        rfisht: rfisht,
        rfloor: rfloor,
        rfr: rfr,
        Rfr: Rfr,
        rHar: rHar,
        rhard: rhard,
        rharu: rharu,
        rharul: rharul,
        Rho: Rho,
        rho: rho,
        rhov: rhov,
        RightAngleBracket: RightAngleBracket,
        RightArrowBar: RightArrowBar,
        rightarrow: rightarrow,
        RightArrow: RightArrow,
        Rightarrow: Rightarrow,
        RightArrowLeftArrow: RightArrowLeftArrow,
        rightarrowtail: rightarrowtail,
        RightCeiling: RightCeiling,
        RightDoubleBracket: RightDoubleBracket,
        RightDownTeeVector: RightDownTeeVector,
        RightDownVectorBar: RightDownVectorBar,
        RightDownVector: RightDownVector,
        RightFloor: RightFloor,
        rightharpoondown: rightharpoondown,
        rightharpoonup: rightharpoonup,
        rightleftarrows: rightleftarrows,
        rightleftharpoons: rightleftharpoons,
        rightrightarrows: rightrightarrows,
        rightsquigarrow: rightsquigarrow,
        RightTeeArrow: RightTeeArrow,
        RightTee: RightTee,
        RightTeeVector: RightTeeVector,
        rightthreetimes: rightthreetimes,
        RightTriangleBar: RightTriangleBar,
        RightTriangle: RightTriangle,
        RightTriangleEqual: RightTriangleEqual,
        RightUpDownVector: RightUpDownVector,
        RightUpTeeVector: RightUpTeeVector,
        RightUpVectorBar: RightUpVectorBar,
        RightUpVector: RightUpVector,
        RightVectorBar: RightVectorBar,
        RightVector: RightVector,
        ring: ring,
        risingdotseq: risingdotseq,
        rlarr: rlarr,
        rlhar: rlhar,
        rlm: rlm,
        rmoustache: rmoustache,
        rmoust: rmoust,
        rnmid: rnmid,
        roang: roang,
        roarr: roarr,
        robrk: robrk,
        ropar: ropar,
        ropf: ropf,
        Ropf: Ropf,
        roplus: roplus,
        rotimes: rotimes,
        RoundImplies: RoundImplies,
        rpar: rpar,
        rpargt: rpargt,
        rppolint: rppolint,
        rrarr: rrarr,
        Rrightarrow: Rrightarrow,
        rsaquo: rsaquo,
        rscr: rscr,
        Rscr: Rscr,
        rsh: rsh,
        Rsh: Rsh,
        rsqb: rsqb,
        rsquo: rsquo,
        rsquor: rsquor,
        rthree: rthree,
        rtimes: rtimes,
        rtri: rtri,
        rtrie: rtrie,
        rtrif: rtrif,
        rtriltri: rtriltri,
        RuleDelayed: RuleDelayed,
        ruluhar: ruluhar,
        rx: rx,
        Sacute: Sacute,
        sacute: sacute,
        sbquo: sbquo,
        scap: scap,
        Scaron: Scaron,
        scaron: scaron,
        Sc: Sc,
        sc: sc,
        sccue: sccue,
        sce: sce,
        scE: scE,
        Scedil: Scedil,
        scedil: scedil,
        Scirc: Scirc,
        scirc: scirc,
        scnap: scnap,
        scnE: scnE,
        scnsim: scnsim,
        scpolint: scpolint,
        scsim: scsim,
        Scy: Scy,
        scy: scy,
        sdotb: sdotb,
        sdot: sdot,
        sdote: sdote,
        searhk: searhk,
        searr: searr,
        seArr: seArr,
        searrow: searrow,
        sect: sect,
        semi: semi,
        seswar: seswar,
        setminus: setminus,
        setmn: setmn,
        sext: sext,
        Sfr: Sfr,
        sfr: sfr,
        sfrown: sfrown,
        sharp: sharp,
        SHCHcy: SHCHcy,
        shchcy: shchcy,
        SHcy: SHcy,
        shcy: shcy,
        ShortDownArrow: ShortDownArrow,
        ShortLeftArrow: ShortLeftArrow,
        shortmid: shortmid,
        shortparallel: shortparallel,
        ShortRightArrow: ShortRightArrow,
        ShortUpArrow: ShortUpArrow,
        shy: shy,
        Sigma: Sigma,
        sigma: sigma,
        sigmaf: sigmaf,
        sigmav: sigmav,
        sim: sim,
        simdot: simdot,
        sime: sime,
        simeq: simeq,
        simg: simg,
        simgE: simgE,
        siml: siml,
        simlE: simlE,
        simne: simne,
        simplus: simplus,
        simrarr: simrarr,
        slarr: slarr,
        SmallCircle: SmallCircle,
        smallsetminus: smallsetminus,
        smashp: smashp,
        smeparsl: smeparsl,
        smid: smid,
        smile: smile,
        smt: smt,
        smte: smte,
        smtes: smtes,
        SOFTcy: SOFTcy,
        softcy: softcy,
        solbar: solbar,
        solb: solb,
        sol: sol,
        Sopf: Sopf,
        sopf: sopf,
        spades: spades,
        spadesuit: spadesuit,
        spar: spar,
        sqcap: sqcap,
        sqcaps: sqcaps,
        sqcup: sqcup,
        sqcups: sqcups,
        Sqrt: Sqrt,
        sqsub: sqsub,
        sqsube: sqsube,
        sqsubset: sqsubset,
        sqsubseteq: sqsubseteq,
        sqsup: sqsup,
        sqsupe: sqsupe,
        sqsupset: sqsupset,
        sqsupseteq: sqsupseteq,
        square: square,
        Square: Square,
        SquareIntersection: SquareIntersection,
        SquareSubset: SquareSubset,
        SquareSubsetEqual: SquareSubsetEqual,
        SquareSuperset: SquareSuperset,
        SquareSupersetEqual: SquareSupersetEqual,
        SquareUnion: SquareUnion,
        squarf: squarf,
        squ: squ,
        squf: squf,
        srarr: srarr,
        Sscr: Sscr,
        sscr: sscr,
        ssetmn: ssetmn,
        ssmile: ssmile,
        sstarf: sstarf,
        Star: Star,
        star: star,
        starf: starf,
        straightepsilon: straightepsilon,
        straightphi: straightphi,
        strns: strns,
        sub: sub,
        Sub: Sub,
        subdot: subdot,
        subE: subE,
        sube: sube,
        subedot: subedot,
        submult: submult,
        subnE: subnE,
        subne: subne,
        subplus: subplus,
        subrarr: subrarr,
        subset: subset,
        Subset: Subset,
        subseteq: subseteq,
        subseteqq: subseteqq,
        SubsetEqual: SubsetEqual,
        subsetneq: subsetneq,
        subsetneqq: subsetneqq,
        subsim: subsim,
        subsub: subsub,
        subsup: subsup,
        succapprox: succapprox,
        succ: succ,
        succcurlyeq: succcurlyeq,
        Succeeds: Succeeds,
        SucceedsEqual: SucceedsEqual,
        SucceedsSlantEqual: SucceedsSlantEqual,
        SucceedsTilde: SucceedsTilde,
        succeq: succeq,
        succnapprox: succnapprox,
        succneqq: succneqq,
        succnsim: succnsim,
        succsim: succsim,
        SuchThat: SuchThat,
        sum: sum,
        Sum: Sum,
        sung: sung,
        sup1: sup1,
        sup2: sup2,
        sup3: sup3,
        sup: sup,
        Sup: Sup,
        supdot: supdot,
        supdsub: supdsub,
        supE: supE,
        supe: supe,
        supedot: supedot,
        Superset: Superset,
        SupersetEqual: SupersetEqual,
        suphsol: suphsol,
        suphsub: suphsub,
        suplarr: suplarr,
        supmult: supmult,
        supnE: supnE,
        supne: supne,
        supplus: supplus,
        supset: supset,
        Supset: Supset,
        supseteq: supseteq,
        supseteqq: supseteqq,
        supsetneq: supsetneq,
        supsetneqq: supsetneqq,
        supsim: supsim,
        supsub: supsub,
        supsup: supsup,
        swarhk: swarhk,
        swarr: swarr,
        swArr: swArr,
        swarrow: swarrow,
        swnwar: swnwar,
        szlig: szlig,
        Tab: Tab,
        target: target,
        Tau: Tau,
        tau: tau,
        tbrk: tbrk,
        Tcaron: Tcaron,
        tcaron: tcaron,
        Tcedil: Tcedil,
        tcedil: tcedil,
        Tcy: Tcy,
        tcy: tcy,
        tdot: tdot,
        telrec: telrec,
        Tfr: Tfr,
        tfr: tfr,
        there4: there4,
        therefore: therefore,
        Therefore: Therefore,
        Theta: Theta,
        theta: theta,
        thetasym: thetasym,
        thetav: thetav,
        thickapprox: thickapprox,
        thicksim: thicksim,
        ThickSpace: ThickSpace,
        ThinSpace: ThinSpace,
        thinsp: thinsp,
        thkap: thkap,
        thksim: thksim,
        THORN: THORN,
        thorn: thorn,
        tilde: tilde,
        Tilde: Tilde,
        TildeEqual: TildeEqual,
        TildeFullEqual: TildeFullEqual,
        TildeTilde: TildeTilde,
        timesbar: timesbar,
        timesb: timesb,
        times: times,
        timesd: timesd,
        tint: tint,
        toea: toea,
        topbot: topbot,
        topcir: topcir,
        top: top,
        Topf: Topf,
        topf: topf,
        topfork: topfork,
        tosa: tosa,
        tprime: tprime,
        trade: trade,
        TRADE: TRADE,
        triangle: triangle,
        triangledown: triangledown,
        triangleleft: triangleleft,
        trianglelefteq: trianglelefteq,
        triangleq: triangleq,
        triangleright: triangleright,
        trianglerighteq: trianglerighteq,
        tridot: tridot,
        trie: trie,
        triminus: triminus,
        TripleDot: TripleDot,
        triplus: triplus,
        trisb: trisb,
        tritime: tritime,
        trpezium: trpezium,
        Tscr: Tscr,
        tscr: tscr,
        TScy: TScy,
        tscy: tscy,
        TSHcy: TSHcy,
        tshcy: tshcy,
        Tstrok: Tstrok,
        tstrok: tstrok,
        twixt: twixt,
        twoheadleftarrow: twoheadleftarrow,
        twoheadrightarrow: twoheadrightarrow,
        Uacute: Uacute,
        uacute: uacute,
        uarr: uarr,
        Uarr: Uarr,
        uArr: uArr,
        Uarrocir: Uarrocir,
        Ubrcy: Ubrcy,
        ubrcy: ubrcy,
        Ubreve: Ubreve,
        ubreve: ubreve,
        Ucirc: Ucirc,
        ucirc: ucirc,
        Ucy: Ucy,
        ucy: ucy,
        udarr: udarr,
        Udblac: Udblac,
        udblac: udblac,
        udhar: udhar,
        ufisht: ufisht,
        Ufr: Ufr,
        ufr: ufr,
        Ugrave: Ugrave,
        ugrave: ugrave,
        uHar: uHar,
        uharl: uharl,
        uharr: uharr,
        uhblk: uhblk,
        ulcorn: ulcorn,
        ulcorner: ulcorner,
        ulcrop: ulcrop,
        ultri: ultri,
        Umacr: Umacr,
        umacr: umacr,
        uml: uml,
        UnderBar: UnderBar,
        UnderBrace: UnderBrace,
        UnderBracket: UnderBracket,
        UnderParenthesis: UnderParenthesis,
        Union: Union,
        UnionPlus: UnionPlus,
        Uogon: Uogon,
        uogon: uogon,
        Uopf: Uopf,
        uopf: uopf,
        UpArrowBar: UpArrowBar,
        uparrow: uparrow,
        UpArrow: UpArrow,
        Uparrow: Uparrow,
        UpArrowDownArrow: UpArrowDownArrow,
        updownarrow: updownarrow,
        UpDownArrow: UpDownArrow,
        Updownarrow: Updownarrow,
        UpEquilibrium: UpEquilibrium,
        upharpoonleft: upharpoonleft,
        upharpoonright: upharpoonright,
        uplus: uplus,
        UpperLeftArrow: UpperLeftArrow,
        UpperRightArrow: UpperRightArrow,
        upsi: upsi,
        Upsi: Upsi,
        upsih: upsih,
        Upsilon: Upsilon,
        upsilon: upsilon,
        UpTeeArrow: UpTeeArrow,
        UpTee: UpTee,
        upuparrows: upuparrows,
        urcorn: urcorn,
        urcorner: urcorner,
        urcrop: urcrop,
        Uring: Uring,
        uring: uring,
        urtri: urtri,
        Uscr: Uscr,
        uscr: uscr,
        utdot: utdot,
        Utilde: Utilde,
        utilde: utilde,
        utri: utri,
        utrif: utrif,
        uuarr: uuarr,
        Uuml: Uuml,
        uuml: uuml,
        uwangle: uwangle,
        vangrt: vangrt,
        varepsilon: varepsilon,
        varkappa: varkappa,
        varnothing: varnothing,
        varphi: varphi,
        varpi: varpi,
        varpropto: varpropto,
        varr: varr,
        vArr: vArr,
        varrho: varrho,
        varsigma: varsigma,
        varsubsetneq: varsubsetneq,
        varsubsetneqq: varsubsetneqq,
        varsupsetneq: varsupsetneq,
        varsupsetneqq: varsupsetneqq,
        vartheta: vartheta,
        vartriangleleft: vartriangleleft,
        vartriangleright: vartriangleright,
        vBar: vBar,
        Vbar: Vbar,
        vBarv: vBarv,
        Vcy: Vcy,
        vcy: vcy,
        vdash: vdash,
        vDash: vDash,
        Vdash: Vdash,
        VDash: VDash,
        Vdashl: Vdashl,
        veebar: veebar,
        vee: vee,
        Vee: Vee,
        veeeq: veeeq,
        vellip: vellip,
        verbar: verbar,
        Verbar: Verbar,
        vert: vert,
        Vert: Vert,
        VerticalBar: VerticalBar,
        VerticalLine: VerticalLine,
        VerticalSeparator: VerticalSeparator,
        VerticalTilde: VerticalTilde,
        VeryThinSpace: VeryThinSpace,
        Vfr: Vfr,
        vfr: vfr,
        vltri: vltri,
        vnsub: vnsub,
        vnsup: vnsup,
        Vopf: Vopf,
        vopf: vopf,
        vprop: vprop,
        vrtri: vrtri,
        Vscr: Vscr,
        vscr: vscr,
        vsubnE: vsubnE,
        vsubne: vsubne,
        vsupnE: vsupnE,
        vsupne: vsupne,
        Vvdash: Vvdash,
        vzigzag: vzigzag,
        Wcirc: Wcirc,
        wcirc: wcirc,
        wedbar: wedbar,
        wedge: wedge,
        Wedge: Wedge,
        wedgeq: wedgeq,
        weierp: weierp,
        Wfr: Wfr,
        wfr: wfr,
        Wopf: Wopf,
        wopf: wopf,
        wp: wp,
        wr: wr,
        wreath: wreath,
        Wscr: Wscr,
        wscr: wscr,
        xcap: xcap,
        xcirc: xcirc,
        xcup: xcup,
        xdtri: xdtri,
        Xfr: Xfr,
        xfr: xfr,
        xharr: xharr,
        xhArr: xhArr,
        Xi: Xi,
        xi: xi,
        xlarr: xlarr,
        xlArr: xlArr,
        xmap: xmap,
        xnis: xnis,
        xodot: xodot,
        Xopf: Xopf,
        xopf: xopf,
        xoplus: xoplus,
        xotime: xotime,
        xrarr: xrarr,
        xrArr: xrArr,
        Xscr: Xscr,
        xscr: xscr,
        xsqcup: xsqcup,
        xuplus: xuplus,
        xutri: xutri,
        xvee: xvee,
        xwedge: xwedge,
        Yacute: Yacute,
        yacute: yacute,
        YAcy: YAcy,
        yacy: yacy,
        Ycirc: Ycirc,
        ycirc: ycirc,
        Ycy: Ycy,
        ycy: ycy,
        yen: yen,
        Yfr: Yfr,
        yfr: yfr,
        YIcy: YIcy,
        yicy: yicy,
        Yopf: Yopf,
        yopf: yopf,
        Yscr: Yscr,
        yscr: yscr,
        YUcy: YUcy,
        yucy: yucy,
        yuml: yuml,
        Yuml: Yuml,
        Zacute: Zacute,
        zacute: zacute,
        Zcaron: Zcaron,
        zcaron: zcaron,
        Zcy: Zcy,
        zcy: zcy,
        Zdot: Zdot,
        zdot: zdot,
        zeetrf: zeetrf,
        ZeroWidthSpace: ZeroWidthSpace,
        Zeta: Zeta,
        zeta: zeta,
        zfr: zfr,
        Zfr: Zfr,
        ZHcy: ZHcy,
        zhcy: zhcy,
        zigrarr: zigrarr,
        zopf: zopf,
        Zopf: Zopf,
        Zscr: Zscr,
        zscr: zscr,
        zwj: zwj,
        zwnj: zwnj,
        'default': entities
    });

    const Aacute$1 = "Á";
    const aacute$1 = "á";
    const Acirc$1 = "Â";
    const acirc$1 = "â";
    const acute$1 = "´";
    const AElig$1 = "Æ";
    const aelig$1 = "æ";
    const Agrave$1 = "À";
    const agrave$1 = "à";
    const amp$1 = "&";
    const AMP$1 = "&";
    const Aring$1 = "Å";
    const aring$1 = "å";
    const Atilde$1 = "Ã";
    const atilde$1 = "ã";
    const Auml$1 = "Ä";
    const auml$1 = "ä";
    const brvbar$1 = "¦";
    const Ccedil$1 = "Ç";
    const ccedil$1 = "ç";
    const cedil$1 = "¸";
    const cent$1 = "¢";
    const copy$1 = "©";
    const COPY$1 = "©";
    const curren$1 = "¤";
    const deg$1 = "°";
    const divide$1 = "÷";
    const Eacute$1 = "É";
    const eacute$1 = "é";
    const Ecirc$1 = "Ê";
    const ecirc$1 = "ê";
    const Egrave$1 = "È";
    const egrave$1 = "è";
    const ETH$1 = "Ð";
    const eth$1 = "ð";
    const Euml$1 = "Ë";
    const euml$1 = "ë";
    const frac12$1 = "½";
    const frac14$1 = "¼";
    const frac34$1 = "¾";
    const gt$1 = ">";
    const GT$1 = ">";
    const Iacute$1 = "Í";
    const iacute$1 = "í";
    const Icirc$1 = "Î";
    const icirc$1 = "î";
    const iexcl$1 = "¡";
    const Igrave$1 = "Ì";
    const igrave$1 = "ì";
    const iquest$1 = "¿";
    const Iuml$1 = "Ï";
    const iuml$1 = "ï";
    const laquo$1 = "«";
    const lt$1 = "<";
    const LT$1 = "<";
    const macr$1 = "¯";
    const micro$1 = "µ";
    const middot$1 = "·";
    const nbsp$1 = " ";
    const not$1 = "¬";
    const Ntilde$1 = "Ñ";
    const ntilde$1 = "ñ";
    const Oacute$1 = "Ó";
    const oacute$1 = "ó";
    const Ocirc$1 = "Ô";
    const ocirc$1 = "ô";
    const Ograve$1 = "Ò";
    const ograve$1 = "ò";
    const ordf$1 = "ª";
    const ordm$1 = "º";
    const Oslash$1 = "Ø";
    const oslash$1 = "ø";
    const Otilde$1 = "Õ";
    const otilde$1 = "õ";
    const Ouml$1 = "Ö";
    const ouml$1 = "ö";
    const para$1 = "¶";
    const plusmn$1 = "±";
    const pound$1 = "£";
    const quot$1 = "\"";
    const QUOT$1 = "\"";
    const raquo$1 = "»";
    const reg$1 = "®";
    const REG$1 = "®";
    const sect$1 = "§";
    const shy$1 = "­";
    const sup1$1 = "¹";
    const sup2$1 = "²";
    const sup3$1 = "³";
    const szlig$1 = "ß";
    const THORN$1 = "Þ";
    const thorn$1 = "þ";
    const times$1 = "×";
    const Uacute$1 = "Ú";
    const uacute$1 = "ú";
    const Ucirc$1 = "Û";
    const ucirc$1 = "û";
    const Ugrave$1 = "Ù";
    const ugrave$1 = "ù";
    const uml$1 = "¨";
    const Uuml$1 = "Ü";
    const uuml$1 = "ü";
    const Yacute$1 = "Ý";
    const yacute$1 = "ý";
    const yen$1 = "¥";
    const yuml$1 = "ÿ";
    var legacy = {
    	Aacute: Aacute$1,
    	aacute: aacute$1,
    	Acirc: Acirc$1,
    	acirc: acirc$1,
    	acute: acute$1,
    	AElig: AElig$1,
    	aelig: aelig$1,
    	Agrave: Agrave$1,
    	agrave: agrave$1,
    	amp: amp$1,
    	AMP: AMP$1,
    	Aring: Aring$1,
    	aring: aring$1,
    	Atilde: Atilde$1,
    	atilde: atilde$1,
    	Auml: Auml$1,
    	auml: auml$1,
    	brvbar: brvbar$1,
    	Ccedil: Ccedil$1,
    	ccedil: ccedil$1,
    	cedil: cedil$1,
    	cent: cent$1,
    	copy: copy$1,
    	COPY: COPY$1,
    	curren: curren$1,
    	deg: deg$1,
    	divide: divide$1,
    	Eacute: Eacute$1,
    	eacute: eacute$1,
    	Ecirc: Ecirc$1,
    	ecirc: ecirc$1,
    	Egrave: Egrave$1,
    	egrave: egrave$1,
    	ETH: ETH$1,
    	eth: eth$1,
    	Euml: Euml$1,
    	euml: euml$1,
    	frac12: frac12$1,
    	frac14: frac14$1,
    	frac34: frac34$1,
    	gt: gt$1,
    	GT: GT$1,
    	Iacute: Iacute$1,
    	iacute: iacute$1,
    	Icirc: Icirc$1,
    	icirc: icirc$1,
    	iexcl: iexcl$1,
    	Igrave: Igrave$1,
    	igrave: igrave$1,
    	iquest: iquest$1,
    	Iuml: Iuml$1,
    	iuml: iuml$1,
    	laquo: laquo$1,
    	lt: lt$1,
    	LT: LT$1,
    	macr: macr$1,
    	micro: micro$1,
    	middot: middot$1,
    	nbsp: nbsp$1,
    	not: not$1,
    	Ntilde: Ntilde$1,
    	ntilde: ntilde$1,
    	Oacute: Oacute$1,
    	oacute: oacute$1,
    	Ocirc: Ocirc$1,
    	ocirc: ocirc$1,
    	Ograve: Ograve$1,
    	ograve: ograve$1,
    	ordf: ordf$1,
    	ordm: ordm$1,
    	Oslash: Oslash$1,
    	oslash: oslash$1,
    	Otilde: Otilde$1,
    	otilde: otilde$1,
    	Ouml: Ouml$1,
    	ouml: ouml$1,
    	para: para$1,
    	plusmn: plusmn$1,
    	pound: pound$1,
    	quot: quot$1,
    	QUOT: QUOT$1,
    	raquo: raquo$1,
    	reg: reg$1,
    	REG: REG$1,
    	sect: sect$1,
    	shy: shy$1,
    	sup1: sup1$1,
    	sup2: sup2$1,
    	sup3: sup3$1,
    	szlig: szlig$1,
    	THORN: THORN$1,
    	thorn: thorn$1,
    	times: times$1,
    	Uacute: Uacute$1,
    	uacute: uacute$1,
    	Ucirc: Ucirc$1,
    	ucirc: ucirc$1,
    	Ugrave: Ugrave$1,
    	ugrave: ugrave$1,
    	uml: uml$1,
    	Uuml: Uuml$1,
    	uuml: uuml$1,
    	Yacute: Yacute$1,
    	yacute: yacute$1,
    	yen: yen$1,
    	yuml: yuml$1
    };

    var legacy$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Aacute: Aacute$1,
        aacute: aacute$1,
        Acirc: Acirc$1,
        acirc: acirc$1,
        acute: acute$1,
        AElig: AElig$1,
        aelig: aelig$1,
        Agrave: Agrave$1,
        agrave: agrave$1,
        amp: amp$1,
        AMP: AMP$1,
        Aring: Aring$1,
        aring: aring$1,
        Atilde: Atilde$1,
        atilde: atilde$1,
        Auml: Auml$1,
        auml: auml$1,
        brvbar: brvbar$1,
        Ccedil: Ccedil$1,
        ccedil: ccedil$1,
        cedil: cedil$1,
        cent: cent$1,
        copy: copy$1,
        COPY: COPY$1,
        curren: curren$1,
        deg: deg$1,
        divide: divide$1,
        Eacute: Eacute$1,
        eacute: eacute$1,
        Ecirc: Ecirc$1,
        ecirc: ecirc$1,
        Egrave: Egrave$1,
        egrave: egrave$1,
        ETH: ETH$1,
        eth: eth$1,
        Euml: Euml$1,
        euml: euml$1,
        frac12: frac12$1,
        frac14: frac14$1,
        frac34: frac34$1,
        gt: gt$1,
        GT: GT$1,
        Iacute: Iacute$1,
        iacute: iacute$1,
        Icirc: Icirc$1,
        icirc: icirc$1,
        iexcl: iexcl$1,
        Igrave: Igrave$1,
        igrave: igrave$1,
        iquest: iquest$1,
        Iuml: Iuml$1,
        iuml: iuml$1,
        laquo: laquo$1,
        lt: lt$1,
        LT: LT$1,
        macr: macr$1,
        micro: micro$1,
        middot: middot$1,
        nbsp: nbsp$1,
        not: not$1,
        Ntilde: Ntilde$1,
        ntilde: ntilde$1,
        Oacute: Oacute$1,
        oacute: oacute$1,
        Ocirc: Ocirc$1,
        ocirc: ocirc$1,
        Ograve: Ograve$1,
        ograve: ograve$1,
        ordf: ordf$1,
        ordm: ordm$1,
        Oslash: Oslash$1,
        oslash: oslash$1,
        Otilde: Otilde$1,
        otilde: otilde$1,
        Ouml: Ouml$1,
        ouml: ouml$1,
        para: para$1,
        plusmn: plusmn$1,
        pound: pound$1,
        quot: quot$1,
        QUOT: QUOT$1,
        raquo: raquo$1,
        reg: reg$1,
        REG: REG$1,
        sect: sect$1,
        shy: shy$1,
        sup1: sup1$1,
        sup2: sup2$1,
        sup3: sup3$1,
        szlig: szlig$1,
        THORN: THORN$1,
        thorn: thorn$1,
        times: times$1,
        Uacute: Uacute$1,
        uacute: uacute$1,
        Ucirc: Ucirc$1,
        ucirc: ucirc$1,
        Ugrave: Ugrave$1,
        ugrave: ugrave$1,
        uml: uml$1,
        Uuml: Uuml$1,
        uuml: uuml$1,
        Yacute: Yacute$1,
        yacute: yacute$1,
        yen: yen$1,
        yuml: yuml$1,
        'default': legacy
    });

    const amp$2 = "&";
    const apos$1 = "'";
    const gt$2 = ">";
    const lt$2 = "<";
    const quot$2 = "\"";
    var xml = {
    	amp: amp$2,
    	apos: apos$1,
    	gt: gt$2,
    	lt: lt$2,
    	quot: quot$2
    };

    var xml$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        amp: amp$2,
        apos: apos$1,
        gt: gt$2,
        lt: lt$2,
        quot: quot$2,
        'default': xml
    });

    var entityMap = getCjsExportFromNamespace(entities$1);

    var legacyMap = getCjsExportFromNamespace(legacy$1);

    var xmlMap = getCjsExportFromNamespace(xml$1);

    var Tokenizer_1 = Tokenizer;






    var i = 0;

    var TEXT = i++;
    var BEFORE_TAG_NAME = i++; //after <
    var IN_TAG_NAME = i++;
    var IN_SELF_CLOSING_TAG = i++;
    var BEFORE_CLOSING_TAG_NAME = i++;
    var IN_CLOSING_TAG_NAME = i++;
    var AFTER_CLOSING_TAG_NAME = i++;

    //attributes
    var BEFORE_ATTRIBUTE_NAME = i++;
    var IN_ATTRIBUTE_NAME = i++;
    var AFTER_ATTRIBUTE_NAME = i++;
    var BEFORE_ATTRIBUTE_VALUE = i++;
    var IN_ATTRIBUTE_VALUE_DQ = i++; // "
    var IN_ATTRIBUTE_VALUE_SQ = i++; // '
    var IN_ATTRIBUTE_VALUE_NQ = i++;

    //declarations
    var BEFORE_DECLARATION = i++; // !
    var IN_DECLARATION = i++;

    //processing instructions
    var IN_PROCESSING_INSTRUCTION = i++; // ?

    //comments
    var BEFORE_COMMENT = i++;
    var IN_COMMENT = i++;
    var AFTER_COMMENT_1 = i++;
    var AFTER_COMMENT_2 = i++;

    //cdata
    var BEFORE_CDATA_1 = i++; // [
    var BEFORE_CDATA_2 = i++; // C
    var BEFORE_CDATA_3 = i++; // D
    var BEFORE_CDATA_4 = i++; // A
    var BEFORE_CDATA_5 = i++; // T
    var BEFORE_CDATA_6 = i++; // A
    var IN_CDATA = i++; // [
    var AFTER_CDATA_1 = i++; // ]
    var AFTER_CDATA_2 = i++; // ]

    //special tags
    var BEFORE_SPECIAL = i++; //S
    var BEFORE_SPECIAL_END = i++; //S

    var BEFORE_SCRIPT_1 = i++; //C
    var BEFORE_SCRIPT_2 = i++; //R
    var BEFORE_SCRIPT_3 = i++; //I
    var BEFORE_SCRIPT_4 = i++; //P
    var BEFORE_SCRIPT_5 = i++; //T
    var AFTER_SCRIPT_1 = i++; //C
    var AFTER_SCRIPT_2 = i++; //R
    var AFTER_SCRIPT_3 = i++; //I
    var AFTER_SCRIPT_4 = i++; //P
    var AFTER_SCRIPT_5 = i++; //T

    var BEFORE_STYLE_1 = i++; //T
    var BEFORE_STYLE_2 = i++; //Y
    var BEFORE_STYLE_3 = i++; //L
    var BEFORE_STYLE_4 = i++; //E
    var AFTER_STYLE_1 = i++; //T
    var AFTER_STYLE_2 = i++; //Y
    var AFTER_STYLE_3 = i++; //L
    var AFTER_STYLE_4 = i++; //E

    var BEFORE_ENTITY = i++; //&
    var BEFORE_NUMERIC_ENTITY = i++; //#
    var IN_NAMED_ENTITY = i++;
    var IN_NUMERIC_ENTITY = i++;
    var IN_HEX_ENTITY = i++; //X

    var j = 0;

    var SPECIAL_NONE = j++;
    var SPECIAL_SCRIPT = j++;
    var SPECIAL_STYLE = j++;

    function whitespace(c) {
        return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
    }

    function ifElseState(upper, SUCCESS, FAILURE) {
        var lower = upper.toLowerCase();

        if (upper === lower) {
            return function(c) {
                if (c === lower) {
                    this._state = SUCCESS;
                } else {
                    this._state = FAILURE;
                    this._index--;
                }
            };
        } else {
            return function(c) {
                if (c === lower || c === upper) {
                    this._state = SUCCESS;
                } else {
                    this._state = FAILURE;
                    this._index--;
                }
            };
        }
    }

    function consumeSpecialNameChar(upper, NEXT_STATE) {
        var lower = upper.toLowerCase();

        return function(c) {
            if (c === lower || c === upper) {
                this._state = NEXT_STATE;
            } else {
                this._state = IN_TAG_NAME;
                this._index--; //consume the token again
            }
        };
    }

    function Tokenizer(options, cbs) {
        this._state = TEXT;
        this._buffer = "";
        this._sectionStart = 0;
        this._index = 0;
        this._bufferOffset = 0; //chars removed from _buffer
        this._baseState = TEXT;
        this._special = SPECIAL_NONE;
        this._cbs = cbs;
        this._running = true;
        this._ended = false;
        this._xmlMode = !!(options && options.xmlMode);
        this._decodeEntities = !!(options && options.decodeEntities);
    }

    Tokenizer.prototype._stateText = function(c) {
        if (c === "<") {
            if (this._index > this._sectionStart) {
                this._cbs.ontext(this._getSection());
            }
            this._state = BEFORE_TAG_NAME;
            this._sectionStart = this._index;
        } else if (
            this._decodeEntities &&
            this._special === SPECIAL_NONE &&
            c === "&"
        ) {
            if (this._index > this._sectionStart) {
                this._cbs.ontext(this._getSection());
            }
            this._baseState = TEXT;
            this._state = BEFORE_ENTITY;
            this._sectionStart = this._index;
        }
    };

    Tokenizer.prototype._stateBeforeTagName = function(c) {
        if (c === "/") {
            this._state = BEFORE_CLOSING_TAG_NAME;
        } else if (c === "<") {
            this._cbs.ontext(this._getSection());
            this._sectionStart = this._index;
        } else if (c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
            this._state = TEXT;
        } else if (c === "!") {
            this._state = BEFORE_DECLARATION;
            this._sectionStart = this._index + 1;
        } else if (c === "?") {
            this._state = IN_PROCESSING_INSTRUCTION;
            this._sectionStart = this._index + 1;
        } else {
            this._state =
                !this._xmlMode && (c === "s" || c === "S")
                    ? BEFORE_SPECIAL
                    : IN_TAG_NAME;
            this._sectionStart = this._index;
        }
    };

    Tokenizer.prototype._stateInTagName = function(c) {
        if (c === "/" || c === ">" || whitespace(c)) {
            this._emitToken("onopentagname");
            this._state = BEFORE_ATTRIBUTE_NAME;
            this._index--;
        }
    };

    Tokenizer.prototype._stateBeforeCloseingTagName = function(c) {
        if (whitespace(c));
        else if (c === ">") {
            this._state = TEXT;
        } else if (this._special !== SPECIAL_NONE) {
            if (c === "s" || c === "S") {
                this._state = BEFORE_SPECIAL_END;
            } else {
                this._state = TEXT;
                this._index--;
            }
        } else {
            this._state = IN_CLOSING_TAG_NAME;
            this._sectionStart = this._index;
        }
    };

    Tokenizer.prototype._stateInCloseingTagName = function(c) {
        if (c === ">" || whitespace(c)) {
            this._emitToken("onclosetag");
            this._state = AFTER_CLOSING_TAG_NAME;
            this._index--;
        }
    };

    Tokenizer.prototype._stateAfterCloseingTagName = function(c) {
        //skip everything until ">"
        if (c === ">") {
            this._state = TEXT;
            this._sectionStart = this._index + 1;
        }
    };

    Tokenizer.prototype._stateBeforeAttributeName = function(c) {
        if (c === ">") {
            this._cbs.onopentagend();
            this._state = TEXT;
            this._sectionStart = this._index + 1;
        } else if (c === "/") {
            this._state = IN_SELF_CLOSING_TAG;
        } else if (!whitespace(c)) {
            this._state = IN_ATTRIBUTE_NAME;
            this._sectionStart = this._index;
        }
    };

    Tokenizer.prototype._stateInSelfClosingTag = function(c) {
        if (c === ">") {
            this._cbs.onselfclosingtag();
            this._state = TEXT;
            this._sectionStart = this._index + 1;
        } else if (!whitespace(c)) {
            this._state = BEFORE_ATTRIBUTE_NAME;
            this._index--;
        }
    };

    Tokenizer.prototype._stateInAttributeName = function(c) {
        if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
            this._cbs.onattribname(this._getSection());
            this._sectionStart = -1;
            this._state = AFTER_ATTRIBUTE_NAME;
            this._index--;
        }
    };

    Tokenizer.prototype._stateAfterAttributeName = function(c) {
        if (c === "=") {
            this._state = BEFORE_ATTRIBUTE_VALUE;
        } else if (c === "/" || c === ">") {
            this._cbs.onattribend();
            this._state = BEFORE_ATTRIBUTE_NAME;
            this._index--;
        } else if (!whitespace(c)) {
            this._cbs.onattribend();
            this._state = IN_ATTRIBUTE_NAME;
            this._sectionStart = this._index;
        }
    };

    Tokenizer.prototype._stateBeforeAttributeValue = function(c) {
        if (c === '"') {
            this._state = IN_ATTRIBUTE_VALUE_DQ;
            this._sectionStart = this._index + 1;
        } else if (c === "'") {
            this._state = IN_ATTRIBUTE_VALUE_SQ;
            this._sectionStart = this._index + 1;
        } else if (!whitespace(c)) {
            this._state = IN_ATTRIBUTE_VALUE_NQ;
            this._sectionStart = this._index;
            this._index--; //reconsume token
        }
    };

    Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function(c) {
        if (c === '"') {
            this._emitToken("onattribdata");
            this._cbs.onattribend();
            this._state = BEFORE_ATTRIBUTE_NAME;
        } else if (this._decodeEntities && c === "&") {
            this._emitToken("onattribdata");
            this._baseState = this._state;
            this._state = BEFORE_ENTITY;
            this._sectionStart = this._index;
        }
    };

    Tokenizer.prototype._stateInAttributeValueSingleQuotes = function(c) {
        if (c === "'") {
            this._emitToken("onattribdata");
            this._cbs.onattribend();
            this._state = BEFORE_ATTRIBUTE_NAME;
        } else if (this._decodeEntities && c === "&") {
            this._emitToken("onattribdata");
            this._baseState = this._state;
            this._state = BEFORE_ENTITY;
            this._sectionStart = this._index;
        }
    };

    Tokenizer.prototype._stateInAttributeValueNoQuotes = function(c) {
        if (whitespace(c) || c === ">") {
            this._emitToken("onattribdata");
            this._cbs.onattribend();
            this._state = BEFORE_ATTRIBUTE_NAME;
            this._index--;
        } else if (this._decodeEntities && c === "&") {
            this._emitToken("onattribdata");
            this._baseState = this._state;
            this._state = BEFORE_ENTITY;
            this._sectionStart = this._index;
        }
    };

    Tokenizer.prototype._stateBeforeDeclaration = function(c) {
        this._state =
            c === "["
                ? BEFORE_CDATA_1
                : c === "-"
                    ? BEFORE_COMMENT
                    : IN_DECLARATION;
    };

    Tokenizer.prototype._stateInDeclaration = function(c) {
        if (c === ">") {
            this._cbs.ondeclaration(this._getSection());
            this._state = TEXT;
            this._sectionStart = this._index + 1;
        }
    };

    Tokenizer.prototype._stateInProcessingInstruction = function(c) {
        if (c === ">") {
            this._cbs.onprocessinginstruction(this._getSection());
            this._state = TEXT;
            this._sectionStart = this._index + 1;
        }
    };

    Tokenizer.prototype._stateBeforeComment = function(c) {
        if (c === "-") {
            this._state = IN_COMMENT;
            this._sectionStart = this._index + 1;
        } else {
            this._state = IN_DECLARATION;
        }
    };

    Tokenizer.prototype._stateInComment = function(c) {
        if (c === "-") { this._state = AFTER_COMMENT_1; }
    };

    Tokenizer.prototype._stateAfterComment1 = function(c) {
        if (c === "-") {
            this._state = AFTER_COMMENT_2;
        } else {
            this._state = IN_COMMENT;
        }
    };

    Tokenizer.prototype._stateAfterComment2 = function(c) {
        if (c === ">") {
            //remove 2 trailing chars
            this._cbs.oncomment(
                this._buffer.substring(this._sectionStart, this._index - 2)
            );
            this._state = TEXT;
            this._sectionStart = this._index + 1;
        } else if (c !== "-") {
            this._state = IN_COMMENT;
        }
        // else: stay in AFTER_COMMENT_2 (`--->`)
    };

    Tokenizer.prototype._stateBeforeCdata1 = ifElseState(
        "C",
        BEFORE_CDATA_2,
        IN_DECLARATION
    );
    Tokenizer.prototype._stateBeforeCdata2 = ifElseState(
        "D",
        BEFORE_CDATA_3,
        IN_DECLARATION
    );
    Tokenizer.prototype._stateBeforeCdata3 = ifElseState(
        "A",
        BEFORE_CDATA_4,
        IN_DECLARATION
    );
    Tokenizer.prototype._stateBeforeCdata4 = ifElseState(
        "T",
        BEFORE_CDATA_5,
        IN_DECLARATION
    );
    Tokenizer.prototype._stateBeforeCdata5 = ifElseState(
        "A",
        BEFORE_CDATA_6,
        IN_DECLARATION
    );

    Tokenizer.prototype._stateBeforeCdata6 = function(c) {
        if (c === "[") {
            this._state = IN_CDATA;
            this._sectionStart = this._index + 1;
        } else {
            this._state = IN_DECLARATION;
            this._index--;
        }
    };

    Tokenizer.prototype._stateInCdata = function(c) {
        if (c === "]") { this._state = AFTER_CDATA_1; }
    };

    Tokenizer.prototype._stateAfterCdata1 = function(c) {
        if (c === "]") { this._state = AFTER_CDATA_2; }
        else { this._state = IN_CDATA; }
    };

    Tokenizer.prototype._stateAfterCdata2 = function(c) {
        if (c === ">") {
            //remove 2 trailing chars
            this._cbs.oncdata(
                this._buffer.substring(this._sectionStart, this._index - 2)
            );
            this._state = TEXT;
            this._sectionStart = this._index + 1;
        } else if (c !== "]") {
            this._state = IN_CDATA;
        }
        //else: stay in AFTER_CDATA_2 (`]]]>`)
    };

    Tokenizer.prototype._stateBeforeSpecial = function(c) {
        if (c === "c" || c === "C") {
            this._state = BEFORE_SCRIPT_1;
        } else if (c === "t" || c === "T") {
            this._state = BEFORE_STYLE_1;
        } else {
            this._state = IN_TAG_NAME;
            this._index--; //consume the token again
        }
    };

    Tokenizer.prototype._stateBeforeSpecialEnd = function(c) {
        if (this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")) {
            this._state = AFTER_SCRIPT_1;
        } else if (this._special === SPECIAL_STYLE && (c === "t" || c === "T")) {
            this._state = AFTER_STYLE_1;
        } else { this._state = TEXT; }
    };

    Tokenizer.prototype._stateBeforeScript1 = consumeSpecialNameChar(
        "R",
        BEFORE_SCRIPT_2
    );
    Tokenizer.prototype._stateBeforeScript2 = consumeSpecialNameChar(
        "I",
        BEFORE_SCRIPT_3
    );
    Tokenizer.prototype._stateBeforeScript3 = consumeSpecialNameChar(
        "P",
        BEFORE_SCRIPT_4
    );
    Tokenizer.prototype._stateBeforeScript4 = consumeSpecialNameChar(
        "T",
        BEFORE_SCRIPT_5
    );

    Tokenizer.prototype._stateBeforeScript5 = function(c) {
        if (c === "/" || c === ">" || whitespace(c)) {
            this._special = SPECIAL_SCRIPT;
        }
        this._state = IN_TAG_NAME;
        this._index--; //consume the token again
    };

    Tokenizer.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
    Tokenizer.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
    Tokenizer.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
    Tokenizer.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);

    Tokenizer.prototype._stateAfterScript5 = function(c) {
        if (c === ">" || whitespace(c)) {
            this._special = SPECIAL_NONE;
            this._state = IN_CLOSING_TAG_NAME;
            this._sectionStart = this._index - 6;
            this._index--; //reconsume the token
        } else { this._state = TEXT; }
    };

    Tokenizer.prototype._stateBeforeStyle1 = consumeSpecialNameChar(
        "Y",
        BEFORE_STYLE_2
    );
    Tokenizer.prototype._stateBeforeStyle2 = consumeSpecialNameChar(
        "L",
        BEFORE_STYLE_3
    );
    Tokenizer.prototype._stateBeforeStyle3 = consumeSpecialNameChar(
        "E",
        BEFORE_STYLE_4
    );

    Tokenizer.prototype._stateBeforeStyle4 = function(c) {
        if (c === "/" || c === ">" || whitespace(c)) {
            this._special = SPECIAL_STYLE;
        }
        this._state = IN_TAG_NAME;
        this._index--; //consume the token again
    };

    Tokenizer.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
    Tokenizer.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
    Tokenizer.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);

    Tokenizer.prototype._stateAfterStyle4 = function(c) {
        if (c === ">" || whitespace(c)) {
            this._special = SPECIAL_NONE;
            this._state = IN_CLOSING_TAG_NAME;
            this._sectionStart = this._index - 5;
            this._index--; //reconsume the token
        } else { this._state = TEXT; }
    };

    Tokenizer.prototype._stateBeforeEntity = ifElseState(
        "#",
        BEFORE_NUMERIC_ENTITY,
        IN_NAMED_ENTITY
    );
    Tokenizer.prototype._stateBeforeNumericEntity = ifElseState(
        "X",
        IN_HEX_ENTITY,
        IN_NUMERIC_ENTITY
    );

    //for entities terminated with a semicolon
    Tokenizer.prototype._parseNamedEntityStrict = function() {
        //offset = 1
        if (this._sectionStart + 1 < this._index) {
            var entity = this._buffer.substring(
                    this._sectionStart + 1,
                    this._index
                ),
                map = this._xmlMode ? xmlMap : entityMap;

            if (map.hasOwnProperty(entity)) {
                this._emitPartial(map[entity]);
                this._sectionStart = this._index + 1;
            }
        }
    };

    //parses legacy entities (without trailing semicolon)
    Tokenizer.prototype._parseLegacyEntity = function() {
        var start = this._sectionStart + 1,
            limit = this._index - start;

        if (limit > 6) { limit = 6; } //the max length of legacy entities is 6

        while (limit >= 2) {
            //the min length of legacy entities is 2
            var entity = this._buffer.substr(start, limit);

            if (legacyMap.hasOwnProperty(entity)) {
                this._emitPartial(legacyMap[entity]);
                this._sectionStart += limit + 1;
                return;
            } else {
                limit--;
            }
        }
    };

    Tokenizer.prototype._stateInNamedEntity = function(c) {
        if (c === ";") {
            this._parseNamedEntityStrict();
            if (this._sectionStart + 1 < this._index && !this._xmlMode) {
                this._parseLegacyEntity();
            }
            this._state = this._baseState;
        } else if (
            (c < "a" || c > "z") &&
            (c < "A" || c > "Z") &&
            (c < "0" || c > "9")
        ) {
            if (this._xmlMode);
            else if (this._sectionStart + 1 === this._index);
            else if (this._baseState !== TEXT) {
                if (c !== "=") {
                    this._parseNamedEntityStrict();
                }
            } else {
                this._parseLegacyEntity();
            }

            this._state = this._baseState;
            this._index--;
        }
    };

    Tokenizer.prototype._decodeNumericEntity = function(offset, base) {
        var sectionStart = this._sectionStart + offset;

        if (sectionStart !== this._index) {
            //parse entity
            var entity = this._buffer.substring(sectionStart, this._index);
            var parsed = parseInt(entity, base);

            this._emitPartial(decode_codepoint(parsed));
            this._sectionStart = this._index;
        } else {
            this._sectionStart--;
        }

        this._state = this._baseState;
    };

    Tokenizer.prototype._stateInNumericEntity = function(c) {
        if (c === ";") {
            this._decodeNumericEntity(2, 10);
            this._sectionStart++;
        } else if (c < "0" || c > "9") {
            if (!this._xmlMode) {
                this._decodeNumericEntity(2, 10);
            } else {
                this._state = this._baseState;
            }
            this._index--;
        }
    };

    Tokenizer.prototype._stateInHexEntity = function(c) {
        if (c === ";") {
            this._decodeNumericEntity(3, 16);
            this._sectionStart++;
        } else if (
            (c < "a" || c > "f") &&
            (c < "A" || c > "F") &&
            (c < "0" || c > "9")
        ) {
            if (!this._xmlMode) {
                this._decodeNumericEntity(3, 16);
            } else {
                this._state = this._baseState;
            }
            this._index--;
        }
    };

    Tokenizer.prototype._cleanup = function() {
        if (this._sectionStart < 0) {
            this._buffer = "";
            this._bufferOffset += this._index;
            this._index = 0;
        } else if (this._running) {
            if (this._state === TEXT) {
                if (this._sectionStart !== this._index) {
                    this._cbs.ontext(this._buffer.substr(this._sectionStart));
                }
                this._buffer = "";
                this._bufferOffset += this._index;
                this._index = 0;
            } else if (this._sectionStart === this._index) {
                //the section just started
                this._buffer = "";
                this._bufferOffset += this._index;
                this._index = 0;
            } else {
                //remove everything unnecessary
                this._buffer = this._buffer.substr(this._sectionStart);
                this._index -= this._sectionStart;
                this._bufferOffset += this._sectionStart;
            }

            this._sectionStart = 0;
        }
    };

    //TODO make events conditional
    Tokenizer.prototype.write = function(chunk) {
        if (this._ended) { this._cbs.onerror(Error(".write() after done!")); }

        this._buffer += chunk;
        this._parse();
    };

    Tokenizer.prototype._parse = function() {
        while (this._index < this._buffer.length && this._running) {
            var c = this._buffer.charAt(this._index);
            if (this._state === TEXT) {
                this._stateText(c);
            } else if (this._state === BEFORE_TAG_NAME) {
                this._stateBeforeTagName(c);
            } else if (this._state === IN_TAG_NAME) {
                this._stateInTagName(c);
            } else if (this._state === BEFORE_CLOSING_TAG_NAME) {
                this._stateBeforeCloseingTagName(c);
            } else if (this._state === IN_CLOSING_TAG_NAME) {
                this._stateInCloseingTagName(c);
            } else if (this._state === AFTER_CLOSING_TAG_NAME) {
                this._stateAfterCloseingTagName(c);
            } else if (this._state === IN_SELF_CLOSING_TAG) {
                this._stateInSelfClosingTag(c);
            } else if (this._state === BEFORE_ATTRIBUTE_NAME) {

            /*
    		*	attributes
    		*/
                this._stateBeforeAttributeName(c);
            } else if (this._state === IN_ATTRIBUTE_NAME) {
                this._stateInAttributeName(c);
            } else if (this._state === AFTER_ATTRIBUTE_NAME) {
                this._stateAfterAttributeName(c);
            } else if (this._state === BEFORE_ATTRIBUTE_VALUE) {
                this._stateBeforeAttributeValue(c);
            } else if (this._state === IN_ATTRIBUTE_VALUE_DQ) {
                this._stateInAttributeValueDoubleQuotes(c);
            } else if (this._state === IN_ATTRIBUTE_VALUE_SQ) {
                this._stateInAttributeValueSingleQuotes(c);
            } else if (this._state === IN_ATTRIBUTE_VALUE_NQ) {
                this._stateInAttributeValueNoQuotes(c);
            } else if (this._state === BEFORE_DECLARATION) {

            /*
    		*	declarations
    		*/
                this._stateBeforeDeclaration(c);
            } else if (this._state === IN_DECLARATION) {
                this._stateInDeclaration(c);
            } else if (this._state === IN_PROCESSING_INSTRUCTION) {

            /*
    		*	processing instructions
    		*/
                this._stateInProcessingInstruction(c);
            } else if (this._state === BEFORE_COMMENT) {

            /*
    		*	comments
    		*/
                this._stateBeforeComment(c);
            } else if (this._state === IN_COMMENT) {
                this._stateInComment(c);
            } else if (this._state === AFTER_COMMENT_1) {
                this._stateAfterComment1(c);
            } else if (this._state === AFTER_COMMENT_2) {
                this._stateAfterComment2(c);
            } else if (this._state === BEFORE_CDATA_1) {

            /*
    		*	cdata
    		*/
                this._stateBeforeCdata1(c);
            } else if (this._state === BEFORE_CDATA_2) {
                this._stateBeforeCdata2(c);
            } else if (this._state === BEFORE_CDATA_3) {
                this._stateBeforeCdata3(c);
            } else if (this._state === BEFORE_CDATA_4) {
                this._stateBeforeCdata4(c);
            } else if (this._state === BEFORE_CDATA_5) {
                this._stateBeforeCdata5(c);
            } else if (this._state === BEFORE_CDATA_6) {
                this._stateBeforeCdata6(c);
            } else if (this._state === IN_CDATA) {
                this._stateInCdata(c);
            } else if (this._state === AFTER_CDATA_1) {
                this._stateAfterCdata1(c);
            } else if (this._state === AFTER_CDATA_2) {
                this._stateAfterCdata2(c);
            } else if (this._state === BEFORE_SPECIAL) {

            /*
    		* special tags
    		*/
                this._stateBeforeSpecial(c);
            } else if (this._state === BEFORE_SPECIAL_END) {
                this._stateBeforeSpecialEnd(c);
            } else if (this._state === BEFORE_SCRIPT_1) {

            /*
    		* script
    		*/
                this._stateBeforeScript1(c);
            } else if (this._state === BEFORE_SCRIPT_2) {
                this._stateBeforeScript2(c);
            } else if (this._state === BEFORE_SCRIPT_3) {
                this._stateBeforeScript3(c);
            } else if (this._state === BEFORE_SCRIPT_4) {
                this._stateBeforeScript4(c);
            } else if (this._state === BEFORE_SCRIPT_5) {
                this._stateBeforeScript5(c);
            } else if (this._state === AFTER_SCRIPT_1) {
                this._stateAfterScript1(c);
            } else if (this._state === AFTER_SCRIPT_2) {
                this._stateAfterScript2(c);
            } else if (this._state === AFTER_SCRIPT_3) {
                this._stateAfterScript3(c);
            } else if (this._state === AFTER_SCRIPT_4) {
                this._stateAfterScript4(c);
            } else if (this._state === AFTER_SCRIPT_5) {
                this._stateAfterScript5(c);
            } else if (this._state === BEFORE_STYLE_1) {

            /*
    		* style
    		*/
                this._stateBeforeStyle1(c);
            } else if (this._state === BEFORE_STYLE_2) {
                this._stateBeforeStyle2(c);
            } else if (this._state === BEFORE_STYLE_3) {
                this._stateBeforeStyle3(c);
            } else if (this._state === BEFORE_STYLE_4) {
                this._stateBeforeStyle4(c);
            } else if (this._state === AFTER_STYLE_1) {
                this._stateAfterStyle1(c);
            } else if (this._state === AFTER_STYLE_2) {
                this._stateAfterStyle2(c);
            } else if (this._state === AFTER_STYLE_3) {
                this._stateAfterStyle3(c);
            } else if (this._state === AFTER_STYLE_4) {
                this._stateAfterStyle4(c);
            } else if (this._state === BEFORE_ENTITY) {

            /*
    		* entities
    		*/
                this._stateBeforeEntity(c);
            } else if (this._state === BEFORE_NUMERIC_ENTITY) {
                this._stateBeforeNumericEntity(c);
            } else if (this._state === IN_NAMED_ENTITY) {
                this._stateInNamedEntity(c);
            } else if (this._state === IN_NUMERIC_ENTITY) {
                this._stateInNumericEntity(c);
            } else if (this._state === IN_HEX_ENTITY) {
                this._stateInHexEntity(c);
            } else {
                this._cbs.onerror(Error("unknown _state"), this._state);
            }

            this._index++;
        }

        this._cleanup();
    };

    Tokenizer.prototype.pause = function() {
        this._running = false;
    };
    Tokenizer.prototype.resume = function() {
        this._running = true;

        if (this._index < this._buffer.length) {
            this._parse();
        }
        if (this._ended) {
            this._finish();
        }
    };

    Tokenizer.prototype.end = function(chunk) {
        if (this._ended) { this._cbs.onerror(Error(".end() after done!")); }
        if (chunk) { this.write(chunk); }

        this._ended = true;

        if (this._running) { this._finish(); }
    };

    Tokenizer.prototype._finish = function() {
        //if there is remaining data, emit it in a reasonable way
        if (this._sectionStart < this._index) {
            this._handleTrailingData();
        }

        this._cbs.onend();
    };

    Tokenizer.prototype._handleTrailingData = function() {
        var data = this._buffer.substr(this._sectionStart);

        if (
            this._state === IN_CDATA ||
            this._state === AFTER_CDATA_1 ||
            this._state === AFTER_CDATA_2
        ) {
            this._cbs.oncdata(data);
        } else if (
            this._state === IN_COMMENT ||
            this._state === AFTER_COMMENT_1 ||
            this._state === AFTER_COMMENT_2
        ) {
            this._cbs.oncomment(data);
        } else if (this._state === IN_NAMED_ENTITY && !this._xmlMode) {
            this._parseLegacyEntity();
            if (this._sectionStart < this._index) {
                this._state = this._baseState;
                this._handleTrailingData();
            }
        } else if (this._state === IN_NUMERIC_ENTITY && !this._xmlMode) {
            this._decodeNumericEntity(2, 10);
            if (this._sectionStart < this._index) {
                this._state = this._baseState;
                this._handleTrailingData();
            }
        } else if (this._state === IN_HEX_ENTITY && !this._xmlMode) {
            this._decodeNumericEntity(3, 16);
            if (this._sectionStart < this._index) {
                this._state = this._baseState;
                this._handleTrailingData();
            }
        } else if (
            this._state !== IN_TAG_NAME &&
            this._state !== BEFORE_ATTRIBUTE_NAME &&
            this._state !== BEFORE_ATTRIBUTE_VALUE &&
            this._state !== AFTER_ATTRIBUTE_NAME &&
            this._state !== IN_ATTRIBUTE_NAME &&
            this._state !== IN_ATTRIBUTE_VALUE_SQ &&
            this._state !== IN_ATTRIBUTE_VALUE_DQ &&
            this._state !== IN_ATTRIBUTE_VALUE_NQ &&
            this._state !== IN_CLOSING_TAG_NAME
        ) {
            this._cbs.ontext(data);
        }
        //else, ignore remaining data
        //TODO add a way to remove current tag
    };

    Tokenizer.prototype.reset = function() {
        Tokenizer.call(
            this,
            { xmlMode: this._xmlMode, decodeEntities: this._decodeEntities },
            this._cbs
        );
    };

    Tokenizer.prototype.getAbsoluteIndex = function() {
        return this._bufferOffset + this._index;
    };

    Tokenizer.prototype._getSection = function() {
        return this._buffer.substring(this._sectionStart, this._index);
    };

    Tokenizer.prototype._emitToken = function(name) {
        this._cbs[name](this._getSection());
        this._sectionStart = -1;
    };

    Tokenizer.prototype._emitPartial = function(value) {
        if (this._baseState !== TEXT) {
            this._cbs.onattribdata(value); //TODO implement the new event
        } else {
            this._cbs.ontext(value);
        }
    };

    var global$1 = (typeof global !== "undefined" ? global :
                typeof self !== "undefined" ? self :
                typeof window !== "undefined" ? window : {});

    var lookup = [];
    var revLookup = [];
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
    var inited = false;
    function init () {
      inited = true;
      var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
      for (var i = 0, len = code.length; i < len; ++i) {
        lookup[i] = code[i];
        revLookup[code.charCodeAt(i)] = i;
      }

      revLookup['-'.charCodeAt(0)] = 62;
      revLookup['_'.charCodeAt(0)] = 63;
    }

    function toByteArray (b64) {
      if (!inited) {
        init();
      }
      var i, j, l, tmp, placeHolders, arr;
      var len = b64.length;

      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }

      // the number of equal signs (place holders)
      // if there are two placeholders, than the two characters before it
      // represent one byte
      // if there is only one, then the three characters before it represent 2 bytes
      // this is just a cheap hack to not do indexOf twice
      placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0;

      // base64 is 4/3 + up to two characters of the original data
      arr = new Arr(len * 3 / 4 - placeHolders);

      // if there are placeholders, only get up to the last complete 4 chars
      l = placeHolders > 0 ? len - 4 : len;

      var L = 0;

      for (i = 0, j = 0; i < l; i += 4, j += 3) {
        tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)];
        arr[L++] = (tmp >> 16) & 0xFF;
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      if (placeHolders === 2) {
        tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4);
        arr[L++] = tmp & 0xFF;
      } else if (placeHolders === 1) {
        tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2);
        arr[L++] = (tmp >> 8) & 0xFF;
        arr[L++] = tmp & 0xFF;
      }

      return arr
    }

    function tripletToBase64 (num) {
      return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
    }

    function encodeChunk (uint8, start, end) {
      var tmp;
      var output = [];
      for (var i = start; i < end; i += 3) {
        tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2]);
        output.push(tripletToBase64(tmp));
      }
      return output.join('')
    }

    function fromByteArray (uint8) {
      if (!inited) {
        init();
      }
      var tmp;
      var len = uint8.length;
      var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
      var output = '';
      var parts = [];
      var maxChunkLength = 16383; // must be multiple of 3

      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
      }

      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1];
        output += lookup[tmp >> 2];
        output += lookup[(tmp << 4) & 0x3F];
        output += '==';
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + (uint8[len - 1]);
        output += lookup[tmp >> 10];
        output += lookup[(tmp >> 4) & 0x3F];
        output += lookup[(tmp << 2) & 0x3F];
        output += '=';
      }

      parts.push(output);

      return parts.join('')
    }

    function read (buffer, offset, isLE, mLen, nBytes) {
      var e, m;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var nBits = -7;
      var i = isLE ? (nBytes - 1) : 0;
      var d = isLE ? -1 : 1;
      var s = buffer[offset + i];

      i += d;

      e = s & ((1 << (-nBits)) - 1);
      s >>= (-nBits);
      nBits += eLen;
      for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      m = e & ((1 << (-nBits)) - 1);
      e >>= (-nBits);
      nBits += mLen;
      for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

      if (e === 0) {
        e = 1 - eBias;
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }

    function write (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c;
      var eLen = nBytes * 8 - mLen - 1;
      var eMax = (1 << eLen) - 1;
      var eBias = eMax >> 1;
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
      var i = isLE ? 0 : (nBytes - 1);
      var d = isLE ? 1 : -1;
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

      value = Math.abs(value);

      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
      } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--;
          c *= 2;
        }
        if (e + eBias >= 1) {
          value += rt / c;
        } else {
          value += rt * Math.pow(2, 1 - eBias);
        }
        if (value * c >= 2) {
          e++;
          c /= 2;
        }

        if (e + eBias >= eMax) {
          m = 0;
          e = eMax;
        } else if (e + eBias >= 1) {
          m = (value * c - 1) * Math.pow(2, mLen);
          e = e + eBias;
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
          e = 0;
        }
      }

      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

      e = (e << mLen) | m;
      eLen += mLen;
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

      buffer[offset + i - d] |= s * 128;
    }

    var toString = {}.toString;

    var isArray = Array.isArray || function (arr) {
      return toString.call(arr) == '[object Array]';
    };

    var INSPECT_MAX_BYTES = 50;

    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Use Object implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * Due to various browser bugs, sometimes the Object implementation will be used even
     * when the browser supports typed arrays.
     *
     * Note:
     *
     *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
     *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
     *
     *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
     *
     *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
     *     incorrect length in some situations.

     * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
     * get the Object implementation, which is slower but behaves correctly.
     */
    Buffer.TYPED_ARRAY_SUPPORT = global$1.TYPED_ARRAY_SUPPORT !== undefined
      ? global$1.TYPED_ARRAY_SUPPORT
      : true;

    function kMaxLength () {
      return Buffer.TYPED_ARRAY_SUPPORT
        ? 0x7fffffff
        : 0x3fffffff
    }

    function createBuffer (that, length) {
      if (kMaxLength() < length) {
        throw new RangeError('Invalid typed array length')
      }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = new Uint8Array(length);
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        if (that === null) {
          that = new Buffer(length);
        }
        that.length = length;
      }

      return that
    }

    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */

    function Buffer (arg, encodingOrOffset, length) {
      if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
        return new Buffer(arg, encodingOrOffset, length)
      }

      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new Error(
            'If encoding is specified then the first argument must be a string'
          )
        }
        return allocUnsafe(this, arg)
      }
      return from(this, arg, encodingOrOffset, length)
    }

    Buffer.poolSize = 8192; // not used by this implementation

    // TODO: Legacy, not needed anymore. Remove in next major version.
    Buffer._augment = function (arr) {
      arr.__proto__ = Buffer.prototype;
      return arr
    };

    function from (that, value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('"value" argument must not be a number')
      }

      if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
        return fromArrayBuffer(that, value, encodingOrOffset, length)
      }

      if (typeof value === 'string') {
        return fromString(that, value, encodingOrOffset)
      }

      return fromObject(that, value)
    }

    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(null, value, encodingOrOffset, length)
    };

    if (Buffer.TYPED_ARRAY_SUPPORT) {
      Buffer.prototype.__proto__ = Uint8Array.prototype;
      Buffer.__proto__ = Uint8Array;
    }

    function assertSize (size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be a number')
      } else if (size < 0) {
        throw new RangeError('"size" argument must not be negative')
      }
    }

    function alloc (that, size, fill, encoding) {
      assertSize(size);
      if (size <= 0) {
        return createBuffer(that, size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer(that, size).fill(fill, encoding)
          : createBuffer(that, size).fill(fill)
      }
      return createBuffer(that, size)
    }

    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(null, size, fill, encoding)
    };

    function allocUnsafe (that, size) {
      assertSize(size);
      that = createBuffer(that, size < 0 ? 0 : checked(size) | 0);
      if (!Buffer.TYPED_ARRAY_SUPPORT) {
        for (var i = 0; i < size; ++i) {
          that[i] = 0;
        }
      }
      return that
    }

    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(null, size)
    };
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(null, size)
    };

    function fromString (that, string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8';
      }

      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('"encoding" must be a valid string encoding')
      }

      var length = byteLength(string, encoding) | 0;
      that = createBuffer(that, length);

      var actual = that.write(string, encoding);

      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        that = that.slice(0, actual);
      }

      return that
    }

    function fromArrayLike (that, array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0;
      that = createBuffer(that, length);
      for (var i = 0; i < length; i += 1) {
        that[i] = array[i] & 255;
      }
      return that
    }

    function fromArrayBuffer (that, array, byteOffset, length) {
      array.byteLength; // this throws if `array` is not a valid ArrayBuffer

      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('\'offset\' is out of bounds')
      }

      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('\'length\' is out of bounds')
      }

      if (byteOffset === undefined && length === undefined) {
        array = new Uint8Array(array);
      } else if (length === undefined) {
        array = new Uint8Array(array, byteOffset);
      } else {
        array = new Uint8Array(array, byteOffset, length);
      }

      if (Buffer.TYPED_ARRAY_SUPPORT) {
        // Return an augmented `Uint8Array` instance, for best performance
        that = array;
        that.__proto__ = Buffer.prototype;
      } else {
        // Fallback: Return an object instance of the Buffer class
        that = fromArrayLike(that, array);
      }
      return that
    }

    function fromObject (that, obj) {
      if (internalIsBuffer(obj)) {
        var len = checked(obj.length) | 0;
        that = createBuffer(that, len);

        if (that.length === 0) {
          return that
        }

        obj.copy(that, 0, 0, len);
        return that
      }

      if (obj) {
        if ((typeof ArrayBuffer !== 'undefined' &&
            obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
          if (typeof obj.length !== 'number' || isnan(obj.length)) {
            return createBuffer(that, 0)
          }
          return fromArrayLike(that, obj)
        }

        if (obj.type === 'Buffer' && isArray(obj.data)) {
          return fromArrayLike(that, obj.data)
        }
      }

      throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
    }

    function checked (length) {
      // Note: cannot use `length < kMaxLength()` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= kMaxLength()) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                             'size: 0x' + kMaxLength().toString(16) + ' bytes')
      }
      return length | 0
    }
    Buffer.isBuffer = isBuffer;
    function internalIsBuffer (b) {
      return !!(b != null && b._isBuffer)
    }

    Buffer.compare = function compare (a, b) {
      if (!internalIsBuffer(a) || !internalIsBuffer(b)) {
        throw new TypeError('Arguments must be Buffers')
      }

      if (a === b) { return 0 }

      var x = a.length;
      var y = b.length;

      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i];
          y = b[i];
          break
        }
      }

      if (x < y) { return -1 }
      if (y < x) { return 1 }
      return 0
    };

    Buffer.isEncoding = function isEncoding (encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    };

    Buffer.concat = function concat (list, length) {
      if (!isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }

      if (list.length === 0) {
        return Buffer.alloc(0)
      }

      var i;
      if (length === undefined) {
        length = 0;
        for (i = 0; i < list.length; ++i) {
          length += list[i].length;
        }
      }

      var buffer = Buffer.allocUnsafe(length);
      var pos = 0;
      for (i = 0; i < list.length; ++i) {
        var buf = list[i];
        if (!internalIsBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos);
        pos += buf.length;
      }
      return buffer
    };

    function byteLength (string, encoding) {
      if (internalIsBuffer(string)) {
        return string.length
      }
      if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
          (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        string = '' + string;
      }

      var len = string.length;
      if (len === 0) { return 0 }

      // Use a for loop to avoid recursion
      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
          case undefined:
            return utf8ToBytes(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes(string).length
          default:
            if (loweredCase) { return utf8ToBytes(string).length } // assume utf8
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    }
    Buffer.byteLength = byteLength;

    function slowToString (encoding, start, end) {
      var loweredCase = false;

      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.

      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0;
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }

      if (end === undefined || end > this.length) {
        end = this.length;
      }

      if (end <= 0) {
        return ''
      }

      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0;
      start >>>= 0;

      if (end <= start) {
        return ''
      }

      if (!encoding) { encoding = 'utf8'; }

      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end)

          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end)

          case 'ascii':
            return asciiSlice(this, start, end)

          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end)

          case 'base64':
            return base64Slice(this, start, end)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end)

          default:
            if (loweredCase) { throw new TypeError('Unknown encoding: ' + encoding) }
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
        }
      }
    }

    // The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
    // Buffer instances.
    Buffer.prototype._isBuffer = true;

    function swap (b, n, m) {
      var i = b[n];
      b[n] = b[m];
      b[m] = i;
    }

    Buffer.prototype.swap16 = function swap16 () {
      var len = this.length;
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1);
      }
      return this
    };

    Buffer.prototype.swap32 = function swap32 () {
      var len = this.length;
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
      }
      return this
    };

    Buffer.prototype.swap64 = function swap64 () {
      var len = this.length;
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
      }
      return this
    };

    Buffer.prototype.toString = function toString () {
      var length = this.length | 0;
      if (length === 0) { return '' }
      if (arguments.length === 0) { return utf8Slice(this, 0, length) }
      return slowToString.apply(this, arguments)
    };

    Buffer.prototype.equals = function equals (b) {
      if (!internalIsBuffer(b)) { throw new TypeError('Argument must be a Buffer') }
      if (this === b) { return true }
      return Buffer.compare(this, b) === 0
    };

    Buffer.prototype.inspect = function inspect () {
      var str = '';
      var max = INSPECT_MAX_BYTES;
      if (this.length > 0) {
        str = this.toString('hex', 0, max).match(/.{2}/g).join(' ');
        if (this.length > max) { str += ' ... '; }
      }
      return '<Buffer ' + str + '>'
    };

    Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
      if (!internalIsBuffer(target)) {
        throw new TypeError('Argument must be a Buffer')
      }

      if (start === undefined) {
        start = 0;
      }
      if (end === undefined) {
        end = target ? target.length : 0;
      }
      if (thisStart === undefined) {
        thisStart = 0;
      }
      if (thisEnd === undefined) {
        thisEnd = this.length;
      }

      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }

      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }

      start >>>= 0;
      end >>>= 0;
      thisStart >>>= 0;
      thisEnd >>>= 0;

      if (this === target) { return 0 }

      var x = thisEnd - thisStart;
      var y = end - start;
      var len = Math.min(x, y);

      var thisCopy = this.slice(thisStart, thisEnd);
      var targetCopy = target.slice(start, end);

      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i];
          y = targetCopy[i];
          break
        }
      }

      if (x < y) { return -1 }
      if (y < x) { return 1 }
      return 0
    };

    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) { return -1 }

      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff;
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000;
      }
      byteOffset = +byteOffset;  // Coerce to Number.
      if (isNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1);
      }

      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) { byteOffset = buffer.length + byteOffset; }
      if (byteOffset >= buffer.length) {
        if (dir) { return -1 }
        else { byteOffset = buffer.length - 1; }
      } else if (byteOffset < 0) {
        if (dir) { byteOffset = 0; }
        else { return -1 }
      }

      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding);
      }

      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (internalIsBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF; // Search for a byte value [0-255]
        if (Buffer.TYPED_ARRAY_SUPPORT &&
            typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
      }

      throw new TypeError('val must be string, number or Buffer')
    }

    function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
      var indexSize = 1;
      var arrLength = arr.length;
      var valLength = val.length;

      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2;
          arrLength /= 2;
          valLength /= 2;
          byteOffset /= 2;
        }
      }

      function read (buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }

      var i;
      if (dir) {
        var foundIndex = -1;
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) { foundIndex = i; }
            if (i - foundIndex + 1 === valLength) { return foundIndex * indexSize }
          } else {
            if (foundIndex !== -1) { i -= i - foundIndex; }
            foundIndex = -1;
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) { byteOffset = arrLength - valLength; }
        for (i = byteOffset; i >= 0; i--) {
          var found = true;
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false;
              break
            }
          }
          if (found) { return i }
        }
      }

      return -1
    }

    Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    };

    Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    };

    Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    };

    function hexWrite (buf, string, offset, length) {
      offset = Number(offset) || 0;
      var remaining = buf.length - offset;
      if (!length) {
        length = remaining;
      } else {
        length = Number(length);
        if (length > remaining) {
          length = remaining;
        }
      }

      // must be an even number of digits
      var strLen = string.length;
      if (strLen % 2 !== 0) { throw new TypeError('Invalid hex string') }

      if (length > strLen / 2) {
        length = strLen / 2;
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (isNaN(parsed)) { return i }
        buf[offset + i] = parsed;
      }
      return i
    }

    function utf8Write (buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }

    function asciiWrite (buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length)
    }

    function latin1Write (buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length)
    }

    function base64Write (buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length)
    }

    function ucs2Write (buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }

    Buffer.prototype.write = function write (string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
      // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
      // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset | 0;
        if (isFinite(length)) {
          length = length | 0;
          if (encoding === undefined) { encoding = 'utf8'; }
        } else {
          encoding = length;
          length = undefined;
        }
      // legacy write(string, encoding, offset, length) - remove in v0.13
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }

      var remaining = this.length - offset;
      if (length === undefined || length > remaining) { length = remaining; }

      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }

      if (!encoding) { encoding = 'utf8'; }

      var loweredCase = false;
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)

          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)

          case 'ascii':
            return asciiWrite(this, string, offset, length)

          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length)

          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)

          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)

          default:
            if (loweredCase) { throw new TypeError('Unknown encoding: ' + encoding) }
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
        }
      }
    };

    Buffer.prototype.toJSON = function toJSON () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    };

    function base64Slice (buf, start, end) {
      if (start === 0 && end === buf.length) {
        return fromByteArray(buf)
      } else {
        return fromByteArray(buf.slice(start, end))
      }
    }

    function utf8Slice (buf, start, end) {
      end = Math.min(buf.length, end);
      var res = [];

      var i = start;
      while (i < end) {
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = (firstByte > 0xEF) ? 4
          : (firstByte > 0xDF) ? 3
          : (firstByte > 0xBF) ? 2
          : 1;

        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint;

          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte;
              }
              break
            case 2:
              secondByte = buf[i + 1];
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 3:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint;
                }
              }
              break
            case 4:
              secondByte = buf[i + 1];
              thirdByte = buf[i + 2];
              fourthByte = buf[i + 3];
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint;
                }
              }
          }
        }

        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD;
          bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000;
          res.push(codePoint >>> 10 & 0x3FF | 0xD800);
          codePoint = 0xDC00 | codePoint & 0x3FF;
        }

        res.push(codePoint);
        i += bytesPerSequence;
      }

      return decodeCodePointsArray(res)
    }

    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000;

    function decodeCodePointsArray (codePoints) {
      var len = codePoints.length;
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }

      // Decode in chunks to avoid "call stack size exceeded".
      var res = '';
      var i = 0;
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        );
      }
      return res
    }

    function asciiSlice (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F);
      }
      return ret
    }

    function latin1Slice (buf, start, end) {
      var ret = '';
      end = Math.min(buf.length, end);

      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i]);
      }
      return ret
    }

    function hexSlice (buf, start, end) {
      var len = buf.length;

      if (!start || start < 0) { start = 0; }
      if (!end || end < 0 || end > len) { end = len; }

      var out = '';
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i]);
      }
      return out
    }

    function utf16leSlice (buf, start, end) {
      var bytes = buf.slice(start, end);
      var res = '';
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
      }
      return res
    }

    Buffer.prototype.slice = function slice (start, end) {
      var len = this.length;
      start = ~~start;
      end = end === undefined ? len : ~~end;

      if (start < 0) {
        start += len;
        if (start < 0) { start = 0; }
      } else if (start > len) {
        start = len;
      }

      if (end < 0) {
        end += len;
        if (end < 0) { end = 0; }
      } else if (end > len) {
        end = len;
      }

      if (end < start) { end = start; }

      var newBuf;
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        newBuf = this.subarray(start, end);
        newBuf.__proto__ = Buffer.prototype;
      } else {
        var sliceLen = end - start;
        newBuf = new Buffer(sliceLen, undefined);
        for (var i = 0; i < sliceLen; ++i) {
          newBuf[i] = this[i + start];
        }
      }

      return newBuf
    };

    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset (offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) { throw new RangeError('offset is not uint') }
      if (offset + ext > length) { throw new RangeError('Trying to access beyond buffer length') }
    }

    Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) { checkOffset(offset, byteLength, this.length); }

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }

      return val
    };

    Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length);
      }

      var val = this[offset + --byteLength];
      var mul = 1;
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul;
      }

      return val
    };

    Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 1, this.length); }
      return this[offset]
    };

    Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 2, this.length); }
      return this[offset] | (this[offset + 1] << 8)
    };

    Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 2, this.length); }
      return (this[offset] << 8) | this[offset + 1]
    };

    Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 4, this.length); }

      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
          (this[offset + 3] * 0x1000000)
    };

    Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 4, this.length); }

      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    };

    Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) { checkOffset(offset, byteLength, this.length); }

      var val = this[offset];
      var mul = 1;
      var i = 0;
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) { val -= Math.pow(2, 8 * byteLength); }

      return val
    };

    Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) { checkOffset(offset, byteLength, this.length); }

      var i = byteLength;
      var mul = 1;
      var val = this[offset + --i];
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul;
      }
      mul *= 0x80;

      if (val >= mul) { val -= Math.pow(2, 8 * byteLength); }

      return val
    };

    Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 1, this.length); }
      if (!(this[offset] & 0x80)) { return (this[offset]) }
      return ((0xff - this[offset] + 1) * -1)
    };

    Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 2, this.length); }
      var val = this[offset] | (this[offset + 1] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 2, this.length); }
      var val = this[offset + 1] | (this[offset] << 8);
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    };

    Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 4, this.length); }

      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    };

    Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 4, this.length); }

      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    };

    Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 4, this.length); }
      return read(this, offset, true, 23, 4)
    };

    Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 4, this.length); }
      return read(this, offset, false, 23, 4)
    };

    Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 8, this.length); }
      return read(this, offset, true, 52, 8)
    };

    Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
      if (!noAssert) { checkOffset(offset, 8, this.length); }
      return read(this, offset, false, 52, 8)
    };

    function checkInt (buf, value, offset, ext, max, min) {
      if (!internalIsBuffer(buf)) { throw new TypeError('"buffer" argument must be a Buffer instance') }
      if (value > max || value < min) { throw new RangeError('"value" argument is out of bounds') }
      if (offset + ext > buf.length) { throw new RangeError('Index out of range') }
    }

    Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var mul = 1;
      var i = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      byteLength = byteLength | 0;
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        checkInt(this, value, offset, byteLength, maxBytes, 0);
      }

      var i = byteLength - 1;
      var mul = 1;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) { checkInt(this, value, offset, 1, 0xff, 0); }
      if (!Buffer.TYPED_ARRAY_SUPPORT) { value = Math.floor(value); }
      this[offset] = (value & 0xff);
      return offset + 1
    };

    function objectWriteUInt16 (buf, value, offset, littleEndian) {
      if (value < 0) { value = 0xffff + value + 1; }
      for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
        buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
          (littleEndian ? i : 1 - i) * 8;
      }
    }

    Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) { checkInt(this, value, offset, 2, 0xffff, 0); }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) { checkInt(this, value, offset, 2, 0xffff, 0); }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2
    };

    function objectWriteUInt32 (buf, value, offset, littleEndian) {
      if (value < 0) { value = 0xffffffff + value + 1; }
      for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
        buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff;
      }
    }

    Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) { checkInt(this, value, offset, 4, 0xffffffff, 0); }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset + 3] = (value >>> 24);
        this[offset + 2] = (value >>> 16);
        this[offset + 1] = (value >>> 8);
        this[offset] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) { checkInt(this, value, offset, 4, 0xffffffff, 0); }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4
    };

    Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = 0;
      var mul = 1;
      var sub = 0;
      this[offset] = value & 0xFF;
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);

        checkInt(this, value, offset, byteLength, limit - 1, -limit);
      }

      var i = byteLength - 1;
      var mul = 1;
      var sub = 0;
      this[offset + i] = value & 0xFF;
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1;
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF;
      }

      return offset + byteLength
    };

    Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) { checkInt(this, value, offset, 1, 0x7f, -0x80); }
      if (!Buffer.TYPED_ARRAY_SUPPORT) { value = Math.floor(value); }
      if (value < 0) { value = 0xff + value + 1; }
      this[offset] = (value & 0xff);
      return offset + 1
    };

    Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) { checkInt(this, value, offset, 2, 0x7fff, -0x8000); }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
      } else {
        objectWriteUInt16(this, value, offset, true);
      }
      return offset + 2
    };

    Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) { checkInt(this, value, offset, 2, 0x7fff, -0x8000); }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 8);
        this[offset + 1] = (value & 0xff);
      } else {
        objectWriteUInt16(this, value, offset, false);
      }
      return offset + 2
    };

    Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) { checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000); }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value & 0xff);
        this[offset + 1] = (value >>> 8);
        this[offset + 2] = (value >>> 16);
        this[offset + 3] = (value >>> 24);
      } else {
        objectWriteUInt32(this, value, offset, true);
      }
      return offset + 4
    };

    Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
      value = +value;
      offset = offset | 0;
      if (!noAssert) { checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000); }
      if (value < 0) { value = 0xffffffff + value + 1; }
      if (Buffer.TYPED_ARRAY_SUPPORT) {
        this[offset] = (value >>> 24);
        this[offset + 1] = (value >>> 16);
        this[offset + 2] = (value >>> 8);
        this[offset + 3] = (value & 0xff);
      } else {
        objectWriteUInt32(this, value, offset, false);
      }
      return offset + 4
    };

    function checkIEEE754 (buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) { throw new RangeError('Index out of range') }
      if (offset < 0) { throw new RangeError('Index out of range') }
    }

    function writeFloat (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4);
      }
      write(buf, value, offset, littleEndian, 23, 4);
      return offset + 4
    }

    Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert)
    };

    Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert)
    };

    function writeDouble (buf, value, offset, littleEndian, noAssert) {
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8);
      }
      write(buf, value, offset, littleEndian, 52, 8);
      return offset + 8
    }

    Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert)
    };

    Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert)
    };

    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy (target, targetStart, start, end) {
      if (!start) { start = 0; }
      if (!end && end !== 0) { end = this.length; }
      if (targetStart >= target.length) { targetStart = target.length; }
      if (!targetStart) { targetStart = 0; }
      if (end > 0 && end < start) { end = start; }

      // Copy 0 bytes; we're done
      if (end === start) { return 0 }
      if (target.length === 0 || this.length === 0) { return 0 }

      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) { throw new RangeError('sourceStart out of bounds') }
      if (end < 0) { throw new RangeError('sourceEnd out of bounds') }

      // Are we oob?
      if (end > this.length) { end = this.length; }
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start;
      }

      var len = end - start;
      var i;

      if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start];
        }
      } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
        // ascending copy from start
        for (i = 0; i < len; ++i) {
          target[i + targetStart] = this[i + start];
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, start + len),
          targetStart
        );
      }

      return len
    };

    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill (val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start;
          start = 0;
          end = this.length;
        } else if (typeof end === 'string') {
          encoding = end;
          end = this.length;
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0);
          if (code < 256) {
            val = code;
          }
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
      } else if (typeof val === 'number') {
        val = val & 255;
      }

      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }

      if (end <= start) {
        return this
      }

      start = start >>> 0;
      end = end === undefined ? this.length : end >>> 0;

      if (!val) { val = 0; }

      var i;
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val;
        }
      } else {
        var bytes = internalIsBuffer(val)
          ? val
          : utf8ToBytes(new Buffer(val, encoding).toString());
        var len = bytes.length;
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len];
        }
      }

      return this
    };

    // HELPER FUNCTIONS
    // ================

    var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g;

    function base64clean (str) {
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = stringtrim(str).replace(INVALID_BASE64_RE, '');
      // Node converts strings with length < 2 to ''
      if (str.length < 2) { return '' }
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '=';
      }
      return str
    }

    function stringtrim (str) {
      if (str.trim) { return str.trim() }
      return str.replace(/^\s+|\s+$/g, '')
    }

    function toHex (n) {
      if (n < 16) { return '0' + n.toString(16) }
      return n.toString(16)
    }

    function utf8ToBytes (string, units) {
      units = units || Infinity;
      var codePoint;
      var length = string.length;
      var leadSurrogate = null;
      var bytes = [];

      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i);

        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) { bytes.push(0xEF, 0xBF, 0xBD); }
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) { bytes.push(0xEF, 0xBF, 0xBD); }
              continue
            }

            // valid lead
            leadSurrogate = codePoint;

            continue
          }

          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) { bytes.push(0xEF, 0xBF, 0xBD); }
            leadSurrogate = codePoint;
            continue
          }

          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) { bytes.push(0xEF, 0xBF, 0xBD); }
        }

        leadSurrogate = null;

        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) { break }
          bytes.push(codePoint);
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) { break }
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) { break }
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) { break }
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          );
        } else {
          throw new Error('Invalid code point')
        }
      }

      return bytes
    }

    function asciiToBytes (str) {
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF);
      }
      return byteArray
    }

    function utf16leToBytes (str, units) {
      var c, hi, lo;
      var byteArray = [];
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) { break }

        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
      }

      return byteArray
    }


    function base64ToBytes (str) {
      return toByteArray(base64clean(str))
    }

    function blitBuffer (src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) { break }
        dst[i + offset] = src[i];
      }
      return i
    }

    function isnan (val) {
      return val !== val // eslint-disable-line no-self-compare
    }


    // the following is from is-buffer, also by Feross Aboukhadijeh and with same lisence
    // The _isBuffer check is for Safari 5-7 support, because it's missing
    // Object.prototype.constructor. Remove this eventually
    function isBuffer(obj) {
      return obj != null && (!!obj._isBuffer || isFastBuffer(obj) || isSlowBuffer(obj))
    }

    function isFastBuffer (obj) {
      return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
    }

    // For Node v0.10 support. Remove this eventually.
    function isSlowBuffer (obj) {
      return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isFastBuffer(obj.slice(0, 0))
    }

    // from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
    var performance = global$1.performance || {};
    var performanceNow =
      performance.now        ||
      performance.mozNow     ||
      performance.msNow      ||
      performance.oNow       ||
      performance.webkitNow  ||
      function(){ return (new Date()).getTime() };

    var inherits;
    if (typeof Object.create === 'function'){
      inherits = function inherits(ctor, superCtor) {
        // implementation from standard node.js 'util' module
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      };
    } else {
      inherits = function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function () {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      };
    }
    var inherits$1 = inherits;

    var formatRegExp = /%[sdj%]/g;
    function format(f) {
      var arguments$1 = arguments;

      if (!isString(f)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect(arguments$1[i]));
        }
        return objects.join(' ');
      }

      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f).replace(formatRegExp, function(x) {
        if (x === '%%') { return '%'; }
        if (i >= len) { return x; }
        switch (x) {
          case '%s': return String(args[i++]);
          case '%d': return Number(args[i++]);
          case '%j':
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return '[Circular]';
            }
          default:
            return x;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject(x)) {
          str += ' ' + x;
        } else {
          str += ' ' + inspect(x);
        }
      }
      return str;
    }

    // Mark that a method should not be used.
    // Returns a modified function which warns once by default.
    // If --no-deprecation is set, then it is a no-op.
    function deprecate(fn, msg) {
      // Allow for deprecating things in the process of starting up.
      if (isUndefined(global$1.process)) {
        return function() {
          return deprecate(fn, msg).apply(this, arguments);
        };
      }

      var warned = false;
      function deprecated() {
        if (!warned) {
          {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }

      return deprecated;
    }

    var debugs = {};
    var debugEnviron;
    function debuglog(set) {
      if (isUndefined(debugEnviron))
        { debugEnviron =  ''; }
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
          var pid = 0;
          debugs[set] = function() {
            var msg = format.apply(null, arguments);
            console.error('%s %d: %s', set, pid, msg);
          };
        } else {
          debugs[set] = function() {};
        }
      }
      return debugs[set];
    }

    /**
     * Echos the value of a value. Trys to print the value out
     * in the best way possible given the different types.
     *
     * @param {Object} obj The object to print out.
     * @param {Object} opts Optional options object that alters the output.
     */
    /* legacy: obj, showHidden, depth, colors*/
    function inspect(obj, opts) {
      // default options
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      // legacy...
      if (arguments.length >= 3) { ctx.depth = arguments[2]; }
      if (arguments.length >= 4) { ctx.colors = arguments[3]; }
      if (isBoolean(opts)) {
        // legacy...
        ctx.showHidden = opts;
      } else if (opts) {
        // got an "options" object
        _extend(ctx, opts);
      }
      // set default options
      if (isUndefined(ctx.showHidden)) { ctx.showHidden = false; }
      if (isUndefined(ctx.depth)) { ctx.depth = 2; }
      if (isUndefined(ctx.colors)) { ctx.colors = false; }
      if (isUndefined(ctx.customInspect)) { ctx.customInspect = true; }
      if (ctx.colors) { ctx.stylize = stylizeWithColor; }
      return formatValue(ctx, obj, ctx.depth);
    }

    // http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
    inspect.colors = {
      'bold' : [1, 22],
      'italic' : [3, 23],
      'underline' : [4, 24],
      'inverse' : [7, 27],
      'white' : [37, 39],
      'grey' : [90, 39],
      'black' : [30, 39],
      'blue' : [34, 39],
      'cyan' : [36, 39],
      'green' : [32, 39],
      'magenta' : [35, 39],
      'red' : [31, 39],
      'yellow' : [33, 39]
    };

    // Don't use 'blue' not visible on cmd.exe
    inspect.styles = {
      'special': 'cyan',
      'number': 'yellow',
      'boolean': 'yellow',
      'undefined': 'grey',
      'null': 'bold',
      'string': 'green',
      'date': 'magenta',
      // "name": intentionally not styling
      'regexp': 'red'
    };


    function stylizeWithColor(str, styleType) {
      var style = inspect.styles[styleType];

      if (style) {
        return '\u001b[' + inspect.colors[style][0] + 'm' + str +
               '\u001b[' + inspect.colors[style][1] + 'm';
      } else {
        return str;
      }
    }


    function stylizeNoColor(str, styleType) {
      return str;
    }


    function arrayToHash(array) {
      var hash = {};

      array.forEach(function(val, idx) {
        hash[val] = true;
      });

      return hash;
    }


    function formatValue(ctx, value, recurseTimes) {
      // Provide a hook for user-specified inspect functions.
      // Check that value is an object with an inspect function on it
      if (ctx.customInspect &&
          value &&
          isFunction(value.inspect) &&
          // Filter out the util module, it's inspect function is special
          value.inspect !== inspect &&
          // Also filter out any prototype objects using the circular check.
          !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }

      // Primitive types cannot have properties
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }

      // Look up the keys of the object.
      var keys = Object.keys(value);
      var visibleKeys = arrayToHash(keys);

      if (ctx.showHidden) {
        keys = Object.getOwnPropertyNames(value);
      }

      // IE doesn't make error fields non-enumerable
      // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
      if (isError(value)
          && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
        return formatError(value);
      }

      // Some type of object without properties can be shortcutted.
      if (keys.length === 0) {
        if (isFunction(value)) {
          var name = value.name ? ': ' + value.name : '';
          return ctx.stylize('[Function' + name + ']', 'special');
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        }
        if (isDate(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), 'date');
        }
        if (isError(value)) {
          return formatError(value);
        }
      }

      var base = '', array = false, braces = ['{', '}'];

      // Make Array say that they are Array
      if (isArray$1(value)) {
        array = true;
        braces = ['[', ']'];
      }

      // Make functions say that they are functions
      if (isFunction(value)) {
        var n = value.name ? ': ' + value.name : '';
        base = ' [Function' + n + ']';
      }

      // Make RegExps say that they are RegExps
      if (isRegExp(value)) {
        base = ' ' + RegExp.prototype.toString.call(value);
      }

      // Make dates with properties first say the date
      if (isDate(value)) {
        base = ' ' + Date.prototype.toUTCString.call(value);
      }

      // Make error with message first say the error
      if (isError(value)) {
        base = ' ' + formatError(value);
      }

      if (keys.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base + braces[1];
      }

      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
        } else {
          return ctx.stylize('[Object]', 'special');
        }
      }

      ctx.seen.push(value);

      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
      } else {
        output = keys.map(function(key) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
        });
      }

      ctx.seen.pop();

      return reduceToSingleString(output, base, braces);
    }


    function formatPrimitive(ctx, value) {
      if (isUndefined(value))
        { return ctx.stylize('undefined', 'undefined'); }
      if (isString(value)) {
        var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                                 .replace(/'/g, "\\'")
                                                 .replace(/\\"/g, '"') + '\'';
        return ctx.stylize(simple, 'string');
      }
      if (isNumber(value))
        { return ctx.stylize('' + value, 'number'); }
      if (isBoolean(value))
        { return ctx.stylize('' + value, 'boolean'); }
      // For some reason typeof null is "object", so special case here.
      if (isNull(value))
        { return ctx.stylize('null', 'null'); }
    }


    function formatError(value) {
      return '[' + Error.prototype.toString.call(value) + ']';
    }


    function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
              String(i), true));
        } else {
          output.push('');
        }
      }
      keys.forEach(function(key) {
        if (!key.match(/^\d+$/)) {
          output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
              key, true));
        }
      });
      return output;
    }


    function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
      var name, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize('[Getter/Setter]', 'special');
        } else {
          str = ctx.stylize('[Getter]', 'special');
        }
      } else {
        if (desc.set) {
          str = ctx.stylize('[Setter]', 'special');
        }
      }
      if (!hasOwnProperty(visibleKeys, key)) {
        name = '[' + key + ']';
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf('\n') > -1) {
            if (array) {
              str = str.split('\n').map(function(line) {
                return '  ' + line;
              }).join('\n').substr(2);
            } else {
              str = '\n' + str.split('\n').map(function(line) {
                return '   ' + line;
              }).join('\n');
            }
          }
        } else {
          str = ctx.stylize('[Circular]', 'special');
        }
      }
      if (isUndefined(name)) {
        if (array && key.match(/^\d+$/)) {
          return str;
        }
        name = JSON.stringify('' + key);
        if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name = name.substr(1, name.length - 2);
          name = ctx.stylize(name, 'name');
        } else {
          name = name.replace(/'/g, "\\'")
                     .replace(/\\"/g, '"')
                     .replace(/(^"|"$)/g, "'");
          name = ctx.stylize(name, 'string');
        }
      }

      return name + ': ' + str;
    }


    function reduceToSingleString(output, base, braces) {
      var length = output.reduce(function(prev, cur) {
        if (cur.indexOf('\n') >= 0) ;
        return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
      }, 0);

      if (length > 60) {
        return braces[0] +
               (base === '' ? '' : base + '\n ') +
               ' ' +
               output.join(',\n  ') +
               ' ' +
               braces[1];
      }

      return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
    }


    // NOTE: These type checking functions intentionally don't use `instanceof`
    // because it is fragile and can be easily faked with `Object.create()`.
    function isArray$1(ar) {
      return Array.isArray(ar);
    }

    function isBoolean(arg) {
      return typeof arg === 'boolean';
    }

    function isNull(arg) {
      return arg === null;
    }

    function isNullOrUndefined(arg) {
      return arg == null;
    }

    function isNumber(arg) {
      return typeof arg === 'number';
    }

    function isString(arg) {
      return typeof arg === 'string';
    }

    function isSymbol(arg) {
      return typeof arg === 'symbol';
    }

    function isUndefined(arg) {
      return arg === void 0;
    }

    function isRegExp(re) {
      return isObject(re) && objectToString(re) === '[object RegExp]';
    }

    function isObject(arg) {
      return typeof arg === 'object' && arg !== null;
    }

    function isDate(d) {
      return isObject(d) && objectToString(d) === '[object Date]';
    }

    function isError(e) {
      return isObject(e) &&
          (objectToString(e) === '[object Error]' || e instanceof Error);
    }

    function isFunction(arg) {
      return typeof arg === 'function';
    }

    function isPrimitive(arg) {
      return arg === null ||
             typeof arg === 'boolean' ||
             typeof arg === 'number' ||
             typeof arg === 'string' ||
             typeof arg === 'symbol' ||  // ES6 symbol
             typeof arg === 'undefined';
    }

    function isBuffer$1(maybeBuf) {
      return isBuffer(maybeBuf);
    }

    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }


    function pad(n) {
      return n < 10 ? '0' + n.toString(10) : n.toString(10);
    }


    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                  'Oct', 'Nov', 'Dec'];

    // 26 Feb 16:19:34
    function timestamp() {
      var d = new Date();
      var time = [pad(d.getHours()),
                  pad(d.getMinutes()),
                  pad(d.getSeconds())].join(':');
      return [d.getDate(), months[d.getMonth()], time].join(' ');
    }


    // log is just a thin wrapper to console.log that prepends a timestamp
    function log() {
      console.log('%s - %s', timestamp(), format.apply(null, arguments));
    }

    function _extend(origin, add) {
      // Don't do anything if add isn't an object
      if (!add || !isObject(add)) { return origin; }

      var keys = Object.keys(add);
      var i = keys.length;
      while (i--) {
        origin[keys[i]] = add[keys[i]];
      }
      return origin;
    }
    function hasOwnProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    var require$$0 = {
      inherits: inherits$1,
      _extend: _extend,
      log: log,
      isBuffer: isBuffer$1,
      isPrimitive: isPrimitive,
      isFunction: isFunction,
      isError: isError,
      isDate: isDate,
      isObject: isObject,
      isRegExp: isRegExp,
      isUndefined: isUndefined,
      isSymbol: isSymbol,
      isString: isString,
      isNumber: isNumber,
      isNullOrUndefined: isNullOrUndefined,
      isNull: isNull,
      isBoolean: isBoolean,
      isArray: isArray$1,
      inspect: inspect,
      deprecate: deprecate,
      format: format,
      debuglog: debuglog
    };

    var inherits_browser = createCommonjsModule(function (module) {
    if (typeof Object.create === 'function') {
      // implementation from standard node.js 'util' module
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      // old school shim for old browsers
      module.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function () {};
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
    });

    var inherits$2 = createCommonjsModule(function (module) {
    try {
      var util = require$$0;
      /* istanbul ignore next */
      if (typeof util.inherits !== 'function') { throw ''; }
      module.exports = util.inherits;
    } catch (e) {
      /* istanbul ignore next */
      module.exports = inherits_browser;
    }
    });

    var domain;

    // This constructor is used to store event handlers. Instantiating this is
    // faster than explicitly calling `Object.create(null)` to get a "clean" empty
    // object (tested with v8 v4.9).
    function EventHandlers() {}
    EventHandlers.prototype = Object.create(null);

    function EventEmitter() {
      EventEmitter.init.call(this);
    }

    // nodejs oddity
    // require('events') === require('events').EventEmitter
    EventEmitter.EventEmitter = EventEmitter;

    EventEmitter.usingDomains = false;

    EventEmitter.prototype.domain = undefined;
    EventEmitter.prototype._events = undefined;
    EventEmitter.prototype._maxListeners = undefined;

    // By default EventEmitters will print a warning if more than 10 listeners are
    // added to it. This is a useful default which helps finding memory leaks.
    EventEmitter.defaultMaxListeners = 10;

    EventEmitter.init = function() {
      this.domain = null;
      if (EventEmitter.usingDomains) {
        // if there is an active domain, then attach to it.
        if (domain.active && !(this instanceof domain.Domain)) ;
      }

      if (!this._events || this._events === Object.getPrototypeOf(this)._events) {
        this._events = new EventHandlers();
        this._eventsCount = 0;
      }

      this._maxListeners = this._maxListeners || undefined;
    };

    // Obviously not all Emitters should be limited to 10. This function allows
    // that to be increased. Set to zero for unlimited.
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== 'number' || n < 0 || isNaN(n))
        { throw new TypeError('"n" argument must be a positive number'); }
      this._maxListeners = n;
      return this;
    };

    function $getMaxListeners(that) {
      if (that._maxListeners === undefined)
        { return EventEmitter.defaultMaxListeners; }
      return that._maxListeners;
    }

    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return $getMaxListeners(this);
    };

    // These standalone emit* functions are used to optimize calling of event
    // handlers for fast cases because emit() itself often has a variable number of
    // arguments and can be deoptimized because of that. These functions always have
    // the same number of arguments and thus do not get deoptimized, so the code
    // inside them can execute faster.
    function emitNone(handler, isFn, self) {
      if (isFn)
        { handler.call(self); }
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          { listeners[i].call(self); }
      }
    }
    function emitOne(handler, isFn, self, arg1) {
      if (isFn)
        { handler.call(self, arg1); }
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          { listeners[i].call(self, arg1); }
      }
    }
    function emitTwo(handler, isFn, self, arg1, arg2) {
      if (isFn)
        { handler.call(self, arg1, arg2); }
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          { listeners[i].call(self, arg1, arg2); }
      }
    }
    function emitThree(handler, isFn, self, arg1, arg2, arg3) {
      if (isFn)
        { handler.call(self, arg1, arg2, arg3); }
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          { listeners[i].call(self, arg1, arg2, arg3); }
      }
    }

    function emitMany(handler, isFn, self, args) {
      if (isFn)
        { handler.apply(self, args); }
      else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          { listeners[i].apply(self, args); }
      }
    }

    EventEmitter.prototype.emit = function emit(type) {
      var arguments$1 = arguments;

      var er, handler, len, args, i, events, domain;
      var doError = (type === 'error');

      events = this._events;
      if (events)
        { doError = (doError && events.error == null); }
      else if (!doError)
        { return false; }

      domain = this.domain;

      // If there is no 'error' event listener then throw.
      if (doError) {
        er = arguments[1];
        if (domain) {
          if (!er)
            { er = new Error('Uncaught, unspecified "error" event'); }
          er.domainEmitter = this;
          er.domain = domain;
          er.domainThrown = false;
          domain.emit('error', er);
        } else if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        } else {
          // At least give some kind of context to the user
          var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
          err.context = er;
          throw err;
        }
        return false;
      }

      handler = events[type];

      if (!handler)
        { return false; }

      var isFn = typeof handler === 'function';
      len = arguments.length;
      switch (len) {
        // fast cases
        case 1:
          emitNone(handler, isFn, this);
          break;
        case 2:
          emitOne(handler, isFn, this, arguments[1]);
          break;
        case 3:
          emitTwo(handler, isFn, this, arguments[1], arguments[2]);
          break;
        case 4:
          emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
          break;
        // slower
        default:
          args = new Array(len - 1);
          for (i = 1; i < len; i++)
            { args[i - 1] = arguments$1[i]; }
          emitMany(handler, isFn, this, args);
      }

      return true;
    };

    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;

      if (typeof listener !== 'function')
        { throw new TypeError('"listener" argument must be a function'); }

      events = target._events;
      if (!events) {
        events = target._events = new EventHandlers();
        target._eventsCount = 0;
      } else {
        // To avoid recursion in the case that type === "newListener"! Before
        // adding it to the listeners, first emit "newListener".
        if (events.newListener) {
          target.emit('newListener', type,
                      listener.listener ? listener.listener : listener);

          // Re-assign `events` because a newListener handler could have caused the
          // this._events to be assigned to a new object
          events = target._events;
        }
        existing = events[type];
      }

      if (!existing) {
        // Optimize the case of one listener. Don't need the extra array object.
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === 'function') {
          // Adding the second element, need to change to array.
          existing = events[type] = prepend ? [listener, existing] :
                                              [existing, listener];
        } else {
          // If we've already got an array, just append.
          if (prepend) {
            existing.unshift(listener);
          } else {
            existing.push(listener);
          }
        }

        // Check for listener leak
        if (!existing.warned) {
          m = $getMaxListeners(target);
          if (m && m > 0 && existing.length > m) {
            existing.warned = true;
            var w = new Error('Possible EventEmitter memory leak detected. ' +
                                existing.length + ' ' + type + ' listeners added. ' +
                                'Use emitter.setMaxListeners() to increase limit');
            w.name = 'MaxListenersExceededWarning';
            w.emitter = target;
            w.type = type;
            w.count = existing.length;
            emitWarning(w);
          }
        }
      }

      return target;
    }
    function emitWarning(e) {
      typeof console.warn === 'function' ? console.warn(e) : console.log(e);
    }
    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };

    EventEmitter.prototype.on = EventEmitter.prototype.addListener;

    EventEmitter.prototype.prependListener =
        function prependListener(type, listener) {
          return _addListener(this, type, listener, true);
        };

    function _onceWrap(target, type, listener) {
      var fired = false;
      function g() {
        target.removeListener(type, g);
        if (!fired) {
          fired = true;
          listener.apply(target, arguments);
        }
      }
      g.listener = listener;
      return g;
    }

    EventEmitter.prototype.once = function once(type, listener) {
      if (typeof listener !== 'function')
        { throw new TypeError('"listener" argument must be a function'); }
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };

    EventEmitter.prototype.prependOnceListener =
        function prependOnceListener(type, listener) {
          if (typeof listener !== 'function')
            { throw new TypeError('"listener" argument must be a function'); }
          this.prependListener(type, _onceWrap(this, type, listener));
          return this;
        };

    // emits a 'removeListener' event iff the listener was removed
    EventEmitter.prototype.removeListener =
        function removeListener(type, listener) {
          var list, events, position, i, originalListener;

          if (typeof listener !== 'function')
            { throw new TypeError('"listener" argument must be a function'); }

          events = this._events;
          if (!events)
            { return this; }

          list = events[type];
          if (!list)
            { return this; }

          if (list === listener || (list.listener && list.listener === listener)) {
            if (--this._eventsCount === 0)
              { this._events = new EventHandlers(); }
            else {
              delete events[type];
              if (events.removeListener)
                { this.emit('removeListener', type, list.listener || listener); }
            }
          } else if (typeof list !== 'function') {
            position = -1;

            for (i = list.length; i-- > 0;) {
              if (list[i] === listener ||
                  (list[i].listener && list[i].listener === listener)) {
                originalListener = list[i].listener;
                position = i;
                break;
              }
            }

            if (position < 0)
              { return this; }

            if (list.length === 1) {
              list[0] = undefined;
              if (--this._eventsCount === 0) {
                this._events = new EventHandlers();
                return this;
              } else {
                delete events[type];
              }
            } else {
              spliceOne(list, position);
            }

            if (events.removeListener)
              { this.emit('removeListener', type, originalListener || listener); }
          }

          return this;
        };

    EventEmitter.prototype.removeAllListeners =
        function removeAllListeners(type) {
          var listeners, events;

          events = this._events;
          if (!events)
            { return this; }

          // not listening for removeListener, no need to emit
          if (!events.removeListener) {
            if (arguments.length === 0) {
              this._events = new EventHandlers();
              this._eventsCount = 0;
            } else if (events[type]) {
              if (--this._eventsCount === 0)
                { this._events = new EventHandlers(); }
              else
                { delete events[type]; }
            }
            return this;
          }

          // emit removeListener for all listeners on all events
          if (arguments.length === 0) {
            var keys = Object.keys(events);
            for (var i = 0, key; i < keys.length; ++i) {
              key = keys[i];
              if (key === 'removeListener') { continue; }
              this.removeAllListeners(key);
            }
            this.removeAllListeners('removeListener');
            this._events = new EventHandlers();
            this._eventsCount = 0;
            return this;
          }

          listeners = events[type];

          if (typeof listeners === 'function') {
            this.removeListener(type, listeners);
          } else if (listeners) {
            // LIFO order
            do {
              this.removeListener(type, listeners[listeners.length - 1]);
            } while (listeners[0]);
          }

          return this;
        };

    EventEmitter.prototype.listeners = function listeners(type) {
      var evlistener;
      var ret;
      var events = this._events;

      if (!events)
        { ret = []; }
      else {
        evlistener = events[type];
        if (!evlistener)
          { ret = []; }
        else if (typeof evlistener === 'function')
          { ret = [evlistener.listener || evlistener]; }
        else
          { ret = unwrapListeners(evlistener); }
      }

      return ret;
    };

    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === 'function') {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };

    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events = this._events;

      if (events) {
        var evlistener = events[type];

        if (typeof evlistener === 'function') {
          return 1;
        } else if (evlistener) {
          return evlistener.length;
        }
      }

      return 0;
    }

    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
    };

    // About 1.5x faster than the two-arg version of Array#splice().
    function spliceOne(list, index) {
      for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
        { list[i] = list[k]; }
      list.pop();
    }

    function arrayClone(arr, i) {
      var copy = new Array(i);
      while (i--)
        { copy[i] = arr[i]; }
      return copy;
    }

    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }

    var Tokenizer$1 = Tokenizer_1;

    /*
    	Options:

    	xmlMode: Disables the special behavior for script/style tags (false by default)
    	lowerCaseAttributeNames: call .toLowerCase for each attribute name (true if xmlMode is `false`)
    	lowerCaseTags: call .toLowerCase for each tag name (true if xmlMode is `false`)
    */

    /*
    	Callbacks:

    	oncdataend,
    	oncdatastart,
    	onclosetag,
    	oncomment,
    	oncommentend,
    	onerror,
    	onopentag,
    	onprocessinginstruction,
    	onreset,
    	ontext
    */

    var formTags = {
        input: true,
        option: true,
        optgroup: true,
        select: true,
        button: true,
        datalist: true,
        textarea: true
    };

    var openImpliesClose = {
        tr: { tr: true, th: true, td: true },
        th: { th: true },
        td: { thead: true, th: true, td: true },
        body: { head: true, link: true, script: true },
        li: { li: true },
        p: { p: true },
        h1: { p: true },
        h2: { p: true },
        h3: { p: true },
        h4: { p: true },
        h5: { p: true },
        h6: { p: true },
        select: formTags,
        input: formTags,
        output: formTags,
        button: formTags,
        datalist: formTags,
        textarea: formTags,
        option: { option: true },
        optgroup: { optgroup: true }
    };

    var voidElements = {
        __proto__: null,
        area: true,
        base: true,
        basefont: true,
        br: true,
        col: true,
        command: true,
        embed: true,
        frame: true,
        hr: true,
        img: true,
        input: true,
        isindex: true,
        keygen: true,
        link: true,
        meta: true,
        param: true,
        source: true,
        track: true,
        wbr: true
    };

    var foreignContextElements = {
        __proto__: null,
        math: true,
        svg: true
    };
    var htmlIntegrationElements = {
        __proto__: null,
        mi: true,
        mo: true,
        mn: true,
        ms: true,
        mtext: true,
        "annotation-xml": true,
        foreignObject: true,
        desc: true,
        title: true
    };

    var re_nameEnd = /\s|\//;

    function Parser(cbs, options) {
        this._options = options || {};
        this._cbs = cbs || {};

        this._tagname = "";
        this._attribname = "";
        this._attribvalue = "";
        this._attribs = null;
        this._stack = [];
        this._foreignContext = [];

        this.startIndex = 0;
        this.endIndex = null;

        this._lowerCaseTagNames =
            "lowerCaseTags" in this._options
                ? !!this._options.lowerCaseTags
                : !this._options.xmlMode;
        this._lowerCaseAttributeNames =
            "lowerCaseAttributeNames" in this._options
                ? !!this._options.lowerCaseAttributeNames
                : !this._options.xmlMode;

        if (this._options.Tokenizer) {
            Tokenizer$1 = this._options.Tokenizer;
        }
        this._tokenizer = new Tokenizer$1(this._options, this);

        if (this._cbs.onparserinit) { this._cbs.onparserinit(this); }
    }

    inherits$2(Parser, EventEmitter.EventEmitter);

    Parser.prototype._updatePosition = function(initialOffset) {
        if (this.endIndex === null) {
            if (this._tokenizer._sectionStart <= initialOffset) {
                this.startIndex = 0;
            } else {
                this.startIndex = this._tokenizer._sectionStart - initialOffset;
            }
        } else { this.startIndex = this.endIndex + 1; }
        this.endIndex = this._tokenizer.getAbsoluteIndex();
    };

    //Tokenizer event handlers
    Parser.prototype.ontext = function(data) {
        this._updatePosition(1);
        this.endIndex--;

        if (this._cbs.ontext) { this._cbs.ontext(data); }
    };

    Parser.prototype.onopentagname = function(name) {
        if (this._lowerCaseTagNames) {
            name = name.toLowerCase();
        }

        this._tagname = name;

        if (!this._options.xmlMode && name in openImpliesClose) {
            for (
                var el;
                (el = this._stack[this._stack.length - 1]) in
                openImpliesClose[name];
                this.onclosetag(el)
            ){ }
        }

        if (this._options.xmlMode || !(name in voidElements)) {
            this._stack.push(name);
            if (name in foreignContextElements) { this._foreignContext.push(true); }
            else if (name in htmlIntegrationElements)
                { this._foreignContext.push(false); }
        }

        if (this._cbs.onopentagname) { this._cbs.onopentagname(name); }
        if (this._cbs.onopentag) { this._attribs = {}; }
    };

    Parser.prototype.onopentagend = function() {
        this._updatePosition(1);

        if (this._attribs) {
            if (this._cbs.onopentag)
                { this._cbs.onopentag(this._tagname, this._attribs); }
            this._attribs = null;
        }

        if (
            !this._options.xmlMode &&
            this._cbs.onclosetag &&
            this._tagname in voidElements
        ) {
            this._cbs.onclosetag(this._tagname);
        }

        this._tagname = "";
    };

    Parser.prototype.onclosetag = function(name) {
        this._updatePosition(1);

        if (this._lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        
        if (name in foreignContextElements || name in htmlIntegrationElements) {
            this._foreignContext.pop();
        }

        if (
            this._stack.length &&
            (!(name in voidElements) || this._options.xmlMode)
        ) {
            var pos = this._stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this._cbs.onclosetag) {
                    pos = this._stack.length - pos;
                    while (pos--) { this._cbs.onclosetag(this._stack.pop()); }
                } else { this._stack.length = pos; }
            } else if (name === "p" && !this._options.xmlMode) {
                this.onopentagname(name);
                this._closeCurrentTag();
            }
        } else if (!this._options.xmlMode && (name === "br" || name === "p")) {
            this.onopentagname(name);
            this._closeCurrentTag();
        }
    };

    Parser.prototype.onselfclosingtag = function() {
        if (
            this._options.xmlMode ||
            this._options.recognizeSelfClosing ||
            this._foreignContext[this._foreignContext.length - 1]
        ) {
            this._closeCurrentTag();
        } else {
            this.onopentagend();
        }
    };

    Parser.prototype._closeCurrentTag = function() {
        var name = this._tagname;

        this.onopentagend();

        //self-closing tags will be on the top of the stack
        //(cheaper check than in onclosetag)
        if (this._stack[this._stack.length - 1] === name) {
            if (this._cbs.onclosetag) {
                this._cbs.onclosetag(name);
            }
            this._stack.pop();
            
        }
    };

    Parser.prototype.onattribname = function(name) {
        if (this._lowerCaseAttributeNames) {
            name = name.toLowerCase();
        }
        this._attribname = name;
    };

    Parser.prototype.onattribdata = function(value) {
        this._attribvalue += value;
    };

    Parser.prototype.onattribend = function() {
        if (this._cbs.onattribute)
            { this._cbs.onattribute(this._attribname, this._attribvalue); }
        if (
            this._attribs &&
            !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)
        ) {
            this._attribs[this._attribname] = this._attribvalue;
        }
        this._attribname = "";
        this._attribvalue = "";
    };

    Parser.prototype._getInstructionName = function(value) {
        var idx = value.search(re_nameEnd),
            name = idx < 0 ? value : value.substr(0, idx);

        if (this._lowerCaseTagNames) {
            name = name.toLowerCase();
        }

        return name;
    };

    Parser.prototype.ondeclaration = function(value) {
        if (this._cbs.onprocessinginstruction) {
            var name = this._getInstructionName(value);
            this._cbs.onprocessinginstruction("!" + name, "!" + value);
        }
    };

    Parser.prototype.onprocessinginstruction = function(value) {
        if (this._cbs.onprocessinginstruction) {
            var name = this._getInstructionName(value);
            this._cbs.onprocessinginstruction("?" + name, "?" + value);
        }
    };

    Parser.prototype.oncomment = function(value) {
        this._updatePosition(4);

        if (this._cbs.oncomment) { this._cbs.oncomment(value); }
        if (this._cbs.oncommentend) { this._cbs.oncommentend(); }
    };

    Parser.prototype.oncdata = function(value) {
        this._updatePosition(1);

        if (this._options.xmlMode || this._options.recognizeCDATA) {
            if (this._cbs.oncdatastart) { this._cbs.oncdatastart(); }
            if (this._cbs.ontext) { this._cbs.ontext(value); }
            if (this._cbs.oncdataend) { this._cbs.oncdataend(); }
        } else {
            this.oncomment("[CDATA[" + value + "]]");
        }
    };

    Parser.prototype.onerror = function(err) {
        if (this._cbs.onerror) { this._cbs.onerror(err); }
    };

    Parser.prototype.onend = function() {
        if (this._cbs.onclosetag) {
            for (
                var i = this._stack.length;
                i > 0;
                this._cbs.onclosetag(this._stack[--i])
            ){ }
        }
        if (this._cbs.onend) { this._cbs.onend(); }
    };

    //Resets the parser to a blank state, ready to parse a new HTML document
    Parser.prototype.reset = function() {
        if (this._cbs.onreset) { this._cbs.onreset(); }
        this._tokenizer.reset();

        this._tagname = "";
        this._attribname = "";
        this._attribs = null;
        this._stack = [];

        if (this._cbs.onparserinit) { this._cbs.onparserinit(this); }
    };

    //Parses a complete HTML document and pushes it to the handler
    Parser.prototype.parseComplete = function(data) {
        this.reset();
        this.end(data);
    };

    Parser.prototype.write = function(chunk) {
        this._tokenizer.write(chunk);
    };

    Parser.prototype.end = function(chunk) {
        this._tokenizer.end(chunk);
    };

    Parser.prototype.pause = function() {
        this._tokenizer.pause();
    };

    Parser.prototype.resume = function() {
        this._tokenizer.resume();
    };

    //alias for backwards compat
    Parser.prototype.parseChunk = Parser.prototype.write;
    Parser.prototype.done = Parser.prototype.end;

    var Parser_1 = Parser;

    /**
     * @see https://github.com/fb55/htmlparser2/wiki/Parser-options
     */
    var defaultOptions = {lowerCaseTags: false, lowerCaseAttributeNames: false};

    var defaultDirectives = [{name: '!doctype', start: '<', end: '>'}];

    /**
     * Parse html to PostHTMLTree
     * @param  {String} html
     * @param  {Object} [options=defaultOptions]
     * @return {PostHTMLTree}
     */
    function postHTMLParser(html, options) {
        var bufArray = [],
            results = [];

        bufArray.last = function() {
            return this[this.length - 1];
        };

        function isDirective(directive, tag) {
            if (directive.name instanceof RegExp) {
                var regex = RegExp(directive.name.source, 'i');

                return regex.test(tag);
            }

            if (tag !== directive.name) {
                return false;
            }

            return true;
        }

        function parserDirective(name, data) {
            var directives = [].concat(defaultDirectives, options.directives || []);
            var last = bufArray.last();

            for (var i = 0; i < directives.length; i++) {
                var directive = directives[i];
                var directiveText = directive.start + data + directive.end;

                name = name.toLowerCase();
                if (isDirective(directive, name)) {
                    if (!last) {
                        results.push(directiveText);
                        return;
                    }

                    last.content || (last.content = []);
                    last.content.push(directiveText);
                }
            }
        }

        function normalizeArributes(attrs) {
            var result = {};
            Object.keys(attrs).forEach(function(key) {
                var obj = {};
                    obj[key] = attrs[key].replace(/&quot;/g, '"');
                Object.assign(result, obj);
            });

            return result;
        }

        var parser = new Parser_1({
            onprocessinginstruction: parserDirective,
            oncomment: function(data) {
                var comment = '<!--' + data + '-->',
                    last = bufArray.last();

                if (!last) {
                    results.push(comment);
                    return;
                }

                last.content || (last.content = []);
                last.content.push(comment);
            },
            onopentag: function(tag, attrs) {
                var buf = { tag: tag };

                if (Object.keys(attrs).length) {
                    buf.attrs = normalizeArributes(attrs);
                }

                bufArray.push(buf);
            },
            onclosetag: function() {
                var buf = bufArray.pop();

                if (!bufArray.length) {
                    results.push(buf);
                    return;
                }

                var last = bufArray.last();
                if (!Array.isArray(last.content)) {
                    last.content = [];
                }

                last.content.push(buf);
            },
            ontext: function(text) {
                var last = bufArray.last();
                if (!last) {
                    results.push(text);
                    return;
                }

                last.content || (last.content = []);
                last.content.push(text);
            }
        }, options || defaultOptions);

        parser.write(html);
        parser.end();

        return results;
    }

    function parserWrapper() {
        var option;

        function parser(html) {
            var opt = Object.assign(defaultOptions, option);
            return postHTMLParser(html, opt);
        }

        if (
          arguments.length === 1 &&
          Boolean(arguments[0]) &&
          arguments[0].constructor.name === 'Object'
        ) {
            option = arguments[0];
            return parser;
        }

        option = arguments[1];
        return parser(arguments[0]);
    }

    var posthtmlParser = parserWrapper;
    var defaultOptions_1 = defaultOptions;
    var defaultDirectives_1 = defaultDirectives;
    posthtmlParser.defaultOptions = defaultOptions_1;
    posthtmlParser.defaultDirectives = defaultDirectives_1;

    /**
     * Created by peak on 2017/2/15.
     */
    /**
     * add every elements of extArr to sourceArr.
     * @param sourceArr
     * @param extArr
     */
    var mergeArray = function (sourceArr, extArr) {
        // note: Array.prototype.push.apply(arr1,arr2) is unreliable
        extArr.forEach(function (el) {
            sourceArr.push(el);
        });
    };

    /**
     * find all the descendant text nodes of a element
     * @param ancestor
     */
    var getDescendantTextNodes = function (ancestor) {
        if (ancestor.nodeType === Node.TEXT_NODE) {
            return [ancestor]
        }
        var textNodes = [];
        if (!ancestor.hasChildNodes()) {
            return textNodes
        }
        var childNodes = ancestor.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            var node = childNodes[i];
            if (node.nodeType === Node.TEXT_NODE) {
                textNodes.push(node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                mergeArray(textNodes, getDescendantTextNodes(node));
            }
        }
        return textNodes
    };
    /**
     * find all the descendant text nodes of an ancestor element that before the specify end element,
     * the ancestor element must contains the end element.
     * @param ancestor
     * @param endEl
     */
    var getBeforeEndDescendantTextNodes = function (ancestor, endEl) {
        var textNodes = [];
        var endIndex = 0;
        for (var i = 0; i < ancestor.childNodes.length; i++) {
            if (ancestor.childNodes[i].contains(endEl)) {
                endIndex = i;
                break
            }
        }

        for (var i$1 = 0; i$1 <= endIndex; i$1++) {
            var node = ancestor.childNodes[i$1];
            if (node === endEl) {
                mergeArray(textNodes, getDescendantTextNodes(node));
            } else if (i$1 === endIndex) {
                if (node.nodeType === Node.TEXT_NODE) {
                    textNodes.push(node);
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    mergeArray(textNodes, getBeforeEndDescendantTextNodes(node, endEl));
                }
            } else if (node.nodeType === Node.TEXT_NODE) {
                textNodes.push(node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                mergeArray(textNodes, getDescendantTextNodes(node));
            }
        }
        return textNodes
    };
    /**
     * find all the descendant text nodes of an ancestor element that after the specify start element,
     * the ancestor element must contains the start element.
     * @param ancestor
     * @param startEl
     */
    var getAfterStartDescendantTextNodes = function (ancestor, startEl) {
        var textNodes = [];
        var startIndex = 0;
        for (var i = 0; i < ancestor.childNodes.length; i++) {
            if (ancestor.childNodes[i].contains(startEl)) {
                startIndex = i;
                break
            }
        }

        for (var i$1 = startIndex; i$1 < ancestor.childNodes.length; i$1++) {
            var node = ancestor.childNodes[i$1];
            if (node === startEl) {
                mergeArray(textNodes, getDescendantTextNodes(node));
            } else if (i$1 === startIndex) {
                if (node.nodeType === Node.TEXT_NODE) {
                    textNodes.push(node);
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    mergeArray(textNodes,
                        getAfterStartDescendantTextNodes(node, startEl));
                }
            } else if (node.nodeType === Node.TEXT_NODE) {
                textNodes.push(node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                mergeArray(textNodes,
                    getDescendantTextNodes(node));
            }
        }
        return textNodes
    };


    /**
     * get the closest parent block node of a text node.
     * @param node
     * @return {Node}
     */
    var getParentBlockNode = function (node) {
        var blockNodeNames = ['DIV', 'P', 'SECTION', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6',
            'OL', 'UL', 'LI', 'TR', 'TD', 'TH', 'TBODY', 'THEAD', 'TABLE', 'ARTICLE', 'HEADER', 'FOOTER'];
        var container = node;
        while (container) {
            if (blockNodeNames.includes(container.nodeName)) {
                break
            }
            container = container.parentNode;
        }
        return container
    };

    var isInlineElement = function (node) {
        var inlineNodeNames = ['A', 'ABBR', 'ACRONYM', 'B', 'CITE', 'CODE', 'EM', 'I',
            'FONT', 'IMG', 'S', 'SMALL', 'SPAN', 'STRIKE', 'STRONG', 'U', 'SUB', 'SUP'];
        return inlineNodeNames.includes(node.nodeName)
    };

    // for IE 11
    if (!Text.prototype.contains) {
        Text.prototype.contains = function contains(otherNode) {
            return this === otherNode
        };
    }


    /**
     * Created by peak on 2017/2/14.
     */
    var RangeHandler = function RangeHandler(range) {
        if (!range || !(range instanceof Range)) {
            throw new TypeError('cant\'t resolve range')
        }
        this.range = range;
    };


    /**
     * find all the text nodes in range
     */
    RangeHandler.prototype.getAllTextNodesInRange = function getAllTextNodesInRange () {
        var startContainer = this.range.startContainer;
        var endContainer = this.range.endContainer;
        var rootEl = this.range.commonAncestorContainer;
        var textNodes = [];

        if (startContainer === endContainer) {
            if (startContainer.nodeType === Node.TEXT_NODE) {
                return [startContainer]
            }
            var childNodes = startContainer.childNodes;
            for (var i = this.range.startOffset; i < this.range.endOffset; i++) {
                mergeArray(textNodes, getDescendantTextNodes(childNodes[i]));
            }
            return textNodes
        }

        var startIndex = 0;
        var endIndex = 0;
        for (var i$1 = 0; i$1 < rootEl.childNodes.length; i$1++) {
            var node = rootEl.childNodes[i$1];
            if (node.contains(startContainer)) {
                startIndex = i$1;
            }
            if (node.contains(endContainer)) {
                endIndex = i$1;
            }
        }

        for (var i$2 = startIndex; i$2 <= endIndex; i$2++) {
            var node$1 = rootEl.childNodes[i$2];
            if (i$2 === startIndex) {
                if (node$1.nodeType === Node.TEXT_NODE) {
                    textNodes.push(node$1);
                } else if (node$1.nodeType === Node.ELEMENT_NODE) {
                    mergeArray(textNodes, getAfterStartDescendantTextNodes(node$1, startContainer));
                }
            } else if (i$2 === endIndex) {
                if (node$1.nodeType === Node.TEXT_NODE) {
                    textNodes.push(node$1);
                } else if (node$1.nodeType === Node.ELEMENT_NODE) {
                    mergeArray(textNodes, getBeforeEndDescendantTextNodes(node$1, endContainer));
                }
            } else if (node$1.nodeType === Node.TEXT_NODE) {
                textNodes.push(node$1);
            } else if (node$1.nodeType === Node.ELEMENT_NODE) {
                mergeArray(textNodes, getDescendantTextNodes(node$1));
            }
        }
        return textNodes
    };

    /**
     * execute edit command
     * @param {String} command
     * @param arg
     */
    RangeHandler.prototype.execCommand = function execCommand (command, arg) {
            var this$1 = this;

        switch (command) {

            case Command.JUSTIFY_LEFT: {
                document.execCommand(Command.JUSTIFY_LEFT, false, arg);
                break
            }

            case Command.JUSTIFY_RIGHT: {
                document.execCommand(Command.JUSTIFY_RIGHT, false, arg);
                break
            }

            case Command.JUSTIFY_CENTER: {
                document.execCommand(Command.JUSTIFY_CENTER, false, arg);
                break
            }

            case Command.FORE_COLOR: {
                document.execCommand(Command.FORE_COLOR, false, arg);
                break
            }
            case Command.BACK_COLOR: {
                document.execCommand(Command.BACK_COLOR, false, arg);
                break
            }
            case Command.REMOVE_FORMAT: {
                document.execCommand(Command.REMOVE_FORMAT, false, arg);
                break
            }
            case Command.FONT_NAME: {
                document.execCommand(Command.FONT_NAME, false, arg);
                break
            }
            case Command.FONT_SIZE: {
                // 重新实现，改为直接修改样式
                var textNodes = this.getAllTextNodesInRange();
                if (!textNodes.length) {
                    break
                }
                if (textNodes.length === 1 && textNodes[0] === this.range.startContainer
                    && textNodes[0] === this.range.endContainer) {
                    var textNode = textNodes[0];
                    if (this.range.startOffset === 0
                        && this.range.endOffset === textNode.textContent.length) {
                        if (textNode.parentNode.childNodes.length === 1
                            && isInlineElement(textNode.parentNode)) {
                            textNode.parentNode.style.fontSize = arg;
                            break
                        }
                        var span = document.createElement('span');
                        span.style.fontSize = arg;
                        textNode.parentNode.insertBefore(span, textNode);
                        span.appendChild(textNode);
                        break
                    }
                    var span$1 = document.createElement('span');
                    span$1.innerText = textNode.textContent.substring(
                        this.range.startOffset, this.range.endOffset);
                    span$1.style.fontSize = arg;
                    var frontPart = document.createTextNode(
                        textNode.textContent.substring(0, this.range.startOffset));
                    textNode.parentNode.insertBefore(frontPart, textNode);
                    textNode.parentNode.insertBefore(span$1, textNode);
                    textNode.textContent = textNode.textContent.substring(this.range.endOffset);
                    this.range.setStart(span$1, 0);
                    this.range.setEnd(span$1, 1);
                    break
                }

                textNodes.forEach(function (textNode) {
                    if (textNode === this$1.range.startContainer) {
                        if (this$1.range.startOffset === 0) {
                            if (textNode.parentNode.childNodes.length === 1
                                && isInlineElement(textNode.parentNode)) {
                                textNode.parentNode.style.fontSize = arg;
                            } else {
                                var span$1 = document.createElement('span');
                                span$1.style.fontSize = arg;
                                textNode.parentNode.insertBefore(span$1, textNode);
                                span$1.appendChild(textNode);
                            }
                            return
                        }
                        var span$2 = document.createElement('span');
                        textNode.textContent = textNode.textContent.substring(
                            0, this$1.range.startOffset);
                        span$2.style.fontSize = arg;
                        textNode.parentNode.insertBefore(span$2, textNode);
                        this$1.range.setStart(textNode, 0);
                        return
                    }
                    if (textNode === this$1.range.endContainer) {
                        if (this$1.range.endOffset === textNode.textContent.length) {
                            if (textNode.parentNode.childNodes.length === 1
                                && isInlineElement(textNode.parentNode)) {
                                textNode.parentNode.style.fontSize = arg;
                            } else {
                                var span$3 = document.createElement('span');
                                span$3.style.fontSize = arg;
                                textNode.parentNode.insertBefore(span$3, textNode);
                                span$3.appendChild(textNode);
                            }
                            return
                        }
                        var span$4 = document.createElement('span');
                        textNode.textContent = textNode.textContent.substring(this$1.range.endOffset);
                        span$4.style.fontSize = arg;
                        textNode.parentNode.insertBefore(span$4, textNode);
                        span$4.appendChild(textNode);
                        this$1.range.setStart(textNode, textNode.textContent.length);
                        return
                    }
                    if (textNode.parentNode.childNodes.length === 1
                        && isInlineElement(textNode.parentNode)) {
                        textNode.parentNode.style.fontSize = arg;
                        return
                    }

                    var span = document.createElement('span');
                    span.style.fontSize = arg;
                    textNode.parentNode.insertBefore(span, textNode);
                    span.appendChild(textNode);
                });
                break
            }
            case Command.FORMAT_BLOCK: {
                if (document.execCommand(Command.FORMAT_BLOCK, false, arg)) {
                    break
                }
                // hack
                var element = document.createElement(arg);
                this.range.surroundContents(element);
                break
            }
            case Command.LINE_HEIGHT: {
                var textNodes$1 = this.getAllTextNodesInRange();
                textNodes$1.forEach(function (textNode) {
                    var parentBlock = getParentBlockNode(textNode);
                    if (parentBlock) {
                        parentBlock.style.lineHeight = arg;
                    }
                });
                break
            }
            case Command.INSERT_HORIZONTAL_RULE: {
                document.execCommand(Command.INSERT_HORIZONTAL_RULE, false);
                break
            }
            case Command.INSERT_IMAGE: {
                document.execCommand(Command.INSERT_IMAGE, false, arg);
                break
            }
            case Command.INSERT_VIDEO: {
                // 后面追加p标签是创建新的一行可以编辑
                document.execCommand(Command.INSERT_VIDEO, false,("<video src=\"" + arg + "\" controls=\"controls\">您的浏览器不支持 video 标签。</video>"));
                break
            }
            case Command.CREATE_LINK: {
                document.execCommand(Command.CREATE_LINK, false, arg);
                break
            }
            case Command.INSERT_ORDERED_LIST: {
                document.execCommand(Command.INSERT_ORDERED_LIST, false, arg);
                break
            }
            case Command.INSERT_UNORDERED_LIST: {
                document.execCommand(Command.INSERT_UNORDERED_LIST, false, arg);
                break
            }
            case Command.INSERT_HTML: {
                if (document.execCommand(Command.INSERT_HTML, false, arg)) {
                    break
                }
                // hack
                var fragment = document.createDocumentFragment();
                var div = document.createElement('div');
                div.innerHTML = arg;
                if (div.hasChildNodes()) {
                    for (var i = 0; i < div.childNodes.length; i++) {
                        fragment.appendChild(div.childNodes[i].cloneNode(true));
                    }
                }
                this.range.deleteContents();
                this.range.insertNode(fragment);
                break
            }
            case Command.BOLD: {
                document.execCommand(Command.BOLD, false, arg);
                break
            }
            case Command.ITALIC: {
                document.execCommand(Command.ITALIC, false);
                break
            }
            case Command.UNDERLINE: {
                document.execCommand(Command.UNDERLINE, false);
                break
            }
            case Command.STRIKE_THROUGH: {
                document.execCommand(Command.STRIKE_THROUGH, false);
                break
            }
            case Command.SUBSCRIPT: {
                document.execCommand(Command.SUBSCRIPT, false);
                break
            }
            case Command.SUPERSCRIPT: {
                document.execCommand(Command.SUPERSCRIPT, false);
                break
            }
            case Command.UNDO: {
                document.execCommand(Command.UNDO, false);
                break
            }
            case Command.UNLINK: {
                document.execCommand(Command.UNLINK, false);
                break
            }
            default: {
                document.execCommand(command, false, arg);
                break
            }
        }
    };

    function styleInject(css, ref) {
      if ( ref === void 0 ) { ref = {}; }
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

    var css = ".simple-json-editor{font-size:14px;line-height:1.5;background-color:#fff;color:#333;border:1px solid #ddd;text-align:left;border-radius:5px;overflow:hidden}.simple-json-editor,.simple-json-editor *{-webkit-box-sizing:border-box;box-sizing:border-box}.simple-json-editor.full-screen{position:fixed!important;top:0!important;left:0!important;bottom:0!important;right:0!important;border-radius:0}.simple-json-editor>.toolbar{position:relative;background-color:inherit}.simple-json-editor>.toolbar>ul{list-style:none;padding:0;margin:0;border-bottom:1px solid #ddd}.simple-json-editor>.toolbar>ul>li{display:inline-block;cursor:pointer;text-align:center;line-height:36px;padding:0 10px}.simple-json-editor>.toolbar>ul>li .icon{height:16px;width:16px;display:inline-block;vertical-align:middle}.simple-json-editor>.toolbar>.dashboard{background-color:inherit;border-bottom:1px solid #ddd;padding:10px;position:absolute;top:100%;left:0;right:0;overflow:auto}.simple-json-editor>.toolbar>.dashboard input[type=number],.simple-json-editor>.toolbar>.dashboard input[type=text],.simple-json-editor>.toolbar>.dashboard select{padding:6px 12px;color:inherit;background-color:transparent;border:1px solid #ddd;border-radius:5px}.simple-json-editor>.toolbar>.dashboard input[type=number]:hover,.simple-json-editor>.toolbar>.dashboard input[type=text]:hover,.simple-json-editor>.toolbar>.dashboard select:hover{border-color:#bebebe}.simple-json-editor>.toolbar>.dashboard input[type=number][disabled],.simple-json-editor>.toolbar>.dashboard input[type=number][readonly],.simple-json-editor>.toolbar>.dashboard input[type=text][disabled],.simple-json-editor>.toolbar>.dashboard input[type=text][readonly],.simple-json-editor>.toolbar>.dashboard select[disabled],.simple-json-editor>.toolbar>.dashboard select[readonly]{background-color:#eee;opacity:1}.simple-json-editor>.toolbar>.dashboard input[type=number][disabled],.simple-json-editor>.toolbar>.dashboard input[type=text][disabled],.simple-json-editor>.toolbar>.dashboard select[disabled]{cursor:not-allowed}.simple-json-editor>.toolbar>.dashboard button{color:inherit;background-color:inherit;padding:6px 12px;white-space:nowrap;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #ddd;border-radius:5px;margin-right:4px;margin-bottom:4px}.simple-json-editor>.toolbar>.dashboard button:hover{border-color:#bebebe}.simple-json-editor>.toolbar>.dashboard button[disabled]{cursor:not-allowed;opacity:.68}.simple-json-editor>.toolbar>.dashboard button:last-child{margin-right:0}.simple-json-editor>.toolbar>.dashboard button,.simple-json-editor>.toolbar>.dashboard input,.simple-json-editor>.toolbar>.dashboard select{line-height:normal}.simple-json-editor>.toolbar>.dashboard label{font-weight:bolder}.simple-json-editor>.content{overflow:auto;padding:10px}.simple-json-editor>.content:focus{outline:0}.simple-json-editor>.content img,.simple-json-editor>.content video{max-width:100%;display:block;margin:14px 0}@media (max-width:767px){.simple-json-editor .dashboard button,.simple-json-editor .dashboard input[type=number],.simple-json-editor .dashboard input[type=text],.simple-json-editor .dashboard label,.simple-json-editor .dashboard select{display:block;margin-bottom:5px;width:100%!important}.simple-json-editor .dashboard button:last-child,.simple-json-editor .dashboard input[type=number]:last-child,.simple-json-editor .dashboard input[type=text]:last-child,.simple-json-editor .dashboard label:last-child,.simple-json-editor .dashboard select:last-child{margin-bottom:0}}@media (min-width:768px){.simple-json-editor .dashboard button,.simple-json-editor .dashboard input,.simple-json-editor .dashboard label,.simple-json-editor .dashboard select{display:inline-block;margin-right:4px;max-width:100%}.simple-json-editor .dashboard button:last-child,.simple-json-editor .dashboard input:last-child,.simple-json-editor .dashboard label:last-child,.simple-json-editor .dashboard select:last-child{margin-right:0}}";
    styleInject(css);

    var template$3 = "<div class=\"simple-json-editor\" :class=\"{'full-screen':fullScreen}\" :style=\"{'z-index':zIndex}\"> <div class=\"toolbar\" :style=\"{'z-index':zIndex+1}\" ref=\"toolbar\"> <ul> <template v-for=\"module in modules\"> <li :title=\"locale[module.i18n]\" @click=\"activeModule(module)\"> <span class=\"icon\" :class=\"module.icon\"></span> <template v-if=\"showModuleName === undefined ? defaultShowModuleName : showModuleName\"> &nbsp;{{locale[module.i18n]}} </template> </li> </template> </ul> <div class=\"dashboard\" v-show=\"dashboard\" ref=\"dashboard\"> <keep-alive> <div v-show=\"dashboard\" :is=\"dashboard\"></div> </keep-alive> </div> </div> <div class=\"content\" ref=\"content\" :style=\"contentStyle\" contenteditable @click=\"toggleDashboard(dashboard)\"> </div> </div> ";

    /**
     * Created by peak on 2017/2/9.
     */
    var editor = {
        template: template$3,
        props: {
            content: {
                type: String,
                required: true,
                default: ''
            },
            height: {
                type: Number,
                default: 300,
                validator: function validator(val){
                    return val >= 100
                }
            },
            zIndex: {
                type: Number,
                default: 1000
            },
            autoHeight: {
                type: Boolean,
                default: true
            },
            showModuleName: {}
        },
        data: function data(){
            return {
                // defaultShowModuleName:false
                // locale: {},
                // modules:{},
                fullScreen: false,
                dashboard: null
            }
        },
        watch: {
            content: function content(val) {
                var content = this.$refs.content.innerHTML;
                if (val !== content) {
                    console.log(posthtmlParser(content));
                    this.$refs.content.innerHTML = val;
                }
                this.$emit('update:content', posthtmlParser(content));
            },
            fullScreen: function fullScreen(val){
                var component = this;
                if (val) {
                    component.parentEl = component.$el.parentNode;
                    component.nextEl = component.$el.nextSibling;
                    document.body.appendChild(component.$el);
                    return
                }
                if (component.nextEl) {
                    component.parentEl.insertBefore(component.$el, component.nextEl);
                    return
                }
                component.parentEl.appendChild(component.$el);
            }
        },
        computed: {
            contentStyle: function contentStyle(){
                var style = {};
                if (this.fullScreen) {
                    style.height = (window.innerHeight - this.$refs.toolbar.clientHeight - 1) + "px";
                    return style
                }
                if (!this.autoHeight) {
                    style.height = (this.height) + "px";
                    return style
                }
                style['min-height'] = (this.height) + "px";
                return style
            }
        },
        methods: {
            formatJSONStr2Html: function formatJSONStr2Html(content) {
                var tempJSON = JSON.parse(content);
                var tempHtml = '';
                if (tempJSON.length > 0) {
                    tempJSON.forEach(function (item) {
                        if (item.type === 'text') {
                            tempHtml += "<p>" + (item.value) + "</p>";
                        }
                        if (item.type === 'image') {
                            tempHtml += "<img src=\"" + (item.value) + "\" />";
                        }
                        if (item.type === 'video') {
                            tempHtml += "" + ('<video controls="controls" autoplay="autoplay" width="100%">'
                                + '<source src="') + (item.value) + "\" type=\"video/mp4\" />"
                                + 'Your browser does not support the video tag.'
                                + '</video>';
                        }
                    });
                }
                return tempHtml
            },
            // 在这能用
            formathtmlList2Str: function formathtmlList2Str(list,i) {
                console.log(i);
                var newArr = [];
                if (list.length > 0) {
                    list.forEach(function (item) {
                        if (!item.tag || item.tag === 'div' || item.tag === 'p') {
                            newArr.push({type: 'text', value: item.content[0]});
                        }
                        if (item.tag === 'img') {
                            newArr.push({type: 'img', value: item.content[0]});
                        }
                        if (item.tag === 'video') {
                            newArr.push({type: 'video', value: item.content[0].attrs.src});
                        }
                    });
                }
                return JSON.stringify(newArr)
            },
            toggleFullScreen: function toggleFullScreen(){
                this.fullScreen = !this.fullScreen;
            },
            enableFullScreen: function enableFullScreen(){
                this.fullScreen = true;
            },
            exitFullScreen: function exitFullScreen(){
                this.fullScreen = false;
            },
            focus: function focus(){
                this.$refs.content.focus();
            },
            toggleDashboard: function toggleDashboard(dashboard){
                this.dashboard = this.dashboard === dashboard ? null : dashboard;
            },
            execCommand: function execCommand(command, arg){
                this.restoreSelection();
                if (this.range) {
                    new RangeHandler(this.range).execCommand(command, arg);
                }
                this.toggleDashboard();
                console.log(posthtmlParser(this.$refs.content.innerHTML));
                this.$emit('change', posthtmlParser(this.$refs.content.innerHTML));
            },
            getCurrentRange: function getCurrentRange(){
                return this.range
            },
            saveCurrentRange: function saveCurrentRange(){
                var selection = window.getSelection ? window.getSelection() : document.getSelection();
                if (!selection.rangeCount) {
                    return
                }
                var content = this.$refs.content;
                for (var i = 0; i < selection.rangeCount; i++) {
                    var range = selection.getRangeAt(0);
                    var start = range.startContainer;
                    var end = range.endContainer;
                    // for IE11 : node.contains(textNode) always return false
                    start = start.nodeType === Node.TEXT_NODE ? start.parentNode : start;
                    end = end.nodeType === Node.TEXT_NODE ? end.parentNode : end;
                    if (content.contains(start) && content.contains(end)) {
                        this.range = range;
                        break
                    }
                }
            },
            restoreSelection: function restoreSelection(){
                var selection = window.getSelection ? window.getSelection() : document.getSelection();
                selection.removeAllRanges();
                if (this.range) {
                    selection.addRange(this.range);
                } else {
                    var content = this.$refs.content;
                    var div = document.createElement('div');
                    var range = document.createRange();
                    content.appendChild(div);
                    range.setStart(div, 0);
                    range.setEnd(div, 0);
                    selection.addRange(range);
                    this.range = range;
                }
            },
            activeModule: function activeModule(module){
                if (typeof module.handler === 'function') {
                    module.handler(this);
                    return
                }
                if (module.hasDashboard) {
                    this.toggleDashboard(("dashboard-" + (module.name)));
                }
            }
        },
        created: function created(){
            var this$1 = this;

            this.modules.forEach(function (module) {
                if (typeof module.init === 'function') {
                    module.init(this$1);
                }
            });
        },
        mounted: function mounted(){
            var this$1 = this;

            var content = this.$refs.content;
            content.innerHTML = this.content;
            content.addEventListener('mouseup', this.saveCurrentRange, false);
            content.addEventListener('keyup', function () {
                console.log(posthtmlParser(content.innerHTML));
                this$1.$emit('change', posthtmlParser(content.innerHTML));
                this$1.saveCurrentRange();
            }, false);
            content.addEventListener('mouseout', function (e) {
                if (e.target === content) {
                    this$1.saveCurrentRange();
                }
            }, false);
            this.touchHandler = function (e) {
                if (content.contains(e.target)) {
                    this$1.saveCurrentRange();
                }
            };

            window.addEventListener('touchend', this.touchHandler, false);
        },
        updated: function updated(){
            // update dashboard style
            if (this.$refs.dashboard){
                this.$refs.dashboard.style.maxHeight = (this.$refs.content.clientHeight) + "px";
            }
        },
        beforeDestroy: function beforeDestroy(){
            var this$1 = this;

            window.removeEventListener('touchend', this.touchHandler);
            this.modules.forEach(function (module) {
                if (typeof module.destroyed === 'function') {
                    module.destroyed(this$1);
                }
            });
        }
    };

    var i18nZhCn = {
        video: ' 视频',
        align: '对齐方式',
        image: '图片',
        list: '列表',
        link: '链接',
        unlink: '去除链接',
        table: '表格',
        font: '文字',
        'full screen': '全屏',
        text: '排版',
        eraser: '格式清除',
        info: '关于',
        color: '颜色',
        'please enter a url': '请输入地址',
        'create link': '创建链接',
        bold: '加粗',
        italic: '倾斜',
        underline: '下划线',
        'strike through': '删除线',
        subscript: '上标',
        superscript: '下标',
        heading: '标题',
        'font name': '字体',
        'font size': '文字大小',
        'left justify': '左对齐',
        'center justify': '居中',
        'right justify': '右对齐',
        'ordered list': '有序列表',
        'unordered list': '无序列表',
        'fore color': '前景色',
        'background color': '背景色',
        'row count': '行数',
        'column count': '列数',
        save: '确定',
        upload: '上传',
        progress: '进度',
        unknown: '未知',
        'please wait': '请稍等',
        error: '错误',
        abort: '中断',
        reset: '重置',
        hr: '分隔线',
        undo: '撤消',
        'line height': '行高',
        'exceed size limit': '超出大小限制'
    };

    /**
     * Created by peak on 2017/2/24.
     */
    /**
     * shadow clone
     *
     * @param source    source object
     * @param ext       extended object
     */
    function mixin(source, ext) {
        if ( source === void 0 ) source = {};
        if ( ext === void 0 ) ext = {};

        Object.keys(ext).forEach(function (k) {
            // for data function
            if (k === 'data') {
                var dataSrc = source[k];
                var dataDesc = ext[k];
                if (typeof dataDesc === 'function') {
                    if (typeof dataSrc !== 'function') {
                        source[k] = dataDesc;
                    } else {
                        source[k] = function () { return mixin(dataSrc(), dataDesc()); };
                    }
                }
            } else {
                source[k] = ext[k];
            }
        });
        return source
    }

    polyfill();
    /**
     * Simple Json Editor
     * @param Vue   {Vue}
     * @param options {Object}
     */
    var SimpleJsonEditor = function SimpleJsonEditor(options) {
        if ( options === void 0 ) options = {};

        var modules = [].concat( buildInModules );
        var components = {};

        // extended modules
        if (Array.isArray(options.modules)) {
            options.modules.forEach(function (module) {
                if (module.name) {
                    modules.push(module);
                }
            });
        }
        // hidden modules
        if (Array.isArray(options.hiddenModules)) {
            modules = (function () {
                var arr = [];
                modules.forEach(function (m) {
                    if (!options.hiddenModules.includes(m.name)) {
                        arr.push(m);
                    }
                });
                return arr
            })();
        }
        // visible modules
        if (Array.isArray(options.visibleModules)) {
            modules = (function () {
                var arr = [];
                modules.forEach(function (module) {
                    if (options.visibleModules.includes(module.name)) {
                        arr.push(module);
                    }
                });
                return arr
            })();
        }


        modules.forEach(function (module) {
            // specify the config for each module in options by name
            var config = options[module.name];
            module.config = mixin(module.config, config);

            if (module.dashboard) {
                // $options.module
                module.dashboard.module = module;
                components[("dashboard-" + (module.name))] = module.dashboard;
            }
            if (options.icons && options.icons[module.name]) {
                module.icon = options.icons[module.name];
            }

            module.hasDashboard = !!module.dashboard;
            // prevent vue sync
            module.dashboard = null;
        });

        // i18n
        var i18n = {'zh-cn': i18nZhCn};
        var customI18n = options.i18n || {};
        Object.keys(customI18n).forEach(function (key) {
            i18n[key] = i18n[key] ? mixin(i18n[key], customI18n[key]) : customI18n[key];
        });
        var language = options.language || 'zh-cn';
        var locale = i18n[language];

        // showModuleName
        var defaultShowModuleName = !!options.showModuleName;

        // ######################################
        var compo = mixin(editor, {
            data: function data() {
                return {modules: modules, locale: locale, defaultShowModuleName: defaultShowModuleName}
            },
            components: components
        });
        mixin(this, compo);
    };

    /**
     * global install
     *
     * @param Vue
     * @param options
     */
    SimpleJsonEditor.install = function install (Vue, options) {
            if ( options === void 0 ) options = {};

        Vue.component(options.name || 'simple-json-editor', new SimpleJsonEditor(options));
    };

    return SimpleJsonEditor;

})));
