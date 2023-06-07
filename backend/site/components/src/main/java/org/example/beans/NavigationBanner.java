package org.example.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.example.beans.ImageCompound;

@HippoEssentialsGenerated(internalName = "myproject:navigationBanner")
@Node(jcrType = "myproject:navigationBanner")
public class NavigationBanner extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "myproject:heading")
    public String getHeading() {
        return getSingleProperty("myproject:heading");
    }

    @HippoEssentialsGenerated(internalName = "myproject:image")
    public ImageCompound getImage() {
        return getBean("myproject:image", ImageCompound.class);
    }
}
