<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import ="pruksa.f2.service.*" %>

<%
String paramSbuCode=request.getParameter("paramSbuCode");
//paramSbuCode="CN";
overviewService  jndi = new  overviewService();
String query="CALL MST_project_list('"+paramSbuCode+"')";
String field="1";
jndi.selectByIndex(query,field);
out.println(jndi.getData());

%>
