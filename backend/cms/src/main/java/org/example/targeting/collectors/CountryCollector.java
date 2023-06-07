package org.example.targeting.collectors;

import com.onehippo.cms7.targeting.collectors.AbstractCollector;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletRequest;

public class CountryCollector extends AbstractCollector<CountryTargetingData, CountryRequestData> {

    private static Logger log = LoggerFactory.getLogger(CountryCollector.class);

    public CountryCollector(String id) {
        super(id);
    }

    @Override
    public CountryRequestData getTargetingRequestData(HttpServletRequest httpServletRequest, boolean newVisitor, boolean newVisit, CountryTargetingData previousData) {
        CountryRequestData countryRequestData = null;
        String country = httpServletRequest.getHeader("countryCode");
        if (country == null || country.trim().isEmpty()) {
            country = "US";
        }
        log.debug("User Country: {}", country);

        if (previousData == null || newVisitor || newVisit) {
            countryRequestData = new CountryRequestData();

            countryRequestData.setCountry(country);
        }

        return countryRequestData;
    }


    @Override
    public CountryTargetingData updateTargetingData(CountryTargetingData countryTargetingData, CountryRequestData countryRequestData) throws IllegalArgumentException {

        if (countryTargetingData == null) {
            countryTargetingData = new CountryTargetingData(getId());
        }

        countryTargetingData.setCountry(countryRequestData.getCountry());

        return countryTargetingData;
    }
}
