﻿using Diphap.JsNetBridge.Common.JS;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Diphap.JsNetBridge
{
    public class ScriptHelper_JS : ScriptHelper
    {
        /// <summary>
        /// Get name of object factory.
        /// </summary>
        /// <param name="telem_work"></param>
        /// <param name="isCollection"></param>
        /// <param name="functionReference"></param>
        /// <param name="objectFullName"></param>
        /// <returns></returns>
        public override string GetObjectFactoryName(Type telem_work, bool isCollection, bool functionReference, string objectFullName)
        {
            string jsvalue = string.Format("{0}()", objectFullName);
            if (isCollection)
            {
                jsvalue = JSArrayFactory.FunctionDefinitionCall(jsvalue);
            }
            if (functionReference)
            {
                jsvalue = jsvalue.Replace("()", null);
            }
            return jsvalue;
        }

        /// <summary>
        /// Create namespace.
        /// </summary>
        /// <param name="js_obj_fullName"></param>
        /// <returns></returns>
        override public List<string> CreateNamespace(string js_obj_fullName)
        {
            //-- 
            List<string> obj_full_array;
            {
                //-- parts of namespace.
                List<string> ns_parts = js_obj_fullName.Split('.').ToList();

                obj_full_array = new List<string>(ns_parts.Count);

                string ns_remain = js_obj_fullName;
                for (int ii = ns_parts.Count - 1; ii > 0; ii--)
                {
                    string obj_current = ns_parts[ii];
                    int length = ns_remain.Length - obj_current.Length;
                    string obj_all = ns_remain.Substring(0, length).TrimEnd('.');
                    obj_full_array.Add(obj_all);
                    ns_remain = obj_all;
                }

                obj_full_array.Reverse();

                if (obj_full_array.Count > 0)
                { obj_full_array[0] = "window." + obj_full_array[0]; }
            }


            List<string> instructions = new List<string>();
            foreach (string obj in obj_full_array)
            {
                instructions.Add(string.Format("{0} = {0} || {{}};", obj));
            }

            return instructions;

        }

        /// <summary>
        /// Primitive Type of member or Collection of primitive types .
        /// </summary>
        /// <param name="tmember"></param>
        /// <param name="jsValue"></param>
        /// <returns></returns>
        public override bool GetPrimitiveEmptyValue(Type tmember, out string jsValue)
        {
            jsValue = "";

            if (tmember == typeof(string))
            {
                jsValue = "\"\"";
            }
            else if (TypeHelper.IsNumber(tmember) || TypeHelper.IsEnum(tmember))
            {
                jsValue = "0";
            }
            else if (TypeHelper.IsDateTime(tmember))
            {
                jsValue = "new Date()";
            }
            else if (TypeHelper.IsBoolean(tmember))
            {
                jsValue = "false";
            }
            else if (TypeHelper.IsCollection(tmember))
            {
                //-- member is collection
                Type telement;
                if (TypeHelper.GetElementTypeOfCollection(tmember, out telement))
                {
                    if (this.GetPrimitiveEmptyValue(telement, out jsValue) == false)
                    {
                        jsValue = "";
                    }
                    else
                    {
                        jsValue = JSArrayFactory.FunctionDefinitionCall(jsValue);
                    }
                }
                else
                {
                    jsValue = "[]";
                }
            }

            return string.IsNullOrWhiteSpace(jsValue) == false;
        }

        /// <summary>
        /// Get Function => FOR!!! => var func = function funcName () { try { /*instructions*/; } catch (ex) { throw $dp.$shared.$innerExceptionFactory('Exception Message', ex); } }()
        /// </summary>
        /// <param name="body"></param>
        /// <param name="call"></param>
        /// <param name="funcName"></param>
        /// <param name="exceptionMessage"></param>
        /// <returns></returns>
        override public string GetFunction(string body, bool call, string funcName = null, string exceptionMessage = null)
        {
            return string.Format("function {0} () {{ try {{ {1} }} catch(ex) {{ {3}  }} }}{2}",
                funcName,
                body,
                call ? "()" : null,
                exceptionMessage == null ? "throw ex;" : string.Format("var new_message = '{0}' + ' => ' + ex.message; throw new_message;", exceptionMessage));
        }

        /// <summary>
        /// Get Module => ex: (function funcName () { try { /*instructions*/; } catch (ex) { throw $dp.$shared.$innerExceptionFactory('Exception Message', ex); } }())
        /// </summary>
        /// <param name="body"></param>
        /// <param name="call"></param>
        /// <param name="funcName"></param>
        /// <param name="exceptionMessage"></param>
        /// <returns></returns>
        override public string GetFunctionModule(string body, bool call, string funcName = null, string exceptionMessage = null)
        {
            return "(" + GetFunction(body, call, funcName, exceptionMessage) + ")";
        }

        /// <summary>
        /// Get Factory:  function(){ return {param1:obj1, param2:2, param3:"" }; }
        /// </summary>
        /// <param name="jsObj">JS object.</param>
        /// <param name="withArgs"></param>
        /// <param name="constructorName">function name.</param>
        /// <param name="stampFunc"></param>
        /// <returns></returns>
        override public string GetFactory(string jsObj, bool withArgs, string constructorName = null, bool stampFunc = false)
        {
            if ((string.IsNullOrWhiteSpace(jsObj) == false) == false)
            {
                throw new ArgumentNullException("jsObj");
            }

            string constructorInstruction = null;
            if (string.IsNullOrWhiteSpace(constructorName) == false)
            {
                constructorInstruction = string.Format("obj.constructor={0};", constructorName);
            }

            string stampObjInstruction = null;
            if (stampFunc)
            {
                constructorInstruction = string.Format("obj.{0}stamp = {1};", ConfigJS.brandLetter, ConfigJS.stampFunc);
            }

            string argsInstruction = null;
            if (withArgs)
            {
                argsInstruction = "var args = Array.prototype.slice.call(arguments);";
            }

            return string.Format("function(){{ {0} var obj = {1};{2}{3} return obj; }}", argsInstruction, jsObj, constructorInstruction, stampObjInstruction);
        }

        /// <summary>
        /// (function(){ return {param1:obj1, param2:2, param3:"" }; })();
        /// </summary>
        /// <param name="instructions"></param>
        /// <returns></returns>
        override public string GetFactory_Executing(string instructions)
        {
            string value = string.Format("(function(){{ {0} }})();", instructions);
            return value;
        }

        /// <summary>
        /// $dp.namespace = $dp.namespace || function(){ return {param1:obj1, param2:2, param3:"" }; };
        /// </summary>
        /// <param name="t"></param>
        /// <param name="jsObj"></param>
        /// <param name="withArgs"></param>
        /// <param name="objFullName"></param>
        /// <returns></returns>
        override public string GetFactoryDeclaration(Type t, string jsObj, bool withArgs, string objFullName)
        {
            return GetObjectDeclaration(objFullName, GetFactory(jsObj, withArgs, objFullName, false));
        }

        /// <summary>
        /// namespace.
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        override public string GetNamespace(Type t)
        {
            string ns = string.Format("{0}.{1}", ConfigJS.prefix_ns_jsnet, ConfigJS.JSNamespace.GetPseudoNamespace(t).Replace("+", "."));
            return ns;
        }

        /// <summary>
        /// $dp.namespace = $dp.namespace ||  {param1:obj1, param2:2, param3:"" };
        /// </summary>
        /// <param name="objectFullName"></param>
        /// <param name="jsObj"></param>
        /// <returns></returns>
        override public string GetObjectDeclaration(string objectFullName, string jsObj)
        {
            return string.Format("{0} = {0} || {1};", objectFullName, jsObj);
        }

    }
}