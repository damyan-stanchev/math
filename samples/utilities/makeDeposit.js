const {
	UtilitiesV1,
	advertiserWalletAddress,
	bidderWalletAddress
} = require('../config');

UtilitiesV1.methods.makeDeposit(bidderWalletAddress, 100000).send({
	from: advertiserWalletAddress
}, function(error, transactionId) {
	if (error) {
		console.log('Error', error);
	} else {
		console.log('Transaction successful', transactionId);
	}
});