package org.example.components;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.example.components.info.MenuItemBannersInfo;

import org.apache.commons.lang.StringUtils;
import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.HstQueryResult;
import org.hippoecm.hst.content.beans.query.builder.Constraint;
import org.hippoecm.hst.content.beans.query.builder.ConstraintBuilder;
import org.hippoecm.hst.content.beans.query.builder.HstQueryBuilder;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoBeanIterator;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.hst.core.sitemenu.HstSiteMenuItem;
import org.onehippo.cms7.essentials.components.EssentialsMenuComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@ParametersInfo(type = MenuItemBannersInfo.class)
public class MenuItemBanners extends EssentialsMenuComponent {
    private static Logger log = LoggerFactory.getLogger(MenuItemBanners.class);

    private static final String DOCUMENT_TYPE = "myproject:navigationBanner";
    private static final String PARAMETER_NAME = "Banner Name";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        HstRequestContext requestContext = request.getRequestContext();
        HippoBean scope = requestContext.getSiteContentBaseBean();
        Map<String, HippoBean> menuItemBanners = new HashMap<>();

        // Get the top level menu items
        List<HstSiteMenuItem> menuItems = requestContext.getHstSiteMenus().getSiteMenu("main").getSiteMenuItems();
        for (HstSiteMenuItem menuItem : menuItems) {
            // Get the banner document name
            String bannerName = menuItem.getParameter(PARAMETER_NAME);
            if (StringUtils.isNotEmpty(bannerName)) {
                HippoBean bean = executeQuery(bannerName, scope);
                if (bean != null) {
                    menuItemBanners.put(bannerName, bean);
                }
            }
        }

        // Add the banners to the Page Model API response
        request.setModel("MenuItemBanners", menuItemBanners);
    }


    private HippoBean executeQuery(final String bannerName, final HippoBean scope) {
        Constraint constraint = ConstraintBuilder.constraint(".").contains(bannerName);
        HstQuery query = HstQueryBuilder.create(scope)
            .ofTypes(DOCUMENT_TYPE)
            .where(constraint)
            .limit(1)
            .build();

        try {
            HstQueryResult result = query.execute();
            HippoBeanIterator resultBeans = result.getHippoBeans();
            if (resultBeans.hasNext()) {
                return resultBeans.nextHippoBean();
            }
        } catch (QueryException e) {
            log.debug("Error running a query for {} in SiteMenu items.", DOCUMENT_TYPE, e);
        }
        return null;
    }
}
