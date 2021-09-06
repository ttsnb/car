<template>
  <div>
      <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
      >
        Remember me
      </a-checkbox>
      <a-button type="primary" html-type="submit" class="login-form-button">
        Log in
      </a-button>
    </a-form-item>
  </a-form>
  </div>
</template>

<script>
import { send ,login} from '../../network/home';
export default {
    name:'login',
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: 'normal_login' });
    },
    methods: {
        handleSubmit(e) {
        e.preventDefault();
        this.form.validateFields((err, values) => {
            if (!err) {
            // console.log('Received values of form: ', values);
            // if(values.userName==='tts'&& values.password==='123')
            //     // alert('')
            //     this.open()
            let data={
              username: '',
              password: ''
            }
            data.username=values.userName
            data.password=values.password
            console.log(data)
            login(data).then(res=>{
              // console.log(res);
              this.open()
            })
            // send(values).then((res) => {
            //       console.log(res);
            //       if(res.data.code==0)
            //         {this.open()}
            //       })
            }
        });
        },
        open(){
            this.$bus.$emit('open')
        }
    },
    created(){
        
    }
}
</script>

<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
</style>