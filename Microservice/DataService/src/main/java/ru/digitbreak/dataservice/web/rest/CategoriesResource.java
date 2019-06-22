/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.web.rest;

import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.digitbreak.dataservice.domain.Categories;
import ru.digitbreak.dataservice.service.CategoriesService;
/**
 *
 * @author oleg
 */
@RestController
@RequestMapping("/api/categories")
public class CategoriesResource extends AbstractResource<Categories,Long> {
     {
        log = LoggerFactory.getLogger(CategoriesResource.class);
        ENTITY_NAME = "dataServiceCategories";
        clazz = Categories.class;
    }

    public CategoriesResource(CategoriesService categoriesService) {
        super(categoriesService);
    }
}
