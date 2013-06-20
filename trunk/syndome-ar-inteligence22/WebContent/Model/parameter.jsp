
<%@page import="syndome.ar.service.syndomeService"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
	syndomeService jndi = new syndomeService();

	String requestAction = request.getParameter("request");
	
	if(requestAction.equals("paramYear")){
		jndi.setOptionYear("call paramYear");
		out.print(jndi.getOptionYear());
	}else{
		jndi.setOptionMonth("call paramMonth");
		out.print(jndi.getOptionMonth());
	}
	
	
	
%>