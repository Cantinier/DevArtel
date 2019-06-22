package ru.digitbreak.dataservice.domain;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Simple.
 */
@Entity
@Table(name = "simple")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Simple extends AbstractEntity<Simple> {

    private static final long serialVersionUID = 1L;

    @Column(name = "description")
    private String description;

    public String getDescription() {
        return description;
    }

    public Simple description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Simple{" +
            "id=" + getId() +
            ", description='" + getDescription() + "'" +
            "}";
    }
}
