package com.KhataApplication.DataTransferObject;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@AllArgsConstructor
public class AccountDTO {

    private Long id;
    private String accountHolderName;
    private String phoneNumber;
    private LocalDate debtDate;
    private LocalDate dueDate;
    private BigDecimal debt;
}
