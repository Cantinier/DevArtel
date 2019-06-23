package ru.digitbreak.dataservice.web.rest;

import ru.digitbreak.dataservice.domain.Simple;
import ru.digitbreak.dataservice.service.SimpleService;
import ru.digitbreak.dataservice.web.rest.errors.BadRequestAlertException;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;

/**
 * REST controller for managing {@link ru.digitbreak.dataservice.domain.Simple}.
 */
@RestController
@RequestMapping("/api/simples")
public class SimpleResource extends AbstractResource<Simple,Long>{

    {
        log = LoggerFactory.getLogger(SimpleResource.class);
        ENTITY_NAME = "dataServiceSimple";
        clazz = Simple.class;
    }

    public SimpleResource(SimpleService simpleService) {
        super(simpleService);
    }
}
