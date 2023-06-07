package org.example.targeting;

import org.apache.wicket.Component;
import org.apache.wicket.markup.head.IHeaderResponse;
import org.apache.wicket.markup.head.JavaScriptHeaderItem;
import org.apache.wicket.request.resource.JavaScriptResourceReference;
import org.hippoecm.frontend.plugin.IPluginContext;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.wicketstuff.js.ext.util.ExtClass;

import com.onehippo.cms7.targeting.frontend.BaseVisitorDetailsPanel;

@ExtClass("Example.VisitorDetailsPanel")
public class VisitorDetailsPanel extends BaseVisitorDetailsPanel {

    private static final JavaScriptResourceReference VISITORDETAILSPANEL_JS =
            new JavaScriptResourceReference(VisitorDetailsPanel.class, "VisitorDetailsPanel.js");

    public VisitorDetailsPanel(IPluginContext context, IPluginConfig config) {
        super(context, config);
    }

    @Override
    public void renderHead(Component component, IHeaderResponse response) {
        super.renderHead(component, response);
        response.render(JavaScriptHeaderItem.forReference(VISITORDETAILSPANEL_JS));
    }

}
