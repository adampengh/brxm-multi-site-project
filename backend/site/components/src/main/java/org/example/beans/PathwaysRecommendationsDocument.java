package org.example.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.example.beans.SlickSliderSettingsCompound;
import java.util.List;
import org.example.beans.SlickSliderResponsiveSettingsCompound;

@HippoEssentialsGenerated(internalName = "myproject:PathwaysRecommendationsDocument")
@Node(jcrType = "myproject:PathwaysRecommendationsDocument")
public class PathwaysRecommendationsDocument extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "myproject:title")
    public String getTitle() {
        return getSingleProperty("myproject:title");
    }

    @HippoEssentialsGenerated(internalName = "myproject:widgetId")
    public String getWidgetId() {
        return getSingleProperty("myproject:widgetId");
    }

    @HippoEssentialsGenerated(internalName = "myproject:widgetType")
    public String getWidgetType() {
        return getSingleProperty("myproject:widgetType");
    }

    @HippoEssentialsGenerated(internalName = "myproject:settings")
    public SlickSliderSettingsCompound getSettings() {
        return getBean("myproject:settings", SlickSliderSettingsCompound.class);
    }

    @HippoEssentialsGenerated(internalName = "myproject:responsive")
    public List<SlickSliderResponsiveSettingsCompound> getResponsive() {
        return getChildBeansByName("myproject:responsive",
                SlickSliderResponsiveSettingsCompound.class);
    }
}
