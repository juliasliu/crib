import {observable, computed, map, toJS, action} from 'mobx';
import axios from 'axios'
import { API_ROOT } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';

class Users {
	@observable user = null;
	@observable id = null;
	@observable isLoggedIn = false;
	@observable busy = false;
	@observable errors = null;
	@observable success = null;

	@action login = function(id, email, password) {
		this.busy = true;
		let that = this;	// have to reassign because 'this' changes scope within the promise.then

		let user = {
				id: id,
				email: email,
				password: password,
		}
    console.log(user);

		return new Promise(function(resolve, reject) {
			axios.post(API_ROOT + '/login', {user}, {withCredentials: true})
			.then(response => {
				if (response.data.logged_in) {
					console.log("LOGGED IN")
					that.handleSuccess()
					that.handleLogin(response.data.user)
					resolve(response.data.user)
				} else {
					that.handleErrors(response.data.errors)
					that.handleLogout()
					reject(response.data.errors);
				}
			})
			.catch(errors => {
				AsyncStorage.clear();
				that.handleLogout();
				console.log('api errors:', errors)
			})
		})
	}

	@action logout = function() {
		this.busy = true;
		let that = this;	// have to reassign because 'this' changes scope within the promise.then

		return new Promise(function(resolve, reject) {
			axios.delete(API_ROOT + '/logout', {withCredentials: true})
			.then(response => {
				that.handleSuccess()
				that.handleLogout()
				resolve(response)
			})
			.catch(errors => {
				that.handleErrors(errors)
				console.log('api errors:', errors)
				reject(errors);
			})
		})
	}

	@action register = function(username, name, email, password, house_code) {
		this.busy = true;
		let that = this;	// have to reassign because 'this' changes scope within the promise.then

		let user = {
				email: email,
				name: name,
				username: username,
				password: password,
				house_code: house_code,
		}
    console.log(user);

		return new Promise(function(resolve, reject) {
			// validate password confirmation
			axios.post(API_ROOT + '/users', {user}, {withCredentials: true})
			.then(response => {
        console.log(response.data.user);
				if (response.data.status === 'created') {
					that.handleSuccess()
					that.handleLogin(response.data.user)
					resolve(response.data.user)
				} else {
					that.handleErrors(response.data.errors)
					that.handleLogout()
					reject(response.data.errors)
				}
			})
			.catch(errors => {
				that.handleErrors(errors)
				console.log('api errors:', errors)
				reject(errors);
			})
		})
	}

	@action async loginStatus() {
		this.isLoggedIn = false;
		console.log("check log in")

		try {
			const user_id = await AsyncStorage.getItem('@user_id')
			if (user_id) {
				this.login(user_id);
			} else {
				this.handleLogout();
			}
		} catch(errors) {
			this.handleLogout()
			console.log('async storage errors:', errors)
		}
	}

	handleSuccess() {
		this.errors = null;
		this.success = null;
		this.busy = false
	}

	handleErrors(errors) {
		this.errors = errors
		this.success = null;
		this.busy = false
    console.log(errors);
	}

	handleLogin(user) {
		this.user = user;
		this.id = user.id;
		this.isLoggedIn = true;
		this.storeLoginToken(user.id);
	}

	async storeLoginToken(user_id) {
		console.log("storing login token")
		try {
			await AsyncStorage.setItem('@user_id', JSON.stringify(user_id))
		} catch (errors) {
			// saving error
			console.log('async storage errors:', errors)
		}
	}

	handleLogout() {
		this.user = null;
		this.id = null;
		this.isLoggedIn = false;
		this.removeLoginToken();
	}

	async removeLoginToken() {
		try {
			await AsyncStorage.removeItem('@user_id')
		} catch(errors) {
			// remove error
			console.log('async storage errors:', errors)
		}
		console.log('Done.')
	}
}

const users = new Users();
export default users;
