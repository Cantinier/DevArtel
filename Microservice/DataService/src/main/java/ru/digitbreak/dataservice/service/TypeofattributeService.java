/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.service;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.digitbreak.dataservice.domain.Typeofattribute;
import ru.digitbreak.dataservice.repository.TypeofattributeRepository;
import ru.digitbreak.dataservice.repository.specification.TypeofattributeSpecification;

/**
 *
 * @author oleg
 */
@Service
@Transactional
public class TypeofattributeService extends AbstractService<Typeofattribute, Long>{
     {
        log = LoggerFactory.getLogger(TypeofattributeService.class);
        clazz = Typeofattribute.class;
    }

    public TypeofattributeService(TypeofattributeRepository repository, TypeofattributeSpecification specification) {
        super(repository, specification);
    }
}
