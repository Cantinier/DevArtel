/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.repository;
import ru.digitbreak.dataservice.domain.Tender;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;
/**
 *
 * @author oleg
 */
@SuppressWarnings("unused")
@Repository
public interface TenderRepository  extends JpaRepository<Tender, Long>{
    
}
