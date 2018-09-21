import React, { Component } from 'react';
import Table from './Table';
import AddItem from './AddItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <section>
              <div className="header">
                  <div className="logo">
                      <AddItem/>
                  </div>
              </div>
          </section>
          <section>
              <Table />
          </section>
      </div>
    );
  }
}

export default App;
