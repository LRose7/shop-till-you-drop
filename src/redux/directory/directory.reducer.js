const INITIAL_STATE = {
    sections: [
        {
            title: 'hats',
            imageUrl: 'https://imgmedia.lbb.in/media/2020/06/5ee7553e0109343fcf9fc434_1592218942861.jpg',
            size: 'small',
            id: 1,
            linkUrl: 'shop/hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://www.prodirectrunning.com/ProductImages/Main/149043.jpg',
            size: 'small',
            id: 2,
            linkUrl: 'shop/jackets'
        },
        {
            title: 'sneakers',
            imageUrl: 'http://tripleclickspromotions.weebly.com/uploads/3/2/2/5/32257861/s318984304944939200_p8_i2_w640.jpeg',
            size: 'small',
            id: 3,
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'womens',
            imageUrl: 'https://images.hdqwalls.com/wallpapers/urban-women-model-town-sitting-47.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://observer.com/wp-content/uploads/sites/2/2015/01/bfa_11194_1364964.jpg?quality=80&strip',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens'
        }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;