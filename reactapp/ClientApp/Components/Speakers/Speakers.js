import React, { Component } from "react";
import SpeakersHeader from "./SpeakersHeader";
import SpeakerList from "./SpeakerList";
//import axios from 'axios';

class Speakers extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {

  //     const url = '/data/speakers.json';
  //     //const url = '/api/speaker';

  //     console.log('Speakers:cdm');
  //     axios.get(url)
  //         .then((result)=> {
  //             console.log('api/speaker then called');
  //             this.setState({
  //                 appData: result.data,
  //                 isLoading: false
  //             });
  //         })
  //         .catch(error => {
  //             if (error.response) {
  //                 console.log(error.responderEnd);
  //             }
  //         });
  // }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {/* <SpeakersHeader/> */}
        {/* <SpeakerList speakers={this.state.appData}/> */}
        {/*<ShowJsonSpeakers/>*/}
        <div></div>
      </div>
    );
  }
}

//Speakers.propTypes = {};
Speakers.defaultProps = {};

export default Speakers;
