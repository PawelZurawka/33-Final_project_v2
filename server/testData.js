const Product = require('./models/product.model');

const loadTestData = async () => {
  const data = [
    {
      id: '0',
      name: 'Waterproof Jacket',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 599.9',
      image: '../client/src/images/waterproof_jacket.jpg'
    },
    {
      id: '1',
      name: 'Boots',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 329.9',
      image: '../client/src/images/boots.jpg'
    },
    {
      id: '2',
      name: 'Down Jacket',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 399.9',
      image: '../client/src/images/down_jacket.jpg'
    },
    {
      id: '3',
      name: 'Softshell Jacket',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 259.9',
      image: '../client/src/images/softshell_jacket.jpg'
    },
    {
      id: '4',
      name: 'Climbing Shoes',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 199.9',
      image: '../client/src/images/climbing_shoes.jpg'
    },
    {
      id: '5',
      name: 'Backpack',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 299.9',
      image: '../client/src/images/backpack.jpg'
    },
    {
      id: '6',
      name: 'Sandals',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 59.9',
      image: '../client/src/images/sandals.jpg'
    },
    {
      id: '7',
      name: 'T-shirt',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 39.9',
      image: '../client/src//images/t-shirt.jpg'
    },
    {
      id: '8',
      name: 'Stove',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 59.9',
      image: '../client/src/images/stove.jpg'
    },
    {
      id: '9',
      name: 'Socks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 29.9',
      image: '../client/src/images/socks.jpg'
    },
    {
      id: '10',
      name: 'Headlamp',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 259.9',
      image: '../client/src/images/headlamp.jpg'
    },
    {
      id: '11',
      name: 'Sleeping Bag',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 259.9',
      image: '../client/src/images/sleeping_bag.jpg'
    },
    {
      id: '12',
      name: 'Sport Watch',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 1099.9',
      image: '../client/src/images/sport_watch.jpg'
    },
    {
      id: '13',
      name: 'Compass',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 79.9',
      image: '../client/src/images/compass'
    },
    {
      id: '14',
      name: 'Trekking Poles',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 109.9',
      image: '../client/src/images/trekking_poles.jpg'
    },
    {
      id: '15',
      name: 'Harness',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 149.9',
      image: '../client/src/images/harness.jpg'
    },
    {
      id: '16',
      name: 'Crampons',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et nibh sit amet ipsum mollis condimentum.',
      price: '$ 149.9',
      image: '../client/src/images/crampons.jpg'
    }
  ];

  try {
    await Product.create(data);
    console.log('Test data has been successfully loaded');
  } catch (err) {
    console.log("Couldn't load test data", err);
  }
};

module.exports = loadTestData;
