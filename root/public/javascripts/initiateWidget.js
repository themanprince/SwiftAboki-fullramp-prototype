export default function initiateWidget(infoToPass/*object literal.. gon contain eth addr..must*/) {
	return function passProvider(provider) {
			switch(provider) {
				case "transak":
					 let transak = new TransakSDK.default(infoToPass);
				
				    transak.init();
					
				    // To get all the events
				    transak.on(transak.ALL_EVENTS, (data) => {
				      console.log(data);
				    });
				
				    // This will trigger when the user closed the widget
				    transak.on(transak.EVENTS.TRANSAK_WIDGET_CLOSE, (orderData) => {
				      transak.close();
				    });
				
				    // This will trigger when the user marks payment is made
				    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
				      console.log(orderData);
				      transak.close();
				    });
					break;
				default:
					throw new Error("no handler for this provider abeg");
			}
	
	}
}