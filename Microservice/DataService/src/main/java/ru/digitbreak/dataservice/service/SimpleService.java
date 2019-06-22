package ru.digitbreak.dataservice.service;

import ru.digitbreak.dataservice.domain.Simple;
import ru.digitbreak.dataservice.repository.SimpleRepository;
import ru.digitbreak.dataservice.repository.specification.SimpleSpecification;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SimpleService extends AbstractService<Simple,Long>{

    {
        log = LoggerFactory.getLogger(SimpleService.class);
        clazz = Simple.class;
    }

    public SimpleService(SimpleRepository repository, SimpleSpecification specification) {
        super(repository, specification);
    }
}
