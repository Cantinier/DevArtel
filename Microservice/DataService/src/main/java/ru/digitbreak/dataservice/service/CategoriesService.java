/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.service;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.digitbreak.dataservice.domain.Categories;
import ru.digitbreak.dataservice.repository.CategoriesRepository;
import ru.digitbreak.dataservice.repository.specification.CategoriesSpecification;
/**
 *
 * @author oleg
 */
@Service
@Transactional
public class CategoriesService extends AbstractService<Categories, Long>{
     {
        log = LoggerFactory.getLogger(CategoriesService.class);
        clazz = Categories.class;
    }

    public CategoriesService(CategoriesRepository repository, CategoriesSpecification specification) {
        super(repository, specification);
    }
}
