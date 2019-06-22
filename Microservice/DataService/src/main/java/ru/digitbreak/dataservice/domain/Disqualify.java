/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.domain;

import java.io.Serializable;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 *
 * @author oleg
 */
@Entity
@Table(name = "disqualify")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Disqualify extends AbstractEntity<Disqualify> {

    private static final long serialVersionUID = 1L;
    
    @Size(max = 20)
    @Column(name = "dis_id")
    private String disId;
    @Size(max = 90)
    @Column(name = "fio")
    private String fio;
    @Size(max = 200)
    @Column(name = "birth_country")
    private String birthCountry;
    @Size(max = 180)
    @Column(name = "organization")
    private String organization;
    @Size(max = 10)
    @Column(name = "date_disc")
    private String dateDisc;
    @Size(max = 10)
    @Column(name = "date_end_disc")
    private String dateEndDisc;

    public Disqualify() {
    }

   

    public String getDisId() {
        return disId;
    }

    public void setDisId(String disId) {
        this.disId = disId;
    }

    public String getFio() {
        return fio;
    }

    public void setFio(String fio) {
        this.fio = fio;
    }

    public String getBirthCountry() {
        return birthCountry;
    }

    public void setBirthCountry(String birthCountry) {
        this.birthCountry = birthCountry;
    }

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    public String getDateDisc() {
        return dateDisc;
    }

    public void setDateDisc(String dateDisc) {
        this.dateDisc = dateDisc;
    }

    public String getDateEndDisc() {
        return dateEndDisc;
    }

    public void setDateEndDisc(String dateEndDisc) {
        this.dateEndDisc = dateEndDisc;
    }

    
}
