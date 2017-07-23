﻿(function () {
(function () {
(function () {
    var message = '[circularReferenceManagerFactory.js] or [arrayFactory.js] or [actionHelper.js] is missing';
    try {
        if (!window.$dp.$shared.$arrayFactory) { throw message; };
        if (!window.$dp.$shared.$circularReferenceManagerFactory) { throw message };
        if (!window.$dp.$JsNet.$Helpers.$Shared.$Action.getUrlFromTemplate) { throw message };
    } catch (e) {
        message = message + '\r\n' + e.toString();
        throw message;
    }
})();
var _stampFunc = function() { return $dp.$JsNet; };
(function () {
//#region 'Model'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.TestJsNetBridgeApp = $dp.$JsNet.TestJsNetBridgeApp || {};
$dp.$JsNet.TestJsNetBridgeApp.Models = $dp.$JsNet.TestJsNetBridgeApp.Models || {};
$dp.$JsNet.TestJsNetBridgeApp.Controllers = $dp.$JsNet.TestJsNetBridgeApp.Controllers || {};
$dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController = $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController || {};
$dp.$JsNet.ContosoUniversity = $dp.$JsNet.ContosoUniversity || {};
$dp.$JsNet.ContosoUniversity.Models = $dp.$JsNet.ContosoUniversity.Models || {};
var _alias0 = $dp.$JsNet.TestJsNetBridgeApp.Models;
var _alias1 = $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController;
var _alias2 = $dp.$JsNet.ContosoUniversity.Models;
_alias0.LayoutModel = _alias0.LayoutModel || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PackageNugetName":"","PackageNugetVersion":{}};obj.constructor=_alias0.LayoutModel; return obj; };
_alias0.ReturnData = _alias0.ReturnData || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"InputStream":{},"Url":"","Success":false,"Method":"","BusinessData":{}};obj.constructor=_alias0.ReturnData; return obj; };
_alias0.ReturnData_$gen$_T = _alias0.ReturnData_$gen$_T || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TypedBusinessData":{},"InputStream":{},"Url":"","Success":false,"Method":"","BusinessData":{}};obj.constructor=_alias0.ReturnData_$gen$_T; return obj; };
_alias1.dpPerson = _alias1.dpPerson || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"name":"","age":0,"description":""};obj.constructor=_alias1.dpPerson; return obj; };
_alias2.OfficeAssignment = _alias2.OfficeAssignment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"PersonID":0,"Location":"","Instructor":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Instructor)};obj.constructor=_alias2.OfficeAssignment; return obj; };
_alias2.Instructor = _alias2.Instructor || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"HireDate":new Date(),"Courses":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Course)),"OfficeAssignment":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.OfficeAssignment),"PersonID":0,"LastName":"","FirstMidName":"","FullName":""};obj.constructor=_alias2.Instructor; return obj; };
_alias2.Department = _alias2.Department || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"DepartmentID":0,"Name":"","Budget":0,"StartDate":new Date(),"PersonID":0,"RowVersion":$dp.$shared.$arrayFactory(0),"Courses_":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Course)),"Administrator":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Instructor),"Courses":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Course))};obj.constructor=_alias2.Department; return obj; };
_alias2.Student = _alias2.Student || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"EnrollmentDate":new Date(),"Enrollments":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Enrollment)),"PersonID":0,"LastName":"","FirstMidName":"","FullName":""};obj.constructor=_alias2.Student; return obj; };
_alias0.ReturnData_$gen$_ContosoUniversityModelsDepartment = _alias0.ReturnData_$gen$_ContosoUniversityModelsDepartment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TypedBusinessData":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Department),"InputStream":{},"Url":"","Success":false,"Method":"","BusinessData":{}};obj.constructor=_alias0.ReturnData_$gen$_ContosoUniversityModelsDepartment; return obj; };
_alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor = _alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TypedBusinessData":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Instructor),"InputStream":{},"Url":"","Success":false,"Method":"","BusinessData":{}};obj.constructor=_alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor; return obj; };
_alias2.Enrollment = _alias2.Enrollment || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"EnrollmentID":0,"CourseID":0,"PersonID":0,"Grade":0,"Course":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Course),"Student":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Student)};obj.constructor=_alias2.Enrollment; return obj; };
_alias0.ReturnData_$gen$_ContosoUniversityModelsStudent = _alias0.ReturnData_$gen$_ContosoUniversityModelsStudent || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TypedBusinessData":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Student),"InputStream":{},"Url":"","Success":false,"Method":"","BusinessData":{}};obj.constructor=_alias0.ReturnData_$gen$_ContosoUniversityModelsStudent; return obj; };
_alias0.ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent = _alias0.ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"TypedBusinessData":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Student)),"InputStream":{},"Url":"","Success":false,"Method":"","BusinessData":{}};obj.constructor=_alias0.ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent; return obj; };
_alias2.Course = _alias2.Course || function(){ var args = Array.prototype.slice.call(arguments); var obj = {"CourseID":0,"Title":"","Credits":0,"DepartmentID":0,"Department":$dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Department),"Enrollments":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Enrollment)),"Instructors":$dp.$shared.$arrayFactory($dp.$shared.$circularReferenceManagerFactory.apply(null, args)(_alias2.Instructor))};obj.constructor=_alias2.Course; return obj; };
//#endregion
//#region 'Enum'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.TestJsNetBridgeApp = $dp.$JsNet.TestJsNetBridgeApp || {};
$dp.$JsNet.TestJsNetBridgeApp.Controllers = $dp.$JsNet.TestJsNetBridgeApp.Controllers || {};
$dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController = $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController || {};
$dp.$JsNet.ContosoUniversity = $dp.$JsNet.ContosoUniversity || {};
$dp.$JsNet.ContosoUniversity.Models = $dp.$JsNet.ContosoUniversity.Models || {};
var _alias1 = $dp.$JsNet.TestJsNetBridgeApp.Controllers.$JsNs$_HomeController;
var _alias2 = $dp.$JsNet.ContosoUniversity.Models;
_alias1.enum_test = _alias1.enum_test || {"test1":{ "$Key":"test1","$Value":0 },"test2":{ "$Key":"test2","$Value":1 }};
_alias2.Grade = _alias2.Grade || {"A":{ "$Key":"A","$Value":0 },"B":{ "$Key":"B","$Value":1 },"C":{ "$Key":"C","$Value":2 },"D":{ "$Key":"D","$Value":3 },"F":{ "$Key":"F","$Value":4 }};
//#endregion
//#region 'UrlSet'
window.$dp = window.$dp || {};
$dp.$JsNet = $dp.$JsNet || {};
$dp.$JsNet.$UrlSet = {"TestArea":{"$apiData2":{"Get": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Get'; action.$Names.controller = 'Data2'; action.$Names.area  = 'TestArea';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$get:"get",$items:["get"],$single:"get",$first:"get"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},"Home2":{"Action_NoParams": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_NoParams'; action.$Names.controller = 'Home2'; action.$Names.area  = 'TestArea';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_FakeName": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_RealName'; action.$Names.controller = 'Home2'; action.$Names.area  = 'TestArea';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()}},
"$apiData":{"Get": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Get'; action.$Names.controller = 'Data'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$get:"get",$items:["get"],$single:"get",$first:"get"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_AcceptVerbs_TEST": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_AcceptVerbs_TEST'; action.$Names.controller = 'Data'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$TEST:"TEST",$items:["TEST"],$single:"TEST",$first:"TEST"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Orders": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Orders'; action.$Names.controller = 'Data'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$post:"post",$items:["post"],$single:"post",$first:"post"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = 'customers/orders';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Orders_WithCustomerId": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Orders_WithCustomerId'; action.$Names.controller = 'Data'; action.$Names.area  = '';action.$Params = function(){  var obj = {"customerId":0}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$post:"post",$items:["post"],$single:"post",$first:"post"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = 'customers/{customerId}/orders';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"Home":{"Index": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Index'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = {}; return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_NoParams": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_NoParams'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_WithParamterIdInUrl": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_WithParamterIdInUrl'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":""}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_FakeName": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_RealName'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = null; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Action_Enum": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Action_Enum'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"choice":0,"myGrade":0}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData(); return obj; };action.$Enums = function(){  var obj = {"choice":_alias1.enum_test,"myGrade":_alias2.Grade}; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ShowMe": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ShowMe'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"name":"","age":0}; return obj; };action.$Return = function(){  var obj = _alias1.dpPerson(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"ShowMe2": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'ShowMe2'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"name":"","age":0,"prenom":""}; return obj; };action.$Return = function(){  var obj = _alias1.dpPerson(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"GetStudent": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'GetStudent'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"PersonID":0}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsStudent(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"GetStudents": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'GetStudents'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"FirstMidName":""}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ICollection_$gen$_ContosoUniversityModelsStudent(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"CreateNewStudent": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'CreateNewStudent'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"student":_alias2.Student()}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsStudent(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"GetDepartment": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'GetDepartment'; action.$Names.controller = 'Home'; action.$Names.area  = '';action.$Params = function(){  var obj = {"departmentName":""}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsDepartment(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:'post',method:'post',data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()},
"$apiInstructor":{"Get": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Get'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$get:"get",$items:["get"],$single:"get",$first:"get"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Put": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Put'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"instructor":_alias2.Instructor()}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$put:"put",$items:["put"],$single:"put",$first:"put"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();obj.$action1 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Put'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0,"instructor":_alias2.Instructor()}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$put:"put",$items:["put"],$single:"put",$first:"put"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }(),"Delete": function actionFactory () { try { var obj = {};obj.$action0 = function actionFactory () { try { var action = $dp.$JsNet.$Helpers.$Shared.$Action.$ActionFactory();action.$Names.action = 'Delete'; action.$Names.controller = 'Instructor'; action.$Names.area  = '';action.$Params = function(){  var obj = {"id":0}; return obj; };action.$Return = function(){  var obj = _alias0.ReturnData_$gen$_ContosoUniversityModelsInstructor(); return obj; };action.$Enums = function(){  var obj = null; return obj; };action.$httpMethodArray = {$delete:"delete",$items:["delete"],$single:"delete",$first:"delete"};action.$IsApi = true;action.$AjaxSettings = function(){  var obj = {url:action.$GetUrl(),dataType:undefined,contentType:'application/json',cache:false,type:action.$httpMethodArray.$first,method:action.$httpMethodArray.$first,data:undefined}; return obj; };action.$RouteTemplate = '';return action; } catch(ex) { throw ex;  } }();return obj; } catch(ex) { throw ex;  } }()}};
//-- alias
window.$dpUrlSet = $dp.$JsNet.$UrlSet;
window.$dpLib = $dp.$JsNet;
//#endregion
})();
})();
})();
