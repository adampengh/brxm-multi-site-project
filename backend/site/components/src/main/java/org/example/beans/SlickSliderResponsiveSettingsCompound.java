package org.example.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.example.beans.SlickSliderSettingsCompound;

@HippoEssentialsGenerated(internalName = "myproject:slickSliderResponsiveSettingsCompound")
@Node(jcrType = "myproject:slickSliderResponsiveSettingsCompound")
public class SlickSliderResponsiveSettingsCompound extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "myproject:breakpoint")
    public Long getBreakpoint() {
        return getSingleProperty("myproject:breakpoint");
    }

    @HippoEssentialsGenerated(internalName = "myproject:settings")
    public SlickSliderSettingsCompound getSettings() {
        return getBean("myproject:settings", SlickSliderSettingsCompound.class);
    }
}
