/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.dataservice.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

/**
 *
 * @author oleg
 */
@Entity
@Table(name = "capital")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Capital extends AbstractEntity<Capital> {

    private static final long serialVersionUID = 1L;

    @Column(name = "inn")
    private String inn;
    @Column(name = "capital")
    private String capital;
    @Column(name = "debt")
    private String debt;

    public Capital() {
    }
   

   

    public String getInn() {
        return inn;
    }

    public void setInn(String inn) {
        this.inn = inn;
    }

    public String getCapital() {
        return capital;
    }

    public void setCapital(String capital) {
        this.capital = capital;
    }

    public String getDebt() {
        return debt;
    }

    public void setDebt(String debt) {
        this.debt = debt;
    }

}
