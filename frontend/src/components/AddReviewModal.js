import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { backendLink } from '../assets/config';

const ModalStyles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(4, 0, 0, 0.7);

  .review__modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 500px;
    padding: 10px;
    background-color: white;
    @media (max-width: 900px) {
      width: 75%;
    }
    @media (max-width: 500px) {
      width: 90%;
    }
    .container {
      margin: 0 auto;
      width: 100%;
      .review__modal--form {
        display: flex;
        width: 100%;
        flex-flow: row wrap;
        align-items: center;
        .review__modal--form--field--title {
          width: 90%;
          height: 20px;
          margin-bottom: 20px;
          padding: 10px;
          font-size: 1.5rem;
        }

        .review__modal--form--field--review {
          width: 90%;
          height: 120px;
          margin-bottom: 20px;
          padding: 10px;
          font-size: 1.2rem;
        }

        .review__modal--form--rating {
          width: 45px;
          font-size: 1.4rem;
          margin: 0 30px;
        }
      }

      .review__modal--buttons {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        @media (max-width: 500px) {
          width: 40%;
        }
        .review__modal--buttons--btn {
          background-color: #eed974;
          height: 40px;
          max-width: 50%;
          margin-right: 20px;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
            0 6px 20px 0 rgba(0, 0, 0, 0.19);
        }
      }
    }
  }
  .rating {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
      width: 100%;
    }
  }
`;
class AddReviewModal extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      body: '',
      rating: 0,
      user: {}
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log('image url yo', this.props.imageURL);
    Axios.post(
      `${backendLink}/api/review`,
      {
        title: this.state.title,
        body: this.state.body,
        rating: this.state.rating,
        business_image: this.props.imageURL,
        business_name: this.props.businessName,
        business_id: this.props.businessId,
        reviewer_id: this.state.user.id,
        gravatar: this.state.user.gravatar
      },
      { withCredentials: 'include' }
    )
      .then(res => {
        if (res.data.message) return alert(res.data.message);
        this.setState({ title: '', body: '', rating: 0 });
      })
      .then(this.props.toggleReviewing)
      .catch(err => console.log('error', err));
    this.props.addBusiness();
  };
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    const res = await Axios.get(`${backendLink}/api/user/me`, {
      withCredentials: 'include'
    });
    if (!res.data.user) return null;
    const [user] = res.data.user;
    this.setState({ user });
  }
  render() {
    return (
      <ModalStyles>
        <div className='review__modal'>
          <div className='container'>
            <h1>{this.props.businessName}</h1>
            <h3>Add a Review</h3>
            <form className='review__modal--form' onSubmit={this.handleSubmit}>
              <label htmlFor='review-title'>Title</label>
              <input
                onChange={this.changeHandler}
                name='title'
                value={this.state.title}
                className='review__modal--form--field--title'
              />
              <label htmlFor='review-body'>Your review</label>
              <textarea
                onChange={this.changeHandler}
                name='body'
                value={this.state.body}
                className='review__modal--form--field--review'
              />
              <div className='rating'>
                <label htmlFor='review__input--rating'>Rating</label>
                <select
                  onChange={this.changeHandler}
                  name='rating'
                  value={this.state.rating}
                  className='review__modal--form--rating'
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option defaultValue='5'>5</option>
                </select>
                <div className='review__modal--buttons'>
                  <button
                    className='review__modal--buttons--btn'
                    onClick={this.handleSubmit}
                  >
                    Submit Review
                  </button>
                  <button
                    className='review__modal--buttons--btn'
                    onClick={this.props.toggleReviewing}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </ModalStyles>
    );
  }
}

export default AddReviewModal;
