/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.web.rest;

import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.digitbreak.dataservice.domain.Disqualify;
import ru.digitbreak.dataservice.service.DisqualifyService;
/**
 *
 * @author oleg
 */
@RestController
@RequestMapping("/api/disqualify")
public class DisqualifyResource extends AbstractResource<Disqualify,Long> {
     {
        log = LoggerFactory.getLogger(DisqualifyResource.class);
        ENTITY_NAME = "dataServiceDisqualify";
        clazz = Disqualify.class;
    }

    public DisqualifyResource(DisqualifyService disqualifyService) {
        super(disqualifyService);
    }
}
