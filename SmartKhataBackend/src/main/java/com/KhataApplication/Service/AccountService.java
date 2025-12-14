package com.KhataApplication.Service;

import com.KhataApplication.DataTransferObject.AccountDTO;
import com.KhataApplication.Entity.Account;

import java.math.BigDecimal;
import java.util.List;

public interface AccountService {

    AccountDTO createAccount(AccountDTO account);

    AccountDTO getAccountById(Long id);

    AccountDTO updateAmount(Long id, BigDecimal debt);

    List<AccountDTO> getAllAccounts();

    void deleteAccountById(Long id);
}
