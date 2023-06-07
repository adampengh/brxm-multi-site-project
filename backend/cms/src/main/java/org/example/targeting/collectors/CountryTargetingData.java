package org.example.targeting.collectors;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.onehippo.cms7.targeting.data.AbstractTargetingData;
import com.onehippo.cms7.targeting.data.TargetingData;

public class CountryTargetingData extends AbstractTargetingData implements TargetingData {

    String Country;

    @JsonCreator
    public CountryTargetingData(@JsonProperty("collectorId") String collectorId) {
        super(collectorId);
    }

    public String getCountry() {
        return Country;
    }

    public void setCountry(String Country) {
        this.Country = Country;
    }


}
