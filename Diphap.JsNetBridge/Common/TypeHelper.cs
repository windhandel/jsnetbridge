﻿using Diphap.JsNetBridge.Common;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace Diphap.JsNetBridge
{
    /// <summary>
    /// Helper.
    /// </summary>
    public class TypeHelper
    {
        static public readonly Type Type_IEnumerable = typeof(IEnumerable);

        /// <summary>
        /// Get element type of collection if tmem is collection other else return null.
        /// </summary>
        /// <param name="tmember"></param>
        /// <param name="tElement"></param>
        /// <returns></returns>
        public static bool GetElementTypeOfCollection(Type tmember, out Type tElement)
        {
            tElement = null;

            if (IsCollection(tmember))
            {
                //-- member is collection
                Type[] _types_generic = tmember.GetGenericArguments();
                if (_types_generic.Length > 0)
                {
                    tElement = _types_generic[0];
                }
                else
                {
                    tElement = tmember.GetElementType();
                }
            }
            return tElement != null;
        }

        /// <summary>
        /// Get element type of collection if 't' is collection other else return 't'.
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static Type GetElementTypeOfCollectionOrDefault(Type t)
        {
            Type t_work;
            //-- If it's collection, we use type of element.
            if (!TypeHelper.GetElementTypeOfCollection(t, out t_work))
            {
                t_work = t;
            }

            return t_work;
        }

        /// <summary>
        /// Is it collection.
        /// </summary>
        /// <param name="tmember"></param>
        /// <returns></returns>
        public static bool IsCollection(Type tmember)
        {
            return Type_IEnumerable.IsAssignableFrom(tmember) && tmember != typeof(string);
        }

        /// <summary>
        /// Get type of member.
        /// </summary>
        /// <param name="mi"></param>
        /// <returns></returns>
        public static Type GetMemberType(MemberInfo mi)
        {
            Type mt;
            switch (mi.MemberType)
            {
                case MemberTypes.Property:
                    mt = (mi as PropertyInfo).PropertyType;

                    break;
                case MemberTypes.Field:
                    mt = (mi as FieldInfo).FieldType;
                    break;
                default:
                    throw new NotImplementedException();
            }
            return mt;
        }

        /// <summary>
        /// Is it number?
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static bool IsNumber(Type t)
        {
            try
            {
                t = Nullable.GetUnderlyingType(t) ?? t;
                if (t.IsPrimitive)
                {
                    return t != typeof(bool) &&
                        t != typeof(char) &&
                        t != typeof(IntPtr) &&
                        t != typeof(UIntPtr);

                }
                return t == typeof(decimal);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Is it DateTime?
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static bool IsDateTime(Type t)
        {
            try
            {
                t = Nullable.GetUnderlyingType(t) ?? t;
                if (t == typeof(DateTime))
                {
                    return true;

                }
                return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Is it boolean?
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static bool IsBoolean(Type t)
        {
            try
            {
                t = Nullable.GetUnderlyingType(t) ?? t;
                if (t == typeof(bool))
                {
                    return true;

                }
                return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Is it Enum?
        /// </summary>
        /// <param name="t"></param>
        /// <returns></returns>
        public static bool IsEnum(Type t)
        {
            try
            {
                t = Nullable.GetUnderlyingType(t) ?? t;
                if (t.IsEnum)
                {
                    return true;
                }
                return false;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Get allTypes
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="whiteNamespaces"></param>
        /// <param name="blackNamespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfClass(string fileName, IList<string> whiteNamespaces, IList<string> blackNamespaces)
        {
            Assembly ass = Assembly.LoadFrom(fileName);
            return GetTypesOfClass(ass, whiteNamespaces, blackNamespaces);
        }

        /// <summary>
        /// Get allTypes of class.
        /// </summary>
        /// <param name="ass"></param>
        /// <param name="whiteNamespaces"></param>
        /// <param name="blackNamespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfClass(Assembly ass, IList<string> whiteNamespaces, IList<string> blackNamespaces)
        {
            List<Type> types_selected = GetTypesOfClass(ass.GetTypes(), whiteNamespaces);
            return types_selected;
        }

        /// <summary>
        /// filter types of class.
        /// </summary>
        /// <param name="types"></param>
        /// <param name="whiteNamespaces"></param>
        /// <param name="blackNamespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfClass(Type[] types, IList<string> whiteNamespaces = null, IList<string> blackNamespaces = null)
        {
            List<Type> types_selected = new List<Type>(types.Length);

            for (int idx = 0; idx < types.Length; idx++)
            {
                Type t = types[idx];

                bool goFlag = AurthorizeTypeOfObject(whiteNamespaces, blackNamespaces, t, types_selected);

                if (goFlag)
                {
                    if (t.IsPublic && (t.IsClass || t.IsInterface) && t.IsNested == false && !t.Name.Contains("<") && t.IsGenericType == false)
                    {
                        t = TypeHelper.GetElementTypeOfCollectionOrDefault(t);
                        types_selected.Add(t);
                    }
                }
            }
            return types_selected;
        }

        /// <summary>
        /// Authorize  Type of object ?
        /// </summary>
        /// <param name="whiteNamespaces"></param>
        /// <param name="blackNamespaces"></param>
        /// <param name="t">current type</param>
        /// <param name="types_selected"></param>
        /// <returns></returns>
        private static bool AurthorizeTypeOfObject(IList<string> whiteNamespaces, IList<string> blackNamespaces, Type t, IList<Type> types_selected)
        {
            Func<bool> noSelectedFlag = () => types_selected.IndexOf(t) < 0;
            Func<bool> noAttFlag = () => t.GetCustomAttribute(typeof(JsNetIgnoreAttribute), true) == null;
            Func<bool> nothingFlag = () => ((whiteNamespaces == null || whiteNamespaces.Count == 0) && (blackNamespaces == null || blackNamespaces.Count == 0));
            Func<bool> whiteFlag = () => (whiteNamespaces != null && whiteNamespaces.Count > 0 && whiteNamespaces.Any(ns => !string.IsNullOrWhiteSpace(ns) && t.FullName.IndexOf(ns) == 0));
            Func<bool> blackFlag = () => (blackNamespaces != null && blackNamespaces.Count > 0 && blackNamespaces.Any(ns => !string.IsNullOrWhiteSpace(ns) && t.FullName.IndexOf(ns) == 0));

            bool goFlag = noSelectedFlag() && noAttFlag() && (nothingFlag() || whiteFlag() || ((blackNamespaces != null && blackNamespaces.Count > 0) && !blackFlag()));

            return goFlag;
        }

        /// <summary>
        /// Get types of enum.
        /// </summary>
        /// <param name="ass"></param>
        /// <param name="whiteNamespaces"></param>
        /// <param name="blackNamespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfEnum(Assembly ass, IList<string> whiteNamespaces, IList<string> blackNamespaces)
        {
            Type[] types = ass.GetTypes();

            List<Type> types_selected = GetTypesOfEnum(types, whiteNamespaces, blackNamespaces);
            return types_selected;

        }

        /// <summary>
        /// Get types of enum.
        /// </summary>
        /// <param name="types"></param>
        /// <param name="whiteNamespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfEnum(Type[] types, IList<string> whiteNamespaces, IList<string> blackNamespaces)
        {
            List<Type> types_selected = new List<Type>(types.Length);

            for (int idx = 0; idx < types.Length; idx++)
            {
                Type t = types[idx];


                bool goFlag = AurthorizeTypeOfObject(whiteNamespaces, blackNamespaces, t, types_selected);

                if (goFlag)
                {
                    if (t.IsEnum && t.IsNested == false)
                    {
                        types_selected.Add(t);
                    }
                }
            }
            return types_selected;
        }

        /// <summary>
        /// Get allTypes of enum.
        /// </summary>
        /// <param name="fileName"></param>
        /// <param name="whiteNamespaces"></param>
        /// <param name="blackNamespaces"></param>
        /// <returns></returns>
        public static List<Type> GetTypesOfEnum(string fileName, IList<string> whiteNamespaces, IList<string> blackNamespaces)
        {
            Assembly ass = Assembly.LoadFrom(fileName);
            return GetTypesOfEnum(ass, whiteNamespaces, blackNamespaces);
        }


    }
}
