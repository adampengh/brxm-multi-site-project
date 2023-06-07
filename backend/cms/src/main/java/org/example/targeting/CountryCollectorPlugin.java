package org.example.targeting;

import com.onehippo.cms7.targeting.frontend.plugin.CollectorPlugin;

import org.apache.wicket.request.resource.JavaScriptResourceReference;
import org.apache.wicket.Component;
import org.apache.wicket.markup.head.JavaScriptHeaderItem;
import org.apache.wicket.markup.head.IHeaderResponse;
import org.hippoecm.frontend.plugin.IPluginContext;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.json.JSONException;
import org.json.JSONObject;
import org.wicketstuff.js.ext.util.ExtClass;

/**
 * Plugin for the Country Collector. Available plugin properties: <ul> <li>countries: list of Strings that each specify a
 * country to show as an option in the editor. The format of each country string is "country".</li> </ul>
 */

@ExtClass("Hippo.Targeting.CountryCollectorPlugin")
public class CountryCollectorPlugin extends CollectorPlugin {

    private static final JavaScriptResourceReference DOCTYPE_JS =
            new JavaScriptResourceReference(CountryCollectorPlugin.class,
                                            "CountryCollectorPlugin.js");

    public CountryCollectorPlugin(final IPluginContext context, final IPluginConfig config) {
        super(context, config);
    }

    @Override
    protected void onRenderProperties(final JSONObject properties) throws JSONException {
        super.onRenderProperties(properties);
    }

    @Override
    public void renderHead(final Component component, IHeaderResponse response) {
        super.renderHead(component, response);
        response.render(JavaScriptHeaderItem.forReference(DOCTYPE_JS));
    }

}
