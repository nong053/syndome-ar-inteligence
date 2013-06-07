<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
  <head>
    <title>DB Test</title>
  </head>
  <body>

  <%
    syndome.ar.service.syndomeService jndi = new syndome.ar.service.syndomeService();


	out.println("<br>------------------ <br>");
	
	 jndi.init2();
	out.println(jndi.getdata1());

  
  %>


 

  </body>
</html>