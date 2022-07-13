class Login{
    constructor(form, fields){
        this.form = form
        this.fields = fields
        this.validateonSubmit()
    }
    validateonSubmit(){
        let self = this

        this.form.addEventListner("submit", (e)=>{
            e.preventDefault()
             var error = 0
            self.fields.forEach((field)=>{
                const input = document.querySelector(`#${field}`)
                if(self.validateFields(input) == false){
                    error++
                }
                if(error == 0){
                    localStorage.setItem("auth", 1)
                    this.form.submit()
                }
            })
        })
    }
    validateFields(field){
        if(field.value.trim()==""){
            this.setStatus(field, 
                `${field.previousElementSibling.innerText} cannot be blank`,
                 "error"
            )
            return false
        }else{
            if(field.type == "password"){
                if(field.value < 8){
                    this.setStatus(field, 
                        `${field.previousElementSibling.innerText} must be atleast 8 characters`,
                         "error"
                    )
                    return false
                }
                else{
                    this.setStatus(field, null, "succes")
                    return true
                }
            }else{
                this.setStatus(field, null, "succes")
                return true
            }

        }

    }
    setStatus(field, message, status){
        const errorMessage = field.parentElement.querySelector(".error-message");
        if(status == "success"){
            if(errorMessage){
                errorMessage.innerText = ""
            }
            field.classlist.remove("input-error")
        }
        
        if(status =="error"){
            errorMessage.innerText = message
            field.classList.add("input-error")
        }
    }
    
}
function logIn(){
    var username = document.getElementById("usernsme").value;
    var username = document.getElementById("usernsme").value;
    if(username == "admin" && password == "12345"){
        documents.write("Login Successfully");
    }
    document.write("Login Failed");    
}