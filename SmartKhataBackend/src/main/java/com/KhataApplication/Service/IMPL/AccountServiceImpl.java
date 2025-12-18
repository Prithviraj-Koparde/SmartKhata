package com.KhataApplication.Service.IMPL;

import com.KhataApplication.DataTransferObject.AccountDTO;
import com.KhataApplication.Entity.Account;
import com.KhataApplication.Mapper.AccountMapper;
import com.KhataApplication.Repository.AccountRepo;
import com.KhataApplication.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collector;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountRepo accountRepo;

    @Override
    public AccountDTO createAccount(AccountDTO accountDTO) {

        Account account = AccountMapper.mapToAccount(accountDTO);
        Account savedAccount = accountRepo.save(account);
        return AccountMapper.mapToAccountDTO(savedAccount);
    }

    @Override
    public AccountDTO getAccountById(Long id) {
        Account account = accountRepo.findById(id).orElseThrow(() -> new RuntimeException("Account doesnot exist!"));
        return AccountMapper.mapToAccountDTO(account);
    }

    @Override
    public AccountDTO updateAmount(Long id, BigDecimal debt) {
        if (debt == null) {
            throw new IllegalArgumentException("Debt value cannot be null");
        }
        Account account = accountRepo.findById(id).orElseThrow(() -> new RuntimeException("Account doesnot exist!"));
        BigDecimal totalAmount = debt;
        account.setDebt(totalAmount);
        Account savedAccount = accountRepo.save(account);
        return AccountMapper.mapToAccountDTO(savedAccount);
    }

    @Override
    public List<AccountDTO> getAllAccounts() {
        return accountRepo.findAll().stream().map(AccountMapper::mapToAccountDTO).toList();
    }

    @Override
    public void deleteAccountById(Long id) {
        Account account = accountRepo.findById(id).orElseThrow(() -> new RuntimeException("No such user exist!"));
        accountRepo.delete(account);
    }


}
