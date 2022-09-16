package com.bank.bankmanagementsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

//@AllArgsConstructor
@Getter
@Setter
public class ResponseDTO {

    private String errorMessage;
    private String requestURI;

}
