package org.example.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoGalleryImageSet;

@HippoEssentialsGenerated(internalName = "myproject:globalElementsHeader")
@Node(jcrType = "myproject:globalElementsHeader")
public class GlobalElementsHeader extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "myproject:logo")
    public HippoGalleryImageSet getLogo() {
        return getLinkedBean("myproject:logo", HippoGalleryImageSet.class);
    }
}
