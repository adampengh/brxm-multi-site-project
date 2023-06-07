Ext.namespace('Example');

Example.VisitorDetailsPanel =
        Ext.extend(Hippo.Targeting.BaseVisitorDetailsPanel, {

  constructor: function(config) {
    Ext.apply(config, {
      items: [
        {
          xtype: 'Hippo.Targeting.Journey'
        },
        {
          xtype: 'Hippo.Targeting.Spacer'
        },
        {
          xtype: 'Hippo.Targeting.VisitorDetailsRightColumn',
          items: [
            {
              xtype: 'Hippo.Targeting.MatchingSegments'
            },
            {
              xtype: 'Hippo.Targeting.VisitorDetailsRightColumnPanel',
              title: config.resources['documenttypes-title'],
              height: 250,
              layout: 'fit',
              items: [
                {
                  xtype: 'Hippo.Targeting.TermsFrequencyChart',
                  characteristic: 'documenttypes',
                  noDataText: config.resources['documenttypes-no-data']
                }
              ]
            },
            {
              xtype: 'Hippo.Targeting.VisitorCharacteristics'
            }
          ]
        }
      ]
    });
    Example.VisitorDetailsPanel.superclass.constructor.call(this, config);
  }

});
