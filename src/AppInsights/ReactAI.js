import {AppInsights} from "applicationinsights-js"
import AppInsightsUsage from "appinsights-usage"


export const ReactAI = {
    init: function(appInsightsOptions, history){
        AppInsights.downloadAndSetup(appInsightsOptions);
        AppInsightsUsage.init(appInsightsOptions);
        
        if(history){
            history.listen(location => {
                AppInsights.trackPageView();
            });
        }
       
        this.setAppContext({urlReferrer:document.referrer});
    },

    ai(){
        return AppInsights;
    },

    trackRouterChange(){
        AppInsights.trackPageView();
    },

    setAppContext: function(properties){
        appInsights.queue.push(function () {
            appInsights.context.addTelemetryInitializer(function (envelope) {
                var telemetryItem = envelope.data.baseData;

                // To set custom properties:
                telemetryItem.properties = telemetryItem.properties || {};
                for (var key in properties) {
                    telemetryItem.properties[key] = properties[key];
                }
                
            })
        });
    }
}