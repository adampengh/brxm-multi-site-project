package org.example.targeting.scoring;

import org.example.targeting.collectors.CountryTargetingData;
import com.onehippo.cms7.targeting.Scorer;
import com.onehippo.cms7.targeting.model.TargetGroup;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Map;

public class CountryScorer implements Scorer<CountryTargetingData> {

    private static Logger log = LoggerFactory.getLogger(CountryScorer.class);
    private Map<String, TargetGroup> targetGroups;

    @Override
    public void init(Map<String, TargetGroup> targetGroups) {
        this.targetGroups = targetGroups;
    }

    @Override
    public double evaluate(String targetGroupId, CountryTargetingData countryTargetingData) {

        if (countryTargetingData == null) {
            return 0.0;
        } else if (!this.targetGroups.containsKey(targetGroupId)) {
            return 0.0;
        } else {
            TargetGroup targetGroup = this.targetGroups.get(targetGroupId);
            for(String country : targetGroup.getProperties().keySet()) {
                if (country.equalsIgnoreCase(countryTargetingData.getCountry())) {
                    return 1.0;
                }
            }
            return 0.0;
        }

    }
}
