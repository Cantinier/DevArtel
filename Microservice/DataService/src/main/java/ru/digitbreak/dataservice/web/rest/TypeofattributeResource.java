/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.web.rest;

import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.digitbreak.dataservice.domain.Typeofattribute;
import ru.digitbreak.dataservice.service.TypeofattributeService;

/**
 *
 * @author oleg
 */
@RestController
@RequestMapping("/api/typeofattribute")
public class TypeofattributeResource extends AbstractResource<Typeofattribute,Long> {
      {
        log = LoggerFactory.getLogger(TypeofattributeResource.class);
        ENTITY_NAME = "dataServiceTypeofattribute";
        clazz = Typeofattribute.class;
    }

    public TypeofattributeResource(TypeofattributeService typeofattributeService) {
        super(typeofattributeService);
    }
}
