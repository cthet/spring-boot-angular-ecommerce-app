package com.ecommerce.springbootecommerce.web.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ApparelsDTO {

    @JsonProperty("gender")
    String gender;

    @JsonProperty("apparel")
    List<ApparelDTO> apparel;

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public List<ApparelDTO> getApparels() {
        return apparel;
    }

    public void setApparels(List<ApparelDTO> apparel) {
        this.apparel = apparels;
    }

    public ApparelsDTO() {
    }
}
