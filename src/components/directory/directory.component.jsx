import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
            {
                title: 'hats',
                imageUrl: 'https://imgmedia.lbb.in/media/2020/06/5ee7553e0109343fcf9fc434_1592218942861.jpg',
                size: 'small',
                id: 1
            },
            {
                title: 'jackets',
                imageUrl: 'https://www.prodirectrunning.com/ProductImages/Main/149043.jpg',
                size: 'small',
                id: 2
            },
            {
                title: 'sneakers',
                imageUrl: 'http://tripleclickspromotions.weebly.com/uploads/3/2/2/5/32257861/s318984304944939200_p8_i2_w640.jpeg',
                size: 'small',
                id: 3
            },
            {
                title: 'womens',
                imageUrl: 'https://www.prodirectselect.com/productimages/V3_1_Gallery_4/V3_1_Gallery_4_0319797.jpg',
                size: 'large',
                id: 4
            },
            {
                title: 'mens',
                imageUrl: 'https://nextluxury.com/wp-content/uploads/mens-fashion-urban-style.jpg',
                size: 'large',
                id: 5
            }]
        }
    }

    render () {
        return (
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        )
    }
}

export default Directory;