/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.domain;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.Size;

/**
 *
 * @author oleg
 */
@Entity
@Table(name = "attribute")
public class Attribute extends AbstractEntity<Attribute> {

    private static final long serialVersionUID = 1L;

    @Size(max = 100)
    @Column(name = "nameatr")
    private String value;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id_typeofattribute", referencedColumnName = "id")
    private Typeofattribute idTypeofattribute;

    @ManyToOne(optional = false)
    @JoinColumn(name = "id_employers", referencedColumnName = "id")
    private Employers idEmployers;


    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public Typeofattribute getIdTypeofattribute() {
        return idTypeofattribute;
    }

    public void setIdTypeofattribute(Typeofattribute idTypeofattribute) {
        this.idTypeofattribute = idTypeofattribute;
    }

    public Employers getIdEmployers() {
        return idEmployers;
    }

    public void setIdEmployers(Employers idEmployers) {
        this.idEmployers = idEmployers;
    }
}
