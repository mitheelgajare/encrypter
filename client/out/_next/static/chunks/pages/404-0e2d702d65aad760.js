(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{9014:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(5838)}])},8418:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(t=(u=i.next()).done)&&(n.push(u.value),!r||n.length!==r);t=!0);}catch(c){o=!0,a=c}finally{try{t||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}r.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},u=n(6273),i=n(387),c=n(7190);var l={};function f(e,r,n,t){if(e&&u.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var o=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[r+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var r,n=!1!==e.prefetch,o=i.useRouter(),s=a.default.useMemo((function(){var r=t(u.resolveHref(o,e.href,!0),2),n=r[0],a=r[1];return{href:n,as:e.as?u.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,y=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=(r=a.default.Children.only(v))&&"object"===typeof r&&r.ref,w=t(c.useIntersection({rootMargin:"200px"}),2),E=w[0],_=w[1],L=a.default.useCallback((function(e){E(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,E]);a.default.useEffect((function(){var e=_&&n&&u.isLocalURL(d),r="undefined"!==typeof g?g:o&&o.locale,t=l[d+"%"+p+(r?"%"+r:"")];e&&!t&&f(o,d,p,{locale:r})}),[p,d,_,g,n,o]);var x={ref:L,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,o,a,i,c){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&u.isLocalURL(n))&&(e.preventDefault(),null==i&&t.indexOf("#")>=0&&(i=!1),r[o?"replace":"push"](n,t,{shallow:a,locale:c,scroll:i}))}(e,o,d,p,h,y,b,g)},onMouseEnter:function(e){u.isLocalURL(d)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),f(o,d,p,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var k="undefined"!==typeof g?g:o&&o.locale,M=o&&o.isLocaleDomain&&u.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);x.href=M||u.addBasePath(u.addLocale(p,k,o&&o.defaultLocale))}return a.default.cloneElement(r,x)};r.default=s},7190:function(e,r,n){"use strict";function t(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=[],t=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(t=(u=i.next()).done)&&(n.push(u.value),!r||n.length!==r);t=!0);}catch(c){o=!0,a=c}finally{try{t||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!u,c=o.useRef(),l=t(o.useState(!1),2),f=l[0],s=l[1],d=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=i.get(r);if(n)return n;var t=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return i.set(r,n={id:r,observer:o,elements:t}),n}(n),o=t.id,a=t.observer,u=t.elements;return u.set(e,r),a.observe(e),function(){u.delete(e),a.unobserve(e),0===u.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&s(e)}),{rootMargin:r}))}),[n,r,f]);return o.useEffect((function(){if(!u&&!f){var e=a.requestIdleCallback((function(){return s(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[d,f]};var o=n(7294),a=n(9311),u="undefined"!==typeof IntersectionObserver;var i=new Map},5838:function(e,r,n){"use strict";n.r(r);var t=n(5893),o=(n(7294),n(1664));r.default=function(){return(0,t.jsx)("div",{className:"err404-page",children:(0,t.jsxs)("div",{className:"wrapper",children:[(0,t.jsx)("h1",{children:"Sorry Wrong Page"}),(0,t.jsxs)("p",{children:["Useful Links: ",(0,t.jsx)("br",{}),"1. ",(0,t.jsx)(o.default,{href:"/",children:"Home"})," ",(0,t.jsx)("br",{}),"2. ",(0,t.jsx)(o.default,{href:"/help",children:"What am I doing here?"})]})]})})}},1664:function(e,r,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return r=9014,e(e.s=r);var r}));var r=e.O();_N_E=r}]);