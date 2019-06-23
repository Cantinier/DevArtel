/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.service;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.digitbreak.dataservice.domain.Disqualify;
import ru.digitbreak.dataservice.repository.DisqualifyRepository;
import ru.digitbreak.dataservice.repository.specification.DisqualifySpecification;
/**
 *
 * @author oleg
 */
@Service
@Transactional
public class DisqualifyService extends AbstractService<Disqualify, Long>{
     {
        log = LoggerFactory.getLogger(DisqualifyService.class);
        clazz = Disqualify.class;
    }

    public DisqualifyService(DisqualifyRepository repository, DisqualifySpecification specification) {
        super(repository, specification);
    }
}
