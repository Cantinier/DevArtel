/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.web.rest;

import java.io.Serializable;
import ru.digitbreak.dataservice.domain.Employers;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.digitbreak.dataservice.domain.AbstractEntity;
import ru.digitbreak.dataservice.service.EmployersService;
import org.slf4j.LoggerFactory;

/**
 *
 * @author oleg
 */
@RestController
@RequestMapping("/api/employers")
public class EmployersResource extends AbstractResource<Employers,Long> {
     {
        log = LoggerFactory.getLogger(SimpleResource.class);
        ENTITY_NAME = "dataServiceEmployers";
        clazz = Employers.class;
    }

    public EmployersResource(EmployersService employersService) {
        super(employersService);
    }
}
