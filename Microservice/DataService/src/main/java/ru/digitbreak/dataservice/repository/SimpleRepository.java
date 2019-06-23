package ru.digitbreak.dataservice.repository;

import ru.digitbreak.dataservice.domain.Simple;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

@SuppressWarnings("unused")
@Repository
public interface SimpleRepository extends JpaRepository<Simple, Long> {

}
