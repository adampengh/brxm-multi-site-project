package org.example.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoGalleryImageSet;

@HippoEssentialsGenerated(internalName = "myproject:imageCompound")
@Node(jcrType = "myproject:imageCompound")
public class ImageCompound extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "myproject:altText")
    public String getAltText() {
        return getSingleProperty("myproject:altText");
    }

    @HippoEssentialsGenerated(internalName = "myproject:unsplash")
    public String getUnsplash() {
        return getSingleProperty("myproject:unsplash");
    }

    @HippoEssentialsGenerated(internalName = "myproject:mobileImage")
    public HippoGalleryImageSet getMobileImage() {
        return getLinkedBean("myproject:mobileImage",
                HippoGalleryImageSet.class);
    }

    @HippoEssentialsGenerated(internalName = "myproject:desktopImage")
    public HippoGalleryImageSet getDesktopImage() {
        return getLinkedBean("myproject:desktopImage",
                HippoGalleryImageSet.class);
    }

    @HippoEssentialsGenerated(internalName = "myproject:tabletImage")
    public HippoGalleryImageSet getTabletImage() {
        return getLinkedBean("myproject:tabletImage",
                HippoGalleryImageSet.class);
    }
}
