/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.digitbreak.dataservice.domain.Employers;

import org.slf4j.LoggerFactory;
import ru.digitbreak.dataservice.repository.EmployersRepository;
import ru.digitbreak.dataservice.repository.specification.EmployersSpecification;
/**
 *
 * @author oleg
 */
@Service
@Transactional
public class EmployersService extends AbstractService<Employers, Long>{
    
     {
        log = LoggerFactory.getLogger(EmployersService.class);
        clazz = Employers.class;
    }

    public EmployersService(EmployersRepository repository, EmployersSpecification specification) {
        super(repository, specification);
    }
}
