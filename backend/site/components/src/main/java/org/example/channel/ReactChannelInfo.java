package org.example.channel;

import org.hippoecm.hst.configuration.channel.ChannelInfo;
import org.hippoecm.hst.core.parameters.FieldGroup;
import org.hippoecm.hst.core.parameters.FieldGroupList;
import org.hippoecm.hst.core.parameters.Parameter;

@FieldGroupList({
    @FieldGroup(titleKey = "fields.channel", value = { "org.hippoecm.hst.configuration.channel.PreviewURLChannelInfo_url" })
})
public interface ReactChannelInfo extends ChannelInfo {
    @Parameter(name = "org.hippoecm.hst.configuration.channel.PreviewURLChannelInfo_url", defaultValue = "")
    String getPreviewUrl();
}
