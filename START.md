#Project 


1 Local Storage

-Life long storage
- Size of data (5mb - 10 mb)
-not secure
-what do people store ? state less credentials
(acess_token)

2 SESSION storage

-temporary storage
- size (5 mb - 10)
- its vulnerable to XSS attacks(cross-site scripting) through JS file
- sensitive  information store

3 COOKIES storage
- temporary storage
- size 4kb only
- cookie + session same
- 


Q. Can session storage be used across multiple windows or tabs?
- No  , whoever created session forexample ,  tab or windows.
Only that has access to that session.If i have share across multiple tab/ windows ,
we have to use LS

