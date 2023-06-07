package org.example.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoGalleryImageSet;

@HippoEssentialsGenerated(internalName = "myproject:PageMetadata")
@Node(jcrType = "myproject:PageMetadata")
public class PageMetadata extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "myproject:pageTitle")
    public String getPageTitle() {
        return getSingleProperty("myproject:pageTitle");
    }

    @HippoEssentialsGenerated(internalName = "myproject:metaDescription")
    public String getMetaDescription() {
        return getSingleProperty("myproject:metaDescription");
    }

    @HippoEssentialsGenerated(internalName = "myproject:metaKeywords")
    public String[] getMetaKeywords() {
        return getMultipleProperty("myproject:metaKeywords");
    }

    @HippoEssentialsGenerated(internalName = "myproject:ogTitle")
    public String getOgTitle() {
        return getSingleProperty("myproject:ogTitle");
    }

    @HippoEssentialsGenerated(internalName = "myproject:ogDescription")
    public String getOgDescription() {
        return getSingleProperty("myproject:ogDescription");
    }

    @HippoEssentialsGenerated(internalName = "myproject:canonicalUrl")
    public String getCanonicalUrl() {
        return getSingleProperty("myproject:canonicalUrl");
    }

    @HippoEssentialsGenerated(internalName = "myproject:ogUrl")
    public String getOgUrl() {
        return getSingleProperty("myproject:ogUrl");
    }

    @HippoEssentialsGenerated(internalName = "myproject:ogType")
    public String getOgType() {
        return getSingleProperty("myproject:ogType");
    }

    @HippoEssentialsGenerated(internalName = "myproject:ogImage")
    public HippoGalleryImageSet getOgImage() {
        return getLinkedBean("myproject:ogImage", HippoGalleryImageSet.class);
    }
}
