/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.userservice.client;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.digitbreak.library.entity.Employers;
import ru.digitbreak.library.entity.api.IGenericProxyAPI;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import static ru.digitbreak.library.entity.GenericAbstractEntity.AUTHORIZATION_HEADER;
import ru.digitbreak.library.entity.api.IGenericProxyAPI;
/**
 *
 * @author oleg
 */
@FeignClient(name = "dataservice")
public interface EmployersProxy extends IGenericProxyAPI<Employers> {
     @Override
    @PostMapping("/api/employers")
    ResponseEntity<Employers> createEntity(
        @RequestBody Employers entity);

    @Override
    @PutMapping("/api/employers")
    ResponseEntity<Employers> updateEntity(
        @RequestBody Employers entity);

    @Override
    @GetMapping("/api/employers/{id}")
    ResponseEntity<Employers> getEntity(
        @PathVariable("id") Long id);

    @Override
    @GetMapping("/api/employers")
    List<Employers> getAllEntites();

    @Override
    @DeleteMapping("/api/employers/{id}")
    ResponseEntity<Void> deleteEntity(
        @PathVariable("id") Long id);
}
