/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.web.rest;

import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.digitbreak.dataservice.domain.Capital;
import ru.digitbreak.dataservice.service.CapitalService;

/**
 *
 * @author oleg
 */
@RestController
@RequestMapping("/api/capital")
public class CapitalResource extends AbstractResource<Capital,Long> {
      {
        log = LoggerFactory.getLogger(CapitalResource.class);
        ENTITY_NAME = "dataServiceCapital";
        clazz = Capital.class;
    }

    public CapitalResource(CapitalService capitalService) {
        super(capitalService);
    }
}
