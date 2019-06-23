/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.userservice.web.proxy;

import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.digitbreak.library.entity.Employers;
import ru.digitbreak.library.entity.api.IGenericProxyAPI;

/**
 *
 * @author oleg
 */
@RestController
@RequestMapping("/api/employers")
public class EmployersProxyResource extends AbstractProxyResource<Employers>{
    
    {
        log= LoggerFactory.getLogger(EmployersProxyResource.class);
        clazz = Employers.class;
    }

    public EmployersProxyResource(IGenericProxyAPI<Employers> proxyAPI) {
        super(proxyAPI);
    }
}
