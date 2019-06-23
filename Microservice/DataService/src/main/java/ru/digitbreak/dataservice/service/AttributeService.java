/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.service;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.digitbreak.dataservice.domain.Attribute;
import ru.digitbreak.dataservice.repository.AttributeRepository;
import ru.digitbreak.dataservice.repository.specification.AttributeSpecification;

/**
 *
 * @author oleg
 */
@Service
@Transactional
public class AttributeService extends AbstractService<Attribute, Long>{
     {
        log = LoggerFactory.getLogger(AttributeService.class);
        clazz = Attribute.class;
    }

    public AttributeService(AttributeRepository repository, AttributeSpecification specification) {
        super(repository, specification);
    }
}
