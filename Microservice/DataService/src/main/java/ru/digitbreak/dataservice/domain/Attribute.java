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
@NamedQueries({
    @NamedQuery(name = "Attribute.findAll", query = "SELECT a FROM Attribute a")})
public class Attribute implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Column(name = "id_employers")
    private Integer idEmployers;
    @Size(max = 100)
    @Column(name = "nameatr")
    private String nameatr;
    @OneToMany(mappedBy = "idAttribute", fetch = FetchType.LAZY)
    private List<Typeofattribute> typeofattributeList;
    @JoinColumn(name = "id_typeofattribute", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Typeofattribute idTypeofattribute;

    public Attribute() {
    }

    public Attribute(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getIdEmployers() {
        return idEmployers;
    }

    public void setIdEmployers(Integer idEmployers) {
        this.idEmployers = idEmployers;
    }

    public String getNameatr() {
        return nameatr;
    }

    public void setNameatr(String nameatr) {
        this.nameatr = nameatr;
    }

    public List<Typeofattribute> getTypeofattributeList() {
        return typeofattributeList;
    }

    public void setTypeofattributeList(List<Typeofattribute> typeofattributeList) {
        this.typeofattributeList = typeofattributeList;
    }

    public Typeofattribute getIdTypeofattribute() {
        return idTypeofattribute;
    }

    public void setIdTypeofattribute(Typeofattribute idTypeofattribute) {
        this.idTypeofattribute = idTypeofattribute;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (id != null ? id.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Attribute)) {
            return false;
        }
        Attribute other = (Attribute) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ru.digitbreak.dataservice.domain.Attribute[ id=" + id + " ]";
    }
    
}
