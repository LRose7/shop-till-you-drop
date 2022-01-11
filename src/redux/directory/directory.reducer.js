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
            imageUrl: 'https://www.prodirectselect.com/productimages/V3_1_Gallery_4/V3_1_Gallery_4_0319797.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens'
        },
        {
            title: 'mens',
            imageUrl: 'https://nextluxury.com/wp-content/uploads/mens-fashion-urban-style.jpg',
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