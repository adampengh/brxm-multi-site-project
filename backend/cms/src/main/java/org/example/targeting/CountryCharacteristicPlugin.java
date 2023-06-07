package org.example.targeting;

import com.onehippo.cms7.targeting.frontend.plugin.CharacteristicPlugin;

import org.apache.wicket.request.resource.JavaScriptResourceReference;
import org.apache.wicket.Component;
import org.apache.wicket.markup.head.JavaScriptHeaderItem;
import org.apache.wicket.markup.head.IHeaderResponse;
import org.apache.wicket.request.resource.PackageResourceReference;
import org.apache.wicket.request.resource.ResourceReference;
import org.hippoecm.frontend.plugin.IPluginContext;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.wicketstuff.js.ext.util.ExtClass;

@ExtClass("Hippo.Targeting.CountryCharacteristicPlugin")
public class CountryCharacteristicPlugin extends CharacteristicPlugin {

    private static final JavaScriptResourceReference DOCTYPE_JS =
        new JavaScriptResourceReference(CountryCharacteristicPlugin.class, "CountryCharacteristicPlugin.js");

    public CountryCharacteristicPlugin(final IPluginContext context, final IPluginConfig config) {
        super(context, config);
    }

    @Override
    protected ResourceReference getIcon() {
        return new PackageResourceReference(CountryCharacteristicPlugin.class, "location_on_icon.svg");
    }

    @Override
    public void renderHead(final Component component, IHeaderResponse response) {
        super.renderHead(component, response);
        response.render(JavaScriptHeaderItem.forReference(DOCTYPE_JS));
    }

}
