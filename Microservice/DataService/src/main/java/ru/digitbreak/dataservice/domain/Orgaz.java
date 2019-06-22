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
@Table(name = "orgaz")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Orgaz extends AbstractEntity<Orgaz> {

    private static final long serialVersionUID = 1L;
      
   
    @Size(max = 20)
    @Column(name = "index")
    private String index;
    @Size(max = 300)
    @Column(name = "address")
    private String address;
    @Size(max = 20)
    @Column(name = "dateliquid")
    private String dateLiquid;
    @Size(max = 15)
    @Column(name = "dateogrn")
    private String dateOgrn;
    @Size(max = 150)
    @Column(name = "fio")
    private String fio;
    @Size(max = 100)
    @Column(name = "fullname")
    private String fullName;
    @Size(max = 100)
    @Column(name = "social_facebook")
    private String socialFacebook;
    @Size(max = 100)
    @Column(name = "social_instagram")
    private String socialInstagram;
    @Size(max = 100)
    @Column(name = "social_ok")
    private String socialOk;
    @Size(max = 100)
    @Column(name = "social_twitter")
    private String socialTwitter;
    @Size(max = 100)
    @Column(name = "social_vk")
    private String socialVk;
    @Size(max = 100)
    @Column(name = "social_youtube")
    private String socialYoutube;
    @Size(max = 60)
    @Column(name = "status")
    private String status;

    public Orgaz() {
    }

  

    public String getIndex() {
        return index;
    }

    public void setIndex(String index) {
        this.index = index;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDateLiquid() {
        return dateLiquid;
    }

    public void setDateLiquid(String dateLiquid) {
        this.dateLiquid = dateLiquid;
    }

    public String getDateOgrn() {
        return dateOgrn;
    }

    public void setDateOgrn(String dateOgrn) {
        this.dateOgrn = dateOgrn;
    }

    public String getFio() {
        return fio;
    }

    public void setFio(String fio) {
        this.fio = fio;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getSocialFacebook() {
        return socialFacebook;
    }

    public void setSocialFacebook(String socialFacebook) {
        this.socialFacebook = socialFacebook;
    }

    public String getSocialInstagram() {
        return socialInstagram;
    }

    public void setSocialInstagram(String socialInstagram) {
        this.socialInstagram = socialInstagram;
    }

    public String getSocialOk() {
        return socialOk;
    }

    public void setSocialOk(String socialOk) {
        this.socialOk = socialOk;
    }

    public String getSocialTwitter() {
        return socialTwitter;
    }

    public void setSocialTwitter(String socialTwitter) {
        this.socialTwitter = socialTwitter;
    }

    public String getSocialVk() {
        return socialVk;
    }

    public void setSocialVk(String socialVk) {
        this.socialVk = socialVk;
    }

    public String getSocialYoutube() {
        return socialYoutube;
    }

    public void setSocialYoutube(String socialYoutube) {
        this.socialYoutube = socialYoutube;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

   

    
    
}
