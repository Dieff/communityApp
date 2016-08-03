
class NameLister extends Component {
	constructor(props){
		super(props);
		this.state = {names: ['bob', 'jerry', 'tom', 'jane']};
	}

	newName(name){
		var changingArray = this.state.names;
		changingArray.push(name);
		this.setState({names : changingArray});
	}

	render() {
		var nameTabs = [];
		for (var a=0;a<this.state.names.length;a++){
			//console.log('name is ' + this.state.names[a])
			nameTabs.push(<Text key={this.state.names[a]+Math.random()}> {this.state.names[a]} </Text>)
		}
		return(
			<View>
			{nameTabs}

			<Text> Add a new name to me list? </Text>
			<TextInput onSubmitEditing={function(event){
				this.newName(event.nativeEvent.text)
			}.bind(this)}/>
			</View>
		)
	}

}
