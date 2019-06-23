/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.web.rest;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.digitbreak.dataservice.domain.Tender;
import ru.digitbreak.dataservice.service.TenderService;

/**
 *
 * @author oleg
 */
@RestController
@RequestMapping("/api/tender")
public class TenderResource extends AbstractResource<Tender,Long>{
     {
        log = LoggerFactory.getLogger(TenderResource.class);
        ENTITY_NAME = "dataServiceTender";
        clazz = Tender.class;
    }

    public TenderResource(TenderService tenderService) {
        super(tenderService);
    }
}
