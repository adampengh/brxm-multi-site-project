package org.example.components.info;

import org.hippoecm.hst.core.parameters.Parameter;
import org.onehippo.cms7.essentials.components.info.EssentialsCarouselComponentInfo;

public interface CarouselComponentInfo extends EssentialsCarouselComponentInfo {
    @Parameter(name = "newProperty", defaultValue = "", displayName = "New Property")
    int getNewProperty();
}
