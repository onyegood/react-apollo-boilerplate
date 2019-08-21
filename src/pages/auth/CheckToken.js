import React, { Component } from "react";
import { graphql } from "react-apollo";
import { checkTokenMutation } from "../../graphql/mutations/auth";

class CheckToken extends Component {
  componentDidMount = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      this.props.history.push("/login");
      return;
    }

    let response;

    try {
      response = await this.props.mutate({
        variables: {
          token
        }
      });
    } catch (error) {
      localStorage.removeItem("token");
      this.props.history.push("/login");
    }
    if (response) {
      const { refreshToken } = response.data;
      localStorage.setItem("token", refreshToken);
      this.props.history.push("/dashboard");
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return <div>loading...</div>;
  }
}

export default graphql(checkTokenMutation)(CheckToken);
