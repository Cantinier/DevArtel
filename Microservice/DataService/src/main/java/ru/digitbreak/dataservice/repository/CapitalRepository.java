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
import ru.digitbreak.dataservice.domain.Capital;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

@SuppressWarnings("unused")
@Repository
public interface CapitalRepository  extends JpaRepository<Capital, Long>{
    
}
