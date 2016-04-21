﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge.Common.JS
{

    public class JSRaw
    {
        public const string CheckingDependencies =
@"(function () {
    var message = '[circularReferenceManagerFactory.js] or [arrayFactory.js] is missing';
    try {
        if (!window.$dp.$shared.$arrayFactory) { throw message; };
        if (!window.$dp.$shared.$circularReferenceManagerFactory) { throw message };
    } catch (e) {
        message = message + '\r\n' + e.toString();
        throw message;
    }
})();";

        public const string arrayFactory =
@"(function () {

    window.$dp = window.$dp || {};
    window.$dp.$shared = window.$dp.$shared || {};

    if (window.$dp.$shared.$arrayFactory !== undefined) { return; }

    $dp.$shared.$arrayFactory = function arrayFactory(ref) {
        /// <signature>
        ///   <summary>this function returns a array with added function '$dpItemFactory' who creates instance of item of array.</summary>
        ///   <param name='ref' type='Function'>ref is factory who creates instance of item of array</param>
        ///   <returns type='Function' />
        /// </signature>

        var aa = [];
        aa.$dpItemFactory = function () {
            var result;
            if (typeof ref === 'function') { result = ref(); }
            else { result = ref; }
            return result;
        };
        return aa;
    };

})();";
        public const string circularReferenceManagerFactory =
@"(function () {
    window.$dp = window.$dp || {};
    window.$dp.$shared = window.$dp.$shared || {};

    if (window.$dp.$shared.$circularReferenceManagerFactory !== undefined) { return; }

    window.$dp.$shared.$circularReferenceManagerFactory = function circularReferenceManagerFactory(sameIntance) {
        /// <signature>
        ///   <summary>Factory gives un new instance of Function that handles the circular reference objects.</summary>
        ///   <param name='sameIntance' type='bool'>If sameInstance === undefined: new instance of function. Otherwise, we use the same instance.</param>
        ///   <returns type='Function' />
        /// </signature>
        if (sameIntance === undefined) {
            var newFunc = window.$dp.$shared.$circularReferenceManagerFactory._managerFunc.bind();
            newFunc.factories = [];
            window.$dp.$shared.$circularReferenceManagerFactory.instance = newFunc;
        }
        return window.$dp.$shared.$circularReferenceManagerFactory.instance;
    }

    window.$dp.$shared.$circularReferenceManagerFactory._managerFunc = function _managerFunc(func) {
        /// <signature>
        ///   <summary>it is the function that handles the circular reference objects</summary>
        ///   <param name='func' type='Function'>Factory of instances.</param>
        ///   <returns type='Object' />
        /// </signature>

        var internalFunc = window.$dp.$shared.$circularReferenceManagerFactory.instance;

        var foundedIdx = -1;
        for (var idx = 0; idx < internalFunc.factories.length; idx++) {
            if (internalFunc.factories[idx].item === func) {
                foundedIdx = idx;
            }
        }

        if (foundedIdx === -1) {
            internalFunc.factories.push({ 'item': func, 'number': 0 });
            foundedIdx = internalFunc.factories.length - 1;
        } else {
            internalFunc.factories[foundedIdx].number++;
        }

        if (internalFunc.factories[foundedIdx].number < 1) {
            return internalFunc.factories[foundedIdx].item(true);
        } else {
            internalFunc.factories[foundedIdx].number = null;
            return internalFunc.factories[foundedIdx].item;
        }
    }

})();";

        public const string getStaticDefaultUrl =
@"(function () {
        window.$dp = window.$dp || {};
        $dp.$JsNet = $dp.$JsNet || {};
        $dp.$JsNet.$Helpers = $dp.$JsNet.$Helpers || {};
        $dp.$JsNet.$Helpers.$Shared = $dp.$JsNet.$Helpers.$Shared || {};
        $dp.$JsNet.$Helpers.$Shared.$Action = $dp.$JsNet.$Helpers.$Shared.$Action || {};

        $dp.$JsNet.$Helpers.$Api = $dp.$JsNet.$Helpers.$Api || {};
        $dp.$JsNet.$Helpers.$Mvc = $dp.$JsNet.$Helpers.$Mvc || {};
        $dp.$JsNet.$Helpers.$Api.$Routes = $dp.$JsNet.$Helpers.$Api.$Routes || {};
        $dp.$JsNet.$Helpers.$Mvc.$Routes = $dp.$JsNet.$Helpers.$Mvc.$Routes || {};

        var _defaultApiRoute = { $routeTemplate: 'api/{controller}/{id}' };
        var _defaultMvcRoute = { $routeTemplate: '{controller}/{action}/{id}' };

        $dp.$JsNet.$Helpers.$Api.$Routes.$selectedRoute = _defaultApiRoute;
        $dp.$JsNet.$Helpers.$Mvc.$Routes.$selectedRoute = _defaultMvcRoute;

        function _cleanRouteTemplate(routeTemplateTemp, predicate) {
            /// <summary></summary>
            /// <param name='routeTemplateTemp' type='String'></param>
            /// <param name='predicate' type='Function'></param>

            var partsTemp = routeTemplateTemp.split('/');

            var parts = [];
            for (var ii = 0; ii < partsTemp.length; ii++) {

                var partTemp = partsTemp[ii];

                if (predicate(partsTemp) ||
                    (partsTemp.indexOf('{') < 0 && partsTemp.indexOf('}') < 0)) {
                    parts.push(partTemp);
                }
            }
            var routeTemplate = parts.join('/');
        }

        function _getHardCodedUrl(action) {
            /// <summary>Get Url</summary>
            /// <param name='action' type='Object'></param>

            var url = '';
            if (action.$sig0.$IsApiController) {
                var selectedRoute = $dp.$JsNet.$Helpers.$Api.$Routes.$selectedRoute || _defaultApiRoute;
                var routeTemplate = _cleanRouteTemplate(selectedRoute.$routeTemplate, function () { return partTemp === '{controller}'; });
                url = routeTemplate.replace('{controller}', action.$Names.$Controller);
                if (url.indexOf('/') !== 0) { url = '/' + url; }
            }
            else {
                var selectedRoute = $dp.$JsNet.$Helpers.$Mvc.$Routes.$selectedRoute || _defaultMvcRoute;
                var routeTemplate = _cleanRouteTemplate(selectedRoute.$routeTemplate, function () { return partTemp === '{controller}' || partTemp === '{action}'; });
                url = routeTemplate.replace('{controller}', action.$Names.$Controller);
                url = url.replace('{action}', action.$Names.$Action);
                if (url.indexOf('/') !== 0) { url = '/' + url; }
                if (action.$Names.$Area) {
                    url = '/' + action.$Names.$Area + url;
                }
            };

        }

        $dp.$JsNet.$Helpers.$Shared.$Action.getHardCodedUrl = _getHardCodedUrl;
        
    })();";
        
        public class AnynomousModule
        {
            public const string Begin = "(function () {";
            public const string End = "})();";
        }


    }
}