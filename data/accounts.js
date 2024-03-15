const path = require('path');
const fs = require('fs');

function getDataUser(){
    const filePath = path.join(__dirname, 'dataUsers.json');
	let rawdata = fs.readFileSync(filePath);
	return JSON.parse(rawdata);
}

function getUserByID(userID) {
    const userData = getDataUser();
    return userData.find(user => user.userID === userID);
}

function getIdByUsername(username) {
    const users = getDataUser();
    const user = users.find(user => user.username === username);
    return user ? user.userID : null;
}