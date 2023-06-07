package org.example.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;

@HippoEssentialsGenerated(internalName = "myproject:slickSliderSettingsCompound")
@Node(jcrType = "myproject:slickSliderSettingsCompound")
public class SlickSliderSettingsCompound extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "myproject:arrows")
    public Boolean getArrows() {
        return getSingleProperty("myproject:arrows");
    }

    @HippoEssentialsGenerated(internalName = "myproject:autoplay")
    public Boolean getAutoplay() {
        return getSingleProperty("myproject:autoplay");
    }

    @HippoEssentialsGenerated(internalName = "myproject:autoplaySpeed")
    public Long getAutoplaySpeed() {
        return getSingleProperty("myproject:autoplaySpeed");
    }

    @HippoEssentialsGenerated(internalName = "myproject:dots")
    public Boolean getDots() {
        return getSingleProperty("myproject:dots");
    }

    @HippoEssentialsGenerated(internalName = "myproject:dotsStyle")
    public String getDotsStyle() {
        return getSingleProperty("myproject:dotsStyle");
    }

    @HippoEssentialsGenerated(internalName = "myproject:fade")
    public Boolean getFade() {
        return getSingleProperty("myproject:fade");
    }

    @HippoEssentialsGenerated(internalName = "myproject:infinite")
    public Boolean getInfinite() {
        return getSingleProperty("myproject:infinite");
    }

    @HippoEssentialsGenerated(internalName = "myproject:pauseOnDotsHover")
    public Boolean getPauseOnDotsHover() {
        return getSingleProperty("myproject:pauseOnDotsHover");
    }

    @HippoEssentialsGenerated(internalName = "myproject:pauseOnFocus")
    public Boolean getPauseOnFocus() {
        return getSingleProperty("myproject:pauseOnFocus");
    }

    @HippoEssentialsGenerated(internalName = "myproject:pauseOnHover")
    public Boolean getPauseOnHover() {
        return getSingleProperty("myproject:pauseOnHover");
    }

    @HippoEssentialsGenerated(internalName = "myproject:rows")
    public Long getRows() {
        return getSingleProperty("myproject:rows");
    }

    @HippoEssentialsGenerated(internalName = "myproject:slidesPerRow")
    public Long getSlidesPerRow() {
        return getSingleProperty("myproject:slidesPerRow");
    }

    @HippoEssentialsGenerated(internalName = "myproject:slidesToScroll")
    public Long getSlidesToScroll() {
        return getSingleProperty("myproject:slidesToScroll");
    }

    @HippoEssentialsGenerated(internalName = "myproject:vertical")
    public Boolean getVertical() {
        return getSingleProperty("myproject:vertical");
    }

    @HippoEssentialsGenerated(internalName = "myproject:speed")
    public Long getSpeed() {
        return getSingleProperty("myproject:speed");
    }

    @HippoEssentialsGenerated(internalName = "myproject:slidesToShow")
    public Long getSlidesToShow() {
        return getSingleProperty("myproject:slidesToShow");
    }
}
