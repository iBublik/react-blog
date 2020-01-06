import React, { Component } from 'react';
import PropTypes from 'prop-types';
import c3 from 'c3';
import { Container } from 'reactstrap';

class PieChart extends Component {
  componentDidMount() {
    this.chart = c3.generate({
      bindto: this.chartContainer,
      data: {
        type: 'pie',
        columns: this.props.columns
      }
    });
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  componentWillReceiveProps(newProps) {
    this.chart.load({
      columns: newProps.columns
    });
  }

  render() {
    return (
      <Container className='mt-3'>
        <div ref={chartDiv => this.chartContainer = chartDiv } />
      </Container>
    );
  }
}

PieChart.propTypes = {
  columns: PropTypes.array.isRequired
};

export default PieChart;
