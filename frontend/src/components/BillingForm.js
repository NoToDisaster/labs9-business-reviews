import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styled from 'styled-components';
import axios from 'axios';
import { backendLink } from '../assets/config';
import GatedSignInComponent from './GatedSignInComponent';

const StyledBillingForm = styled.div`
  background-color: white;
  .billing-form {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
    padding: 40px;
    max-width: 500px;
  }
  .radio-form {
    padding: 15px;
  }
`;

class BillingForm extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: null
    };
  }

  annualSub = () => {
    this.setState({ amount: 999 });
  };

  monthlySub = () => {
    this.setState({ amount: 99 });
  };

  onToken = async res => {
    if (this.state.amount === 99) {
      const resp = await axios.post(
        `${backendLink}/api/billing/monthly?amount=${this.state.amount}&token=${
          res.id
        }`,
        undefined,
        {
          withCredentials: 'include'
        }
      );
      try {
        alert(
          `${
            resp.data.response.receipt_url
          } is your receipt thanks for buying a monthly subscription`
        );
      } catch (err) {
        alert('payment did not succeed');
      }
    } else if (this.state.amount === 999) {
      const resp = await axios.post(
        `${backendLink}/api/billing/yearly?amount=${this.state.amount}&token=${
          res.id
        }`,
        undefined,
        {
          withCredentials: 'include'
        }
      );
      try {
        alert(
          `${
            resp.data.response.receipt_url
          } is your receipt thanks for buying a yearly subscription`
        );
      } catch (err) {
        alert('payment did not succeed');
      }
    } else return null;
  };

  render() {
    return (
      <GatedSignInComponent>
        <StyledBillingForm>
          <div className="billing-form">
            <h1>Bonafind Subscription</h1>
            <p>
              Here you can choose between a monthly or yearly subscription.
              Without a subscription, you can only read 3 reviews per day. But
              with a subscription you can view as many reviews as you like!
            </p>
            <form className="radio-form">
              <input
                type="radio"
                name="subscription"
                value="yearly"
                onClick={this.annualSub}
              />
              1 Year Subscription - $9.99 <br /> <br />
              <input
                type="radio"
                name="subscription"
                value="monthly"
                onClick={this.monthlySub}
              />
              1 Month Subscription - $0.99 <br />
            </form>
            <StripeCheckout
              amount={this.state.amount}
              name="Bonafind"
              description="Purchase Subscription"
              stripeKey="pk_test_HN5T9K7E0yy6A9fZEqv62psB"
              currency="USD"
              token={res => this.onToken(res)}
            >
              {this.props.children}
            </StripeCheckout>
          </div>
        </StyledBillingForm>
      </GatedSignInComponent>
    );
  }
}

export default BillingForm;
