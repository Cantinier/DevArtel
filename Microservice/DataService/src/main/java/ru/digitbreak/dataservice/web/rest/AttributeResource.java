/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.web.rest;

import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.digitbreak.dataservice.domain.Attribute;
import ru.digitbreak.dataservice.service.AttributeService;

/**
 *
 * @author oleg
 */
@RestController
@RequestMapping("/api/attribute")
public class AttributeResource extends AbstractResource<Attribute,Long> {
      {
        log = LoggerFactory.getLogger(AttributeResource.class);
        ENTITY_NAME = "dataServiceTypeofattribute";
        clazz = Attribute.class;
    }

    public AttributeResource(AttributeService attributeService) {
        super(attributeService);
    }
}
