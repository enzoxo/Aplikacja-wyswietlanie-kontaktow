
var contacts = [
	{
		id: 1,
		firstName: 'Jan',
		lastName: 'Nowak',
		email: 'jan.nowak@example.com',
	},

	{
		id: 2,
		firstName: 'Adam',
		seconsName: 'Kowalski',
		email: 'jk.kowalski@example.com',
	},

	{
		id: 3,
		firstName: 'Kamil',
		seconsName: 'Baszak',
		email: 'kbaszak@example.com',
		}
];

var contactForm = {
	firstName: '',
	lastName: '',
	email: ''
};




var App = React.createClass({
	render: function() {
		return (
			React.createElement('div', {className: 'App'},
				React.createElement(ContactForm, {contact: contactForm}),
				React.createElement(Contacts, {item: contacts}, {})				

			)
		);
	}
});