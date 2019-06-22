/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.repository;

/**
 *
 * @author oleg
 */

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.digitbreak.dataservice.domain.Attribute;

@SuppressWarnings("unused")
@Repository
public interface AttributeRepository extends JpaRepository<Attribute, Long>{

}
