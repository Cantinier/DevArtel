/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.service;

import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.digitbreak.dataservice.domain.Tenderspec;
import ru.digitbreak.dataservice.repository.TenderspecRepository;
import ru.digitbreak.dataservice.repository.specification.TenderspecSpecification;

/**
 *
 * @author oleg
 */
@Service
@Transactional
public class TenderspecService extends AbstractService<Tenderspec, Long>{
     {
        log = LoggerFactory.getLogger(TenderspecService.class);
        clazz = Tenderspec.class;
    }

    public TenderspecService(TenderspecRepository repository, TenderspecSpecification specification) {
        super(repository, specification);
    }
}
