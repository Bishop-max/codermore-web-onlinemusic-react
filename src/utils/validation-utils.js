export function FormValidate(phoneRef,pwdRef) {

    if(((phoneRef.current && phoneRef.current.tagName) === "INPUT") && ((pwdRef.current && pwdRef.current.tagName) === "INPUT") ){
      const userPhone = phoneRef.current.value
      const userPwd = pwdRef.current.value
      console.log(phoneRef);
      console.log(phoneRef.current.value,pwdRef.current.value);

      const isCurrentPhone = /^1(3|4|5|6|7|8|9)\d{9}$/.test(userPhone)
      const isCurrentPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test(userPwd)

      if(!isCurrentPhone){
        alert("请输入正确的手机号码！")
        phoneRef.current.value = ""
        return false
      }else if(!isCurrentPwd){
        alert("密码长度必须是6-20位且包含 数字和英文！")
        pwdRef.current.value = ""
        return false
      }
    }

    return true
}