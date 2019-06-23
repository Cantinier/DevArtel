/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.service;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.digitbreak.dataservice.domain.Orgaz;
import ru.digitbreak.dataservice.repository.OrgazRepository;
import ru.digitbreak.dataservice.repository.specification.OrgazSpecification;
/**
 *
 * @author oleg
 */
@Service
@Transactional
public class OrgazService extends AbstractService<Orgaz, Long>{
     {
        log = LoggerFactory.getLogger(OrgazService.class);
        clazz = Orgaz.class;
    }

    public OrgazService(OrgazRepository repository, OrgazSpecification specification) {
        super(repository, specification);
    }
}
