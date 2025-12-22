package com.KhataApplication.Controller;


import com.KhataApplication.DataTransferObject.AccountDTO;
import com.KhataApplication.Service.AccountService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @PostMapping
    public ResponseEntity<AccountDTO> addAccount(@Valid @RequestBody AccountDTO accountDTO) {
        return new ResponseEntity<>(accountService.createAccount(accountDTO), HttpStatus.CREATED);
    }


    @GetMapping("/{id}")
    public ResponseEntity<AccountDTO> getAccountById(@PathVariable Long id) {
        AccountDTO accountDTO = accountService.getAccountById(id);
        return ResponseEntity.ok(accountDTO);
    }


    @PutMapping("/{id}/updateDebt")
    public ResponseEntity<AccountDTO> updateAmount(@PathVariable Long id, @RequestBody Map<String, BigDecimal> request) {

        AccountDTO accountDTO = accountService.updateAmount(id, request.get("debt"));
        return ResponseEntity.ok(accountDTO);
    }

    @GetMapping("/allAccounts")
    public ResponseEntity<List<AccountDTO>> getAllAccounts() {
        List<AccountDTO> accountDTO = accountService.getAllAccounts();
        return ResponseEntity.ok(accountDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteAccountById(@PathVariable Long id) {
        accountService.deleteAccountById(id);
        return ResponseEntity.noContent().build();
    }
}
