/**
 * Exception
    * Interruption in the intended execution of code
 * 
 * Error
    * Unintended interruption in execution of code, typically show up as exceptions Syntax errors are a type of
    * exception that occurs when incorrect sytanx is used
 * 
 * Throwing an Exception
    * Sending a message that something has gone wrong in the intended execution of code, this can be thrown by
    * JavaScript by the developer with the throw keyword
 */

/*
throw 'myException';
throw true;
*/

/**
 * Uncaught Exceptions
    * Exceptions that have been thrown when code has no guidance to handle the interruption
    * Users may see unhelpful obscure messages, or none exist
    * Catch exceptions with try...catch...finally
 * Try
    * Bock of code that may throw an exception
 * 
 * catch
    * Block of code that will run if an exception is thrown
 * 
 * Finally
    * Optional enclosed part of code that will run after the try block or after the catch block
    * run every time, even if an exceptions is not thrown 
 */
//Try..Catch
try{
    criticalcode();

}catch(ex){
    console.log();
    logError(ex);
}
//Try..Catch..Finally
try{
    criticalcode();

}catch(ex){
    console.log();
    logError(ex);
}finally{
    console.log("Code that always will run");
}