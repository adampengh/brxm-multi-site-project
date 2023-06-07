package org.example.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.example.beans.ImageCompound;

@HippoEssentialsGenerated(internalName = "myproject:CategoryPageInGridBannerCompound")
@Node(jcrType = "myproject:CategoryPageInGridBannerCompound")
public class CategoryPageInGridBannerCompound extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "myproject:mobilePosition")
    public Long getMobilePosition() {
        return getSingleProperty("myproject:mobilePosition");
    }

    @HippoEssentialsGenerated(internalName = "myproject:desktopPosition")
    public Long getDesktopPosition() {
        return getSingleProperty("myproject:desktopPosition");
    }

    @HippoEssentialsGenerated(internalName = "myproject:html")
    public String getHtml() {
        return getSingleProperty("myproject:html");
    }

    @HippoEssentialsGenerated(internalName = "myproject:href")
    public String getHref() {
        return getSingleProperty("myproject:href");
    }

    @HippoEssentialsGenerated(internalName = "myproject:image")
    public ImageCompound getImage() {
        return getBean("myproject:image", ImageCompound.class);
    }
}
