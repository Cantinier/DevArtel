/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.web.rest;

import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.digitbreak.dataservice.domain.Orgaz;
import ru.digitbreak.dataservice.service.OrgazService;
/**
 *
 * @author oleg
 */
@RestController
@RequestMapping("/api/orgaz")
public class OrgazResource extends AbstractResource<Orgaz,Long> {
  {
        log = LoggerFactory.getLogger(OrgazResource.class);
        ENTITY_NAME = "dataServiceOrgaz";
        clazz = Orgaz.class;
    }

    public OrgazResource(OrgazService orgazService) {
        super(orgazService);
    }   
}
