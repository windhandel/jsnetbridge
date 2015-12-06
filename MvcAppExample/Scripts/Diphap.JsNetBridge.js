window.$dp = window.$dp || {};window.$dp.shared = window.$dp.shared || {};
$dp.shared.arrayFactory=$dp.shared.arrayFactory||function (ref) {
    var aa = [];
    aa.$dpItemFactory = function () {
        return ref;
    };
    return aa;
};

window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.MvcAppExample = window.$dp.$JsNet.MvcAppExample || {};
window.$dp.$JsNet.MvcAppExample.Areas = window.$dp.$JsNet.MvcAppExample.Areas || {};
window.$dp.$JsNet.MvcAppExample.Areas.HelpPage = window.$dp.$JsNet.MvcAppExample.Areas.HelpPage || {};
window.$dp.$JsNet.MvcAppExample.Areas.HelpPage.Models = window.$dp.$JsNet.MvcAppExample.Areas.HelpPage.Models || {};
window.$dp.$JsNet.MvcAppExample.Models = window.$dp.$JsNet.MvcAppExample.Models || {};
$dp.$JsNet.MvcAppExample.Areas.HelpPage.Models.HelpPageApiModel = $dp.$JsNet.MvcAppExample.Areas.HelpPage.Models.HelpPageApiModel || function(){ return {"ErrorMessages":$dp.shared.arrayFactory(""),"ApiDescription":{},"SampleRequests":{},"SampleResponses":{}}; };
$dp.$JsNet.MvcAppExample.Models.UserProfile = $dp.$JsNet.MvcAppExample.Models.UserProfile || function(){ return {"UserId":0,"UserName":""}; };
$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel = $dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel || function(){ return {"UserName":"","ExternalLoginData":""}; };
$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel = $dp.$JsNet.MvcAppExample.Models.LocalPasswordModel || function(){ return {"OldPassword":"","NewPassword":"","ConfirmPassword":""}; };
$dp.$JsNet.MvcAppExample.Models.LoginModel = $dp.$JsNet.MvcAppExample.Models.LoginModel || function(){ return {"UserName":"","Password":"","RememberMe":false}; };
$dp.$JsNet.MvcAppExample.Models.RegisterModel = $dp.$JsNet.MvcAppExample.Models.RegisterModel || function(){ return {"UserName":"","Password":"","ConfirmPassword":""}; };
$dp.$JsNet.MvcAppExample.Models.ExternalLogin = $dp.$JsNet.MvcAppExample.Models.ExternalLogin || function(){ return {"Provider":"","ProviderDisplayName":"","ProviderUserId":""}; };
$dp.$JsNet.MvcAppExample.Models.TodoItemDto = $dp.$JsNet.MvcAppExample.Models.TodoItemDto || function(){ return {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0}; };
$dp.$JsNet.MvcAppExample.Models.TodoItem = $dp.$JsNet.MvcAppExample.Models.TodoItem || function(){ return {"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList":{"TodoListId":0,"UserId":"","Title":"","Todos":{}}}; };
$dp.$JsNet.MvcAppExample.Models.TodoList = $dp.$JsNet.MvcAppExample.Models.TodoList || function(){ return {"TodoListId":0,"UserId":"","Title":"","Todos":{"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0,"TodoList":{}}}; };
$dp.$JsNet.MvcAppExample.Models.TodoListDto = $dp.$JsNet.MvcAppExample.Models.TodoListDto || function(){ return {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory($dp.$JsNet.MvcAppExample.Models.TodoItemDto())}; };
window.$dp = window.$dp || {};
window.$dp.$JsNet = window.$dp.$JsNet || {};
window.$dp.$JsNet.MvcAppExample = window.$dp.$JsNet.MvcAppExample || {};
window.$dp.$JsNet.MvcAppExample.Areas = window.$dp.$JsNet.MvcAppExample.Areas || {};
window.$dp.$JsNet.MvcAppExample.Areas.HelpPage = window.$dp.$JsNet.MvcAppExample.Areas.HelpPage || {};
$dp.$JsNet.MvcAppExample.Areas.HelpPage.SampleDirection = $dp.$JsNet.MvcAppExample.Areas.HelpPage.SampleDirection || {"Request":{ "Key":"Request","Value":0 },"Response":{ "Key":"Response","Value":1 }};
window.$dp = window.$dp || {};window.$dp.$JsNet = window.$dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"HelpPage":{"Help":{"Index": {Url:null, Params:function(){ return null; }, Return:function(){ return {}; }, Info:{} },"Api": {Url:null, Params:function(){ return {"apiId":""}; }, Return:function(){ return {}; }, Info:{} }}},
"Account":{"JsonLogin": {Url:null, Params:function(){ return {"model":$dp.$JsNet.MvcAppExample.Models.LoginModel(),"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"LogOff": {Url:null, Params:function(){ return null; }, Return:function(){ return {}; }, Info:{} },"JsonRegister": {Url:null, Params:function(){ return {"model":$dp.$JsNet.MvcAppExample.Models.RegisterModel(),"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"Disassociate": {Url:null, Params:function(){ return {"provider":"","providerUserId":""}; }, Return:function(){ return {}; }, Info:{} },"Manage": {Url:null, Params:function(){ return {"message":0}; }, Return:function(){ return {}; }, Info:{} },"Manage": {Url:null, Params:function(){ return {"model":$dp.$JsNet.MvcAppExample.Models.LocalPasswordModel()}; }, Return:function(){ return {}; }, Info:{} },"ExternalLogin": {Url:null, Params:function(){ return {"provider":"","returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"ExternalLoginCallback": {Url:null, Params:function(){ return {"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"ExternalLoginConfirmation": {Url:null, Params:function(){ return {"model":$dp.$JsNet.MvcAppExample.Models.RegisterExternalLoginModel(),"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"ExternalLoginFailure": {Url:null, Params:function(){ return null; }, Return:function(){ return {}; }, Info:{} },"ExternalLoginsList": {Url:null, Params:function(){ return {"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} },"RemoveExternalLogins": {Url:null, Params:function(){ return null; }, Return:function(){ return {}; }, Info:{} }},
"Home":{"Index": {Url:null, Params:function(){ return {"returnUrl":""}; }, Return:function(){ return {}; }, Info:{} }},
"Todo":{"PutTodoItem": {Url:null, Params:function(){ return {"id":0,"todoItemDto":$dp.$JsNet.MvcAppExample.Models.TodoItemDto()}; }, Return:function(){ return {}; }, Info:{} },"PostTodoItem": {Url:null, Params:function(){ return {"todoItemDto":$dp.$JsNet.MvcAppExample.Models.TodoItemDto()}; }, Return:function(){ return {}; }, Info:{} },"DeleteTodoItem": {Url:null, Params:function(){ return {"id":0}; }, Return:function(){ return {}; }, Info:{} }},
"TodoList":{"GetTodoLists": {Url:null, Params:function(){ return null; }, Return:function(){ return $dp.shared.arrayFactory({"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory({"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0})}); }, Info:{} },"GetTodoList": {Url:null, Params:function(){ return {"id":0}; }, Return:function(){ return {"TodoListId":0,"UserId":"","Title":"","Todos":$dp.shared.arrayFactory({"TodoItemId":0,"Title":"","IsDone":false,"TodoListId":0})}; }, Info:{} },"PutTodoList": {Url:null, Params:function(){ return {"id":0,"todoListDto":$dp.$JsNet.MvcAppExample.Models.TodoListDto()}; }, Return:function(){ return {}; }, Info:{} },"PostTodoList": {Url:null, Params:function(){ return {"todoListDto":$dp.$JsNet.MvcAppExample.Models.TodoListDto()}; }, Return:function(){ return {}; }, Info:{} },"DeleteTodoList": {Url:null, Params:function(){ return {"id":0}; }, Return:function(){ return {}; }, Info:{} }}};