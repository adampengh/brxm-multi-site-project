package org.example.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.example.beans.GlobalElementsHeader;
import org.example.beans.GlobalElementsFooter;

@HippoEssentialsGenerated(internalName = "myproject:globalElements")
@Node(jcrType = "myproject:globalElements")
public class GlobalElements extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "myproject:globalElementsHeader")
    public GlobalElementsHeader getGlobalElementsHeader() {
        return getBean("myproject:globalElementsHeader",
                GlobalElementsHeader.class);
    }

    @HippoEssentialsGenerated(internalName = "myproject:globalElementsFooter")
    public GlobalElementsFooter getGlobalElementsFooter() {
        return getBean("myproject:globalElementsFooter",
                GlobalElementsFooter.class);
    }
}
