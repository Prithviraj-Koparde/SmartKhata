package com.KhataApplication.DataTransferObject;

import jakarta.validation.constraints.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.aspectj.bridge.IMessage;

import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AccountDTO {

    private Long id;

    @NotBlank(message = "Account holder name is required")
    @Size(min = 3, message = "Name must be at least 3 characters")
    private String accountHolderName;

    @NotBlank(message = "Phone number is required")
    @Pattern(regexp = "^[6-9][0-9]{9}$", message = "Invalid phone number")
    private String phoneNumber;

    @NotNull(message = "Debt date is required")
    private LocalDate debtDate;

    @NotNull(message = "Due date is required")
    private LocalDate dueDate;

    @NotNull(message = "Debt amount is required")
    @DecimalMin(value = "0.0", inclusive = true, message = "Debt cannot be negative")
    private BigDecimal debt;
}
