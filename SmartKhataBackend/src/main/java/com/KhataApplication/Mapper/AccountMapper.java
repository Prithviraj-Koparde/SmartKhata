package com.KhataApplication.Mapper;

import com.KhataApplication.DataTransferObject.AccountDTO;
import com.KhataApplication.Entity.Account;

public class AccountMapper {

    public static Account mapToAccount(AccountDTO accountDTO) {

        Account account = new Account(
                accountDTO.getId(),
                accountDTO.getAccountHolderName(),
                accountDTO.getPhoneNumber(),
                accountDTO.getDebtDate(),
                accountDTO.getDueDate(),
                accountDTO.getDebt()
        );
        return account;
    }

    public static AccountDTO mapToAccountDTO(Account account) {

        AccountDTO accountDTO = new AccountDTO(
                account.getId(),
                account.getAccountHolderName(),
                account.getPhoneNumber(),
                account.getDebtDate(),
                account.getDueDate(),
                account.getDebt()
        );
        return accountDTO;
    }
}
