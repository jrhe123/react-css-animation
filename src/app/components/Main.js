import React from "react";

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const styles = {
    transition: 'all 0.3s ease-out'
};

export class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity: 1,
            scale: 1,
            rotate: 0,

            slide: false,
            flip: false,

            items: ['I\'m number 1', 'I\'m number 2', 'I\'m number 3'],
            itemNumber: 3
        };
    }

    // # 1
    onHide() {
        this.setState({
            opacity: 0
        });
    }

    onScale() {
        this.setState({
            scale: this.state.scale > 1 ? 1 : 1.3
        });
    }

    onRotate() {
        this.setState({
            rotate: this.state.rotate == 0 ? 360 : 0
        });
    }


    // # 2
    onSlide() {
        this.setState({
            slide: true,
            flip: false
        });
    }

    onFlip() {
        this.setState({
            flip: true,
            slide: false
        });
    }


    // # 3
    onAddItem() {
        this.setState({
            itemNumber: this.state.itemNumber + 1,
            items: this.state.items.concat(['I\m number ' + (this.state.itemNumber + 1)])

        });
    }

    onDeleteItem(id) {
        const newItems = this.state.items.slice();
        newItems.splice(id, 1);
        this.setState({
            items: newItems
        });
    }


    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper orange darken-2">
                        <ul className="left">
                            <li className="active"><a href="#">REACT+CSS TRANSITIONS</a></li>
                            <li><a href="#">ABOUT ME</a></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="s12">

                        </div>
                    </div>

                    <div className="row">
                        <div className="s8 offset-s2 center-align">

                            <div className="card deep-purple z-depth-2"
                                 style={{...styles, opacity: this.state.opacity}}>
                                
                                <div className="card-action">
                                    <a onClick={this.onHide.bind(this)} style={{cursor: 'pointer'}}>HIDE</a>
                                </div>
                            </div>

                            <div className="card deep-purple z-depth-2"
                                 style={{...styles, transform: 'scale(' + this.state.scale + ')'}}>
                                
                                <div className="card-action">
                                    <a onClick={this.onScale.bind(this)} style={{cursor: 'pointer'}}>SCALE</a>
                                </div>
                            </div>

                            <div className="card deep-purple z-depth-2"
                                 style={{...styles, transform: 'rotate(' + this.state.rotate + 'deg)'}}>
                                
                                <div className="card-action">
                                    <a onClick={this.onRotate.bind(this)} style={{cursor: 'pointer'}}>ROTATE</a>
                                </div>
                            </div>


                            <div className={"card deep-purple z-depth-2 " + (this.state.slide ? 'slide' : '') + (this.state.flip ? 'flip' : '')}>
                                <div className="card-action">
                                    <a onClick={this.onFlip.bind(this)} style={{cursor: 'pointer'}}>FLIP</a>
                                    <a onClick={this.onSlide.bind(this)} style={{cursor: 'pointer'}}>SLIDE</a>
                                </div>
                            </div>

                            <br/><br/>
                                <a className="waves-effect waves-light btn" onClick={this.onAddItem.bind(this)}>Add Item</a>
                                <p>Click Item to Delete</p>
                                <ul className="collection">
                                    <ReactCSSTransitionGroup
                                        transitionName="fade"
                                        transitionEnterTimeout={300}
                                        transitionLeaveTimeout={300}
                                        transitionAppear={true}
                                        transitionAppearTimeout={1000}>
                                        {this.state.items.map((item, i) => {
                                            return (
                                                <li key={item} className="collection-item"
                                                    onClick={this.onDeleteItem.bind(this, i)}
                                                    style={{cursor: 'pointer'}}>{item}</li>
                                            );
                                        })}
                                    </ReactCSSTransitionGroup>
                                </ul>

                            <br/><br/>
                            <a className="waves-effect waves-light btn" onClick={this.onAddItem.bind(this)}>Add Item</a>
                            <p>Click Item to Delete</p>
                            <ul className="collection">
                                <ReactCSSTransitionGroup
                                    transitionName="flip"
                                    transitionEnterTimeout={300}
                                    transitionLeaveTimeout={300}>
                                    {this.state.items.map((item, i) => {
                                        return (
                                            <li key={item}
                                                className="collection-item"
                                                onClick={this.onDeleteItem.bind(this, i)}
                                                style={{cursor: 'pointer'}}>{item}</li>
                                        );
                                    })}
                                </ReactCSSTransitionGroup>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

