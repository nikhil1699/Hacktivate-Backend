module.exports = {
	
	
	enableCors: true,
	mailer: {
		email: process.env.MAIL_ID,
		pass: process.env.MAIL_PASS,
		service: 'Gmail',
		from: 'Team HackOverflow',
		subject: 'Registration Confirmation',
		text: 'Hello there!\n\nYour registration for HackOverflow has been confirmed and we hope to see you there!\n\nCheers\nTeam HackOverflow'
	}
}