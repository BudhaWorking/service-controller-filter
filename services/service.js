app.service('productService',function(){
	

	var Samsung={

		 name: 'galaxy note-8',
		 modelNo: '1SHDBH086',
		 color: 'white',
		 ram: '8GB',
		 storage: '64GB',
		 price: '50000'
	}

	var Samsung1={

		 name: 'galaxy note-7',
		 modelNo: '1SH00T086',
		 color: 'white',
		 ram: '6GB',
		 storage: '32GB',
		 price: '30000'
	}
	var Samsung2={

		 name: 'samsung-pro',
		 modelNo: '112T086',
		 color: 'gray',
		 ram: '2GB',
		 storage: '8GB',
		 price: '14000'
	}
	var Sony={

		 name: 'Xpiria',
		 modelNo: '100DSY06',
		 color: 'blue',
		 ram: '4GB',
		 storage: '16GB',
		 price: '16000'
	}
	var Nokia={

		 name: 'N-8',
		 modelNo: '1S34HT86',
		 color: 'gray',
		 ram: '4GB',
		 storage: '16GB',
		 price: '18000'
	}
	var Nokia1={
		 name: 'N-72',
		 modelNo: '1S3RT90',
		 color: 'gray',
		 ram: '1GB',
		 storage: '16GB',
		 price: '10000'
	}
	var Nokia2={
		 name: 'N-98',
		 modelNo: '1S000T90',
		 color: 'blue',
		 ram: '2GB',
		 storage: '32GB',
		 price: '16000'
	}
	var Lg={

		 name: 'Flex2',
		 modelNo: '1S07DA86',
		 color: 'Red',
		 ram: '6GB',
		 storage: '32GB',
		 price: '20000'
	}
	var Apple={

		 name: 'Iphone5',
		 modelNo: '1S0W546G',
		 color: 'White',
		 ram: '6GB',
		 storage: '32GB',
		 price: '30000'
	}
		var Apple1={

		 name: 'Iphone6',
		 modelNo: '1S0W546G',
		 color: 'White',
		 ram: '6GB',
		 storage: '32GB',
		 price: '40000'
	}
		var Apple2={

		 name: 'Iphone7',
		 modelNo: '1S0W546G',
		 color: 'White',
		 ram: '6GB',
		 storage: '32GB',
		 price: '50000'
	}

	var productInfo=[Samsung,Samsung1,Samsung2,Sony,Nokia,Nokia1,Nokia2,Lg,Apple,Apple1,Apple2];

	this.productDetails=function(){
		return productInfo;
	}
})