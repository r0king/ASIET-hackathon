import React, { Component } from 'react'
import "./animation.css"

export default class Animation extends Component {
    constructor(props) {
        super(props);
        this.element = React.createRef();

    }
    componentDidMount() {
        setTimeout(() => {
            this.element.current.style.opacity = 0
        }, 2000);
    }
    render() {
        return (
            <div className='bg-white' id='overlay' ref={this.element}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus ipsa tempore nesciunt culpa eos praesentium atque adipisci, odio quaerat sunt, impedit soluta non dolorem harum! Possimus nihil quas eligendi eveniet.
                A autem reiciendis consequatur voluptatum maiores inventore laboriosam, nostrum vitae error beatae pariatur ratione enim, deserunt impedit dolorem. Unde nobis consequuntur laudantium impedit totam, id itaque ad sunt explicabo exercitationem!
                Minus earum et, quam quis delectus aperiam quasi veritatis quisquam eligendi, consequatur temporibus obcaecati, dicta a beatae numquam! Quasi corrupti voluptate inventore blanditiis amet alias commodi esse? Possimus, assumenda deserunt.
                Dignissimos consequuntur quia provident vero fuga enim repudiandae porro accusamus cum, neque quidem dicta voluptas ullam possimus earum, doloribus, atque nesciunt dolores obcaecati dolore sequi velit itaque! Hic, deserunt itaque.
                Maxime illum, quae saepe molestias dolorem commodi repudiandae delectus quod consequuntur dicta optio cumque voluptas quisquam nesciunt, eveniet adipisci harum dolore atque magnam earum? Labore eligendi id commodi numquam voluptate.
                Provident dolorem, molestiae repellat doloremque quia, optio consectetur quibusdam quisquam ad accusantium perspiciatis, vitae id excepturi asperiores minima magni velit. Quasi voluptatem eius veritatis quibusdam molestiae vel temporibus assumenda consequuntur.
                Deleniti corrupti repellendus atque harum numquam perferendis sunt exercitationem nostrum neque facere. Pariatur, accusamus minima possimus non natus sunt voluptatibus praesentium vero ducimus sequi cum eaque maiores exercitationem id. Sunt.
                Quam sed deleniti et, est eaque reiciendis quo aliquam modi? Temporibus, natus repellat. Nobis quis laudantium perspiciatis, omnis nisi eum voluptatibus deleniti recusandae non maxime repellat. Cumque fuga maiores est?
                Harum, est quod nobis ad voluptatem alias sequi, repudiandae laborum odio voluptatibus, assumenda necessitatibus blanditiis vero labore nesciunt. Excepturi qui quam ipsa natus culpa eaque error fugit aperiam aspernatur quia!
                Ex architecto delectus debitis veniam ullam, omnis laboriosam odit commodi atque quae alias nobis, dignissimos autem quibusdam vel ea illum, asperiores ipsum. Voluptatum, quod. Placeat explicabo eum quisquam ratione nam.</div>

        )
    }
}
