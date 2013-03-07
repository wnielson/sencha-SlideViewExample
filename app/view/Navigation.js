Ext.define('SVE.view.Navigation', {
    extend: 'Ext.navigation.View',
    
    config: {
        navigationBar: {
            ui: 'fb-light',
            items: [{
                xtype:   'button',
                iconCls: 'list',
                iconMask: true,
                name:    'slidebutton-left',
                align:   'left',
                handler: function(button) {
                    console.log(button.up('slideview'));
                }
            },{
                xtype:   'button',
                align:   'right',
                iconCls: 'list',
                iconMask: true,
                name:    'slidebutton-right',
                handler: function(button) {
                    console.log(button.up('slideview'));
                }
            }]
        },

        items: [{
            title: 'Navigation View',
            items: [{
                xtype: 'button',
                text: 'Push a new view!',
                centered: true,
                height: 20,
                width: 150,
                handler: function(button) {
                    button.up('navigationview').push({
                        title: 'Second',
                        html: 'Second view!'
                    });
                }
            }]
        }],

        listeners: {
            back: function(nav) {
                if (nav.getInnerItems().length == 2) {
                    bar = nav.getNavigationBar();
                    bar.down('button[name="slidebutton-left"]').show({
                        type: 'fade',
                        out: false,
                        duration: bar.getAnimation().duration
                    });

                    bar.down('button[name="slidebutton-right"]').show({
                        type: 'fade',
                        out: false,
                        duration: bar.getAnimation().duration
                    });
                }
            },

            push: function(nav) {
                var bar = nav.getNavigationBar();
                bar.down('button[name="slidebutton-left"]').hide({
                    type: 'fade',
                    out: true,
                    duration: bar.getAnimation().duration
                });
                
                bar.down('button[name="slidebutton-right"]').hide({
                    type: 'fade',
                    out: true,
                    duration: bar.getAnimation().duration
                });
            }
        }
    }
});