import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardHeader, CardText } from 'material-ui/Card'
import Highcharts from 'react-highcharts'
import  heatmap from 'highcharts/modules/heatmap'
import exporting from 'highcharts/modules/exporting'

heatmap(Highcharts.Highcharts)
exporting(Highcharts.Highcharts)

const mapStateToProps = ({ }) => ({ })

class Chart extends Component {
	constructor(props) {
		super(props)
		const { expanded } = this.props
		this.state = { expanded: expanded }
	}

	handleExpandChange(expanded) {
		this.setState({ expanded: expanded })
	}

	render() {
		return (
			<Card
			expanded={this.state.expanded}
			onExpandChange={this.handleExpandChange.bind(this)}
			>
			<CardHeader
			title={"experiment result"}
			actAsExpander={true}
			showExpandableButton={true}
			/>
			<CardText expandable={true}>
			<Highcharts config={
				{

					chart: {
						type: 'heatmap',
						marginTop: 40,
						marginBottom: 80,
						plotBorderWidth: 1
					},


					title: {
						text: 'Sales per employee per weekday'
					},

					xAxis: {
						categories: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
					},

					yAxis: {
						categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
						title: null
					},

					colorAxis: {
						min: 0,
						minColor: '#FFFFFF',
						maxColor: '#00BFFF',
					},

					legend: {
						align: 'right',
						layout: 'vertical',
						margin: 0,
						verticalAlign: 'top',
						y: 25,
						symbolHeight: 280
					},

					tooltip: {
						formatter: function () {
							return '<b>' + this.series.xAxis.categories[this.point.x] + '</b> sold <br><b>' +
								this.point.value + '</b> items on <br><b>' + this.series.yAxis.categories[this.point.y] + '</b>';
						}
					},

					series: [{
						name: 'Sales per employee',
						borderWidth: 1,
						data: [
								[0,0,100],
								[0,1,101],
								[1,0,110],
								[1,1,111],
								[2,0,120],
								[2,1,121]
							  ],

						dataLabels: {
							enabled: true,
							color: '#000000'
						}
					}]
				}
		} />

			</CardText>
			</Card>
		)
	}
}

export default connect(mapStateToProps)(Chart)

