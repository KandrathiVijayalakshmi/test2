exports.LoginPage= class LoginPage{

    constructor(page){
        this.page=page
        this.username_textbox=page.geyBylabel('Username')
        this.password_textbox= page.geyBylabel('Password')
        this.login_button=page.getByRole('button',{name: 'login'})
    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async login(username,password){
        await this.username_textbox.fill(username)
        await this.username_textbox.fill(password)
        await this.login_button.click()
        
    }
}