package org.example.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.example.beans.ImageCompound;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "myproject:HeroDocument")
@Node(jcrType = "myproject:HeroDocument")
public class HeroDocument extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "myproject:horizontalPosition")
    public String getHorizontalPosition() {
        return getSingleProperty("myproject:horizontalPosition");
    }

    @HippoEssentialsGenerated(internalName = "myproject:verticalPosition")
    public String getVerticalPosition() {
        return getSingleProperty("myproject:verticalPosition");
    }

    @HippoEssentialsGenerated(internalName = "myproject:fullHeightTextBox")
    public Boolean getFullHeightTextBox() {
        return getSingleProperty("myproject:fullHeightTextBox");
    }

    @HippoEssentialsGenerated(internalName = "myproject:image")
    public ImageCompound getImage() {
        return getBean("myproject:image", ImageCompound.class);
    }

    @HippoEssentialsGenerated(internalName = "myproject:html")
    public HippoHtml getHtml() {
        return getHippoHtml("myproject:html");
    }
}
