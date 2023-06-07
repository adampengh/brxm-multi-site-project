/**
 * Copyright 2011-2013 Hippo B.V. (http://www.onehippo.com)
 */
 'use strict';

 Ext.namespace('Hippo.Targeting');

 Hippo.Targeting.CountryCollectorPlugin = Ext.extend(Hippo.Targeting.CollectorPlugin, {
     constructor: function (config) {
         var editor;

         editor = {
             collector: config.collector,
             resources: config.resources,
             xtype: 'Hippo.Targeting.CountryTargetingDataEditor'
         };

         Ext.apply(config, {
             editor: editor,
             renderer: this.render
         });

         Hippo.Targeting.CountryCollectorPlugin.superclass.constructor.call(this, config);
     },

     render: function (value) {
         if (Ext.isDefined(value)) {
             if (Ext.isDefined(value.country))
                 return value.country;
         }
         else
             return this.resources['no-country'];
     }
 });


 Hippo.Targeting.CountryTargetingDataEditor = Ext.extend(Ext.form.TextField, {
     constructor: function (config) {
         Hippo.Targeting.CountryTargetingDataEditor.superclass.constructor.call(this, config);
     },

     getValue: function () {
         var data = Hippo.Targeting.CountryTargetingDataEditor.superclass.getValue.call(this);

         return {
             collectorId: this.collector,
             country: data
         };
     },

     setValue: function (data) {
         if (data != null) {
             Hippo.Targeting.CountryTargetingDataEditor.superclass.setValue.call(this, data.country);
         }
     }
 });

 Ext.reg('Hippo.Targeting.CountryTargetingDataEditor', Hippo.Targeting.CountryTargetingDataEditor);
