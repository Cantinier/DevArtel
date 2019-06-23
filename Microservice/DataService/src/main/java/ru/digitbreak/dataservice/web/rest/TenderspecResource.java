package ru.digitbreak.dataservice.web.rest;

import ru.digitbreak.dataservice.domain.Tenderspec;
import ru.digitbreak.dataservice.service.TenderspecService;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;


/**
 * REST controller for managing {@link ru.digitbreak.dataservice.domain.Tenderspec}.
 */
@RestController
@RequestMapping("/api/tenderspec")
public class TenderspecResource extends AbstractResource<Tenderspec,Long> {

    {
        log = LoggerFactory.getLogger(TenderspecResource.class);
        ENTITY_NAME = "dataServiceTenderspec";
        clazz = Tenderspec.class;
    }

    public TenderspecResource(TenderspecService service) {
        super(service);
    }
}
