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
@Table(name = "typeofattribute")
@NamedQueries({
    @NamedQuery(name = "Typeofattribute.findAll", query = "SELECT t FROM Typeofattribute t")})
public class Typeofattribute implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id")
    private Integer id;
    @Size(max = 20)
    @Column(name = "name")
    private String name;
    @Size(max = 150)
    @Column(name = "datatype")
    private String datatype;
    @JoinColumn(name = "id_attribute", referencedColumnName = "id")
    @ManyToOne(fetch = FetchType.LAZY)
    private Attribute idAttribute;
    @OneToMany(mappedBy = "idTypeofattribute", fetch = FetchType.LAZY)
    private List<Attribute> attributeList;

    public Typeofattribute() {
    }

    public Typeofattribute(Integer id) {
        this.id = id;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDatatype() {
        return datatype;
    }

    public void setDatatype(String datatype) {
        this.datatype = datatype;
    }

    public Attribute getIdAttribute() {
        return idAttribute;
    }

    public void setIdAttribute(Attribute idAttribute) {
        this.idAttribute = idAttribute;
    }

    public List<Attribute> getAttributeList() {
        return attributeList;
    }

    public void setAttributeList(List<Attribute> attributeList) {
        this.attributeList = attributeList;
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
        if (!(object instanceof Typeofattribute)) {
            return false;
        }
        Typeofattribute other = (Typeofattribute) object;
        if ((this.id == null && other.id != null) || (this.id != null && !this.id.equals(other.id))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "ru.digitbreak.dataservice.domain.Typeofattribute[ id=" + id + " ]";
    }
    
}
