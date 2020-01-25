console.log('...opening /src/components/DBFront/AddProd.js');

import React, {
  Component
} from 'react';

import axios from 'axios';

class AddProd extends Component {

  constructor(props) {
    super(props);

    //binding
    this.onChangeArtist = this.onChangeArtist.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeFrontCover = this.onChangeFrontCover.bind(this);
    this.onChangeBackCover = this.onChangeBackCover.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
      
    this.state = {

      artist: '',
      title: '',
      year: '',
      price: '',
      frontcover: '',
      backcover: ''

    }
  };

    componentDidMount(){
        console.log(' /src/components/DBFront/AddProd.js/ componentDidMount()')
	this.setState({
	    products:['test product'], //products is the array of data coming from mongoDB
	    product:'test product'
	});
    };
    
  onChangeArtist(e) {
    this.setState({
      artist: e.target.value
    });
  };

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  };

  onChangeYear(e) {
    this.setState({
      year: e.target.value
    });
  };

  onChangePrice(e) {
    this.setState({
      price: e.target.value
    });
  };

  onChangeFrontCover(e) {
    this.setState({
      frontcover: e.target.value
    });
  };

  onChangeBackCover(e) {
    this.setState({
      backcover: e.target.value
    });
  };

  onSubmit(e) {
    e.preventDefault();
    const product = {
      artist: this.state.artist,
      title: this.state.title,
      year: this.state.year,
      price: this.state.price,
      frontcover: this.state.frontcover,
      backcover: this.state.backcover
    };

      console.log('product:' ,  product);

      axios.post('http://localhost:3000/products/createdata/' , product)
          .then (res => {console.log('res.data' , res.data)})
          .catch (err =>{console.log('error: ' , err)});  

      //window.location = '/';
  };

  render() {
    return (
        <div>
          <div>
            <p> Add product component </p>
          </div>
          <h4>add new item</h4>
          <form onSubmit={this.onSubmit}>

            <div>
              <label>artist: </label>
              <input
                type="text"
                required
                value={this.state.artist}
                onChange={this.onChangeArtist}>
              </input>
            </div>

            <div>
              <label>title: </label>
              <input
                type="text"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}>
              </input>
            </div>

            <div>
              <label>year: </label>
              <input
                type="text"
                required
                value={this.state.year}
                onChange={this.onChangeYear}>
              </input>
            </div>

            <div>
              <label>price: </label>
              <input
                type="text"
                required
                value={this.state.price}
                onChange={this.onChangePrice}>
              </input>
            </div>

            <div>
              <label>frontcover: </label>
              <input
                type="text"
                required
                value={this.state.frontcover}
                onChange={this.onChangeFrontCover}>
              </input>
            </div>

            <div>
              <label>backcover: </label>
              <input
                type="text"
                required
                value={this.state.backcover}
                onChange={this.onChangeBackCover}>
              </input>
            </div>
            <div>
              <input name="" type="submit" value="add product"/>
            </div>
          </form>
        </div>
    );
  };
};

export default AddProd;
