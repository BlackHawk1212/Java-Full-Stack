package com.bank.bankmanagementsystem.exception;

import com.bank.bankmanagementsystem.dto.ResponseDTO;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.servlet.http.HttpServletRequest;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UserNameNotFoundException.class)
    @ResponseStatus(value = HttpStatus.NOT_FOUND)
    public ResponseDTO handleUserNameNotFound(UserNameNotFoundException ex, HttpServletRequest request){
        ResponseDTO res = new ResponseDTO();
        res.setErrorMessage(ex.getMessage());       //Username Not Found
        res.setRequestURI(request.getRequestURI()); //fetchByName
        return res;
    }

}
