import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import SingleBusiness from './SingleBusiness'


export const PopularBusinessesStyles = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  width: 80%;
  height: auto;
  h1 {
    width: 100%;
  }
`;

export const CardStyle = styled.div`
  margin-left: 15px;
  img {
    max-width: 200px;
    height: 200px;
  }
`;


class PopularBusinesses extends Component {
  constructor() {
    super();
    this.state = {
      businesses: [],
      isOpen: false
    }
  }
  componentDidMount() {
    axios
      .get(`http://bonafind.herokuapp.com/api/business`)
      .then(response =>{
        //save response data in a new variable
        const data = [...response.data]
        //sorts and slices correct number of businesses
        const sortedAndSliced = data.sort((a, b) => a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0).slice(0,4);
        //sets sorted array to this.state.businesses
        this.setState(() => ({ businesses: sortedAndSliced }));
      })
      .catch(err => {
        console.error('Error:', err)
    })
  }
  toggleModal = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (      
      <PopularBusinessesStyles>
        <h1>Popular Businesses</h1>
        {this.state.businesses.map(({id, name, rating, image}) => (
          <CardStyle key={id} onClick={this.toggleModal} >
            <img src={image} alt="reviewed business"/>
            <p>{name}</p>
            <h3>{rating}</h3>
          </CardStyle>
        ))}
        {this.state.isOpen ? <SingleBusiness toggleModal={this.toggleModal} /> : null}     
      </PopularBusinessesStyles>
    )
  }
}
export default PopularBusinesses;