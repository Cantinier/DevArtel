/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.domain;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Size;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 *
 * @author oleg
 */
@Entity
@Table(name = "tender")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Tender extends AbstractEntity<Tender>{

    private static final long serialVersionUID = 1L;
   
    @Size(max = 30)
    @Column(name = "nomertender")
    private String nomertender;
    @Size(max = 10)
    @Column(name = "datarun")
    private String datarun;
    @Size(max = 10)
    @Column(name = "dataend")
    private String dataend;
  
    @Column(name = "id_user")
    private Long idUser;
    


    public String getNomertender() {
        return nomertender;
    }

    public void setNomertender(String nomertender) {
        this.nomertender = nomertender;
    }

    public String getDatarun() {
        return datarun;
    }

    public void setDatarun(String datarun) {
        this.datarun = datarun;
    }

    public String getDataend() {
        return dataend;
    }

    public void setDataend(String dataend) {
        this.dataend = dataend;
    }

    public Long getIdUser() {
        return idUser;
    }

    public void setIdUser(Long idUser) {
        this.idUser = idUser;
    }

  
   
}
