/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ru.digitbreak.library.entity;

import javax.persistence.Column;

/**
 *
 * @author oleg
 */
public class Employers extends GenericAbstractEntity<Employers> {

    private String inn;

    private String kpp;

    private String ogrn;

    private String datareg;

    private Boolean isurlic;

    private String employname;

    private String description;

    public String getInn() {
        return inn;
    }

    public void setInn(String inn) {
        this.inn = inn;
    }

    public String getKpp() {
        return kpp;
    }

    public void setKpp(String kpp) {
        this.kpp = kpp;
    }

    public String getOgrn() {
        return ogrn;
    }

    public void setOgrn(String ogrn) {
        this.ogrn = ogrn;
    }

    public String getDatareg() {
        return datareg;
    }

    public void setDatareg(String datareg) {
        this.datareg = datareg;
    }

    public Boolean getIsurlic() {
        return isurlic;
    }

    public void setIsurlic(Boolean isurlic) {
        this.isurlic = isurlic;
    }

    public String getEmployname() {
        return employname;
    }

    public void setEmployname(String employname) {
        this.employname = employname;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
