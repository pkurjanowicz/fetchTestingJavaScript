const apiKey = ''

// working GET API call
fetch('https://api.eflow.team/v1/networks/offers', {
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
        'x-eflow-api-key': apiKey,
    }
})
    .then(response => response.json())
    .then(data => {
        // Here's a list of repos!
        console.log(data)
    });


// working POST API call
let content = {"query": {
		"filters": [],
		"metric_filters": [],
		"settings": {
			"ignore_fail_traffic": false
		}
	},
	"columns": [{
		"label": "Offer",
		"column": "offer",
		"data": "offer.label",
		"category": "Offer",
		"state": "home.offers.view"
	}, {
		"label": "Partner",
		"column": "affiliate",
		"data": "affiliate.label",
		"category": "Account",
		"state": "home.affiliates.view.details"
	}, {
		"label": "Offer Status",
		"column": "offer_status",
		"data": "offer_status.label",
		"category": "Offer"
	}],
	"from": "2019-08-27",
	"to": "2019-08-27",
	"timezone_id": 67,
	"currency_id": "USD",
	"autoRun": "true",
	"time_interval": ""
};

// The actual fetch request
fetch('https://api.eflow.team/v1/networks/reporting/entity', {
    method: 'post',
    headers: {
        'Content-Type': 'application/json',
        'x-eflow-api-key': apiKey,
    },
    body: JSON.stringify(content)
})
    .then(response => response.json())
    .then(data => {
        // Here's a list of repos!
        console.log(data)
    });

