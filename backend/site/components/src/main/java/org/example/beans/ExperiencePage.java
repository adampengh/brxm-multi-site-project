package org.example.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.example.beans.PageMetadata;

@HippoEssentialsGenerated(internalName = "myproject:ExperiencePage")
@Node(jcrType = "myproject:ExperiencePage")
public class ExperiencePage extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "myproject:categoryId")
    public String getCategoryId() {
        return getSingleProperty("myproject:categoryId");
    }

    @HippoEssentialsGenerated(internalName = "myproject:pageMetadata")
    public PageMetadata getPageMetadata() {
        return getBean("myproject:pageMetadata", PageMetadata.class);
    }
}
