/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.service;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.digitbreak.dataservice.domain.Capital;
import ru.digitbreak.dataservice.repository.CapitalRepository;
import ru.digitbreak.dataservice.repository.specification.CapitalSpecification;

/**
 *
 * @author oleg
 */
@Service
@Transactional
public class CapitalService extends AbstractService<Capital, Long>{
     {
        log = LoggerFactory.getLogger(CapitalService.class);
        clazz = Capital.class;
    }

    public CapitalService(CapitalRepository repository, CapitalSpecification specification) {
        super(repository, specification);
    }
}
