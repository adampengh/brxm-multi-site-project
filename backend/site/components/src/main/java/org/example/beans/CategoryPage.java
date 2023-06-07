package org.example.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.example.beans.PageMetadata;

@HippoEssentialsGenerated(internalName = "myproject:CategoryPage")
@Node(jcrType = "myproject:CategoryPage")
public class CategoryPage extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "myproject:categoryId")
    public String getCategoryId() {
        return getSingleProperty("myproject:categoryId");
    }

    @HippoEssentialsGenerated(internalName = "myproject:pageMetadata")
    public PageMetadata getPageMetadata() {
        return getBean("myproject:pageMetadata", PageMetadata.class);
    }
}
