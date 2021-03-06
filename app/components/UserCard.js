var React = require('react');
var Bootstrap = require('react-bootstrap');
var ListGroupItem = Bootstrap.ListGroupItem;
var Col = Bootstrap.Col;
var Row = Bootstrap.Row;
var Image = Bootstrap.Image;
var PropTypes = React.PropTypes;
var Draggable = require('react-draggable');

function UserCard(user){
	var userDescription = user.description.map(function(prop, index){
		return (
			<span key={index}>
				<strong>{prop[0]} :</strong> {prop[1]} {' '}
			</span>
		)
	});
	return (
			<Draggable bounds='body' >
				<ListGroupItem key={user.id}>
					<Row>
						<Col sm={2}>
							<Image src={user.thumbnail_url} circle/>
						</Col>
						<Col sm={10}>
							<h4>{user.fullName}</h4>
							<div>{userDescription}</div>
						</Col>
					</Row>
				</ListGroupItem>
			</Draggable>
	)

}

UserCard.propTypes = {
	thumbnail_url: PropTypes.string.isRequired,
	fullName: PropTypes.string.isRequired,
	description: PropTypes.array.isRequired,
}

module.exports = UserCard;