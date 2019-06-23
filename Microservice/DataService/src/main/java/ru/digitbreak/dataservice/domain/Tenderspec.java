package ru.digitbreak.dataservice.domain;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;

/**
 * A Tenderspec.
 */
@Entity
@Table(name = "tenderspec")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Tenderspec extends AbstractEntity<Tenderspec> {

    private static final long serialVersionUID = 1L;

    @Column(name = "numberofdock")
    private String numberofdock;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "id_employers", referencedColumnName = "id")
    private Employers employers;

    @ManyToOne
    @JoinColumn(name = "id_tender", referencedColumnName = "id")
    private Tender tender;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove

    public String getNumberofdock() {
        return numberofdock;
    }

    public Tenderspec numberofdock(String numberofdock) {
        this.numberofdock = numberofdock;
        return this;
    }

    public void setNumberofdock(String numberofdock) {
        this.numberofdock = numberofdock;
    }

    public String getDescription() {
        return description;
    }

    public Tenderspec description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Employers getEmployers() {
        return employers;
    }

    public Tenderspec employers(Employers employers) {
        this.employers = employers;
        return this;
    }

    public void setEmployers(Employers employers) {
        this.employers = employers;
    }

    public Tender getTender() {
        return tender;
    }

    public Tenderspec tender(Tender tender) {
        this.tender = tender;
        return this;
    }

    public void setTender(Tender tender) {
        this.tender = tender;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove
}
