(function () {

    window.$dp = window.$dp || {};
    window.$dp.$shared = window.$dp.$shared || {};

    if (window.$dp.$shared.$arrayFactory !== undefined) { return; }

    $dp.$shared.$arrayFactory = function arrayFactory(ref) {
        /// <signature>
        ///   <summary>this function returns a array with added function '$dpItemFactory' who creates instance of item of array.</summary>
        ///   <param name="ref" type="Function">ref is factory who creates instance of item of array</param>
        ///   <returns type="Function" />
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

})();
(function () {
    window.$dp = window.$dp || {};
    window.$dp.$shared = window.$dp.$shared || {};

    if (window.$dp.$shared.$circularReferenceManagerFactory !== undefined) { return; }

    window.$dp.$shared.$circularReferenceManagerFactory = function circularReferenceManagerFactory(sameIntance) {
        /// <signature>
        ///   <summary>Factory gives un new instance of Function that handles the circular reference objects.</summary>
        ///   <param name="sameIntance" type="bool">If sameInstance === undefined: new instance of function. Otherwise, we use the same instance.</param>
        ///   <returns type="Function" />
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
        ///   <param name="func" type="Function">Factory of instances.</param>
        ///   <returns type="Object" />
        /// </signature>

        var internalFunc = window.$dp.$shared.$circularReferenceManagerFactory.instance;

        var foundedIdx = -1;
        for (var idx = 0; idx < internalFunc.factories.length; idx++) {
            if (internalFunc.factories[idx].item === func) {
                foundedIdx = idx;
            }
        }

        if (foundedIdx === -1) {
            internalFunc.factories.push({ "item": func, "number": 0 });
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

})();



(function () {

//#region "COPYRIGHT"
/***************************************************************************************************************
            Diphap.JsNetBridge.Mvc v1.1.0.6
            Build ASP.NET Objects API for javascript
            Copyright (c)  2015

            http://jsnet.codeplex.com/
            The MIT License (MIT)
            
            Creator:    diphap@gmail.com
                        
*/
//#endregion


//#region [references]
/*
System.Web.Mvc.ActionResult, System.Web.Mvc, Version=4.0.0.1, Culture=neutral, PublicKeyToken=31bf3856ad364e35 - C:\Windows\Microsoft.Net\assembly\GAC_MSIL\System.Web.Mvc\v4.0_4.0.0.1__31bf3856ad364e35\System.Web.Mvc.dll
System.Web.Http.ApiController, System.Web.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35 - C:\Windows\Microsoft.Net\assembly\GAC_MSIL\System.Web.Http\v4.0_4.0.0.0__31bf3856ad364e35\System.Web.Http.dll
System.Net.Http.HttpResponseMessage, System.Net.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a - C:\Windows\Microsoft.Net\assembly\GAC_MSIL\System.Net.Http\v4.0_4.0.0.0__b03f5f7f11d50a3a\System.Net.Http.dll
System.Web.Mvc.JsonResult, System.Web.Mvc, Version=4.0.0.1, Culture=neutral, PublicKeyToken=31bf3856ad364e35 - C:\Windows\Microsoft.Net\assembly\GAC_MSIL\System.Web.Mvc\v4.0_4.0.0.1__31bf3856ad364e35\System.Web.Mvc.dll
System.Web.Mvc.ViewResult, System.Web.Mvc, Version=4.0.0.1, Culture=neutral, PublicKeyToken=31bf3856ad364e35 - C:\Windows\Microsoft.Net\assembly\GAC_MSIL\System.Web.Mvc\v4.0_4.0.0.1__31bf3856ad364e35\System.Web.Mvc.dll
*/
//#endregion
(function () {
var _stampFunc = function() { return $dp.$JsNet; };
window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.SingleAppExample = window.$dp.$JsNet.SingleAppExample || {};
window.$dp.$JsNet.SingleAppExample.Areas = window.$dp.$JsNet.SingleAppExample.Areas || {};
window.$dp.$JsNet.SingleAppExample.Areas.HelpPage = window.$dp.$JsNet.SingleAppExample.Areas.HelpPage || {};
window.$dp.$JsNet.SingleAppExample.Areas.HelpPage.Models = window.$dp.$JsNet.SingleAppExample.Areas.HelpPage.Models || {};
window.$dp.$JsNet.SingleAppExample.Models = window.$dp.$JsNet.SingleAppExample.Models || {};
$dp.$JsNet.SingleAppExample.Areas.HelpPage.Models.HelpPageApiModel = $dp.$JsNet.SingleAppExample.Areas.HelpPage.Models.HelpPageApiModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"ErrorMessages":$dp.$shared.$arrayFactory(""),"ApiDescription":{},"SampleRequests":$dp.$shared.$arrayFactory({}),"SampleResponses":$dp.$shared.$arrayFactory({})};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.SingleAppExample.Models.UserProfile = $dp.$JsNet.SingleAppExample.Models.UserProfile || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserId":0,"UserName":""};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.SingleAppExample.Models.RegisterExternalLoginModel = $dp.$JsNet.SingleAppExample.Models.RegisterExternalLoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","ExternalLoginData":""};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.SingleAppExample.Models.LocalPasswordModel = $dp.$JsNet.SingleAppExample.Models.LocalPasswordModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"OldPassword":"","NewPassword":"","ConfirmPassword":""};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.SingleAppExample.Models.LoginModel = $dp.$JsNet.SingleAppExample.Models.LoginModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","RememberMe":false};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.SingleAppExample.Models.RegisterModel = $dp.$JsNet.SingleAppExample.Models.RegisterModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"UserName":"","Password":"","ConfirmPassword":""};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.SingleAppExample.Models.ExternalLogin = $dp.$JsNet.SingleAppExample.Models.ExternalLogin || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"Provider":"","ProviderDisplayName":"","ProviderUserId":""};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.SingleAppExample.Models.TodoItemDto = $dp.$JsNet.SingleAppExample.Models.TodoItemDto || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.SingleAppExample.Models.TodoList = $dp.$JsNet.SingleAppExample.Models.TodoList || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.SingleAppExample.Models.TodoItem))};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.SingleAppExample.Models.TodoItem = $dp.$JsNet.SingleAppExample.Models.TodoItem || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.SingleAppExample.Models.TodoList)};obj.$stamp = _stampFunc; return obj; };
$dp.$JsNet.SingleAppExample.Models.TodoListDto = $dp.$JsNet.SingleAppExample.Models.TodoListDto || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)($dp.$JsNet.SingleAppExample.Models.TodoItemDto))};obj.$stamp = _stampFunc; return obj; };
window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.SingleAppExample = window.$dp.$JsNet.SingleAppExample || {};
window.$dp.$JsNet.SingleAppExample.Areas = window.$dp.$JsNet.SingleAppExample.Areas || {};
window.$dp.$JsNet.SingleAppExample.Areas.HelpPage = window.$dp.$JsNet.SingleAppExample.Areas.HelpPage || {};
$dp.$JsNet.SingleAppExample.Areas.HelpPage.SampleDirection = $dp.$JsNet.SingleAppExample.Areas.HelpPage.SampleDirection || {"Request":{ "Key":"Request","Value":0 },"Response":{ "Key":"Response","Value":1 }};
window.$dp = window.$dp || {};window.$dp.$JsNet = window.$dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"HelpPage":{"Help":{"Index": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"Api": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"apiId":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }()}},
"Account":{"JsonLogin": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.SingleAppExample.Models.LoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"LogOff": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"JsonRegister": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.SingleAppExample.Models.RegisterModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"Disassociate": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"provider":"","providerUserId":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"Manage": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"message":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();action.$sig1 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.SingleAppExample.Models.LocalPasswordModel()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"ExternalLogin": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"provider":"","returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"ExternalLoginCallback": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"ExternalLoginConfirmation": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"model":$dp.$JsNet.SingleAppExample.Models.RegisterExternalLoginModel(),"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"ExternalLoginFailure": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"ExternalLoginsList": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"RemoveExternalLogins": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }()},
"Home":{"Index": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"returnUrl":""}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = null;action.$AjaxOptions = function(){  var obj = {}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }()},
"Todo":{"PutTodoItem": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0,"todoItemDto":$dp.$JsNet.SingleAppExample.Models.TodoItemDto()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$put:"put",$items:["put"],$single:"put"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"PostTodoItem": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"todoItemDto":$dp.$JsNet.SingleAppExample.Models.TodoItemDto()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$post:"post",$items:["post"],$single:"post"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"DeleteTodoItem": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$delete:"delete",$items:["delete"],$single:"delete"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"testPut": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$PUT:"PUT",$TEST:"TEST",$GET:"GET",$items:["PUT","TEST","GET"],$single:null} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"test1Put": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$put:"put",$items:["put"],$single:"put"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }()},
"TodoList":{"GetTodoLists": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = $dp.$shared.$arrayFactory($dp.$JsNet.SingleAppExample.Models.TodoListDto()); return obj; };action.$IsApiController = { $httpMethodArray:{$get:"get",$items:["get"],$single:"get"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"GetTodoList": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = $dp.$JsNet.SingleAppExample.Models.TodoListDto(); return obj; };action.$IsApiController = { $httpMethodArray:{$get:"get",$items:["get"],$single:"get"} };action.$AjaxOptions = function(){  var obj = {dataType:"json",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"PutTodoList": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0,"todoListDto":$dp.$JsNet.SingleAppExample.Models.TodoListDto()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$put:"put",$items:["put"],$single:"put"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"PostTodoList": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"todoListDto":$dp.$JsNet.SingleAppExample.Models.TodoListDto()}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$post:"post",$items:["post"],$single:"post"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }(),"DeleteTodoList": function actionFactory () { try { var action = {};action.$Url = null;action.$sig0 = function actionFactory () { try { var action = {};action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$IsApiController = { $httpMethodArray:{$delete:"delete",$items:["delete"],$single:"delete"} };action.$AjaxOptions = function(){  var obj = {dataType:"text",contentType:"application/json",cache:false}; return obj; };return action; } catch(ex) { throw ex;  } }();return action; } catch(ex) { throw ex;  } }()}};
})();
})();
