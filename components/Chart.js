import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, CardHeader, CardText } from 'material-ui/Card'
import Highcharts from 'react-highcharts'
import  heatmap from 'highcharts/modules/heatmap'
import exporting from 'highcharts/modules/exporting'

import Subjects from 'participant/dnd/Subjects'
import EvaluationAxis from 'participant/dnd/EvaluationAxis'

heatmap(Highcharts.Highcharts)
exporting(Highcharts.Highcharts)

const mapStateToProps = ({ answered, res }) => ({answered, res })

const subjectsAxis = new Array()
for(let i=0; i<Subjects.length; i++){
	subjectsAxis[i] = Subjects[i][1]
}



class Chart extends Component {
	constructor(props) {
		super(props)
		const { expanded } = this.props
		this.makeData = this.makeData.bind(this)
		this.state = { expanded: expanded }
	}

	handleExpandChange(expanded) {
		this.setState({ expanded: expanded })
	}

	makeData(){
		const { answered, res } = this.props
		let count = 0;
		let chartData = new Array()
		let axisPoint = new Array()
		let x=0
		let y=0
		let addData = 0

		for(let i=0; i<answered; i++){
			axisPoint[i]=new Array(EvaluationAxis.length)
			for(let d=0; d<EvaluationAxis.length; d++){
				for(let j=0; j<EvaluationAxis.length; j++){
					if(EvaluationAxis[d] == res[i][EvaluationAxis.length][j]){
						axisPoint[i][d] = EvaluationAxis.length - j
					}
				}
			}
		}
		
		for(let i=0; i<answered; i++){
			for(let d=0; d<EvaluationAxis.length; d++){
				for(let j=0; j<Subjects.length; j++){
					for(let g=0; g<Subjects.length; g++){
						if(subjectsAxis[j] == res[i][d][g]){
							chartData[addData] = new Array(3)
							chartData[addData][0] = x 
							chartData[addData][1] = y
							chartData[addData][2] = (Subjects.length - g)*axisPoint[i][d]
							x = (y+1==Subjects.length)? x+1 : x 
							y = (y+1==Subjects.length)? 0 : y+1
							addData++
						}
					}
				}
			}
		}

		console.log("ideyo!!!!:%s",JSON.stringify(chartData))
		return(chartData)
	}

	render() {
		return (
			<div>
			<Card
			expanded={this.state.expanded}
			onExpandChange={this.handleExpandChange.bind(this)}
			>
			<CardHeader
			title={"実験結果"}
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
						text: 'Students'
					},

					xAxis: {
						categories: EvaluationAxis
					},

					yAxis: {
						categories: subjectsAxis,
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
						data: this.makeData(),

						dataLabels: {
							enabled: true,
							color: '#000000'
						}
					}]
				}
		} />


			<Highcharts config={
				{

					chart: {
						type: 'heatmap',
						marginTop: 40,
						marginBottom: 80,
						plotBorderWidth: 1
					},


					title: {
						text: 'Teacher'
					},

					xAxis: {
						categories: EvaluationAxis
					},

					yAxis: {
						categories: subjectsAxis,
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
						data: [[0,0,90],
								[0,1,50],
								[0,2,30],
								[1,0,50],
								[1,1,90],
								[1,2,20],
								[2,0,40],
								[2,1,80],
								[2,2,30],
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
			</div>
		)
	}
}

export default connect(mapStateToProps)(Chart)


