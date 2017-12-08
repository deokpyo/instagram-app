import React, { Component } from "react";
import superagent from "superagent";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      feed: []
    };
  }

  updateUsername(event) {
    this.setState({
      username: event.target.value
    });
  }

  fetchFeed() {
    superagent
      .get("/instagram/" + this.state.username)
      .query(null)
      .set("Accept", "application/json")
      .end((err, response) => {
        if (err) {
          console.log("Error: " + err.message);
          return;
        }
        this.setState({
          feed: response.body.feed
        });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h4>Enter Instagram Username</h4>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              onChange={this.updateUsername.bind(this)}
            />
            <button
              style={{ marginTop: 10 }}
              className="btn btn-info"
              onClick={this.fetchFeed.bind(this)}
            >
              Get Feed
            </button>
          </div>
          <div className="col-md-9">
            <h4>Instagram Feed</h4>
            <div className="row">
              {this.state.feed.map((post, i) => {
                return (
                  <div className="col-md-4" key={i}>
                    <img style={{ width: 100 + "%" }} src={post.image} />
                    <br/>
                    <small style={{fontSize:10}}>{post.caption}</small>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
