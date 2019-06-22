/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.service;

import org.slf4j.LoggerFactory;
import ru.digitbreak.dataservice.domain.Tender;
import ru.digitbreak.dataservice.repository.TenderRepository;
import ru.digitbreak.dataservice.repository.specification.TenderSpecification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author oleg
 */
@Service
@Transactional
public class TenderService  extends AbstractService<Tender, Long>{
     {
        log = LoggerFactory.getLogger(TenderService.class);
        clazz = Tender.class;
    }

    public TenderService(TenderRepository repository, TenderSpecification specification) {
        super(repository, specification);
    }
}
