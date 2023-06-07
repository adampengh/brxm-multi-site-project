/*
 * Copyright 2012-2013 Hippo B.V. (http://www.onehippo.com)
 */

"use strict";

Ext.namespace('Hippo.Targeting');

Hippo.Targeting.CountryCharacteristicPlugin = Ext.extend(Hippo.Targeting.CharacteristicPlugin, {
    constructor: function (config) {
        Hippo.Targeting.CountryCharacteristicPlugin.superclass.constructor.call(this, Ext.apply(config, {
            visitorCharacteristic: {
                xtype: 'Hippo.Targeting.CountryCharacteristic'
            }
        }));
    }
});


Hippo.Targeting.CountryCharacteristic = Ext.extend(Hippo.Targeting.VisitorCharacteristic, {
    constructor: function(config) {
        Hippo.Targeting.CountryCharacteristic.superclass.constructor.call(this, config);
    },

    isCollected: function(targetingData) {
        if (targetingData.country) {
            return true;
        }
        return false;
    },

    getTargetGroupName: function(targetingData) {
        var country = targetingData.country;
        return country;
    },

    getTargetGroupProperties: function(targetingData) {
        var country = targetingData.country;
        return [
            {
                name: country,
                value: ""
            }
        ];
    }
});

Ext.reg('Hippo.Targeting.CountryCharacteristic', Hippo.Targeting.CountryCharacteristic);
