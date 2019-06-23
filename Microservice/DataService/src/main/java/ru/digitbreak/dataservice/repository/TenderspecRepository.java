package ru.digitbreak.dataservice.repository;

import ru.digitbreak.dataservice.domain.Tenderspec;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Tenderspec entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TenderspecRepository extends JpaRepository<Tenderspec, Long> {

}
